import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Layers, 
  TrendingUp, 
  Users, 
  Globe, 
  AlertTriangle, 
  Info,
  Box,
  Stethoscope,
  Pill,
  Search,
  CheckCircle2,
  AlertCircle,
  X,
  BookOpen,
  ClipboardList,
  RotateCcw,
  LayoutList,
  ChevronRight,
  ShieldAlert,
  ListChecks,
  Flame,
  MousePointer2,
  Target
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ArritmiasExtrasistoles() {
  const [activeTopic, setActiveTopic] = useState('definicao');
  const [activeClass, setActiveClass] = useState<string | null>(null);

  const EXT_TOPICS = [
    {
      id: 'definicao',
      title: 'Definição & Tipos',
      icon: Activity,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      shadow: 'shadow-blue-500/20',
      bar: 'bg-blue-500',
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-white text-lg mb-2 italic flex items-center gap-2">
              <Zap size={18} className="text-blue-500" /> O que são?
            </h4>
            <p className="text-slate-400 leading-relaxed text-base">
              As extrasístoles são <span className="text-blue-400 font-bold">batimentos prematuros</span> que ocorrem fora do ritmo sinusal normal, originados em focos ectópicos. São extremamente comuns e, na maioria das vezes, benignas em corações estruturalmente normais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-line">
              <h4 className="text-[10px] font-black text-blue-500 uppercase mb-2 tracking-widest">Supraventriculares (ESA)</h4>
              <p className="text-xs text-slate-400">Origem nos átrios ou junção AV. QRS geralmente estreito.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-line">
              <h4 className="text-[10px] font-black text-rose-500 uppercase mb-2 tracking-widest">Ventriculares (ESV)</h4>
              <p className="text-xs text-slate-400">Origem nos ventrículos. QRS largo e bizarro, sem onda P precedente.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-line">
              <h4 className="text-[10px] font-black text-amber-500 uppercase mb-2 tracking-widest">Juncionais</h4>
              <p className="text-xs text-slate-400">Ondas P retrógradas ou ausentes. Originadas no nó AV.</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-950 border border-line flex items-center gap-4">
             <AlertTriangle className="text-slate-600 shrink-0" size={24} />
             <p className="text-sm text-slate-500 italic">
               A presença de <span className="text-white font-bold">cardiopatia estrutural</span> muda drasticamente o prognóstico das extrasístoles ventriculares.
             </p>
          </div>
        </div>
      )
    },
    {
      id: 'classificacao',
      title: 'Classificação',
      icon: LayoutList,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      shadow: 'shadow-amber-500/20',
      bar: 'bg-amber-500',
      content: (
        <div className="space-y-8">
          <p className="text-slate-400 text-sm italic mb-6">Selecione uma categoria abaixo para detalhar a classificação clínico-eletrocardiográfica das extrasístoles:</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'origem', title: 'Origem', icon: Target, items: ['Ventricular', 'Supraventricular'] },
              { id: 'pareamento', title: 'Pareamento', icon: Layers, items: ['Isolada', 'Preservada'] },
              { id: 'forma', title: 'Forma', icon: Flame, items: ['Monomórfica', 'Polimórfica'] },
              { id: 'frequencia', title: 'Frequência', icon: Activity, items: ['Bigeminada', 'Trigeminada', 'Quadrigeminada'] },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveClass(activeClass === item.id ? null : item.id)}
                className={cn(
                  "p-6 rounded-3xl border-2 transition-all duration-300 flex flex-col items-center gap-3 group shrink-0",
                  activeClass === item.id 
                    ? "bg-amber-500/20 border-amber-500 shadow-lg shadow-amber-500/10" 
                    : "bg-slate-950 border-line hover:border-amber-500/50 hover:bg-slate-900"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
                  activeClass === item.id ? "bg-amber-500 text-slate-950" : "bg-slate-900 text-amber-500 group-hover:scale-110"
                )}>
                  <item.icon size={24} />
                </div>
                <span className={cn(
                  "font-black uppercase tracking-widest text-xs",
                  activeClass === item.id ? "text-white" : "text-slate-500"
                )}>{item.title}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeClass && (
              <motion.div
                key={activeClass}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-6 rounded-3xl bg-slate-950 border-2 border-amber-500/30 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeClass === 'origem' && (
                    <>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1">Ventricular</p>
                        <p className="text-[11px] text-slate-400 italic">Complexos QRS largos, bizarros, sem relação com ondas P precedentes.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1">Supraventricular</p>
                        <p className="text-[11px] text-slate-400 italic">Originada acima do feixe de His. QRS geralmente estreito, com ou sem onda P' associada.</p>
                      </div>
                    </>
                  )}
                  {activeClass === 'pareamento' && (
                    <>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1">Isolada</p>
                        <p className="text-[11px] text-slate-400 italic">Ocurre de forma solitária entre batimentos sinusais normais.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1">Preservada</p>
                        <p className="text-[11px] text-slate-400 italic">Termo utilizado para descrever padrões que se mantêm pareados ou em salvas recorrentes.</p>
                      </div>
                    </>
                  )}
                  {activeClass === 'forma' && (
                    <>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1">Monomórfica</p>
                        <p className="text-[11px] text-slate-400 italic">Todas as extrasístoles apresentam a mesma morfologia (um único foco).</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1">Polimórfica</p>
                        <p className="text-[11px] text-slate-400 italic">Presença de morfologias diferentes, indicando múltiplos focos de origem.</p>
                      </div>
                    </>
                  )}
                  {activeClass === 'frequencia' && (
                    <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1 text-center">Bigeminada</p>
                        <p className="text-[10px] text-slate-500 text-center">Alternância de 1:1.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1 text-center">Trigeminada</p>
                        <p className="text-[10px] text-slate-500 text-center">Sequência de 2:1.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-white/5">
                        <p className="text-amber-500 font-black text-xs uppercase mb-1 text-center">Quadrigeminada</p>
                        <p className="text-[10px] text-slate-500 text-center">Sequência de 3:1.</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    },
    {
      id: 'tratamento',
      title: 'Manejo & Tratamento',
      icon: ListChecks,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      shadow: 'shadow-emerald-500/20',
      bar: 'bg-emerald-500',
      content: (
        <div className="space-y-10">
          <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-emerald-500/5 border border-emerald-500/20">
             <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500">
                <ShieldCheck size={32} />
             </div>
             <div>
                <h4 className="text-lg font-bold text-white mb-1 italic">Tranquilizar o Paciente</h4>
                <p className="text-sm text-slate-300">Na ausência de sintomas e de cardiopatia, o tratamento é focado em higiene de vida e redução de estimulantes.</p>
             </div>
          </div>

          <div className="space-y-8 relative pl-8 border-l-2 border-emerald-500/20 ml-2">
             <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs">1</div>
                <h5 className="text-white font-black text-xs uppercase mb-3">Medidas Não Farmacológicas</h5>
                <ul className="text-xs text-slate-400 space-y-2 italic list-disc pl-4">
                   <li>Reduzir cafeína, tabaco e álcool.</li>
                   <li>Melhorar higiene do sono e reduzir estresse.</li>
                   <li>Avaliar distúrbios eletrolíticos (K+ e Mg++).</li>
                </ul>
             </div>

             <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs">2</div>
                <h5 className="text-white font-black text-xs uppercase mb-3">Farmacoterapia (Se Sintomático)</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                   <div className="p-4 rounded-2xl bg-slate-950 border border-line">
                      <p className="text-blue-400 font-black text-[10px] uppercase mb-1">Betabloqueadores</p>
                      <p className="text-[10px] text-slate-500 leading-tight italic">Primeira escolha. Atenolol, Metoprolol ou Propranolol.</p>
                   </div>
                   <div className="p-4 rounded-2xl bg-slate-950 border border-line">
                      <p className="text-amber-500 font-black text-[10px] uppercase mb-1">BCC Não-DHP</p>
                      <p className="text-[10px] text-slate-500 leading-tight italic">Alternativa. Verapamil ou Diltiazem se contraindicação a BB.</p>
                   </div>
                </div>
             </div>

             <div className="relative">
                <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs">3</div>
                <h5 className="text-white font-black text-xs uppercase mb-3">Casos Refratários ou de Risco</h5>
                <div className="p-4 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                   <p className="text-xs text-slate-300 italic mb-2">Considerar ablação por cateter se:</p>
                   <ul className="text-[11px] text-slate-500 space-y-1 list-disc pl-4">
                      <li>Alta carga de ESV ({">"} 10-15% do total de batimentos no Holter).</li>
                      <li>Disfunção ventricular induzida por arritmia.</li>
                      <li>Sintomas intoleráveis apesar da medicação.</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col gap-12 pb-32 animate-in fade-in duration-700">
      <section className="mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-blue-500 border border-line text-brand-blue">
            <Search size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy tracking-tight">Guia de Extrasístoles</h2>
        </div>
        
        <p className="text-ink-muted text-xs mb-8 max-w-2xl leading-relaxed italic">
          As extrasístoles representam a forma mais comum de arritmia no consultório. Explore os critérios diagnósticos e as condutas de manejo para ESA e ESV.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {EXT_TOPICS.map(topic => {
            const Icon = topic.icon;
            const isActive = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300 border-2",
                  isActive 
                    ? `${topic.bg} ${topic.color} ${topic.border} shadow-lg shadow-blue-500/20 scale-105` 
                    : "bg-slate-900 text-slate-500 border-transparent hover:border-slate-700 opacity-60 hover:opacity-100"
                )}
              >
                <Icon size={14} className={cn(isActive ? topic.color : "text-slate-500")} />
                {topic.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {EXT_TOPICS.map(topic => {
            if (topic.id !== activeTopic) return null;
            const Icon = topic.icon;
            return (
              <motion.div 
                key={topic.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={cn(
                  "p-8 md:p-10 rounded-[2.5rem] border-2 relative overflow-hidden bg-slate-900 shadow-2xl transition-all duration-500",
                  topic.border
                )}
              >
                <div className={cn("absolute top-0 left-0 w-2 h-full", topic.bar)}></div>
                <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                  <div className={cn("w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center text-white shadow-xl rotate-3", topic.bar)}>
                    <Icon size={32} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">
                      {topic.title}
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      {topic.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
    </div>
  );
}
