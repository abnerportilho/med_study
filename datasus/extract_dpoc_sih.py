#!/usr/bin/env python3
"""
DATASUS SIH-RD — Extrator de internações e óbitos por DPOC (CID-10 J44)
========================================================================
Período  : Janeiro/2015 a Dezembro/2024
UFs      : Todas as 27 unidades federativas do Brasil
Fonte    : ftp://ftp.datasus.gov.br/dissemin/publicos/SIHSUS/200801_/Dados/
Padrão   : RD<UF><AA><MM>.dbc   (ex.: RDSP2401.dbc = SP, 2024, jan)

Saída CSV
---------
UF | ANO | MES | N_INTERNACOES_J44 | N_OBITOS_INTRAHOSP_J44 | LETALIDADE_HOSP_PCT

Dependências
------------
    pip install pyreaddbc dbfread pandas

Uso
---
    python extract_dpoc_sih.py                    # processa tudo
    python extract_dpoc_sih.py --uf SP RJ MG      # apenas essas UFs
    python extract_dpoc_sih.py --ano-inicio 2020  # a partir de 2020
    python extract_dpoc_sih.py --no-cache         # ignora cache local
"""

from __future__ import annotations

import argparse
import csv
import ftplib
import logging
import os
import sys
import tempfile
import time
from pathlib import Path
from typing import Optional

import pandas as pd
from dbfread import DBF
from pyreaddbc import dbc2dbf

# ── Configuração de log ────────────────────────────────────────────────────────

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.StreamHandler(sys.stdout),
        logging.FileHandler("dpoc_extract.log", encoding="utf-8"),
    ],
)
log = logging.getLogger(__name__)

# ── Constantes ─────────────────────────────────────────────────────────────────

ALL_UFS: list[str] = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO",
    "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR",
    "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO",
]

FTP_HOST = "ftp.datasus.gov.br"
FTP_DIR  = "/dissemin/publicos/SIHSUS/200801_/Dados"

OUTPUT_CSV   = "dpoc_sih_rd_2015_2024.csv"
CACHE_DIR    = Path("dbc_cache")
MAX_RETRIES  = 4


# ── FTP ────────────────────────────────────────────────────────────────────────

def _ftp_filename(uf: str, ano: int, mes: int) -> str:
    yy = str(ano)[-2:]
    mm = f"{mes:02d}"
    return f"RD{uf}{yy}{mm}.dbc"


def download_dbc(uf: str, ano: int, mes: int, cache_dir: Path) -> Optional[Path]:
    """
    Baixa o arquivo DBC do FTP do DATASUS com retry exponencial.
    Retorna o caminho local ou None se o arquivo não existir no servidor.
    """
    filename = _ftp_filename(uf, ano, mes)
    dest = cache_dir / filename

    if dest.exists() and dest.stat().st_size > 0:
        log.debug(f"Cache hit: {filename}")
        return dest

    delay = 2
    for attempt in range(MAX_RETRIES + 1):
        try:
            with ftplib.FTP(FTP_HOST, timeout=60) as ftp:
                ftp.login()
                # Verifica existência sem baixar tudo
                try:
                    size = ftp.size(f"{FTP_DIR}/{filename}")
                except ftplib.error_perm:
                    log.debug(f"Arquivo ausente no FTP: {filename}")
                    return None

                if size is None or size == 0:
                    log.debug(f"Arquivo vazio/inexistente: {filename}")
                    return None

                with open(dest, "wb") as f:
                    ftp.retrbinary(f"RETR {FTP_DIR}/{filename}", f.write)

            log.info(f"  Download OK: {filename} ({dest.stat().st_size:,} bytes)")
            return dest

        except ftplib.error_perm as exc:
            log.warning(f"  FTP 550 — arquivo não disponível: {filename} ({exc})")
            return None
        except Exception as exc:
            if attempt < MAX_RETRIES:
                log.warning(
                    f"  Erro ao baixar {filename} (tentativa {attempt + 1}/{MAX_RETRIES}): "
                    f"{exc}. Aguardando {delay}s…"
                )
                time.sleep(delay)
                delay *= 2
            else:
                log.error(f"  Falha definitiva ao baixar {filename}: {exc}")
                return None

    return None


