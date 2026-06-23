# ============================================================
#  DATASUS SIH-RD — DPOC (CID-10 J44) | 2015-2024 | 27 UFs
#  Cole este bloco inteiro numa única célula do Google Colab
# ============================================================

# ── 1. Dependências ──────────────────────────────────────────
import subprocess, sys
subprocess.check_call([sys.executable, "-m", "pip", "install", "-q",
                       "pyreaddbc", "dbfread", "pandas"])

# ── 2. Imports ───────────────────────────────────────────────
import csv, ftplib, logging, tempfile, time
from pathlib import Path
from typing import Optional
import pandas as pd
from dbfread import DBF
from pyreaddbc import dbc2dbf

# ── 3. Parâmetros — edite aqui se quiser ─────────────────────
UFS = [
    "AC","AL","AM","AP","BA","CE","DF","ES","GO",
    "MA","MG","MS","MT","PA","PB","PE","PI","PR",
    "RJ","RN","RO","RR","RS","SC","SE","SP","TO",
]
ANO_INICIO  = 2015
ANO_FIM     = 2024
OUTPUT_CSV  = "dpoc_sih_rd_2015_2024.csv"
CACHE_DIR   = Path("dbc_cache")
FTP_HOST    = "ftp.datasus.gov.br"
FTP_DIR     = "/dissemin/publicos/SIHSUS/200801_/Dados"
MAX_RETRIES = 4

CACHE_DIR.mkdir(exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[logging.StreamHandler(sys.stdout),
              logging.FileHandler("dpoc_extract.log", encoding="utf-8")],
)
log = logging.getLogger(__name__)

# ── 4. Download via FTP ──────────────────────────────────────
def download_dbc(uf: str, ano: int, mes: int) -> Optional[Path]:
    filename = f"RD{uf}{str(ano)[-2:]}{mes:02d}.dbc"
    dest = CACHE_DIR / filename
    if dest.exists() and dest.stat().st_size > 0:
        return dest
    delay = 2
    for attempt in range(MAX_RETRIES + 1):
        try:
            with ftplib.FTP(FTP_HOST, timeout=60) as ftp:
                ftp.login()
                try:
                    size = ftp.size(f"{FTP_DIR}/{filename}")
                except ftplib.error_perm:
                    return None
                if not size:
                    return None
                with open(dest, "wb") as f:
                    ftp.retrbinary(f"RETR {FTP_DIR}/{filename}", f.write)
            log.info(f"  Download OK: {filename} ({dest.stat().st_size:,} bytes)")
            return dest
        except ftplib.error_perm:
            return None
        except Exception as exc:
            if attempt < MAX_RETRIES:
                log.warning(f"  Tentativa {attempt+1}/{MAX_RETRIES}: {exc} — aguarda {delay}s")
                time.sleep(delay); delay *= 2
            else:
                log.error(f"  Falha: {filename}: {exc}")
                return None

# ── 5. DBC → DataFrame ───────────────────────────────────────
def dbc_to_df(dbc_path: Path) -> Optional[pd.DataFrame]:
    with tempfile.NamedTemporaryFile(suffix=".dbf", delete=False) as t:
        dbf_path = Path(t.name)
    try:
        dbc2dbf(str(dbc_path), str(dbf_path))
        df = pd.DataFrame(DBF(str(dbf_path), encoding="iso-8859-1", load=True).records)
        return df
    except Exception as exc:
        log.error(f"  Erro ao ler {dbc_path.name}: {exc}")
        return None
    finally:
        dbf_path.unlink(missing_ok=True)

# ── 6. Filtro J44 + contagem ─────────────────────────────────
def filtrar_j44(df: pd.DataFrame):
    cols = {c.upper(): c for c in df.columns}
    col_diag  = cols.get("DIAG_PRINC") or cols.get("DIAGPRINC")
    col_morte = cols.get("MORTE")
    if not col_diag:
        return 0, 0
    mask   = df[col_diag].astype(str).str.upper().str.startswith("J44")
    df_j44 = df.loc[mask]
    n_int  = len(df_j44)
    if n_int == 0:
        return 0, 0
    n_obt = 0
    if col_morte:
        n_obt = int(pd.to_numeric(df_j44[col_morte], errors="coerce").fillna(0).eq(1).sum())
    return n_int, n_obt

# ── 7. Pipeline principal ────────────────────────────────────
anos  = range(ANO_INICIO, ANO_FIM + 1)
meses = range(1, 13)
total = len(UFS) * len(list(anos)) * 12

log.info("=" * 60)
log.info("DATASUS SIH-RD — Extrator DPOC (CID-10 J44)")
log.info(f"UFs: {len(UFS)} | Período: {ANO_INICIO}–{ANO_FIM} | Arquivos: {total:,}")
log.info("=" * 60)

FIELDS = ["UF","ANO","MES","N_INTERNACOES_J44","N_OBITOS_INTRAHOSP_J44","LETALIDADE_HOSP_PCT"]
resultados = []
processados = 0

with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=FIELDS)
    writer.writeheader()

    for uf in UFS:
        for ano in anos:
            for mes in meses:
                processados += 1
                log.info(f"[{processados:>5}/{total}] {uf} {ano}/{mes:02d}")

                dbc = download_dbc(uf, ano, mes)
                if dbc is None:
                    log.warning(f"  Sem arquivo para {uf} {ano}/{mes:02d}")
                    continue

                df = dbc_to_df(dbc)
                if df is None or df.empty:
                    continue

                n_int, n_obt = filtrar_j44(df)
                letal = round(n_obt / n_int * 100, 4) if n_int else 0.0
                row = {"UF": uf, "ANO": ano, "MES": f"{mes:02d}",
                       "N_INTERNACOES_J44": n_int,
                       "N_OBITOS_INTRAHOSP_J44": n_obt,
                       "LETALIDADE_HOSP_PCT": letal}
                writer.writerow(row)
                f.flush()
                resultados.append(row)
                log.info(f"  J44: {n_int:>6} intern. | {n_obt:>5} óbitos | {letal:.2f}%")

# ── 8. Sumário ───────────────────────────────────────────────
if resultados:
    df_final = pd.DataFrame(resultados)
    tot_int = df_final["N_INTERNACOES_J44"].sum()
    tot_obt = df_final["N_OBITOS_INTRAHOSP_J44"].sum()
    letal_m = tot_obt / tot_int * 100 if tot_int else 0
    log.info("\n" + "=" * 60)
    log.info(f"Total internações J44 : {tot_int:,}")
    log.info(f"Total óbitos J44      : {tot_obt:,}")
    log.info(f"Letalidade média      : {letal_m:.2f}%")
    log.info(f"CSV salvo em          : {OUTPUT_CSV}")
    log.info("=" * 60)
    print(df_final.head(10).to_string(index=False))

# ── 9. Download do CSV (Colab) ───────────────────────────────
try:
    from google.colab import files
    files.download(OUTPUT_CSV)
except ImportError:
    print(f"\nArquivo salvo localmente em: {OUTPUT_CSV}")
