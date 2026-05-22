import React from 'react';
import { 
  Activity, Droplet, Zap, ShieldCheck, 
  Info, ArrowRight, ClipboardList, Search, 
  AlertCircle, Pill, Heart, Globe
} from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CAUSES = [
  {
    id: 'diabetes',
    title: 'Diabetes Mellitus',
    subtitle: 'Nefropatia Diabética — Causa #1',
    icon: Zap,
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-100 dark:border-amber-900/30',
    mechanism: [
      'Hiperglicemia crônica → glicação de proteínas da membrana basal glomerular → perda de carga negativa.',
      'Ativação local do SRAA e produção de TGF-β → expansão mesangial, espessamento da membrana basal.',
      'Podocitopatia: Perda de podócitos por apoptose induzida por estresse oxidativo e produtos de glicação avançada (AGEs).'
    ],
    progression: [
      'Perda de podócitos → proteinúria (inicialmente A2, depois A3).',
      'Proteinúria lesa túbulos → inflamação intersticial → fibrose.',
      'Hiperglicemia também lesa diretamente os túbulos (via estresse oxidativo).'
    ],
    treatment: [
      'Controle glicêmico rigoroso: HbA1c < 7,0%.',
      'SGLT2i (Dapagliflozina, Empagliflozina): Reduzem hiperfiltração e progressão.',
      'Finerenona (MRA não-esteroide): Reduz proteinúria e progressão.',
      'GLP-1 RA (Semaglutida): Benefício CV e renal (redução de albuminúria).'
    ]
  },
  {
    id: 'has',
    title: 'Hipertensão Arterial',
    subtitle: 'Nefroesclerose Hipertensiva — Causa #2',
    icon: Activity,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-100 dark:border-blue-900/30',
    mechanism: [
      'PA elevada transmitida para os capilares glomerulares (falha da arteríola aferente).',
      'Barotrauma crônico: Hialinose arteriolar e isquemia glomerular focal.',
      'Perda de néfrons por isquemia (inicialmente albuminúria baixa a moderada).'
    ],
    progression: [
      'Isquemia glomerular → hiperfiltração compensatória nos néfrons remanescentes.',
      'Lesão isquêmica danifica túbulos e interstício → fibrose.',
      'Proteinúria tardia acelera a progressão.'
    ],
    treatment: [
      'Meta pressórica rigorosa: < 120/80 mmHg (SPRINT).',
      'IECA ou BRA obrigatórios: reduzem pressão intraglomerular.',
      'SGLT2i: benefício mesmo sem diabetes.',
      'Evitar AINEs: pioram a isquemia renal.'
    ]
  },
  {
    id: 'glom',
    title: 'Glomerulopatias',
    subtitle: 'IgA, Lúpica, Membranosa, etc.',
    icon: ShieldCheck,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-100 dark:border-purple-900/30',
    mechanism: [
      'Deposição de imunocomplexos ou ativação do complemento → inflamação glomerular.',
      'Ruptura da barreira de filtração → proteinúria maciça (A3 desde o início).',
      'Síndrome nefrótica ou nefrítica.'
    ],
    progression: [
      'Proteinúria maciça é o principal motor da progressão (lesão tubular direta).',
      'Inflamação glomerular ativa SRAA intrarrenal e citocinas pró-fibróticas.'
    ],
    treatment: [
      'Imunossupressão específica (Corticoides, Micofenolato, Rituximabe).',
      'IECA/BRA em dose máxima para redução de proteinúria.',
      'SGLT2i (evidência crescente, ex: NefroIgA).',
      'Controle rigoroso da PA (< 120/80).'
    ]
  },
  {
    id: 'cystic',
    title: 'Doenças Císticas',
    subtitle: 'Ex: DRPAD (Policística)',
    icon: Globe,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-100 dark:border-emerald-900/30',
    mechanism: [
      'Mutações PKD1/PKD2 → proliferação anormal de células tubulares → cistos.',
      'Cistos expandem e comprimem o parênquima normal → isquemia e fibrose.'
    ],
    progression: [
      'Compressão leva à perda de néfrons → hiperfiltração nos remanescentes.',
      'Fibrose intersticial proeminente e progressiva.',
      'Proteinúria geralmente baixa (A1) até estágios tardios.'
    ],
    treatment: [
      'Tolvaptan (Antagonista V2): Reduz formação de cistos e queda da TFG.',
      'Controle da PA (< 110/75 em alguns guidelines).',
      'Evitar cafeína (estimulante do AMPc que piora cistos).',
      'Aumento da ingestão hídrica (suprime vasopressina).'
    ]
  }
];