# ── Leitura DBC ────────────────────────────────────────────────────────────────

def dbc_to_dataframe(dbc_path: Path) -> Optional[pd.DataFrame]:
    """
    Converte DBC → DBF (decompressão blast) → DataFrame.
    Usa pyreaddbc para a decompressão e dbfread para leitura do DBF.
    """
    with tempfile.NamedTemporaryFile(suffix=".dbf", delete=False) as tmp:
        dbf_path = Path(tmp.name)

    try:
        dbc2dbf(str(dbc_path), str(dbf_path))
        table = DBF(str(dbf_path), encoding="iso-8859-1", load=True)
        df = pd.DataFrame(table.records)
        return df
    except Exception as exc:
        log.error(f"  Erro ao ler {dbc_path.name}: {exc}")
        return None
    finally:
        dbf_path.unlink(missing_ok=True)


# ── Filtro J44 ─────────────────────────────────────────────────────────────────

def _find_col(df: pd.DataFrame, candidates: list[str]) -> Optional[str]:
    """Busca o primeiro nome de coluna (case-insensitive) da lista."""
    upper_cols = {c.upper(): c for c in df.columns}
    for cand in candidates:
        if cand.upper() in upper_cols:
            return upper_cols[cand.upper()]
    return None


def filtrar_j44(df: pd.DataFrame) -> tuple[int, int]:
    """
    Conta internações e óbitos por DPOC (J44) no DataFrame.

    Filtra DIAG_PRINC que inicia com 'J44' (inclui J440, J441, J448, J449).
    Conta MORTE == 1 no subconjunto filtrado.

    Retorna
    -------
    (n_internacoes_j44, n_obitos_j44)
    """
    col_diag = _find_col(df, ["DIAG_PRINC", "DIAGPRINC", "DIAG_P"])
    if col_diag is None:
        log.warning(f"  Coluna DIAG_PRINC não encontrada. Colunas: {list(df.columns[:8])}")
        return 0, 0

    mask_j44 = df[col_diag].astype(str).str.upper().str.startswith("J44")
    df_j44 = df.loc[mask_j44]
    n_intern = len(df_j44)

    if n_intern == 0:
        return 0, 0

    col_morte = _find_col(df_j44, ["MORTE"])
    if col_morte is None:
        log.warning("  Coluna MORTE não encontrada.")
        return n_intern, 0

    n_obitos = int(
        pd.to_numeric(df_j44[col_morte], errors="coerce").fillna(0).eq(1).sum()
    )
    return n_intern, n_obitos


# ── Pipeline principal ─────────────────────────────────────────────────────────

def processar_arquivo(
    uf: str, ano: int, mes: int, cache_dir: Path, no_cache: bool
) -> Optional[dict]:
    """Baixa, descomprime, filtra e agrega um arquivo DBC. Retorna dict ou None."""
    dbc_path = download_dbc(uf, ano, mes, cache_dir)
    if dbc_path is None:
        return None

    df = dbc_to_dataframe(dbc_path)

    if no_cache:
        dbc_path.unlink(missing_ok=True)

    if df is None or df.empty:
        return None

    n_intern, n_obitos = filtrar_j44(df)
    letalidade = round(n_obitos / n_intern * 100, 4) if n_intern > 0 else 0.0

    return {
        "UF": uf,
        "ANO": ano,
        "MES": f"{mes:02d}",
        "N_INTERNACOES_J44": n_intern,
        "N_OBITOS_INTRAHOSP_J44": n_obitos,
        "LETALIDADE_HOSP_PCT": letalidade,
    }


