import React from 'react';
import { LayoutDashboard, CheckCircle2, XCircle, AlertCircle, Activity, Table as TableIcon } from 'lucide-react';

export default function PleuralClassification() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. TRANSUDATO VS EXUDATO */}
      <section id="transudate-exudate">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <LayoutDashboard size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Classificação: Transudato vs Exudato</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Transudato */}
          <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-lg">
            <div className="bg-blue-600 p-4 flex items-center justify-between">
              <h3 className="font-bold text-lg">Transudato</h3>
              <CheckCircle2 size={20} />
            </div>
            <div className="p-6 space-y-6">
              <div>
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Mecanismo</p>
                <p className="text-xs text-slate-300">Alteração nas pressões sistêmicas (Hidrostática/Oncótica). A pleura está saudável.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Principais Causas</p>
                <ul className="text-xs text-slate-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Insuficiência Cardíaca (ICC) - Mais comum
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Cirrose Hepática (Hidrotórax)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Síndrome Nefrótica / Hipoalbuminemia
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    Diálise Peritoneal
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exudato */}
          <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-lg">
            <div className="bg-rose-600 p-4 flex items-center justify-between">
              <h3 className="font-bold text-lg">Exudato</h3>
              <AlertCircle size={20} />
            </div>
            <div className="p-6 space-y-6">
              <div>
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-2">Mecanismo</p>
                <p className="text-xs text-slate-300">Doença local da pleura ou capilares. Aumento da permeabilidade ou obstrução linfática.</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-2">Principais Causas</p>
                <ul className="text-xs text-slate-400 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Derrame Parapneumônico (Pneumonia)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Neoplasias (Pulmão, Mama, Linfoma)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Tuberculose Pleural
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    Tromboembolismo Pulmonar (TEP)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CELULARIDADE E ASPECTO */}
      <section id="cellularity">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800/10 flex items-center justify-center text-slate-700">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Celularidade e Aspecto</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Predomínio Celular</h4>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-brand-blue uppercase mb-1">Linfocítico ({">"} 50%)</p>
                <p className="text-[10px] text-slate-300">Tuberculose, Neoplasia, Colagenoses (especialmente AR).</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-rose-400 uppercase mb-1">Neutrofílico</p>
                <p className="text-[10px] text-slate-300">Processos agudos: Parapneumônico, TEP, Pancreatite.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-emerald-400 uppercase mb-1">Eosinofílico ({">"} 10%)</p>
                <p className="text-[10px] text-slate-300">Ar ou Sangue na pleura, TEP, Parasitoses, Drogas.</p>
              </div>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Aspecto Macroscópico</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Citrino</p>
                <p className="text-[9px] text-slate-400">Seroso (Comum)</p>
              </div>
              <div className="p-3 bg-rose-500/10 rounded-lg border border-rose-500/20 text-center">
                <p className="text-[10px] font-bold text-rose-400 uppercase mb-1">Hemático</p>
                <p className="text-[9px] text-rose-200">Câncer, TEP, Trauma</p>
              </div>
              <div className="p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center">
                <p className="text-[10px] font-bold text-emerald-400 uppercase mb-1">Purulento</p>
                <p className="text-[9px] text-emerald-200">Empiema</p>
              </div>
              <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/20 text-center">
                <p className="text-[10px] font-bold text-amber-400 uppercase mb-1">Quiloso</p>
                <p className="text-[9px] text-amber-200">Linfoma, Lesão Ducto</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] text-slate-400 italic">
                *Se aspecto leitoso e Triglicerídeos {">"} 110 = Quilotórax.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TABELA COMPARATIVA DETALHADA */}
      <section id="comparison-table">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <TableIcon size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Tabela Comparativa: Bioquímica</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50 border-b border-white/10">
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Parâmetro / Exame</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue-400">Transudato</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-rose-400">Exudato</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Prot. Pleural / Sérica (Light)</td>
                  <td className="p-4 text-blue-200">≤ 0,5</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 0,5</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">LDH Pleural / Sérico (Light)</td>
                  <td className="p-4 text-blue-200">≤ 0,6</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 0,6</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">LDH Pleural (Light)</td>
                  <td className="p-4 text-blue-200">≤ 2/3 LSN Sérica</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 2/3 LSN Sérica</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Colesterol Pleural</td>
                  <td className="p-4 text-blue-200">{"<"} 45 mg/dL</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 45 mg/dL</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Proteína Pleural</td>
                  <td className="p-4 text-blue-200">{"<"} 3,0 g/dL</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 3,0 g/dL</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Gradiente Alb. (Sérico - Pleural)</td>
                  <td className="p-4 text-blue-200 font-black">{">"} 1,2 g/dL</td>
                  <td className="p-4 text-rose-200">{"<"} 1,2 g/dL</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Gradiente Prot. (Sérico - Pleural)</td>
                  <td className="p-4 text-blue-200 font-black">{">"} 3,1 g/dL</td>
                  <td className="p-4 text-rose-200">{"<"} 3,1 g/dL</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Aspecto Macroscópico</td>
                  <td className="p-4 text-blue-200">Límpido / Citrino</td>
                  <td className="p-4 text-rose-200">Turvo / Hemático / Purulento</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-800/80 p-4 border-t border-white/10">
            <p className="text-[10px] text-slate-400 italic">
              *Nota: Os Critérios de Light são altamente sensíveis para Exudatos. Se houver dúvida em pacientes com ICC usando diuréticos, utilize os Gradientes de Albumina ou Proteína.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