export default function CKDPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Header Section */}
      <header className="relative">
        <div className="flex items-center gap-2 text-brand-blue dark:text-blue-400 mb-1">
          <Droplet size={16} />
          <span className="text-xs font-bold uppercase tracking-[0.2em]">Fisiopatologia e Integração</span>
        </div>
        <h1 className="text-3xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">Doença Renal Crônica (DRC)</h1>
        <p className="text-ink-muted dark:text-slate-400 max-w-2xl">
          Como a causa inicial determina o tratamento, enquanto a progressão segue uma via final comum.
        </p>
      </header>

      {/* Bloco 1 & 2: Definição e Via Final Comum */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <section className="card p-6 border-l-4 border-l-brand-blue bg-card dark:bg-slate-800/50 border-line">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center text-brand-blue dark:text-blue-400">
              <ClipboardList size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Definição e Classificação</h2>
          </div>
          <div className="space-y-4 text-sm text-ink dark:text-slate-300 leading-relaxed">
            <p>
              A DRC é definida por <strong className="text-brand-navy dark:text-slate-100">TFG &lt; 60 mL/min/1.73m²</strong> ou <strong className="text-brand-navy dark:text-slate-100">albuminúria ≥ 30 mg/g</strong> por <strong className="text-brand-navy dark:text-slate-100">≥ 3 meses</strong>.
            </p>
            <div className="p-4 bg-bg dark:bg-slate-900/50 rounded-xl border border-line">
              <p className="text-xs font-black text-brand-blue dark:text-blue-400 uppercase tracking-widest mb-2">Classificação CGA</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="font-bold">C (Causa):</span> Determina o tratamento específico.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="font-bold">G (GFR/TFG):</span> Estágios G1 a G5.
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  <span className="font-bold">A (Albuminúria):</span> Estágios A1 a A3.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card p-6 border-l-4 border-l-amber-500 bg-card dark:bg-slate-800/50 border-line">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
              <Activity size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Via Final de Progressão</h2>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-amber-200 dark:bg-amber-900/30" />
            <div className="space-y-4 pl-8">
              {[
                { label: 'Hiperfiltração', desc: 'Aumento da pressão nos néfrons remanescentes.' },
                { label: 'Proteinúria', desc: 'Lesão direta aos túbulos pela carga proteica.' },
                { label: 'Inflamação', desc: 'Ativação de citocinas e estresse oxidativo.' },
                { label: 'Fibrose', desc: 'Substituição do parênquima por tecido cicatricial.' }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-amber-500 border-2 border-card dark:border-slate-800" />
                  <p className="text-sm font-bold text-brand-navy dark:text-slate-100">{step.label}</p>
                  <p className="text-xs text-ink-muted dark:text-slate-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Causas Específicas */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-bg-blue dark:bg-blue-500/20 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <Search size={20} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy dark:text-slate-100">Causas e Tratamentos Específicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAUSES.map((cause) => (
            <div key={cause.id} className={cn("card p-6 border-line flex flex-col gap-6", cause.bg)}>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-100 dark:bg-slate-800 shadow-sm", cause.color)}>
                    <cause.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100">{cause.title}</h3>
                    <p className="text-xs font-bold uppercase tracking-widest opacity-70">{cause.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-ink-muted dark:text-slate-500 mb-2">Mecanismo Inicial</h4>
                  <ul className="space-y-1.5">
                    {cause.mechanism.map((m, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink dark:text-slate-300">
                        <ArrowRight size={12} className={cn("mt-0.5 shrink-0", cause.color)} />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-ink-muted dark:text-slate-500 mb-2">Tratamento Específico</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {cause.treatment.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-100/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-xs font-medium text-brand-navy dark:text-slate-200">
                        <Pill size={14} className={cause.color} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Esquema Integrado */}
      <section className="card p-8 bg-slate-900 dark:bg-slate-950 text-white shadow-2xl relative overflow-hidden border-line dark:border-slate-800">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Heart size={120} />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-amber-400">
            <Activity size={24} />
            Esquema Integrado: Causa → Via Final → Tratamento
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Col 1: Causas */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-4">Causas Específicas</h3>
              {['Diabetes', 'Hipertensão', 'Glomerulopatias', 'Doenças Císticas'].map((c, i) => (
                <div key={i} className="p-3 bg-slate-800/40 rounded-xl border border-white/10 text-center text-sm font-bold">
                  {c}
                </div>
              ))}
            </div>

            {/* Col 2: Via Final */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-8 bg-gradient-to-b from-transparent to-amber-500" />
              <div className="p-6 bg-amber-500/10 rounded-2xl border-2 border-amber-500/30 text-center shadow-lg shadow-amber-500/10">
                <h3 className="text-sm font-black text-amber-400 uppercase mb-2">Via Final Comum</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Hiperfiltração • Proteinúria • SRAA Intrarrenal • TGF-β • Fibrose • Inflamação Crônica
                </p>
              </div>
              <div className="w-px h-8 bg-gradient-to-t from-transparent to-amber-500" />
            </div>

            {/* Col 3: Tratamentos */}
            <div className="space-y-4">
              <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest text-center mb-4">Estratégia Terapêutica</h3>
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/30">
                <p className="text-[10px] font-black text-emerald-400 uppercase mb-2">Base (Para Todos)</p>
                <p className="text-xs text-slate-200">IECA/BRA + SGLT2i + Controle PA + Estatina</p>
              </div>
              <div className="p-4 bg-blue-500/10 rounded-xl border border-blue-500/30">
                <p className="text-[10px] font-black text-blue-400 uppercase mb-2">Específico (Por Causa)</p>
                <p className="text-xs text-slate-200">Imunossupressão, Tolvaptan, Finerenona, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resumo Clínico */}
      <section className="p-8 rounded-3xl bg-brand-navy dark:bg-slate-900 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <ShieldCheck size={28} className="text-amber-400" />
          <h2 className="text-2xl font-bold tracking-tight">Resumo Clínico Integrado</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-slate-300 dark:text-slate-400 text-sm leading-relaxed">
              A via final comum explica por que <strong className="text-white">IECA/BRA e SGLT2i</strong> são úteis em todas as causas (reduzem pressão intraglomerular e proteinúria).
            </p>
            <div className="p-4 bg-slate-800/40 rounded-xl border border-white/10">
              <p className="text-xs italic text-slate-200">
                "Não trate apenas a TFG; trate a causa e a proteinúria. A albuminúria é um alvo terapêutico universal."
              </p>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest">Checklist de Aplicação</h4>
            {[
              'Classificação CGA completa (ex: G3aA2).',
              'Investigação ativa da causa (C).',
              'Nefroproteção padrão iniciada (IECA/BRA + SGLT2i).',
              'Meta de PA < 120/80 se proteinúria presente.',
              'Avaliação de terapias específicas (Finerenona, Tolvaptan, etc).'
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alerta de Próximos Passos */}
      <div className="p-6 bg-amber-50 dark:bg-amber-900/20 rounded-2xl border border-amber-100 dark:border-amber-900/30 flex items-center gap-4">
        <AlertCircle className="text-amber-600 dark:text-amber-400 shrink-0" />
        <p className="text-sm text-amber-800 dark:text-amber-300 font-medium italic">
          Próximo Bloco: Apresentação clínica e síndrome urêmica (Sinais de alerta e manifestações sistêmicas).
        </p>
      </div>
    </div>
  );
}
