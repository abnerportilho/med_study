import React, { useState } from 'react';
import { 
  Wind, 
  Layers, 
  Activity, 
  Search, 
  Info, 
  AlertCircle, 
  ArrowLeft, 
  ArrowRight,
  BookOpen,
  Focus,
  Microscope,
  Stethoscope,
  ChevronRight,
  ClipboardCheck,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

// --- Data ---

const ILD_DEFINITIONS = [
  {
    title: "Grupo Heterogêneo",
    desc: "Mais de 200 tipos diferentes de doenças caracterizadas por variados graus de inflamação e/ou fibrose do interstício alveolar.",
    icon: Layers,
    color: "text-brand-blue"
  },
  {
    title: "Termo 'Guarda-chuva'",
    desc: "Atrange doenças que levam à inflamação e ao 'reparo patológico', prejudicando a difusão gasosa na barreira alvéolo-capilar.",
    icon: Wind,
    color: "text-emerald-500"
  },
  {
    title: "Curso Clínico",
    desc: "Normalmente insidioso e progressivo, com dispneia aos esforços, tosse seca, hipoxemia e declínio funcional.",
    icon: Activity,
    color: "text-rose-500"
  }
];

const TCAR_FINDINGS = [
  {
    pattern: "Vidro Fosco",
    desc: "Opacidade que aumenta a densidade pulmonar sem apagar os vasos subjacentes. Indica preenchimento parcial de alvéolos por inflamação ou fibrose fina.",
    significance: "Sugere atividade ou PINE celular. Frequentemente reversível com tratamento.",
    icon: Wind,
    color: "text-emerald-400"
  },
  {
    pattern: "Faveolamento (Honeycombing)",
    desc: "Cistos aéreos (3-10mm) com paredes bem definidas, geralmente empilhados em várias camadas subpleurais.",
    significance: "Marco do padrão PIU (UIP). Indica fibrose irreversível e destruição arquitetural.",
    icon: Layers,
    color: "text-amber-500"
  },
  {
    pattern: "Reticulação",
    desc: "Opacidades lineares que formam uma rede. Corresponde ao espessamento dos septos interlobulares ou intralobulares.",
    significance: "Presente em quase todas as DPIs fibróticas. Se 'lisa', sugere edema ou congestão linfática.",
    icon: Activity,
    color: "text-brand-blue"
  },
  { pattern: "Bronquiectasias de Tração",
    desc: "Dilatações brônquicas irregulares causadas pela retração do parênquima pulmonar fibrótico adjacente.",
    significance: "Sinal altamente específico de fibrose pulmonar pulmonar crônica.",
    icon: Zap,
    color: "text-rose-500"
  },
  {
    pattern: "Consolidação",
    desc: "Aumento homogêneo de densidade que apaga os vasos. O ar alveolar é totalmente substituído.",
    significance: "Característico da Pneumonia em Organização (POC) ou exacerbações agudas.",
    icon: AlertCircle,
    color: "text-red-500"
  }
];

const ANATOMICAL_UNITS = [
  {
    id: 'lobule',
    title: 'Lóbulo Pulmonar Secundário',
    desc: 'Unidade anatômica fundamental. Contém septos interlobulares (veias e linfáticos), bronquíolo lobular e artéria pulmonar central.',
    details: [
      'Septo Interlobular: Tecido conjuntivo com veias e linfáticos.',
      'Centro do Lóbulo: Artéria e bronquíolo terminal.',
      'Linfáticos: Peribroncovasculares e subpleurais.'
    ]
  },
  {
    id: 'barrier',
    title: 'Barreira Alvéolo-Capilar',
    desc: 'Onde ocorre a difusão gasosa (O2/CO2). O espessamento do interstício por fibrose ou edema dificulta este processo.',
    details: [
      'Espaço Intersticial: Localizado entre o epitélio alveolar e o endotélio capilar.',
      'Epitélio Alveolar: Pneumócitos tipo I e II.',
      'Prejuízo Funcional: ↓ DLCO (Difusão de CO) é um marcador precoce.'
    ]
  }
];

const MAJOR_ILD_TYPES = [
  {
    id: 'piu',
    name: 'PIU / FPI',
    fullName: 'Pneumonia Intersticial Usual / Fibrose Pulmonar Idiopática',
    prototype: 'FPI',
    color: 'bg-brand-blue',
    accent: 'text-brand-blue',
    border: 'border-brand-blue/30',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.5)]',
    features: [
      'Predomínio basal e periférico',
      'Faveolamento (Honeycombing) presente',
      'Bronquiectasias de tração',
      'Ausência de achados alternativos',
      'Heterogeneidade espacial e temporal'
    ],
    pathologyDetail: {
      title: 'Achados Histológicos (UIP)',
      description: 'Presença de focos fibroblásticos, fibrose colágena densa misturada com áreas de pulmão normal e faveolamento microscópico. A marca registrada é a heterogeneidade temporal.',
      impact: 'Distorção arquitetural irreversível.'
    },
    profile: 'Homens > 60 anos, tabagistas, crepitações em velcro.',
    prognosis: 'Pior prognóstico entre as DPIs.',
    pearls: [
      { title: 'Dica Diagnóstica', text: 'O faveolamento na FPI é tipicamente subpleural e basal.' },
      { title: 'Alerta Clínico', text: 'Presença de vidro fosco extenso sugere diagnóstico alternativo ou exacerbação aguda.' }
    ]
  },
  {
    id: 'pine',
    name: 'PINE',
    fullName: 'Pneumonia Intersticial Não Específica',
    prototype: 'Doenças Autoimunes / Colagenoses',
    color: 'bg-emerald-500',
    accent: 'text-emerald-500',
    border: 'border-emerald-500/30',
    glow: 'shadow-[0_0_30px_rgba(16,185,129,0.5)]',
    features: [
      'Vidro Fosco predominante, periférico e simétrico',
      'Pode haver "sparing subpleural"',
      'Imagem homogênea (mesmo estágio)',
      'Acentuado em lobos inferiores'
    ],
    pathologyDetail: {
      title: 'Padrão Histopatológico',
      description: 'Inflamação ou fibrose que é arquiteturalmente uniforme, sem os focos fibroblásticos e a heterogeneidade temporal vista na PIU.',
      impact: 'Arquitetura pulmonar preservada.'
    },
    subtypes: [
      {
        name: 'Celular',
        description: 'Infiltração inflamatória sem fibrose significativa.',
        tcar: 'Vidro fosco puro, pouca ou nenhuma reticulação.',
        clinical: 'Subagudo (semanas a meses).',
        response: 'Excelente resposta a corticoide.',
        prognosis: 'Bom.',
        prototypes: 'Drogas, Colagenoses precoces, PINE Idiopática.'
      },
      {
        name: 'Fibrótica',
        description: 'Fibrose uniforme e difusa com preservação da arquitetura.',
        tcar: 'Vidro fosco + reticulado, bronquiectasias de tração, eventual faveolamento.',
        clinical: 'Crônico/progressivo (meses a anos).',
        response: 'Parcial ou ausente; pode progredir.',
        prognosis: 'Pior que celular, melhor que PIU/FPI.',
        prototypes: 'Esclerose Sistêmica (ES), Artrite Reumatóide (AR), Crônica.'
      }
    ],
    clinicalSteps: [
      { category: 'Exame Físico', items: ['Xeroftalmia/xerostomia? (Sjögren)', 'Raynaud/Esclerodactilia? (Esclerodermia)', 'Rash heliotrópico? (Dermatomiosite)'] },
      { category: 'Sorologias', items: ['FAN, ENA (anti-SSA, SSB, Scl70, Jo1)', 'Fator Reumatoide, anti-CCP', 'CK, aldolase (se miosite)'] },
      { category: 'História', items: ['Exposição a aves, fungos ou umidade?', 'Uso de drogas (Amiodarona, quimio)?'] }
    ],
    prognosis: 'Variável dependendo do subtipo e causa base.'
  },
  {
    id: 'poc',
    name: 'POC / PO',
    fullName: 'Pneumonia em Organização',
    prototype: 'Padrão Migratório',
    color: 'bg-rose-500',
    accent: 'text-rose-500',
    border: 'border-rose-500/30',
    glow: 'shadow-[0_0_30px_rgba(244,63,94,0.5)]',
    features: [
      'Consolidações peribroncovasculares',
      'Opacidades que "migram" na imagem',
      'Início subagudo (semanas)',
      'Excelente resposta a corticoide'
    ],
    pathologyDetail: {
      title: 'Anatomia Patológica',
      description: 'Pólipos de tecido conjuntivo frouxo (corpos de Masson) dentro dos ductos alveolares e alvéolos. Sem distorção da arquitetura básica.',
      impact: 'Potencialmente reversível com terapia.'
    },
    prognosis: 'Geralmente bom se tratada precocemente.',
    pearls: [
      { title: 'Padrão Clássico', text: 'As consolidações tendem a "migrar" de um lobo para outro em exames sucessivos.' },
      { title: 'Sinal do Atol', text: 'O sinal do halo invertido é altamente sugestivo de POC.' }
    ]
  }
];

