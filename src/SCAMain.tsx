import React, { useState } from 'react';
import { 
  Heart, Activity, Timer, ShieldAlert, 
  Zap, Stethoscope, ArrowRight, CheckCircle2, 
  TrendingUp, FileText, AlertCircle, RefreshCw,
  Search, Info, AlertTriangle, Layers, List, ClipboardList, BookOpen, Check, X, ShieldCheck, History
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Topographical Territory Types matching standard SBC guidelines
interface Territory {
  id: string;
  name: string;
  derivations: string;
  artery: string;
  clinicalNote: string;
  category: 'anterior' | 'lateral' | 'inferior' | 'dorsal' | 'vd';
}

const TOPOGRAPHY_DATABASE: Territory[] = [
  {
    id: 'anterosseptal',
    name: 'Anterosseptal',
    derivations: 'V1, V2, V3',
    artery: 'DA proximal → ramos septais perfurantes',
    clinicalNote: 'Alto risco de bloqueio atrioventricular (BAV) se septo basal for acometido. Pode evoluir para parede anterior.',
    category: 'anterior'
  },
  {
    id: 'anterior',
    name: 'Anterior',
    derivations: 'V1–V4',
    artery: 'DA proximal/médio',
    clinicalNote: 'Área miocárdica expressiva em risco. Vigilância estrita para disfunção ventricular esquerda e choque cardiogênico.',
    category: 'anterior'
  },
  {
    id: 'anterior-loc',
    name: 'Anterior localizada',
    derivations: 'V3–V4 ou V3–V5',
    artery: 'DA médio distal',
    clinicalNote: 'Costuma poupar o septo proximal e a diagonal alta, com prognóstico tipicamente mais favorável.',
    category: 'anterior'
  },
  {
    id: 'anterolateral',
    name: 'Anterolateral',
    derivations: 'V4–V6, I, aVL',
    artery: 'DA + diagonal OU DA longa (wrap-around)',
    clinicalNote: 'Mapeia isquemia de parede anterior e lateral simultaneamente, indicando artéria dominante ou oclusor de alta área de bifurcação.',
    category: 'anterior'
  },
  {
    id: 'anterior-ext',
    name: 'Anterior extenso',
    derivations: 'V1–V6, I, aVL',
    artery: 'DA muito proximal — antes do 1º septal e 1ª diagonal',
    clinicalNote: 'Catástofre hemodinâmica iminente. Ativação de angioplastia primária imediata. Risco crítico de PCR e choque.',
    category: 'anterior'
  },
  {
    id: 'lateral-alta',
    name: 'Lateral Alta',
    derivations: 'I, aVL',
    artery: 'DA (ramo diagonal) OU Cx (marginal obtuso superior)',
    clinicalNote: 'Ponto Clínico Crítico: A lateral alta tem dois culpados possíveis. O contexto clínico ou derivações recíprocas em III e aVF auxiliam a distinguir.',
    category: 'lateral'
  },
  {
    id: 'lateral-baixa',
    name: 'Lateral Baixa',
    derivations: 'V5, V6',
    artery: 'Cx — marginal obtuso (predominante)',
    clinicalNote: 'Lateral baixa é quase sempre irrigada pela artéria circunflexa. Pode coexistir com posterior.',
    category: 'lateral'
  },
  {
    id: 'inferior',
    name: 'Inferior',
    derivations: 'II, III, aVF',
    artery: 'CD (dominância direita — 80%) OU Cx (dominância esquerda — 15–20%)',
    clinicalNote: 'Investigar IMISSIVELMENTE derivações direitas (V3R, V4R) e posteriores (V7–V9). Evitar nitratos ou diuréticos pela dependência crítica de pré-carga do VD.',
    category: 'inferior'
  },
  {
    id: 'posterior',
    name: 'Parede Dorsal (Posterior)',
    derivations: 'V7, V8, V9 (indiretas: Infra + R alta em V1–V3)',
    artery: 'CD (ramo DP) ou Cx (se dominância esquerda)',
    clinicalNote: 'Facilmente mascarado ou negligenciado como infra simples anterior de V1-V3. ECG com V7-V9 confirma o diagnóstico de oclusão total.',
    category: 'dorsal'
  },
  {
    id: 'vd',
    name: 'Parede Livre do VD',
    derivations: 'V3R, V4R',
    artery: 'CD proximal — antes do ramo marginal direito',
    clinicalNote: 'Gera choque de VD. Conduta de ouro: suspender vasodilatadores imediatamente e realizar expansão volêmica cautelosa com SF 0,9%.',
    category: 'vd'
  }
];

// Interactive differential diagnoses
interface DiffDiagnosis {
  name: string;
  etiology: 'fatal' | 'cardiaca' | 'pulmonar' | 'gastrointestinal' | 'osteomuscular' | 'psiquiatrica';
  painType: string;
  guidingSymptoms: string;
  differencePattern: string;
  treatmentContrast: string;
  themeColor: 'red' | 'blue' | 'yellow' | 'purple' | 'emerald' | 'amber' | 'cyan' | 'slate' | 'pink' | 'orange' | 'teal' | 'indigo';
}

const DIFFERENTIAL_DIAGNOSES: DiffDiagnosis[] = [
  // FATAL (The Big 6)
  {
    name: 'Dissecção Aguda de Aorta',
    etiology: 'fatal',
    painType: 'Dor torácica súbita, excruciante e "rasgando", que irradia para o dorso.',
    guidingSymptoms: 'Assimetria de pulsos periféricos ou de PA (>20 mmHg), sopro de regurgitação aórtica novo, mediastino alargado no RX.',
    differencePattern: 'No ECG pode mimetizar isquemia do miocárdio por acometimento (oclusão mecânica) do óstio coronariano (frequentemente o direito).',
    treatmentContrast: 'NÃO TROMBOLISAR/ANTICOAGULAR. Controle rigoroso da PA e FC (beta-bloqueador venoso) e TC de aorta de urgência.',
    themeColor: 'red'
  },
  {
    name: 'Tromboembolismo Pulmonar (TEP)',
    etiology: 'fatal',
    painType: 'Dor pleurítica súbita (piora à inspiração profunda) desproporcional.',
    guidingSymptoms: 'Dispneia grave inexplicada, hipoxemia persistente, taquicardia sinusal. Típico no pós-operatório ou imobilização prolongada.',
    differencePattern: 'Padrão S1Q3T3 no ECG e/ou sinais de sobrecarga de VD (inversão T V1-V4). Falha de enchimento na AngioTC de tórax.',
    treatmentContrast: 'D-Dímero para triagem e AngioTC para confirmação. Trombolítico é restrito a casos específicos com choque (TEP Maciço).',
    themeColor: 'cyan'
  },
  {
    name: 'Pneumotórax Hipertensivo',
    etiology: 'fatal',
    painType: 'Dor pleurítica forte, estritamente unilateral e súbita.',
    guidingSymptoms: 'Dificuldade extrema para respirar, murmúrio vesicular abolido no hemitórax, turgência jugular secundária e desvio de traqueia contralateral.',
    differencePattern: 'Alteração hemodinâmica drástica. Diagnóstico é estritamente clínico na emergência, não depender de RX ou biomarcadores.',
    treatmentContrast: 'Descompressão IMEDIATA (punção de alívio no 2º EIC ou descompressão digital). É procedimento salvador de segundos.',
    themeColor: 'purple'
  },
  {
    name: 'Tamponamento Cardíaco',
    etiology: 'fatal',
    painType: 'Dor torácica, dispneia e sinais de choque obstrutivo (hipotensão progressiva e abafamento).',
    guidingSymptoms: 'Tríade de Beck: hipotensão severa, turgência jugular e bulhas cardíacas hipofonéticas (abafadas). Pode haver pulso paradoxal.',
    differencePattern: 'ECG pode ter baixa voltagem complexa e alternância elétrica. Ecocardiograma point-of-care (POCUS) confirma o derrame.',
    treatmentContrast: 'Pericardiocentese terapêutica imediata guiada por US ou às cegas. Suporte volêmico enquanto se prepara a drenagem.',
    themeColor: 'indigo'
  },
  // CARDÍACAS (Não-isquêmicas)
  {
    name: 'Pericardite / Miopericardite',
    etiology: 'cardiaca',
    painType: 'Dor de padrão pleurítico (piora ao inspirar) e que piora no decúbito dorsal.',
    guidingSymptoms: 'Melhor da dor ao assumir a posição de prece maometana (sentar e fletir tronco). Atrito pericárdico audível pode estar presente.',
    differencePattern: 'Supradesnível de ST difuso e generalizado (côncavo) e infradesnível de PR. Ausência local de imagem em espelho eletrocardiográfica (recíproca).',
    treatmentContrast: 'AINEs em altas doses e Colquicina. Anticoagulação empírica/terapêutica clássica é sumariamente contraindicada por risco de aumento pericárdico.',
    themeColor: 'blue'
  },
  {
    name: 'Valvopatias (Estenose Aórtica Grave)',
    etiology: 'cardiaca',
    painType: 'Dor torácica muitas vezes indissociável da dor coronariana atípica (esforço-induzida).',
    guidingSymptoms: 'Síncope induzida aos simples esforços. Marca por um sopro sistólico ejetivo rude no foco aórtico (que irradia ativamente paras carótidas).',
    differencePattern: 'O desequilíbrio na demanda miocárdica superdesenvolvido (IAM Tipo 2) causa dor. ECG frequentemente aponta HVE pesada.',
    treatmentContrast: 'Tratamento repousa na avaliação e possível troca valvar cirúrgica. Nitratos empíricos em emergencia para Estenose Grave tendem ao choque cardiogênico fatal.',
    themeColor: 'emerald'
  },
  {
    name: 'Insuficiência Cardíaca Aguda',
    etiology: 'cardiaca',
    painType: 'Dor em peso ou opressão subaguda, por hiperdistensão mecânica excêntrica.',
    guidingSymptoms: 'Insuficiência respiratória e exacerbação súbita associada unicamente à congestão pulmonar extensa, B3, ascite ou anasarca.',
    differencePattern: 'Presença isolada e constante de dispneia associada a distensão de câmaras. Exames proíbem a identificação de focos aterotrobóticas clássicas e atestam sobrecarga.',
    treatmentContrast: 'Diuréticos (Lasix e restrições) e suporte inotrópico em caso agudo que aliviam a câmara relaxando seu músculo. Identificação etiológica vital.',
    themeColor: 'teal'
  },

  // PULMONAR
  {
    name: 'Pneumonia',
    etiology: 'pulmonar',
    painType: 'Dor pleurítica localizada na topografia do pulmão acometido.',
    guidingSymptoms: 'Tosse produtiva (expectoração purulenta), febre, calafrios e dispneia.',
    differencePattern: 'Radiografia de tórax revelando padrão de consolidação pulmonar (broncograma aéreo).',
    treatmentContrast: 'Antibioticoterapia guiada por protocolos locais e oxigenoterapia adjuvante.',
    themeColor: 'amber'
  },
  {
    name: 'Pleurite (Viral)',
    etiology: 'pulmonar',
    painType: 'Dor torácica aguda e em pontada, exacerbada caracteristicamente ao inspirar profundamente.',
    guidingSymptoms: 'Inflamação primária da pleura, comumente após infecção viral recente de vias aéreas.',
    differencePattern: 'ECG e marcadores de necrose normais. Ausculta pode revelar atrito pleural clássico.',
    treatmentContrast: 'Analgésicos comuns e anti-inflamatórios (AINEs); processo costuma ser autolimitado.',
    themeColor: 'teal'
  },
  {
    name: 'Crise de Asma / Exacerbação DPOC',
    etiology: 'pulmonar',
    painType: 'Desconforto torácico opressivo ou peso generalizado (dor muscular estriada excessiva).',
    guidingSymptoms: 'Dor causada pelo exaustivo esforço contínuo da musculatura acessória devido à broncoconstrição.',
    differencePattern: 'Sibilância espiratória intensa, tempo expiratório prolongado e histórico pulmonar franco.',
    treatmentContrast: 'Broncodilatadores inalatórios e corticoterapia sistêmica. Otimizar a dinâmica ventilatória.',
    themeColor: 'emerald'
  },
  
  // GASTROINTESTINAL
  {
    name: 'Ruptura Esofágica (Boerhaave)',
    etiology: 'gastrointestinal',
    painType: 'Dor retroesternal excruciante após estresse abdominal violento (vômitos).',
    guidingSymptoms: 'Tipicamente precedida por vômitos incoercíveis/bulirosos. Presença de enfisema subcutâneo (crepitação palpável) e febre.',
    differencePattern: 'Dor atroz que não cede a nitratos. Ausência de dinâmica de onda ST. RX ou TC denotando pneumomediastino rápido.',
    treatmentContrast: 'Emergência cirúrgica veloz. Antibioticoterapia precoce ampla e ressuscitação volêmica. O diagnóstico atrasado é fatal.',
    themeColor: 'slate'
  },
  {
    name: 'Pancreatite Aguda',
    etiology: 'gastrointestinal',
    painType: 'Dor epigástrica severa e progressiva (frequentemente irradiando em faixa para o dorso).',
    guidingSymptoms: 'Náuseas constantes, vômitos, piora no decúbito dorsal e melhora ao flexionar o tronco.',
    differencePattern: 'Pode cursar com choque e alterações inespecíficas de ST-T. Amilase e lipase (elevadas) e ultrassom orientam, enquanto troponina segue negativa.',
    treatmentContrast: 'Hidratação endovenosa vigorosa (reposição volêmica), repouso gástrico e controle ávido da dor. Exclusão ágil de isquemia coronariana pela irradiação.',
    themeColor: 'amber'
  },
  {
    name: 'Doença do Refluxo (DRGE) ou Espasmo Esofágico',
    etiology: 'gastrointestinal',
    painType: 'Dor em queimação (pirose) ascendente retroesternal, simulando a opressão típica.',
    guidingSymptoms: 'Regurgitação ocasional, azia marcante. Exacerbação estritamente pós-prandial ou deitados logo após amplas refeições gordurosas.',
    differencePattern: 'O espasmo esofágico enganoso paradoxal pode reverter perfeitamente com uso nitratos! Ausência de marcadores de IAM, TIMI zero.',
    treatmentContrast: 'Inibidores da bomba de prótons em altas doses (G.I. Cocktail). Uso terapêutico após total descarte do painel isquêmico.',
    themeColor: 'pink'
  },
  {
    name: 'Doença Úlcero-Péptica / Colelitíase',
    etiology: 'gastrointestinal',
    painType: 'Dor epigástrica subxifoidea referindo ao andar torácico póstero-inferior.',
    guidingSymptoms: 'Hipersensibilidade gástrica ao toque (Murphy positivo), exacerbação digestiva isolada pós fast-food.',
    differencePattern: 'Alucina frequentemente isquemia miocárdica de parede Inferior (DII, DIII aVF - limpos). Ultra-som afere distensão de biliar.',
    treatmentContrast: 'Avaliação da cirurgia abertamente, dieta zero emergencial.',
    themeColor: 'orange'
  },

  // OSTEOMUSCULAR
  {
    name: 'Costocondrite (Síndrome de Tietze) / Trauma',
    etiology: 'osteomuscular',
    painType: 'Ponta dolorosa hiper-localizada, aguda incômoda, agulhadas restritas localmente sem generalizações.',
    guidingSymptoms: 'Dor super reprodutível! Apertar as regiões cartilaginosas (ponto-gatilho) desencadeia o mesmo choque sintomático. Desencadeado por exercício puramente braçal de tração ou impacto prévio (trauma / tosse severa recente).',
    differencePattern: 'O sistema eletrocardiográfico, a troponina, o pulso neuropsicogenético permanecem perfeitos (sem palidez ou calafrio associado).',
    treatmentContrast: 'Uso local protetivo e analgésicos sistêmicos (Ibuprofeno/Paracetamol). Sempre descartado apenas após exclusão grave!',
    themeColor: 'emerald'
  },
  {
    name: 'Herpes Zoster',
    etiology: 'osteomuscular',
    painType: 'Queimação lancinante neurodérmica que se restringe à faixa da raiz única espinhal unilateral.',
    guidingSymptoms: 'História clínica sugestiva anterior ao aparecimento das vesículas! Cursa classicamente sem dores iradiantes mistas. Podem preexistir manchas púrpuras locais.',
    differencePattern: 'Apenas dolorosa linearmente, não atende as raízes irradiáveis simpáticas. ECG intacto por todo tempo.',
    treatmentContrast: 'Diagnóstico isolador, modulação imediata neuronal por dor intensa periférica (não central miocárdica).',
    themeColor: 'blue'
  },

  // PSIQUIÁTRICA
  {
    name: 'Ataque de Pânico / Ansiedade',
    etiology: 'psiquiatrica',
    painType: 'Desespero agudo (não anginoso), peso irrefletivo desorientado ou sufoco paralisante sem substrato respiratório mecânico.',
    guidingSymptoms: 'Hiperventilação paroxística. Pacientes desenvolvem vertigens, formigamento pontual de membros isolados por alcalose de hiper-respiração superficial e sentem pavor instintivo de morte sem isquemia biológica.',
    differencePattern: 'Diagnóstico OBRIGATÓRIO de Exclusão Absoluta. Nunca atrase IAM apostando no Histerismo, a troponina plana e gasometria estáveis orientam no final, não no princípio neurológico da entrada na triagem.',
    treatmentContrast: 'Intervir humanitariamente em ambiente de baixa tensão som e benzos caso persista incontrolado, mas jamais perca o descarte protocolar SCA!',
    themeColor: 'purple'
  }
];

export default function SCAMain() {
  const [activeTab, setActiveTab] = useState<'simulador' | 'fisiopatologia' | 'diagnostico' | 'diferencial' | 'tratamento'>('simulador');
  const [tratamentoType, setTratamentoType] = useState<'stemi' | 'nstemi'>('stemi');
  
  // Interactive Simulator States
  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedPain, setSelectedPain] = useState<'tipica' | 'atipica' | null>(null);
  const [selectedEcg, setSelectedEcg] = useState<'com-supra' | 'sem-supra' | null>(null);
  const [selectedTerritory, setSelectedTerritory] = useState<string>('');
  const [simulatorMeds, setSimulatorMeds] = useState({
    aas: false,
    p2y12: false,
    oxigenio: false,
    nitrato: false,
    morfina: false,
    heparina: false,
    estatina: false
  });
  
  // Custom states for static tabs
  const [selectedFisioStep, setSelectedFisioStep] = useState<number>(0);
  const [selectedWallCategory, setSelectedWallCategory] = useState<'anterior' | 'lateral' | 'inferior' | 'dorsal' | 'vd'>('anterior');
  const [diffDiagIndex, setDiffDiagIndex] = useState<number>(-1);
  const [selectedDiagnosisType, setSelectedDiagnosisType] = useState<'stemi' | 'nstemi'>('stemi');
  
  // NSTEMI Risk Calculator states
  const [timiScore, setTimiScore] = useState({
    idade65: false,
    fatoresRisco3: false,
    dacPrevia: false,
    aas7dias: false,
    angina24h: false,
    desvioST: false,
    troponinaElevada: false
  });

  const calculateTimiValue = () => {
    return Object.values(timiScore).filter(Boolean).length;
  };

  const getTimiRecomendation = (score: number) => {
    if (score <= 2) return { risk: 'Baixo Risco (~5%)', strategy: 'Conduta Conservadora. Teste isquêmico não invasivo (ergometria, cintilografia ou angiotomografia) pré-alta.' };
    if (score <= 4) return { risk: 'Risco Intermediário (~13%)', strategy: 'Internação hospitalar sob monitorização cardíaca. Planejar Cinecoronariografia nas primeiras 72 horas.' };
    return { risk: 'Alto Risco (~40%)', strategy: 'Invasiva Precoce. Anticoagulação plena imediata e encaminhamento para cinecoronariografia estratégica nas primeiras 24 horas.' };
  };

  const resetSimulator = () => {
    setSelectedPain(null);
    setSelectedEcg(null);
    setSelectedTerritory('');
    setSimulatorMeds({
      aas: false,
      p2y12: false,
      oxigenio: false,
      nitrato: false,
      morfina: false,
      heparina: false,
      estatina: false
    });
    setActiveStep(1);
  };

  // 9 Plantão checkoff mistakes
  const [mistakesChecked, setMistakesChecked] = useState<Record<number, boolean>>({});

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      
      {/* Header com Identidade Visual Forte e Altíssimo Contraste */}
      <div className="p-6 rounded-3xl bg-slate-950 border border-red-950 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-red-650/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-red-950 border border-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-[0.2em]">
                Resumo Clínico de Emergência • SBC/ESC Guidelines
              </span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
              SÍNDROME CORONARIANA AGUDA
            </h1>
            <p className="text-slate-400 max-w-xl text-xs font-semibold leading-relaxed">
              Mapeamento mnemônico, topográfico e interativo focado no clínico de plantão. Evite atrasos de reperfusão e armadilhas cognitivas.
            </p>
          </div>
          <button 
            onClick={resetSimulator}
            className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900 text-red-400 hover:bg-slate-850 font-bold text-xs uppercase tracking-wider border border-red-950 shadow-md transition-all active:scale-95"
          >
            <RefreshCw size={14} className="animate-spin-slow text-red-500" /> Reiniciar Caso Clínico
          </button>
        </div>
      </div>

      {/* Main Tab Navigation - High Contrast Color-Coded Backdrops */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 rounded-2xl border border-slate-900">
        {[
          { id: 'simulador', label: 'Plantão Interativo', icon: Stethoscope, color: 'border-red-500 text-white' },
          { id: 'fisiopatologia', label: 'Definição & Fisiopato', icon: Layers, color: 'border-blue-500 text-blue-300' },
          { id: 'diagnostico', label: 'Achados & Diagnóstico', icon: Activity, color: 'border-emerald-500 text-emerald-300' },
          { id: 'diferencial', label: 'Diagnóstico Diferencial', icon: Info, color: 'border-purple-500 text-purple-300' },
          { id: 'tratamento', label: 'Tratamento & Manejo', icon: ClipboardList, color: 'border-cyan-500 text-cyan-300' }
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex-1 min-w-[150px] md:min-w-0 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-tight transition-all",
                isActive 
                  ? "bg-slate-900 border-2 " + tab.color + " shadow-xl shadow-black/50 scale-102" 
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              )}
            >
              <Icon size={14} className={isActive ? "text-red-500 animate-pulse" : "opacity-70"} />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* TAB CONTENTS CONTAINER */}
      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: INTERACTIVE SOLVER (FOGO DO PLANTÃO) */}
          {activeTab === 'simulador' && (
            <motion.div
              key="simulador"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Progressive Triage Tracker */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                {[
                  { step: 1, title: 'Admissão & Dor', desc: 'Sintomas iniciais' },
                  { step: 2, title: 'Análise do ECG', desc: 'Identificar Supra/Infra' },
                  { step: 3, title: 'Moni & Antiagregação', desc: 'Terapia farmacológica' },
                  { step: 4, title: 'Destino Clínico', desc: 'Reperfusão / UCI' }
                ].map((item) => (
                  <div
                    key={item.step}
                    className={cn(
                      "p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-16 relative overflow-hidden",
                      activeStep === item.step 
                        ? "bg-red-950 text-white border-red-500 shadow-lg shadow-red-950/40" 
                        : activeStep > item.step 
                          ? "bg-slate-900 text-slate-300 border-emerald-900/50" 
                          : "bg-slate-900 text-slate-500 border-slate-900 opacity-60"
                    )}
                  >
                    <span className="text-[9px] font-black uppercase tracking-widest">{item.desc}</span>
                    <strong className="text-xs truncate font-bold">{item.step}. {item.title}</strong>
                    {activeStep === item.step && (
                      <div className="absolute right-2 top-2 w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    )}
                    {activeStep > item.step && (
                      <Check size={12} className="absolute right-2 top-2 text-emerald-400" />
                    )}
                  </div>
                ))}
              </div>

              {/* SIMULATOR STEP 1: APRESENTAÇÃO CLÍNICA */}
              {activeStep === 1 && (
                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-red-950/80 border border-red-500 flex items-center justify-center text-red-500">
                      <Stethoscope size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">Triage de Emergência: Dor Torácica no Plantão</h3>
                      <p className="text-xs text-slate-400">Classifique o padrão de sintomas do paciente que acabou de dar entrada.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Botão Dor Típica - Neon Red Contrast Backdrop */}
                    <button
                      onClick={() => setSelectedPain('tipica')}
                      className={cn(
                        "p-5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between h-44 cursor-pointer",
                        selectedPain === 'tipica'
                          ? "bg-red-950 border-red-500 text-white shadow-xl shadow-red-950/50 scale-[1.01]"
                          : "bg-slate-950 border-slate-850 text-slate-300 hover:border-red-950"
                      )}
                    >
                      <div className="flex justify-between items-center w-full mb-1">
                        <span className="text-[10px] uppercase font-black text-red-400 tracking-wider">Perfil Isquêmico Alto</span>
                        <Heart className={cn("shrink-0", selectedPain === 'tipica' ? "text-red-400 animate-bounce" : "text-slate-600")} size={20} />
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-[15px] font-black text-slate-100">Dor Típica Anginosa</strong>
                        <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                          Retroesternal em aperto, peso ou constrição, irradiando para membro superior esquerdo, mandíbula ou dorso. Precipitada por esforço ou emoção e aliviada por repouso/nitratos.
                        </p>
                      </div>
                    </button>

                    {/* Botão Dor Atípica - Amber Contrast Backdrop */}
                    <button
                      onClick={() => setSelectedPain('atipica')}
                      className={cn(
                        "p-5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between h-44 cursor-pointer",
                        selectedPain === 'atipica'
                          ? "bg-amber-950 border-amber-500 text-white shadow-xl shadow-amber-950/40 scale-[1.01]"
                          : "bg-slate-950 border-slate-850 text-slate-300 hover:border-amber-950"
                      )}
                    >
                      <div className="flex justify-between items-center w-full mb-1">
                        <span className="text-[10px] uppercase font-black text-amber-400 tracking-wider">Equivalente de Alto Risco</span>
                        <AlertTriangle className={cn("shrink-0", selectedPain === 'atipica' ? "text-amber-400" : "text-slate-600")} size={18} />
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-[15px] font-black text-slate-100">Atípica / Equivalente Clínico</strong>
                        <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                          Em queimação ou facada pontual, náuseas isoladas persistentes ou dispneia súbita sem explicação. Incidência comumente dominante em idosos, mulheres, portadores de diabetes ou nefropatas graves.
                        </p>
                      </div>
                    </button>
                  </div>

                  {selectedPain && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-4 rounded-xl bg-slate-955 border-l-4 border-red-500 bg-slate-950/80 text-white text-xs space-y-2 font-semibold"
                    >
                      <p className="text-red-400 font-extrabold uppercase text-[10px]">RECOMENDAÇÃO OPERACIONAL:</p>
                      <p>Independentemente da tipicidade da queixa, o eletrocardiograma de 12 derivações é de caráter mandatório absoluto em até 10 minutos do contato (Classe I, SBC). Não retarde a conduta por falta de exames enzimáticos.</p>
                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => setActiveStep(2)}
                          className="px-5 py-2 rounded-xl bg-red-650 hover:bg-red-500 text-white font-black uppercase text-[10px] flex items-center gap-1.5 transition-all"
                        >
                          Avançar para ECG <ArrowRight size={12} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* SIMULATOR STEP 2: ANÁLISE DO ECG */}
              {activeStep === 2 && (
                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-950/85 border border-emerald-500 flex items-center justify-center text-emerald-400">
                        <Activity size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white uppercase tracking-tight">Decisão Baseada no ECG: Obtenção em &lt; 10 min</h3>
                        <p className="text-xs text-slate-400">Classifique o achado eletrocardiográfico inicial obtido na chegada.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* STEMI (Com Supra) - Deep Red Card */}
                    <button
                      onClick={() => {
                        setSelectedEcg('com-supra');
                        setSelectedTerritory('anterosseptal');
                      }}
                      className={cn(
                        "p-5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between h-48 cursor-pointer",
                        selectedEcg === 'com-supra'
                          ? "bg-red-950 border-red-500 text-white shadow-xl shadow-red-950/60 scale-[1.01]"
                          : "bg-slate-950 border-slate-850 text-slate-300 hover:border-red-900/50"
                      )}
                    >
                      <div className="flex justify-between items-center w-full mb-1">
                        <span className="text-[10px] uppercase font-black text-red-400 tracking-wider">Risco Crítico / Oclusão Total</span>
                        <span className="px-2 py-0.5 rounded bg-red-900 text-red-200 text-[10px] font-black">STEMI / C/SST</span>
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-[15px] font-black text-slate-100">SCA COM Supra de ST (IAMEST)</strong>
                        <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                          Elevação persistente do segmento ST no ponto J ≥ 1mm em pelo menos 2 derivações contíguas (no mínimo 1.5mm ou 2mm em V2-V3 dependendo da faixa etária/sexo), ou presença de Bloqueio de Ramo Esquerdo (BRE) novo ou presumivelmente novo.
                        </p>
                      </div>
                    </button>

                    {/* NSTEMI (Sem Supra) - Deep Teal Card */}
                    <button
                      onClick={() => {
                        setSelectedEcg('sem-supra');
                        setSelectedTerritory('');
                      }}
                      className={cn(
                        "p-5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between h-48 cursor-pointer",
                        selectedEcg === 'sem-supra'
                          ? "bg-teal-950 border-teal-500 text-white shadow-xl shadow-teal-950/60 scale-[1.01]"
                          : "bg-slate-950 border-slate-850 text-slate-300 hover:border-teal-900/40"
                      )}
                    >
                      <div className="flex justify-between items-center w-full mb-1">
                        <span className="text-[10px] uppercase font-black text-teal-300 tracking-wider">Angina Instável ou NSTEMI / Oclusão Parcial</span>
                        <span className="px-2 py-0.5 rounded bg-teal-900 text-teal-200 text-[10px] font-black">NSTEMI / S/SST</span>
                      </div>
                      <div className="space-y-1">
                        <strong className="block text-[15px] font-black text-slate-100">SCA SEM Supra de ST (IAMSEST / AI)</strong>
                        <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                          Infra dinâmico de ST ≥ 0.5mm, inversão simétrica de onda T ≥ 1mm no plano de derivações ou eletro totalmente normal, com dor anginosa em andamento altamente isquêmica.
                        </p>
                      </div>
                    </button>
                  </div>

                  {/* Dynamic Territory Filter if STEMI */}
                  <AnimatePresence mode="wait">
                    {selectedEcg === 'com-supra' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-5 rounded-2xl bg-slate-950 border border-red-950 space-y-4"
                      >
                        <h4 className="text-xs font-black uppercase text-red-400 tracking-widest leading-none">Selecione a Parede Eletrocardiográfica Identificada:</h4>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
                          {TOPOGRAPHY_DATABASE.map((t) => (
                            <button
                              key={t.id}
                              onClick={() => setSelectedTerritory(t.id)}
                              className={cn(
                                "p-2.5 rounded-xl border text-center text-[11px] font-bold transition-all",
                                selectedTerritory === t.id
                                  ? "bg-red-900 border-red-500 text-white text-xs"
                                  : "bg-slate-900 border-slate-850 text-slate-400 hover:border-slate-700"
                              )}
                            >
                              {t.name}
                            </button>
                          ))}
                        </div>

                        {selectedTerritory && (
                          <div className="p-4 rounded-xl bg-slate-900 border border-slate-850 text-slate-300 space-y-1.5 font-semibold text-xs animate-in slide-in-from-top-2">
                            <p>
                              <strong className="text-red-400">Derivações:</strong> {TOPOGRAPHY_DATABASE.find(t => t.id === selectedTerritory)?.derivations}
                            </p>
                            <p>
                              <strong className="text-red-400">Artéria Culpada mais provável:</strong> {TOPOGRAPHY_DATABASE.find(t => t.id === selectedTerritory)?.artery}
                            </p>
                            <p className="italic text-[11px] opacity-90 text-amber-200 bg-amber-950/40 p-2.5 rounded-lg border border-amber-950">
                              <strong className="text-amber-400 not-italic">Aviso Clínico:</strong> {TOPOGRAPHY_DATABASE.find(t => t.id === selectedTerritory)?.clinicalNote}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {selectedEcg && (
                    <div className="flex justify-between pt-4 border-t border-slate-850">
                      <button
                        onClick={() => setSelectedPain(null) || setActiveStep(1)}
                        className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-black uppercase"
                      >
                        Voltar Passo 1
                      </button>
                      <button
                        onClick={() => setActiveStep(3)}
                        className="px-6 py-2.5 rounded-xl bg-red-650 hover:bg-red-500 text-white text-xs font-black uppercase flex items-center gap-1.5 transform active:scale-95 transition-all"
                      >
                        Prosseguir à Conduta <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* SIMULATOR STEP 3: INTERACTIVE DRUGS & STABILIZATION */}
              {activeStep === 3 && (
                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-amber-950/85 border border-amber-500 flex items-center justify-center text-amber-400">
                        <Zap size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white uppercase tracking-tight text-white">MONACH - Checklist Farmacoterapêutico no Plantão</h3>
                        <p className="text-xs text-slate-400">Clique nas medicações indicadas da estabilização e controle isquêmico do paciente.</p>
                      </div>
                    </div>
                    <div className="px-3 py-1 bg-red-950 rounded text-red-400 border border-red-900/50 text-xs font-bold font-mono">
                      ECG atualizado: {selectedEcg === 'com-supra' ? `Supra ${TOPOGRAPHY_DATABASE.find(t => t.id === selectedTerritory)?.name || ''}` : 'SCA sem Supra ST'}
                    </div>
                  </div>

                  {/* Non-white, highly colorful, extremely high contrast clickable balloons */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* AAS */}
                    <div
                      onClick={() => setSimulatorMeds(prev => ({ ...prev, aas: !prev.aas }))}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all cursor-pointer select-none",
                        simulatorMeds.aas 
                          ? "bg-rose-950 border-rose-500 text-white shadow-lg" 
                          : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-8 *:"
                      )}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <strong className={cn("text-sm", simulatorMeds.aas ? "text-rose-300" : "text-slate-350")}>1. Aspirina (AAS)</strong>
                        <input type="checkbox" checked={simulatorMeds.aas} onChange={() => {}} className="accent-rose-500 rounded h-4 w-4" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300 font-semibold">
                        Ataque mandatório imediato: <strong>150 a 300 mg mastigável VO</strong>. Reduz a progressão absoluta do agregado plaquetário no óstio coronariano. 
                      </p>
                    </div>

                    {/* Inibidor P2Y12 */}
                    <div
                      onClick={() => setSimulatorMeds(prev => ({ ...prev, p2y12: !prev.p2y12 }))}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all cursor-pointer select-none",
                        simulatorMeds.p2y12 
                          ? "bg-emerald-950 border-emerald-500 text-white shadow-lg" 
                          : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-8 *:"
                      )}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <strong className={cn("text-sm", simulatorMeds.p2y12 ? "text-emerald-300" : "text-slate-350")}>2. Inibidor P2Y12</strong>
                        <input type="checkbox" checked={simulatorMeds.p2y12} onChange={() => {}} className="accent-emerald-500 rounded h-4 w-4" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300 font-semibold">
                        Ataque: <strong>Ticagrelor 180mg, Clopidogrel 300-600mg</strong> ou <strong>Prasugrel 60mg</strong>. Clopidogrel 300mg é preferencial na trombólise mecânica pré-hosp ou química se idade &lt; 75 anos.
                      </p>
                    </div>

                    {/* Anticoagulação */}
                    <div
                      onClick={() => setSimulatorMeds(prev => ({ ...prev, heparina: !prev.heparina }))}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all cursor-pointer select-none",
                        simulatorMeds.heparina 
                          ? "bg-orange-950 border-orange-500 text-white shadow-lg" 
                          : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-8 *:"
                      )}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <strong className={cn("text-sm", simulatorMeds.heparina ? "text-orange-300" : "text-slate-350")}>3. Anticoagulação</strong>
                        <input type="checkbox" checked={simulatorMeds.heparina} onChange={() => {}} className="accent-orange-500 rounded h-4 w-4" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300 font-semibold">
                        Escolha de ouro: <strong>Enoxaparina 1mg/kg SC 12/12h</strong> ou <strong>HNF</strong> se revascularização cirúrgica de emergência evidente ou ritmo com ClCr &lt; 15 mL/min.
                      </p>
                    </div>

                    {/* Oxigenioterapia */}
                    <div
                      onClick={() => setSimulatorMeds(prev => ({ ...prev, oxigenio: !prev.oxigenio }))}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all cursor-pointer select-none",
                        simulatorMeds.oxigenio 
                          ? "bg-cyan-950 border-cyan-500 text-white shadow-lg" 
                          : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-8 *:"
                      )}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <strong className={cn("text-sm", simulatorMeds.oxigenio ? "text-cyan-330 text-cyan-300" : "text-slate-350")}>4. Oxigênio Suplementar</strong>
                        <input type="checkbox" checked={simulatorMeds.oxigenio} onChange={() => {}} className="accent-cyan-550 rounded h-4 w-4" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300 font-semibold">
                        Apenas se <strong>SatO₂ &lt; 90%</strong> ou desconforto respiratório severo evidente. Evitar hiperóxia irrestrita pelo altíssimo risco de vasoconstrição coronariana.
                      </p>
                    </div>

                    {/* Nitratos */}
                    <div
                      onClick={() => setSimulatorMeds(prev => ({ ...prev, nitrato: !prev.nitrato }))}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all cursor-pointer select-none",
                        simulatorMeds.nitrato 
                          ? "bg-amber-950 border-amber-500 text-white shadow-lg" 
                          : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-8 *:"
                      )}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <strong className={cn("text-sm", simulatorMeds.nitrato ? "text-amber-300" : "text-slate-350")}>5. Nitratos</strong>
                        <input type="checkbox" checked={simulatorMeds.nitrato} onChange={() => {}} className="accent-amber-500 rounded h-4 w-4" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300 font-semibold">
                        <strong>Monocordil ou Isordil 5mg SL</strong> ou Tridil EV se dor isquêmica persistente. <strong>CONTRAINDICADO</strong> em vigência de enfarto de VD ou PDE5 recente!
                      </p>
                    </div>

                    {/* Morfina */}
                    <div
                      onClick={() => setSimulatorMeds(prev => ({ ...prev, morfina: !prev.morfina }))}
                      className={cn(
                        "p-4 rounded-xl border-2 transition-all cursor-pointer select-none",
                        simulatorMeds.morfina 
                          ? "bg-purple-950 border-purple-500 text-white shadow-lg" 
                          : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-8 *:"
                      )}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <strong className={cn("text-sm", simulatorMeds.morfina ? "text-purple-300" : "text-slate-350")}>6. Morfina</strong>
                        <input type="checkbox" checked={simulatorMeds.morfina} onChange={() => {}} className="accent-purple-500 rounded h-4 w-4" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-slate-300 font-semibold">
                        Uso restritivo classe IIb: <strong>Reservado apenas para dor refratária intolerável</strong>. Pode retardar severamente a absorção e o efeito dos antiagregantes plaquetários orais.
                      </p>
                    </div>
                  </div>

                  {/* Safety Warning Card */}
                  <div className="p-4 rounded-2xl bg-amber-955 border border-amber-500/30 bg-amber-950/60 text-amber-250 font-semibold text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <ShieldAlert size={14} />
                      <span className="font-extrabold uppercase text-[10px]">VERIFICAÇÃO DE SEGURANÇA À BEIRA-LEITO:</span>
                    </div>
                    {selectedTerritory === 'vd' && (
                      <p className="text-red-300 bg-red-950/40 p-2.5 rounded border border-red-950">
                        🚨 ATENÇÃO: Identificado IAM de VD. A medicação de número 5 (Nitrato) está SUMARIAMENTE Proibida. Suspensão de diuréticos e otimizar pré-carga com volumes isotônicos se ausência de congestão sistêmica.
                      </p>
                    )}
                    <p>O paciente deve receber estatina de alta potência imediata (ex: Atorvastatina 80mg VO) e iniciar beta-bloqueador VO nas primeiras 24 horas apenas se estável hemodinamicamente.</p>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-850">
                    <button
                      onClick={() => setActiveStep(2)}
                      className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-black uppercase"
                    >
                      Voltar Passo 2
                    </button>
                    <button
                      onClick={() => {
                        // Guard against VD infarct with drugs
                        if (selectedTerritory === 'vd' && simulatorMeds.nitrato) {
                          alert('Erro Clínico Crítico: Você prescreveu Nitratos em um paciente com infarto de Ventrículo Direito! Nitratos e diuréticos colapsam a pré-carga e causam hipotensão extrema e choque refratário no IAM de VD. Desmarque o nitrato para continuar.');
                        } else {
                          setActiveStep(4);
                        }
                      }}
                      className="px-6 py-2.5 rounded-xl bg-red-650 hover:bg-red-500 text-white text-xs font-black uppercase flex items-center gap-1.5 transform active:scale-95 transition-all"
                    >
                      Avançar para Destino <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 4: DECISÃO DE DESTINO / REPERFUSÃO */}
              {activeStep === 4 && (
                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-950/85 border border-purple-500 flex items-center justify-center text-purple-400">
                      <Timer size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">Destino Clínico Final do Caso de Plantão</h3>
                      <p className="text-xs text-slate-400">Defina o tempo de resposta e o procedimento ideal com base no diagnóstico estabelecido.</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-4">
                    {selectedEcg === 'com-supra' ? (
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-red-100 space-y-2">
                          <h4 className="font-bold text-sm text-red-400">🚨 Conduta de Emergência no Supra (STEMI)</h4>
                          <p className="text-xs font-semibold leading-relaxed">
                            A prioridade máxima é a abertura imediata da artéria obstruída, com o intuito de reduzir o tempo total de isquemia miocárdica. O tempo é músculo!
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 rounded-xl bg-cyan-950/50 border border-cyan-800/60 space-y-3">
                            <span className="text-[10px] uppercase font-black text-[#1ae1fc]">Opção A: Angioplastia / ICP Primária</span>
                            <p className="text-xs text-slate-200">Indicação de padrão-ouro se o serviço tem laboratório de hemodinâmica disponível 24/7 de forma rápida.</p>
                            <div className="p-2.5 rounded bg-slate-900 text-[11px] font-bold text-slate-300 flex justify-between items-center border border-cyan-950">
                              <span>Meta Tempo Porta-Balão:</span>
                              <span className="text-cyan-400 font-black">&le; 90 minutos</span>
                            </div>
                          </div>
                          <div className="p-4 rounded-xl bg-amber-955 border border-amber-900/50 bg-amber-950/40 space-y-3">
                            <span className="text-[10px] uppercase font-black text-[#ffd261]">Opção B: Trombólise Química</span>
                            <p className="text-xs text-slate-200">Indicada se o transporte e transição para serviço cardiovascular em tempo hábil demorar mais de 120 minutos.</p>
                            <div className="p-2.5 rounded bg-slate-900 text-[11px] font-bold text-slate-300 flex justify-between items-center border border-amber-950">
                              <span>Meta Tempo Porta-Agulha:</span>
                              <span className="text-amber-400 font-black">&le; 30 minutos</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-teal-950/50 border border-teal-500/30 text-teal-100 space-y-2">
                          <h4 className="font-bold text-sm text-teal-400">⚠️ Estratificação de Risco na SCA Sem Supra (NSTEMI / AI)</h4>
                          <p className="text-xs font-semibold leading-relaxed">
                            Aqui não se depara com trombo total obstrutivo transmural persistente imediato. O direcionamento clínico invasivo depende da estratificação do escore TIMI ou HEART do paciente.
                          </p>
                        </div>
                        
                        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                          <h5 className="text-[11px] uppercase font-black tracking-wider text-slate-400 leading-none">Escale o Tempo Limite Invasivo (Cateterismo):</h5>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="p-3 rounded-xl bg-slate-950 border border-red-900 space-y-1">
                              <span className="text-[9px] font-black uppercase text-red-400 tracking-wider">Imediato (&lt; 2 horas)</span>
                              <strong className="block text-xs text-white">Instável / Muito Alto Risco</strong>
                              <p className="text-[10px] text-slate-400 leading-tight">Instabilidade hemodinâmica sistêmica, arritmia ventricular refratária de novo ou dor anginosa severa em andamento que não alivia.</p>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-950 border border-amber-900 space-y-1">
                              <span className="text-[9px] font-black uppercase text-amber-400 tracking-wider">Precoce (&lt; 24 horas)</span>
                              <strong className="block text-xs text-white">Curva de Troponina Positiva</strong>
                              <p className="text-[10px] text-slate-400 leading-tight">Delta positivo em troponina de alta sensibilidade, ondas de infra dinâmico de ST ou escore GRACE &gt; 140.</p>
                            </div>
                            <div className="p-3 rounded-xl bg-slate-950 border border-teal-900 space-y-1">
                              <span className="text-[9px] font-black uppercase text-teal-400 tracking-wider">Tardia / Seletiva</span>
                              <strong className="block text-xs text-white">Baixo Risco Isquêmico</strong>
                              <p className="text-[10px] text-slate-400 leading-tight">Estável clínica e eletricamente, troponinas negativas seriadas, sem alterações isquêmicas agudas no eletro inicial.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Final Interactive Prescription Checklist */}
                  <div className="p-5 rounded-2xl bg-slate-950 border-2 border-emerald-500/30 space-y-3 font-semibold text-xs">
                    <h4 className="font-extrabold uppercase text-[10px] text-emerald-400 flex items-center gap-1.5 border-b border-emerald-950 pb-2">
                      <ShieldCheck size={14} /> PRESCRIÇÃO CLÍNICA DE CUSTÓDIA ADMITIDA (UTI CORONARIANA)
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-350 text-[11px] leading-relaxed">
                      <div className="space-y-2">
                        <p><strong className="text-white">1. Dupla Antiagregação (DAPT):</strong> Manter AAS 100mg/dia + P2Y12 (ex: Ticagrelor 90mg 12/12h ou Clopidogrel 75mg/dia).</p>
                        <p><strong className="text-white">2. Estatina de Alta Potência:</strong> Atorvastatina 80mg ou Rosuvastatina 40mg VO à noite (meta de LDL &lt; 50 mg/dL).</p>
                      </div>
                      <div className="space-y-2">
                        <p><strong className="text-white">3. Anticoagulação Preventiva:</strong> Enoxaparina 1mg/kg SC de 12/12h até cateterismo ou por 3 a 5 dias.</p>
                        <p><strong className="text-white">4. Profilaxia de Trato GI:</strong> Omeprazol 20mg ou Pantoprazol 40mg VO na prevenção de sangramentos agudos pela DAPT.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-850">
                    <button
                      onClick={() => setActiveStep(3)}
                      className="px-4 py-2 rounded-xl text-slate-400 hover:text-white text-xs font-black uppercase"
                    >
                      Voltar Passo 3
                    </button>
                    <button
                      onClick={resetSimulator}
                      className="px-6 py-2.5 rounded-xl bg-emerald-650 hover:bg-emerald-555 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase flex items-center gap-1.5 transition-all"
                    >
                      Simular Próximo Caso <RefreshCw size={12} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: FISIOPATOLOGIA & CLASSIFICAÇÃO */}
          {activeTab === 'fisiopatologia' && (
            <motion.div
              key="fisiopatologia"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/85 border border-blue-500 flex items-center justify-center text-blue-400">
                    <Layers size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">Instabilidade da Placa & Fluxo Coronariano</h3>
                    <p className="text-xs text-slate-400">Entenda a cascata mecanicista progressiva de ruptura e oclusão arterial isquêmica.</p>
                  </div>
                </div>

                {/* Progressive Interactive Cascata Fisiopatológica Balloons (HIGH CONTRAST) */}
                <div className="space-y-3">
                  <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest leading-none">Clique nas Fases para Progredir o Raciocínio Clínico:</span>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                    {[
                      { step: 0, title: '1. Disfunção Endotelial', color: 'bg-blue-950 border-blue-800', badge: 'Retenção LDL' },
                      { step: 1, title: '2. Inflamação da Capa', color: 'bg-indigo-950 border-indigo-800', badge: 'Enfraquecimento' },
                      { step: 2, title: '3. Ruptura e Ativação', color: 'bg-purple-950 border-purple-800', badge: 'ADP / TXA2' },
                      { step: 3, title: '4. Cascata da Trombose', color: 'bg-rose-950 border-rose-800', badge: 'Fibrina / Trombo' },
                      { step: 4, title: '5. Isquemia x Necrose', color: 'bg-red-950 border-red-800', badge: 'Transmural x Subendo' }
                    ].map((stepObj) => (
                      <button
                        key={stepObj.step}
                        onClick={() => setSelectedFisioStep(stepObj.step)}
                        className={cn(
                          "p-4 rounded-2xl border-2 text-left flex flex-col justify-between h-28 cursor-pointer select-none transition-all",
                          selectedFisioStep === stepObj.step
                            ? "bg-slate-950 border-amber-500 text-white ring-2 ring-amber-500"
                            : stepObj.color + " text-slate-200 hover:border-slate-600"
                        )}
                      >
                        <span className="text-[9px] font-black uppercase text-amber-400">{stepObj.badge}</span>
                        <strong className="text-[11px] font-black leading-tight">{stepObj.title}</strong>
                        <div className="flex justify-end">
                          <div className={cn("w-2 h-2 rounded-full", selectedFisioStep === stepObj.step ? "bg-amber-500 animate-ping" : "bg-slate-700")} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Substep Detailed Description - Very high contrast, non-white box */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedFisioStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-slate-100 text-xs font-semibold"
                  >
                    {selectedFisioStep === 0 && (
                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-[#1ae1fc] text-sm tracking-tight">Fase 1: Disfunção Endotelial & Retenção Hidrofóbica de LDL</h4>
                        <p className="leading-relaxed text-slate-350">
                          A aterosclerose é desencadeada por lesão inflamatória do endotélio (induzida por tabagismo, hipertensão severa ou dislipidemia). Partículas de LDL acumulam-se no espaço subendotelial, sofrem oxidação e disparam o recrutamento massivo de macrófagos, que fagocitam os lipídios e transformam-se em células espumosas.
                        </p>
                      </div>
                    )}
                    {selectedFisioStep === 1 && (
                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-blue-300 text-sm tracking-tight">Fase 2: Enfraquecimento e Vulnervabilidade da Capa Fibrosa</h4>
                        <p className="leading-relaxed text-slate-350">
                          A placa se torna clinicamente instável e perigosa não pelo seu estreitamento mecânico de luz, mas pela espessura fina de sua capa fibrosa. Macrófagos hiperativos ativam metaloproteinases que destroem o colágeno da matriz da capa, tornando-a fraca e vulnerável ao estresse mecânico hemodinâmico de cisalhamento.
                        </p>
                      </div>
                    )}
                    {selectedFisioStep === 2 && (
                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-purple-300 text-sm tracking-tight">Fase 3: Placa Exposta & Ativação Plaquetária Iminente</h4>
                        <p className="leading-relaxed text-slate-350">
                          No evento de erosão ou ruptura da fina capa, o núcleo lipídico necrótico entra em contato direto com o fluxo sanguíneo local, expondo colágeno subendotelial e cofatores de tecido. Plaquetas circundantes se ativam de forma instantânea, liberando potentes agonistas autócrinos como Tromboxano A2 (TXA2) e ADP.
                        </p>
                      </div>
                    )}
                    {selectedFisioStep === 3 && (
                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-rose-300 text-sm tracking-tight">Fase 4: Cascata de Coagulação e Deposição de Fibrina</h4>
                        <p className="leading-relaxed text-slate-350">
                          Em paralelo com a rede plaquetária, a ativação da cascata de coagulação gera trombina livre, que cliva o fibrinogênio sérico em fibrina estrutural solúvel. Forma-se um trombo misto agudo. Trombos dominados por plaquetas levam a oclusões parciais, enquanto redes extensas de fibrinolíticos causam oclusões arteriais mecânicas totais (TIMI 0/1).
                        </p>
                      </div>
                    )}
                    {selectedFisioStep === 4 && (
                      <div className="space-y-1.5">
                        <h4 className="font-extrabold text-red-400 text-sm tracking-tight">Fase 5: Isquemia Crítica x Necrose Transmural Progressiva</h4>
                        <p className="leading-relaxed text-slate-350">
                          O sofrimento do miocárdio é instantâneo. Se o fluxo for restabelecido em menos de 20 minutos, a lesão é potencialmente reversível (estatística de angina). Passados 20 minutos de anóxia arterial severa, inicia-se o infarto e morte tecidual. Dependendo do fluxo (parcial em NSTEMI vs total transmural em STEMI), temos padrões elétricos distintos no traçado de ECG.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Classificação Operacional SBC Table - Ultra high contrast styling */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase text-[#ffd261] tracking-widest leading-none">Classificação das Síndromes Coronarianas Agudas (SBC):</h4>
                  <div className="overflow-x-auto rounded-2xl border border-slate-800">
                    <table className="w-full text-xs text-slate-200 bg-slate-950 font-semibold">
                      <thead>
                        <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 font-extrabold uppercase text-[10px] text-center">
                          <th className="p-3 text-left">Entidade Clínica</th>
                          <th className="p-3">Obstrução Coronariana</th>
                          <th className="p-3">Eletrocardiograma</th>
                          <th className="p-3">Troponinas (TnUs)</th>
                          <th className="p-3">Anatomia de Risco</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-900 text-center">
                        <tr className="hover:bg-slate-900/30">
                          <td className="p-3 font-bold text-slate-100 text-left">Angina Instável (AI)</td>
                          <td className="p-3 text-teal-400">Parcial (TIMI 1–2)</td>
                          <td className="p-3 text-slate-300">ECG normal ou infra transitório</td>
                          <td className="p-3 text-red-400 font-bold">Negativa / Estável</td>
                          <td className="p-3">Isquemia subendocárdica pura</td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="p-3 font-bold text-slate-100 text-left">Infarto sem Supra (IAMSEST)</td>
                          <td className="p-3 text-teal-400">Parcial / Microembolizações</td>
                          <td className="p-3 text-slate-300">Infra de ST ou inversão de onda T</td>
                          <td className="p-3 text-emerald-400 font-bold">Altamente Positiva (Curva)</td>
                          <td className="p-3">Necrose de subendocárdio focal</td>
                        </tr>
                        <tr className="hover:bg-slate-900/30">
                          <td className="p-3 font-bold text-slate-100 text-left">Infarto com Supra (IAMEST)</td>
                          <td className="p-3 text-red-400 font-extrabold">Total (TIMI 0–1)</td>
                          <td className="p-3 text-red-400 font-black">Supra de ST persistente</td>
                          <td className="p-3 text-emerald-400 font-bold">Positiva (Não aguardar!)</td>
                          <td className="p-3">Necrose Transmural de Parede</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: DIAGNÓSTICO E ACHADOS CLÍNICOS */}
          {activeTab === 'diagnostico' && (
            <motion.div
              key="diagnostico"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* ACHADOS CLÍNICOS - SINTOMATOLOGIA */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-950/85 border border-amber-500 flex items-center justify-center text-amber-500">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">Sintomatologia e Achados Clínicos</h3>
                    <p className="text-xs text-slate-400">Padrões de apresentação clínica da isquemia miocárdica (Dor Típica vs. Equivalentes Anginosos).</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Dor Anginosa Típica */}
                  <div className="p-5 rounded-2xl bg-slate-950 border-2 border-red-950 hover:border-red-500/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black tracking-widest uppercase text-red-500">Apresentação Clássica</span>
                      <div className="px-2 py-0.5 rounded bg-red-950/80 text-red-300 text-[10px] font-black border border-red-900/50">DOR TÍPICA</div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                          <strong className="text-white">Qualidade:</strong> Constritiva, em aperto, peso ou queimação intensa. Frequente "Sinal de Levine" (mão espalmada sobre o esterno).
                        </p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                          <strong className="text-white">Localização e Irradiação:</strong> Dor retroesternal ou precordial. Irradiação para ombro/Membro Superior Esquerdo (MSE), pescoço, mandíbula, ou dorso.
                        </p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                          <strong className="text-white">Fatores Modificadores:</strong> Desencadeada/Agravada por esforço físico ou estresse emocional. Aliviada (mas muitas vezes não completamente) por repouso ou nitratos sublinguais.
                        </p>
                      </li>
                    </ul>
                  </div>

                  {/* Equivalentes Anginosos / Dor Atípica */}
                  <div className="p-5 rounded-2xl bg-slate-950 border-2 border-amber-950 hover:border-amber-500/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-black tracking-widest uppercase text-amber-500">Cuidado Redobrado</span>
                      <div className="px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 text-[10px] font-black border border-amber-900/50">ATÍPICA / EQUIVALENTES</div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-start">
                        <Activity size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                          <strong className="text-white">Apresentações Sem Dor:</strong> Náuseas e vômitos refratários, sudorese profusa (diaforese), palpitações, síncope ou pré-síncope inexplicada.
                        </p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Activity size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                          <strong className="text-white">Dispneia Súbita:</strong> Falta de ar isolada sem substrato pulmonar óbvio. Altamente clássica em pacientes idosos cursando com isquemia silenciosa.
                        </p>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Activity size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-300 font-semibold leading-relaxed">
                          <strong className="text-white">Grupos de ALTO RISCO para Atipia:</strong> Mulheres, idosos (&gt;75 anos), portadores de Diabetes Mellitus, imunossuprimidos, DRC dialíticos e demenciados.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-900 flex items-start gap-3">
                  <ShieldCheck size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-cyan-100 font-semibold leading-relaxed">
                    <strong className="text-cyan-400">Avaliação do Exame Físico:</strong> Geralmente pobre, pode apresentar 3ª ou 4ª bulha (B3/B4), sopro sistólico de regurgitação mitral novo (disfunção tátil de papilar) ou creptos de base (surgimento de falência ventricular aguda - Killip). Pulsos periféricos assimétricos sugerem IMEDIATAMENTE Dissecção de Aorta.
                  </p>
                </div>
              </div>

              {/* DOIS GRANDES BALÕES: STEMI E NSTEMI */}
              <div className="space-y-6">
                
                {/* Seletores */}
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedDiagnosisType('stemi')}
                    className={cn(
                      "flex-1 p-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 cursor-pointer",
                      selectedDiagnosisType === 'stemi' 
                        ? "bg-red-950/80 border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.2)] scale-[1.02]" 
                        : "bg-slate-950 border-slate-800 text-slate-500 hover:border-red-900 hover:text-slate-300"
                    )}
                  >
                    <Activity size={32} className={selectedDiagnosisType === 'stemi' ? "text-red-500 animate-pulse" : "opacity-60"} />
                    <span className={cn("font-black uppercase tracking-widest text-sm", selectedDiagnosisType === 'stemi' ? "text-red-400" : "")}>Com Supra ST</span>
                  </button>
                  <button
                    onClick={() => setSelectedDiagnosisType('nstemi')}
                    className={cn(
                      "flex-1 p-5 rounded-2xl border-2 transition-all flex flex-col items-center gap-3 cursor-pointer",
                      selectedDiagnosisType === 'nstemi' 
                        ? "bg-teal-950/80 border-teal-500 shadow-[0_0_25px_rgba(20,184,166,0.2)] scale-[1.02]" 
                        : "bg-slate-950 border-slate-800 text-slate-500 hover:border-teal-900 hover:text-slate-300"
                    )}
                  >
                    <TrendingUp size={32} className={selectedDiagnosisType === 'nstemi' ? "text-teal-400 animate-pulse" : "opacity-60"} />
                    <span className={cn("font-black uppercase tracking-widest text-sm", selectedDiagnosisType === 'nstemi' ? "text-teal-300" : "")}>Sem Supra ST</span>
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {selectedDiagnosisType === 'stemi' && (
                    <motion.div
                      key="stemi"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex flex-col rounded-3xl bg-slate-900 border-2 border-red-950 overflow-hidden shadow-2xl relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-650/10 to-transparent pointer-events-none" />
                      
                      <div className="p-6 border-b border-red-950 bg-red-950/20 flex flex-col items-center text-center gap-2 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-red-950 border-2 border-red-500 flex items-center justify-center text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]">
                          <Activity size={32} />
                        </div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tight">SCA COM Supra ST</h4>
                        <span className="px-3 py-1 rounded bg-red-900 text-red-200 text-[10px] font-black uppercase tracking-widest">STEMI / IAMEST</span>
                      </div>
                      
                      <div className="p-6 space-y-4 text-xs relative z-10 flex-1">
                        <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-850">
                          <strong className="text-[10px] uppercase text-red-400 tracking-wider flex items-center gap-1.5">
                            <Layers size={14} /> Dinâmica Fisiopatológica
                          </strong>
                          <p className="text-slate-300 font-semibold leading-relaxed">
                            Formação de trombo rico em fibrina (trombo vermelho) causando <strong className="text-red-300">oclusão arterial transmural total</strong> e súbita. Músculo isquêmico infarta rapidamente sem fluxo colateral.
                          </p>
                        </div>
    
                        <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-850">
                          <strong className="text-[10px] uppercase text-red-400 tracking-wider flex items-center gap-1.5">
                            <Activity size={14} /> Critérios Eletrocardiográficos
                          </strong>
                          <ul className="space-y-1.5 text-slate-300 font-semibold leading-relaxed list-disc list-inside">
                            <li>Elevação de ST no ponto J ≥ 1mm em ≥ 2 derivações subjacentes.</li>
                            <li>Exceções V2-V3: H(&lt;40a) ≥ 2.5mm, H(&gt;40a) ≥ 2mm, Mulheres ≥ 1.5mm.</li>
                            <li><strong className="text-red-300">Equivalentes:</strong> BRE Novo, Supra extra em aVR, Posterior (Onda R imponente V1-V3 com infra).</li>
                          </ul>
                        </div>
    
                        <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-850">
                          <strong className="text-[10px] uppercase text-red-400 tracking-wider flex items-center gap-1.5">
                            <Activity size={14} /> Marcação Enzimática
                          </strong>
                          <p className="text-slate-300 font-semibold leading-relaxed">
                            Curva de Troponina invariavelmente POSITIVA. <strong className="text-amber-500">Aviso Crítico:</strong> JAMAIS aguardar a liberação ou curva de troponina para decidir o tratamento trombolítico/intervenção primária se tiver um Supra ST confirmável em ECG!
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {selectedDiagnosisType === 'nstemi' && (
                    <motion.div
                      key="nstemi"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      className="flex flex-col rounded-3xl bg-slate-900 border-2 border-teal-950 overflow-hidden shadow-2xl relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none" />
                      
                      <div className="p-6 border-b border-teal-950 bg-teal-950/20 flex flex-col items-center text-center gap-2 relative z-10">
                        <div className="w-16 h-16 rounded-full bg-teal-950 border-2 border-teal-500 flex items-center justify-center text-teal-400 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                          <TrendingUp size={32} />
                        </div>
                        <h4 className="text-xl font-black text-white uppercase tracking-tight">SCA SEM Supra ST</h4>
                        <span className="flex gap-2">
                           <span className="px-3 py-1 rounded bg-teal-900 text-teal-100 text-[10px] font-black uppercase tracking-widest">NSTEMI</span>
                           <span className="px-3 py-1 rounded bg-slate-800 text-slate-300 text-[10px] font-black uppercase tracking-widest">Angina Instável</span>
                        </span>
                      </div>
                      
                      <div className="p-6 space-y-4 text-xs relative z-10 flex-1">
                        <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-850">
                          <strong className="text-[10px] uppercase text-teal-400 tracking-wider flex items-center gap-1.5">
                            <Layers size={14} /> Dinâmica Fisiopatológica
                          </strong>
                          <p className="text-slate-300 font-semibold leading-relaxed">
                            Ruptura na placa aterosclerótica com presença de trombo predominante em plaquetas (trombo branco), causando <strong className="text-teal-300">oclusão luminal parcial</strong> com isquemia intermitente no subendocárdio.
                          </p>
                        </div>
    
                        <div className="space-y-1.5 p-3 rounded-xl bg-slate-950 border border-slate-850">
                          <strong className="text-[10px] uppercase text-teal-400 tracking-wider flex items-center gap-1.5">
                            <Activity size={14} /> Critérios Eletrocardiográficos
                          </strong>
                          <ul className="space-y-1.5 text-slate-300 font-semibold leading-relaxed list-disc list-inside">
                            <li>Infra-desnivelamento de segmento ST patológico ≥ 0,5mm.</li>
                            <li>Inversão da onda T profunda, apiculada, negativa e simétrica.</li>
                            <li><strong className="text-teal-300">Atenção:</strong> O paciente com clínica exuberante não raramente possuirá ECG Inicial Perfeitamente Normal. Faça eletros seriados!</li>
                          </ul>
                        </div>
    
                        <div className="space-y-3 p-4 rounded-xl bg-slate-950 border border-teal-900/50">
                          <strong className="text-[11px] uppercase text-teal-400 tracking-widest flex items-center gap-2 border-b border-teal-950 pb-2">
                            <Search size={16} /> Marcadores de Necrose: O Divisor de Águas (Troponina)
                          </strong>
                          <div className="space-y-2">
                            <p className="text-slate-300 font-semibold leading-relaxed text-xs">
                              Na ausência de supradesnivelamento de ST, o biomarcador é o <strong className="text-white">único determinante definitivo</strong> para diferenciar IAM de Angina Instável.
                            </p>
                            <ul className="space-y-3 text-xs text-slate-300 font-medium list-none mt-2">
                              <li className="flex gap-2.5 items-start">
                                <CheckCircle2 size={16} className="text-teal-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed"><strong className="text-teal-200">Troponina Ultrassensível (hs-cTn):</strong> Padrão-ouro atual. Permite algoritmos acelerados de <i>rule-in</i> e <i>rule-out</i> (protocolos 0/1h ou 0/2h - ESC).</span>
                              </li>
                              <li className="flex gap-2.5 items-start">
                                <TrendingUp size={16} className="text-teal-400 shrink-0 mt-0.5" />
                                <span className="leading-relaxed"><strong className="text-teal-200">A Importância do Delta (Δ):</strong> Uma elevação fixa isolada pode significar DRC ou falência cardíaca estrutural crônica. A doença isquêmica aguda exige <strong>curva (ascensão e/ou queda)</strong> seriada (delta).</span>
                              </li>
                              <li className="flex gap-2.5 items-start bg-teal-950/20 p-3 rounded-lg border border-teal-950/50 mt-1">
                                <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                <span className="leading-relaxed"><strong className="text-amber-400">Infarto vs Angina:</strong> Curva de troponina POSITIVA diagnostica <strong className="text-teal-300">IAM SEM Supra (NSTEMI)</strong>. Troponinas seriadas estritamente negativas (planas) em paciente típico definem a <strong className="text-slate-200">Angina Instável</strong>.</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-3 p-4 rounded-xl bg-slate-950 border border-teal-900/50">
                          <strong className="text-[11px] uppercase text-teal-400 tracking-widest flex items-center gap-2 border-b border-teal-950 pb-2">
                            <Info size={16} /> Diagnóstico Diferencial: NSTEMI vs Angina Instável
                          </strong>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                            <div className="p-3 bg-teal-950/30 border border-teal-900/50 rounded-lg space-y-1.5">
                               <div className="text-[10px] font-black text-teal-300 uppercase flex items-center gap-1.5"><TrendingUp size={14}/> IAM Sem Supra (NSTEMI)</div>
                               <p className="text-[11px] leading-relaxed text-slate-300 font-medium">
                                 Troponina <strong className="text-teal-400">POSITIVA</strong> (com curva). Há marcador de necrose miocárdica. Ocorre injúria tecidual efetiva devido à isquemia prolongada. Paciente evolui para necrose subendocárdica.
                               </p>
                            </div>
                            <div className="p-3 bg-slate-900/80 border border-slate-700/50 rounded-lg space-y-1.5">
                               <div className="text-[10px] font-black text-slate-400 uppercase flex items-center gap-1.5"><History size={14}/> Angina Instável</div>
                               <p className="text-[11px] leading-relaxed text-slate-300 font-medium">
                                 Troponina <strong className="text-slate-100">NEGATIVA</strong>. Isquemia clínica evidente (dor em repouso, de início recente ou em crescendo) <span className="underline text-slate-100">sem</span> morte celular confirmada por biomarcadores. Costuma ser tratada com mesma base, mas menor urgência intrínseca na estratégia invasiva.
                               </p>
                            </div>
                          </div>
                        </div>

                        {/* TROPONINA COMPONENT (Merged into NSTEMI) */}
                        <div className="space-y-3 p-4 rounded-xl bg-slate-950 border border-slate-850">
                          <strong className="text-[11px] uppercase text-purple-400 tracking-widest flex items-center gap-2 border-b border-purple-950 pb-2">
                            <Layers size={16} /> Estratégia Cognitiva da Troponina de Alta Sensibilidade
                          </strong>
                          <div className="space-y-4 pt-1">
                            <p className="text-[11px] text-slate-300 font-medium">Classifique com precisão a injúria e evite fúteis e iatrogênicas anticoagulações plenas em mimetizadores. Algoritmo Decisório para Troponina &gt; Percentil 99:</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center">
                              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 flex flex-col justify-between">
                                <strong className="block text-xs text-white">1. Há variação (Delta)?</strong>
                                <p className="text-[10px] text-slate-400 leading-normal">Elevações ou quedas significativas (ex: variação &gt; 20%).</p>
                                <div className="p-2 rounded bg-slate-950 border border-red-950 text-red-400 text-[10px] uppercase font-bold tracking-wider">
                                  NÃO: Injúria Crônica (ex: DRC ou IC terminal)
                                </div>
                              </div>
                              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 flex flex-col justify-between">
                                <strong className="block text-xs text-white">2. Evidência de Isquemia?</strong>
                                <p className="text-[10px] text-slate-400 leading-normal">Clínica, infra/supra dinâmico de ST ou nova perda muscular.</p>
                                <div className="p-2 rounded bg-slate-950 border border-purple-955 border-purple-950 text-purple-300 text-[10px] uppercase font-bold tracking-wider">
                                  NÃO: Injúria Miocárdica Aguda Não Isquêmica
                                </div>
                              </div>
                              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 flex flex-col justify-between">
                                <strong className="block text-xs text-white">3. Ruptura de placa?</strong>
                                <p className="text-[10px] text-slate-400 leading-normal">Mecanismo de oclusão mecânica no vaso coronoriano local.</p>
                                <div className="p-2 rounded bg-slate-950 border-emerald-950 border-emerald-950/60 text-[10px] space-y-1">
                                  <p className="font-extrabold uppercase text-emerald-300 tracking-wider">SIM: IAM Tipo 1 (Aterotrombose)</p>
                                  <p className="font-bold uppercase text-amber-400 tracking-wider">NÃO: IAM Tipo 2 (Oferta/Demanda)</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* ACHIEVEMENTS / ECG */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-950/85 border border-emerald-500 flex items-center justify-center text-emerald-400">
                    <Activity size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">Eletrocardiograma: Mapeamento de Territórios & Artérias Culpadas</h3>
                    <p className="text-xs text-slate-400">Correlacione as derivações isquêmicas com a artéria-ramo obstruída conforme as diretrizes da SBC.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Mapeamento Topográfico Eletrocardiográfico:</span>
                  
                  {/* Wall Category Horizontal Bar */}
                  <div className="flex flex-wrap gap-2">
                    {[
                      { id: 'anterior', label: 'Parede Anterior' },
                      { id: 'lateral', label: 'Parede Lateral' },
                      { id: 'inferior', label: 'Parede Inferior' },
                      { id: 'dorsal', label: 'Parede Posterior' },
                      { id: 'vd', label: 'Ventrículo Direito' },
                    ].map((wall) => (
                      <button
                        key={wall.id}
                        onClick={() => setSelectedWallCategory(wall.id as any)}
                        className={cn(
                          "flex-1 min-w-[120px] p-3 rounded-xl border-2 transition-all flex flex-col items-center gap-2 cursor-pointer",
                          selectedWallCategory === wall.id
                            ? "bg-emerald-950 border-emerald-500 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)] scale-[1.02]"
                            : "bg-slate-950 border-slate-800 text-slate-500 hover:border-emerald-900 hover:text-slate-300"
                        )}
                      >
                        <span className="font-black uppercase tracking-widest text-[10px]">{wall.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Sub-territories for selected wall */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <AnimatePresence mode="popLayout">
                      {TOPOGRAPHY_DATABASE.filter(t => t.category === selectedWallCategory).map(detail => (
                        <motion.div 
                          key={detail.id} 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className="p-5 rounded-2xl bg-slate-950 border-2 border-emerald-950 hover:border-emerald-500/30 transition-colors flex flex-col justify-between space-y-4"
                        >
                          <div className="space-y-4 border-b border-emerald-950/50 pb-4">
                            <div className="flex justify-between items-start flex-wrap gap-2">
                              <div>
                                <h4 className="text-sm font-black text-slate-100 uppercase tracking-tight">{detail.name}</h4>
                              </div>
                              <div className="text-right bg-emerald-950/40 border border-emerald-900/40 px-2 py-1 rounded">
                                <span className="text-[9px] uppercase font-black text-slate-500 block mb-0.5">Derivações</span>
                                <strong className="text-xs font-mono text-emerald-400 tracking-tight">{detail.derivations}</strong>
                              </div>
                            </div>
                            
                            <div className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                              <Zap size={14} className="text-amber-500 shrink-0 mt-0.5" />
                              <div>
                                 <span className="text-[9px] font-black text-slate-400 uppercase tracking-wider block">Artéria Culpada Principal</span>
                                 <strong className="text-xs font-black text-slate-200">{detail.artery}</strong>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start gap-2 bg-emerald-950/20 p-3 rounded-xl border border-emerald-950/50">
                             <ShieldAlert size={16} className="text-blue-400 shrink-0 mt-0.5" />
                             <p className="text-[11px] text-slate-300 leading-relaxed font-semibold">
                               <strong className="text-blue-400 block mb-1 text-[9px] uppercase tracking-wider">Nota Clínica Importante</strong>
                               {detail.clinicalNote}
                             </p>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                  
                  {/* Quick-Test Cardiac Interactive Box */}
                  <div className="p-3 rounded-xl bg-emerald-950/30 text-[11px] leading-relaxed font-extrabold text-emerald-200 border border-emerald-900 border-dashed italic text-center max-w-2xl mx-auto mt-4">
                    💡 "Derivações Contíguas significam visualizadores elétricos que enxergam a MESMA parede. Sempre confira derivações com imagens em espelho (recíprocas)."
                  </div>
                </div>

                {/* STEMI equivalents section */}
                <div className="p-5 rounded-2xl bg-amber-950/60 border border-amber-500/30 space-y-3 font-semibold text-xs text-amber-250">
                  <h4 className="font-extrabold uppercase text-[10px] text-amber-400 flex items-center gap-1">
                    <ShieldAlert size={14} /> Equivantes de Supra (ST-Elevation Equivalents): Não ignore esses padrões!
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                      <strong className="text-white block text-xs">Onda T de Winter (V1–V6)</strong>
                      <p className="text-[11px]">Infra ascendente no ponto J + T alta e simétrica de base larga. Significa oclusão subtotal crítica da artéria descendente anterior (DA). Tratar imediatamente como STEMI.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                      <strong className="text-white block text-xs">Síndrome de Wellens (A e B)</strong>
                      <p className="text-[11px]">T bifásica ou profundamente invertida em V2-V3 no momento sem dor. Indica estenose crítica suboclusiva de DA proximal. Alta taxa de reoclusão súbita fatal se submetido a teste de estresse.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-850 space-y-1">
                      <strong className="text-white block text-xs">Padrão de Aslanger</strong>
                      <p className="text-[11px]">Supra de ST restrito puramente na derivação III, acompanhado de infra em múltiplas derivações (V4-V6, I, aVL). Alerta oclusão multivascular complexa grave.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 4: DIAGNÓSTICO DIFERENCIAL */}
          {activeTab === 'diferencial' && (
            <motion.div
              key="diferencial"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 mx-auto w-full shadow-lg border-l-4 border-l-amber-500">
                  <p className="text-sm font-semibold text-slate-200">
                    <strong className="text-amber-400 uppercase tracking-wide">Mudança de Paradigma (Diretrizes AHA/ACC & SBC):</strong> A nomenclatura "dor atípica" foi <span className="text-red-400">abandonada</span>. A dor aguda torácica deve ser classificada estritamente como <strong className="text-white">Cardíaca</strong>, <strong className="text-white">Possivelmente Cardíaca</strong> ou <strong className="text-white">Não Cardíaca</strong>. A regra de ouro é: <strong className="text-red-400 font-bold bg-red-950/30 px-1 rounded">Descartar as causas imediatamente ameaçadoras à vida (The Big 6) ANTES de qualquer outra coisa.</strong>
                  </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-950/85 border border-purple-500 flex items-center justify-center text-purple-400">
                    <Info size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">Diagnósticos Diferenciais Não-Isquêmicos</h3>
                    <p className="text-xs text-slate-400">Classificação etiológica de condições que mimetizam a Síndrome Coronariana Aguda.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {(['fatal', 'cardiaca', 'pulmonar', 'gastrointestinal', 'osteomuscular', 'psiquiatrica'] as const).map(etiology => {
                    const mappedEtiology = {
                      'fatal': { title: 'The Big 6: Ameaçadoras à Vida', color: 'text-rose-500', border: 'border-rose-950/50', bg: 'bg-rose-950/10' },
                      'cardiaca': { title: 'Cardíacas Não-Isquêmicas', color: 'text-indigo-400', border: 'border-indigo-950/50', bg: 'bg-indigo-950/10' },
                      'pulmonar': { title: 'Origem Pulmonar / Respiratória', color: 'text-cyan-400', border: 'border-cyan-950/50', bg: 'bg-cyan-950/10' },
                      'gastrointestinal': { title: 'Origem Gastrointestinal', color: 'text-amber-400', border: 'border-amber-950/50', bg: 'bg-amber-950/10' },
                      'osteomuscular': { title: 'Origem Osteomuscular / Parede Torácica', color: 'text-yellow-400', border: 'border-yellow-950/50', bg: 'bg-yellow-950/10' },
                      'psiquiatrica': { title: 'Origem Psiquiátrica / Ansiedade', color: 'text-purple-400', border: 'border-purple-950/50', bg: 'bg-purple-950/10' }
                    }[etiology];
                    
                    const diagnoses = DIFFERENTIAL_DIAGNOSES.filter(d => d.etiology === etiology);
                    if (diagnoses.length === 0) return null;

                    return (
                      <div key={etiology} className={cn("rounded-2xl border p-4", mappedEtiology.border, mappedEtiology.bg)}>
                        <h4 className={cn("text-xs font-black uppercase tracking-widest mb-3", mappedEtiology.color)}>{mappedEtiology.title}</h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                          {diagnoses.map((d) => {
                            const originalIndex = DIFFERENTIAL_DIAGNOSES.findIndex(x => x.name === d.name);
                            const isSelected = diffDiagIndex === originalIndex;
                            return (
                              <div key={d.name} className="flex flex-col">
                                <button
                                  onClick={() => setDiffDiagIndex(isSelected ? -1 : originalIndex)}
                                  className={cn(
                                    "p-3 rounded-xl border text-left flex justify-between items-center transition-all",
                                    isSelected
                                      ? "bg-slate-900 border-slate-700 text-white shadow-lg"
                                      : "bg-slate-950/50 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900"
                                  )}
                                >
                                  <strong className="text-sm font-black">{d.name}</strong>
                                  <span className="text-[10px] font-bold uppercase opacity-70 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                                    {isSelected ? 'Ocultar' : 'Detalhar'}
                                  </span>
                                </button>
                                
                                <AnimatePresence>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="mt-2 p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-semibold text-xs text-slate-300">
                                        <div className="space-y-1.5">
                                          <span className="text-[9px] font-black uppercase text-purple-400 flex items-center gap-1.5">
                                            <Activity size={12} /> Tipo e Padrão da Dor
                                          </span>
                                          <p className="leading-relaxed bg-slate-900 p-2 rounded-lg border border-slate-800 text-slate-200">{d.painType}</p>
                                        </div>
                                        
                                        <div className="space-y-1.5">
                                          <span className="text-[9px] font-black uppercase text-amber-400 flex items-center gap-1.5">
                                            <AlertTriangle size={12} /> Sintomas Guia (Red Flags)
                                          </span>
                                          <p className="leading-relaxed bg-slate-900 p-2 rounded-lg border border-slate-800 text-slate-200">{d.guidingSymptoms}</p>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                           <div className="space-y-1.5 p-2.5 rounded-lg bg-teal-950/20 border border-teal-950/50">
                                            <span className="text-[9px] font-black uppercase text-teal-400 block">Diferença Exames/ECG</span>
                                            <p className="leading-relaxed text-[11px] text-teal-200/90">{d.differencePattern}</p>
                                           </div>
                                           <div className="space-y-1.5 p-2.5 rounded-lg bg-red-950/20 border border-red-950/50">
                                            <span className="text-[9px] font-black uppercase text-red-400 block">Contraste de Conduta</span>
                                            <p className="leading-relaxed text-[11px] text-red-200/90">{d.treatmentContrast}</p>
                                           </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 5: TRATAMENTO E MANEJO */}
          {activeTab === 'tratamento' && (
            <motion.div
              key="tratamento"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              
              {/* Step 1. Terapia Inicial (Universal) */}
              <div className="relative z-10 p-5 rounded-2xl bg-slate-950 border border-slate-700 shadow-xl max-w-[500px] mx-auto text-left border-t-4 border-t-cyan-500 w-full animate-in slide-in-from-bottom-4">
                 <h4 className="text-sm font-black uppercase text-cyan-400 border-b border-slate-800 pb-2 mb-3">Terapia Médica Inicial OBRIGATÓRIA (SCA)</h4>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                   <div className="p-3 rounded-xl bg-slate-900 border border-slate-850 flex items-start gap-2 group hover:border-cyan-900/50 transition-colors">
                      <span className="text-emerald-400 font-black">A</span>
                      <div>
                        <p className="text-[11px] text-white">AAS + P2Y12</p>
                        <p className="text-[9px] text-slate-400 mt-0.5 leading-snug group-hover:text-slate-300">Dupla antiagregação (Ticagrelor/Clopidogrel).</p>
                      </div>
                   </div>
                   <div className="p-3 rounded-xl bg-slate-900 border border-slate-850 flex items-start gap-2 group hover:border-cyan-900/50 transition-colors">
                      <span className="text-emerald-400 font-black">H</span>
                      <div>
                        <p className="text-[11px] text-white">Heparina Plena</p>
                        <p className="text-[9px] text-slate-400 mt-0.5 leading-snug group-hover:text-slate-300">Enoxaparina (1mg/kg) ou HNF.</p>
                      </div>
                   </div>
                   <div className="p-3 rounded-xl bg-slate-900 border border-slate-850 flex items-start gap-2 group hover:border-cyan-900/50 transition-colors">
                      <span className="text-emerald-400 font-black">B</span>
                      <div>
                        <p className="text-[11px] text-white">Beta-bloqueador</p>
                        <p className="text-[9px] text-slate-400 mt-0.5 leading-snug group-hover:text-slate-300">Oral, se sem EAP/choque.</p>
                      </div>
                   </div>
                   <div className="p-3 rounded-xl bg-slate-900 border border-slate-850 flex items-start gap-2 group hover:border-cyan-900/50 transition-colors">
                      <span className="text-emerald-400 font-black">E</span>
                      <div>
                        <p className="text-[11px] text-white">Estatinas</p>
                        <p className="text-[9px] text-slate-400 mt-0.5 leading-snug group-hover:text-slate-300">Alta potência (Ex: Atorvastatina 80mg).</p>
                      </div>
                   </div>
                 </div>
                 
                 <div className="p-2.5 rounded-xl bg-red-950/20 border border-red-900/30 text-[10px] text-red-400 mt-4 text-center">
                   <strong className="uppercase">Atenção:</strong> Trombolítico JAMAIS é feito em pacientes SEM Supra de ST.
                 </div>
              </div>

              <div className="flex gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-2xl mx-auto w-full max-w-sm">
                <button
                  onClick={() => setTratamentoType('stemi')}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                    tratamentoType === 'stemi' 
                      ? "bg-red-950/80 text-red-400 border border-red-900 shadow-lg" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  )}
                >
                  SCA COM Supra ST (IAM)
                </button>
                <button
                  onClick={() => setTratamentoType('nstemi')}
                  className={cn(
                    "flex-1 py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all",
                    tratamentoType === 'nstemi' 
                      ? "bg-teal-950/80 text-teal-400 border border-teal-900 shadow-lg" 
                      : "text-slate-400 hover:text-white hover:bg-slate-800"
                  )}
                >
                  SCA SEM Supra ST
                </button>
              </div>

              {tratamentoType === 'nstemi' && (
                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex items-center gap-3 animate-in fade-in">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/85 border border-cyan-500 flex items-center justify-center text-cyan-400 animate-in">
                      <ClipboardList size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">Estratégias de Tratamento & Escore de Risco NSTEMI</h3>
                      <p className="text-xs text-slate-400">Pacientes sem oclusão total. O principal foco é a estratificação de risco.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 relative mt-4">
                    {/* Background line for flowchart, visible on md and up */}
                    <div className="absolute left-1/2 top-0 bottom-[10%] w-0.5 bg-slate-800 -translate-x-1/2 z-0 hidden md:block"></div>

                    {/* Step 2. Estratificação de Risco */}
                    <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start animate-in slide-in-from-bottom-8">
                       {/* Calculadora TIMI */}
                       <div className="p-5 rounded-2xl bg-slate-950 border border-slate-700 w-full shadow-lg border-t-4 border-t-teal-500">
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="text-sm font-black uppercase text-teal-400">2. Estratificação (TIMI Risk)</h4>
                            <span className="px-3 py-1 rounded bg-[#011c14] border border-teal-500 text-teal-400 font-extrabold font-mono text-xs">
                              Score: {calculateTimiValue()} / 7
                            </span>
                          </div>

                          <div className="space-y-1.5 mb-5">
                            {[
                              { key: 'idade65', label: 'Idade ≥ 65 anos' },
                              { key: 'fatoresRisco3', label: '≥ 3 Fatores de risco DCV' },
                              { key: 'dacPrevia', label: 'Estenose coronária ≥ 50%' },
                              { key: 'aas7dias', label: 'Uso de AAS nos últimos 7 dias' },
                              { key: 'angina24h', label: '≥ 2 episódios anginosos em 24h' },
                              { key: 'desvioST', label: 'Desvio ST ≥ 0.5 mm no ECG' },
                              { key: 'troponinaElevada', label: 'Elevação de troponina' }
                            ].map((item) => (
                              <div
                                key={item.key}
                                onClick={() => setTimiScore(prev => ({ ...prev, [item.key]: !prev[item.key] }))}
                                className={cn(
                                  "p-2.5 rounded-xl border transition-all cursor-pointer select-none flex items-center justify-between text-[11px]",
                                  timiScore[item.key as keyof typeof timiScore]
                                    ? "bg-teal-950 border-teal-500 text-white font-semibold shadow-inner"
                                    : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-800/80"
                                )}
                              >
                                <span>{item.label}</span>
                                <div className={cn("w-4.5 h-4.5 rounded-[4px] flex items-center justify-center font-mono text-[9px] border transition-colors", timiScore[item.key as keyof typeof timiScore] ? "bg-teal-500 text-black border-teal-500" : "border-slate-700 text-transparent")}>✓</div>
                              </div>
                            ))}
                          </div>
                       </div>

                       {/* Passos Hemodinamicos */}
                       <div className="space-y-4">
                          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-700 shadow-lg border-t-4 border-t-purple-500 w-full relative h-full flex flex-col">
                             <h4 className="text-sm font-black uppercase text-purple-400 mb-2 border-b border-slate-800 pb-2">3. Estratégia de Cateterismo</h4>
                             
                             <p className="text-[11px] text-slate-300 font-medium mb-4">A intervenção na SCA Sem Supra varia no tempo segundo a gravidade clínica/TIMI.</p>
                             
                             <div className="space-y-3 flex-1">
                               {/* Extremamente Alto */}
                               <div className="p-3.5 bg-red-950/20 border border-red-900/40 rounded-xl relative border-l-2 border-l-red-500">
                                  <span className="text-[10px] font-black uppercase text-red-500 flex justify-between items-center mb-1">
                                    Muito Alto Risco
                                    <span className="bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/30 text-[9px] font-mono">ICP &lt; 2h</span>
                                  </span>
                                  <p className="text-[10px] text-slate-400 leading-relaxed">Choque cardiogênico (Killip IV), dor refratária persistente à medicação, arritmias ventriculares graves.</p>
                               </div>

                               {/* Alto Risco */}
                               <div className="p-3.5 bg-amber-950/20 border border-amber-900/40 rounded-xl relative border-l-2 border-l-amber-500">
                                  <span className="text-[10px] font-black uppercase text-amber-500 flex justify-between items-center mb-1">
                                    Alto Risco
                                    <span className="bg-amber-500/10 text-amber-400 px-1.5 py-0.5 rounded border border-amber-500/30 text-[9px] font-mono">ICP &lt; 24h</span>
                                  </span>
                                  <p className="text-[10px] text-slate-400 leading-relaxed">Troponina em curva crescente constante, mudança ST/T dinâmica, TIMI &gt; 2 (ou GRACE &gt; 140).</p>
                               </div>
                               
                               {/* Baixo Risco */}
                               <div className="p-3.5 bg-emerald-950/20 border border-emerald-900/40 rounded-xl relative border-l-2 border-l-emerald-500">
                                  <span className="text-[10px] font-black uppercase text-emerald-500 flex justify-between items-center mb-1">
                                    Risco Intermediário / Baixo
                                    <span className="bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/30 text-[9px] font-mono">Estrat. Não Invasiva</span>
                                  </span>
                                  <p className="text-[10px] text-slate-400 leading-relaxed">Sem critérios acima, dor aliviada, requer teste isquêmico (ergométrico/Cintilo/AngioTC) antes.</p>
                               </div>
                             </div>
                             
                             <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-[#005c3c]/30 flex items-center justify-between shadow-inner">
                                <span className="text-[9px] font-black uppercase text-emerald-400">Conduta Indicada Atual:</span>
                                <span className="text-[10px] font-bold text-white px-2 py-0.5 text-right">{getTimiRecomendation(calculateTimiValue()).strategy.substring(0, 70)}...</span>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>
                </div>
              )}

              {tratamentoType === 'stemi' && (
                <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                  <div className="flex items-center gap-3 animate-in fade-in">
                    <div className="w-12 h-12 rounded-2xl bg-red-950/85 border border-red-500 flex items-center justify-center text-red-500 animate-in">
                      <Activity size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white uppercase tracking-tight">Estratégias de Reperfusão Urgente: STEMI (Com Supra ST)</h3>
                      <p className="text-xs text-slate-400">Tempo é músculo! O objetivo é abrir a artéria ocluída mecanicamente o mais rápido possível.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 relative">
                    {/* Background line for flowchart, visible on md and up */}
                    <div className="absolute left-1/2 top-0 bottom-[30%] w-0.5 bg-slate-800 -translate-x-1/2 z-0 hidden md:block"></div>

                    {/* Step 0. FMC */}
                    <div className="relative z-10 p-5 rounded-2xl bg-slate-900 border border-slate-700 shadow-xl max-w-sm mx-auto text-center border-t-4 border-t-red-500 w-full">
                       <div className="mx-auto w-10 h-10 mb-2 bg-red-950 border border-red-500 rounded-full flex items-center justify-center text-red-500">
                         <Activity size={18} />
                       </div>
                       <h4 className="text-sm font-black uppercase text-white tracking-wide">1. Primeiro Contato Médico</h4>
                       <p className="text-[11px] text-slate-400 mt-1 leading-normal">
                         Confirmar diagnóstico de STEMI no ECG.<br/> 
                         Tempo Porta-ECG: <strong className="text-rose-400">Alvo &lt; 10 min</strong>
                       </p>
                    </div>

                    <div className="flex justify-center z-10 relative -my-2 hidden md:flex">
                      <div className="bg-slate-800 text-slate-300 text-[19px] font-bold uppercase py-1 px-3 rounded-full border border-slate-600 shadow-lg">Decisão: Hospital com Hemodinâmica?</div>
                    </div>

                    {/* Step 1 & 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative z-10">
                      {/* Left: Hospital COM ICP */}
                      <div className="p-5 rounded-2xl bg-[#202048] border border-emerald-900/40 relative shadow-lg">
                         <div className="absolute top-4 right-4 text-[#00b48c] bg-black px-2 rounded-xl font-black text-5xl select-none">SIM</div>
                         <h4 className="text-sm font-black uppercase text-emerald-400 mb-2 flex items-center gap-2">
                           <span className="w-8 h-8 rounded-full bg-emerald-950 border border-emerald-500 text-[10px] flex items-center justify-center text-emerald-400 font-mono tracking-tighter shrink-0">90'</span>
                           Hospital COM ICP
                         </h4>
                         <p className="text-[11px] text-slate-300 mb-4 ml-10">Realizar Cateterismo (ICP Primária).</p>
                         <div className="p-4 ml-10 bg-slate-900 border border-emerald-900/30 rounded-xl relative">
                           <span className="text-[10px] font-black uppercase text-emerald-500 block mb-1">Estratégia Padrão Ouro</span>
                           <p className="text-[11px] text-slate-400 leading-relaxed">Garante as melhores taxas de desobstrução (TIMI 3) e menores riscos de hemorragia. <br/> <strong className="text-emerald-400">Tempo Porta-Balão Max: 90 minutos.</strong></p>
                         </div>
                      </div>

                      {/* Right: Hospital SEM ICP */}
                      <div className="p-5 rounded-2xl bg-black border border-slate-800 relative shadow-lg">
                         <div className="absolute top-4 right-4 text-[#f40000] font-black text-5xl select-none">NÃO</div>
                         <h4 className="text-sm font-black uppercase text-amber-500 mb-2 flex items-center gap-2">
                           <span className="w-8 h-8 rounded-full bg-slate-900 border border-amber-600 text-[10px] flex items-center justify-center text-amber-400 shrink-0">
                             <ClipboardList size={14} />
                           </span>
                           Hospital SEM ICP
                         </h4>
                         <p className="text-[11px] text-slate-400 mb-3 ml-10">Avaliar viabilidade e tempo de transferência.</p>

                         <div className="ml-10 p-3 bg-slate-900 border-2 border-dashed border-slate-700/80 rounded-xl mb-3 text-center">
                           <h5 className="text-[10px] font-black uppercase text-amber-400">Transferência &rarr; Balão será &lt; 120 min?</h5>
                         </div>
                         
                         <div className="ml-10 space-y-3">
                           {/* Transfer */}
                           <div className="p-3 bg-emerald-950/20 border border-emerald-900/30 rounded-xl border-l-2 border-l-emerald-500">
                             <span className="text-[10px] font-black uppercase text-emerald-400 block mb-1 flex items-center justify-between">
                               Sim (Transferir)
                               <span className="px-1.5 py-0.5 bg-emerald-900/50 rounded border border-emerald-800 text-emerald-300 text-[9px] font-mono">&lt; 120 min</span>
                             </span>
                             <p className="text-[10px] text-slate-400">Realizar ICP Primária na unidade de destino (estratégia fármaco-invasiva pode ser acoplada). Não infundir trombolítico ainda.</p>
                           </div>

                           {/* Trombolise */}
                           <div className="p-3 bg-red-950/20 border border-red-900/30 rounded-xl border-l-2 border-l-red-500">
                             <span className="text-[10px] font-black uppercase text-red-500 block mb-1 flex items-center justify-between">
                               Não (Fibrinólise)
                               <span className="px-1.5 py-0.5 bg-red-900/50 rounded border border-red-800 text-red-300 text-[9px] font-mono">Agulha &lt; 30 min</span>
                             </span>
                             <p className="text-[10px] text-slate-400">Administrar fibrinolítico no serviço atual imediatamente, a não ser que tenha contraindicação absoluta.</p>
                           </div>
                         </div>
                      </div>
                    </div>

                    {/* Guia de Fibrinolíticos */}
                    <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 w-full relative z-10 shadow-lg mt-2">
                        <div className="flex items-center gap-2 border-b border-slate-850 pb-3 mb-4">
                          <h4 className="text-sm font-black uppercase text-red-500">Guia Rápido de Fibrinolíticos (Trombólise)</h4>
                          <span className="bg-red-950 text-red-400 px-2 py-0.5 rounded text-[9px] font-bold border border-red-900 uppercase">Se ICP Média &gt; 120 min</span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <div className="p-3.5 bg-slate-900 border border-slate-800/80 rounded-xl relative overflow-hidden group">
                             <div className="absolute top-0 left-0 w-1 h-full bg-[#ffd261] opacity-50"></div>
                             <span className="text-[10px] font-black text-[#ffd261] uppercase tracking-wider block mb-1.5 pl-2">Alteplase (rt-PA) - Esquema Acelerado:</span>
                             <p className="text-[10px] text-slate-300 leading-relaxed pl-2 outline-none">
                               <strong className="text-white">&bull; Peso &gt; 65 kg:</strong> 15mg bolus EV &rarr; 50mg em infusão contínua p/ 30 min &rarr; 35mg infusão contínua p/ 60 min. (Total Máx 100mg). <br/>
                               <strong className="text-white">&bull; Peso &le; 65 kg:</strong> 15mg bolus EV &rarr; 0,75mg/kg p/ 30 min &rarr; 0,5mg/kg p/ 60 min.
                             </p>
                           </div>
                           <div className="p-3.5 bg-slate-900 border border-slate-800/80 rounded-xl relative overflow-hidden group">
                             <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500 opacity-50"></div>
                             <span className="text-[10px] font-black text-cyan-400 uppercase tracking-wider block mb-1.5 pl-2">Tenecteplase (TNK-tPA) - Bolus Único Prático:</span>
                             <p className="text-[10px] text-slate-300 leading-relaxed pl-2">
                               <strong className="text-white">&lt;60kg:</strong> 30mg | <strong className="text-white">60-69kg:</strong> 35mg | <strong className="text-white">70-79kg:</strong> 40mg <br/>
                               <strong className="text-white">80-89kg:</strong> 45mg | <strong className="text-white">&ge;90kg:</strong> 50mg <br/>
                               <span className="mt-1.5 py-1 px-2 bg-amber-950/30 text-amber-500 rounded border border-amber-900/30 font-semibold block text-center mt-1">Atenção: Reduzir dose à METADE em idosos &gt; 75 anos.</span>
                             </p>
                           </div>
                        </div>
                        
                        <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-900/40 text-slate-300 text-[11px]">
                          <span className="font-extrabold uppercase text-[9px] text-emerald-400 block mb-1.5 border-b border-emerald-900/50 pb-1 inline-block">Critérios de Reperfusão de Sucesso (após 60-90 min):</span>
                          <ul className="list-disc list-inside space-y-1 text-[10px] mt-1">
                            <li>Redução <strong className="text-white">&gt; 50%</strong> do supra de ST na derivação onde era mais evidente.</li>
                            <li>Alívio rápido, expressivo e sustentado da dor isquêmica original.</li>
                            <li>Surgimento de arritmias de reperfusão <strong className="text-white">(RIVA - Ritmo Idioventricular Acelerado)</strong> — este é um bom sinal clínico temporário.</li>
                            <li>Pico precoce marcante da troponina/CK-MB pós-procedimento.</li>
                          </ul>
                        </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ERROS E COMPLICAÇÕES (Merged into Tratamento) */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-6 animate-in fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-955 bg-amber-950/85 border border-amber-500 flex items-center justify-center text-amber-500">
                    <ShieldAlert size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">Sinais de Alerta: Mitigando Erros Críticos no Plantão</h3>
                    <p className="text-xs text-slate-400">Classificação de Killip de prognóstico imediato e erros comuns que põem em risco a vida do paciente.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Left: Killip Classification Visual Card */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <h4 className="text-sm font-black uppercase text-purple-400">Classificação Prognóstica de Killip (Pós-IAM)</h4>
                    <div className="space-y-2">
                      {[
                        { class: 'Killip I', desc: 'Isquemia pura, ausência total de sinais clínicos inflamatórios pulmonares ou congestão circulatória.', mort: '~6% de risco obituário imediato', highlightColor: 'border-slate-800' },
                        { class: 'Killip II', desc: 'Congestão discreta. Presença de terceira bulha (B3) auscultada e estertores crepitantes esparsos em menos de 50% dos campos pulmonares.', mort: '~17% de risco obituário', highlightColor: 'border-indigo-950' },
                        { class: 'Killip III', desc: 'Edema Agudo de Pulmão (EAP) franco estabelecido com estertores crepitantes em mais de 50% de ambos os campos pulmonares.', mort: '~38% de risco crítico', highlightColor: 'border-yellow-950' },
                        { class: 'Killip IV', desc: 'Choque Cardiogênico ativo. PAS inferior a 90 mmHg concomitante com hipoperfusão tecidual (pele fria, cianose, sudorese, lactato elevado).', mort: '~67–81% obituário extremo', highlightColor: 'border-red-950/80' }
                      ].map((k) => (
                        <div key={k.class} className={cn("p-3 rounded-xl border bg-slate-900/65 flex flex-col justify-between space-y-1.5", k.highlightColor)}>
                          <div className="flex justify-between items-center">
                            <strong className="text-xs text-white font-extrabold">{k.class}</strong>
                            <span className="text-[10px] uppercase font-black text-red-400">{k.mort}</span>
                          </div>
                          <p className="text-[11px] text-slate-350 leading-relaxed font-semibold">{k.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: 9 Plantão checkoff mistakes */}
                  <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-sm font-black uppercase text-red-500">Erros de Plantão que Você NÃO Pode Cometer</h4>
                      <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded bg-red-955 bg-red-950 text-red-400 border border-red-950">
                        Checklist de Segurança
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-normal font-semibold">
                      Antes de assinar a liberação do paciente com alta, marque sim nos checklists essenciais de segurança de manejo de plantão clínico:
                    </p>

                    <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                      {[
                        { id: 1, text: 'Atrasar ou esperar a confirmação do resultado de Troponina sérica para ativar reperfusão em quadro típico de Supra (STEMI).' },
                        { id: 2, text: 'Evitar interrogar meticulosamente dores de surgimento abrupto ou pulsos assimétricos (Riscos extremos da Dissecção Aórtica).' },
                        { id: 3, text: 'Prescrever Nitrato ou vasodilatadores em IAM de parede inferior sem excluir previamente infarto de Alça de Ventrículo Direito (V3R/V4R).' },
                        { id: 4, text: 'Classificar ou rotular qualquer troponina positiva isolada como IAM Tipo 1, sem indício isquêmico agudo claro.' },
                        { id: 5, text: 'Negligenciar e assumir que um eletrocardiograma de entrada inteiramente normal exclui em 100% uma patologia isquêmica em andamento.' },
                        { id: 6, text: 'Deixar de analisar derivações posteriores V7–V9 quando houver infra de ST puramente isolado em derivações anteriores V1–V3 (Supra Dorsal mascarado).' },
                        { id: 7, text: 'Não realizar ou postergar a requisição de derivações direitas acessórias no IAM de parede inferior com sinais hemodinâmicos instáveis.' },
                        { id: 8, text: 'Submeter de forma imprudente um paciente com traçado de Wellens a testes ergométricos de estocagem por estresse (risco crítico de oclusão total de DA).' },
                        { id: 9, text: 'Iniciar ou manter beta-bloqueador venoso em pacientes com congestão estabelecida, choque cardiogênico ativo ou bradicardia descompensada.' }
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setMistakesChecked(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                          className={cn(
                            "p-2.5 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-2.5 text-[11px]",
                            mistakesChecked[item.id]
                              ? "bg-emerald-950 border-emerald-500 text-white font-semibold"
                              : "bg-slate-900 border-slate-850 text-slate-350 hover:border-slate-800"
                          )}
                        >
                          <div className={cn("shrink-0 w-4 h-4 rounded flex items-center justify-center font-mono border mt-0.5", mistakesChecked[item.id] ? "bg-emerald-500 text-white" : "border-slate-700")}>
                            {mistakesChecked[item.id] && "✓"}
                          </div>
                          <span>
                            <strong className="text-red-400">{item.id}.</strong> {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Complications Checklist under high contrast style */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-850 space-y-4 font-semibold text-xs text-slate-100">
                  <h4 className="text-xs font-black uppercase text-[#ffd261] tracking-widest leading-none">Complicações Mecânicas do IAM (Aparência Rápida a Beira-Leito):</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 space-y-1">
                      <strong className="text-red-400 block">Ruptura de Músculo Papilar</strong>
                      <span className="text-slate-400 block">Janela: 2 a 7 dias pós-IAM</span>
                      <p>Apresentação: Edema Agudo de Pulmão (EAP) de progressão abrupta devastadora, com surgimento súbito de sopro sistólico mitral novo. Conduta: Encaminhar para cirurgia de urgência imediata.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 space-y-1">
                      <strong className="text-red-400 block">Comunicação Interventricular (CIV)</strong>
                      <span className="text-slate-400 block">Janela: 3 a 5 dias pós-IAM</span>
                      <p>Apresentação: Choque cardiogênico rápido associado a frêmito sistólico palpável de novo em borda esternal esquerda. Conduta: Cine de urgência e reparo cirúrgico plástico de emergência.</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-850 space-y-1">
                      <strong className="text-red-400 block">Ruptura de Parede Livre do VE</strong>
                      <span className="text-slate-400 block">Janela: 1 a 7 dias pós-IAM</span>
                      <p>Apresentação: Dissociação eletromecânica súbita (ritmo cardíaco no monitor ausente de pulso periférico palpável) por tamponamento cardíaco progressivo letal. Conduta: Pericardiocentese imediata.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
