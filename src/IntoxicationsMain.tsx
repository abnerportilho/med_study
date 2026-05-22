import React, { useState } from 'react';
import { 
  Skull, HeartPulse, Eye, 
  Trash2, ShieldCheck, Pill,
  Info, AlertTriangle, Activity,
  Wind, Thermometer, User2,
  Stethoscope, Fingerprint,
  Navigation, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Droplets = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7 16.3c2.2 0 4-1.8 4-4 0-3.3-4-8-4-8s-4 4.7-4 8c0 2.2 1.8 4 4 4z"/><path d="M17 20.3c1.7 0 3-1.3 3-3 0-2.5-3-6-3-6s-3 3.5-3 6c0 1.7 1.3 3 3 3z"/>
  </svg>
);

const Zap = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const TOXIDROMES = [
  {
    id: 'anticholinergic',
    name: 'Anticolinérgico',
    icon: Eye,
    color: 'bg-red-500',
    description: 'Seco como um osso, cego como um morcego, vermelho como uma beterraba, louco como um chapeleiro.',
    signs: ['Midríase', 'Taquicardia', 'Pele seca/quente', 'Retenção urinária', 'Agitação/Delirium'],
    causes: ['Atropina', 'Anti-histamínicos', 'Antidepressivos Tricíclicos (ADTs)', 'Escopolamina']
  },
  {
    id: 'cholinergic',
    name: 'Colinérgico',
    icon: Droplets,
    color: 'bg-green-600',
    description: 'Sludge: Salivação, Lacrimação, Urina, Defecação, GI (cólica), Emese.',
    signs: ['Miose', 'Bradicardia', 'Sudorese profusa', 'Sialorreia', 'Broncorreia'],
    causes: ['Organofosforados', 'Carbamatos', 'Pilocarpina']
  },
  {
    id: 'opioid',
    name: 'Opioide',
    icon: Pill,
    color: 'bg-slate-700',
    description: 'Tríade clássica: Miose pontiforme, Depressão respiratória e Coma.',
    signs: ['Miose pontiforme', 'Bradipneia', 'Sonolência/Coma', 'Hipotermia'],
    causes: ['Morfina', 'Fentanil', 'Heroína', 'Tramadol', 'Codeína']
  },
  {
    id: 'sympathomimetic',
    name: 'Simpaticomimético',
    icon: Zap,
    color: 'bg-amber-500',
    description: 'Estado de alerta e hiperatividade adrenérgica. Diferente do anticolinérgico, apresenta sudorese.',
    signs: ['Midríase', 'Taquicardia', 'Hipertensão', 'Sudorese profusa', 'Agitação'],
    causes: ['Cocaína', 'Anfetaminas', 'Efedrina', 'MDMA (Ecstasy)']
  }
];