def main(argv: list[str] | None = None) -> None:
    parser = argparse.ArgumentParser(
        description="Extrai dados de DPOC (J44) do SIH-RD DATASUS"
    )
    parser.add_argument(
        "--uf",
        nargs="+",
        default=ALL_UFS,
        metavar="UF",
        help="UFs a processar (padrão: todas as 27)",
    )
    parser.add_argument(
        "--ano-inicio",
        type=int,
        default=2015,
        dest="ano_inicio",
        help="Primeiro ano (padrão: 2015)",
    )
    parser.add_argument(
        "--ano-fim",
        type=int,
        default=2024,
        dest="ano_fim",
        help="Último ano incluído (padrão: 2024)",
    )
    parser.add_argument(
        "--saida",
        default=OUTPUT_CSV,
        help=f"Arquivo CSV de saída (padrão: {OUTPUT_CSV})",
    )
    parser.add_argument(
        "--cache-dir",
        default=str(CACHE_DIR),
        dest="cache_dir",
        help=f"Diretório de cache de DBC (padrão: {CACHE_DIR})",
    )
    parser.add_argument(
        "--no-cache",
        action="store_true",
        dest="no_cache",
        help="Remove cada DBC após processar (economiza disco)",
    )
    args = parser.parse_args(argv)

    ufs   = [u.upper() for u in args.uf]
    anos  = range(args.ano_inicio, args.ano_fim + 1)
    meses = range(1, 13)

    cache_dir = Path(args.cache_dir)
    cache_dir.mkdir(parents=True, exist_ok=True)

    total = len(ufs) * len(list(anos)) * 12
    log.info("=" * 64)
    log.info("DATASUS SIH-RD — Extrator DPOC (CID-10 J44)")
    log.info(f"UFs      : {len(ufs)} ({', '.join(ufs)})")
    log.info(f"Período  : {args.ano_inicio}/01 → {args.ano_fim}/12")
    log.info(f"Arquivos : {total:,} no máximo")
    log.info(f"Saída    : {args.saida}")
    log.info(f"Cache    : {cache_dir}  (--no-cache={'sim' if args.no_cache else 'não'})")
    log.info("=" * 64)

    FIELDNAMES = [
        "UF", "ANO", "MES",
        "N_INTERNACOES_J44", "N_OBITOS_INTRAHOSP_J44",
        "LETALIDADE_HOSP_PCT",
    ]

    resultados: list[dict] = []
    processados = 0

    with open(args.saida, "w", newline="", encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=FIELDNAMES)
        writer.writeheader()

        for uf in ufs:
            for ano in anos:
                for mes in meses:
                    processados += 1
                    label = f"{uf} {ano}/{mes:02d}"
                    log.info(f"[{processados:>5}/{total}] {label}")

                    resultado = processar_arquivo(
                        uf, ano, mes, cache_dir, args.no_cache
                    )

                    if resultado:
                        writer.writerow(resultado)
                        csvfile.flush()
                        resultados.append(resultado)
                        log.info(
                            f"          J44: {resultado['N_INTERNACOES_J44']:>6} intern. | "
                            f"{resultado['N_OBITOS_INTRAHOSP_J44']:>5} óbitos | "
                            f"letalidade {resultado['LETALIDADE_HOSP_PCT']:.2f}%"
                        )
                    else:
                        log.warning(f"          Sem dados para {label}")

    # ── Sumário final ──────────────────────────────────────────────────────────
    if resultados:
        df_final = pd.DataFrame(resultados)
        total_intern = df_final["N_INTERNACOES_J44"].sum()
        total_obitos = df_final["N_OBITOS_INTRAHOSP_J44"].sum()
        letal_media  = (
            total_obitos / total_intern * 100 if total_intern > 0 else 0.0
        )
        registros_com_dados = len(df_final)

        log.info("\n" + "=" * 64)
        log.info("SUMÁRIO FINAL")
        log.info(f"  Arquivos processados com dados : {registros_com_dados:>6,}")
        log.info(f"  Arquivos sem dados/ausentes    : {processados - registros_com_dados:>6,}")
        log.info(f"  Total internações J44          : {total_intern:>10,}")
        log.info(f"  Total óbitos intra-hosp. J44  : {total_obitos:>10,}")
        log.info(f"  Letalidade hospitalar média    : {letal_media:>9.2f}%")
        log.info(f"  CSV salvo em                   : {args.saida}")
        log.info("=" * 64)
    else:
        log.warning("Nenhum dado encontrado. Verifique conexão com o FTP.")


if __name__ == "__main__":
    main()
