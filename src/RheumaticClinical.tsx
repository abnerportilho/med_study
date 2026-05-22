import React from 'react';
import { Stethoscope, Heart, Activity, AlertCircle, Info, UserCheck } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function RheumaticClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. CRITÉRIOS DE JONES (AHA 2015) */}
      <section id="jones-criteria">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <UserCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Critérios de Jones (AHA 2015)</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white mb-6">
          <div className="bg-rose-500 p-3 text-white font-bold text-sm">CRITÉRIOS MAIORES</div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-3 border border-white/10 font-bold text-white bg-[#696969]">Critério</th>
                  <th className="p-3 border border-white/10 font-bold text-white bg-[#696969]">Detalhes Clínicos</th>
                  <th className="p-3 border border-white/10 font-bold text-white bg-[#696969]">Frequência</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-3 border border-white/10 font-bold text-brand-blue">Cardite</td>
                  <td className="p-3 border border-white/10 text-slate-300">Pancardite: pericardite (atrito), miocardite (taquicardia desproporcional), valvulite (insuficiência mitral &gt; aórtica).</td>
                  <td className="p-3 border border-white/10 text-slate-400">40–70%</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold text-brand-blue">Poliartrite migratória</td>
                  <td className="p-3 border border-white/10 text-slate-300">2–3 semanas pós-faringite. Grandes articulações, assimétrica, migratória, limitante. Muito dolorosa. Responde rápido a AAS.</td>
                  <td className="p-3 border border-white/10 text-slate-400">75%</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold text-brand-blue">Coreia de Sydenham</td>
                  <td className="p-3 border border-white/10 text-slate-300">6 meses após faringite. Movimentos incoordenados (cabeça e extremidades), labilidade emocional, disartria.</td>
                  <td className="p-3 border border-white/10 text-slate-400">20%</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold text-brand-blue">Eritema marginado</td>
                  <td className="p-3 border border-white/10 text-slate-300">Eritema macular, serpiginoso, evanescente (horas), não pruriginoso. Poupa a face. Tronco e extremidades.</td>
                  <td className="p-3 border border-white/10 text-slate-400">5%</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold text-brand-blue">Nódulos subcutâneos</td>
                  <td className="p-3 border border-white/10 text-slate-300">Indolores, móveis, superfícies extensoras das articulações. Associação com cardite grave.</td>
                  <td className="p-3 border border-white/10 text-slate-400">3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card border-slate-200 overflow-hidden shadow-lg">
            <div className="bg-slate-900 p-3 text-white font-black text-[10px] uppercase tracking-widest">CRITÉRIOS MENORES</div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center p-3 bg-[#696969] rounded border border-line text-[10px] text-white">
                <span className="font-bold">Febre</span>
                <span className="font-black">≥ 38,5°C (AHA)</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#696969] rounded border border-line text-[10px] text-white">
                <span className="font-bold">Artralgia</span>
                <span className="italic">Se poliartrite não for maior</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#696969] rounded border border-line text-[10px] text-white">
                <span className="font-bold">VHS / PCR</span>
                <span className="font-black">VHS ≥ 60 / PCR ≥ 3,0</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#696969] rounded border border-line text-[10px] text-white">
                <span className="font-bold">Intervalo PR</span>
                <span className="italic">Bloqueio AV 1º grau</span>
              </div>
            </div>
          </div>

          <div className="card p-6 border-amber-200 bg-amber-900 text-white shadow-2xl">
            <h4 className="font-black text-amber-400 mb-4 flex items-center gap-2 text-[10px] uppercase tracking-widest">
              <Info size={16} />
              Regra de Ouro Diagnóstica
            </h4>
            <div className="space-y-4">
              <p className="text-xs leading-relaxed">
                <strong>1º Surto:</strong> 2 Maiores OU 1 Maior + 2 Menores.
              </p>
              <p className="text-xs leading-relaxed">
                <strong>Recorrência:</strong> 2 Maiores OU 1 Maior + 2 Menores OU 3 Menores.
              </p>
              <div className="p-3 bg-white/10 rounded-lg border border-white/20 text-[10px] text-amber-100">
                <strong>OBRIGATÓRIO:</strong> Evidência de infecção estreptocócica recente (ASLO ↑, Cultura +, Teste Rápido + ou Escarlatina recente).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SEQUELAS CARDÍACAS */}
      <section id="sequelae">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <Heart size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Sequelas Cardíacas da FR</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Valva</th>
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Lesão Aguda</th>
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Lesão Crônica</th>
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Ausculta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="p-3 border border-white/10 font-bold">Mitral (80%)</td>
                <td className="p-3 border border-white/10 text-slate-300">Insuficiência mitral (IMi)</td>
                <td className="p-3 border border-white/10 text-slate-300">Estenose mitral (EMi)</td>
                <td className="p-3 border border-white/10 text-slate-400">Sopro sistólico FM + Carey-Coombs</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-bold">Aórtica (20%)</td>
                <td className="p-3 border border-white/10 text-slate-300">Insuficiência aórtica (IAo)</td>
                <td className="p-3 border border-white/10 text-slate-300">Estenose aórtica (EAo)</td>
                <td className="p-3 border border-white/10 text-slate-400">Sopro diastólico + PA divergente</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-[10px] text-ink-muted mt-2 italic">
          *A latência média para evolução de insuficiência para estenose é de 20–40 anos.
        </p>
      </section>
    </div>
  );
}
