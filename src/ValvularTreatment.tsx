import React from 'react';
import { Pill, ShieldCheck, AlertTriangle, Activity, HeartPulse, Zap } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ValvularTreatment() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. TRATAMENTO MEDICAMENTOSO */}
      <section id="medical-treatment">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-500 border border-slate-700 shadow-xl">
            <Pill size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">1. Tratamento Clínico</h2>
        </div>

        <p className="text-sm text-slate-400 mb-8 italic italic">
          O tratamento medicamentoso visa o controle de sintomas e a estabilização hemodinâmica, mas <strong>não cura</strong> a lesão valvar anatômica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Congestão", 
              desc: "Diuréticos de alça (Furosemida) para reduzir a sobrecarga de volume.",
              icon: Activity
            },
            { 
              title: "Fibrilação Atrial", 
              desc: "Controle de frequência (BB, Digoxina) e anticoagulação (Varfarina na EMi reumática).",
              icon: HeartPulse
            },
            { 
              title: "Pós-Carga", 
              desc: "Vasodilatadores (IECA/BRA) úteis nas insuficiências (IAo e IMi) para reduzir o refluxo.",
              icon: Zap
            }
          ].map(item => (
            <div key={item.title} className="p-6 rounded-[2rem] border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-colors group">
              <h4 className="font-black text-white text-[10px] uppercase tracking-[0.2em] mb-3 text-emerald-500 italic">{item.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed italic group-hover:text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. INTERVENÇÃO VALVAR */}
      <section id="intervention">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-brand-blue border border-slate-700 shadow-xl">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">2. Intervenção: Cirúrgica e Percutânea</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Opções Cirúrgicas */}
          <div className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 shadow-2xl">
            <h4 className="font-black text-white mb-6 uppercase italic text-sm tracking-tight text-brand-blue">Troca Valvar: Biológica vs. Mecânica</h4>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-700 group hover:border-brand-blue/30 transition-colors">
                <p className="text-xs font-black text-white mb-2 uppercase italic tracking-widest border-b border-slate-700 pb-2">Prótese Mecânica</p>
                <p className="text-[11px] text-slate-400 italic">Alta durabilidade, mas exige <strong>anticoagulação vitalícia</strong> com Varfarina (INR alvo 2.5-3.5). Indicada para jovens.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-700 group hover:border-brand-blue/30 transition-colors">
                <p className="text-xs font-black text-white mb-2 uppercase italic tracking-widest border-b border-slate-700 pb-2">Prótese Biológica</p>
                <p className="text-[11px] text-slate-400 italic">Anticoagulação temporária, mas tem <strong>menor durabilidade</strong> (degeneração em 10-15 anos). Indicada para idosos ou contraindicação à Varfarina.</p>
              </div>
            </div>
          </div>

          {/* Opções Percutâneas */}
          <div className="p-8 rounded-[3rem] bg-brand-blue/5 border-2 border-brand-blue/20 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl -mr-12 -mt-12"></div>
            <h4 className="font-black text-brand-blue mb-8 uppercase italic text-sm tracking-tight text-brand-blue">Intervenções Transcateter</h4>
            <ul className="space-y-6 relative z-10">
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 font-black text-xs shadow-lg border border-brand-blue/20">T</div>
                <div>
                  <h5 className="font-black text-xs text-white uppercase italic mb-1 tracking-widest">TAVI (Aórtica)</h5>
                  <p className="text-[11px] text-slate-400 italic">Padrão para EAo em pacientes ≥ 75 anos ou alto risco. Ensaios recentes sugerem não-inferioridade em risco baixo aos 2 anos.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 font-black text-xs shadow-lg border border-brand-blue/20">H</div>
                <div>
                  <h5 className="font-black text-xs text-white uppercase italic mb-1 tracking-widest">Heart Team Decision</h5>
                  <p className="text-[11px] text-slate-400 italic">Escolha SAVR se age {'<'} 65a / longa expectativa. TAVI se age {'>'} 75a. Entre 65-75, decisão compartilhada baseada em anatomia.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 text-brand-blue flex items-center justify-center shrink-0 font-black text-xs shadow-lg border border-brand-blue/20">V</div>
                <div>
                  <h5 className="font-black text-xs text-white uppercase italic mb-1 tracking-widest">Valvuloplastia por Balão (Mitral)</h5>
                  <p className="text-[11px] text-slate-400 italic">Tratamento de escolha para EMi reumática com anatomia favorável (Wilkins ≤ 8).</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PROFILAXIA DE ENDOCARDITE */}
      <section id="endocarditis-prophylaxis">
        <div className="p-8 rounded-[2.5rem] bg-rose-500/10 border-2 border-rose-500/20 flex gap-8 items-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -ml-16 -mt-16"></div>
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500 shrink-0 border border-rose-500/10 shadow-inner relative z-10">
            <AlertTriangle size={36} />
          </div>
          <div className="w-full relative z-10">
            <h4 className="font-black text-rose-500 text-base mb-2 uppercase italic tracking-tight">Profilaxia de Endocardite Infecciosa</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed italic mb-4">
              Indicada apenas para pacientes de <strong>alto risco</strong> (prótese valvar, endocardite prévia) em <strong>procedimentos odontológicos</strong> com manipulação gengival.
            </p>
            <div className="p-4 rounded-xl bg-slate-900 border border-rose-500/20 inline-block">
               <p className="text-[10px] font-black text-white uppercase tracking-[0.1em]">Amoxicilina 2g VO, 30-60 min antes do procedimento.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
