import React, { useState } from 'react';
import { 
  LayoutDashboard, Activity, Pill, Info, 
  ChevronRight, ArrowUpRight, Stethoscope, 
  Wind, AlertCircle, CheckCircle2, Search, Bell, ShieldAlert, Skull,
  Settings, Menu, TrendingUp, BookOpen, Users,
  ArrowRightLeft, Zap, ShieldCheck, CornerDownRight, Clock,
  Heart, Droplet, Moon, Sun, Globe, Flame, Notebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import PrescriptionDiary from './PrescriptionDiary';
import SCCPatho from './SCCPatho';
import ICClinical from './ICClinical';
import ICDiagnosis from './ICDiagnosis';
import ICClassification from './ICClassification';
import SCCClinical from './SCCClinical';
import SCCDiagnosis from './SCCDiagnosis';
import SCCTreatment from './SCCTreatment';
import ICPatho from './ICPatho';
import ICTreatment from './ICTreatment';
import ICAcute from './ICAcute';
import CKDPatho from './CKDPatho';
import CKDDiagnosis from './CKDDiagnosis';
import CKDClinical from './CKDClinical';
import CKDClassification from './CKDClassification';
import CKDTreatment from './CKDTreatment';
import CKDEpidemio from './CKDEpidemio';
import COPDPatho from './COPDPatho';
import COPDEpidemio from './COPDEpidemio';
import InterstitialMain from './InterstitialMain';
import GlomerulopatiasMain from './GlomerulopatiasMain';
import COPDClinical from './COPDClinical';
import COPDDiagnosis from './COPDDiagnosis';
import COPDTreatment from './COPDTreatment';
import HASPatho from './HASPatho';
import HASClinical from './HASClinical';
import HASDiagnosis from './HASDiagnosis';
import HASClassification from './HASClassification';
import HASTreatment from './HASTreatment';
import RheumaticPatho from './RheumaticPatho';
import RheumaticClinical from './RheumaticClinical';
import RheumaticDiagnosis from './RheumaticDiagnosis';
import RheumaticTreatment from './RheumaticTreatment';
import ValvularPatho from './ValvularPatho';
import ValvularClinical from './ValvularClinical';
import ValvularDiagnosis from './ValvularDiagnosis';
import ValvularTreatment from './ValvularTreatment';
import ValvularSelector from './ValvularSelector';
import ValvularSummary from './ValvularSummary';
import ValvularComparison from './ValvularComparison';
import PleuralPatho from './PleuralPatho';
import PleuralClinical from './PleuralClinical';
import PleuralDiagnosis from './PleuralDiagnosis';
import PleuralTreatment from './PleuralTreatment';
import PleuralClassification from './PleuralClassification';
import IraPatho from './IraPatho';
import IraClinical from './IraClinical';
import IraDiagnosis from './IraDiagnosis';
import IraTreatment from './IraTreatment';
import IraClassification from './IraClassification';
import PneumoniaPatho from './PneumoniaPatho';
import PneumoniaClinical from './PneumoniaClinical';
import PneumoniaDiagnosis from './PneumoniaDiagnosis';
import PneumoniaTreatment from './PneumoniaTreatment';
import ArritmiasFA from './ArritmiasFA';
import ArritmiasExtrasistoles from './ArritmiasExtrasistoles';
import ArritmiasBradicardias from './ArritmiasBradicardias';
import ArritmiasTaquicardias from './ArritmiasTaquicardias';
import EmergencyMain from './EmergencyMain';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const SPECIALTIES = [
  {
    id: 'diario',
    name: 'Diário de Prescrição',
    icon: Notebook,
    diseases: [
      { id: 'prescricoes', name: 'Prescrições Clínicas' },
      { id: 'kcl', name: '1. KCl 19,1%' },
      { id: 'soro', name: '2. Soro Fisiológico 0.9%' },
      { id: 'noradrenalina', name: '3. Droga Vasoativa (Nora)' },
      { id: 'insulina', name: '4. Insulina Regular' },
      { id: 'soroglicosado', name: '5. Soro Glicosado 5%' }
    ]
  },
  {
    id: 'pneumologia',
    name: 'Pneumologia',
    icon: Wind,
    diseases: [
      { id: 'asma', name: 'Asma' },
      { id: 'dpoc', name: 'DPOC' },
      { id: 'pneumonia', name: 'Pneumonia' },
      { id: 'derrame-pleural', name: 'Derrame Pleural' },
      { id: 'intersticiais', name: 'Doenças Intersticiais' }
    ]
  },
  {
    id: 'cardiologia',
    name: 'Cardiologia',
    icon: Heart,
    diseases: [
      { id: 'ic', name: 'Insuficiência Cardíaca' },
      { id: 'scc', name: 'Síndrome Coronariana Crônica' },
      { id: 'has', name: 'Hipertensão Arterial Sistêmica' },
      { id: 'arritmias', name: 'Arritmias' },
      { id: 'valvulares', name: 'Doenças Valvares' },
      { id: 'reumatica', name: 'Febre Reumática' }
    ]
  },
  {
    id: 'nefrologia',
    name: 'Nefrologia',
    icon: Droplet,
    diseases: [
      { id: 'glomerulopatias', name: 'Glomerulopatias' },
      { id: 'drc', name: 'Doença Renal Crônica' }
    ]
  },
  {
    id: 'emergencia',
    name: 'Emergência',
    icon: ShieldAlert,
    diseases: [
      { id: 'intoxicacoes', name: 'Intoxicações Exógenas' },
      { id: 'cad', name: 'Cetoacidose Diabética' },
      { id: 'hipoglicemia', name: 'Hipoglicemia' },
      { id: 'eap', name: 'Edema Agudo de Pulmão' },
      { id: 'sca', name: 'Síndrome Coronariana Aguda' }
    ]
  }
];

const STEPS = [
  { 
    id: 1, 
    label: 'Etapas 1 – 2', 
    shortLabel: 'S1-2',
    desc: 'Sintomas < 2×/semana ou sintomas ocasionais.',
    color: 'bg-blue-500',
    t1: {
      meds: ['ICS', 'Formoterol'],
      strategy: 'AIR (As-needed)',
      dose: 'Dose baixa (se necessário)',
      note: 'Estratégia AIR: um único dispositivo cobre manutenção e resgate.'
    },
    t2: {
      strategy: 'Opções Alternativas',
      subSteps: [
        {
          label: 'Etapa 1',
          meds: ['ICS', 'SABA'],
          dose: 'ICS + SABA (se necessário)',
          note: 'Tomar ICS sempre que usar SABA para resgate.'
        },
        {
          label: 'Etapa 2',
          meds: ['ICS', 'LABA'],
          dose: 'Manutenção Diária',
          note: 'Uso regular de ICS + LABA (conforme solicitado).'
        }
      ]
    }
  },
  { 
    id: 3, 
    label: 'Etapa 3', 
    shortLabel: 'S3',
    desc: 'Sintomas maioria dos dias. Despertar noturno frequente.',
    color: 'bg-green-500',
    t1: {
      meds: ['ICS', 'Formoterol'],
      strategy: 'SMART (Manutenção + Alívio)',
      dose: 'Dose baixa contínua',
      note: 'SMART: mesmo inalador para manutenção regular + resgate na crise.'
    },
    t2: {
      meds: ['ICS', 'LABA'],
      strategy: 'Manutenção Fixa + SABA',
      dose: 'Dose baixa contínua',
      note: 'SABA separado como resgate. Não mistura dispositivos de LABA/SABA.'
    }
  },
  { 
    id: 4, 
    label: 'Etapa 4', 
    shortLabel: 'S4',
    desc: 'Sintomas diários / graves. Exacerbações frequentes.',
    color: 'bg-orange-500',
    t1: {
      meds: ['ICS', 'Formoterol'],
      strategy: 'SMART (Manutenção + Alívio)',
      dose: 'Dose média contínua',
      note: 'Add-on LAMA (tiotrópio) se não controlado no Step 4 com dose média.'
    },
    t2: {
      meds: ['ICS', 'LABA'],
      strategy: 'Manutenção Fixa + SABA',
      dose: 'Dose média contínua',
      note: 'Add-on LAMA (tiotrópio) se não controlado no Step 4 com dose média.'
    }
  },
  { 
    id: 5, 
    label: 'Etapa 5', 
    shortLabel: 'S5',
    desc: 'Asma grave refratária. Necessita add-on biológico.',
    color: 'bg-rose-500',
    t1: {
      meds: ['ICS', 'Formoterol', 'LAMA'],
      strategy: 'SMART + Biológico',
      dose: 'Dose alta contínua',
      note: 'Fenótipo Tipo 2 High: Omalizumabe, Mepolizumabe, Benralizumabe, Dupilumabe.'
    },
    t2: {
      meds: ['ICS', 'LABA', 'LAMA'],
      strategy: 'Manutenção Fixa + Bio',
      dose: 'Dose alta contínua',
      note: 'Seleção por fenótipo/endótipo. Avaliar FeNO, eosinófilos e IgE.'
    }
  }
];

const COMBOS_T1 = [
  { brand: 'Symbicort®', drugs: ['Budesonida', 'Formoterol'], device: 'Turbuhaler / Spray', doses: ['6/100', '6/200', '12/400'] },
  { brand: 'Alenia®', drugs: ['Budesonida', 'Formoterol'], device: 'Cáps. Inalatórias', doses: ['6/100', '6/200', '12/400'] },
  { brand: 'Foster®', drugs: ['Beclometasona', 'Formoterol'], device: 'Spray / Nexthaler', doses: ['6/100', '6/200'] },
  { brand: 'Duoresp®', drugs: ['Budesonida', 'Formoterol'], device: 'Spiromax', doses: ['6/160', '6/320'] },
];

const COMBOS_T2 = [
  { brand: 'Seretide®', drugs: ['Fluticasona', 'Salmeterol'], device: 'Diskus / Spray', doses: ['50/100', '50/250', '50/500'] },
  { brand: 'Relvar®', drugs: ['Fluticasona', 'Vilanterol'], device: 'Ellipta', doses: ['92/22', '184/22'] },
  { brand: 'Logat®', drugs: ['Fluticasona', 'Salmeterol'], device: 'Cáps. Inalatórias', doses: ['50/250', '50/500'] },
  { brand: 'Advair®', drugs: ['Fluticasona', 'Salmeterol'], device: 'Diskus', doses: ['50/100', '50/250', '50/500'] },
];

const SABA = [
  { brand: 'Aerolin® / Clenil®', drugs: ['Salbutamol'], device: 'Spray / Nebulização', doses: ['100mcg'] },
  { brand: 'Berotec®', drugs: ['Fenoterol'], device: 'Gotas', doses: ['0.25mg/gota'] },
];

const COMBOS_TRIPLE = [
  { brand: 'Trelegy®', drugs: ['Fluticasona', 'Umeclidínio', 'Vilanterol'], track: 'T2', doses: ['92/55/22', '184/55/22'] },
  { brand: 'Trimbow®', drugs: ['Beclometasona', 'Glicopirrônio', 'Formoterol'], track: 'T1/T2', doses: ['100/6/10', '200/6/10'] },
  { brand: 'Enerzair®', drugs: ['Mometasona', 'Glicopirrônio', 'Indacaterol'], track: 'T2', doses: ['150/50/160'] },
];

const IMMUNOBIOLOGICS = [
  { 
    name: 'Omalizumabe', 
    target: 'Anti-IgE', 
    mechanism: 'Liga-se à IgE livre, impedindo a ligação ao receptor de alta afinidade nos mastócitos e basófilos.',
    dose: '75-600mg SC a cada 2 ou 4 semanas (baseado em peso e IgE total).',
    indication: 'Asma alérgica grave.'
  },
  { 
    name: 'Mepolizumabe', 
    target: 'Anti-IL5', 
    mechanism: 'Anticorpo monoclonal que se liga à IL-5, impedindo sua ligação ao receptor nos eosinófilos.',
    dose: '100mg SC a cada 4 semanas.',
    indication: 'Asma eosinofílica grave.'
  },
  { 
    name: 'Benralizumabe', 
    target: 'Anti-IL5Rα', 
    mechanism: 'Liga-se ao receptor IL-5Rα, induzindo citotoxicidade celular dependente de anticorpos (depleção de eosinófilos).',
    dose: '30mg SC a cada 4 semanas (3 doses iniciais), depois a cada 8 semanas.',
    indication: 'Asma eosinofílica grave.'
  },
  { 
    name: 'Dupilumabe', 
    target: 'Anti-IL4Rα / IL-13', 
    mechanism: 'Bloqueia a subunidade alfa do receptor de IL-4, inibindo a sinalização de IL-4 e IL-13.',
    dose: '200mg ou 300mg SC a cada 2 semanas.',
    indication: 'Asma grave Tipo 2 ou dependente de corticoide oral.'
  },
  { 
    name: 'Tezepelumabe', 
    target: 'Anti-TSLP', 
    mechanism: 'Bloqueia a linfopoietina estromal tímica (TSLP), uma citocina epitelial "upstream".',
    dose: '210mg SC a cada 4 semanas.',
    indication: 'Asma grave (amplo espectro, independente de biomarcadores).'
  }
];

const MIND_MAP_DATA = [
  {
    category: 'β-AGONISTAS',
    icon: Zap,
    color: 'bg-gradient-to-r from-yellow-500/80 to-yellow-600/90',
    sub: [
      { label: 'LABA', items: ['Formoterol', 'Salmeterol', 'Vilanterol', 'Olodaterol'], icon: Wind },
      { label: 'SABA', items: ['Salbutamol (Aerolin)', 'Fenoterol (Berotec)'], icon: Wind }
    ]
  },
  {
    category: 'ANTI-MUSCARÍNICOS',
    icon: Activity,
    color: 'bg-gradient-to-r from-emerald-600/80 to-emerald-700/90',
    sub: [
      { label: 'LAMA', items: ['Tiotrópio', 'Umeclidínio', 'Glicopirrônio'], icon: Wind },
      { label: 'SAMA', items: ['Brometo de Ipratrópio'], icon: Wind }
    ]
  },
  {
    category: 'CORTICOIDES',
    icon: ShieldCheck,
    color: 'bg-gradient-to-r from-blue-600/80 to-blue-700/90',
    sub: [
      { label: 'INALATÓRIOS', items: ['Budesonida', 'Beclometasona', 'Fluticasona'], icon: Wind },
      { label: 'ORAIS', items: ['Prednisona', 'Prednisolona', 'Dexametasona'], icon: Pill }
    ]
  }
];

const DRUG_CLASSES = [
  {
    name: 'SABA (Beta-2 de Curta Ação)',
    description: 'Medicamentos de resgate/alívio rápido. Atuam relaxando a musculatura lisa brônquica em minutos.',
    icon: Zap,
    color: 'bg-orange-500',
    drugs: [
      { name: 'Salbutamol', brands: ['Aerolin', 'Clenil Compositum (assoc)'], doses: '100mcg/jato' },
      { name: 'Fenoterol', brands: ['Berotec'], doses: '0.25mg/gota' }
    ]
  },
  {
    name: 'ICS (Corticosteroides Inalatórios)',
    description: 'Tratamento de manutenção fundamental. Controlam a inflamação crônica das vias aéreas.',
    icon: ShieldCheck,
    color: 'bg-blue-500',
    drugs: [
      { name: 'Budesonida', brands: ['Busonid', 'Noex'], doses: '50mcg, 200mcg, 400mcg' },
      { name: 'Fluticasona', brands: ['Flixotide'], doses: '50mcg, 250mcg' },
      { name: 'Beclometasona', brands: ['Clenil'], doses: '50mcg, 200mcg, 250mcg' },
      { name: 'Ciclesonida', brands: ['Alvesco'], doses: '80mcg, 160mcg' }
    ]
  },
  {
    name: 'LABA (Beta-2 de Longa Ação)',
    description: 'Broncodilatação prolongada (12-24h). Nunca devem ser usados como monoterapia na asma.',
    icon: Activity,
    color: 'bg-purple-500',
    drugs: [
      { name: 'Formoterol', brands: ['Foradil', 'Fluir'], doses: '6mcg, 12mcg' },
      { name: 'Salmeterol', brands: ['Serevent'], doses: '25mcg, 50mcg' }
    ]
  },
  {
    name: 'LAMA (Antimuscarínicos de Longa Ação)',
    description: 'Antagonistas muscarínicos que auxiliam na broncodilatação. Usados como add-on no Step 4/5.',
    icon: Wind,
    color: 'bg-green-500',
    drugs: [
      { name: 'Tiotrópio', brands: ['Spiriva Respimat'], doses: '2.5mcg/jato' },
      { name: 'Umeclidínio', brands: ['Incruse Ellipta'], doses: '62.5mcg' },
      { name: 'Glicopirrônio', brands: ['Seebri'], doses: '50mcg' }
    ]
  }
];

const COMBINED_THERAPIES = [
  {
    name: 'ICS + LABA',
    description: 'Combinação preferencial para controle. Melhora a adesão e eficácia.',
    items: [
      { brand: 'Symbicort / Alenia', drugs: 'Budesonida + Formoterol', note: 'Pode ser usado no SMART' },
      { brand: 'Seretide / Advair', drugs: 'Fluticasona + Salmeterol', note: 'Manutenção fixa' },
      { brand: 'Relvar', drugs: 'Fluticasona + Vilanterol', note: 'Dose única diária' },
      { brand: 'Foster', drugs: 'Beclometasona + Formoterol', note: 'Partículas extrafinas' }
    ]
  },
  {
    name: 'Terapia Tripla (ICS + LABA + LAMA)',
    description: 'Máxima otimização inalatória antes de biológicos.',
    items: [
      { brand: 'Trelegy', drugs: 'Fluticasona + Umeclidínio + Vilanterol', note: 'Ellipta' },
      { brand: 'Trimbow', drugs: 'Beclometasona + Glicopirrônio + Formoterol', note: 'Spray / Nexthaler' },
      { brand: 'Enerzair', drugs: 'Mometasona + Glicopirrônio + Indacaterol', note: 'Breezhaler' }
    ]
  }
];

// --- Components ---

const SidebarItem = ({ icon: Icon, label, active = false, onClick, collapsed = false }: { icon: any, label: string, active?: boolean, onClick?: () => void, collapsed?: boolean }) => (
  <motion.div 
    whileHover={{ x: collapsed ? 0 : 4 }}
    onClick={onClick}
    className={cn(
      "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-300",
      active ? "bg-brand-blue text-white shadow-lg shadow-brand-blue/20" : "text-ink-muted hover:bg-brand-blue/5 hover:text-brand-blue",
      collapsed ? "justify-center px-0" : "px-4"
    )}
  >
    <Icon size={20} className="shrink-0" />
    {!collapsed && <span className="font-medium text-sm whitespace-nowrap overflow-hidden">{label}</span>}
  </motion.div>
);

const Chip = ({ children, color = "blue" }: { children: React.ReactNode, color?: string, key?: any }) => {
  const colors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/20 dark:text-blue-300 dark:border-blue-500/30",
    pink: "bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-500/20 dark:text-rose-300 dark:border-rose-500/30",
    orange: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/20 dark:text-orange-300 dark:border-orange-500/30",
    green: "bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-500/20 dark:text-emerald-300 dark:border-emerald-500/30",
    purple: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/20 dark:text-purple-300 dark:border-purple-500/30",
  };
  return (
    <span className={cn("px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border transition-colors", colors[color])}>
      {children}
    </span>
  );
};

