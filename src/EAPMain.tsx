import React, { useState } from 'react';
import { 
  Wind, Activity, 
  Timer,
  ShieldAlert, Zap,
  Stethoscope,
  Heart,
  Droplets,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-using Lucide Icon for Investigação
const SearchProject = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <Activity size={size} className={className} />
);
const Target = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <Wind size={size} className={className} />
);

const EAP_PROTOCOL = [
  {
    id: 'reconhecimento',
    title: 'Reconhecimento',
    icon: Stethoscope,
    color: 'bg-red-500',
    content: (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-3">
          {[
            { label: 'Dispneia Súbita', desc: 'Ortopneia e DPN' },
            { label: 'Expectoração', desc: 'Sero-sanguinolenta (Rosa)' },
            { label: 'Ausculta', desc: 'Estertores crepitantes difusos' },
            { label: 'Estase Jugular', desc: 'Sinal de sobrecarga' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-3xl bg-white border-2 border-red-100 shadow-sm flex-1 min-w-[150px] hover:border-red-500 transition-colors cursor-default"
            >
              <h5 className="font-black text-red-600 text-xs uppercase tracking-tighter mb-1">{item.label}</h5>
              <p className="text-xs text-slate-600 font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="p-5 rounded-2xl bg-red-50 border border-red-100 flex items-start gap-4">
          <ShieldAlert className="text-red-600 shrink-0 mt-1" size={20} />
          <p className="text-sm text-red-900 font-bold leading-relaxed italic">
            "Atenção ao 'Tórax Silencioso' ou fadiga respiratória eminente – indicativo de necessidade de IOT imediata."
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'estabilizacao',
    title: 'Estabilização Oral (MOV)',
    icon: Activity,
    color: 'bg-blue-500',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="p-6 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-500/10">
            <h4 className="font-black text-xs uppercase tracking-[0.2em] mb-4 text-blue-200">Protocolo MOV</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black">M</div>
                <span className="font-bold">Monitorização Cardíaca / Oximetria / PA</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black">O</div>
                <span className="font-bold">Oxigênio (Alvo Sat &gt; 92%)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-black">V</div>
                <span className="font-bold">Veia (2 acessos calibrosos)</span>
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100">
            <h5 className="font-black text-amber-900 text-xs uppercase mb-2">Posicionamento</h5>
            <p className="text-sm text-amber-800">Manter cabeceira elevada a 90º (reduz retorno venoso).</p>
          </div>
        </div>
        <div className="p-6 rounded-3xl bg-slate-900 text-white flex flex-col justify-center gap-4">
          <div className="flex items-center gap-3">
            <Wind size={24} className="text-blue-400" />
            <h4 className="text-xl font-black italic">VNI Precoce</h4>
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            O padrão-ouro na estabilização inicial. Melhora a pré e pós-carga e evita IOT.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold">CPAP</span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold">BIPAP</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'farmacodinamica',
    title: 'Medicação (L-M-N-O-P)',
    icon: Zap,
    color: 'bg-emerald-500',
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-3xl border-2 border-emerald-100 hover:border-emerald-500 transition-all bg-white group courier">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-black text-emerald-600">Furosemida (Diurético)</h4>
              <Droplets className="text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm text-slate-600 mb-2">Ação venodilatadora imediata + Diurese posterior.</p>
            <p className="text-lg font-black text-brand-navy">0,5 - 1,0 mg/Kg (EV)</p>
          </div>
          <div className="p-5 rounded-3xl border-2 border-emerald-100 hover:border-emerald-500 transition-all bg-white group">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-black text-emerald-600">Nitroglicerina (Tridil)</h4>
              <Zap className="text-emerald-500 group-hover:scale-110 transition-transform" />
            </div>
            <p className="text-sm text-slate-600 mb-2">Vasodilatador de escolha se PAS &gt; 110.</p>
            <p className="text-lg font-black text-brand-navy">5 - 200 mcg/min (BIC)</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 border border-line opacity-60">
            <h5 className="font-bold text-[10px] uppercase text-slate-500">Morfina</h5>
            <p className="text-xs italic">Uso restritivo (pode aumentar IOT).</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-line opacity-60">
            <h5 className="font-bold text-[10px] uppercase text-slate-500">Nitroprussiato</h5>
            <p className="text-xs">Se PAS muito elevada / Emergência HAS.</p>
          </div>
          <div className="p-4 rounded-2xl bg-red-50 border border-red-100">
            <h5 className="font-bold text-[10px] uppercase text-red-600">Cuidado: Inotrópicos</h5>
            <p className="text-xs text-red-800">Apenas se Choque Cardiogênico.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'investigacao',
    title: 'Investigação Etiológica',
    icon: SearchProject, // Search
    color: 'bg-purple-500',
    content: (
      <div className="space-y-6">
        <p className="text-sm text-slate-600 font-medium">Investigar o fator desencadeante enquanto trata:</p>
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'ECG 12 derivações', desc: 'IAM ou Arritmia?', icon: Activity },
            { label: 'Rx de Tórax', desc: 'Infiltrado em borboleta', icon: Target },
            { label: 'BNP / Pro-BNP', desc: 'Confirmar origem cardíaca', icon: Droplets },
            { label: 'POCUS (ECO)', desc: 'Linhas B de Kerley', icon: Heart }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-5 rounded-3xl bg-slate-50 border border-line flex-1 min-w-[200px] flex gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-purple-600 shrink-0">
                <item.icon size={20} />
              </div>
              <div className="space-y-1">
                <h5 className="font-black text-brand-navy text-xs uppercase tracking-tighter">{item.label}</h5>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }
];
export default function EAPMain() {
  const [activeStep, setActiveStep] = useState(0);
  const activeData = EAP_PROTOCOL[activeStep];
  const ActiveIcon = activeData.icon;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Progressive Timeline Sidebar */}
        <aside className="lg:w-72 space-y-3 relative">
          <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-slate-200 hidden lg:block" />
          
          {EAP_PROTOCOL.map((step, i) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(i)}
              className={cn(
                "w-full p-4 rounded-3xl flex items-center gap-4 transition-all text-left relative z-10",
                activeStep === i 
                  ? "bg-slate-900 text-white shadow-2xl shadow-slate-900/20 translate-x-2" 
                  : "bg-white border border-line hover:border-brand-blue"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-inner translate-x-1",
                activeStep === i ? "bg-white/10" : "bg-slate-100 text-slate-400"
              )}>
                <step.icon size={22} />
              </div>
              <div className="flex-1">
                <p className={cn(
                  "text-[9px] font-black uppercase tracking-widest mb-0.5",
                  activeStep === i ? "text-blue-400" : "text-slate-400"
                )}>Etapa {i + 1}</p>
                <h4 className="font-black text-sm tracking-tight">{step.title}</h4>
              </div>
              {activeStep > i && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white border-2 border-white">
                  <ArrowRight size={12} className="rotate-[-45deg]" />
                </div>
              )}
            </button>
          ))}

          <div className="p-6 rounded-3xl bg-brand-blue/5 border border-brand-blue/10 mt-6 hidden lg:block">
            <h5 className="font-black text-[10px] text-brand-blue uppercase tracking-widest mb-2">Status da Emergência</h5>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs font-bold text-brand-navy tracking-tight">ALTA GRAVIDADE</span>
            </div>
            <p className="text-[10px] text-slate-500 italic">"Tempo é miocárdio e ventilação."</p>
          </div>
        </aside>

        {/* Dynamic Content Area */}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="card p-8 min-h-[500px] flex flex-col bg-white border-2 border-slate-100 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className={cn("absolute top-0 right-0 w-32 h-32 opacity-[0.03] -translate-y-8 translate-x-8", activeData.color.replace('bg-', 'text-'))}>
                <ActiveIcon size={128} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg", activeData.color)}>
                    <ActiveIcon size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-brand-navy tracking-tighter uppercase">{activeData.title}</h2>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Protocolo EAP • Fase {activeStep + 1}</p>
                  </div>
                </div>

                <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                  {activeData.content}
                </div>
              </div>
              
              <div className="mt-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Timer size={16} className="text-slate-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Reavaliação 15/15 min</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={16} className="text-red-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Monitorização ECG</span>
                  </div>
                </div>
                
                {activeStep < EAP_PROTOCOL.length - 1 && (
                  <button 
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 text-white font-black text-sm hover:bg-slate-800 transition-all hover:translate-x-1 group"
                  >
                    PRÓXIMA ETAPA <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
