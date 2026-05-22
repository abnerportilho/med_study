import React from 'react';
import { Globe, Zap, Activity, Heart, AlertTriangle, Info } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ValvularPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. ETIOLOGIA E EPIDEMIOLOGIA */}
      <section id="etiology">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-brand-blue border border-slate-700 shadow-xl">
            <Globe size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">1. Etiologia e Panorama Geral</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Reumática", 
              desc: "Causa predominante em países em desenvolvimento. Acomete principalmente a válvula mitral (estenose).",
              icon: Activity,
              color: "text-rose-500",
              bg: "bg-rose-500/10"
            },
            { 
              title: "Degenerativa", 
              desc: "Relacionada ao envelhecimento e calcificação. Principal causa de estenose aórtica no idoso.",
              icon: Zap,
              color: "text-amber-500",
              bg: "bg-amber-500/10"
            },
            { 
              title: "Congênita", 
              desc: "Ex: Válvula aórtica bicúspide. Acelera o processo de estenose em adultos jovens.",
              icon: Heart,
              color: "text-brand-blue",
              bg: "bg-brand-blue/10"
            }
          ].map(item => (
            <div key={item.title} className="p-8 rounded-[2.5rem] border-2 border-slate-700 bg-slate-800 shadow-2xl group hover:border-slate-600 transition-all">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner", item.bg, item.color)}>
                <item.icon size={28} />
              </div>
              <h4 className="font-black text-white mb-3 uppercase italic tracking-widest text-sm">{item.title}</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed italic pr-2">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. HEMODINÂMICA: ESTENOSE VS INSUFICIÊNCIA */}
      <section id="hemodynamics">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-rose-500 border border-slate-700 shadow-xl">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">2. Hemodinâmica e Remodelamento</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Estenose */}
          <div className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-2 h-10 bg-rose-500 rounded-full shadow-[0_0_12px_rgba(244,63,94,0.4)]" />
              <h4 className="font-black text-white uppercase italic text-lg tracking-tight">Estenose <span className="text-xs text-rose-500 block font-normal tracking-wide not-italic mt-1">(Sobrecarga de Pressão)</span></h4>
            </div>
            <p className="text-[13px] text-slate-400 mb-6 leading-relaxed italic relative z-10">
              Dificuldade na abertura valvar (obstrução). O miocárdio precisa gerar maior gradiente pressórico para manter o débito.
            </p>
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-700 relative z-10">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 italic">Adaptação Ventricular:</p>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-rose-500/10 text-rose-500 text-[10px] font-black uppercase tracking-widest border border-rose-500/20 shadow-lg">Hipertrofia Concêntrica</div>
                <span className="text-[10px] text-slate-500 italic leading-tight">Aumento de espessura paralela <br/>(relação h/r ↑).</span>
              </div>
            </div>
          </div>

          {/* Insuficiência */}
          <div className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-2 h-10 bg-brand-blue rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)]" />
              <h4 className="font-black text-white uppercase italic text-lg tracking-tight">Insuficiência <span className="text-xs text-brand-blue block font-normal tracking-wide not-italic mt-1">(Sobrecarga de Volume)</span></h4>
            </div>
            <p className="text-[13px] text-slate-400 mb-6 leading-relaxed italic relative z-10">
              Fechamento incompleto (refluxo). Parte do volume ejetado retorna à câmara proximal, exigindo maior volume sistólico.
            </p>
            <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-700 relative z-10">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 italic">Adaptação Ventricular:</p>
              <div className="flex items-center gap-4">
                <div className="px-4 py-2 rounded-xl bg-brand-blue/10 text-brand-blue text-[10px] font-black uppercase tracking-widest border border-brand-blue/20 shadow-lg">Hipertrofia Excêntrica</div>
                <span className="text-[10px] text-slate-500 italic leading-tight">Replicação de sarcômeros <br/>em série (dilatação).</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-[2.5rem] bg-amber-500/10 border-2 border-amber-500/20 shadow-2xl relative overflow-hidden flex gap-6 items-center">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-500/10 shadow-inner">
             <AlertTriangle size={28} />
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed italic">
            <strong className="text-amber-500 font-black uppercase text-[10px] tracking-widest mr-2">Lei de Laplace:</strong> 
            Tensão de Parede = (Pressão x Raio) / (2 x Espessura). O remodelamento cardíaco visa manter a tensão da parede estável frente às sobrecarga crônicas.
          </p>
        </div>
      </section>
    </div>
  );
}
