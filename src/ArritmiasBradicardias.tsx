import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Search, 
  CheckCircle2, 
  ListChecks,
  AlertCircle,
  Stethoscope,
  HeartPulse,
  Timer
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ArritmiasBradicardias() {
  const [activeTopic, setActiveTopic] = useState('definicao');
  const [activeBradStep, setActiveBradStep] = useState<string | null>(null);

  const BRAD_TOPICS = [
    {
      id: 'definicao',
      title: 'Definição',
      icon: Activity,
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      shadow: 'shadow-cyan-500/20',
      bar: 'bg-cyan-500',
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="font-bold text-white text-lg mb-2 italic flex items-center gap-2">
              <Timer size={18} className="text-cyan-500" /> O que é Bradicardia?
            </h4>
            <p className="text-slate-400 leading-relaxed text-base">
              Definida como uma frequência cardíaca <span className="text-cyan-400 font-bold">inferior a 50 bpm</span> (no contexto de emergência/ACLS) ou 60 bpm no repouso clínico. O foco é a repercussão clínica mais do que o número isolado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-line">
              <h4 className="text-[10px] font-black text-cyan-500 uppercase mb-2 tracking-widest">Bradicardia Sinusal</h4>
              <p className="text-xs text-slate-400">Ritmo regular, onda P precedendo cada QRS, mas com frequência baixa.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-950 border border-line">
              <h4 className="text-[10px] font-black text-amber-500 uppercase mb-2 tracking-widest">Bloqueios Sinoatriais</h4>
              <p className="text-xs text-slate-400">Falha na condução do estímulo do nó sinusal para o átrio.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'bav',
      title: 'Bloqueios AV',
      icon: HeartPulse,
      color: 'text-indigo-500',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
      shadow: 'shadow-indigo-500/20',
      bar: 'bg-indigo-500',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
             <div className="p-5 rounded-2xl bg-slate-950 border border-line">
                <h5 className="text-xs font-black text-indigo-400 uppercase mb-3 px-1">BAV de 1º Grau</h5>
                <p className="text-xs text-slate-400">Aumento fixo do intervalo PR ({">"} 0,20s). Todas as ondas P são conduzidas.</p>
             </div>
             <div className="p-5 rounded-2xl bg-slate-950 border border-line">
                <h5 className="text-xs font-black text-amber-500 uppercase mb-3 px-1">BAV de 2º Grau (Mobitz I - Wenckebach)</h5>
                <p className="text-xs text-slate-400">Aumento progressivo do PR até que uma onda P não seja conduzida.</p>
             </div>
             <div className="p-5 rounded-2xl bg-slate-950 border border-line">
                <h5 className="text-xs font-black text-orange-500 uppercase mb-3 px-1">BAV de 2º Grau (Mobitz II)</h5>
                <p className="text-xs text-slate-400">Falha súbita na condução de ondas P, com intervalos PR fixos. Alto risco de BAVT.</p>
             </div>
             <div className="p-5 rounded-2xl bg-slate-950 border border-line">
                <h5 className="text-xs font-black text-rose-500 uppercase mb-3 px-1">BAV de 3º Grau (BAVT)</h5>
                <p className="text-xs text-slate-400">Dissociação AV completa. Átrios e ventrículos batem em frequências independentes.</p>
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
          {/* Header Central com Bradicardia com Pulso */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl p-8 rounded-[3rem] bg-slate-950 border-2 border-emerald-500/30 text-center relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
              <h3 className="text-xl font-black text-white uppercase tracking-[0.3em] mb-4 italic">Bradicardia com Pulso</h3>
              
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30">FC {"<"} 50 bpm</span>
                <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30 font-mono italic">ABCDE</span>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-900">
                <p className="text-[10px] font-black text-slate-500 uppercase mb-4 tracking-widest">Avaliação de Causas Reversíveis</p>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-slate-400 font-medium italic">
                  <span>• Hipóxia</span>
                  <span>• Hipotermia</span>
                  <span>• IAM / Isquemia</span>
                  <span>• Medicamentos</span>
                  <span>• DHEL</span>
                  <span>• Tônus Vagal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coluna 1: Instável */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2 px-6 text-rose-500">
                <AlertCircle size={22} className="animate-pulse" />
                <h4 className="font-black text-sm uppercase tracking-widest italic">Instável (Sintomática)</h4>
              </div>

              <div className="space-y-4">
                {[
                  { 
                    id: 'br-ins-atrop', 
                    title: '1. Atropina', 
                    detail: 'Dose de 1mg em bolus. Repetir a cada 3-5 minutos, se necessário. Máximo de 3mg.',
                    color: 'rose'
                  },
                  { 
                    id: 'br-ins-mptc', 
                    title: '2. Marcapasso Transcutâneo', 
                    detail: 'Imediatamente se Atropina ineficaz ou em BAV de alto grau (Mobitz II / BAVT).',
                    color: 'rose',
                    highlight: true
                  },
                  { 
                    id: 'br-ins-dopa', 
                    title: '3. Dopamina ou Adrenalina', 
                    detail: 'Infusão contínua: Dopamina (5-20 mcg/kg/min) ou Adrenalina (2-10 mcg/min).',
                    color: 'rose'
                  },
                  { 
                    id: 'br-ins-mptv', 
                    title: '4. Marcapasso Transvenoso', 
                    detail: 'Provisório, via percutânea central. Consultar especialista para implante.',
                    color: 'rose'
                  }
                ].map(card => (
                  <button
                    key={card.id}
                    onClick={() => setActiveBradStep(activeBradStep === card.id ? null : card.id)}
                    className={cn(
                      "w-full p-5 rounded-[2rem] border-2 transition-all duration-300 text-left relative overflow-hidden group shadow-lg",
                      activeBradStep === card.id 
                        ? "bg-rose-500/20 border-rose-500 scale-[1.02]" 
                        : "bg-slate-950 border-line hover:border-rose-500/40"
                    )}
                  >
                    <p className={cn(
                      "text-xs font-black uppercase tracking-widest mb-1 transition-colors",
                      activeBradStep === card.id ? "text-white" : "text-rose-400 group-hover:text-rose-300"
                    )}>{card.title}</p>
                    
                    <AnimatePresence>
                      {activeBradStep === card.id ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-rose-500/20"
                        >
                          <p className="text-[12px] text-slate-200 italic leading-relaxed">{card.detail}</p>
                        </motion.div>
                      ) : (
                        <p className="text-[11px] text-slate-500 line-clamp-1 italic">{card.detail}</p>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            </div>

            {/* Coluna 2: Estável */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 mb-2 px-6 text-emerald-500">
                <CheckCircle2 size={22} />
                <h4 className="font-black text-sm uppercase tracking-widest italic">Estável (Assintomática)</h4>
              </div>

              <div className="space-y-4">
                {[
                  { 
                    id: 'br-est-obs', 
                    title: 'Observação e Monitoria', 
                    detail: 'Manter monitorização cardiorrespiratória. Avaliar se há piora clínica aguda.',
                    color: 'emerald'
                  },
                  { 
                    id: 'br-est-mpd', 
                    title: 'MP Definitivo Eletivo', 
                    detail: 'Avaliar indicação se houver sintomas recorrentes ou bloqueio de alto grau persistente.',
                    color: 'emerald'
                  }
                ].map(card => (
                  <button
                    key={card.id}
                    onClick={() => setActiveBradStep(activeBradStep === card.id ? null : card.id)}
                    className={cn(
                      "w-full p-5 rounded-[2rem] border-2 transition-all duration-300 text-left relative overflow-hidden group shadow-lg",
                      activeBradStep === card.id 
                        ? "bg-emerald-500/20 border-emerald-500 scale-[1.02]" 
                        : "bg-slate-950 border-line hover:border-emerald-500/40"
                    )}
                  >
                    <p className={cn(
                      "text-xs font-black uppercase tracking-widest mb-1 transition-colors",
                      activeBradStep === card.id ? "text-white" : "text-emerald-400 group-hover:text-emerald-300"
                    )}>{card.title}</p>
                    
                    <AnimatePresence>
                      {activeBradStep === card.id ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-emerald-500/20"
                        >
                          <p className="text-[12px] text-slate-200 italic leading-relaxed">{card.detail}</p>
                        </motion.div>
                      ) : (
                        <p className="text-[11px] text-slate-500 line-clamp-1 italic">{card.detail}</p>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
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
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-500 border border-line">
            <Activity size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy tracking-tight">Guia de Bradicardias</h2>
        </div>
        
        <p className="text-ink-muted text-xs mb-8 max-w-2xl leading-relaxed italic">
          Abordagem diagnóstica e terapêutica das bradicardias, com foco nos bloqueios atrioventriculares e no protocolo ACLS de emergência.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {BRAD_TOPICS.map(topic => {
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
          {BRAD_TOPICS.map(topic => {
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
