import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Activity, 
  Search, 
  CheckCircle2, 
  ListChecks,
  AlertCircle,
  Flame,
  ArrowRightLeft,
  Timer,
  ShieldAlert
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ArritmiasTaquicardias() {
  const [activeTopic, setActiveTopic] = useState('definicao');
  const [activeTaqStep, setActiveTaqStep] = useState<string | null>(null);
  const [activeDiagStep, setActiveDiagStep] = useState<string | null>(null);

  const TAQ_TOPICS = [
    {
      id: 'definicao',
      title: 'Definição',
      icon: Flame,
      color: 'text-rose-500',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/20',
      shadow: 'shadow-rose-500/20',
      bar: 'bg-rose-500',
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-white text-lg mb-2 italic flex items-center gap-2">
              <Timer size={18} className="text-rose-500" /> O que é Taquicardia?
            </h4>
            <p className="text-slate-400 leading-relaxed text-base">
              Definida como uma frequência cardíaca <span className="text-rose-400 font-bold">superior a 100 bpm</span>. A abordagem clínica é dividida principalmente pela largura do complexo QRS (Estreito vs. Largo) e pela regularidade do ritmo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-line">
              <h4 className="text-[10px] font-black text-blue-500 uppercase mb-2 tracking-widest">QRS Estreito ({"<"} 0,12s)</h4>
              <p className="text-xs text-slate-400">Geralmente supraventriculares. Ex: Taqui Sinusal, TPSV, Flutter, FA.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-line">
              <h4 className="text-[10px] font-black text-rose-500 uppercase mb-2 tracking-widest">QRS Largo (≥ 0,12s)</h4>
              <p className="text-xs text-slate-400">Geralmente ventriculares (TV) ou supraventriculares com aberrância.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'diagnostico',
      title: 'Diagnóstico Diferencial',
      icon: Search,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      shadow: 'shadow-indigo-500/20',
      bar: 'bg-indigo-500',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Coluna 1: QRS Estreito Regular */}
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-[2.5rem] bg-blue-500/5 border-2 border-blue-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-500 flex items-center justify-center border border-blue-500/30 font-black">
                    ER
                  </div>
                  <h4 className="font-black text-blue-400 text-[10px] uppercase tracking-widest">QRS Estreito Regular</h4>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'diag-reg-sin', title: 'Taquicardia Sinusal', detail: 'Frequência geralmente < 150 bpm. Ondas P visíveis e normais.' },
                    { id: 'diag-reg-tpsv', title: 'TPSV', detail: 'Início súbito. TRN ou Via Acessória. Ondas P ausentes ou retrógradas.' },
                    { id: 'diag-reg-flu', title: 'Flutter Atrial', detail: 'Padrão em "dentes de serra" (ondas F) nas derivações inferiores.' }
                  ].map(card => (
                    <button
                      key={card.id}
                      onClick={() => setActiveDiagStep(activeDiagStep === card.id ? null : card.id)}
                      className={cn(
                        "w-full p-4 rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden group",
                        activeDiagStep === card.id 
                          ? "bg-blue-500/20 border-blue-500 shadow-lg" 
                          : "bg-slate-950 border-line hover:border-blue-500/40"
                      )}
                    >
                      <p className={cn(
                        "text-[10px] font-black uppercase tracking-widest mb-1 transition-colors",
                        activeDiagStep === card.id ? "text-white" : "text-blue-400 group-hover:text-blue-300"
                      )}>{card.title}</p>
                      <AnimatePresence>
                        {activeDiagStep === card.id ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <p className="text-[11px] text-slate-200 mt-2 italic leading-relaxed">{card.detail}</p>
                          </motion.div>
                        ) : (
                          <p className="text-[11px] text-slate-500 line-clamp-1 truncate">{card.detail}</p>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna 2: QRS Estreito Irregular */}
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-[2.5rem] bg-indigo-500/5 border-2 border-indigo-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-500 flex items-center justify-center border border-indigo-500/30 font-black">
                    EI
                  </div>
                  <h4 className="font-black text-indigo-400 text-[10px] uppercase tracking-widest">QRS Estreito Irregular</h4>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'diag-irr-fa', title: 'Fibrilação Atrial', detail: 'Ritmo totalmente irregular ("irregulamente irregular"). Ausência de ondas P.' },
                    { id: 'diag-irr-flv', title: 'Flutter Variável', detail: 'Condução AV variável (2:1, 3:1...). Ondas F presentes.' },
                    { id: 'diag-irr-tam', title: 'Taquicardia Atrial Mult.', detail: 'Pelo menos 3 morfologias de onda P diferentes. Comum em DPOC.' }
                  ].map(card => (
                    <button
                      key={card.id}
                      onClick={() => setActiveDiagStep(activeDiagStep === card.id ? null : card.id)}
                      className={cn(
                        "w-full p-4 rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden group",
                        activeDiagStep === card.id 
                          ? "bg-indigo-500/20 border-indigo-500 shadow-lg" 
                          : "bg-slate-950 border-line hover:border-indigo-500/40"
                      )}
                    >
                      <p className={cn(
                        "text-[10px] font-black uppercase tracking-widest mb-1 transition-colors",
                        activeDiagStep === card.id ? "text-white" : "text-indigo-400 group-hover:text-indigo-300"
                      )}>{card.title}</p>
                      <AnimatePresence>
                        {activeDiagStep === card.id ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <p className="text-[11px] text-slate-200 mt-2 italic leading-relaxed">{card.detail}</p>
                          </motion.div>
                        ) : (
                          <p className="text-[11px] text-slate-500 line-clamp-1 truncate">{card.detail}</p>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna 3: QRS Largo */}
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-[2.5rem] bg-rose-500/5 border-2 border-rose-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-500 flex items-center justify-center border border-rose-500/30 font-black">
                    QL
                  </div>
                  <h4 className="font-black text-rose-400 text-[10px] uppercase tracking-widest">QRS Largo</h4>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'diag-lar-tvm', title: 'TV Monomórfica', detail: 'QRS com a mesma morfologia. Principal causa de QRS largo sustentado.' },
                    { id: 'diag-lar-pol', title: 'TV Polimórfica', detail: 'QRS varia de forma. Ex: Torsades de Pointes (prolongamento QT).' },
                    { id: 'diag-lar-tsv', title: 'TSV com Aberrância', detail: 'Taquicardia supraventricular com bloqueio de ramo prévio ou funcional.' }
                  ].map(card => (
                    <button
                      key={card.id}
                      onClick={() => setActiveDiagStep(activeDiagStep === card.id ? null : card.id)}
                      className={cn(
                        "w-full p-4 rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden group",
                        activeDiagStep === card.id 
                          ? "bg-rose-500/20 border-rose-500 shadow-lg" 
                          : "bg-slate-950 border-line hover:border-rose-500/40"
                      )}
                    >
                      <p className={cn(
                        "text-[10px] font-black uppercase tracking-widest mb-1 transition-colors",
                        activeTaqStep === card.id ? "text-white" : "text-rose-400 group-hover:text-rose-300"
                      )}>{card.title}</p>
                      <AnimatePresence>
                        {activeDiagStep === card.id ? (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            <p className="text-[11px] text-slate-200 mt-2 italic leading-relaxed">{card.detail}</p>
                          </motion.div>
                        ) : (
                          <p className="text-[11px] text-slate-500 line-clamp-1 truncate">{card.detail}</p>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tratamento',
      title: 'Conduta (ACLS)',
      icon: ListChecks,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      shadow: 'shadow-emerald-500/20',
      bar: 'bg-emerald-500',
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Coluna 1: Instável */}
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-[2.5rem] bg-rose-500/5 border-2 border-rose-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-500 flex items-center justify-center border border-rose-500/30 font-black">
                    !
                  </div>
                  <h4 className="font-black text-rose-500 text-xs uppercase tracking-widest">Instável</h4>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      id: 'ins-diag', 
                      title: '4 D\'s Diagnósticos', 
                      detail: 'Hipotensão, Alteração mental, Dor torácica, Dispneia grave.',
                      color: 'rose'
                    },
                    { 
                      id: 'ins-cond', 
                      title: 'Cardioversão', 
                      detail: 'Imediata e Sincronizada. Considerar sedação.',
                      color: 'rose',
                      primary: true
                    }
                  ].map(card => (
                    <button
                      key={card.id}
                      onClick={() => setActiveTaqStep(activeTaqStep === card.id ? null : card.id)}
                      className={cn(
                        "w-full p-4 rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden group",
                        activeTaqStep === card.id 
                          ? "bg-rose-500/20 border-rose-500 shadow-lg" 
                          : "bg-slate-950 border-line hover:border-rose-500/40"
                      )}
                    >
                      <p className={cn(
                        "text-[10px] font-black uppercase tracking-widest mb-1 transition-colors",
                        activeTaqStep === card.id ? "text-white" : "text-rose-400 group-hover:text-rose-300"
                      )}>{card.title}</p>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{card.detail}</p>
                      
                      <AnimatePresence>
                        {activeTaqStep === card.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-rose-500/30"
                          >
                            <p className="text-[11px] text-slate-200 italic leading-relaxed">{card.detail}</p>
                            {card.primary && (
                              <div className="mt-3 py-2 px-3 bg-rose-500 rounded-xl text-slate-950 text-center font-black text-[9px] uppercase tracking-wider">
                                Conduta Padrão-Ouro
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna 2: Estável QRS Largo */}
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-[2.5rem] bg-amber-500/5 border-2 border-amber-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center border border-amber-500/30 font-black">
                    L
                  </div>
                  <h4 className="font-black text-amber-500 text-xs uppercase tracking-widest">Estável (Largo)</h4>
                </div>

                <div className="space-y-4">
                  {[
                    { 
                      id: 'lar-ami', 
                      title: 'Amiodarona', 
                      detail: '150mg IV em 10 min. Manutenção 1mg/min por 6h.',
                      color: 'amber'
                    },
                    { 
                      id: 'lar-cv', 
                      title: 'Cardioversão', 
                      detail: 'Eletiva se refratário a drogas ou instabilizar.',
                      color: 'amber'
                    }
                  ].map(card => (
                    <button
                      key={card.id}
                      onClick={() => setActiveTaqStep(activeTaqStep === card.id ? null : card.id)}
                      className={cn(
                        "w-full p-4 rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden group",
                        activeTaqStep === card.id 
                          ? "bg-amber-500/20 border-amber-500 shadow-lg" 
                          : "bg-slate-950 border-line hover:border-amber-500/40"
                      )}
                    >
                      <p className={cn(
                        "text-[10px] font-black uppercase tracking-widest mb-1 transition-colors",
                        activeTaqStep === card.id ? "text-white" : "text-amber-400 group-hover:text-amber-300"
                      )}>{card.title}</p>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{card.detail}</p>
                      
                      <AnimatePresence>
                        {activeTaqStep === card.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-3 pt-3 border-t border-amber-500/30"
                          >
                            <p className="text-[11px] text-slate-200 italic leading-relaxed">{card.detail}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Coluna 3: Estável QRS Estreito */}
            <div className="flex flex-col gap-4">
              <div className="p-5 rounded-[2.5rem] bg-emerald-500/5 border-2 border-emerald-500/20 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center border border-emerald-500/30 font-black">
                    E
                  </div>
                  <h4 className="font-black text-emerald-500 text-xs uppercase tracking-widest">Estável (Estreito)</h4>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'est-vagal', title: 'Manobra Vagal', detail: 'Valsalva Modificada ou massagem de seio carotídeo.' },
                    { id: 'est-adenosina', title: 'Adenosina', detail: '6mg IV rápido. Se necessário, 12mg.' },
                    { id: 'est-meto', title: 'Metoprolol/BCC', detail: '5mg IV Metoprolol se Adenosina falhar.' },
                    { id: 'est-cv', title: 'Cardioversão', detail: 'Última escolha se refratário.' }
                  ].map((card, idx) => (
                    <button
                      key={card.id}
                      onClick={() => setActiveTaqStep(activeTaqStep === card.id ? null : card.id)}
                      className={cn(
                        "w-full p-4 rounded-3xl border-2 transition-all duration-300 text-left relative overflow-hidden group flex items-start gap-3",
                        activeTaqStep === card.id 
                          ? "bg-emerald-500/20 border-emerald-500 shadow-lg" 
                          : "bg-slate-950 border-line hover:border-emerald-500/40"
                      )}
                    >
                      <div className={cn(
                        "w-5 h-5 rounded-full flex items-center justify-center shrink-0 border mt-0.5",
                        activeTaqStep === card.id ? "bg-emerald-500 border-emerald-500 text-slate-950" : "border-emerald-500/30 text-emerald-500"
                      )}>
                        <span className="text-[9px] font-black">{idx + 1}</span>
                      </div>
                      <div className="w-full">
                        <p className={cn(
                          "text-[10px] font-black uppercase tracking-widest mb-1 transition-colors",
                          activeTaqStep === card.id ? "text-white" : "text-emerald-400 group-hover:text-emerald-300"
                        )}>{card.title}</p>
                        
                        <AnimatePresence>
                          {activeTaqStep === card.id ? (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2"
                            >
                              <p className="text-[11px] text-slate-200 italic leading-relaxed">{card.detail}</p>
                            </motion.div>
                          ) : (
                            <p className="text-[11px] text-slate-500 line-clamp-1 truncate">{card.detail}</p>
                          )}
                        </AnimatePresence>
                      </div>
                    </button>
                  ))}
                </div>
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
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-rose-500 border border-line">
            <Zap size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy tracking-tight">Guia de Taquicardias</h2>
        </div>
        
        <p className="text-ink-muted text-xs mb-8 max-w-2xl leading-relaxed italic">
          Abordagem sistematizada das taquiarritmias com QRS estreito e largo, integrando o diagnóstico diferencial e os algoritmos de tratamento estável e instável.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {TAQ_TOPICS.map(topic => {
            const Icon = topic.icon;
            const isActive = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300 border-2",
                  isActive 
                    ? `${topic.bg} ${topic.color} ${topic.border} shadow-lg ${topic.shadow} scale-105` 
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
          {TAQ_TOPICS.map(topic => {
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
