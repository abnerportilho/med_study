import React from 'react';
import { Microscope, Table, AlertTriangle, Activity, FileText } from 'lucide-react';

export default function IraDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. CLASSIFICAÇÃO KDIGO 2012 */}
      <section id="kdigo-classification">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Table size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Classificação KDIGO 2012</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl">
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
      </section>

      {/* 2. NECROSE TUBULAR AGUDA (NTA) */}
      <section id="nta-patho">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Microscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Necrose Tubular Aguda (NTA)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="font-bold text-brand-blue text-sm mb-4 flex items-center gap-2">
              <Activity size={16} />
              Fisiopatologia da Lesão
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">1</div>
                <p className="text-[10px] text-slate-300"><strong>Hipoperfusão Renal:</strong> Gatilho inicial que leva ao aumento de aldosterona e vasoconstrição das arteríolas.</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">2</div>
                <p className="text-[10px] text-slate-300"><strong>Morte Celular:</strong> Ocorre principalmente no <strong>túbulo proximal</strong> (perda das bordas em escova).</p>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold shrink-0">3</div>
                <p className="text-[10px] text-slate-300"><strong>Obstrução Tubular:</strong> Detritos celulares (debris) causam obstrução do lúmen tubular, aumentando a pressão intratubular.</p>
              </div>
              <div className="p-3 bg-amber-900/20 rounded-lg border border-amber-500/30">
                <p className="text-[10px] text-amber-200">
                  <strong>Nota Histopatológica:</strong> A perda de função renal costuma ser <strong>mais proeminente</strong> do que as alterações histopatológicas visíveis.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="font-bold text-emerald-400 text-sm mb-4 flex items-center gap-2">
              <FileText size={16} />
              Avaliação Complementar
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Sedimento Urinário</p>
                <p className="text-xs">Presença de <strong>cilindros granulosos</strong> (cor de terra) sugere NTA.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Índices Urinários</p>
                <p className="text-xs">FENa {">"} 1% e Sódio Urinário {">"} 40 mEq/L sugerem lesão renal intrínseca (NTA).</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Ultrassonografia</p>
                <p className="text-xs">Fundamental para excluir causas <strong>Pós-Renais</strong> (obstrutivas).</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