// --- Sub-components ---

const SectionHeader = ({ title, icon: Icon, color }: { title: string, icon: any, color: string }) => (
  <div className="flex items-center gap-4 mb-8">
    <div className={cn("w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700 shadow-xl", color)}>
      <Icon size={28} />
    </div>
    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">{title}</h2>
  </div>
);

export default function InterstitialMain() {
  const [activeTab, setActiveTab] = useState<'def' | 'anat' | 'radiology' | 'diseases'>('def');
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const [selectedSubtype, setSelectedSubtype] = useState<string | null>(null);

  const TABS = [
    { id: 'def', label: 'Conceito', icon: Info },
    { id: 'anat', label: 'Anatomia', icon: Microscope },
    { id: 'radiology', label: 'Tomografia', icon: Search },
    { id: 'diseases', label: 'Doenças', icon: ClipboardCheck }
  ];

  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900/50 rounded-2xl border border-slate-800 w-fit mx-auto lg:mx-0">
        {TABS.map(tab => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as any);
              setSelectedDisease(null);
            }}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest italic transition-all",
              activeTab === tab.id 
                ? "bg-brand-blue text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                : "text-slate-500 hover:text-white hover:bg-slate-800"
            )}
          >
            <tab.icon size={14} />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* TAB 1: DEFINITIONS */}
        {activeTab === 'def' && (
          <motion.div 
            key="def"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            <SectionHeader title="Definição e Escopo" icon={Info} color="text-brand-blue" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ILD_DEFINITIONS.map((def, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-800 border border-slate-700 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-slate-700/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-brand-blue/10 transition-colors"></div>
                  <def.icon className={cn("mb-6", def.color)} size={32} />
                  <h3 className="text-xl font-black text-white mb-4 uppercase italic tracking-tight">{def.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed italic">{def.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[3rem] bg-brand-blue/5 border-2 border-brand-blue/20 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-20 h-20 rounded-3xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20 shrink-0">
                  <Zap size={36} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white uppercase italic mb-2 tracking-tight">O Que Caracteriza a DPI?</h4>
                  <p className="text-slate-400 text-sm italic leading-relaxed">
                    É um processo de <span className="text-brand-blue font-bold">Inflamação</span> seguido por um <span className="text-emerald-500 font-bold">Reparo Patológico (Fibrose)</span>. O resultado final é o espessamento do interstício e a distorção da arquitetura alveolar, o que impede a troca gasosa eficiente.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 2: ANATOMY */}
        {activeTab === 'anat' && (
          <motion.div 
            key="anat"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            <SectionHeader title="Bases Anatômicas" icon={Microscope} color="text-emerald-500" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {ANATOMICAL_UNITS.map(unit => (
                <div key={unit.id} className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 shadow-2xl space-y-6">
                  <div>
                     <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2">{unit.title}</h3>
                     <p className="text-sm text-slate-400 italic leading-relaxed">{unit.desc}</p>
                  </div>
                  <div className="space-y-3">
                    {unit.details.map((detail, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-700 items-start">
                        <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 text-[10px] font-black shrink-0 border border-emerald-500/20">
                          {idx + 1}
                        </div>
                        <p className="text-[11px] text-slate-300 italic">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-[3rem] bg-slate-900 border-2 border-slate-800 text-center">
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4 italic">Ponto Fundamental</p>
              <h4 className="text-xl font-black text-white uppercase italic max-w-2xl mx-auto tracking-tight">
                "Fibrose Pulmonar = Deposição excessiva de matriz extracelular (MEC) por fibroblastos ativados."
              </h4>
            </div>
          </motion.div>
        )}

        {/* TAB 3: RADIOLOGY (TCAR) */}
        {activeTab === 'radiology' && (
          <motion.div 
            key="radiology"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            <SectionHeader title="Achados na TCAR" icon={Search} color="text-amber-500" />
            
            <div className="p-8 rounded-[3rem] bg-amber-500/5 border-2 border-amber-500/20 mb-8">
              <p className="text-sm md:text-base text-slate-400 italic leading-relaxed text-center">
                A <span className="text-white font-black italic uppercase">Tomografia de Alta Resolução (TCAR)</span> é o padrão-ouro para o diagnóstico não invasivo das DPIs, permitindo identificar padrões que correlacionam com a anatomia patológica.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {TCAR_FINDINGS.map((finding, idx) => (
                <div key={idx} className="p-8 rounded-[2.5rem] bg-slate-800 border border-slate-700 shadow-2xl space-y-6 hover:border-amber-500/30 transition-all group">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform", finding.color)}>
                      <finding.icon size={24} />
                    </div>
                    <h3 className="text-lg font-black text-white uppercase italic tracking-tight leading-none">{finding.pattern}</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 italic">Descrição</p>
                      <p className="text-xs text-slate-300 italic leading-relaxed">{finding.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-slate-700">
                      <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2 italic">Significado Clínico</p>
                      <p className="text-xs text-slate-400 italic leading-relaxed">{finding.significance}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 rounded-[4rem] bg-slate-900 border-2 border-slate-800 space-y-6">
               <div className="flex items-center gap-3">
                 <Focus size={24} className="text-brand-blue" />
                 <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">Comparativo de Padrões Fibróticos</h4>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700">
                     <h5 className="font-black text-xs text-brand-blue uppercase italic mb-3 tracking-widest border-b border-slate-700 pb-2">Padrão PIU (UIP)</h5>
                     <ul className="text-xs text-slate-400 italic space-y-2">
                        <li>• Faveolamento subpleural e basal</li>
                        <li>• Bronquiectasias de tração</li>
                        <li>• Reticulação periférica</li>
                        <li>• Gradiente ápice-base (piora na base)</li>
                     </ul>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700">
                     <h5 className="font-black text-xs text-emerald-500 uppercase italic mb-3 tracking-widest border-b border-slate-700 pb-2">Padrão PINE (NSIP)</h5>
                     <ul className="text-xs text-slate-400 italic space-y-2">
                        <li>• Vidro fosco predominante</li>
                        <li>• Poupamento subpleural (Sparing)</li>
                        <li>• Aspecto homogêneo e simétrico</li>
                        <li>• Menos faveolamento que a PIU</li>
                     </ul>
                  </div>
               </div>
            </div>
          </motion.div>
        )}


        {/* TAB 4: DISEASES */}
        {activeTab === 'diseases' && (
          <motion.div 
            key="diseases"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-10"
          >
            <SectionHeader title="Principais Padrões e Protótipos" icon={ClipboardCheck} color="text-brand-blue" />
            
            {/* Top Quick Focus Row to prime the space */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="p-8 rounded-[3rem] bg-indigo-500/5 border-2 border-indigo-500/20 flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                        <Zap size={24} />
                    </div>
                    <p className="text-sm md:text-base text-slate-400 italic leading-relaxed">
                        <span className="text-white font-black italic uppercase">Triagem Clínica:</span> A diferenciação entre padrões fibróticos (PIU) e inflamatórios (PINE/POC) orienta a agressividade da terapia inicial.
                    </p>
                </div>
                <div className="p-8 rounded-[3rem] bg-emerald-500/5 border-2 border-emerald-500/20 flex gap-6 items-center">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                        <Focus size={24} />
                    </div>
                    <p className="text-sm md:text-base text-slate-400 italic leading-relaxed">
                        <span className="text-white font-black italic uppercase">Foco no Diagnóstico:</span> A TCAR é o "estetoscópio" moderno na avaliação das pneumopatias intersticiais difusas.
                    </p>
                </div>
            </div>

            {/* Massive Command Tiles for Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
               {MAJOR_ILD_TYPES.map(disease => (
                  <button 
                    key={disease.id}
                    onClick={() => {
                      setSelectedDisease(disease.id === selectedDisease ? null : disease.id);
                      setSelectedSubtype(null);
                    }}
                    className={cn(
                      "p-12 rounded-[3.5rem] flex flex-col items-center text-center transition-all duration-500 border-2 shadow-xl group relative overflow-hidden",
                      selectedDisease === disease.id 
                        ? cn(disease.color, "border-transparent scale-[1.03] shadow-2xl") 
                        : "bg-slate-900 border-slate-800 hover:border-slate-600 hover:bg-slate-800/80"
                    )}
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 transition-all duration-500 group-hover:rotate-6",
                      selectedDisease === disease.id ? "bg-white/20 border-white/30 text-white" : "bg-slate-800 border-slate-700 text-slate-500 group-hover:text-white"
                    )}>
                       <ClipboardCheck size={32} />
                    </div>
                    <div className={cn(
                      "text-sm font-black uppercase italic tracking-[0.3em] mb-2 transition-colors relative z-10",
                      selectedDisease === disease.id ? "text-white/80" : "text-brand-blue"
                    )}>
                      Protótipo
                    </div>
                    <div className={cn(
                      "text-4xl font-black uppercase italic tracking-tighter transition-colors relative z-10 leading-none",
                      selectedDisease === disease.id ? "text-white" : "text-slate-200 group-hover:text-white"
                    )}>
                      {disease.name}
                    </div>
                  </button>
               ))}
            </div>

            <AnimatePresence mode="wait">
              {selectedDisease ? (
                <motion.div 
                  key={selectedDisease}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                  {(() => {
                    const disease = MAJOR_ILD_TYPES.find(d => d.id === selectedDisease);
                    if (!disease) return null;
                    return (
                      <div className={cn("p-8 md:p-12 rounded-[3.5rem] bg-slate-800 border-2 shadow-2xl relative overflow-hidden transition-colors duration-500", disease.border)}>
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                          <ClipboardCheck size={120} className={disease.accent} />
                        </div>
                        
                        <div className="mb-10 relative z-10">
                          <div className="border-b border-slate-700/50 pb-8">
                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tight mb-4 leading-none">
                              {disease.name}
                            </h3>
                            <p className="text-sm md:text-base font-bold text-slate-400 uppercase tracking-[0.2em] italic">
                              {disease.fullName}
                            </p>
                          </div>
                        </div>

                        <div className="relative z-10 space-y-12">
                          {/* Top Impact Row: Sub-patterns (PINE) / Deep Pathology (Others) */}
                          {disease.id === 'pine' && disease.subtypes ? (
                            <div className="space-y-8">
                                <div className="flex items-center gap-3 mb-6">
                                    <Layers className="text-emerald-500" size={24} />
                                    <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">Variantes Histopatológicas PINE</h4>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  {disease.subtypes.map(st => (
                                    <div key={st.name} className="flex flex-col">
                                      <button 
                                        onClick={() => setSelectedSubtype(st.name === selectedSubtype ? null : st.name)}
                                        className={cn(
                                          "flex-1 p-10 rounded-[3.5rem] text-center transition-all duration-700 border-2 relative overflow-hidden group mb-6",
                                          selectedSubtype === st.name 
                                            ? "bg-emerald-500 border-transparent shadow-[0_0_60px_rgba(16,185,129,0.4)] scale-[1.02]"
                                            : "bg-slate-900/80 border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900"
                                        )}
                                      >
                                        <div className="relative z-10">
                                            <span className={cn(
                                              "text-[10px] font-black uppercase tracking-[0.4em] mb-2 block italic",
                                              selectedSubtype === st.name ? "text-white/70" : "text-emerald-500"
                                            )}>Padrão Morfológico</span>
                                            <h4 className={cn(
                                              "text-4xl font-black uppercase italic tracking-tighter",
                                              selectedSubtype === st.name ? "text-white" : "text-slate-200"
                                            )}>{st.name}</h4>
                                        </div>
                                      </button>
                                      
                                      <AnimatePresence>
                                        {selectedSubtype === st.name && (
                                          <motion.div 
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            className="p-10 rounded-[4rem] bg-slate-900 border-2 border-emerald-500/30 space-y-8 shadow-inner"
                                          >
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                              <div className="space-y-3">
                                                <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em] italic">Descrição Histológica</p>
                                                <p className="text-lg text-white font-medium italic leading-relaxed">{st?.description}</p>
                                              </div>
                                              <div className="space-y-3">
                                                <p className="text-[11px] font-black text-emerald-400 uppercase tracking-[0.2em] italic">Achado no TCAR</p>
                                                <p className="text-lg text-white font-black italic">{st?.tcar}</p>
                                              </div>
                                            </div>
                                            <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Curso Clínico</p>
                                                    <p className="text-base text-slate-300 italic">{st?.clinical}</p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Resposta Terapêutica</p>
                                                    <p className="text-base text-slate-300 italic">{st?.response}</p>
                                                </div>
                                            </div>
                                            <div className="pt-8 border-t border-slate-800">
                                              <p className="text-[11px] font-black text-emerald-400 uppercase mb-2 tracking-widest italic tracking-[0.2em]">Protótipos / Etiologia Principal</p>
                                              <p className="text-2xl text-white font-black italic tracking-tighter">{st?.prototypes}</p>
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  ))}
                                </div>
                            </div>
                          ) : (
                            <div className={cn("p-12 rounded-[4rem] border-2 space-y-6 bg-slate-900/50", disease.border)}>
                                <div className="flex items-center gap-4">
                                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center border", disease.accent, disease.border)}>
                                    <Microscope size={32} />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-black text-slate-500 uppercase tracking-[0.4em] italic mb-1">Perfil de Patologia</h4>
                                    <h3 className="text-4xl font-black text-white italic tracking-tighter">{disease.pathologyDetail?.title}</h3>
                                  </div>
                                </div>
                                <p className="text-xl text-slate-300 italic leading-relaxed font-medium">
                                  {disease.pathologyDetail?.description}
                                </p>
                                <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <Zap size={18} className="text-amber-500" />
                                    <span className="text-sm font-black text-white uppercase tracking-widest italic">{disease.pathologyDetail?.impact}</span>
                                  </div>
                                  <p className="text-3xl font-black text-white italic opacity-20 uppercase tracking-tighter">{disease.id}</p>
                                </div>
                            </div>
                          )}

                          {/* Secondary Row: Balanced 2-Column Grid */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Column: Core Features */}
                            <div className="p-10 rounded-[3.5rem] bg-slate-900 border-2 border-slate-800/50 space-y-8">
                              <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] italic">Achados Semiológicos e Imagem</h4>
                              <div className="space-y-6">
                                {disease.features.map((f, i) => (
                                  <div key={i} className="flex items-start gap-4">
                                    <div className={cn("w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-1 border transition-all", disease.accent.replace('text', 'bg') + '/10', disease.accent, disease.border.replace('30', '20'))}>
                                      <ChevronRight size={14} />
                                    </div>
                                    <span className="text-lg text-slate-200 italic leading-snug">{f}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Right Column: Special Logic (Steps for PINE, Pearls for Others) */}
                            <div className="space-y-8">
                                {disease.id === 'pine' && (disease as any).clinicalSteps ? (
                                    <div className="p-10 rounded-[3.5rem] bg-emerald-500/5 border-2 border-emerald-500/10 space-y-8 h-full">
                                        <div className="flex items-center gap-3">
                                          <Activity className="text-emerald-500" size={20} />
                                          <h4 className="text-sm font-black text-white uppercase italic tracking-widest">Investigação Sistêmica Relevante</h4>
                                        </div>
                                        <div className="space-y-8">
                                          {(disease as any).clinicalSteps.map((step: any, idx: number) => (
                                            <div key={idx} className="space-y-3">
                                              <p className="text-[11px] font-black text-slate-500 uppercase italic tracking-widest">{idx + 1}. {step.category}</p>
                                              <div className="flex flex-wrap gap-2">
                                                {step.items.map((item: string, i: number) => (
                                                  <span key={i} className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-300 italic">{item}</span>
                                                ))}
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                    </div>
                                ) : (disease as any).pearls && (
                                    <div className="h-full flex flex-col gap-8">
                                      {(disease as any).pearls.map((pearl: any, i: number) => (
                                        <div key={i} className="flex-1 p-10 rounded-[3.5rem] bg-slate-900 border-2 border-slate-800 space-y-4">
                                          <p className={cn("text-[11px] font-black uppercase tracking-widest italic", disease.accent)}>{pearl.title}</p>
                                          <p className="text-lg text-slate-300 italic leading-relaxed">{pearl.text}</p>
                                        </div>
                                      ))}
                                    </div>
                                )}
                            </div>
                          </div>

                          {/* Footer Details Grid (Full Width presence) */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 rounded-[3.5rem] bg-slate-900/50 border-2 border-slate-800 flex flex-col justify-center">
                              <span className={cn("text-[11px] font-black uppercase tracking-widest mb-3 italic px-6 py-2 rounded-full w-fit bg-slate-800", disease.accent)}>Protótipo Principal</span>
                              <p className="text-2xl md:text-4xl font-black text-white italic tracking-tighter leading-none">{disease.prototype}</p>
                            </div>
                            <div className="p-10 rounded-[3.5rem] bg-slate-900/50 border-2 border-slate-800 flex flex-col justify-center">
                              <span className="text-[11px] font-black text-slate-500 uppercase mb-3 tracking-widest italic px-6 py-2 rounded-full w-fit bg-slate-800">Prognóstico Clínico</span>
                              <p className={cn("text-2xl md:text-4xl font-black italic tracking-tighter leading-none", disease.accent)}>{disease.prognosis}</p>
                            </div>
                          </div>

                          {disease.profile && (
                            <div className="p-10 rounded-[4rem] bg-slate-900 border-2 border-slate-800 flex items-center relative overflow-hidden">
                              <div className={cn("absolute top-0 left-0 w-2 h-full", disease.color)} />
                              <p className="text-xl md:text-2xl text-slate-100 italic leading-relaxed font-black tracking-tight">
                                {disease.profile}
                              </p>
                            </div>
                          ) }
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div 
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-800 rounded-[3rem]"
                >
                  <Focus className="text-slate-700 mb-4 animate-pulse" size={48} />
                  <p className="text-slate-500 font-black uppercase italic tracking-widest text-xs">Selecione uma patologia para explorar os detalhes</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* PONTOS DE ALERTA NO BRASIL */}
            <div className="p-8 md:p-12 rounded-[4rem] bg-slate-900 border-2 border-brand-blue/30 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
               <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20 shadow-lg">
                   <AlertCircle size={24} />
                 </div>
                 <h4 className="text-2xl font-black text-white uppercase italic tracking-tight">Panorama Epidemiológico (Brasil)</h4>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                 <div className="p-8 rounded-[2.5rem] bg-slate-800 border border-slate-700 hover:border-brand-blue/30 transition-all">
                   <h5 className="font-black text-xs text-white uppercase italic mb-4 tracking-[0.2em] border-b border-slate-700 pb-3">Prevalência e Etiologia</h5>
                   <p className="text-xs md:text-sm text-slate-400 leading-relaxed italic">
                     Destaque para a incidência de <span className="text-brand-blue font-bold">DPI por Colagenoses</span> (AR, ES) e <span className="text-emerald-500 font-bold">PH</span>. A exposição ambiental e ocupacional deve ser sempre investigada.
                   </p>
                 </div>
                 <div className="p-8 rounded-[2.5rem] bg-slate-800 border border-slate-700 hover:border-brand-blue/30 transition-all">
                   <h5 className="font-black text-xs text-white uppercase italic mb-4 tracking-[0.2em] border-b border-slate-700 pb-3">Decisão Terapêutica</h5>
                   <p className="text-xs md:text-sm text-slate-400 leading-relaxed italic">
                     A distinção entre o padrão <span className="text-white font-bold">PIU</span> (geralmente antifibróticos) e <span className="text-emerald-500 font-bold">PINE/PH</span> (geralmente imunossupressores) é o pilar do tratamento.
                   </p>
                 </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER INFO */}
      <footer className="mt-12 pt-12 border-t border-slate-800 flex flex-col items-center">
         <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-slate-600" />
            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest italic">Referência para Educação Médica — Baseado em Protocolos Atuais</span>
         </div>
      </footer>
    </div>
  );
}
