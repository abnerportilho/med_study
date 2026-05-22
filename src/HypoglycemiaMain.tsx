import React, { useState } from "react";
import {
  AlertCircle,
  Activity,
  Syringe,
  CheckCircle2,
  Info,
  Layers,
  HelpCircle,
  RefreshCw,
  ArrowRight,
  ShieldAlert,
  BookOpen,
  User,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

// Interactive flowchart database matching medical guidelines
const flowchartSteps: Record<string, {
  title: string;
  question: string;
  suggestion: string;
  badge: string;
  badgeBg: string;
  yesNode: string | null;
  noNode: string | null;
  terminalType?: "success" | "danger" | "warning" | "info";
}> = {
  whipple_check: {
    title: "Passo 1: Confirmação de Hipoglicemia Real",
    question: "A Tríade de Whipple está integralmente preenchida (Sintomas + Glicemia sérica baixa < 55 mg/dL + Alívio imediato após glicose)?",
    suggestion: "Isso descarta queixas vagas sem nexo clínico (como ansiedade, fadiga isolada ou tontura idiopática). Exclui alarmes falsos.",
    badge: "Fase Prévia",
    badgeBg: "bg-amber-950 text-amber-300 border-amber-850/65",
    yesNode: "diabetic_check",
    noNode: "stop_not_hypo",
  },
  stop_not_hypo: {
    title: "Diagnóstico Descartado - Investigar Outras Causas",
    question: "Não há evidência de hipoglicemia patológica real ou verdadeira.",
    suggestion: "Investigar diagnósticos diferenciais alternativos: labirintite, crises de pânico, manifestações psicogênicas, arritmias cardíacas subclínicas.",
    badge: "Sem Diagnóstico",
    badgeBg: "bg-slate-950 text-slate-400 border-slate-800",
    yesNode: null,
    noNode: null,
    terminalType: "info"
  },
  diabetic_check: {
    title: "Passo 2: Perfil Farmacológico do Paciente",
    question: "O paciente possui diagnóstico conhecido de Diabetes ou faz uso de medicamentos hipoglicemiantes (Insulina ou Secretagogos)?",
    suggestion: "Essas drogas respondem por mais de 95% de todas as hipoglicemias que chegam na Sala Vermelha ou Pronto-Atendimento.",
    badge: "Histórico Clínico",
    badgeBg: "bg-emerald-950 text-emerald-300 border-emerald-850/65",
    yesNode: "iatrogenic_diab",
    noNode: "critical_check",
  },
  iatrogenic_diab: {
    title: "Manejo: Hipoglicemia Iatrogênica / Medicamentosa",
    question: "Paciente diabético em uso ativo de terapia corretiva.",
    suggestion: "Causa esclarecida. Conduta: Tratar a crise aguda. Ajustar doses de insulina prandial/basal, readequar horários alimentares e investigar se há nova Insuficiência Renal Crônica (que reduz depuração natural do hormônio).",
    badge: "Iatrogenia Comum",
    badgeBg: "bg-emerald-950 text-emerald-400 border-emerald-800",
    yesNode: null,
    noNode: null,
    terminalType: "success"
  },
  critical_check: {
    title: "Passo 3: Doenças Críticas Associadas",
    question: "O paciente apresenta quadro de falência visceral ativa ou infecção grave? (ex: Sepse Grave, Insuficiência Renal, Insuficiência Hepática Terminal - Cirrose, Caquexia Extrema ou Ingestão Maciça Súbita de Álcool)?",
    suggestion: "Estados graves de estresse catabólico inibem a gliconeogênese celular e esgotam os pools e reservas naturais de glicogênio.",
    badge: "Sepse / Falência Visceral",
    badgeBg: "bg-sky-950 text-sky-300 border-sky-850/60",
    yesNode: "secondary_hypo",
    noNode: "sample_crisis",
  },
  secondary_hypo: {
    title: "Manejo: Hipoglicemia Secundária por Doença Crítica",
    question: "Mecanismo puramente metabólico extra-pancreático de consumo acelerado ou falta de gliconeogênese.",
    suggestion: "Conduta: Tratar a causa bacteriana/inflamatória (ex: antibióticos de amplo espectro na Sepse Grave), hidratar e manter suporte glicêmico constante com Soro Glicosado (SG 5% ou 10% EV) contínuo a uma taxa de infusão de 80 a 125 mL/h para manter estabilidade sistêmica.",
    badge: "Metabólico Grave",
    badgeBg: "bg-sky-900 border border-sky-600/30 text-sky-300",
    yesNode: null,
    noNode: null,
    terminalType: "warning"
  },
  sample_crisis: {
    title: "Passo 4: Status do Hormônio Ativo na Crise",
    question: "Amostras hormonais coletadas exatamente DURANTE o evento crítico (com glicemia < 55 mg/dL) revelam Insulina plasmática Elevada (≥ 3 mcUI/mL)?",
    suggestion: "A dosagem orienta se a hipoglicemia é dita insulinopriva (insulina baixa apropriada) ou dita hiperinsulinêmica.",
    badge: "Marcador sérico",
    badgeBg: "bg-purple-950 text-purple-300 border-purple-855/65",
    yesNode: "peptideo_check",
    noNode: "non_hiper_causes",
  },
  non_hiper_causes: {
    title: "Etiologia: Causas Não-Hiperinsulinêmicas",
    question: "Glicose sérica reduzida com Insulina adequadamente suprimida (< 3 mcUI/mL).",
    suggestion: "Sinaliza que as vias contrarreguladoras falharam. Conduta: Dosar Cortisol Sérico de Urgência para investigar insuficiência adrenal (Doença de Addison). Se confirmada a crise adrenal, iniciar Hidrocortisona 100mg EV de 8/8h combinada à hidratação rigorosa.",
    badge: "Insulina Baixa",
    badgeBg: "bg-rose-955 bg-rose-950/80 text-rose-300 border-rose-800",
    yesNode: null,
    noNode: null,
    terminalType: "danger"
  },
  peptideo_check: {
    title: "Passo 5: Determinação da Origem Hormonal",
    question: "A dosagem concomitante de Peptídeo C está Elevada ou Inapropriadamente Normal (≥ 0.6 ng/mL)?",
    suggestion: "O Peptídeo C é gerado equimolar à insulina endógena natural. Se estiver suprimido, a insulina circulante é exógena.",
    badge: "Peptídeo C",
    badgeBg: "bg-purple-950 text-purple-300 border-purple-850",
    yesNode: "sulfonilureia_check",
    noNode: "exogenous_ins",
  },
  exogenous_ins: {
    title: "Etiologia: Administração Fictícia de Insulina Exógena",
    question: "Níveis de insulina astronômicos contrastando com Peptídeo C complemente nulo (< 0.6 ng/mL) durante a crise.",
    suggestion: "Diagnóstico: Aplicação silenciosa, fraudulenta ou acidental de insulina rápida (Munchausen por procuração, simulação ou erro hospitalar grave). Realizar suporte e encaminhamento psiquiátrico.",
    badge: "Origem Exógena",
    badgeBg: "bg-rose-955 bg-rose-950/80 text-rose-450 border-rose-800",
    yesNode: null,
    noNode: null,
    terminalType: "danger"
  },
  sulfonilureia_check: {
    title: "Passo 6: Pesquisa Toxicológica de Secretagogos",
    question: "A triagem laboratorial sérica ou de urina de Sulfonilureias / Glinidas resultou Positiva?",
    suggestion: "Estas drogas orais forçam a liberação de insulina pancreática mesmo na vigência de HGT baixo.",
    badge: "Toxicológico na Crise",
    badgeBg: "bg-purple-950 text-purple-300 border-purple-850",
    yesNode: "iatrogenic_secretagogue",
    noNode: "insulinoma_endogenous",
  },
  iatrogenic_secretagogue: {
    title: "Etiologia: Ingestão de Secretagogos Orais (Sulfonilureias)",
    question: "Varredura positiva para substâncias estimulantes secretagogas.",
    suggestion: "Comum em idosos que confundem caixas de remédios de terceiros ou em ingestões simuladas de má fé. Conduta: A hipoglicemia é de longa duração e rebotes constantes. Administrar SG 10% EV basal e realizar Octreotide 50 mcg SC de 8/8h como antídoto de feedback pancreático.",
    badge: "Secretagogo Encontrado",
    badgeBg: "bg-amber-950 text-amber-300 border-amber-800",
    yesNode: null,
    noNode: null,
    terminalType: "warning"
  },
  insulinoma_endogenous: {
    title: "Etiologia: Hiperinsulinismo Endógeno Orgânico (Insulinoma)",
    question: "Insulina sérica Alta + Peptídeo C Alto + Triagem de Secretagogos Completamente Negativa.",
    suggestion: "Diagnóstico mestre: Altamente indicativo de Insulinoma (tumor neuroendócrino pancreático produtor de insulina de forma autônoma). Próxima conduta: Solicitar exames de imagem tomográfica de abdômen com contraste ou Ultra-sonografia Endoscópica (Ecoendoscopia) para pesquisa topográfica. Considerar internação eletiva para realização do Teste de Jejum de 72 horas.",
    badge: "Endógeno Autônomo",
    badgeBg: "bg-purple-950 text-purple-400 border-purple-900/60",
    yesNode: null,
    noNode: null,
    terminalType: "success"
  }
};

export default function HypoglycemiaMain() {
  const [activeSegment, setActiveSegment] = useState<
    "definition" | "symptoms" | "treatment" | "investigation"
  >("definition");

  const [interactiveStep, setInteractiveStep] = useState<number>(1);
  const [glicemiaSimulada, setGlicemiaSimulada] = useState<number>(65);
  const [showGoldStandardWarning, setShowGoldStandardWarning] = useState(false);
  const [activeCardDetail, setActiveCardDetail] = useState<string | null>(null);

  // Focus and flow states for etiology filters and visual flowchart
  const [activeEtiologyFilter, setActiveEtiologyFilter] = useState<"all" | "hiper" | "naohiper">("all");
  const [flowchartNode, setFlowchartNode] = useState<string>("whipple_check");
  const [flowHistory, setFlowHistory] = useState<string[]>([]);

  // Glicemia Simulator responses
  const getGlicemiaState = (g: number) => {
    if (g >= 70) return { label: "Glicemia Normal (Segura)", color: "text-emerald-400 border-emerald-500 bg-emerald-950/30" };
    if (g >= 54) return { label: "Hipoglicemia Moderada (Sintomas Ativos)", color: "text-amber-400 border-amber-500 bg-amber-950/30" };
    return { label: "Hipoglicemia Severa (Risco Neuroglicopênico Crítico)", color: "text-rose-400 border-rose-500 bg-rose-950/30" };
  };

  const simulationState = getGlicemiaState(glicemiaSimulada);

  const stepsDetails = {
    whipple: "A Tríade de Whipple é mandatória para confirmar hipoglicemia verdadeira em não-diabéticos. Consiste em: (1) Sinais e sintomas de hipoglicemia; (2) Concentração de glicose plasmática baixa aferida por laboratório; (3) Resolução completa dos sintomas com a elevação da glicose sanguínea sérica.",
    mecanismo: "Fisiologia: Na queda da glicose corporal, o pâncreas inibe a liberação de insulina e estimula o glucagon sanguíneo. Secundariamente, há liberação de adrenalina pelas supra-renais para ativar glicogenólise periférica e gliconeogênese. Se houver falha dessas barreiras, o SNC sofre por falta direta de ATP.",
    errocomum: "Erro Grave: Tentar reverter a hipoglicemia de um paciente em coma fornecendo líquidos doces por via oral. Isso causará aspiração traqueal maciça e pneumonia química. Sempre estabeleça via segura (glicose endovenosa) ou use glucagon."
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 text-slate-200">
      {/* Summary Header */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 to-slate-900 border border-amber-500/30 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 text-amber-400 mb-1">
            <AlertCircle size={18} />
            <span className="text-xs font-black uppercase tracking-widest">Protocolo de Emergência</span>
          </div>
          <h2 className="text-2xl font-black text-white uppercase tracking-tight">Hipoglicemia na Emergência</h2>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Reversão rápida da neuroglicopenia, fluxos decisionais baseados no nível de consciência e investigação etiológica de eventos recorrentes ou de início súbito.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0 bg-slate-950 p-3 rounded-xl border border-slate-800">
          <span className="text-[9px] text-slate-500 font-black uppercase tracking-wider">Limiar de Alerta</span>
          <span className="text-xl font-black text-amber-500 font-mono">&lt; 70 mg/dL</span>
        </div>
      </div>

      {/* Decision Sections Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-1 bg-slate-950 rounded-2xl border border-slate-900 shadow-md">
        {[
          { id: "definition", label: "Definição & Fisiologia", icon: BookOpen, activeColor: "border-amber-500 text-amber-400" },
          { id: "symptoms", label: "Clínica & Reconhecimento", icon: Activity, activeColor: "border-purple-500 text-purple-400" },
          { id: "treatment", label: "Conduta & Protocolo", icon: Syringe, activeColor: "border-emerald-500 text-emerald-400" },
          { id: "investigation", label: "Investigação Etiológica", icon: Layers, activeColor: "border-indigo-500 text-indigo-400" },
        ].map((seg) => {
          const isActive = activeSegment === seg.id;
          const SegIcon = seg.icon;
          return (
            <button
              key={seg.id}
              onClick={() => {
                setActiveSegment(seg.id as any);
                setActiveCardDetail(null);
              }}
              className={cn(
                "flex items-center justify-center gap-2 py-3 px-3 rounded-xl text-xs font-black uppercase tracking-tight transition-all cursor-pointer text-center",
                isActive
                  ? "bg-slate-900 border-2 " + seg.activeColor + " shadow-lg shadow-black/40 scale-102"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
              )}
            >
              <SegIcon size={14} className={isActive ? "opacity-100" : "opacity-70"} />
              <span className="hidden sm:inline">{seg.label}</span>
              <span className="sm:hidden">{seg.label.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="min-h-[420px]">
        <AnimatePresence mode="wait">
          {/* SEGMENT 1: DEFINITION & PHYSIOLOGY */}
          {activeSegment === "definition" && (
            <motion.div
              key="definition"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Visual balloons for clinical reasoning */}
                <div className="lg:col-span-4 space-y-4">
                  {/* Balloon: Diagnóstico Verdadeiro */}
                  <div className="bg-amber-950/80 border-2 border-amber-500 p-5 rounded-2xl shadow-[0_0_25px_rgba(245,158,11,0.25)] space-y-4">
                    <div className="flex justify-between items-center border-b border-amber-800 pb-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse animate-duration-1000" />
                        <span className="text-[11px] font-black text-amber-300 uppercase tracking-widest">Padrão Ouro Confirmação</span>
                      </div>
                      <span className="text-[10px] bg-amber-900/60 border border-amber-500/30 text-amber-400 px-2 py-0.5 rounded-full font-black">Whipple</span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-white font-black text-base uppercase tracking-tight flex items-center gap-1.5">
                        🏆 Tríade de Whipple
                      </h4>
                      <p className="text-amber-200/90 text-[11px] leading-relaxed">
                        Exigida para comprovar hipoglicemia verdadeira em pacientes não-diabéticos. Todos os <strong className="text-white underline decoration-amber-400">3 critérios</strong> devem coexistir:
                      </p>
                    </div>

                    {/* Step-by-step Illustrative Pillar Badges with High Contrast */}
                    <div className="space-y-2 pt-1">
                      {/* Pillar 1 */}
                      <div className="bg-slate-950/90 border border-amber-500/25 p-3 rounded-xl flex items-start gap-3 hover:border-amber-400 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                          1
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider block">Manifestações Clínicas</span>
                          <p className="text-slate-200 font-bold text-[11px] leading-tight">
                            Sintomas compatíveis com hipoglicemia (autonômicos ou neuroglicopênicos).
                          </p>
                        </div>
                      </div>

                      {/* Direction Arrow */}
                      <div className="flex justify-center -my-1">
                        <div className="w-0.5 h-3 bg-amber-500/40 rounded-full" />
                      </div>

                      {/* Pillar 2 */}
                      <div className="bg-slate-950/90 border border-amber-500/25 p-3 rounded-xl flex items-start gap-3 hover:border-amber-400 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                          2
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider block">Glicemia Reduzida</span>
                          <p className="text-slate-200 font-bold text-[11px] leading-tight">
                            Glicose plasmática comprovadamente baixa sérica (<strong className="text-white">&lt; 55 mg/dL</strong>) no momento do quadro.
                          </p>
                        </div>
                      </div>

                      {/* Direction Arrow */}
                      <div className="flex justify-center -my-1">
                        <div className="w-0.5 h-3 bg-amber-500/40 rounded-full" />
                      </div>

                      {/* Pillar 3 */}
                      <div className="bg-slate-950/90 border border-amber-500/25 p-3 rounded-xl flex items-start gap-3 hover:border-amber-400 transition-colors">
                        <div className="w-6 h-6 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.5)]">
                          3
                        </div>
                        <div>
                          <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider block">Alívio Rápido</span>
                          <p className="text-slate-200 font-bold text-[11px] leading-tight">
                            Desaparecimento completo dos sintomas imediatamente após a normalização glicêmica.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-1 border-t border-amber-900/40 flex justify-between items-center text-[10px] text-amber-300">
                      <span>Critério Clínico Indispensável</span>
                      <button
                        onClick={() => setActiveCardDetail(activeCardDetail === "whipple" ? null : "whipple")}
                        className="font-extrabold text-[#24f4e3] hover:underline cursor-pointer flex items-center gap-1"
                      >
                        {activeCardDetail === "whipple" ? "Ver menos" : "Ver Notas de Fisiologia »"}
                      </button>
                    </div>
                  </div>

                  {/* Balloon: Como o corpo reage */}
                  <div className="bg-blue-955 bg-blue-950 border-2 border-blue-500/50 p-5 rounded-2xl shadow-xl space-y-3">
                    <div className="flex justify-between items-center border-b border-blue-800/60 pb-2">
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Fisiologia de Defesa</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
                    </div>
                    <h4 className="text-white font-black text-sm uppercase">Mecanismo de Contrarregulação</h4>
                    <p className="text-blue-100 text-xs leading-relaxed">
                      O pâncreas e a glândula adrenal agem em sinergia. A queda na secreção basal de insulina, ativada sob glicose de <strong className="text-white">&lt; 80 mg/dL</strong>, precede imediatamente o pico adrenérgico.
                    </p>
                    <button
                      onClick={() => setActiveCardDetail(activeCardDetail === "mecanismo" ? null : "mecanismo")}
                      className="text-[10px] text-blue-300 font-extrabold flex items-center gap-1 hover:text-white transition-colors cursor-pointer pt-1"
                    >
                      {activeCardDetail === "mecanismo" ? "Ver menos" : "Entender Contra-Secreção »"}
                    </button>
                  </div>
                </div>

                {/* Main Interactive Details Grid */}
                <div className="lg:col-span-8 space-y-4">
                  <AnimatePresence>
                    {activeCardDetail && (
                      <motion.div
                        key={activeCardDetail}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-slate-900 border border-slate-800 p-5 rounded-xl text-xs space-y-1.5 leading-relaxed text-slate-300"
                      >
                        <h5 className="font-extrabold text-amber-400 uppercase flex items-center gap-2">
                          <Info size={14} /> Detalhamento do Conceito Selecionado
                        </h5>
                        <p>{stepsDetails[activeCardDetail as keyof typeof stepsDetails]}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Limiares Glicêmicos Map */}
                  <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 shadow-xl relative">
                    <h3 className="text-sm font-black text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Zap size={16} className="text-amber-500" />
                      Protocolo Clínico de Resposta por Estágio Glicêmico
                    </h3>
                    
                    <div className="space-y-4 relative">
                      {/* Vertical line connector */}
                      <div className="absolute top-2 bottom-2 left-4 w-0.5 bg-slate-800 z-0" />

                      {/* Threshold Item 1 */}
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-emerald-950 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 font-black text-xs shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                          N1
                        </div>
                        <div className="bg-slate-950 p-4 border border-emerald-950 rounded-xl flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-black text-white text-xs uppercase text-emerald-400">Glicemia ~ 70 mg/dL</span>
                            <span className="text-[9px] bg-emerald-950/80 text-emerald-400 border border-emerald-900/40 px-2 py-0.5 rounded font-extrabold">RESPOSTA ATIVA</span>
                          </div>
                          <p className="text-xs text-slate-350 leading-relaxed">
                            <strong className="text-white text-[11px]">Estágio Alvo Inicial:</strong> Inibição da liberação de insulina endógena e início da secreção maciça de glucagon e epinefrina para auto-correção hepática.
                          </p>
                        </div>
                      </div>

                      {/* Threshold Item 2 */}
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-amber-950 border-2 border-amber-500 flex items-center justify-center text-amber-400 font-black text-xs shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.3)]">
                          N2
                        </div>
                        <div className="bg-slate-950 p-4 border border-amber-950 rounded-xl flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-black text-white text-xs uppercase text-amber-400">Glicemia &lt; 54 mg/dL</span>
                            <span className="text-[9px] bg-amber-950/80 text-amber-400 border border-amber-900/40 px-2 py-0.5 rounded font-extrabold">LIMIAR SERECEÇÃO ADRENÉRGICA</span>
                          </div>
                          <p className="text-xs text-slate-350 leading-relaxed">
                            <strong className="text-white text-[11px]">Sintomas Fisiológicos Ativos:</strong> Sintomas autonômicos brutais se manifestam (sudorese, tremor, ansiedade). O cérebro começa a solicitar aporte prioritário.
                          </p>
                        </div>
                      </div>

                      {/* Threshold Item 3 */}
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="w-8 h-8 rounded-full bg-rose-950 border-2 border-rose-500 flex items-center justify-center text-rose-400 font-black text-xs shrink-0 shadow-[0_0_10px_rgba(244,63,94,0.3)]">
                          N3
                        </div>
                        <div className="bg-slate-950 p-4 border border-rose-950 rounded-xl flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-black text-white text-xs uppercase text-rose-400">Glicemia &lt; 50 mg/dL</span>
                            <span className="text-[9px] bg-rose-950/80 text-rose-400 border border-rose-900/40 px-2 py-0.5 rounded font-extrabold">GRAVIDADE SEVERA (NEUROPA)</span>
                          </div>
                          <p className="text-xs text-slate-350 leading-relaxed">
                            <strong className="text-white text-[11px]">Dano Neuroglicopênico Direct:</strong> Comprometimento cognitivo progressivo, letargia profunda, risco de convulsões epileptiformes, coma por exaustão celular e óbito por arritmia.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* SEGMENT 2: CLINICAL RECOGNITION */}
          {activeSegment === "symptoms" && (
            <motion.div
              key="symptoms"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Dynamic Simulated State */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider">Simulador de Reconhecimento Clínico</h4>
                  <p className="text-[11px] text-slate-500">Ajuste o controle deslizante para ver quais sintomas aparecem e o nível de gravidade associado.</p>
                </div>
                <div className="flex items-center gap-6 w-full md:w-auto shrink-0">
                  <div className="flex-1 md:w-48">
                    <input
                      type="range"
                      min="35"
                      max="90"
                      value={glicemiaSimulada}
                      onChange={(e) => setGlicemiaSimulada(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer h-1 rounded bg-slate-950 border border-slate-800"
                    />
                    <div className="flex justify-between text-[8px] text-slate-500 uppercase font-black mt-1">
                      <span>Critico (35)</span>
                      <span>Limiar (70)</span>
                      <span>Normal (90)</span>
                    </div>
                  </div>
                  <div className={cn("px-4 py-2 border rounded-xl text-xs font-black uppercase tracking-wider font-mono", simulationState.color)}>
                    Glicemia: {glicemiaSimulada} mg/dL
                  </div>
                </div>
              </div>

              {/* Grid of Two Main Symptom Groups: High Contrast Balloon layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Autonomicos (Vinho / Red) */}
                <div className="bg-rose-955 bg-rose-950/80 border-2 border-rose-500/40 p-6 rounded-2xl shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-rose-900 pb-3">
                    <h4 className="text-white font-black text-sm uppercase flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      Sintomas Autonômicos (Adrenérgicos)
                    </h4>
                    <span className="text-[9px] bg-rose-900 text-rose-300 font-bold px-2 py-0.5 rounded uppercase">Efeito Rebote</span>
                  </div>

                  <p className="text-xs text-rose-200 leading-relaxed">
                    Sinal de alerta gerado pela liberação imediata de catecolaminas (epinefrina) e acetilcolina. Atuam como um sistema de alarme precoce que avisa o paciente para ingerir carboidratos.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { nome: "Sudorese Profusa", desc: "Clássica pele fria e pegajosa" },
                      { nome: "Tremores Finos", desc: "Geralmente nas extremidades" },
                      { nome: "Palpitações", desc: "Taquicardia sinusal reflexa" },
                      { nome: "Fome Devastadora", desc: "Instinto de sobrevivência" },
                    ].map((s, idx) => (
                      <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-rose-900/30">
                        <strong className="text-white text-xs block font-extrabold">{s.nome}</strong>
                        <span className="text-[9px] text-slate-400 mt-0.5 block">{s.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Neuroglicopenicos (Royal Purple) */}
                <div className="bg-purple-955 bg-purple-950/80 border-2 border-purple-500/40 p-6 rounded-2xl shadow-xl space-y-4">
                  <div className="flex items-center justify-between border-b border-purple-900 pb-3">
                    <h4 className="text-white font-black text-sm uppercase flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                      Sintomas Neuroglicopênicos
                    </h4>
                    <span className="text-[9px] bg-purple-900 text-purple-300 font-bold px-2 py-0.5 rounded uppercase">Privação do SNC</span>
                  </div>

                  <p className="text-xs text-purple-200 leading-relaxed">
                    Resultam diretamente da privação de glicose do tecido neurológico. Indica falência de compensação sistêmica. É perigosa pois reduz a capacidade cognitiva de pedir ajuda.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    {[
                      { nome: "Discurso Confuso", desc: "Lentificação mental" },
                      { nome: "Visão Turva", desc: "Comprometimento occipital" },
                      { nome: "Comportamento Bizarro", desc: "Agitação, agressividade" },
                      { nome: "Coma / Convulsões", desc: "Falência energética de membrana" },
                    ].map((s, idx) => (
                      <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-purple-900/30">
                        <strong className="text-white text-xs block font-extrabold">{s.nome}</strong>
                        <span className="text-[9px] text-slate-400 mt-0.5 block">{s.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Alcohol and Sepsis Clinical Relationships: Two highly clinical, high-contrast reasoning balloons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Alcohol Balloon (Vinho/Amber/Grafite) */}
                <div className="bg-slate-955 bg-slate-950/90 border-2 border-amber-600/50 p-5 rounded-2xl shadow-[0_0_15px_rgba(245,158,11,0.15)] space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Fisiopatologia de Bloqueio</span>
                    <span className="text-[9.5px] bg-amber-950 border border-amber-800 text-amber-400 px-2 py-0.5 rounded font-black uppercase">Álcool Abusivo</span>
                  </div>
                  <h4 className="text-white font-black text-sm uppercase flex items-center gap-1.5">
                    🍺 Inibição Hepática & Mascaramento Clínico
                  </h4>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    A metabolização do etanol pelo fígado consome <strong className="text-white">NAD+</strong> intracelular, desviando substratos essenciais (lactato e glicerol) e <strong className="text-[#24f4e3]">inibindo completamente a gliconeogênese</strong>.
                  </p>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-350 space-y-1.5 leading-relaxed">
                    <strong className="text-amber-400 text-[11.5px] block font-black border-b border-slate-800 pb-0.5">⚠️ Mascaramento Autonômico:</strong>
                    O álcool deprime a resposta nervosa adrenérgica simpática periférica. O paciente <strong className="text-white">não apresenta</strong> os tremores e sudorese clássicos de alerta. A hipoglicemia instala-se diretamente com <strong className="text-[#24f4e3] font-bold">sintomas neuroglicopênicos graves</strong> (discurso desconxo, agressividade, sonolência, torpor), sendo erroneamente confundida com embriaguez ou AVC.
                  </div>
                </div>

                {/* Sepsis Balloon (Vinho/Indigo/Grafite) */}
                <div className="bg-slate-955 bg-slate-950/90 border-2 border-indigo-600/50 p-5 rounded-2xl shadow-[0_0_15px_rgba(99,102,241,0.15)] space-y-3">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                    <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Catabolismo Extremo</span>
                    <span className="text-[9.5px] bg-indigo-950 border border-indigo-800 text-indigo-400 px-2 py-0.5 rounded font-black uppercase">Sepse Grave</span>
                  </div>
                  <h4 className="text-white font-black text-sm uppercase flex items-center gap-1.5">
                    🦠 Hipermetabolismo Periférico Acelerado
                  </h4>
                  <p className="text-slate-305 text-slate-300 text-[11px] leading-relaxed">
                    Na sepse, a cascata inflamatória consome glicose de forma acelerada nos tecidos periféricos devido ao <strong className="text-white">hipermetabolismo citosólico</strong> e exaure estoques normais de glicogênio hepático.
                  </p>
                  <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-[11px] text-slate-350 space-y-1.5 leading-relaxed">
                    <strong className="text-indigo-400 text-[11.5px] block font-black border-b border-slate-800 pb-0.5">🦠 Apresentação Atípica na Sala Vermelha:</strong>
                    Sépticos não realizam contra-regulação adrenérgica perfeita. O sinal mestre costuma ser apenas uma <strong className="text-white">desorientação aguda</strong>, bradicnidia mental severa, letargia profunda ou <strong className="text-rose-400 font-bold">hipotermia de difícil controle sistêmico</strong>. A verificação do dextro/HGT é mandatória em todo paciente febril ou infectado instável.
                  </div>
                </div>
              </div>

              {/* Investigar Etiologias - Large Interactive Banner Action Button */}
              <div className="pt-4">
                <button
                  onClick={() => setActiveSegment("investigation")}
                  className="w-full bg-slate-950/90 hover:bg-slate-900 border-2 border-indigo-500/50 hover:border-indigo-400 p-5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5 flex flex-col sm:flex-row justify-between items-center gap-4 cursor-pointer text-left group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-indigo-400 font-extrabold text-[10px] uppercase tracking-widest">
                      <Layers size={14} className="animate-pulse" />
                      <span>Investigação Diagnóstica Avançada</span>
                    </div>
                    <h4 className="text-white font-black text-sm uppercase group-hover:text-[#24f4e3] transition-colors">
                      🔍 Ir para Investigação Diagnóstica Pós-Fase Crítica
                    </h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed max-w-2xl">
                      Além de reverter a crise aguda, é obrigatório determinar a causa de base: insulina exógena, secretagogos orais, falência adrenal, ou insulinoma. Clique para ver o fluxograma de exames durante a crise.
                    </p>
                  </div>
                  <div className="bg-indigo-950 text-[#24f4e3] p-3 rounded-xl font-black text-xs uppercase flex items-center gap-2 group-hover:bg-[#24f4e3] group-hover:text-slate-950 border border-indigo-900/40 transition-all shrink-0">
                    <span>Investigar Etiologias</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* SEGMENT 3: TREATMENT PROTOCOL */}
          {activeSegment === "treatment" && (
            <motion.div
              key="treatment"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Sequential decision algorithm in layers */}
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-6">
                  <div>
                    <h3 className="text-white font-black text-sm uppercase tracking-wider">Algoritmo de Atendimento Imediato</h3>
                    <p className="text-[11px] text-slate-400 mt-0.5">Clique nas etapas sequenciais abaixo para ver o manejo prático.</p>
                  </div>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 font-extrabold px-2.5 py-1 rounded-lg border border-emerald-900 shrink-0 uppercase tracking-widest">
                    Regra Áurea
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Step 1: Clickable */}
                  <button
                    onClick={() => setInteractiveStep(1)}
                    className={cn(
                      "p-4 rounded-xl border text-left cursor-pointer transition-all flex flex-col gap-2 min-h-[140px]",
                      interactiveStep === 1
                        ? "bg-emerald-950 border-emerald-500 shadow-md scale-102"
                        : "bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                    )}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Etapa 1: Triagem</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24f4e3] animate-pulse" />
                    </div>
                    <span className="text-sm font-black text-[#24f4e3] uppercase">Via Oral Viável?</span>
                    <p className="text-[10px] text-slate-400 leading-relaxed mt-1">
                      Avalie de imediato o nível de reflexo de deglutição do paciente na sala vermelha ou enfermaria.
                    </p>
                  </button>

                  {/* Step 2: Clickable */}
                  <button
                    onClick={() => setInteractiveStep(2)}
                    className={cn(
                      "p-4 rounded-xl border text-left cursor-pointer transition-all flex flex-col gap-2 min-h-[140px]",
                      interactiveStep === 2
                        ? "bg-emerald-950 border-emerald-500 shadow-md scale-102"
                        : "bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                    )}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Etapa 2: Conduta</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24f4e3]" />
                    </div>
                    <span className="text-sm font-black text-amber-400 uppercase">Mão na Massa</span>
                    <p className="text-[10px] text-slate-400 leading-relaxed mt-1">
                      Medicação imediata: Regra dos 15g (se consciente) ou Reposição Endovenosa Rápida (rebaixado).
                    </p>
                  </button>

                  {/* Step 3: Clickable */}
                  <button
                    onClick={() => setInteractiveStep(3)}
                    className={cn(
                      "p-4 rounded-xl border text-left cursor-pointer transition-all flex flex-col gap-2 min-h-[140px]",
                      interactiveStep === 3
                        ? "bg-emerald-950 border-emerald-500 shadow-md scale-102"
                        : "bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50"
                    )}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider">Etapa 3: Alvo</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#24f4e3]" />
                    </div>
                    <span className="text-sm font-black text-purple-400 uppercase">Prevenir Rebote</span>
                    <p className="text-[10px] text-slate-400 leading-relaxed mt-1">
                      Estabelecer infusão lenta se as causas forem sulfas de longa duração ou insulina de longa ação.
                    </p>
                  </button>
                </div>

                {/* Interactive Flow Output */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-850 mt-5 space-y-4">
                  {interactiveStep === 1 && (
                    <div className="space-y-3">
                      <span className="text-[9px] uppercase font-black text-[#24f4e3] tracking-widest block">🎯 Passo de Decisão Clínica:</span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-emerald-950/40 p-4 border border-emerald-800/40 rounded-xl">
                          <strong className="text-white text-xs block mb-1">A: Sim, deglutição preservada</strong>
                          <p className="text-[11px] text-slate-300">
                            Paciente está alerta, cooperativo e engole sem riscos. Prescreva imediatamente carboidrato simples por via oral (Regra dos 15g). Evite gorduras (chocolates) que atrasam o esvaziamento gástrico.
                          </p>
                        </div>
                        <div className="bg-rose-955 bg-rose-950/40 p-4 border border-rose-900/40 rounded-xl">
                          <strong className="text-white text-xs block mb-1">B: Não, rebaixamento/restringido</strong>
                          <p className="text-[11px] text-slate-300">
                            Paciente torporoso, letárgico ou ausência de tosse/deglutição. Nunca forneça líquidos orais. Estabeleça acesso periférico e prepare Glicose de Alta Concentração Endovenosa de imediato.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {interactiveStep === 2 && (
                    <div className="space-y-4">
                      <span className="text-[9px] uppercase font-black text-amber-400 tracking-widest block">⚡ Detalhamento da Intervenção Ativa:</span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-900 p-4 border border-slate-800 rounded-xl space-y-2">
                          <h5 className="font-extrabold text-xs text-white uppercase tracking-wider border-b border-slate-800 pb-1">Consciente: Regra dos 15/15</h5>
                          <p className="text-[11px] text-slate-300">
                            1. Consumir <strong className="text-[#24f4e3]">15g de glicose simples</strong> (ex: 1 colher de sopa de açúcar na água, ou 150ml de refrigerante comum).
                          </p>
                          <p className="text-[11px] text-slate-300">
                            2. Aguardar <strong className="text-white">15 minutos</strong> em repouso e aferir a Glicemia Capilar.
                          </p>
                          <p className="text-[11px] text-slate-300">
                            3. Se <strong className="text-white">&lt; 70 mg/dL</strong>, repetir o processo. Uma vez normalizado, iniciar refeição complexa para evitar queda por desabastecimento de glicogênio.
                          </p>
                        </div>

                        <div className="bg-slate-900 p-4 border border-slate-800 rounded-xl space-y-2">
                          <h5 className="font-extrabold text-xs text-white uppercase tracking-wider border-b border-slate-800 pb-1">Unconscious: Glicose EV</h5>
                          <p className="text-[11px] text-slate-300">
                            1. Infundir rapidamente <strong className="text-white">40 a 60 mL de Glicose a 50% EV</strong> (0,5 a 1g/kg de glicose pura), emparelhado em veia de bom fluxo para não causar flebite química.
                          </p>
                          <p className="text-[11px] text-slate-300">
                            2. Se ausência de acesso endovenoso: Aplicar <strong className="text-purple-400">Glucagon (1 mg IM ou SC)</strong>. Estimula a liberação do glicogênio estocado no fígado.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {interactiveStep === 3 && (
                    <div className="space-y-3">
                      <span className="text-[9px] uppercase font-black text-purple-400 tracking-widest block">🛡️ Manutenção Segura de Estabilização:</span>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Caso a causa tenha sido o uso de sulfonilureias (ex: clorpropamida, glibenclamida, que têm meia-vida de até 36 horas) orais ou insulinas ultralongas de depósito, a hipoglicemia sofrerá <strong className="text-rose-400">múltiplos rebotes sistêmicos</strong> graves.
                      </p>
                      <div className="p-3.5 bg-indigo-950/30 border border-indigo-900/40 rounded-xl text-xs text-indigo-300 leading-relaxed">
                        <strong className="text-white block mb-1">🏥 Conduta na Emergência:</strong>
                        Inicie infusão basal contínua de <strong className="text-white">Soro Glicosado a 5% ou 10% EV</strong> a uma razão de 80 a 125 mL/h para prover um aporte calórico regular contínuo. Nos casos refratários de rebote por sulfonilureias, considere prescrever <strong className="text-[#24f4e3]">Octreotide EV ou SC (50 mcg)</strong>, que age inibindo diretamente a secreção pancreática de insulina estimulada.
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Traps warning button */}
              <div className="pt-2">
                <button
                  onClick={() => setShowGoldStandardWarning(!showGoldStandardWarning)}
                  className={cn(
                    "w-full px-4 py-3 border rounded-xl flex items-center justify-between text-xs font-bold transition-all cursor-pointer",
                    showGoldStandardWarning
                      ? "bg-rose-950/20 border-rose-500 text-rose-300"
                      : "bg-slate-950 border-rose-900/60 text-slate-300 hover:border-rose-500"
                  )}
                >
                  <span className="flex items-center gap-2">
                    <ShieldAlert size={16} className="text-rose-500 animate-pulse" />
                    <strong className="uppercase">⚠️ ARMADILHA CLÍNICA CRÍTICA</strong>
                  </span>
                  <span className="text-[9px] py-0.5 px-2 bg-rose-900/30 rounded border border-rose-750/40 text-rose-400 uppercase font-black">
                    {showGoldStandardWarning ? "Ocultar" : "Revelar Erro Grave"}
                  </span>
                </button>

                <AnimatePresence>
                  {showGoldStandardWarning && (
                    <motion.div
                      key="gold_warning"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden mt-3"
                    >
                      <div className="bg-slate-950 p-4 border border-rose-900/40 rounded-xl space-y-3 leading-relaxed text-xs text-rose-200">
                        <h5 className="font-extrabold text-white">O Perigo do Rebote por Correção Excessiva</h5>
                        <p>
                          Correções agressivas em excesso (ex: prescrever múltiplas ampolas de glicose uma atrás da outra sem aguardar a latência clínica) podem induzir a uma <strong className="text-white">hiperinsulinemia reativa dramática</strong> pelo próprio pâncreas saudável do paciente.
                        </p>
                        <p>
                          O pico insulínico rebote jogará o paciente de volta em uma hipoglicemia ainda mais profunda e difícil de corrigir 1 hora depois. <strong className="text-emerald-400 font-bold">Faça correções equilibradas</strong> e use soros de manutenção de forma inteligente!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {activeSegment === "investigation" && (
            <motion.div
              key="investigation"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              {/* Header Box */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
                <h4 className="text-white font-black text-sm uppercase flex items-center gap-2">
                  <Layers size={16} className="text-indigo-400" />
                  Investigação Diagnóstica Pós-Crise Glicêmica
                </h4>
                <p className="text-[11.5px] text-slate-400 leading-relaxed">
                  Não basta reverter o coma ou rebaixamento agudo. Em todo paciente não-diabético que preencha a Tríade de Whipple, é mandatório realizar a triagem etiológica minuciosa de forma progressiva.
                </p>
              </div>

              {/* Coleta Crítica Regra de Ouro Banner */}
              <div className="bg-amber-955 bg-amber-950/80 border-2 border-amber-500/80 p-5 rounded-2xl text-xs text-amber-200 leading-relaxed shadow-[0_0_20px_rgba(245,158,11,0.15)] space-y-2">
                <strong className="text-amber-400 uppercase font-black block text-sm flex items-center gap-1.5">
                  🚨 REGRA RETROATIVA CRÍTICA (NUNCA ESQUECER):
                </strong>
                <p className="text-[11.5px] leading-relaxed">
                  Os exames de diferenciação (<strong className="text-white">Insulina sérica, Peptídeo C, Pró-insulina</strong> e pesquisa de urina/soro para <strong className="text-white">sulfonilureias</strong>) <strong className="text-white underline decoration-amber-400 decoration-2">DEVEM ser coletados obrigatoriamente DURANTE a vigência da hipoglicemia aguda</strong> antes da infusão de glicose hipertônica (quando glicose capilar ou sérica &lt; 55 mg/dL). Coletas com o paciente já recuperado e normoglicêmico anulam o valor do laudo médico!
                </p>
              </div>

              {/* FLUXOGRAMA DE DECISÃO INTERATIVO (SIM / NÃO) */}
              <div className="bg-slate-950/95 border-2 border-slate-800 p-6 rounded-3xl shadow-2xl relative space-y-6">
                <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <div>
                    <h3 className="text-white font-black text-sm uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#24f4e3] animate-pulse" />
                      Fluxograma Clínico de Decisão (SIM / NÃO)
                    </h3>
                    <p className="text-[10px] text-slate-400 mt-1">
                      Explore os cenários médicos reais clicando nos caminhos de decisão abaixo para ver o raciocínio final:
                    </p>
                  </div>

                  {/* Reset Flow Button */}
                  <button
                    onClick={() => {
                      setFlowchartNode("whipple_check");
                      setFlowHistory([]);
                    }}
                    className="bg-[#24f4e3]/10 hover:bg-[#24f4e3]/20 border border-[#24f4e3]/30 text-[#24f4e3] px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RefreshCw size={12} />
                    <span>Reiniciar Fluxo</span>
                  </button>
                </div>

                {/* Simulated Clinical Cases shortcuts to test knowledge */}
                <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3">
                  <span className="text-[9px] uppercase font-black text-slate-450 text-slate-400 tracking-widest block">
                    🤖 Simulações Rápidas de Casos Reais na Sala Vermelha:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {[
                      {
                        label: "Caso 1: Insulinoma Orgânico",
                        desc: "Paciente jovem com crises de jejum recorrentes.",
                        nodeTarget: "insulinoma_endogenous",
                        history: ["whipple_check", "diabetic_check", "critical_check", "sample_crisis", "peptideo_check", "sulfonilureia_check"]
                      },
                      {
                        label: "Caso 2: Ingestão Fictícia",
                        desc: "Estudante de saúde com insulina sérica recorde.",
                        nodeTarget: "exogenous_ins",
                        history: ["whipple_check", "diabetic_check", "critical_check", "sample_crisis", "peptideo_check"]
                      },
                      {
                        label: "Caso 3: Sepse Grave",
                        desc: "Idoso febril e letárgico com HGT de 35 mg/dL.",
                        nodeTarget: "secondary_hypo",
                        history: ["whipple_check", "diabetic_check", "critical_check"]
                      },
                      {
                        label: "Caso 4: Addison Induzido",
                        desc: "Paciente hipotensa com hiponatremia.",
                        nodeTarget: "non_hiper_causes",
                        history: ["whipple_check", "diabetic_check", "critical_check", "sample_crisis"]
                      }
                    ].map((caseOption, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setFlowchartNode(caseOption.nodeTarget);
                          setFlowHistory(caseOption.history);
                        }}
                        className="bg-slate-950 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 p-2.5 rounded-xl text-left cursor-pointer transition-all hover:-translate-y-0.5"
                      >
                        <strong className="text-white text-[11px] block font-extrabold">{caseOption.label}</strong>
                        <span className="text-[9.5px] text-slate-400 mt-0.5 block leading-tight">{caseOption.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* CURRENT FLOW STEP PANEL - LARGE BALLOONS */}
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-inner relative space-y-4">
                  {/* Step status and badges */}
                  <div className="flex justify-between items-center border-b border-slate-800/80 pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-black text-[#24f4e3] tracking-widest">
                        NÓ DECISIONAL ATIVO:
                      </span>
                    </div>
                    <span className={cn("text-[9px] px-2.5 py-0.5 rounded-full font-black border uppercase tracking-wider", flowchartSteps[flowchartNode].badgeBg)}>
                      {flowchartSteps[flowchartNode].badge}
                    </span>
                  </div>

                  {/* Node Question / Statement */}
                  <div className="space-y-2">
                    <h5 className="text-white font-black text-sm sm:text-base tracking-tight leading-snug">
                      {flowchartSteps[flowchartNode].title}
                    </h5>
                    <p className="text-slate-200 text-xs sm:text-sm font-bold leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-850">
                      {flowchartSteps[flowchartNode].question}
                    </p>
                  </div>

                  {/* Suggestion / Clinical pearls */}
                  <div className="text-[11px] text-slate-400 italic flex items-start gap-1.5 bg-slate-950/40 p-3 rounded-lg border border-slate-850">
                    <span className="text-indigo-400 font-extrabold block shrink-0">💡 Nota Médica:</span>
                    <span>{flowchartSteps[flowchartNode].suggestion}</span>
                  </div>

                  {/* YES / NO Action Buttons - Only if non-terminal */}
                  {flowchartSteps[flowchartNode].yesNode !== null ? (
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      {/* SIM Button (Green / High contrast) */}
                      <button
                        onClick={() => {
                          setFlowHistory([...flowHistory, flowchartNode]);
                          setFlowchartNode(flowchartSteps[flowchartNode].yesNode!);
                        }}
                        className="bg-emerald-950/95 hover:bg-emerald-900 border-2 border-emerald-500 hover:border-emerald-400 p-4 text-emerald-300 hover:text-white font-black uppercase text-xs tracking-wider rounded-xl transition-all shadow-[0_4px_12px_rgba(16,185,129,0.15)] flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                        <span>SIM</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      {/* NÃO Button (Red / High contrast) */}
                      <button
                        onClick={() => {
                          setFlowHistory([...flowHistory, flowchartNode]);
                          setFlowchartNode(flowchartSteps[flowchartNode].noNode!);
                        }}
                        className="bg-rose-955 bg-rose-950/90 hover:bg-rose-900 border-2 border-rose-500 hover:border-rose-400 p-4 text-rose-300 hover:text-white font-black uppercase text-xs tracking-wider rounded-xl transition-all shadow-[0_4px_12px_rgba(244,63,94,0.15)] flex items-center justify-center gap-2 cursor-pointer group"
                      >
                        <span className="w-2 h-2 rounded-full bg-rose-400 group-hover:scale-125 transition-transform" />
                        <span>NÃO</span>
                        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  ) : (
                    /* Terminal Block with action metrics */
                    <div className="pt-2">
                      <div className={cn(
                        "p-5 rounded-xl border-2 space-y-3",
                        flowchartSteps[flowchartNode].terminalType === "success" && "bg-emerald-950 border-emerald-500 text-slate-100",
                        flowchartSteps[flowchartNode].terminalType === "danger" && "bg-rose-950/95 border-rose-500 text-slate-100",
                        flowchartSteps[flowchartNode].terminalType === "warning" && "bg-amber-950 border-amber-500 text-slate-100",
                        flowchartSteps[flowchartNode].terminalType === "info" && "bg-slate-900 border-indigo-550 border-indigo-505 border-indigo-500 text-slate-100"
                      )}>
                        <h6 className="font-extrabold uppercase text-xs tracking-wider flex items-center gap-1.5 text-white">
                          🏁 VEREDITO CLÍNICO DO FLUXOGRAMA
                        </h6>
                        <p className="text-xs leading-relaxed text-slate-200">
                          Você atingiu um nó final. Este paciente enquadra-se no diagnóstico de base de <strong className="text-white underline decoration-2">{flowchartSteps[flowchartNode].title}</strong>.
                        </p>
                        <div className="flex gap-3 pt-2">
                          <button
                            onClick={() => {
                              setFlowchartNode("whipple_check");
                              setFlowHistory([]);
                            }}
                            className="bg-slate-950 hover:bg-slate-900 border border-slate-800 text-white font-black px-4 py-2 rounded-lg text-[10px] uppercase tracking-wider cursor-pointer"
                          >
                            Nova Investigação
                          </button>
                          {flowHistory.length > 0 && (
                            <button
                              onClick={() => {
                                const prev = flowHistory[flowHistory.length - 1];
                                setFlowchartNode(prev);
                                setFlowHistory(flowHistory.slice(0, -1));
                              }}
                              className="bg-slate-950/50 hover:bg-slate-950 border border-slate-850 text-slate-400 px-3 py-2 rounded-lg text-[10px] font-bold uppercase cursor-pointer"
                            >
                              Voltar Passo Anterior
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* History breadcrumbs to show route taken */}
                  {flowHistory.length > 0 && (
                    <div className="border-t border-slate-800/85 pt-2 flex flex-wrap items-center gap-1 text-[9px] text-slate-500">
                      <span className="font-black uppercase">Caminho Decisório:</span>
                      {flowHistory.map((hist, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <span className="bg-slate-950 px-1.5 py-0.5 rounded border border-slate-850 font-mono text-slate-400">
                            {flowchartSteps[hist].badge}
                          </span>
                          <span className="text-slate-600">»</span>
                        </div>
                      ))}
                      <span className="bg-[#24f4e3]/10 px-1.5 py-0.5 rounded border border-[#24f4e3]/30 font-bold text-[#24f4e3]">
                        {flowchartSteps[flowchartNode].badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* VISUAL DIAGRAM - ARCHITECTURAL BLUEPRINT */}
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-slate-800/80 space-y-4">
                  <span className="text-[10px] uppercase font-black text-indigo-400 tracking-wider block">
                    🗺️ Mapa Visual Fixo do Fluxograma Vivo:
                  </span>
                  
                  {/* Vertical flow map */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
                    {/* Whipple Node Map Box */}
                    <div className={cn(
                      "p-3 rounded-xl border-2 text-center flex flex-col justify-between min-h-[90px] transition-all",
                      flowchartNode === "whipple_check" ? "border-[#24f4e3] bg-slate-950 shadow-[0_0_12px_rgba(36,244,227,0.25)] text-slate-100" : "border-slate-800 bg-slate-950/60 opacity-60"
                    )}>
                      <div>
                        <strong className="text-white block font-black text-[10px] uppercase">1. Whipple Confirmado?</strong>
                        <p className="text-[9.5px] text-slate-400 mt-1 leading-tight">Mapear tríade clássica para iniciar qualquer rastreio.</p>
                      </div>
                      <div className="flex justify-around text-[9px] font-black border-t border-slate-800 mt-2 pt-1">
                        <span className="text-emerald-400">SE SIM » 2</span>
                        <span className="text-rose-400">SE NÃO » Final</span>
                      </div>
                    </div>

                    {/* Diabetes Node Map Box */}
                    <div className={cn(
                      "p-3 rounded-xl border-2 text-center flex flex-col justify-between min-h-[90px] transition-all",
                      flowchartNode === "diabetic_check" ? "border-[#24f4e3] bg-slate-950 shadow-[0_0_12px_rgba(36,244,227,0.25)] text-slate-100" : "border-slate-800 bg-slate-950/60 opacity-60"
                    )}>
                      <div>
                        <strong className="text-white block font-black text-[10px] uppercase">2. Uso de Antidiabético?</strong>
                        <p className="text-[9.5px] text-slate-400 mt-1 leading-tight">Investigar se já há tratamento de base ativo.</p>
                      </div>
                      <div className="flex justify-around text-[9px] font-black border-t border-slate-800 mt-2 pt-1">
                        <span className="text-emerald-400">SE SIM » Iatrogênia</span>
                        <span className="text-rose-400">SE NÃO » 3</span>
                      </div>
                    </div>

                    {/* Disease Node Map Box */}
                    <div className={cn(
                      "p-3 rounded-xl border-2 text-center flex flex-col justify-between min-h-[90px] transition-all",
                      flowchartNode === "critical_check" ? "border-[#24f4e3] bg-slate-950 shadow-[0_0_12px_rgba(36,244,227,0.25)] text-slate-100" : "border-slate-800 bg-slate-950/60 opacity-60"
                    )}>
                      <div>
                        <strong className="text-white block font-black text-[10px] uppercase">3. Doença Crítica Ativa?</strong>
                        <p className="text-[9.5px] text-slate-400 mt-1 leading-tight">Ex: Sepse grave, cirrose ou falência renal terminal.</p>
                      </div>
                      <div className="flex justify-around text-[9px] font-black border-t border-slate-800 mt-2 pt-1">
                        <span className="text-emerald-400">SE SIM » Secundária</span>
                        <span className="text-rose-400">SE NÃO » Coleta</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] pt-1">
                    {/* Insulina Node Map Box */}
                    <div className={cn(
                      "p-3 rounded-xl border-2 text-center flex flex-col justify-between min-h-[90px] transition-all",
                      flowchartNode === "sample_crisis" ? "border-[#24f4e3] bg-slate-950 shadow-[0_0_12px_rgba(36,244,227,0.25)] text-slate-100" : "border-slate-800 bg-slate-950/60 opacity-60"
                    )}>
                      <div>
                        <strong className="text-white block font-black text-[10px] uppercase">4. Insulina Alta na Crise?</strong>
                        <p className="text-[9.5px] text-slate-400 mt-1 leading-tight">Dosagem venosa exata da crise (limiar 3 mcUI).</p>
                      </div>
                      <div className="flex justify-around text-[9px] font-black border-t border-slate-800 mt-2 pt-1">
                        <span className="text-emerald-400">SE SIM » 5</span>
                        <span className="text-rose-400">SE NÃO » Cortisol</span>
                      </div>
                    </div>

                    {/* Peptideo C Node Map Box */}
                    <div className={cn(
                      "p-3 rounded-xl border-2 text-center flex flex-col justify-between min-h-[90px] transition-all",
                      flowchartNode === "peptideo_check" ? "border-[#24f4e3] bg-slate-950 shadow-[0_0_12px_rgba(36,244,227,0.25)] text-slate-100" : "border-slate-800 bg-slate-950/60 opacity-60"
                    )}>
                      <div>
                        <strong className="text-white block font-black text-[10px] uppercase">5. Peptídeo C Alto?</strong>
                        <p className="text-[9.5px] text-slate-400 mt-1 leading-tight">Marca o nexo de insulina natural versus exógena.</p>
                      </div>
                      <div className="flex justify-around text-[9px] font-black border-t border-slate-800 mt-2 pt-1">
                        <span className="text-emerald-400">SE SIM » 6</span>
                        <span className="text-rose-400">SE NÃO » Exógena</span>
                      </div>
                    </div>

                    {/* triagem Node Map Box */}
                    <div className={cn(
                      "p-3 rounded-xl border-2 text-center flex flex-col justify-between min-h-[90px] transition-all",
                      flowchartNode === "sulfonilureia_check" ? "border-[#24f4e3] bg-slate-950 shadow-[0_0_12px_rgba(36,244,227,0.25)] text-slate-100" : "border-slate-800 bg-slate-950/60 opacity-60"
                    )}>
                      <div>
                        <strong className="text-white block font-black text-[10px] uppercase">6. Triagem de Sulfas (+)?</strong>
                        <p className="text-[9.5px] text-slate-400 mt-1 leading-tight">Presença bioquímica de sulfonilureias no corpo.</p>
                      </div>
                      <div className="flex justify-around text-[9px] font-black border-t border-slate-800 mt-2 pt-1">
                        <span className="text-emerald-400">SE SIM » Sulfa/Glinida</span>
                        <span className="text-rose-400">SE NÃO » CLIN/Insulinoma</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TWO INTERACTIVE TOGGLE BUTTONS FOR ETIOLOGIES */}
              <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-800 pb-4 gap-4">
                  <div className="space-y-1">
                    <h4 className="text-white font-black text-sm uppercase tracking-wider flex items-center gap-1.5">
                      🔬 Classificação das Causas (Hiperinsulinêmica vs Outras)
                    </h4>
                    <p className="text-[11px] text-slate-400">
                      Use os botões de filtro clínico para fragmentar as causas fisiopatológicas das crises:
                    </p>
                  </div>

                  {/* Two Buttons Group (as tab selectors) */}
                  <div className="flex flex-wrap gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-850 shrink-0">
                    {[
                      { id: "all", label: "Todas", activeStyles: "bg-slate-900 border-slate-700 text-white" },
                      { id: "hiper", label: "Hiperinsulinêmicas", activeStyles: "bg-purple-950 border-purple-500/80 text-purple-300" },
                      { id: "naohiper", label: "Não-Hiperinsulinêmicas", activeStyles: "bg-indigo-950 border-indigo-500/80 text-indigo-300" }
                    ].map((btn) => {
                      const isActive = activeEtiologyFilter === btn.id;
                      return (
                        <button
                          key={btn.id}
                          onClick={() => setActiveEtiologyFilter(btn.id as any)}
                          className={cn(
                            "px-3 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider border-2 transition-all cursor-pointer",
                            isActive
                              ? btn.activeStyles
                              : "border-transparent text-slate-400 hover:text-slate-200"
                          )}
                        >
                          {btn.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Displaying filtered clinical lists with high-contrast banners and proper medical routes */}
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {/* Hiperinsulinêmicas Card Lists */}
                    {(activeEtiologyFilter === "all" || activeEtiologyFilter === "hiper") && (
                      <motion.div
                        key="hiper"
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-slate-950 p-5 rounded-2xl border-2 border-purple-500/50 space-y-4 shadow-lg text-slate-100"
                      >
                        <div className="flex justify-between items-center border-b border-purple-900/60 pb-2">
                          <div className="space-y-0.5">
                            <span className="text-[9px] uppercase font-black text-purple-400 tracking-wider">Categorias Hormonais</span>
                            <h5 className="text-white font-black text-sm uppercase">Causas Hiperinsulinêmicas</h5>
                          </div>
                          <span className="text-[9px] font-black uppercase text-purple-300 bg-purple-950 px-2 py-1 rounded border border-purple-800/40 font-mono">
                            Insulina Plasmática Alta (≥ 3)
                          </span>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed">
                          Associa-se à insulina circulante excessiva agindo nas células, o que bloqueia a produção endógena hepática e causa captação acelerada na periferia muscular.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
                          {/* Insulinoma */}
                          <div className="bg-slate-900 p-3.5 rounded-xl border border-purple-900/30 hover:border-purple-500/30 transition-colors">
                            <span className="text-[8.5px] text-purple-300 font-extrabold uppercase bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-900/40">Autônoma</span>
                            <strong className="text-white block font-black text-xs mt-1.5">1. Insulinoma (Tumor Beta)</strong>
                            <p className="text-slate-400 text-[10.5px] leading-relaxed mt-1">
                              Sobrecarga autônoma das ilhotas pancreáticas. <strong className="text-purple-300">Laudo:</strong> Peptídeo C alto com Triagem toxicológica de sulfonilureias negativa.
                            </p>
                          </div>

                          {/* Sulfonilureias */}
                          <div className="bg-slate-900 p-3.5 rounded-xl border border-purple-900/30 hover:border-purple-500/30 transition-colors">
                            <span className="text-[8.5px] text-purple-300 font-extrabold uppercase bg-purple-950/60 px-1.5 py-0.5 rounded border border-purple-900/40">Bloqueador K-ATP</span>
                            <strong className="text-white block font-black text-xs mt-1.5">2. Sulfonilureias / Glinidas</strong>
                            <p className="text-slate-400 text-[10.5px] leading-relaxed mt-1">
                              Drogas que fecham quimicamente os canais de K-ATP pancreáticos. <strong className="text-purple-300 text-[10px]">Laudo:</strong> Peptídeo C alto com varredura sérica positiva.
                            </p>
                          </div>

                          {/* Insulina Alvo */}
                          <div className="bg-slate-900 p-3.5 rounded-xl border-2 border-rose-500/30 hover:border-rose-500/50 transition-colors">
                            <span className="text-[8.5px] text-rose-400 font-extrabold uppercase bg-rose-950/60 px-1.5 py-0.5 rounded border border-rose-900/40 font-mono">Injetada (Exógena)</span>
                            <strong className="text-white block font-black text-xs mt-1.5">3. Administração Fictícia</strong>
                            <p className="text-slate-400 text-[10.5px] leading-relaxed mt-1">
                              Falta de Peptídeo C com insulina estratosférica na crise. Sinal de uso secreto (fraude, psiquiatria etc).
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Não-Hiperinsulinêmicas Card Lists */}
                    {(activeEtiologyFilter === "all" || activeEtiologyFilter === "naohiper") && (
                      <motion.div
                        key="naohiper"
                        layout
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-slate-950 p-5 rounded-2xl border-2 border-indigo-500/50 space-y-4 shadow-lg text-slate-100"
                      >
                        <div className="flex justify-between items-center border-b border-indigo-900/60 pb-2">
                          <div className="space-y-0.5">
                            <span className="text-[9px] uppercase font-black text-indigo-400 tracking-wider">Categorias Extras</span>
                            <h5 className="text-white font-black text-sm uppercase">Causas Não-Hiperinsulinêmicas</h5>
                          </div>
                          <span className="text-[9px] font-black uppercase text-indigo-300 bg-indigo-950 px-2 py-1 rounded border border-indigo-800/40 font-mono">
                            Insulina Suprimida (Baixa &lt; 3)
                          </span>
                        </div>

                        <p className="text-slate-300 text-xs leading-relaxed">
                          A insulina plasmática está suprimida adequadamente no sangue. Ocorre defeito por falta dos hormônios contrarreguladores de base ou falta severa de substratos básicos.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                          {/* Addison */}
                          <div className="bg-slate-900 p-3.5 rounded-xl border border-indigo-900/30 hover:border-indigo-500/30 transition-colors">
                            <span className="text-[8.5px] text-indigo-300 font-extrabold uppercase bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-900/40">Contrarregulação</span>
                            <strong className="text-white block font-black text-xs mt-1.5">1. Insuficiência Adrenal</strong>
                            <p className="text-slate-400 text-[10.5px] leading-relaxed mt-1">
                              A ausência severa do cortisol impede sinalização e co-fatores de neoglicogênese hepática.
                            </p>
                          </div>

                          {/* Cirrose */}
                          <div className="bg-slate-900 p-3.5 rounded-xl border border-indigo-900/30 hover:border-indigo-500/30 transition-colors">
                            <span className="text-[8.5px] text-indigo-300 font-extrabold uppercase bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-900/40">Falta Reserva</span>
                            <strong className="text-white block font-black text-xs mt-1.5">2. Cirrose Terminal</strong>
                            <p className="text-slate-400 text-[10.5px] leading-relaxed mt-1">
                              O parênquima hepático terminal não consegue manter ou estocar cadeias de glicogênio.
                            </p>
                          </div>

                          {/* Addison */}
                          <div className="bg-slate-900 p-3.5 rounded-xl border border-indigo-900/30 hover:border-indigo-500/30 transition-colors">
                            <span className="text-[8.5px] text-indigo-300 font-extrabold uppercase bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-900/40 font-mono">Bilateral Renal</span>
                            <strong className="text-white block font-black text-xs mt-1.5">3. Falência Renal</strong>
                            <p className="text-slate-400 text-[10.5px] leading-relaxed mt-1">
                              Redução da gliconeogênese renal (que responde por 20% do corpo) combinada a caquexia crítica.
                            </p>
                          </div>

                          {/* Addison */}
                          <div className="bg-slate-900 p-3.5 rounded-xl border-2 border-indigo-950 hover:border-[#24f4e3]/30 transition-colors">
                            <span className="text-[8.5px] text-[#24f4e3] font-black uppercase bg-[#24f4e3]/10 px-1.5 py-0.5 rounded border border-[#24f4e3]/30">Químico/Infeccioso</span>
                            <strong className="text-white block font-black text-xs mt-1.5">4. Álcool & Sepse</strong>
                            <p className="text-slate-400 text-[10.5px] leading-relaxed mt-1">
                              Inibição de NAD+ sérico por metabolização rápida de etanol e exaustão por hipermetabolismo na Sepse Grave.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
