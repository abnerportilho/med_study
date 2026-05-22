import React from 'react';
import { Activity, AlertCircle, Info, TrendingUp, Users, Zap, ShieldAlert } from 'lucide-react';

export default function IraPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. CONCEITO E DEFINIÇÃO (KDIGO 2012) */}
      <section id="definition">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Info size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Conceito e Definição</h2>
        </div>

        <div className="card p-6 border-white/10 bg-slate-900 text-white mb-6 shadow-2xl">
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            A <strong>Injúria Renal Aguda (IRA)</strong> é a redução abrupta da função renal em até <strong>7 dias</strong>, caracterizada por:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[10px] font-bold text-brand-blue uppercase mb-2">Critério de Creatinina</p>
              <p className="text-xs">Aumento da creatinina sérica em <strong>≥ 0,3 mg/dL</strong> em 48 horas OU <strong>≥ 1,5x</strong> o valor basal nos últimos 7 dias.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[10px] font-bold text-emerald-400 uppercase mb-2">Critério de Diurese</p>
              <p className="text-xs">Redução da diurese para <strong>{"<"} 0,5 mL/kg/h</strong> por <strong>≥ 6 horas</strong> consecutivas.</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <p className="text-[10px] text-blue-200 italic">
              *Nota: O termo "lesão" (injury) substituiu "falência" (failure) para englobar desde pequenas elevações até anúria. A IRA é um espectro clínico.
            </p>
          </div>
        </div>

        {/* EPIDEMIOLOGIA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Epidemiologia e Impacto</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-2">População</th>
                    <th className="pb-2">Incidência</th>
                    <th className="pb-2">Mortalidade (IRA)</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">Comunidade</td>
                    <td className="py-2">0,4 – 0,9%</td>
                    <td className="py-2">—</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">Hospitalizados</td>
                    <td className="py-2">4,9 – 7,2%</td>
                    <td className="py-2">—</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">UTI</td>
                    <td className="py-2">20 – 40%</td>
                    <td className="py-2 text-rose-400 font-black">70 – 80%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Por que a incidência aumenta?</h4>
            <ul className="text-[10px] text-slate-300 space-y-2">
              <li>• Envelhecimento populacional e mais comorbidades (DM, HAS, ICC).</li>
              <li>• Maior uso de drogas nefrotóxicas (Aminoglicosídeos, AINEs, Contraste).</li>
              <li>• Procedimentos invasivos e cirurgias de alto risco.</li>
              <li>• <strong>Consequência:</strong> Aumenta risco de DRC e eventos cardiovasculares.</li>
            </ul>
          </div>
        </div>

        {/* CONCEITOS RELACIONADOS */}
        <div className="card p-5 border-white/10 bg-slate-900 text-white mb-6">
          <h4 className="font-bold text-brand-blue text-sm mb-4">Espectro das Doenças Renais (Slide 18)</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-bold text-blue-400 uppercase mb-1">IRA (AKI)</p>
              <p className="text-[10px] text-slate-300">Lesão aguda com critérios de Cr/Diurese em até 7 dias.</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-bold text-emerald-400 uppercase mb-1">AKD (Acute Kidney Disease)</p>
              <p className="text-[10px] text-slate-300">Lesão ou redução de função por <strong>{"<"} 3 meses</strong>. Inclui IRA e lesões subclínicas.</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-bold text-amber-400 uppercase mb-1">DRC (CKD)</p>
              <p className="text-[10px] text-slate-300">Alteração estrutural ou funcional por <strong>≥ 3 meses</strong>.</p>
            </div>
          </div>
        </div>

        {/* FATORES DE RISCO (SUMÁRIO) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-rose-400 text-sm mb-4 flex items-center gap-2">
              <Zap size={16} />
              Exposições (Gatilhos)
            </h4>
            <ul className="text-[10px] text-slate-300 space-y-1">
              <li>• <strong>Sepse:</strong> Principal causa na UTI.</li>
              <li>• <strong>Choque:</strong> Hipovolêmico, Distributivo, Cardiogênico.</li>
              <li>• <strong>Cirurgias:</strong> Cardíaca (CEC) e Grande Porte.</li>
              <li>• <strong>Nefrotóxicos:</strong> Aminoglicosídeos, Contraste, AINEs.</li>
            </ul>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-blue-400 text-sm mb-4 flex items-center gap-2">
              <ShieldAlert size={16} />
              Susceptibilidades
            </h4>
            <ul className="text-[10px] text-slate-300 space-y-1">
              <li>• <strong>DRC Prévia:</strong> Principal fator de risco.</li>
              <li>• <strong>Idade:</strong> Idosos (envelhecimento renal).</li>
              <li>• <strong>Comorbidades:</strong> DM, HAS, IC, Cirrose.</li>
              <li>• <strong>Volemia:</strong> Depleção de volume prévia.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. EQUILÍBRIO ÁCIDO-BASE */}
      <section id="acid-base">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Equilíbrio Ácido-Base</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Mecanismos de Compensação</h4>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Sistema Tampão</p>
                <p className="text-[10px] text-slate-300">Hemoglobina, Proteínas, HCO3- / CO2. Ação <strong>Instantânea</strong>.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Sistema Ventilatório</p>
                <p className="text-[10px] text-slate-300">Ajuste do CO2 via frequência respiratória. Ação em <strong>Minutos</strong>.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Sistema Renal</p>
                <p className="text-[10px] text-slate-300">Excreção de H+ e reabsorção de Bicarbonato. Ação em <strong>Horas a Dias</strong>.</p>
              </div>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Gasometria: Arterial vs Venosa</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-2">Parâmetro</th>
                    <th className="pb-2">Arterial</th>
                    <th className="pb-2">Venosa</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">pH</td>
                    <td className="py-2">7,35 - 7,45</td>
                    <td className="py-2">0,05 unidade menor</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">pCO2</td>
                    <td className="py-2">35 - 45 mmHg</td>
                    <td className="py-2">6 mmHg maior</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">HCO3-</td>
                    <td className="py-2">22 - 26 mEq/L</td>
                    <td className="py-2">22 - 26 mEq/L</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">Sat O2</td>
                    <td className="py-2">93,5 - 98,1%</td>
                    <td className="py-2">65 - 85%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CLASSIFICAÇÃO ETIOLÓGICA E FISIOPATOLOGIA */}
      <section id="etiology">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Fisiopatologia por Categoria</h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* PRÉ-RENAL */}
          <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-lg">
            <div className="bg-blue-600 p-3 text-white font-black text-[10px] uppercase tracking-widest">1. IRA PRÉ-RENAL (Hipoperfusão sem lesão parenquimatosa)</div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-bold text-blue-400 uppercase mb-2">Mecanismo Central</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Queda da pressão de perfusão (PAM {"<"} 80 mmHg) → Ativação do SRAA e SNS → Vasoconstrição da arteríola eferente (tenta manter TFG) + Reabsorção de Sódio e Água.
                  </p>
                  <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                    <p className="text-[10px] font-bold text-amber-400 uppercase mb-1">Risco de IECA/BRA</p>
                    <p className="text-[10px] text-slate-400 italic">Bloqueiam a vasoconstrição eferente compensatória, podendo despencar a TFG na fase aguda.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-blue-400 uppercase mb-2">Causas Comuns</p>
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                    <strong>Hipovolemia:</strong> Desidratação, hemorragias, perdas digestivas.
                  </div>
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                    <strong>Baixo Débito:</strong> IC descompensada, Choque cardiogênico.
                  </div>
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                    <strong>Vasodilatação:</strong> Sepsis (principal causa na UTI), Anafilaxia.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RENAL / NTA */}
          <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-lg">
            <div className="bg-emerald-600 p-3 text-white font-black text-[10px] uppercase tracking-widest">2. IRA RENAL (Foco em Necrose Tubular Aguda - NTA)</div>
            <div className="p-6">
              <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                A NTA é a causa mais comum de IRA intrínseca. Pode ser <strong>Isquêmica</strong> (evolução da pré-renal) ou <strong>Nefrotóxica</strong> (drogas, contraste, mioglobina).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase mb-2">1. Lesão Tubular</p>
                  <p className="text-[10px] text-slate-400">Queda de ATP → apoptose/necrose no túbulo proximal. Desprendimento de células para a luz.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase mb-2">2. Obstrução</p>
                  <p className="text-[10px] text-slate-400">Restos celulares formam cilindros granulosos → aumento da pressão retrógrada → cai TFG.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase mb-2">3. Vasoconstrição</p>
                  <p className="text-[10px] text-slate-400">Liberação de Endotelina e Adenosina + queda de Óxido Nítrico → isquemia persistente.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase mb-2">4. Inflamação</p>
                  <p className="text-[10px] text-slate-400">Infiltrado de neutrófilos e citocinas (IL-6, TNF-α) amplificam a lesão microvascular.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-emerald-900/20 rounded-xl border border-emerald-500/30">
                <p className="text-xs font-bold text-emerald-200 mb-1">Axioma da NTA e Recuperação:</p>
                <p className="text-[10px] text-emerald-100 italic mb-2">"A perda de função renal é mais proeminente do que as alterações histopatológicas." O rim para de funcionar antes de morrer estruturalmente.</p>
                <p className="text-[10px] text-slate-300">
                  <strong>Fase de Recuperação:</strong> Mitoses frequentes nos túbulos (células regenerativas) são sinal de reparo. A recuperação funcional pode levar de <strong>dias a semanas</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* PÓS-RENAL */}
          <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-lg">
            <div className="bg-rose-600 p-3 text-white font-black text-[10px] uppercase tracking-widest">3. IRA PÓS-RENAL (Obstrutiva)</div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-bold text-rose-400 uppercase mb-2">Mecanismo</p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Obstrução ao fluxo urinário → Aumento da pressão intratubular → Redução da TFG por gradiente de pressão reverso.
                  </p>
                  <div className="mt-4 p-3 bg-rose-900/20 rounded-lg border border-rose-500/30">
                    <p className="text-[10px] font-bold text-rose-200 uppercase mb-1">Janela de Oportunidade</p>
                    <p className="text-[10px] text-rose-100 italic">A descompressão precoce (sonda, nefrostomia) pode restaurar a função se a obstrução durar <strong>{"<"} 72h</strong>. Se prolongada ({">"} semanas) → Atrofia irreversível.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-rose-400 uppercase mb-2">Pontos de Obstrução</p>
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                    <strong>Uretral:</strong> Hiperplasia Prostática (HPB), Coágulos, Sonda obstruída.
                  </div>
                  <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                    <strong>Ureteral:</strong> Cálculos, Tumores pélvicos, Fibrose retroperitoneal.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