const ComparisonCard = ({ track, data, color, icon: Icon }: { track: string, data: any, color: string, icon: any }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    className="card p-6 flex flex-col gap-5 relative overflow-hidden flex-1 bg-gradient-to-br from-card to-bg/30"
  >
    <div className={cn("absolute top-0 left-0 w-full h-1", color)}></div>
    <div className="flex justify-between items-start">
      <div className="flex items-center gap-3">
        <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", color)}>
          <Icon size={24} />
        </div>
        <div>
          <h3 className="font-bold text-xl text-brand-navy">Track {track}</h3>
          <p className="text-xs text-ink-muted font-bold uppercase tracking-widest">{data.strategy}</p>
        </div>
      </div>
      {!data.subSteps && <Chip color={track === 'T1' ? 'blue' : 'purple'}>{data.dose}</Chip>}
    </div>

    {data.subSteps ? (
      <div className="space-y-4">
        {data.subSteps.map((sub: any, idx: number) => (
          <div key={idx} className="p-4 rounded-2xl border border-line bg-gradient-to-br from-bg/50 to-bg/20 flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-brand-navy uppercase tracking-widest">{sub.label}</span>
              <Chip color="blue">{sub.dose}</Chip>
            </div>
            <div className="flex flex-wrap gap-2">
              {sub.meds.map((med: string) => (
                <Chip key={med} color={med === 'ICS' ? 'blue' : med === 'Formoterol' ? 'orange' : med === 'LABA' ? 'purple' : 'green'}>{med}</Chip>
              ))}
            </div>
            <p className="text-xs text-ink-muted italic leading-snug">{sub.note}</p>
          </div>
        ))}
      </div>
    ) : (
      <div className="space-y-4">
        <div>
          <p className="text-[10px] font-bold text-ink-muted uppercase tracking-wider mb-2">Composição Recomendada</p>
          <div className="flex flex-wrap gap-2">
            {data.meds.map((med: string) => (
              <Chip key={med} color={med === 'ICS' ? 'blue' : med === 'Formoterol' ? 'orange' : med === 'LABA' ? 'purple' : 'green'}>{med}</Chip>
            ))}
          </div>
        </div>

        <div className="bg-bg p-4 rounded-2xl border border-line">
          <div className="flex items-start gap-2">
            <Info size={16} className="text-brand-blue shrink-0 mt-0.5" />
            <p className="text-sm text-ink-muted leading-relaxed">
              {data.note}
            </p>
          </div>
        </div>
      </div>
    )}
  </motion.div>
);

