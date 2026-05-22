import React from 'react';
import { 
  Layers, 
  ChevronRight, 
  CheckCircle2, 
  ClipboardCheck,
  TrendingUp,
  AlertCircle
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function CKDClassification() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. CLASSIFICAÇÃO CGA */}
      <section id="classification-cga">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Layers size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Classificação CGA (KDIGO)</h2>
        </div>

        <p className="text-sm text-ink-muted mb-8 leading-relaxed">
          O sistema **CGA** é o coração do prognóstico e da conduta. O risco de desfechos (progressão para falência renal, eventos cardiovasculares, morte) é <span className="text-brand-blue font-bold">multiplicativo</span> entre G e A.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* C - Causa */}
          <div className="card p-6 border-line bg-slate-800/50 relative overflow-hidden">
            <div className="absolute -top-2 -right-2 text-6xl font-black text-brand-blue opacity-5">C</div>
            <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
              <span className="text-brand-blue">C</span>ausa
            </h3>
            <p className="text-[11px] text-ink-muted mb-4">A causa não altera o estágio, mas define a terapia específica.</p>
            <div className="space-y-2">
              {[
                { name: "Diabetes", detail: "SGLT2i + Finerenona" },
                { name: "Hipertensão", detail: "Alvo PA < 120/80" },
                { name: "Glomerulopatias", detail: "Imunossupressão" },
                { name: "Císticas", detail: "Tolvaptan" },
              ].map(c => (
                <div key={c.name} className="flex flex-col border-l-2 border-brand-blue/20 pl-3 py-1">
                  <span className="text-xs font-bold text-ink">{c.name}</span>
                  <span className="text-[10px] text-brand-blue/70">{c.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* G - GFR */}
          <div className="card p-6 border-line bg-slate-800/50 relative overflow-hidden">
            <div className="absolute -top-2 -right-2 text-6xl font-black text-brand-blue opacity-5">G</div>
            <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
              <span className="text-brand-blue">G</span>FR (eTFG)
            </h3>
            <div className="space-y-1">
              {[
                { g: "G1", val: "≥ 90", label: "Normal ou alta" },
                { g: "G2", val: "60-89", label: "Levemente reduzida" },
                { g: "G3a", val: "45-59", label: "Leve a mod. reduzida" },
                { g: "G3b", val: "30-44", label: "Mod. a grave reduzida" },
                { g: "G4", val: "15-29", label: "Gravemente reduzida" },
                { g: "G5", val: "< 15", label: "Falência renal" },
              ].map(item => (
                <div key={item.g} className="flex justify-between items-center text-[10px] border-b border-line/30 py-1.5">
                  <span className="font-bold text-brand-blue w-8">{item.g}</span>
                  <span className="text-ink font-mono">{item.val}</span>
                  <span className="text-ink-muted text-right">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* A - Albuminúria */}
          <div className="card p-6 border-line bg-slate-800/50 relative overflow-hidden">
            <div className="absolute -top-2 -right-2 text-6xl font-black text-brand-blue opacity-5">A</div>
            <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
              <span className="text-brand-blue">A</span>lbuminúria
            </h3>
            <div className="space-y-3">
              {[
                { a: "A1", val: "< 30", label: "Normal a leve", risk: "Baixo" },
                { a: "A2", val: "30-300", label: "Moderada", risk: "Moderado" },
                { a: "A3", val: "> 300", label: "Grave", risk: "Alto" },
              ].map(item => (
                <div key={item.a} className="flex flex-col border-b border-line/30 pb-2">
                  <div className="flex justify-between text-[10px] mb-1">
                    <span className="font-bold text-brand-pink">{item.a}</span>
                    <span className="text-ink font-mono">{item.val} mg/g</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] text-ink-muted uppercase">{item.label}</span>
                    <span className={cn(
                      "text-[8px] px-1.5 py-0.5 rounded font-bold uppercase",
                      item.a === 'A1' ? "bg-emerald-500/10 text-emerald-400" :
                      item.a === 'A2' ? "bg-amber-500/10 text-amber-400" :
                      "bg-rose-500/10 text-rose-400"
                    )}>{item.risk}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risco Combinado */}
        <div className="card overflow-hidden border-line mb-10">
          <div className="bg-brand-navy p-4 text-white font-bold text-center flex items-center justify-center gap-2">
            <TrendingUp size={18} />
            Tabela de Risco Combinado (G x A)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px] text-center border-collapse">
              <thead>
                <tr className="bg-slate-800/80">
                  <th className="p-4 border border-line text-brand-blue">G \ A</th>
                  <th className="p-4 border border-line text-emerald-400">A1 (&lt;30)</th>
                  <th className="p-4 border border-line text-amber-400">A2 (30-300)</th>
                  <th className="p-4 border border-line text-rose-400">A3 (&gt;300)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { g: "G1 (≥90)", a1: "Baixo", a2: "Moderado", a3: "Alto" },
                  { g: "G2 (60-89)", a1: "Baixo", a2: "Moderado", a3: "Alto" },
                  { g: "G3a (45-59)", a1: "Moderado", a2: "Alto", a3: "Muito Alto" },
                  { g: "G3b (30-44)", a1: "Alto", a2: "Muito Alto", a3: "Muito Alto" },
                  { g: "G4 (15-29)", a1: "Muito Alto", a2: "Muito Alto", a3: "Muito Alto" },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 border border-line font-bold bg-slate-800/30 text-ink">{row.g}</td>
                    <td className={cn(
                      "p-4 border border-line font-medium",
                      row.a1 === "Baixo" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                    )}>{row.a1}</td>
                    <td className={cn(
                      "p-4 border border-line font-medium",
                      row.a2 === "Moderado" ? "bg-amber-500/10 text-amber-400" : "bg-rose-500/10 text-rose-400"
                    )}>{row.a2}</td>
                    <td className={cn(
                      "p-4 border border-line font-medium",
                      row.a3 === "Alto" ? "bg-rose-500/10 text-rose-400" : "bg-rose-900/30 text-rose-200"
                    )}>{row.a3}</td>
                  </tr>
                ))}
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30 text-ink">G5 (&lt;15)</td>
                  <td className="p-4 border border-line bg-rose-900/40 text-rose-100 font-bold" colSpan={3}>Muito Alto (DRC Terminal)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-brand-navy border border-brand-blue/30 flex gap-4 items-center">
          <AlertCircle className="text-brand-blue shrink-0" size={20} />
          <p className="text-xs text-slate-300">
            <strong>Exemplo de Registro:</strong> <code className="bg-slate-800 px-2 py-0.5 rounded text-brand-blue">DRC G3aA2 por Nefropatia Diabética</code> → Risco <span className="text-rose-400 font-bold">Alto</span>.
          </p>
        </div>
      </section>

      {/* 2. RESUMO PARA A PRÁTICA (DECORE) */}
      <section id="decore">
        <div className="card p-8 border-brand-blue/40 bg-gradient-to-br from-brand-navy to-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ClipboardCheck size={120} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-emerald-400" />
            Resumo para a Prática (DECORE)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {[
              "DRC exige persistência ≥ 3 meses.",
              "Rastreio obrigatório: Creatinina + RAC.",
              "Classifique sempre com CGA (C-G-A).",
              "Albuminúria A2 (30-300) já é DRC.",
              "Termo 'microalbuminúria' está obsoleto.",
              "A2/A3 indica IECA/BRA + SGLT2i.",
              "Encaminhe se eTFG < 30 ou A3.",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-200">
                <div className="mt-1 w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0 font-bold text-[10px]">
                  {i + 1}
                </div>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
