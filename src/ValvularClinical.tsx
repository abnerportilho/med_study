import React from 'react';
import { Stethoscope, Activity, AlertCircle, Info, Heart } from 'lucide-react';
import Phonocardiogram from './components/Phonocardiogram';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ValvularClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. SOPROS CARDÍACOS */}
      <section id="murmurs">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-brand-blue border border-slate-700 shadow-xl">
            <Stethoscope size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">1. Semiologia dos Sopros</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Foco Mitral */}
          <div className="rounded-[2.5rem] bg-slate-800 border-2 border-purple-500/20 overflow-hidden shadow-2xl">
            <div className="bg-purple-500/20 p-5 text-purple-400 font-black uppercase tracking-widest flex items-center gap-3 border-b border-purple-500/10 italic text-xs">
              <Heart size={18} />
              Foco Mitral (Ápice - 5º EIE)
            </div>
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-700 group hover:border-purple-500/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-xs text-purple-400 uppercase tracking-widest italic">Insuficiência Mitral (IMi)</h4>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-black uppercase">Sistólico</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed italic mb-4">Sopro holossistólico de alta frequência, melhor ouvido no ápice (foco mitral) e com irradiação para a axila esquerda.</p>
                <Phonocardiogram type="imi" collapsed />
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-700 group hover:border-purple-500/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-xs text-purple-400 uppercase tracking-widest italic">Estenose Mitral (EMi)</h4>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-500 font-black uppercase">Diastólico</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed italic mb-4">Sopro diastólico (ruído grave), frequentemente acompanhado de estalido de abertura, melhor auscultado no foco mitral com o paciente em decúbito lateral esquerdo.</p>
                <Phonocardiogram type="emi" collapsed />
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-700 group hover:border-purple-500/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-xs text-purple-400 uppercase tracking-widest italic">Prolapso Mitral (PVM)</h4>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-black uppercase">Sistólico</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed italic mb-4">Sopro sistólico tardio, frequentemente precedido por um clique mesossistólico.</p>
                <Phonocardiogram type="pvm" collapsed />
              </div>
            </div>
          </div>

          {/* Foco Aórtico */}
          <div className="rounded-[2.5rem] bg-slate-800 border-2 border-brand-blue/20 overflow-hidden shadow-2xl">
            <div className="bg-brand-blue/20 p-5 text-brand-blue font-black uppercase tracking-widest flex items-center gap-3 border-b border-brand-blue/10 italic text-xs">
              <Activity size={18} />
              Foco Aórtico (2º EID)
            </div>
            <div className="p-6 space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-700 group hover:border-brand-blue/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-xs text-brand-blue uppercase tracking-widest italic">Estenose Aórtica (EAo)</h4>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-black uppercase">Sistólico</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed italic mb-4">Sopro sistólico de ejeção, rude, crescendo-decrescendo, irradiando para o pescoço/carótidas.</p>
                <Phonocardiogram type="eao" collapsed />
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-700 group hover:border-brand-blue/40 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-black text-xs text-brand-blue uppercase tracking-widest italic">Insuficiência Aórtica (IAo)</h4>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-500 font-black uppercase">Diastólico</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed italic mb-4">Sopro diastólico em decrescendo, melhor ouvido no foco aórtico ou na borda esternal esquerda (foco aórtico acessório).</p>
                <div className="space-y-4">
                  <Phonocardiogram type="iao" collapsed />
                  <p className="text-[9px] text-slate-500 italic">• Melhor com o paciente sentado e inclinado para a frente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SÍNDROMES CLÍNICAS ESPECÍFICAS */}
      <section id="clinical-syndromes">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-amber-500 border border-slate-700 shadow-xl">
            <Heart size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">2. Síndromes Clínicas Clássicas</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estenose Aórtica */}
          <div className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                 <h4 className="font-black text-white uppercase italic text-lg pr-4">A Tríade SAD da EAo</h4>
                 <span className="px-3 py-1 rounded-full bg-rose-500/10 text-rose-500 text-[9px] font-black uppercase tracking-widest border border-rose-500/20">Urgência Cirúrgica</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center shadow-lg">
                  <p className="text-3xl font-black text-rose-500 mb-1">S</p>
                  <p className="text-[9px] font-black text-white uppercase tracking-tighter italic">Síncope</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center shadow-lg">
                  <p className="text-3xl font-black text-rose-500 mb-1">A</p>
                  <p className="text-[9px] font-black text-white uppercase tracking-tighter italic">Angina</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-center shadow-lg">
                  <p className="text-3xl font-black text-rose-500 mb-1">D</p>
                  <p className="text-[9px] font-black text-white uppercase tracking-tighter italic">Dispneia</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-6 italic bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                ⚠️ O aparecimento desses sintomas marca o ponto de queda drástica na sobrevida sem intervenção.
              </p>
            </div>
          </div>

          {/* Insuficiência Aórtica */}
          <div className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 relative shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="font-black text-emerald-500 mb-6 uppercase italic text-lg relative z-10">Eponímias: Sinais da IAo Grave</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
              {[
                { name: "Corrigan", desc: "Pulso em martelo d\'água (salto e colapso)." },
                { name: "Hill", desc: "PA poplítea > Braquial (> 60 mmHg grave)." },
                { name: "Quincke", desc: "Pulsação capilar no leito ungueal." },
                { name: "Musset", desc: "Oscilação rítmica da cabeça (Head bobbing)." },
                { name: "Duroziez", desc: "Sopro sisto-diastólico na artéria femoral." },
                { name: "Müller", desc: "Pulsação rítmica da úvula." }
              ].map(item => (
                <div key={item.name} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <p className="text-[10px] text-slate-300">
                    <strong className="text-white font-black uppercase text-[9px] tracking-widest mr-2">{item.name}:</strong> 
                    <span className="italic">{item.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diferenciação no Ápex Table */}
        <div className="mt-8 p-8 rounded-[3rem] bg-slate-900 border-2 border-slate-700 shadow-2xl">
          <h4 className="font-black text-white mb-6 uppercase italic text-sm tracking-[0.2em] text-center border-b border-slate-800 pb-4">
            Diferenciação Rápida no Ápice (Pérola Semiológica)
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-[10px]">
              <thead>
                <tr className="text-slate-500 uppercase tracking-widest bg-slate-800/50">
                  <th className="p-3 text-left italic border-r border-slate-800">Achado</th>
                  <th className="p-3 text-center border-r border-slate-800">Gallavardin (EAo)</th>
                  <th className="p-3 text-center border-r border-slate-800">Austin Flint (IAo)</th>
                  <th className="p-3 text-center">IM Verdadeira</th>
                </tr>
              </thead>
              <tbody className="italic text-slate-300 divide-y divide-slate-800">
                <tr>
                  <td className="p-3 font-black text-white border-r border-slate-800 uppercase tracking-tighter">Timing</td>
                  <td className="p-3 text-center border-r border-slate-800">Sistólico ejetivo</td>
                  <td className="p-3 text-center border-r border-slate-800">Diastólico (Rumble)</td>
                  <td className="p-3 text-center">Sistólico holossistólico</td>
                </tr>
                <tr>
                  <td className="p-3 font-black text-white border-r border-slate-800 uppercase tracking-tighter">Timbre</td>
                  <td className="p-3 text-center border-r border-slate-800">Agudo / Musical</td>
                  <td className="p-3 text-center border-r border-slate-800">Grave / Rolante</td>
                  <td className="p-3 text-center">Áspero / Em jato</td>
                </tr>
                <tr>
                  <td className="p-3 font-black text-white border-r border-slate-800 uppercase tracking-tighter">Estalido Abertura</td>
                  <td className="p-3 text-center border-r border-slate-800">Ausente</td>
                  <td className="p-3 text-center border-r border-slate-800">Ausente</td>
                  <td className="p-3 text-center">Presente (se EM associada)</td>
                </tr>
                <tr>
                  <td className="p-3 font-black text-white border-r border-slate-800 uppercase tracking-tighter">Irradiação</td>
                  <td className="p-3 text-center border-r border-slate-800">Carótidas ↑↑</td>
                  <td className="p-3 text-center border-r border-slate-800">Não irradia</td>
                  <td className="p-3 text-center">Axila ↑↑</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. CLASSIFICAÇÃO DE GRAVIDADE (AHA/ACC) */}
      <section id="severity">
        <div className="p-6 rounded-[2.5rem] bg-slate-900 border-2 border-brand-blue/30 flex gap-6 items-center shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 shadow-inner">
            <Info size={28} />
          </div>
          <div className="w-full">
            <h4 className="font-black text-white text-base mb-3 uppercase italic tracking-tight">Estágios das Valvopatias (AHA/ACC)</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { l: 'A', t: 'Em Risco', c: 'border-slate-700' },
                { l: 'B', t: 'Progressiva', c: 'border-slate-700' },
                { l: 'C', t: 'Assint. Grave', c: 'border-brand-blue/40' },
                { l: 'D', t: 'Sintomática', c: 'border-rose-500/40' }
              ].map(s => (
                <div key={s.l} className={cn("p-3 rounded-2xl bg-slate-800 text-center border shadow-lg group hover:scale-105 transition-transform", s.c)}>
                  <p className="text-xl font-black text-white mb-0.5">{s.l}</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{s.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