const CLINICAL_TOPICS = [
  {
    id: 'achados',
    title: 'Achados Clínicos',
    icon: Activity,
    color: 'text-blue-700',
    bg: 'bg-bg-blue',
    border: 'border-blue-200',
    hover: 'hover:bg-blue-200 dark:hover:bg-blue-500/30',
    ring: 'ring-blue-400',
    shadow: '!shadow-blue-500/30',
    bar: 'bg-blue-700',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-brand-navy text-lg mb-1">Variabilidade (O Core da Asma)</h4>
          <p className="text-ink-muted leading-relaxed">A variabilidade não é um detalhe — ela é a asma. Um paciente com obstrução fixa e sintomas constantes não tem asma (tem DPOC ou bronquiectasia). O diagnóstico é feito pela história de flutuação dos sintomas, não pelo exame físico do momento, que pode estar completamente normal (ausculta limpa, SpO2 99%).</p>
        </div>
        <div>
          <h4 className="font-bold text-brand-navy text-lg mb-1">Anamnese Direcionada</h4>
          <p className="text-ink-muted leading-relaxed">O padrão de perguntas importa. Investigue: 1) Piora noturna (acordar às 3-4h da manhã com tosse/aperto). 2) Limitação ao exercício comparado a pares. 3) Tosse que piora com riso/frio. 4) Opressão torácica difusa que melhora com broncodilatador em minutos.</p>
        </div>
        <div>
          <h4 className="font-bold text-brand-navy text-lg mb-1">Impacto Funcional</h4>
          <p className="text-ink-muted leading-relaxed">Muitos pacientes normalizam a limitação. A pergunta de ouro: "O que você fazia há 2 anos que não faz mais?". O uso de SABA &gt;2x/semana (fora exercício) ou uso diário indica doença não controlada. Histórico de internação/UTI é o maior preditor de risco de morte.</p>
        </div>

        {/* Pérolas Clínicas (Merged from Sidebar) */}
        <div className="mt-8 pt-6 border-t border-line">
          <h4 className="font-bold text-brand-navy text-lg mb-4 flex items-center gap-2">
            <Activity className="text-brand-blue" size={20} />
            Pérolas Clínicas e Diagnóstico Diferencial
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
              <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><Wind className="text-brand-blue" size={16} /> Sibilância</h4>
              <p className="text-ink-muted text-sm leading-relaxed">
                <strong>Asma</strong> = difusa · bilateral · expiratória · variável.<br/>
                <strong>Estridor inspiratório</strong> = DCV.<br/>
                <strong>Unilateral</strong> = corpo estranho.<br/>
                <strong>Bilateral fixo ins+exp</strong> = tumor traqueia.<br/>
                <em>Asma leve pode não sibilar em repouso.</em>
              </p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
              <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><span className="text-lg">💨</span> Dispneia expiratória</h4>
              <p className="text-ink-muted text-sm leading-relaxed">
                "Não consigo soltar o ar" / "ar preso".<br/>
                <strong>ICC</strong> = inspiratória + ortopneica.<br/>
                <strong>Hiperventilação</strong> = subjetiva sem limitação objetiva.<br/>
                <strong>Asma</strong> = expiratória, melhora com BD.
              </p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
              <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><span className="text-lg">🔔</span> Tosse isolada</h4>
              <p className="text-ink-muted text-sm leading-relaxed">
                Seca · noturna · com riso/frio/exercício · sem sibilância audível. Subdiagnosticada — sai com antibiótico. <strong>Teste:</strong> responde a BD? ICS por 4 semanas?
              </p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
              <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><span className="text-lg">⬛</span> Opressão torácica</h4>
              <p className="text-ink-muted text-sm leading-relaxed">
                Bilateral · difusa · sem irradiação · melhora em minutos com SABA.<br/>
                <strong>Angina</strong> = irradia + não melhora com BD.<br/>
                <strong>Ansiedade</strong> = sem limitação funcional objetiva.
              </p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
              <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><span className="text-lg">🌙</span> Piora noturna</h4>
              <p className="text-ink-muted text-sm leading-relaxed">
                Cortisol baixo + tônus vagal ↑ + temperatura cai + CRF reduzida em supino + DRGE favorecido. Tudo convergindo. Acordar 1×/semana à noite = asma <strong>NÃO</strong> controlada.
              </p>
            </div>
            <div className="p-4 bg-bg-red rounded-xl border border-red-200 shadow-sm">
              <h4 className="font-bold text-red-700 mb-2 flex items-center gap-2"><AlertCircle size={16} /> Armadilha clínica</h4>
              <p className="text-red-800 dark:text-red-100 text-sm leading-relaxed">
                12,3% de controle adequado no Brasil = adaptação à limitação, não falta de remédio. Nunca perguntar "você tem falta de ar?" — a resposta vai ser não. Perguntar: "o que você fazia antes e não faz mais?" e "com que frequência usa o SABA?". Uso diário de SABA = doença ativa, não controle.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'exame',
    title: 'Exame Físico',
    icon: Stethoscope,
    color: 'text-purple-700',
    bg: 'bg-bg-purple',
    border: 'border-purple-200',
    hover: 'hover:bg-purple-200 dark:hover:bg-purple-500/30',
    ring: 'ring-purple-400',
    shadow: '!shadow-purple-500/30',
    bar: 'bg-purple-700',
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-brand-navy text-lg mb-1">Achados Comuns</h4>
          <p className="text-ink-muted leading-relaxed">Pode ser normal entre crises. Na crise leve/moderada: sibilos expiratórios difusos e bilaterais, além de tempo expiratório prolongado (expiração arrastada). Na asma crônica grave: hiperinsuflação (tórax em barril).</p>
        </div>
        <div>
          <h4 className="font-bold text-brand-navy text-lg mb-1">Tórax Silencioso</h4>
          <p className="text-ink-muted leading-relaxed">Sinal de emergência grave! Quando o broncoespasmo é muito severo, o fluxo aéreo reduz tanto que não há turbulência suficiente para gerar som. Paciente com esforço respiratório intenso e sem sibilos não melhorou, ele piorou drasticamente.</p>
        </div>
        <div>
          <h4 className="font-bold text-brand-navy text-lg mb-1">Pulso Paradoxal</h4>
          <p className="text-ink-muted leading-relaxed">Queda da PA sistólica &gt;10mmHg na inspiração. É um sinal de hiperinsuflação grave: a pressão intratorácica muito negativa dificulta o retorno venoso ao coração esquerdo e aumenta a pós-carga do ventrículo direito. Marca gravidade extrema.</p>
        </div>
      </div>
    )
  },
  {
    id: 'gatilhos',
    title: 'Fatores Precipitantes',
    icon: AlertCircle,
    color: 'text-orange-700',
    bg: 'bg-bg-orange',
    border: 'border-orange-200',
    hover: 'hover:bg-orange-200 dark:hover:bg-orange-500/30',
    ring: 'ring-orange-400',
    shadow: '!shadow-orange-500/30',
    bar: 'bg-orange-700',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
          <h4 className="font-bold text-brand-navy mb-2">Alérgenos</h4>
          <p className="text-ink-muted text-sm leading-relaxed">Ácaros, fungos, pólen e pelos ativam a cascata IgE-mastócito. Piora em casa e melhora em viagens sugere sensibilização. Investigação: IgE específica ou teste cutâneo.</p>
        </div>
        <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
          <h4 className="font-bold text-brand-navy mb-2">Exercício e Ar Frio</h4>
          <p className="text-ink-muted text-sm leading-relaxed">Mecanismo osmótico e reflexo vagal. Broncoespasmo ocorre 5-10 min APÓS o exercício. Prevenção: SABA 15 min antes.</p>
        </div>
        <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
          <h4 className="font-bold text-brand-navy mb-2">Infecções Virais</h4>
          <p className="text-ink-muted text-sm leading-relaxed">Rinovírus lesam o epitélio e reduzem resposta ao corticoide. Conduta: SABA extra e dobrar ICS por 7-14 dias reduz o risco de exacerbação.</p>
        </div>
        <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
          <h4 className="font-bold text-brand-navy mb-2">AINEs e AAS (AERD)</h4>
          <p className="text-ink-muted text-sm leading-relaxed">Tríade: Asma + Polipose Nasal + Intolerância a AAS. Respondem bem ao Montelucaste. Checar antes de prescrever AINEs!</p>
        </div>
        <div className="p-4 bg-card rounded-xl border border-line shadow-sm md:col-span-2">
          <h4 className="font-bold text-brand-navy mb-2">Asma Ocupacional</h4>
          <p className="text-ink-muted text-sm leading-relaxed">Piora no trabalho, melhora nas férias. Comum em padeiros, pintores, etc. Afastamento precoce pode curar a doença antes do remodelamento irreversível.</p>
        </div>
      </div>
    )
  },
  {
    id: 'idade',
    title: 'Faixas Etárias',
    icon: Users,
    color: 'text-emerald-700',
    bg: 'bg-bg-green',
    border: 'border-emerald-200',
    hover: 'hover:bg-emerald-200 dark:hover:bg-emerald-500/30',
    ring: 'ring-emerald-400',
    shadow: '!shadow-emerald-500/30',
    bar: 'bg-emerald-700',
    content: (
      <div className="space-y-4">
        <ul className="list-disc pl-5 space-y-3 text-ink-muted leading-relaxed">
          <li><strong>&lt; 5 anos:</strong> Sibilância viral recorrente. Usar Índice Preditivo de Asma (API) para avaliar risco de persistência.</li>
          <li><strong>Escolares/Adolescentes:</strong> Apresentação clássica. Atenção: podem evitar exercícios por desconforto e dizer que "não gostam" de esportes.</li>
          <li><strong>Adultos:</strong> Diferenciar de DPOC. Tabagismo (&gt;10 anos-maço) sugere DPOC; atopia prévia sugere asma.</li>
          <li><strong>Idosos:</strong> Frequentemente subdiagnosticado. Normalizam a dispneia como "coisa da idade".</li>
        </ul>
      </div>
    )
  },
  {
    id: 'classificacao',
    title: 'Controle da Asma',
    icon: ShieldCheck,
    color: 'text-indigo-700',
    bg: 'bg-bg-blue',
    border: 'border-indigo-200',
    hover: 'hover:bg-indigo-200 dark:hover:bg-indigo-500/30',
    ring: 'ring-indigo-400',
    shadow: '!shadow-indigo-500/30',
    bar: 'bg-indigo-700',
    content: (
      <div className="space-y-6">
        <p className="text-ink-muted leading-relaxed">
          A avaliação do controle da asma (baseada no GINA) considera os sintomas nas <strong>últimas 4 semanas</strong>. Faça as seguintes 4 perguntas:
        </p>
        
        <div className="bg-card p-5 rounded-xl border border-line shadow-sm">
          <h4 className="font-bold text-brand-navy mb-3">Questionário de Controle (Últimas 4 semanas)</h4>
          <ul className="space-y-3 text-ink-muted">
            <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">1.</span> Sintomas diurnos mais de 2 vezes por semana?</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">2.</span> Algum despertar noturno devido à asma?</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">3.</span> Uso de medicação de resgate (SABA) mais de 2 vezes por semana?</li>
            <li className="flex items-start gap-2"><span className="text-indigo-500 font-bold">4.</span> Alguma limitação de atividades devido à asma?</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 bg-bg-green rounded-xl border border-emerald-200 shadow-sm">
            <h4 className="font-bold text-emerald-700 mb-1">Bem Controlada</h4>
            <p className="text-sm text-emerald-800"><strong>Nenhum</strong> "Sim"</p>
            <p className="text-xs text-emerald-600 mt-2">Manter o tratamento atual e considerar step down se controlada por 3 meses.</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 shadow-sm">
            <h4 className="font-bold text-amber-700 mb-1">Parcialmente Controlada</h4>
            <p className="text-sm text-amber-800"><strong>1 a 2</strong> "Sim"</p>
            <p className="text-xs text-amber-600 mt-2">Considerar step up (subir um degrau no tratamento) para atingir o controle.</p>
          </div>
          <div className="p-4 bg-bg-red rounded-xl border border-red-200 shadow-sm">
            <h4 className="font-bold text-red-700 mb-1">Não Controlada</h4>
            <p className="text-sm text-red-800"><strong>3 a 4</strong> "Sim"</p>
            <p className="text-xs text-red-600 mt-2">Step up obrigatório. Checar adesão, técnica inalatória e comorbidades.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico',
    icon: CheckCircle2,
    color: 'text-teal-700',
    bg: 'bg-bg-teal',
    border: 'border-teal-200',
    hover: 'hover:bg-teal-200 dark:hover:bg-teal-500/30',
    ring: 'ring-teal-400',
    shadow: '!shadow-teal-500/30',
    bar: 'bg-teal-700',
    content: (
      <div className="space-y-6">
        <p className="text-ink-muted leading-relaxed">
          O diagnóstico da asma é baseado na história clínica de sintomas respiratórios variáveis e na confirmação da limitação variável do fluxo aéreo expiratório.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
            <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><Wind className="text-teal-600" size={16} /> Espirometria (Padrão-Ouro)</h4>
            <ul className="space-y-2 text-ink-muted text-sm leading-relaxed">
              <li><strong>Padrão Obstrutivo:</strong> Relação VEF1/CVF reduzida (geralmente &lt; 0.75 - 0.80 em adultos, &lt; 0.90 em crianças).</li>
              <li><strong>Prova Broncodilatadora (Reversibilidade):</strong> Aumento do VEF1 em <strong>≥ 12% e ≥ 200 mL</strong> (em adultos) após inalação de broncodilatador (SABA). Em crianças, aumento de ≥ 12% do previsto.</li>
            </ul>
          </div>
          
          <div className="p-4 bg-card rounded-xl border border-line shadow-sm">
            <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2"><Search className="text-teal-600" size={16} /> Testes Alternativos</h4>
            <p className="text-ink-muted text-sm leading-relaxed mb-2">Se a espirometria for normal, mas a suspeita clínica for alta:</p>
            <ul className="space-y-2 text-ink-muted text-sm leading-relaxed list-disc pl-4">
              <li><strong>Broncoprovocação (Metacolina/Exercício):</strong> Queda do VEF1 ≥ 20% (metacolina) ou ≥ 10% e 200mL (exercício).</li>
              <li><strong>Peak Flow (PFE):</strong> Variabilidade diurna média &gt; 10% (adultos) ou &gt; 13% (crianças) por 2 semanas.</li>
            </ul>
          </div>
        </div>

        <div className="p-4 bg-bg-teal rounded-xl border border-teal-200 shadow-sm">
          <h4 className="font-bold text-teal-800 mb-2 flex items-center gap-2"><AlertCircle size={16} /> Nota Importante</h4>
          <p className="text-teal-900 text-sm leading-relaxed">
            A espirometria pode ser totalmente normal em pacientes com asma fora das crises. Um exame normal <strong>não exclui</strong> o diagnóstico. Em crianças menores de 5 anos, o diagnóstico é eminentemente clínico e terapêutico (resposta ao tratamento).
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'consulta',
    title: 'Passo a Passo',
    icon: LayoutDashboard,
    color: 'text-pink-700',
    bg: 'bg-pink-100',
    border: 'border-pink-200',
    hover: 'hover:bg-pink-200',
    ring: 'ring-pink-400',
    shadow: '!shadow-pink-500/30',
    bar: 'bg-pink-700',
    content: (
      <div className="space-y-4 text-ink-muted leading-relaxed">
        <p className="font-medium text-brand-navy">Na prática, a consulta para suspeita de asma tem uma sequência clara:</p>
        <ol className="list-decimal pl-5 space-y-3">
          <li><strong>Mapear sintomas:</strong> Focar na variabilidade, gatilhos, piora noturna e impacto funcional.</li>
          <li><strong>Exame físico:</strong> Sabendo que pode estar normal e que isso não exclui o diagnóstico.</li>
          <li><strong>Espirometria:</strong> Com prova broncodilatadora. Se normal e a suspeita é forte: teste de exercício ou broncoprovocação.</li>
          <li><strong>Fenotipagem:</strong> Atopia? Eosinófilos? IgE? FeNO? Isso vai guiar o tratamento avançado.</li>
          <li><strong>Avaliar o controle:</strong> Usar os critérios do GINA para definir o step de tratamento.</li>
        </ol>
      </div>
    )
  }
];

const DISEASE_CONFIGS: Record<string, { title: string, subtitle: string, specialty: string }> = {
  'dpoc': { title: 'Manejo da DPOC', subtitle: 'Doença Pulmonar Obstrutiva Crônica — GOLD 2024.', specialty: 'Pneumologista' },
  'ic': { title: 'Manejo da Insuficiência Cardíaca', subtitle: 'Insuficiência Cardíaca — Diretriz SBC.', specialty: 'Cardiologista' },
  'scc': { title: 'Manejo da Síndrome Coronariana Crônica', subtitle: 'Síndrome Coronariana Crônica — Diretriz SBC.', specialty: 'Cardiologista' },
  'has': { title: 'Manejo da Hipertensão Arterial', subtitle: 'Hipertensão Arterial Sistêmica — Diretriz SBC.', specialty: 'Cardiologista' },
  'glomerulopatias': { title: 'Manejo das Glomerulopatias', subtitle: 'GN Primárias e Secundárias — Diretrizes KDIGO.', specialty: 'Nefrologista' },
  'drc': { title: 'Manejo da Doença Renal Crônica', subtitle: 'Doença Renal Crônica — KDIGO.', specialty: 'Nefrologista' },
  'valvulares': { title: 'Doenças Valvares', subtitle: 'Estenoses e Insuficiências — Resumo Clínico.', specialty: 'Cardiologista' },
  'reumatica': { title: 'Febre Reumática', subtitle: 'Febre Reumática Aguda e Cardiopatia Reumática.', specialty: 'Cardiologista' },
  'derrame-pleural': { title: 'Manejo do Derrame Pleural', subtitle: 'Derrame Pleural — Abordagem Diagnóstica e Terapêutica.', specialty: 'Pneumologista' },
  'pneumonia': { title: 'Manejo da Pneumonia', subtitle: 'PAC, Nosocomial e PAV — Protocolos Clínicos.', specialty: 'Pneumologista' },
  'arritmias': { title: 'Manejo das Arritmias', subtitle: 'Taquiarritmias e Bradiarritmias — Diretrizes SBC/ESC.', specialty: 'Cardiologista' },
  'intersticiais': { title: 'Doenças Intersticiais', subtitle: 'DPI — Abordagem Clínica, Radiológica e Patológica.', specialty: 'Pneumologista' },
  'intoxicacoes': { title: 'Intoxicações Exógenas', subtitle: 'Toxidromes, Antídotos e Protocolo SAMU.', specialty: 'Emergencista' },
  'cad': { title: 'Cetoacidose Diabética', subtitle: 'Protocolo de Glicemia e Fluídos.', specialty: 'Emergencista' },
  'hipoglicemia': { title: 'Manejo da Hipoglicemia', subtitle: 'Tríade de Whipple, Diagnóstico & Tratamento Imediato.', specialty: 'Emergencista' },
  'eap': { title: 'Edema Agudo de Pulmão', subtitle: 'Manejo de Congestão e IOT.', specialty: 'Emergencista' },
  'sca': { title: 'Síndrome Coronariana Aguda', subtitle: 'Estruturação de Risco & Reperfusão.', specialty: 'Emergencista' }
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('clinical');
  const [activeKeyword, setActiveKeyword] = useState('achados');
  const [activeStepId, setActiveStepId] = useState(1);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('diario');
  const [selectedDisease, setSelectedDisease] = useState('prescricoes');
  const [selectedValvopathy, setSelectedValvopathy] = useState<'eao' | 'iao' | 'emi' | 'imi' | 'pvm' | null>(null);
  const [showValvularComparison, setShowValvularComparison] = useState(false);
  const activeStep = STEPS.find(s => s.id === activeStepId) || STEPS[0];

  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);



  return (
    <div className="flex min-h-screen bg-bg text-ink">
      {/* Primary Sidebar (Specialties) */}
      <aside className="w-20 bg-brand-navy dark:bg-bg-blue border-r border-brand-navy/90 py-6 flex flex-col items-center gap-6 sticky top-0 h-[100dvh] z-50 shrink-0">
        <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center text-white shrink-0 mb-4 shadow-lg">
          <Stethoscope size={24} />
        </div>
        
        <div className="flex flex-col gap-4 w-full px-4">
          {SPECIALTIES.map(spec => (
            <button
              key={spec.id}
              onClick={() => {
                setSelectedSpecialty(spec.id);
                if (spec.diseases && spec.diseases.length > 0) {
                  const firstDisease = spec.diseases[0].id;
                  setSelectedDisease(firstDisease);
                  setActiveTab(DISEASE_CONFIGS[firstDisease] ? `${firstDisease}-patho` : 'clinical');
                }
              }}
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-all relative group",
                selectedSpecialty === spec.id 
                  ? "bg-brand-blue text-white shadow-md" 
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              )}
            >
              <spec.icon size={24} />
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-slate-800 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                {spec.name}
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Secondary Sidebar (Diseases) */}
      <aside 
        className={cn(
          "bg-card border-r border-line py-6 flex flex-col gap-6 sticky top-0 z-40 transition-all duration-300 ease-in-out shrink-0 relative h-[100dvh]",
          isSidebarCollapsed ? "w-0 p-0 overflow-hidden border-none" : "w-64 px-4"
        )}
      >
        <div className="flex items-center justify-between px-2">
          <span className="font-bold text-lg tracking-tight text-brand-navy whitespace-nowrap">
            {SPECIALTIES.find(s => s.id === selectedSpecialty)?.name}
          </span>
        </div>

        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar">
          <div className="px-2 mb-2">
            <p className="text-[10px] font-bold text-ink-muted uppercase tracking-[0.2em]">Doenças</p>
          </div>
          {SPECIALTIES.find(s => s.id === selectedSpecialty)?.diseases.map(disease => (
            <button
              key={disease.id}
              onClick={() => {
                setSelectedDisease(disease.id);
                setSelectedValvopathy(null);
                setShowValvularComparison(false);
                if (disease.id === 'arritmias') {
                  setActiveTab('arritmias-fa');
                } else {
                  setActiveTab(DISEASE_CONFIGS[disease.id] ? `${disease.id}-patho` : 'clinical');
                }
              }}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-medium text-left",
                selectedDisease === disease.id
                  ? "bg-brand-blue/10 text-brand-blue"
                  : "text-ink-muted hover:bg-bg hover:text-brand-navy"
              )}
            >
              <div className={cn(
                "w-1.5 h-1.5 rounded-full shrink-0",
                selectedDisease === disease.id ? "bg-brand-blue" : "bg-transparent"
              )} />
              <span className="truncate">{disease.name}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Collapse Button */}
      <div className="sticky top-6 z-50 h-0">
        <button 
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className={cn(
            "p-1.5 rounded-lg border border-line hover:bg-bg text-ink-muted transition-all absolute bg-card shadow-sm",
            isSidebarCollapsed ? "left-4" : "-left-4"
          )}
        >
          {isSidebarCollapsed ? <ChevronRight size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 flex flex-col gap-8 w-full max-w-none overflow-x-hidden">
        {selectedSpecialty === 'diario' ? (
          <PrescriptionDiary activeDrugId={selectedDisease} setActiveDrugId={setSelectedDisease} />
        ) : selectedDisease === 'asma' ? (
          <>
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <div className="flex items-center gap-2 text-brand-blue mb-1">
                  <Stethoscope size={16} />
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Protocolo Clínico</span>
                </div>
                <h1 className="text-3xl font-bold text-brand-navy tracking-tight">Tratamento Escalonado da Asma</h1>
                <p className="text-ink-muted">Manejo de Adultos e Adolescentes — GINA 2024.</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden md:block">
                  <p className="text-xs font-bold text-brand-navy">Dr. Abner Portilho</p>
                  <p className="text-[10px] text-ink-muted uppercase">Pneumologista</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                  <Users size={20} />
                </div>
              </div>
            </header>

            {/* Horizontal Tabs for Asma Sections */}
            <div className="flex items-center gap-2 border-b border-line pb-px overflow-x-auto no-scrollbar">
              {[
                { id: 'clinical', label: 'Clínica e Diagnóstico', icon: BookOpen },
                { id: 'overview', label: 'Tratamento', icon: LayoutDashboard },
                { id: 'meds', label: 'Medicamentos por Classe', icon: Pill }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px whitespace-nowrap",
                    activeTab === tab.id
                      ? "border-brand-blue text-brand-blue"
                      : "border-transparent text-ink-muted hover:text-brand-navy hover:border-slate-300"
                  )}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </div>

        {activeTab === 'clinical' ? (
          <div className="flex flex-col gap-8">
            <header>
              <div className="flex items-center gap-2 text-brand-blue mb-1">
                <BookOpen size={16} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Clínica e Diagnóstico</span>
              </div>
              <h1 className="text-3xl font-bold text-brand-navy tracking-tight">Clínica da Asma — Em Profundidade</h1>
              <p className="text-ink-muted">A variabilidade como característica definidora e o diagnóstico clínico.</p>
            </header>

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                {/* Resumo Interativo com Balões */}
                <section className="card p-6 md:p-8 bg-bg border-brand-blue/20">
                  <h2 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-2">
                    <Search size={20} className="text-brand-blue" />
                    Tópicos Clínicos
                  </h2>
                  <p className="text-ink-muted text-sm mb-6">
                    Selecione um dos balões abaixo para explorar os detalhes clínicos, achados do exame físico, fatores precipitantes e a abordagem estruturada da asma.
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {CLINICAL_TOPICS.map(topic => {
                      const Icon = topic.icon;
                      const isActive = activeKeyword === topic.id;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => setActiveKeyword(topic.id)}
                          className={cn(
                            "flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all duration-200 border-2",
                            isActive 
                              ? `${topic.bg} ${topic.color} ${topic.border}` 
                              : `${topic.bg} ${topic.color} border-transparent opacity-50 hover:opacity-100`
                          )}
                        >
                          <Icon size={16} className={topic.color} />
                          {topic.title}
                        </button>
                      );
                    })}
                  </div>
                </section>

                {/* Detalhe da Palavra-Chave Selecionada */}
                <AnimatePresence mode="wait">
                  {CLINICAL_TOPICS.map(topic => {
                    if (topic.id !== activeKeyword) return null;
                    const Icon = topic.icon;
                    return (
                      <motion.section 
                        key={topic.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "p-6 md:p-8 rounded-2xl border-2 !shadow-xl relative overflow-hidden",
                          topic.bg,
                          topic.border,
                          topic.shadow
                        )}
                      >
                        <div className={cn("absolute top-0 left-0 w-1.5 h-full", topic.bar)}></div>
                        <div className="flex items-start gap-4">
                          <div className={cn("p-3 rounded-xl shrink-0 bg-card shadow-sm", topic.color)}>
                            <Icon size={24} />
                          </div>
                          <div className="w-full">
                            <h2 className="text-2xl font-bold text-brand-navy mb-4">
                              {topic.title}
                            </h2>
                            {topic.content}
                          </div>
                        </div>
                      </motion.section>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : activeTab === 'overview' ? (
          <>
            {/* Horizontal Step Selector */}
            <div className="bg-card p-2 rounded-2xl border border-line shadow-sm flex items-center gap-2 sticky top-6 z-40 overflow-x-auto no-scrollbar">
              {STEPS.map((step) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStepId(step.id)}
                  className={cn(
                    "flex-1 min-w-[140px] flex items-center justify-center gap-3 px-4 py-3 rounded-xl transition-all relative overflow-hidden group",
                    activeStepId === step.id 
                      ? "bg-brand-blue text-white shadow-lg" 
                      : "bg-transparent text-ink-muted hover:bg-bg"
                  )}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                    activeStepId === step.id ? "bg-white/20" : cn("bg-slate-100", step.color.replace('bg-', 'text-'))
                  )}>
                    {step.shortLabel}
                  </div>
                  <span className="font-bold text-sm hidden md:block">{step.label}</span>
                  {activeStepId === step.id && (
                    <motion.div 
                      layoutId="activeStep"
                      className="absolute bottom-0 left-0 w-full h-1 bg-brand-blue"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Comparison Section */}
            <div className="flex flex-col gap-8">
              {/* Step Context */}
              <motion.div 
                key={activeStep.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col md:flex-row items-center gap-6 p-6 bg-brand-blue/5 rounded-3xl border border-brand-blue/10"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xl", activeStep.color)}>
                  <Activity size={32} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-sm font-black text-brand-blue uppercase tracking-[0.3em] mb-3">Quadro Clínico</h2>
                  <div className="inline-block bg-gradient-to-br from-card to-bg dark:from-slate-800 dark:to-slate-900 px-6 py-4 rounded-3xl rounded-tl-none shadow-md border border-brand-blue/10 relative">
                    <p className="text-brand-navy text-xl md:text-2xl font-bold leading-tight italic">
                      "{activeStep.desc}"
                    </p>
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-card border-l border-t border-brand-blue/10 transform -rotate-45 hidden md:block"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="text-orange-500 font-bold text-xl">Alto</div>
                    <div className="text-[10px] text-ink-muted uppercase font-bold">Risco</div>
                  </div>
                  <div className="w-[1px] h-10 bg-line"></div>
                  <div className="flex flex-col items-center">
                    <div className="text-green-500 font-bold text-xl">Total</div>
                    <div className="text-[10px] text-ink-muted uppercase font-bold">Controle</div>
                  </div>
                </div>
              </motion.div>

              {/* Side-by-Side Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 px-2">
                    <Zap className="text-brand-blue" size={18} />
                    <h3 className="font-bold text-brand-navy uppercase tracking-widest text-xs">Opção Preferencial (GINA)</h3>
                  </div>
                  <ComparisonCard track="T1" data={activeStep.t1} color="bg-brand-blue" icon={Wind} />
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 px-2">
                    <ArrowRightLeft className="text-brand-navy" size={18} />
                    <h3 className="font-bold text-brand-navy uppercase tracking-widest text-xs">Opção Alternativa</h3>
                  </div>
                  <ComparisonCard track="T2" data={activeStep.t2} color="bg-brand-navy" icon={Stethoscope} />
                </div>
              </div>
            </div>

            {/* Medication Details (Steps 1-4) */}
            {activeStepId < 5 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-brand-navy">Dispositivos T1</h3>
                      <p className="text-xs text-ink-muted">Ideal para estratégia SMART/AIR</p>
                    </div>
                    <div className="p-2 bg-bg-blue rounded-lg text-brand-blue">
                      <Pill size={20} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {COMBOS_T1.map((combo, idx) => (
                      <div key={idx} className="p-4 rounded-2xl border border-line hover:border-brand-blue/30 hover:bg-bg-blue/30 transition-all group flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                          <span className="font-bold text-sm block group-hover:text-brand-blue">{combo.brand}</span>
                          <span className="text-[8px] text-ink-muted uppercase font-bold bg-slate-100 px-1.5 py-0.5 rounded">{combo.device}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {combo.drugs.map(d => <span key={d} className="text-[9px] font-bold text-ink-muted bg-slate-100 px-1.5 py-0.5 rounded">{d}</span>)}
                        </div>
                        <div className="pt-2 border-t border-line/50">
                          <p className="text-[8px] font-bold text-ink-muted uppercase mb-1">Doses (mcg)</p>
                          <div className="flex flex-wrap gap-1">
                            {combo.doses.map(dose => <span key={dose} className="text-[9px] font-mono text-brand-blue bg-bg-blue px-1.5 py-0.5 rounded">{dose}</span>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="font-bold text-lg text-brand-navy">Dispositivos T2</h3>
                      <p className="text-xs text-ink-muted">Manutenção fixa (SABA separado)</p>
                    </div>
                    <div className="p-2 bg-card rounded-lg text-brand-navy">
                      <Pill size={20} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {COMBOS_T2.map((combo, idx) => (
                      <div key={idx} className="p-4 rounded-2xl border border-line hover:border-brand-navy/30 hover:bg-bg transition-all group flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                          <span className="font-bold text-sm block group-hover:text-brand-navy">{combo.brand}</span>
                          <span className="text-[8px] text-ink-muted uppercase font-bold bg-slate-100 px-1.5 py-0.5 rounded">{combo.device}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {combo.drugs.map(d => <span key={d} className="text-[9px] font-bold text-ink-muted bg-slate-100 px-1.5 py-0.5 rounded">{d}</span>)}
                        </div>
                        <div className="pt-2 border-t border-line/50">
                          <p className="text-[8px] font-bold text-ink-muted uppercase mb-1">Doses (mcg)</p>
                          <div className="flex flex-wrap gap-1">
                            {combo.doses.map(dose => <span key={dose} className="text-[9px] font-mono text-brand-navy bg-card px-1.5 py-0.5 rounded">{dose}</span>)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SABA Section (Track 2) */}
            {activeStepId < 5 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-6 bg-bg-orange/20 border-orange-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-bg-orange text-orange-600 rounded-lg">
                    <Zap size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy">Resgate SABA (Track 2)</h3>
                    <p className="text-[10px] text-ink-muted uppercase font-bold">Uso apenas se necessário</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  {SABA.map((saba, idx) => (
                    <div key={idx} className="flex-1 min-w-[200px] p-4 bg-card rounded-xl border border-orange-100 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-sm text-brand-navy">{saba.brand}</span>
                        <span className="text-[8px] font-bold text-orange-600 dark:text-orange-300 bg-bg-orange px-1.5 py-0.5 rounded">{saba.device}</span>
                      </div>
                      <div className="flex gap-2">
                        {saba.doses.map(d => <span key={d} className="text-[10px] font-mono bg-bg px-2 py-1 rounded border border-line">{d}</span>)}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Triple Therapy Section (Step 5 Only) */}
            {activeStepId === 5 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-6 border-l-4 border-l-purple-500 bg-bg-purple/20 mb-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-bg-purple text-purple-600 rounded-xl">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-navy">Terapia Tripla (ICS + LABA + LAMA)</h3>
                    <p className="text-xs text-ink-muted">Indicado para asma não controlada apesar de ICS/LABA em dose média/alta.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {COMBOS_TRIPLE.map((combo, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-card border border-purple-100 shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-brand-navy">{combo.brand}</span>
                        <Chip color="purple">{combo.track}</Chip>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {combo.drugs.map(d => <span key={d} className="text-[9px] font-bold text-purple-600 dark:text-purple-300 bg-bg-purple px-1.5 py-0.5 rounded border border-purple-100">{d}</span>)}
                      </div>
                      <div className="pt-2 border-t border-purple-100/50">
                        <p className="text-[8px] font-bold text-purple-400 uppercase mb-1">Doses (mcg)</p>
                        <div className="flex flex-wrap gap-1">
                          {combo.doses.map(dose => <span key={dose} className="text-[9px] font-mono text-purple-600 dark:text-purple-300 bg-bg-purple px-1.5 py-0.5 rounded">{dose}</span>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Immunobiologics Section (Step 5) */}
            {activeStepId === 5 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card p-6 border-l-4 border-l-rose-500 bg-rose-50/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-rose-100 text-rose-600 rounded-xl">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-brand-navy">Imunobiológicos (Anti-IgE, Anti-IL5, Anti-IL4R, Anti-TSLP)</h3>
                    <p className="text-xs text-ink-muted">Tratamento adjuvante para asma grave refratária com fenótipo específico.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {IMMUNOBIOLOGICS.map((bio, idx) => (
                    <div key={idx} className="p-5 rounded-2xl bg-card border border-rose-100 shadow-sm hover:shadow-md transition-all grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                      <div className="flex flex-col">
                        <span className="font-bold text-lg text-brand-navy">{bio.name}</span>
                        <span className="text-xs font-bold text-rose-600 uppercase tracking-tighter">{bio.target}</span>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-[10px] font-bold text-ink-muted uppercase mb-1">Mecanismo de Ação</p>
                        <p className="text-xs text-ink-muted leading-relaxed">{bio.mechanism}</p>
                        <p className="text-[10px] font-bold text-rose-400 uppercase mt-2 mb-1">Indicação</p>
                        <p className="text-xs text-rose-600 font-medium">{bio.indication}</p>
                      </div>
                      <div className="bg-bg-red p-3 rounded-xl border border-rose-100">
                        <p className="text-[10px] font-bold text-rose-400 uppercase mb-1">Posologia / Dose</p>
                        <p className="text-xs font-bold text-rose-700 dark:text-rose-300">{bio.dose}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        ) : activeTab === 'meds' ? (
          <div className="flex flex-col gap-8">
            <header>
              <div className="flex items-center gap-2 text-brand-blue mb-1">
                <Pill size={16} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Farmacologia</span>
              </div>
              <h1 className="text-3xl font-bold text-brand-navy tracking-tight">Medicamentos por Classe</h1>
              <p className="text-ink-muted">Guia de referência para classes terapêuticas e dispositivos inalatórios.</p>
            </header>

            {/* Mind Map Section */}
            <section className="card p-10 bg-[#0f172a] text-white overflow-hidden relative border-4 border-slate-800 shadow-2xl">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              
              <div className="text-center mb-16 relative z-10">
                <h2 className="text-4xl font-black uppercase tracking-[0.1em] text-white drop-shadow-lg">
                  Classificação de Medicamentos Respiratórios
                </h2>
                <div className="w-24 h-1 bg-brand-blue mx-auto mt-4 rounded-full"></div>
              </div>
              
              <div className="flex flex-col gap-16 relative z-10 max-w-6xl mx-auto">
                {MIND_MAP_DATA.map((node, idx) => (
                  <div key={idx} className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                    {/* Main Category */}
                    <div className={cn(
                      "px-8 py-6 rounded-2xl font-black text-2xl shadow-2xl min-w-[300px] flex items-center justify-center gap-4 border-2 border-white/20",
                      node.color
                    )}>
                      <node.icon size={32} strokeWidth={3} />
                      {node.category}
                    </div>
                    
                    {/* Sub Categories and Meds */}
                    <div className="flex flex-col gap-8 flex-1 w-full">
                      {node.sub.map((sub, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-6 group">
                          <div className="text-slate-500 group-hover:text-white transition-colors hidden lg:block">
                            <CornerDownRight size={40} strokeWidth={3} />
                          </div>
                          
                          <div className="flex-1 flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl bg-white/5 border-2 border-white/10 hover:bg-white/10 transition-all shadow-xl backdrop-blur-md">
                            {/* Sub Label */}
                            <div className={cn(
                              "px-6 py-3 rounded-xl font-black text-xl min-w-[160px] text-center flex items-center justify-center gap-2 border border-white/20 shadow-lg",
                              node.color
                            )}>
                              {sub.label}
                              <sub.icon size={18} strokeWidth={3} />
                            </div>

                            {/* Med List */}
                            <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                              {sub.items.map((item, iIdx) => (
                                <span 
                                  key={iIdx} 
                                  className="text-xl font-black text-black bg-card px-5 py-2.5 rounded-2xl border-2 border-slate-200 shadow-lg hover:scale-110 hover:bg-bg transition-all cursor-default"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {DRUG_CLASSES.map((cls, idx) => (
                <div key={idx} className="card p-6 flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg", cls.color)}>
                        <cls.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-brand-navy">{cls.name}</h3>
                        <p className="text-xs text-ink-muted max-w-xs">{cls.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {cls.drugs.map((drug, i) => (
                      <div key={i} className="p-4 rounded-2xl border border-line bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-brand-navy">{drug.name}</p>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {drug.brands.map(b => (
                              <span key={b} className="text-[9px] font-bold text-ink-muted bg-card border border-line px-1.5 py-0.5 rounded">{b}</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-bold text-ink-muted uppercase mb-1">Apresentação</p>
                          <span className="text-[10px] font-mono text-brand-blue dark:text-blue-300 bg-bg-blue px-2 py-1 rounded border border-blue-100">{drug.doses}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {COMBINED_THERAPIES.map((group, idx) => (
                <div key={idx} className="card p-6">
                  <div className="mb-6">
                    <h3 className="font-bold text-xl text-brand-navy">{group.name}</h3>
                    <p className="text-xs text-ink-muted">{group.description}</p>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((item, i) => (
                      <div key={i} className="p-4 rounded-2xl border border-line hover:border-brand-blue/30 transition-all group">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-brand-navy group-hover:text-brand-blue">{item.brand}</span>
                          <span className="text-[10px] font-bold text-brand-blue dark:text-blue-300 bg-bg-blue px-2 py-0.5 rounded-full">{item.note}</span>
                        </div>
                        <p className="text-xs text-ink-muted">{item.drugs}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        </>
        ) : DISEASE_CONFIGS[selectedDisease] ? (
          <>
            {selectedDisease === 'valvulares' && showValvularComparison ? (
              <ValvularComparison onBack={() => setShowValvularComparison(false)} />
            ) : selectedDisease === 'valvulares' && selectedValvopathy === null ? (
              <ValvularSelector onSelect={setSelectedValvopathy} onShowComparison={() => setShowValvularComparison(true)} />
            ) : selectedDisease === 'valvulares' && selectedValvopathy !== null ? (
              <ValvularSummary valvopathy={selectedValvopathy} onBack={() => setSelectedValvopathy(null)} />
            ) : selectedDisease === 'intersticiais' ? (
              <InterstitialMain />
            ) : selectedDisease === 'intoxicacoes' || selectedDisease === 'cad' || selectedDisease === 'eap' || selectedDisease === 'sca' || selectedDisease === 'hipoglicemia' ? (
              <EmergencyMain diseaseId={selectedDisease} />
            ) : selectedDisease === 'glomerulopatias' ? (
              <GlomerulopatiasMain />
            ) : (
              <>
                {/* Header */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-brand-blue mb-1">
                      <Stethoscope size={16} />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Protocolo Clínico</span>
                    </div>
                    <h1 className="text-3xl font-bold text-brand-navy tracking-tight">{DISEASE_CONFIGS[selectedDisease].title}</h1>
                    <p className="text-ink-muted">{DISEASE_CONFIGS[selectedDisease].subtitle}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden md:block">
                      <p className="text-xs font-bold text-brand-navy">Dr. Abner Portilho</p>
                      <p className="text-[10px] text-ink-muted uppercase">{DISEASE_CONFIGS[selectedDisease].specialty}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue border border-brand-blue/20">
                      <Users size={20} />
                    </div>
                  </div>
                </header>

                {/* Horizontal Tabs for Sections */}
                <div className="flex items-center gap-2 border-b border-line pb-px overflow-x-auto no-scrollbar">
                  {selectedDisease === 'arritmias' ? (
                    [
                      { id: 'arritmias-fa', label: 'Fibrilação Atrial', icon: Heart },
                      { id: 'arritmias-ext', label: 'Extrasístoles', icon: Zap },
                      { id: 'arritmias-bradi', label: 'Bradicardias', icon: Activity },
                      { id: 'arritmias-taqui', label: 'Taquicardias', icon: Flame }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px whitespace-nowrap",
                          activeTab === tab.id
                            ? "border-brand-blue text-brand-blue"
                            : "border-transparent text-ink-muted hover:text-brand-navy hover:border-slate-300"
                        )}
                      >
                        <tab.icon size={16} />
                        {tab.label}
                      </button>
                    ))
                  ) : (
                    [
                      ...(selectedDisease === 'drc' ? [{ id: 'drc-epidemio', label: 'Epidemiologia', icon: Globe }] : []),
                      ...(selectedDisease === 'dpoc' ? [{ id: 'dpoc-epidemio', label: 'Epidemiologia', icon: Globe }] : []),
                      { id: `${selectedDisease}-patho`, label: 'Fisiopatologia/Definição', icon: BookOpen },
                      { id: `${selectedDisease}-clinical`, label: 'Achados Clínicos', icon: Search },
                      { id: `${selectedDisease}-diagnosis`, label: 'Diagnóstico / Exames Complementares', icon: Activity },
                      ...(selectedDisease === 'dpoc' ? [
                        { id: 'dpoc-treatment', label: 'Classificação e Tratamento', icon: Pill }
                      ] : [
                        { id: `${selectedDisease}-classification`, label: 'Classificação', icon: LayoutDashboard },
                        { id: `${selectedDisease}-treatment`, label: 'Tratamento', icon: Pill },
                      ]),
                      ...(selectedDisease === 'ic' ? [{ id: 'ic-acute', label: 'IC Descompensada', icon: AlertCircle }] : [])
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px whitespace-nowrap",
                          activeTab === tab.id
                            ? "border-brand-blue text-brand-blue"
                            : "border-transparent text-ink-muted hover:text-brand-navy hover:border-slate-300"
                        )}
                      >
                        <tab.icon size={16} />
                        {tab.label}
                      </button>
                    ))
                  )}
                </div>

                {/* Tab Content */}
                {activeTab === 'drc-epidemio' ? (
                  <CKDEpidemio />
                ) : activeTab === 'dpoc-epidemio' ? (
                  <COPDEpidemio />
                ) : activeTab === `${selectedDisease}-patho` ? (
                  selectedDisease === 'scc' ? (
                    <SCCPatho />
                  ) : selectedDisease === 'ic' ? (
                    <ICPatho />
                  ) : selectedDisease === 'has' ? (
                    <HASPatho />
                  ) : selectedDisease === 'reumatica' ? (
                    <RheumaticPatho />
                  ) : selectedDisease === 'valvulares' ? (
                    <ValvularPatho />
                  ) : selectedDisease === 'drc' ? (
                    <CKDPatho />
                  ) : selectedDisease === 'dpoc' ? (
                    <COPDPatho />
                  ) : selectedDisease === 'derrame-pleural' ? (
                    <PleuralPatho />
                  ) : selectedDisease === 'ira' ? (
                    <IraPatho />
                  ) : selectedDisease === 'pneumonia' ? (
                    <PneumoniaPatho />
                  ) : selectedDisease === 'arritmias' ? (
                    <ArritmiasFA />
                  ) : (
                    <div className="flex flex-col gap-8">
                      <div className="card p-8 bg-slate-50 border-brand-blue/20 flex items-center justify-center min-h-[300px]">
                        <p className="text-ink-muted text-center">Conteúdo de Fisiopatologia e Definição em desenvolvimento...</p>
                      </div>
                    </div>
                  )
                ) : activeTab === `${selectedDisease}-clinical` ? (
                  selectedDisease === 'scc' ? (
                    <SCCClinical />
                  ) : selectedDisease === 'ic' ? (
                    <ICClinical />
                  ) : selectedDisease === 'has' ? (
                    <HASClinical />
                  ) : selectedDisease === 'reumatica' ? (
                    <RheumaticClinical />
                  ) : selectedDisease === 'valvulares' ? (
                    <ValvularClinical />
                  ) : selectedDisease === 'drc' ? (
                    <CKDClinical />
                  ) : selectedDisease === 'dpoc' ? (
                    <COPDClinical />
                  ) : selectedDisease === 'derrame-pleural' ? (
                    <PleuralClinical />
                  ) : selectedDisease === 'ira' ? (
                    <IraClinical />
                  ) : selectedDisease === 'pneumonia' ? (
                    <PneumoniaClinical />
                  ) : selectedDisease === 'arritmias' ? (
                    <ArritmiasFA />
                  ) : (
                    <div className="flex flex-col gap-8">
                      <div className="card p-8 bg-slate-50 border-brand-blue/20 flex items-center justify-center min-h-[300px]">
                        <p className="text-ink-muted text-center">Conteúdo de Achados Clínicos em desenvolvimento...</p>
                      </div>
                    </div>
                  )
                ) : activeTab === `${selectedDisease}-diagnosis` ? (
                  selectedDisease === 'scc' ? (
                    <SCCDiagnosis />
                  ) : selectedDisease === 'ic' ? (
                    <ICDiagnosis />
                  ) : selectedDisease === 'has' ? (
                    <HASDiagnosis />
                  ) : selectedDisease === 'reumatica' ? (
                    <RheumaticDiagnosis />
                  ) : selectedDisease === 'valvulares' ? (
                    <ValvularDiagnosis />
                  ) : selectedDisease === 'drc' ? (
                    <CKDDiagnosis />
                  ) : selectedDisease === 'dpoc' ? (
                    <COPDDiagnosis />
                  ) : selectedDisease === 'derrame-pleural' ? (
                    <PleuralDiagnosis />
                  ) : selectedDisease === 'ira' ? (
                    <IraDiagnosis />
                  ) : selectedDisease === 'pneumonia' ? (
                    <PneumoniaDiagnosis />
                  ) : selectedDisease === 'arritmias' ? (
                    <ArritmiasFA />
                  ) : (
                    <div className="flex flex-col gap-8">
                      <div className="card p-8 bg-slate-50 border-brand-blue/20 flex items-center justify-center min-h-[300px]">
                        <p className="text-ink-muted text-center">Conteúdo de Diagnóstico em desenvolvimento...</p>
                      </div>
                    </div>
                  )
                ) : activeTab === 'dpoc-treatment' ? (
                  <COPDTreatment />
                ) : activeTab === `${selectedDisease}-classification` ? (
                  selectedDisease === 'scc' ? (
                    <div className="flex flex-col gap-8">
                      <div className="card p-8 bg-slate-50 border-brand-blue/20 flex items-center justify-center min-h-[300px]">
                        <p className="text-ink-muted text-center">Conteúdo de Classificação em desenvolvimento...</p>
                      </div>
                    </div>
                  ) : selectedDisease === 'ic' ? (
                    <ICClassification />
                  ) : selectedDisease === 'has' ? (
                    <HASClassification />
                  ) : selectedDisease === 'drc' ? (
                    <CKDClassification />
                  ) : selectedDisease === 'derrame-pleural' ? (
                    <PleuralClassification />
                  ) : selectedDisease === 'ira' ? (
                    <IraClassification />
                  ) : (
                    <div className="flex flex-col gap-8">
                      <div className="card p-8 bg-slate-50 border-brand-blue/20 flex items-center justify-center min-h-[300px]">
                        <p className="text-ink-muted text-center">Conteúdo de Classificação em desenvolvimento...</p>
                      </div>
                    </div>
                  )
                ) : activeTab === `${selectedDisease}-treatment` ? (
                  selectedDisease === 'scc' ? (
                    <SCCTreatment />
                  ) : selectedDisease === 'ic' ? (
                    <ICTreatment />
                  ) : selectedDisease === 'has' ? (
                    <HASTreatment />
                  ) : selectedDisease === 'reumatica' ? (
                    <RheumaticTreatment />
                  ) : selectedDisease === 'valvulares' ? (
                    <ValvularTreatment />
                  ) : selectedDisease === 'drc' ? (
                    <CKDTreatment />
                  ) : selectedDisease === 'derrame-pleural' ? (
                    <PleuralTreatment />
                  ) : selectedDisease === 'ira' ? (
                    <IraTreatment />
                  ) : selectedDisease === 'pneumonia' ? (
                    <PneumoniaTreatment />
                  ) : selectedDisease === 'arritmias' ? (
                    <ArritmiasFA />
                  ) : (
                    <div className="flex flex-col gap-8">
                      <div className="card p-8 bg-slate-50 border-brand-blue/20 flex items-center justify-center min-h-[300px]">
                        <p className="text-ink-muted text-center">Conteúdo de Tratamento em desenvolvimento...</p>
                      </div>
                    </div>
                  )
                ) : activeTab === 'ic-acute' ? (
                  <ICAcute />
                ) : activeTab === 'arritmias-ext' ? (
                  <ArritmiasExtrasistoles />
                ) : activeTab === 'arritmias-bradi' ? (
                  <ArritmiasBradicardias />
                ) : activeTab === 'arritmias-taqui' ? (
                  <ArritmiasTaquicardias />
                ) : activeTab === 'arritmias-fa' ? (
                  <ArritmiasFA />
                ) : null}
              </>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-20">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 shadow-inner">
              <BookOpen size={48} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-brand-navy mb-2">
                {SPECIALTIES.find(s => s.id === selectedSpecialty)?.diseases.find(d => d.id === selectedDisease)?.name}
              </h2>
              <p className="text-ink-muted max-w-md mx-auto">
                O protocolo clínico para esta condição está em desenvolvimento. Em breve, você terá acesso a diretrizes atualizadas, fluxogramas de emergência e calculadoras de dose.
              </p>
            </div>
            <button 
              onClick={() => {
                setSelectedSpecialty('pneumologia');
                setSelectedDisease('asma');
                setActiveTab('overview');
              }}
              className="px-6 py-3 bg-brand-navy text-white font-bold rounded-xl hover:bg-brand-blue transition-colors shadow-md"
            >
              Voltar para Asma
            </button>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-auto pt-8 border-t border-line flex flex-col md:flex-row justify-between items-center gap-4 text-ink-muted text-xs">
          <p>© 2026 PneumoDash · Nucleus Medicinae Omega · GINA 2024</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-blue transition-colors">Diretrizes Completas</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Calculadora de Dose</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Suporte</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
