import React from 'react';
import { LayoutDashboard, Table, AlertTriangle } from 'lucide-react';

export default function IraClassification() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. CLASSIFICAÇÃO KDIGO 2012 */}
      <section id="kdigo-table">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <LayoutDashboard size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Classificação KDIGO 2012</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl mb-8">
          <div className="bg-slate-800/50 p-3 text-white font-black text-[10px] uppercase tracking-widest border-b border-white/10">Estadiamento da Injúria Renal Aguda</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/30 border-b border-white/10">
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Estágio</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-brand-blue">Creatinina Sérica</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-emerald-400">Débito Urinário</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Estágio 1</td>
                  <td className="p-4 text-slate-400">
                    Aumento ≥ 0,3 mg/dL (48h) <br/>
                    OU 1,5 a 1,9x o basal (7 dias)
                  </td>
                  <td className="p-4 text-slate-400">{"<"} 0,5 mL/kg/h por 6 a 12 horas</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Estágio 2</td>
                  <td className="p-4 text-slate-400">2,0 a 2,9x o basal</td>
                  <td className="p-4 text-slate-400">{"<"} 0,5 mL/kg/h por ≥ 12 horas</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Estágio 3</td>
                  <td className="p-4 text-slate-400">
                    ≥ 3,0x o basal <br/>
                    OU Creatinina ≥ 4,0 mg/dL <br/>
                    OU Início de Terapia Renal de Substituição
                  </td>
                  <td className="p-4 text-slate-400 font-bold text-rose-400">
                    {"<"} 0,3 mL/kg/h por ≥ 24 horas <br/>
                    OU Anúria por ≥ 12 horas
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Exemplo Prático 1</h4>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] text-slate-300 leading-relaxed">
                Paciente (60kg) com Creatinina basal de 0,7 mg/dL. <br/>
                Evolui para 1,5 mg/dL ({">"} 2x basal) e apresenta 100ml de diurese em 12h (0,13 mL/kg/h). <br/>
                <strong className="text-rose-400">Classificação: Estágio 3</strong> (pelo critério de diurese).
              </p>
            </div>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Exemplo Prático 2</h4>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] text-slate-300 leading-relaxed">
                Paciente (70kg) com Creatinina de 1,0 mg/dL. <br/>
                Evolui para 4,0 mg/dL (4x basal) e diurese de 3500ml em 24h. <br/>
                <strong className="text-rose-400">Classificação: Estágio 3</strong> (pela creatinina absoluta).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
