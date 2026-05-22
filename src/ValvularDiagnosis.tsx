import React from 'react';
import { Search, Activity, FileText, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ValvularDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. ECOCARDIOGRAMA: O PADRÃO-OURO */}
      <section id="echocardiogram">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-brand-blue border border-slate-700 shadow-xl">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">1. Ecocardiograma: O Padrão-Ouro</h2>
        </div>

        <p className="text-sm text-slate-400 mb-8 italic italic">
          O Eco-Doppler é essencial para confirmar o diagnóstico, avaliar a gravidade e definir o momento da intervenção.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Parâmetros Estenose Aórtica */}
          <div className="p-8 rounded-[2.5rem] bg-slate-800 border-2 border-slate-700 shadow-2xl">
            <h4 className="font-black text-brand-blue mb-6 flex items-center gap-3 uppercase italic text-sm tracking-tight">
              <CheckCircle2 size={18} />
              Gravidade: Estenose Aórtica
            </h4>
            <div className="space-y-3">
              {[
                { label: "Vmax", val: "≥ 4,0 m/s" },
                { label: "Gradiente Médio", val: "≥ 40 mmHg" },
                { label: "Área Valvar (AVA)", val: "≤ 1,0 cm²" },
                { label: "AVA Indexada", val: "≤ 0,6 cm²/m²" }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center p-4 bg-slate-900 rounded-2xl border border-slate-700 group hover:border-rose-500/30 transition-colors">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-black text-rose-500">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Parâmetros Insuficiência Aórtica */}
          <div className="p-8 rounded-[2.5rem] bg-slate-800 border-2 border-slate-700 shadow-2xl">
            <h4 className="font-black text-emerald-500 mb-6 flex items-center gap-3 uppercase italic text-sm tracking-tight">
              <CheckCircle2 size={18} />
              Gravidade: Insuficiência Aórtica
            </h4>
            <div className="space-y-3">
              {[
                { label: "Vena Contracta", val: "> 0,6 cm" },
                { label: "Volume Regurgitante", val: "≥ 60 mL" },
                { label: "Fração de Regurgitação", val: "≥ 50%" },
                { label: "Ero (EROA)", val: "≥ 0,30 cm²" }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center p-4 bg-slate-900 rounded-2xl border border-slate-700 group hover:border-emerald-500/30 transition-colors">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-black text-emerald-500">{item.val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Parâmetros Estenose Mitral */}
          <div className="p-8 rounded-[2.5rem] bg-slate-800 border-2 border-slate-700 shadow-2xl">
            <h4 className="font-black text-purple-500 mb-6 flex items-center gap-3 uppercase italic text-sm tracking-tight">
              <CheckCircle2 size={18} />
              Gravidade: Estenose Mitral
            </h4>
            <div className="space-y-3">
               {[
                { label: "Área Valvar (Grave)", val: "≤ 1,0 cm²" },
                { label: "Gradiente Médio", val: "> 10 mmHg" },
                { label: "PSAP", val: "> 50 mmHg" }
              ].map(item => (
                <div key={item.label} className="flex justify-between items-center p-4 bg-slate-900 rounded-2xl border border-slate-700 group hover:border-purple-500/30 transition-colors">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.label}</span>
                  <span className="text-sm font-black text-purple-500">{item.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXAMES ADICIONAIS */}
      <section id="additional-exams">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 border border-slate-700 shadow-xl">
            <FileText size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">2. Exames Complementares</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Eletrocardiograma", 
              desc: "Sinais de sobrecarga de câmaras (ex: Sokolow-Lyon na EAo) e arritmias (ex: FA na EMi)." 
            },
            { 
              title: "Raio-X de Tórax", 
              desc: "Aumento de silhueta cardíaca, congestão, calcificações ou dilatação da aorta ascendente." 
            },
            { 
              title: "BNP / NT-proBNP", 
              desc: "Marcador de estresse miocárdico. Auxilia na definição do momento cirúrgico em assintomáticos." 
            }
          ].map(exam => (
            <div key={exam.title} className="p-6 rounded-[2rem] border border-slate-700 bg-slate-800/50 hover:bg-slate-800 transition-colors">
              <h4 className="font-black text-white text-[10px] uppercase tracking-[0.2em] mb-3 text-brand-blue italic">{exam.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                {exam.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CATETERISMO CARDÍACO */}
      <section id="catheterization">
        <div className="p-6 rounded-[2.5rem] bg-amber-500/10 border-2 border-amber-500/20 flex gap-6 items-center shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/20 shadow-inner">
            <AlertTriangle size={28} />
          </div>
          <div className="w-full">
            <h4 className="font-black text-amber-500 text-sm mb-2 uppercase italic tracking-tight">Cineangiocoronariografia (CAT)</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed italic">
              Indicada antes da cirurgia valvar em pacientes com risco de DAC (homens {">"} 40 anos, mulheres pós-menopausa) para avaliar necessidade de revascularização concomitante.
            </p>
          </div>
        </div>
      </section>

      {/* 4. TC DE CÁLCIO VALVAR */}
      <section id="calcium-score">
        <div className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <h4 className="font-black text-white text-lg mb-4 uppercase italic tracking-tighter flex items-center gap-3">
             <Activity size={22} className="text-brand-blue" />
             TC de Cálcio Valvar (Agatston)
          </h4>
          <p className="text-[11px] text-slate-400 mb-6 italic leading-relaxed">
            Indicado para confirmar EAo grave em casos de <b>Baixo Fluxo / Baixo Gradiente</b> com parâmetros discordantes no ecocardiograma.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <span className="text-[9px] font-black text-brand-blue uppercase italic tracking-widest">Ponto de Corte: Homens</span>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 flex justify-between items-center">
                 <span className="text-[10px] text-slate-500 font-bold italic uppercase">Provável EAo Grave</span>
                 <span className="text-sm font-black text-white">{'>'} 2.000 UA</span>
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-[9px] font-black text-rose-500 uppercase italic tracking-widest">Ponto de Corte: Mulheres</span>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 flex justify-between items-center">
                 <span className="text-[10px] text-slate-500 font-bold italic uppercase">Provável EAo Grave</span>
                 <span className="text-sm font-black text-white">{'>'} 1.200 UA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