export default function IntoxicationsMain() {
  const [activeSubTab, setActiveSubTab] = useState<'eval' | 'tox'>('eval');
  const [selectedToxidrome, setSelectedToxidrome] = useState(TOXIDROMES[0]);

  const EVAL_STEPS = [
    {
      title: 'A - Via Aérea + Glicemia',
      content: 'Checar perviedade e proteção. Se nível de consciência reduzido: REALIZAR GLICEMIA CAPILAR IMEDIATA + Dextrose se necessário.',
      color: 'bg-red-50 text-red-700 border-red-100',
      icon: Activity
    },
    {
      title: 'B - Ventilação & O2',
      content: 'Monitorar FR e SatO2. Considerar IOT se bradipneia grave ou perda de proteção. Escala de Glasgow < 8 não é critério absoluto isolado.',
      color: 'bg-blue-50 text-blue-700 border-blue-100',
      icon: Wind
    },
    {
      title: 'C - Circulação & Acessos',
      content: '2 acessos calibrosos. Hidratação: Cristaloides (10-20 mL/kg). Se choque refratário, iniciar drogas vasoativas precocemente.',
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      icon: HeartPulse
    }
  ];

  const SYSTEM_EVAL = [
    { system: 'Estado Geral', items: ['Temperatura (Hiper/Hipotermia)', 'Odores (Alho, Álcool)', 'Estigmas de Trauma'], icon: User2 },
    { system: 'SNC', items: ['Nível de Consciência', 'Pupilas (Midríase/Miose)', 'Fasciculações/Convulsões'], icon: Activity },
    { system: 'Cardiovascular', items: ['PA e FC (Monitoração)', 'Ausculta (Sopros novos)', 'Status Hemodinâmico'], icon: HeartPulse },
    { system: 'Respiratório', items: ['Narinas (Queimaduras/Resíduos)', 'SatO2 e FR', 'Ausculta (Roncos/Crip)'], icon: Wind },
    { system: 'Gastrointestinal', items: ['Cavidade Oral (Lesões/Sialorreia)', 'RHA (Íleo ou Hiper)', 'Bexigoma'], icon: Stethoscope },
    { system: 'Pele', items: ['Sudorese (Seca vs Úmida)', 'Sinais de Punção Venosa', 'Cianose'], icon: Fingerprint },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Horizontal Tabs */}
      <div className="flex gap-2 p-1 bg-slate-100 rounded-2xl w-fit">
        <button
          onClick={() => setActiveSubTab('eval')}
          className={cn(
            "px-6 py-2.5 rounded-xl text-base font-black uppercase tracking-widest transition-all text-black",
            activeSubTab === 'eval' ? "bg-[#71dcdc] shadow-sm" : "hover:bg-slate-200"
          )}
        >
          Avaliação Inicial
        </button>
        <button
          onClick={() => setActiveSubTab('tox')}
          className={cn(
            "px-6 py-2.5 rounded-xl text-base font-black uppercase tracking-widest transition-all text-black",
            activeSubTab === 'tox' ? "bg-[#71dcdc] shadow-sm" : "hover:bg-slate-200"
          )}
        >
          Toxisindromes
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeSubTab === 'eval' ? (
          <motion.div
            key="eval"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {/* Context & Epidemiology */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 p-6 rounded-3xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 mb-3">
                  <Navigation size={18} className="text-brand-blue" />
                  <h4 className="font-black text-xs uppercase tracking-widest text-brand-navy">Panorama Clínico</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Representam a principal causa de morte por agentes externos. A maioria dos casos são adultos com ingestão intencional, mas intoxicações acidentais em crianças e uso de drogas de abuso são cenários frequentes. 
                  <span className="block mt-2 font-bold text-red-600 italic">Todo paciente deve ser tratado como potencialmente grave.</span>
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-blue-900 text-white flex flex-col justify-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 mb-2">Segurança da Equipe</p>
                <p className="text-xs font-bold leading-relaxed">
                  Em caso de exposição a produtos químicos perigosos, o uso de Epi (Luvas, Avental, Máscara) é PRIORIDADE antes do diagnóstico.
                </p>
              </div>
            </div>

            {/* Stabilization Grid */}
            <div>
              <div className="flex items-center gap-2 mb-4 px-2">
                <Activity size={16} className="text-red-600" />
                <h3 className="text-xs font-black uppercase text-brand-navy tracking-widest">Protocolo de Ressuscitação (ABCDE)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {EVAL_STEPS.map((step, i) => {
                  const StepIcon = step.icon;
                  return (
                    <div 
                      key={i} 
                      className={cn(
                        "group p-6 rounded-3xl border-2 transition-all hover:shadow-xl hover:-translate-y-1",
                        i === 0 ? "border-red-200 bg-red-50/50" : 
                        i === 1 ? "border-blue-200 bg-blue-50/50" : 
                        "border-amber-200 bg-amber-50/50"
                      )}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className={cn(
                          "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110",
                          i === 0 ? "bg-red-600 text-white shadow-lg shadow-red-200" : 
                          i === 1 ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : 
                          "bg-amber-500 text-white shadow-lg shadow-amber-200"
                        )}>
                          <StepIcon size={24} />
                        </div>
                        <h4 className="font-black text-brand-navy text-sm uppercase tracking-tighter leading-none">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-xs leading-relaxed font-bold text-slate-600">
                        {step.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Physical Exam Table */}
            <div>
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex items-center gap-2">
                  <Stethoscope size={16} className="text-brand-blue" />
                  <h3 className="text-xs font-black uppercase text-brand-navy tracking-widest">Checklist de Exame Físico</h3>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Foco em Sinais Vitais e Pele</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SYSTEM_EVAL.map((sys, i) => {
                  const SysIcon = sys.icon;
                  return (
                    <div 
                      key={i} 
                      className="group bg-slate-50 p-6 rounded-3xl border border-line hover:border-brand-blue hover:shadow-2xl transition-all cursor-default"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          <SysIcon size={18} />
                        </div>
                        <h5 className="font-black text-xs text-brand-navy uppercase tracking-tighter">{sys.system}</h5>
                      </div>
                      <div className="space-y-2">
                        {sys.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors group/item">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover/item:bg-brand-blue transition-colors shrink-0" />
                            <span className="text-[11px] font-bold text-slate-600 group-hover/item:text-brand-navy">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Decontamination Measures */}
            <div>
              <div className="flex items-center gap-2 mb-4 px-2">
                <Trash2 size={16} className="text-emerald-600" />
                <h3 className="text-xs font-black uppercase text-brand-navy tracking-widest">Medidas de Descontaminação</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[40px] bg-emerald-600 text-white relative overflow-hidden shadow-2xl shadow-emerald-200 group">
                  <div className="relative z-10 flex flex-col h-full">
                    <h4 className="text-xl font-black mb-4 flex items-center gap-3 uppercase italic tracking-tighter">
                      <div className="p-2 rounded-xl bg-white/20">
                        <Trash2 size={24} />
                      </div>
                      Carvão Ativado
                    </h4>
                    <div className="space-y-4 flex-grow">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                          <p className="text-[10px] font-black uppercase opacity-60">Dose Adulto</p>
                          <p className="text-sm font-black italic">1g / kg</p>
                        </div>
                        <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                          <p className="text-[10px] font-black uppercase opacity-60">Janela de Tempo</p>
                          <p className="text-sm font-black italic">Até 1 Hora</p>
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-red-900/40 border border-red-400/30">
                        <p className="text-[10px] font-black uppercase text-red-100 mb-1">Contraindicações</p>
                        <p className="text-[11px] font-medium leading-relaxed opacity-90 italic">Cáusticos, Hidrocarbonetos e Via Aérea Desprotegida.</p>
                      </div>
                    </div>
                  </div>
                  <Trash2 size={140} className="absolute -bottom-8 -right-8 text-white opacity-10 rotate-12 transition-transform group-hover:scale-110" />
                </div>

                <div className="p-8 rounded-[40px] bg-slate-50 border-2 border-slate-100 text-brand-navy relative overflow-hidden shadow-sm group hover:border-brand-blue/30 transition-all">
                  <div className="relative z-10">
                    <h4 className="text-xl font-black mb-4 flex items-center gap-3 uppercase italic tracking-tighter">
                      <div className="p-2 rounded-xl bg-slate-100 text-slate-500 group-hover:bg-brand-blue group-hover:text-white transition-all">
                        <HeartPulse size={24} />
                      </div>
                      Lavagem Gástrica
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-slate-600 mb-6">
                      Reservada para substâncias de <span className="font-black text-brand-navy underline decoration-brand-blue decoration-2">ALTA LETALIDADE</span> onde o carvão não é efetivo.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Ferro', 'Lítio', 'Potássio', 'Corpos Estranhos'].map((item, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-full bg-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:bg-slate-300 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 translate-x-4 -translate-y-4">
                    <Stethoscope size={160} />
                  </div>
                </div>
              </div>
            </div>

            {/* History & Questions */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-2 flex items-center gap-2 tracking-tighter uppercase italic">
                      História Clínica Dirigida
                    </h3>
                    <p className="text-sm text-slate-400">Pontos fundamentais para corroborar com a hipótese diagnóstica.</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 hidden md:block">
                    <Info size={24} className="text-brand-blue" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { q: 'Substância', d: 'Ingerida ou exposta' },
                    { q: 'Dose', d: 'Quantidade estimada' },
                    { q: 'Duração', d: 'Tempo de exposição' },
                    { q: 'Latência', d: 'Ingestão até atendimento' }
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 group hover:bg-white/10 transition-colors">
                      <p className="text-amber-400 font-black text-xs uppercase mb-1">{item.q}</p>
                      <p className="text-xs text-slate-300 font-bold">{item.d}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-amber-400 text-slate-900 shrink-0">
                    <AlertTriangle size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black uppercase text-amber-400 tracking-widest">Informações Indiretas</h4>
                    <p className="text-xs leading-relaxed text-slate-300 italic opacity-80">
                      Pacientes frequentemente estão inconscientes ou não cooperativos. Tente obter histórico com testemunhas, paramédicos e familiares.
                    </p>
                  </div>
                </div>
              </div>
              <Skull size={180} className="absolute -bottom-10 -right-10 text-white opacity-[0.03] rotate-12" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="tox"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            <section className="space-y-3">
              <div className="flex items-center gap-2 mb-4 px-2">
                <Skull size={16} className="text-brand-blue" />
                <h3 className="text-xs font-black uppercase text-brand-navy tracking-widest">Toxidromes</h3>
              </div>
              {TOXIDROMES.map((tox) => {
            const ToxIcon = tox.icon;
            return (
              <button
                key={tox.id}
                onClick={() => setSelectedToxidrome(tox)}
                className={cn(
                  "w-full p-4 rounded-2xl border-2 transition-all flex items-center gap-4 text-left relative overflow-hidden",
                  selectedToxidrome.id === tox.id 
                    ? "border-brand-blue bg-slate-100 shadow-xl shadow-brand-blue/5" 
                    : "border-line bg-slate-50/50 hover:bg-slate-100"
                )}
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0", tox.color)}>
                  <ToxIcon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-sm">{tox.name}</h4>
                  <p className="text-[10px] text-slate-600 uppercase font-black">Manifestações</p>
                </div>
              </button>
            );
          })}
        </section>

        <section className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedToxidrome.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="card p-8 border-line bg-slate-100 h-full relative overflow-hidden flex flex-col gap-8"
            >
              {(() => {
                const SelectedIcon = selectedToxidrome.icon;
                return (
                  <div className={cn("absolute top-0 right-0 p-12 opacity-5", selectedToxidrome.color)}>
                    <SelectedIcon size={160} />
                  </div>
                );
              })()}

              <div className="relative z-10">
                <h2 className="text-4xl font-black text-brand-navy tracking-tighter uppercase italic">{selectedToxidrome.name}</h2>
                <p className="text-sm italic text-slate-600 leading-relaxed max-w-xl mt-4 border-l-4 border-slate-100 pl-4">
                  {selectedToxidrome.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-4">
                  <h4 className="font-black text-xs text-brand-blue uppercase tracking-widest border-b border-line pb-2">Manifestações Chave</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedToxidrome.signs.map((sign, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-slate-100 border border-line text-xs font-bold text-slate-700">
                        {sign}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-black text-xs text-brand-blue uppercase tracking-widest border-b border-line pb-2">Agentes Causadores</h4>
                  <ul className="space-y-2">
                    {selectedToxidrome.causes.map((cause, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                        <Pill size={14} className="text-brand-blue" />
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto p-4 rounded-2xl bg-slate-900 text-white flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 border border-white/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Antídoto / Conduta</p>
                  <p className="text-xs font-bold">
                    {selectedToxidrome.id === 'anticholinergic' && 'Fisostigmina (raro) / Benzos para agitação.'}
                    {selectedToxidrome.id === 'cholinergic' && 'Atropina / Pralidoxima.'}
                    {selectedToxidrome.id === 'opioid' && 'Naloxona.'}
                    {selectedToxidrome.id === 'sympathomimetic' && 'Benzodiazepínicos.'}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </section>
      </motion.div>
    )}
  </AnimatePresence>
</div>
  );
}
