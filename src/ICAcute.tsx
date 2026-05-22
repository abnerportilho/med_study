import React, { useState } from 'react';
import { 
  Activity, AlertCircle, Zap, Search, 
  Droplet, Thermometer, ArrowRight, 
  Info, ShieldCheck, ClipboardList,
  ChevronRight, ChevronDown, Heart, Pill
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PROFILES = [
  {
    id: 'warm-dry',
    letter: 'A',
    name: 'Quente e Seco (Warm-Dry)',
    description: 'Compensado. Bem perfundido e sem congestão.',
    congestion: 'Dry',
    perfusion: 'Warm',
    color: 'bg-emerald-500',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    bgColor: 'bg-emerald-50 dark:bg-emerald-500/10',
    borderColor: 'border-emerald-200 dark:border-emerald-500/20',
    icon: ShieldCheck,
    management: [
      'Revisar tratamento crônico (GDMT).',
      'Investigar gatilho da descompensação prévia.',
      'Ajuste ambulatorial de doses.',
      'Evitar intervenções agressivas.'
    ]
  },
  {
    id: 'warm-wet',
    letter: 'B',
    name: 'Quente e Congesto (Warm-Wet)',
    description: 'Perfil mais comum. Bem perfundido, mas com sobrecarga de volume.',
    congestion: 'Wet',
    perfusion: 'Warm',
    color: 'bg-blue-500',
    textColor: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-500/10',
    borderColor: 'border-blue-200 dark:border-blue-500/20',
    icon: Droplet,
    management: [
      'Diurético de alça IV (Furosemida) — Início precoce.',
      'Vasodilatadores (Nitroglicerina/Nitroprussiato) se PAS preservada (>110 mmHg).',
      'Ajustar doses de medicações crônicas.',
      'Inotrópicos NÃO são rotina.'
    ]
  },
  {
    id: 'cold-dry',
    letter: 'L',
    name: 'Frio e Seco (Cold-Dry)',
    description: 'Hipoperfusão sem congestão exuberante. Frequentemente hipovolêmico.',
    congestion: 'Dry',
    perfusion: 'Cold',
    color: 'bg-slate-500',
    textColor: 'text-slate-600 dark:text-slate-400',
    bgColor: 'bg-slate-50 dark:bg-slate-500/10',
    borderColor: 'border-slate-200 dark:border-slate-500/20',
    icon: Thermometer,
    management: [
      'Reavaliar volemia cuidadosamente.',
      'Teste volêmico (pequenas alíquotas de cristalóide).',
      'Inotrópicos se hipoperfusão persistir após euvolemia.',
      'Evitar diuréticos.'
    ]
  },
  {
    id: 'cold-wet',
    letter: 'C',
    name: 'Frio e Congesto (Cold-Wet)',
    description: 'Sinais de congestão + Hipoperfusão. Risco de choque cardiogênico.',
    congestion: 'Wet',
    perfusion: 'Cold',
    color: 'bg-red-500',
    textColor: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-500/10',
    borderColor: 'border-red-200 dark:border-red-500/20',
    icon: Activity,
    management: [
      'Inotrópicos (Dobutamina/Milrinona) para restaurar débito.',
      'Vasopressores (Noradrenalina) se choque franco/hipotensão grave.',
      'Diuréticos com cautela (após estabilizar perfusão).',
      'Considerar suporte circulatório mecânico (balão intra-aórtico, etc.).'
    ]
  }
];

const TRIGGERS = [
  { id: 'sca', label: 'SCA', desc: 'Síndrome Coronariana Aguda' },
  { id: 'arr', label: 'Arritmia', desc: 'FA, Taquicardias, Bradicardias' },
  { id: 'inf', label: 'Infecção', desc: 'Pneumonia, ITU, Sepse' },
  { id: 'has', label: 'HAS', desc: 'Crise Hipertensiva' },
  { id: 'ade', label: 'Adesão', desc: 'Má adesão medicamentosa ou dietética' },
  { id: 'val', label: 'Valvopatia', desc: 'Insuficiência mitral/aórtica aguda' },
];

export default function ICAcute() {
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <header className="relative">
        <div className="flex items-center gap-2 text-red-600 dark:text-red-400 mb-1">
          <AlertCircle size={16} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Emergência Cardiovascular</span>
        </div>
        <h1 className="text-3xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">IC Descompensada (Aguda)</h1>
        <p className="text-ink-muted dark:text-slate-400">Avaliação beira-leito baseada em Congestão e Perfusão.</p>
      </header>

      {/* Quadrantes de Stevenson */}
      <section className="card p-6 md:p-8 bg-slate-900 dark:bg-slate-950 text-white shadow-2xl relative overflow-hidden border-line dark:border-slate-800">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Heart size={120} />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-amber-400">
            <Activity size={20} />
            Classificação Clínica (Stevenson)
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Matrix Visualization */}
            <div className="relative aspect-square max-w-[400px] mx-auto w-full border-2 border-white/20 dark:border-white/10 rounded-2xl overflow-visible grid grid-cols-2 grid-rows-2">
              {/* Axis Labels (Matching Image) */}
              <div className="absolute -left-12 top-1/2 -rotate-90 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">Baixo Débito em repouso</div>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap text-center">Congestão em repouso</div>
              
              {/* Axis Values */}
              <div className="absolute -left-6 top-[25%] -translate-y-1/2 text-[10px] font-black uppercase text-slate-500">Não</div>
              <div className="absolute -left-6 top-[75%] -translate-y-1/2 text-[10px] font-black uppercase text-slate-500">Sim</div>
              <div className="absolute top-[-24px] left-[25%] -translate-x-1/2 text-[10px] font-black uppercase text-slate-500">Não</div>
              <div className="absolute top-[-24px] left-[75%] -translate-x-1/2 text-[10px] font-black uppercase text-slate-500">Sim</div>
              
              {PROFILES.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => setSelectedProfile(profile.id)}
                  className={cn(
                    "relative flex flex-col items-center justify-center p-4 transition-all duration-300 border border-white/10 group",
                    selectedProfile === profile.id ? "bg-white/20 dark:bg-white/10 scale-[0.98]" : "hover:bg-white/5",
                    profile.id === 'warm-dry' && "rounded-tl-xl",
                    profile.id === 'warm-wet' && "rounded-tr-xl",
                    profile.id === 'cold-dry' && "rounded-bl-xl",
                    profile.id === 'cold-wet' && "rounded-br-xl"
                  )}
                >
                  <div className="absolute top-2 left-2 text-2xl font-black opacity-20 group-hover:opacity-40 transition-opacity">{profile.letter}</div>
                  <profile.icon size={32} className={cn("mb-2 transition-transform group-hover:scale-110", profile.textColor.replace('text-', 'text-opacity-80 text-'))} />
                  <span className="text-[10px] font-black uppercase tracking-tighter text-center leading-none">{profile.name.split(' (')[0]}</span>
                  <div className={cn("absolute bottom-2 right-2 w-2 h-2 rounded-full", profile.color)}></div>
                </button>
              ))}

              {/* Axis Lines */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20 dark:bg-white/10"></div>
              <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/20 dark:bg-white/10"></div>
            </div>

            {/* Profile Details */}
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {selectedProfile ? (
                  <motion.div
                    key={selectedProfile}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    {PROFILES.find(p => p.id === selectedProfile) && (
                      <>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className={cn("w-3 h-3 rounded-full", PROFILES.find(p => p.id === selectedProfile)?.color)}></div>
                            <h3 className="text-2xl font-bold text-white">
                              <span className="text-amber-400 mr-2">Perfil {PROFILES.find(p => p.id === selectedProfile)?.letter}:</span>
                              {PROFILES.find(p => p.id === selectedProfile)?.name}
                            </h3>
                          </div>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {PROFILES.find(p => p.id === selectedProfile)?.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Congestão</p>
                            <p className="font-bold text-amber-400">{PROFILES.find(p => p.id === selectedProfile)?.congestion === 'Wet' ? 'Presente (Wet)' : 'Ausente (Dry)'}</p>
                          </div>
                          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                            <p className="text-[10px] font-black text-slate-500 uppercase mb-1">Perfusão</p>
                            <p className="font-bold text-emerald-400">{PROFILES.find(p => p.id === selectedProfile)?.perfusion === 'Warm' ? 'Adequada (Warm)' : 'Reduzida (Cold)'}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                            <Zap size={14} className="text-amber-400" />
                            Conduta Imediata
                          </h4>
                          <ul className="space-y-2">
                            {PROFILES.find(p => p.id === selectedProfile)?.management.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    )}
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/10 dark:border-white/5 rounded-3xl">
                    <Info size={48} className="text-slate-700 dark:text-slate-600 mb-4" />
                    <p className="text-slate-400 font-medium">Selecione um perfil no quadrante para ver a conduta detalhada.</p>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Estabilização e Gatilhos */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 card p-6 bg-card border-line">
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100 mb-6 flex items-center gap-2">
            <ShieldCheck size={22} className="text-brand-blue dark:text-blue-400" />
            Estabilização e Investigação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-black text-ink-muted dark:text-slate-500 uppercase tracking-widest">Monitorização Obrigatória</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Sinais Vitais', desc: 'PA, FC, FR, Saturação de O2.' },
                  { label: 'Débito Urinário', desc: 'Balanço hídrico rigoroso.' },
                  { label: 'Exames Laboratoriais', desc: 'Função renal, eletrólitos, lactato, troponina, BNP/NT-proBNP.' },
                  { label: 'Imagem', desc: 'ECG, Rx Tórax, Ecocardiograma (se novo ou mudança clínica).' }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-50 dark:bg-blue-500/10 flex items-center justify-center text-brand-blue dark:text-blue-400 shrink-0">
                      <ChevronRight size={14} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-navy dark:text-slate-200">{item.label}</p>
                      <p className="text-xs text-ink-muted dark:text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-ink-muted dark:text-slate-500 uppercase tracking-widest">Busca pelo Gatilho</h3>
              <div className="grid grid-cols-2 gap-3">
                {TRIGGERS.map((trigger) => (
                  <div key={trigger.id} className="p-3 rounded-xl border border-line bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all">
                    <p className="text-xs font-black text-brand-navy dark:text-slate-200 mb-1">{trigger.label}</p>
                    <p className="text-[10px] text-ink-muted dark:text-slate-400 leading-tight">{trigger.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-900/30">
                <p className="text-[10px] text-amber-800 dark:text-amber-300 leading-relaxed italic">
                  <strong>Pérola:</strong> Tratar a congestão sem corrigir o gatilho leva à recorrência precoce.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fluxograma de Pressão Arterial */}
        <section className="card p-6 bg-card border-line">
          <h2 className="text-lg font-bold text-brand-navy dark:text-slate-100 mb-6 flex items-center gap-2">
            <Activity size={20} className="text-brand-blue dark:text-blue-400" />
            Decisão por PAS
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-line shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
              <h4 className="font-bold text-brand-navy dark:text-slate-200 text-sm mb-1">PAS &gt; 110 mmHg</h4>
              <p className="text-xs text-ink-muted dark:text-slate-400 mb-3">Foco em Vasodilatação + Diurético.</p>
              <div className="flex flex-wrap gap-2">
                <Chip color="green">Vasodilatadores</Chip>
                <Chip color="blue">Furosemida IV</Chip>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-line shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
              <h4 className="font-bold text-brand-navy dark:text-slate-200 text-sm mb-1">PAS 85 – 110 mmHg</h4>
              <p className="text-xs text-ink-muted dark:text-slate-400 mb-3">Cautela. Diurético isolado ou Inotrópico se baixo débito.</p>
              <div className="flex flex-wrap gap-2">
                <Chip color="orange">Inotrópicos?</Chip>
                <Chip color="blue">Furosemida</Chip>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-line shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <h4 className="font-bold text-brand-navy dark:text-slate-200 text-sm mb-1">PAS &lt; 85 mmHg</h4>
              <p className="text-xs text-ink-muted dark:text-slate-400 mb-3">Choque/Baixo Débito. Inotrópico + Vasopressor.</p>
              <div className="flex flex-wrap gap-2">
                <Chip color="pink">Inotrópicos</Chip>
                <Chip color="pink">Vasopressores</Chip>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Tabela de Memorização Rápida */}
      <section className="card p-6 border-line bg-slate-900 dark:bg-slate-950 text-white shadow-xl overflow-hidden relative dark:border-slate-800">
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <Zap size={120} />
        </div>
        
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shadow-inner">
            <Zap size={20} />
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-tight">Resumo Operacional</h3>
            <p className="text-xs text-slate-400 uppercase font-black tracking-widest">IC Descompensada</p>
          </div>
        </div>
        
        <div className="overflow-x-auto relative z-10">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 font-bold text-amber-400 uppercase tracking-wider">Perfil</th>
                <th className="p-4 font-bold text-amber-400 uppercase tracking-wider">Mecanismo</th>
                <th className="p-4 font-bold text-amber-400 uppercase tracking-wider">Conduta Chave</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { letter: 'B', profile: 'Quente-Úmido', mech: 'Congestão Dominante', action: 'Diurético IV + Vasodilatador' },
                { letter: 'C', profile: 'Frio-Úmido', mech: 'Baixo Débito + Congestão', action: 'Inotrópico + Diurético Cauteloso' },
                { letter: 'L', profile: 'Frio-Seco', mech: 'Hipovolemia Relativa', action: 'Volume (Teste) -> Inotrópico' },
                { letter: 'A', profile: 'Quente-Seco', mech: 'Compensado', action: 'Ajuste de GDMT + Gatilho' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <span className="bg-white/10 px-3 py-1 rounded-full font-bold text-white inline-block">
                      <span className="text-amber-400 mr-1">{row.letter}</span> - {row.profile}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-slate-200">
                      {row.mech}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-white font-medium">
                      {row.action}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Notas de Manejo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="card p-6 border-l-4 border-l-brand-blue bg-card dark:bg-slate-800/50 border-line">
          <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-4 flex items-center gap-2">
            <Pill size={18} className="text-brand-blue dark:text-blue-400" />
            Manejo da Terapia Crônica
          </h3>
          <div className="space-y-3 text-sm text-ink-muted dark:text-slate-400 leading-relaxed">
            <p><strong className="text-brand-navy dark:text-slate-200">Não suspender indiscriminadamente:</strong> Manter GDMT (Beta-bloqueador, IECA/BRA/ARNI, MRA, iSGLT2) se estabilidade hemodinâmica.</p>
            <p><strong className="text-brand-navy dark:text-slate-200">Quando pausar:</strong> Hipotensão sintomática, choque, piora renal aguda grave ou hipercalemia severa.</p>
            <p><strong className="text-brand-navy dark:text-slate-200">Meta:</strong> Reotimização precoce assim que o paciente estabilizar, preferencialmente antes da alta.</p>
          </div>
        </section>

        <section className="card p-6 border-l-4 border-l-amber-500 bg-card dark:bg-slate-800/50 border-line">
          <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-4 flex items-center gap-2">
            <Droplet size={18} className="text-amber-500" />
            Diurético de Alça IV
          </h3>
          <div className="space-y-3 text-sm text-ink-muted dark:text-slate-400 leading-relaxed">
            <p><strong className="text-brand-navy dark:text-slate-200">Início:</strong> Prontamente na admissão para pacientes congestos.</p>
            <p><strong className="text-brand-navy dark:text-slate-200">Monitorização:</strong> Resposta diurética, balanço hídrico, creatinina e eletrólitos.</p>
            <p><strong className="text-brand-navy dark:text-slate-200">Ajuste:</strong> Se resposta insuficiente em 2-6h, considerar dobrar a dose ou associar Tiazídicos (bloqueio sequencial do néfron).</p>
          </div>
        </section>
      </div>

      {/* Frase Final */}
      <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-line text-center">
        <p className="text-brand-navy dark:text-slate-200 font-bold italic">
          "Na IC descompensada, você primeiro identifica se o paciente está congesto e se está perfundindo; depois trata o perfil predominante."
        </p>
      </div>
    </div>
  );
}

const Chip = ({ children, color = "blue" }: { children: React.ReactNode, color?: string }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30",
    pink: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30",
    orange: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-500/30",
    green: "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/20 dark:text-green-300 dark:border-green-500/30",
    purple: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/30",
  };
  return (
    <span className={cn("px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border transition-colors", colors[color])}>
      {children}
    </span>
  );
};
