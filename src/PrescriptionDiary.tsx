import React, { useState, useEffect } from "react";
import {
  Copy,
  Check,
  BookOpen,
  Activity,
  FileText,
  Pill,
  Droplets,
  Syringe,
  Info,
  Heart,
  Wind,
  AlertTriangle,
  Flame,
  CheckCircle2,
  Trash2,
  Search,
  Plus,
  Sliders,
  Sparkles,
} from "lucide-react";

// Cn function inline to make it self-contained
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}

type PrescriptionTab = "cad" | "ic" | "pac" | "sca" | "asma_dpoc";

interface EmergencyDrug {
  id: string;
  name: string;
  category: "Eletrólitos" | "Vasoativos" | "Cristaloides" | "Cardiológicos" | "Hormônios" | "Diuréticos";
  indication: string;
  preparation: string;
  speed: string;
  trap: string;
  color: "rose" | "amber" | "purple" | "blue" | "orange" | "cyan" | "emerald";
  calculator: (w: number) => string;
}

const EMERGENCY_DRUGS: EmergencyDrug[] = [
  {
    id: "kcl",
    name: "KCl 19,1% (Cloreto de Potássio)",
    category: "Eletrólitos",
    indication: "Hipocalemia severa (K+ < 3.0 mEq/L) ou reposição de manutenção em Cetoacidose Diabética (CAD).",
    preparation: "Adicionar 1 ampola de KCl 19.1% (10 mL = 25.6 mEq de Potássio puro) em 500 mL de Soro Fisiológico 0.9% ou Soro Glicosado 5%.",
    speed: "Infusão periférica máxima recomendada de 10 mEq/hora. Se em via central e monitorização contínua por ECG, pode-se infundir até 20 mEq/hora.",
    trap: "NUNCA injete KCl 19,1% puro por via endovenosa direta (bolus)! Ele induz fibrilação ventricular instantânea e parada cardíaca em sástole irreversível.",
    color: "rose",
    calculator: (w: number) => {
      return `SF 0.9% 500 mL + KCl 19,1% 10 mL (1 ampola) EV. Correr a 100 mL/h em Bomba de Infusão (Inibe hipocalemia severa e arritmias cardíacas).`;
    }
  },
  {
    id: "soro",
    name: "Soro Fisiológico (NaCl 0.9%)",
    category: "Cristaloides",
    indication: "Restabelecimento de volume circulante, desidratação isotônica, veículo de infusão para infusões contínuas.",
    preparation: "Solução cristalóide estéril contendo 154 mEq/L de Sódio e 154 mEq/L de Cloreto.",
    speed: "No choque hemodinâmico, infundir 30 mL/kg nas primeiras 3 horas (Expansão rápida).",
    trap: "Infusões massivas provocam acidose metabólica hiperclorêmica. Reduza o ritmo no paciente cardiopata grave (ICFER) e nefropata anúrico para evitar Edema Agudo de Pulmão.",
    color: "blue",
    calculator: (w: number) => {
      const vol = w * 30;
      return `NaCl 0.9% ${vol} mL EV. Correr em bolus rápido nas primeiras 2-3 horas sob estrita vigilância de ausculta pulmonar (Prevenção de congestão).`;
    }
  },
  {
    id: "adrenalina",
    name: "Adrenalina (Epinefrina)",
    category: "Vasoativos",
    indication: "Parada Cardiorrespiratória (reversão de assistolia/FV/TVSP), Choque Anafilático agudo, e suporte inotrópico extremo.",
    preparation: "PCR: Ampola pura (1 mg/mL). Anafilaxia: 0.3-0.5 mg Intramuscular no vasto lateral coxa. Bic de Choque: SG 5% 245 mL + Adrenalina 5 ampolas (5mg) [20 mcg/mL].",
    speed: "PCR: 1mg EV bolus direto de 3/3 minutos. Choque BIC: Iniciar a 0.05 a 0.1 mcg/kg/min (titular rapidamente de acordo com a meta de PAM).",
    trap: "Evitar injeção em eixos arteriais terminais (dedos, pênis, pavilhão auricular) devido ao risco de isquemia crônica e amputação tecidual.",
    color: "amber",
    calculator: (w: number) => {
      const doseMin = 0.1; // mcg/kg/min
      const flow = ((doseMin * w * 60) / 20).toFixed(1);
      return `SG 5% 245 mL + Adrenalina 5 mg (5 ampolas) EV central. Iniciar taxa de ${flow} mL/h em Bomba de Infusão (Calculado para a dose de 0.1 mcg/kg/min).`;
    }
  },
  {
    id: "noradrenalina",
    name: "Noradrenalina (Norepinefrina)",
    category: "Vasoativos",
    indication: "Choque séptico, neurogênico ou cardiogênico com hipotensão severa refratária a volume.",
    preparation: "Diluição Padrão Central: Soro Glicosado 5% 234 mL + Noradrenalina 4 ampolas (16 mg = 16 mL). Concentração: 64 mcg/mL.",
    speed: "Dose inicial de 0.05 a 0.1 mcg/kg/min. Titular a cada 5-10 minutos buscando manter PAM >= 65 mmHg.",
    trap: "Risco brutal de necrose tecidual se houver extravasamento periférico extravascular. Priorize o acesso venoso central e migre a veia o quanto antes.",
    color: "purple",
    calculator: (w: number) => {
      const doseMin = 0.1; // mcg/kg/min
      const flow = ((doseMin * w * 60) / 64).toFixed(1);
      return `SG 5% 234 mL + Noradrenalina 16 mg (4 ampolas) EV em via de Acesso Venoso Central. Iniciar a ${flow} mL/h em BIC (Dose de 0.1 mcg/kg/min).`;
    }
  },
  {
    id: "insulina",
    name: "Insulina Regular",
    category: "Hormônios",
    indication: "Controle da cetogênese e hiperglicemia severa em Cetoacidose (CAD) ou Estado Hiperosmolar.",
    preparation: "Unidade de Bomba: Soro Fisiológico 0.9% 99 mL + Insulina Regular 100 UI. Concentração final: 1 UI por mL.",
    speed: "Infundir via BIC a 0.1 UI/kg/h. Ajustar para queda glicêmica de 50 a 70 mg/dL por hora.",
    trap: "Não desligar ou zerar a bomba se a glicemia cair abaixo de 250 mg/dL! Acople Soro Glicosado paralelo para manter o motor ativo até reverter a acidose.",
    color: "orange",
    calculator: (w: number) => {
      const dose = (w * 0.1).toFixed(1);
      return `SF 0.9% 99 mL + Insulina Regular 100 UI. Infundir a ${dose} mL/h EV contínuo (${dose} UI por hora). Monitorar glicemia de hora em hora.`;
    }
  },
  {
    id: "amiodarona",
    name: "Amiodarona (Ancoron)",
    category: "Cardiológicos",
    indication: "Taquiarritmias com comprometimento, Fibrilação Ventricular em PCR, reversão de Taquicardia Supraventricular em FA persistente.",
    preparation: "PCR (FV/TVSP): 300 mg bolus diluído em 20 mL de SG 5%. Manutenção BIC: Soro Glicosado 5% 250 mL + Amiodarona 6 ampolas (900 mg).",
    speed: "PCR: Dose bolus único, seguida de dose de reforço (150 mg). Manutenção: infundir em 24h em bomba (1 mg/min nas primeiras 6h).",
    trap: "Amiodarona é ABSOLUTAMENTE INCOMPATÍVEL com Soro Fisiológico (SF 0.9%). Ela precipita e cristaliza no circuito. Infunda apenas em Soro Glicosado 5%!",
    color: "cyan",
    calculator: (w: number) => {
      return `SG 5% 250 mL + Amiodarona 900 mg (6 ampolas) EV central. Iniciar a 11 mL/h em BIC (Infusão de 24h para controle arrítmico de manutenção).`;
    }
  },
  {
    id: "furosemida",
    name: "Furosemida (Lasix)",
    category: "Diuréticos",
    indication: "Congestão circulatória pulmonar ou sistêmica aguda, hipervolemia crônica exacerbada na IC Descompensada.",
    preparation: "Ampolas regulares prontas de 20 mg / 2 mL para administração endovenosa direta.",
    speed: "Dose em bolus conforme a resposta. Almejar resposta diurética intensa no período de 2 a 6 horas pós-aplicação.",
    trap: "Promove hipocalemia importante por espoliação urinária e alcalose metabólica contracional. Reponha potássio se K+ cair abaixo de 4.0 nos exames diários.",
    color: "blue",
    calculator: (w: number) => {
      return `Furosemida 20 mg (1 ampola) EV direto em bolus. Administrar a cada 8-12h dependendo do debito urinário espontâneo e balanço hídrico.`;
    }
  },
  {
    id: "soroglicosado",
    name: "Soro Glicosado (SG 5% ou SG 10%)",
    category: "Cristaloides",
    indication: "Manutenção do aporte de glicose para evitar hipoglicemia e suprimir a cetogênese no fígado na Cetoacidose Diabética (CAD) quando a glicemia capilar cair abaixo de 250 mg/dL.",
    preparation: "Utilizar SG 5% pronto ou produzir SG 10% de 500 mL (retirar 50 mL de SG 5% e injetar 50 mL de Glicose Hipertônica 50%).",
    speed: "Ajustar vazão para infusão contínua de 10 a 15g de Glicose pura/hora (SG 5% a 200-300 mL/h ou SG 10% a 100-150 mL/h).",
    trap: "NUNCA infundir na fase inicial ou se glicemia > 250 mg/dL, sob risco de exacerbar diurese osmótica, desidratação profunda e desequilíbrio eletrolítico.",
    color: "emerald",
    calculator: (w: number) => {
      return `Soro Glicosado 10% 500 mL [SG 5% 450 mL + Glicose 50% 50 mL] EV. Infundir a 125 mL/h para fornecer 12.5g de glicose contínua por hora.`;
    }
  }
];

const REQUISITE_SEQUENCE = [
  {
    step: 1,
    id: "kcl",
    title: "1. KCl 19,1% (Cloreto de Potássio)",
    purpose: "Reposição prioritária. Manter K+ > 3.3 mEq/L antes de iniciar a insulina.",
    bg: "bg-rose-950/80 border-rose-900/50 hover:bg-rose-950/90 text-rose-200",
    activeBg: "bg-rose-900/60 border-rose-500 text-white ring-1 ring-rose-500/80 shadow-[0_0_12px_rgba(244,63,94,0.3)]",
    badge: "Eletrólito",
    badgeBg: "bg-rose-900 text-rose-300 font-extrabold"
  },
  {
    step: 2,
    id: "soro",
    title: "2. Soro Fisiológico (NaCl 0.9%)",
    purpose: "Expansão volumétrica de choque e restauração do volume extracelular.",
    bg: "bg-blue-950/80 border-blue-900/50 hover:bg-blue-950/90 text-blue-200",
    activeBg: "bg-blue-900/60 border-blue-500 text-white ring-1 ring-blue-500/80 shadow-[0_0_12px_rgba(59,130,246,0.3)]",
    badge: "Cristalóide",
    badgeBg: "bg-blue-900 text-blue-300 font-extrabold"
  },
  {
    step: 3,
    id: "noradrenalina",
    title: "3. Droga Vasoativa (Noradrenalina)",
    purpose: "Controle de PAM >= 65 mmHg se houver hipotensão refratária persistente.",
    bg: "bg-purple-950/80 border-purple-900/50 hover:bg-purple-950/90 text-purple-200",
    activeBg: "bg-purple-900/60 border-purple-500 text-white ring-1 ring-purple-500/80 shadow-[0_0_12px_rgba(168,85,247,0.3)]",
    badge: "Vasoativos",
    badgeBg: "bg-purple-900 text-purple-300 font-extrabold"
  },
  {
    step: 4,
    id: "insulina",
    title: "4. Insulina Regular (BIC)",
    purpose: "Bloqueio primário da cetogênese no fígado. Ativação do transporte de glicose.",
    bg: "bg-orange-950/80 border-orange-900/50 hover:bg-orange-950/90 text-orange-200",
    activeBg: "bg-orange-900/60 border-orange-500 text-white ring-1 ring-orange-500/80 shadow-[0_0_12px_rgba(249,115,22,0.3)]",
    badge: "Hormônios",
    badgeBg: "bg-orange-900 text-orange-300 font-extrabold"
  },
  {
    step: 5,
    id: "soroglicosado",
    title: "5. Soro Glicosado 5%",
    purpose: "Preparo paralelo quando a glicose cai < 250 mg/dL para segurar a bomba de insulina.",
    bg: "bg-emerald-950/80 border-emerald-900/50 hover:bg-emerald-950/90 text-emerald-200",
    activeBg: "bg-emerald-900/60 border-emerald-500 text-white ring-1 ring-emerald-500/80 shadow-[0_0_12px_rgba(16,185,129,0.3)]",
    badge: "Cristalóide",
    badgeBg: "bg-emerald-900 text-emerald-300 font-extrabold"
  }
];

interface PrescriptionDiaryProps {
  activeDrugId?: string;
  setActiveDrugId?: (id: string) => void;
}

export default function PrescriptionDiary({ activeDrugId, setActiveDrugId }: PrescriptionDiaryProps = {}) {
  const [activeTab, setActiveTab] = useState<PrescriptionTab>("cad");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // General calculator states
  const [weight, setWeight] = useState<number>(70);
  const [copiedText, setCopiedText] = useState<boolean>(false);

  // DKA states
  const [dkaGlycemia, setDkaGlycemia] = useState<number>(310);
  const [dkaK, setDkaK] = useState<number>(4.2);
  const [dkaHydrationVol, setDkaHydrationVol] = useState<number>(1000);

  // ICC states
  const [iccProfile, setIccProfile] = useState<"B" | "C">("B");
  const [iccHomeFurosemide, setIccHomeFurosemide] = useState<number>(40); // mg/dia oral
  const [dobutamineDose, setDobutamineDose] = useState<number>(5); // mcg/kg/min

  // PAC states
  const [hasConfusion, setHasConfusion] = useState<boolean>(false);
  const [hasUrea, setHasUrea] = useState<boolean>(false);
  const [hasRespRate, setHasRespRate] = useState<boolean>(false);
  const [hasLowBp, setHasLowBp] = useState<boolean>(false);
  const [isAge65, setIsAge65] = useState<boolean>(false);

  // SCA states
  const [scaAge, setScaAge] = useState<number>(68);
  const [scaCreatinine, setScaCreatinine] = useState<number>(1.2);
  const [scaGender, setScaGender] = useState<"M" | "F">("M");
  const [isFibrinolysisScheduled, setIsFibrinolysisScheduled] =
    useState<boolean>(false);

  // Asma/DPOC states
  const [isDpoc, setIsDpoc] = useState<boolean>(false);
  const [isSevereExacerbation, setIsSevereExacerbation] =
    useState<boolean>(true);

  // Clickable medicine explanation states
  const [expandedExplanation, setExpandedExplanation] = useState<string | null>(
    null,
  );

  // States for the second column (fármacos)
  const [selectedDrugId, setSelectedDrugId] = useState<string>("kcl");
  const [drugSearchTerm, setDrugSearchTerm] = useState<string>("");
  const [activeDrugTab, setActiveDrugTab] = useState<"mecanismo" | "diluicao" | "armadilha" | "calculo">("diluicao");

  // Fine-tuned states for interactive drug calculator panel
  const [noradDose, setNoradDose] = useState<number>(0.1); // mcg/kg/min
  const [noradConcentration, setNoradConcentration] = useState<"standard" | "concentrated">("standard");
  const [kclRate, setKclRate] = useState<number>(10); // mEq/h
  const [kclConcentration, setKclConcentration] = useState<"standard" | "concentrated">("standard");
  const [sfVolumeFactor, setSfVolumeFactor] = useState<number>(30); // mL/kg
  const [sfHoursToRun, setSfHoursToRun] = useState<number>(3); // hours
  const [insulinaDose, setInsulinaDose] = useState<number>(0.1); // UI/kg/h
  const [dkaInsulinGlycemia, setDkaInsulinGlycemia] = useState<number>(310);
  const [sgRate, setSgRate] = useState<number>(125); // mL/h
  const [sgGlucoseTarget, setSgGlucoseTarget] = useState<number>(12.5); // g/h
  const [sgConcentration, setSgConcentration] = useState<"sg5" | "sg10">("sg5");

  // Keep selectedDrugId in sync when activeDrugId changes from parent sidebar
  useEffect(() => {
    if (activeDrugId && ["kcl", "soro", "noradrenalina", "insulina", "soroglicosado"].includes(activeDrugId)) {
      setSelectedDrugId(activeDrugId);
    }
  }, [activeDrugId]);

  const selectDrugAndSync = (drugId: string) => {
    setSelectedDrugId(drugId);
    if (setActiveDrugId) {
      setActiveDrugId(drugId);
    }
  };

  // Copy to clipboard helper
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // PAC - Calculate CURB-65
  const curbScore =
    (hasConfusion ? 1 : 0) +
    (hasUrea ? 1 : 0) +
    (hasRespRate ? 1 : 0) +
    (hasLowBp ? 1 : 0) +
    (isAge65 ? 1 : 0);

  const getCurbRecommendation = () => {
    if (curbScore <= 1) {
      return {
        risk: "Baixo Risco (Mortalidade < 2%)",
        treatment: "Tratamento Ambulatorial (Domiciliar)",
        scheme:
          "Amoxicilina 500mg VO de 8/8h por 5-7 dias OU Azitromicina 500mg VO 1x/dia por 5 dias.",
        badgeColor: "bg-emerald-950 border-emerald-700 text-emerald-300",
      };
    } else if (curbScore === 2) {
      return {
        risk: "Risco Moderado (Mortalidade ~ 9%)",
        treatment: "Considerar Internação Hospitalar (Enfermaria)",
        scheme:
          "Ceftriaxone 1g a 2g EV de 24/24h + Claritromicina 500mg VO de 12/12h por 7 a 10 dias.",
        badgeColor: "bg-amber-950 border-amber-700 text-amber-300",
      };
    } else {
      return {
        risk: "Alto Risco (Mortalidade > 15-22%)",
        treatment: "Internação de Urgência (Avaliar UTI se CURB >= 3)",
        scheme:
          "Ceftriaxone 2g EV de 24/24h + Claritromicina 500mg EV de 12/12h (Alternativa: Levofloxacino 750mg EV 24/24h) por 10 dias.",
        badgeColor: "bg-rose-950 border-rose-700 text-rose-300",
      };
    }
  };

  // SCA - Cockcroft-gault ClCr calculation
  const calculatedClCr = (() => {
    const ageFactor = 140 - scaAge;
    const weightFactor = weight;
    const creatFactor = 72 * scaCreatinine;
    if (creatFactor === 0) return 100;
    let base = (ageFactor * weightFactor) / creatFactor;
    if (scaGender === "F") base *= 0.85;
    return Math.round(base);
  })();

  // Calculators logic generating dynamic prescription strings
  const getDkaPrescription = () => {
    const insulinDoseHr = (weight * 0.1).toFixed(1);
    const insulinVelocity = (weight * 0.1).toFixed(0); // Standard 100UI/100mL = 1 mL/h per UI/h
    const needsSg = dkaGlycemia < 250;
    const potassiumStrategyText =
      dkaK < 3.3
        ? "⚠️ CRÍTICO: K+ < 3.3. REPOR KCl 19.1% e ADIAR início da bomba de insulina até K+ > 3.3 mEq/L."
        : dkaK >= 3.3 && dkaK <= 5.2
          ? `✔ KCl 19,1% (10 mL) - Adicionar 1 ampola por litro de Soro. Infundir junto com Hidratação de manutenção para manter K+ entre 4.0-5.0.`
          : "✔ K+ > 5.2. Não adicionar potássio no momento. Monitorar eletrólitos de 2/2h.";

    const volume1stHour = dkaHydrationVol;

    return `// PRESCRIÇÃO DYNAMIC DE CETOACIDOSE DIABÉTICA (PESO: ${weight}kg)
1. Hidratação Venosa de Expansão (1ª hora):
   - Soro Fisiológico (NaCl 0,9%) 1000 mL EV para correr em 60 minutos (Vazão: 1000 mL/h).
   
2. Insulina Regular - Bomba de Infusão Contínua (BIC):
   ${
     dkaK < 3.3
       ? "- ADIADA (K+ < 3.3 mEq/L) - Iniciar reposição de potássio prioritária!"
       : `- Soro Fisiológico 0,9% 99 mL + Insulina Regular 100 UI.
   - Administrar via BIC a ${insulinVelocity} mL/h (${insulinDoseHr} UI/hour contínuo).
   - Meta: Queda de glicemia capilar de 50 a 70 mg/dL por hora.`
   }

3. Soro de Manutenção / Soro Glicosado (Glicose < 250 mg/dL):
   ${
     needsSg
       ? `- Glicose capilar está em ${dkaGlycemia} mg/dL (< 250 mg/dL).
   - Soro Glicosado 5% 500 mL + Soro Fisiológico 0,9% 500 mL EV.
   - Infundir a 150 mL/h para evitar hipoglicemia e manter bomba ligada.`
       : `- Glicose capilar em ${dkaGlycemia} mg/dL (>= 250 mg/dL). 
   - Manter Soro Fisiológico 0,9% puro a 250 mL/h.`
   }

4. Reposição de Potássio (K+ Sérico: ${dkaK} mEq/L):
   - ${potassiumStrategyText}
   - Monitorar Gasometria Arterial, Glicemia Capilar e Eletrólitos de 2 em 2 horas.`;
  };

  const getIccPrescription = () => {
    const recommendedFuroDose =
      iccHomeFurosemide > 0 ? iccHomeFurosemide * 1.5 : 40;
    const furoAmpoules = Math.ceil(recommendedFuroDose / 20); // 20mg per ampoule
    const dobInflowRate = ((dobutamineDose * weight * 60) / 1000).toFixed(1); // standard dilution: 250mg in 250ml = 1000 mcg/ml

    let profileText = "";
    if (iccProfile === "B") {
      profileText = `1. Furosemida EV (Perfil B - Quente e Congesto):
   - Furosemida 20mg/2mL: Administrar ${furoAmpoules} ampolas (${furoAmpoules * 20} mg) EV em bolus agora.
   
2. Vasodilatador Opcional (Nitroglicerina Tridil se hipertensão/dor):
   - Soro Glicosado 5% 240 mL + Nitroglicerina (Tridil) 50mg/10mL (1 ampola).
   - Iniciar a 5 mL/h EV em BIC. Reajustar conforme PAM.`;
    } else {
      profileText = `1. Inotrópico de Suporte (Perfil C - Frio e Congesto):
   - Soro Fisiológico 0,9% 230 mL + Dobutamina 250mg/20mL (1 ampola) - Concentração: 1.000 mcg/mL.
   - Infundir via BIC a ${dobInflowRate} mL/h (${dobutamineDose} mcg/kg/min).
   
2. Furosemida EV (Manter dose otimizada e cautelosa):
   - Furosemida 20mg/2mL: Administrar ${Math.max(1, Math.floor(furoAmpoules / 2))} ampolas (${Math.max(1, Math.floor(furoAmpoules / 2)) * 20} mg) EV em bolus. Monitorar débito urinário e PA.`;
    }

    return `// PRESCRIÇÃO DYNAMIC DE INSUFICIÊNCIA CARDÍACA DESCOMPENSADA (PESO: ${weight}kg)
${profileText}

3. Medidas Gerais de Suporte:
   - Oxigênio sob cateter nasal se SatO2 < 90% (Alvo 92-95%).
   - Restrição hídrica rigorosa (Balanço Hídrico acumulado de 24h negativo).
   - Monitorar Peso Diário, Função Renal (Ureia e Creatinina) e Saturação de O2.`;
  };

  const getPacPrescription = () => {
    const curbRec = getCurbRecommendation();
    return `// PRESCRIÇÃO DYNAMIC DE PNEUMONIA ADQUIRIDA NA COMUNIDADE (SCORE CURB-65: ${curbScore})
// Classificação: ${curbRec.risk} - ${curbRec.treatment}

1. Esquema Antibiótico Sugerido:
   - ${curbRec.scheme}
   
2. Suporte Respiratório & Sintomáticos:
   - Dipirona 1g EV de 6/6h se Febre ou Dor (se T > 37.8°C).
   - Nebulização com Soro Fisiológico 0.9% 5 mL de 6/6h para higiene bronquial.
   - Monitorar Saturação de Oxigênio (Sinal de Alerta se < 90% ou respiração > 24 ipm).
   
3. Sinais de Alerta para Retorno (Se Alta Ambulatorial):
   - Confusão mental progressiva, febre persistente por mais de 72h, cansaço extremo ou dispneia incapacitante.`;
  };

  const getScaPrescription = () => {
    const isElderlyOrRenal = scaAge >= 75 || calculatedClCr < 30;

    // Enoxaparina doses:
    // If ClCr < 30: 1mg/kg 24/24h.
    // If age >= 75 + STEMI: no IV bolus, 0.75mg/kg 12/12h
    // Else standard: 1mg/kg 12/12h + 30mg IV bolus if STEMI
    let enoxaparinDoseText = "";
    if (calculatedClCr < 30) {
      enoxaparinDoseText = `Enoxaparina 1 mg/kg SC 24/24h (Dose calculada para ClCr < 30 mL/min: ${weight} mg SC uma vez ao dia).`;
    } else if (scaAge >= 75) {
      enoxaparinDoseText = `Enoxaparina 0.75 mg/kg SC 12/12h (Dose reduzida para idoso >= 75 anos: ${Math.round(weight * 0.75)} mg SC de 12/12h). Sem bolus IV.`;
    } else {
      enoxaparinDoseText = `Enoxaparina 1 mg/kg SC 12/12h (Dose padrão: ${weight} mg SC de 12/12h) + Bolus inicial de 30mg IV se for infarto com supra (STEMI).`;
    }

    // P2Y12 Inhibitor
    let p2y12Choice = "Dupla Antiagregação Plaquetária (DAPT):";
    if (isFibrinolysisScheduled) {
      p2y12Choice += `\n   - Clopidogrel 75mg: Ataque de 300mg VO mastigável (Dose reduzida para Clopidogrel se Fibrinólise no idoso >= 75 anos: 75mg sem dose de ataque se idade >= 75: ${scaAge >= 75 ? "Prescrever 75mg direto" : "Ataque de 300mg"} VO).`;
    } else {
      p2y12Choice += `\n   - Ticagrelor 90mg: Ataque de 180mg VO imediato (Manutenção: 90mg VO de 12/12h) OU Clopidogrel 75mg: Ataque de 600mg VO se ICP de urgência.`;
    }

    return `// PRESCRIÇÃO DYNAMIC DE SÍNDROME CORONARIANA AGUDA
// Perfil do Paciente: Idade: ${scaAge} anos | ClCr Estimado: ${calculatedClCr} mL/min (${scaGender})

1. Antiagregação Plaquetária Inicial:
   - Ácido Acetilsalicílico (AAS) 100mg - Mastigar 3 comprimidos (300mg ataque) agora.
   - ${p2y12Choice}

2. Anticoagulação Sistêmica:
   - ${enoxaparinDoseText}

3. Terapia Estabilizadora de Placa e Suplementar:
   - Atorvastatina 80 mg VO de imediato.
   - Nitroglicerina Sublingual 5mg se dor torácica persistente e PAS > 100 mmHg.
   - Monitoramento contínuo em UTI coronariana por 24-48 horas.`;
  };

  const getAsmaDpocPrescription = () => {
    const corticoidDose = isSevereExacerbation
      ? "Metilprednisolona 40mg EV de 12/12h (ou Hidrocortisona 100mg EV de 8/8h)"
      : "Prednisona 40mg VO 1x ao dia por 5 dias";
    const oxygenTarget = isDpoc
      ? "88% a 92% (alvo restrito para DPOC evitando hipercapnia)"
      : "93% a 95% (alvo padrão Asma)";

    return `// PRESCRIÇÃO DYNAMIC DE EXACERBAÇÃO DE ${isDpoc ? "DPOC" : "ASMA"} (PESO: ${weight}kg)
1. Terapia Inalatória de Alívio (Crise):
   - Soro Fisiológico (NaCl 0.9%) 5 mL + Fenoterol (Berotec) 10 gotas + Brometo de Ipratrópio (Atrovent) 20 gotas.
   - Realizar inalação a cada 20 minutos na primeira hora, depois de 4/4h ou de 6/6h conforme resposta clínica.
   
2. Corticoterapia Sistêmica (Resolução do Espasmo/Inflamação):
   - ${corticoidDose}.
   
3. Oxigenoterapia Suplementar:
   - Administrar O2 sob cateter nasal se necessário.
   - Meta Saturação de O2: ${oxygenTarget}.
   
${
  isDpoc
    ? `4. Antibioticoterapia (Indicada no DPOC se escarro purulento + dispneia/volume):
   - Amoxicilina + Clavulanato 875/125mg VO de 12/12h por 5-7 dias (ou Azitromicina 500mg VO 1x/dia por 5 dias).`
    : "4. Monitorar Pico de Fluxo Expiratório (Peak Flow) ou espirometria clínica de beira de leito."
}`;
  };

  // Safe texts dictionary for interactive clicking explanation
  const medicineDetails: Record<
    string,
    {
      label: string;
      indication: string;
      formula: string;
      trap: string;
      color: string;
    }
  > = {
    insulin: {
      label: "Insulina Regular (Bomba BIC)",
      indication:
        "Inibe a lipólise periférica e interrompe a formação de corpos cetônicos no fígado. Restaura o metabolismo periférico da glicose nas células.",
      formula:
        "Insulina Regular 100 UI + NaCl 0,9% 99 mL (Total: 100 mL, concentração 1 UI/mL). Dose usual de 0.1 UI/kg/hora.",
      trap: "NUNCA desligue a bomba de insulina apenas porque a glicemia capilar normalizou ou caiu abaixo de 250. Adicione Soro Glicosado no equipo paralelo e mantenha a bomba ligada até sanar o Anion Gap e alcalinizar o sangue (pH > 7.30 e HCO3 > 15)!",
      color: "border-orange-500/50 bg-orange-950/20 text-orange-200",
    },
    kcl: {
      label: "Reposição de Potássio (KCl 19,1%)",
      indication:
        "A insulina empurra o potássio para dentro da célula, causando hipocalemia severa e arritmias malignas. Essencial para manutenção da estabilidade cardíaca.",
      formula:
        " KCl 19,1% (contém 2.56 mEq/mL de potássio puro). Diluir 1 ampola (10mL) a 2 ampolas no soro de infusão.",
      trap: "Se o Potássio sérico (K+) for menor que 3.3 mEq/L, NÃO inicie a insulina de forma alguma! Corrija primeiro o potássio, do contrário haverá risco iminente de parada cardíaca por extrassístoles e fibrilação ventricular.",
      color: "border-rose-500/50 bg-rose-950/20 text-rose-200",
    },
    furosemida: {
      label: "Furosemida Venosa",
      indication:
        "Bloqueia o transportador Na-K-2Cl na alça de Henle. Reduz volemia e promove diurese maciça, aliviando a congestão sistêmica e pulmonar no perfil B de IC.",
      formula:
        "Furosemida 20mg/2mL por ampola. A dose venosa inicial recomendada deve ser 1 a 2.5 vezes superior à dose diária oral usual do paciente.",
      trap: "Não prescreva doses fixas baixas para pacientes que já usam altas doses de diurético em casa, pois eles desenvolveram resistência de alça. Dobre a dose prévia!",
      color: "border-blue-500/50 bg-blue-950/20 text-blue-200",
    },
    dobutamina: {
      label: "Dobutamina (Inotrópico)",
      indication:
        "Agonista beta-1 adrenérgico sintético forte. Aumenta a força de contração do miocárdio (inotropismo) e o débito cardíaco total no Perfil C.",
      formula:
        "Dobutamina 250mg/20mL (1 ampola) + NaCl 0,9% 230mL. Infundir em BIC a 2 a 20 mcg/kg/min.",
      trap: "Evitar em pacientes infartados graves ou arritmogênicos extremos, pois a dobutamina consome muito oxigênio miocárdico e pode desencadear taquicardia ventricular.",
      color: "border-purple-500/50 bg-purple-950/20 text-purple-200",
    },
    ceftriaxone: {
      label: "Ceftriaxone (Cefalosporina 3ª)",
      indication:
        "Inibição de síntese de parede bacteriana. Altamente eficaz contra Streptococcus pneumoniae, Haemophilus, e Gram-negativos na pneumonia comunitária.",
      formula:
        "Ceftriaxone 1g ou 2g EV uma vez ao dia (Diluir em 100 mL de Soro Fisiológico para infundir em 30 minutos).",
      trap: "Não prescrever isoladamente na pneumonia comunitária típica/atípica; sempre associe macrolídeos (Claritromicina/Azitromicina) para cobrir germes atípicos como Mycoplasma p.",
      color: "border-emerald-500/50 bg-emerald-950/20 text-emerald-200",
    },
    enoxaparina: {
      label: "Enoxaparina (Clexane)",
      indication:
        "Anticoagulante de baixo peso molecular que inibe preferencialmente o Fator Xa da cascata de coagulação, prevenindo progressão da trombose coronária.",
      formula:
        "Apresenta-se em seringas prontas. Dose terapêutica usual: 1 mg/kg por via subcutânea de 12 em 12 horas.",
      trap: "Sempre ajuste para 1 mg/kg a cada 24 horas se o clearance de creatinina (ClCr) for menor que 30 mL/min! Em idosos acima de 75 anos com infarto agudo com supra (STEMI), a dose é de 0.75 mg/kg de 12/12h sem bolus endovenoso.",
      color: "border-amber-500/50 bg-amber-950/20 text-amber-200",
    },
  };

  const isDrugMode = activeDrugId && activeDrugId !== "prescricoes";

  if (isDrugMode) {
    const activeDrug = EMERGENCY_DRUGS.find(d => d.id === activeDrugId) || EMERGENCY_DRUGS[0];
    
    // Dynamic calculations depending on chosen drug
    let flowRateMlh = 0;
    let prescriptionLine = "";
    
    if (activeDrug.id === "kcl") {
      const vol = kclConcentration === "standard" ? 510 : 270;
      const totalK = kclConcentration === "standard" ? 25.6 : 51.2;
      flowRateMlh = Math.round((kclRate / totalK) * vol);
      prescriptionLine = kclConcentration === "standard"
        ? `Soro Fisiológico 0.9% 500 mL + KCl 19.1% 10 mL (1 ampola) EV. Correr a ${flowRateMlh} mL/h em Bomba de Infusão Contínua (Taxa de Potássio programada para: ${kclRate} mEq/h).`
        : `Soro Fisiológico 0.9% 250 mL + KCl 19.1% 20 mL (2 ampolas) EV. Correr a ${flowRateMlh} mL/h em Bomba de Infusão Contínua por ACESSO VENOSO CENTRAL (Restrição de volume. Taxa de Potássio programada para: ${kclRate} mEq/h).`;
    } else if (activeDrug.id === "soro") {
      const totVol = weight * sfVolumeFactor;
      flowRateMlh = Math.round(totVol / sfHoursToRun);
      prescriptionLine = `Soro Fisiológico 0.9% ${totVol} mL EV. Infundir em Bomba de Infusão à vazão calibrada de ${flowRateMlh} mL/h para correr em ${sfHoursToRun} horas (Ajuste por peso do paciente: ${sfVolumeFactor} mL/kg).`;
    } else if (activeDrug.id === "noradrenalina") {
      const conc = noradConcentration === "standard" ? 64 : 128;
      flowRateMlh = Math.round((noradDose * weight * 60) / conc);
      prescriptionLine = noradConcentration === "standard"
        ? `Soro Glicosado 5% 234 mL + Noradrenalina 4 ampolas (16 mL, Concentração final: 64 mcg/mL) EV. Infundir em Bomba de Infusão à vazão contínua de ${flowRateMlh} mL/h (Dose programada: ${noradDose} mcg/kg/min em via central de infusão).`
        : `Soro Glicosado 5% 218 mL + Noradrenalina 8 ampolas (32 mL, Concentração final: 128 mcg/mL) EV. Infundir em Bomba de Infusão à vazão contínua de ${flowRateMlh} mL/h (Dose concentrada: ${noradDose} mcg/kg/min para restrição hídrica severa via Acesso Central).`;
    } else if (activeDrug.id === "insulina") {
      flowRateMlh = Math.round(insulinaDose * weight * 10) / 10;
      prescriptionLine = `Soro Fisiológico 0.9% 100 mL + Insulina Regular 100 UI EV. Infundir em Bomba de Infusão contínua com vazão de ${flowRateMlh.toFixed(1)} mL/h contínuo (Taxa programada de ${insulinaDose} UI/kg/h em bomba acoplada paralela).`;
    } else if (activeDrug.id === "soroglicosado") {
      const isSG10 = sgConcentration === "sg10";
      flowRateMlh = Math.round(isSG10 ? sgGlucoseTarget * 10 : sgGlucoseTarget * 20);
      prescriptionLine = isSG10
        ? `Soro Glicosado 10% 500 mL [Preparo de Transformação: SG 5% 450 mL + Glicose 50% 50 mL (5 ampolas de 10 mL ou 2,5 ampolas de 20 mL)] EV. Infundir em Bomba de Infusão contínua com vazão de ${flowRateMlh} mL/h (Aporte contínuo programado para entregar: ${sgGlucoseTarget} g de Glicose/hora).`
        : `Soro Glicosado 5% 500 mL EV. Infundir em Bomba de Infusão contínua com vazão de ${flowRateMlh} mL/h (Aporte contínuo programado para entregar: ${sgGlucoseTarget} g de Glicose/hora).`;
    }

    return (
      <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-4 animate-in fade-in duration-500">
        {/* Clean, Simple Header with Back Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
              Calculadora de Medicamento de Alta Vigilância
            </span>
            <h2 className="text-white font-black text-lg flex items-center gap-2 mt-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              {activeDrug.name}
            </h2>
          </div>
          <button
            onClick={() => {
              if (setActiveDrugId) setActiveDrugId("prescricoes");
            }}
            className="text-xs bg-brand-blue/15 text-brand-blue hover:bg-brand-blue/30 border border-brand-blue/40 px-3.5 py-1.5 rounded-xl font-bold uppercase tracking-wider cursor-pointer transition-all flex items-center gap-1.5"
          >
            <FileText size={12} /> Retornar às Prescrições
          </button>
        </div>

        {/* Dynamic Dual split Bento block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT BENTO BLOCK: CALCULATION CONFIGURATION KNOBS */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            
            {/* WEIGHT CARD */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Identidade Fisiológica</span>
                  <h4 className="text-white font-extrabold text-sm flex items-center gap-1.5">
                    <Activity size={14} className="text-brand-blue" />
                    Peso do Paciente
                  </h4>
                </div>
                <div className="bg-slate-950 border border-slate-850 py-1.5 px-3.5 rounded-xl font-mono text-emerald-400 font-black text-sm shadow-inner">
                  {weight} kg
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-[10px] text-slate-500 font-bold font-mono">40 kg</span>
                <input
                  type="range"
                  min="40"
                  max="150"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="flex-1 accent-brand-blue bg-slate-950 h-2 rounded-lg cursor-pointer animate-none"
                />
                <span className="text-[10px] text-slate-500 font-bold font-mono">150 kg</span>
              </div>
              
              <div className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-850 flex items-center gap-2 text-[10.5px] text-slate-400">
                <Info size={13} className="text-brand-blue shrink-0" />
                <span>
                  O peso determina a correlação farmacocinética direta do fluxo na bomba de infusão.
                  {weight < 60 ? " Paciente de baixo peso: cuidado aumentado." : weight > 100 ? " Paciente grande: maior dosagem total sugerida." : " Paciente com peso padrão."}
                </span>
              </div>
            </div>

            {/* DYNAMIC CALCULATOR PARAMETERS BLOCK */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex-1 flex flex-col gap-4">
              <div className="border-b border-slate-800/80 pb-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">Calculadora Dedicada</span>
                <h3 className="text-white font-black text-base flex items-center gap-1.5">
                  <Sliders size={16} className="text-brand-blue" />
                  Calibração da Infusão Contínua
                </h3>
              </div>

              {/* RENDER CALCULATORS FOR INDIVIDUAL EXTRA DRUGS */}
              
              {/* 1. KCl 19.1% CALCULATOR */}
              {activeDrug.id === "kcl" && (
                <div className="flex-1 flex flex-col gap-4 animate-in fade-in duration-200">
                  <div className="space-y-1.5 flex flex-col">
                    <label className="text-xs font-bold text-slate-300">Escolha da Diluição & Acesso Venoso:</label>
                    <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-850">
                      <button
                        type="button"
                        onClick={() => setKclConcentration("standard")}
                        className={cn(
                          "py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-all text-center",
                          kclConcentration === "standard"
                            ? "bg-brand-blue text-white shadow-md font-black"
                            : "text-slate-400 hover:text-slate-200"
                        )}
                      >
                        Padrão (Periférico)
                      </button>
                      <button
                        type="button"
                        onClick={() => setKclConcentration("concentrated")}
                        className={cn(
                          "py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-all text-center",
                          kclConcentration === "concentrated"
                            ? "bg-rose-900 text-rose-100 border border-rose-500/30 shadow-md font-black"
                            : "text-slate-400 hover:text-rose-300"
                        )}
                      >
                        Concentrado (Central)
                      </button>
                    </div>
                  </div>

                  <div className="scale-100 flex flex-col gap-2 bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-200">Alvo da Reposição (mEq/h):</span>
                      <span className="font-mono text-xs font-black text-[#24f4e3]">{kclRate} mEq/h</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      value={kclRate}
                      onChange={(e) => setKclRate(Number(e.target.value))}
                      className="w-full accent-brand-blue h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>5 mEq/h</span>
                      <span>10 mEq/h (Máx Periférico)</span>
                      <span>20 mEq/h (Central)</span>
                    </div>
                  </div>

                  <div className="bg-slate-950/40 p-3 border border-slate-850 rounded-xl space-y-1 text-slate-300 text-[11px] flex flex-col">
                    <span className="font-black text-slate-400 text-[9px] uppercase tracking-wider block">Dados da Solução Atual:</span>
                    <p>• Volume Líquido Total: {kclConcentration === "standard" ? "510 mL (500mL SF + 10mL KCl)" : "270 mL (250mL SF + 20mL KCl)"}</p>
                    <p>• Potássio Puro da Solução: {kclConcentration === "standard" ? "25.6 mEq" : "51.2 mEq"}</p>
                    <p>• Concentração de Potássio: {kclConcentration === "standard" ? "0.05 mEq/mL" : "0.19 mEq/mL"}</p>
                  </div>
                </div>
              )}

              {/* 2. Soro Fisiológico (NaCl 0.9%) CALCULATOR */}
              {activeDrug.id === "soro" && (
                <div className="flex-1 flex flex-col gap-4 animate-in fade-in duration-200">
                  <div className="scale-100 flex flex-col gap-2 bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-200">Fator de Expansão (mL/kg):</span>
                      <span className="font-mono text-xs font-black text-[#24f4e3]">{sfVolumeFactor} mL/kg</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="40"
                      step="5"
                      value={sfVolumeFactor}
                      onChange={(e) => setSfVolumeFactor(Number(e.target.value))}
                      className="w-full accent-brand-blue h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>10 mL/kg (Modesta)</span>
                      <span>30 mL/kg (Padrão)</span>
                      <span>40 mL/kg (Agressiva)</span>
                    </div>
                  </div>

                  <div className="scale-100 flex flex-col gap-2 bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-200">Tempo de Infusão Alvo (Horas):</span>
                      <span className="font-mono text-xs font-black text-brand-blue">{sfHoursToRun} h</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      value={sfHoursToRun}
                      onChange={(e) => setSfHoursToRun(Number(e.target.value))}
                      className="w-full accent-brand-blue h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>1h (Choque)</span>
                      <span>3h (Standard)</span>
                      <span>6h (Lento)</span>
                    </div>
                  </div>

                  <div className="bg-slate-950/40 p-3 border border-slate-850 rounded-xl space-y-1 text-slate-300 text-[11px] flex flex-col">
                    <span className="font-black text-slate-400 text-[9px] uppercase tracking-wider block">Dados de Fluidoterapia Baseados em Peso:</span>
                    <p>• Volume Total Calculado: <strong className="text-white font-black">{weight * sfVolumeFactor} mL</strong></p>
                    <p>• Vazão na Bomba (BIC): <strong className="text-white font-black">{Math.round((weight * sfVolumeFactor) / sfHoursToRun)} mL/h</strong></p>
                  </div>
                </div>
              )}

              {/* 3. Noradrenalina CALCULATOR */}
              {activeDrug.id === "noradrenalina" && (
                <div className="flex-1 flex flex-col gap-4 animate-in fade-in duration-200">
                  <div className="space-y-1.5 flex flex-col">
                    <label className="text-xs font-bold text-slate-300">Escolha da Concentração:</label>
                    <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-850">
                      <button
                        type="button"
                        onClick={() => setNoradConcentration("standard")}
                        className={cn(
                          "py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-all text-center",
                          noradConcentration === "standard"
                            ? "bg-brand-blue text-white shadow-md font-black"
                            : "text-slate-400 hover:text-slate-200"
                        )}
                      >
                        Padrão (4 ampolas)
                      </button>
                      <button
                        type="button"
                        onClick={() => setNoradConcentration("concentrated")}
                        className={cn(
                          "py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-all text-center",
                          noradConcentration === "concentrated"
                            ? "bg-purple-900 text-purple-100 border border-purple-500/30 shadow-md font-black"
                            : "text-slate-400 hover:text-purple-300"
                        )}
                      >
                        Dobrada (8 ampolas)
                      </button>
                    </div>
                  </div>

                  <div className="scale-100 flex flex-col gap-2 bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-200">Dose Alvo (mcg/kg/min):</span>
                      <span className="font-mono text-xs font-black text-[#24f4e3]">{noradDose} mcg/kg/min</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="1.5"
                      step="0.05"
                      value={noradDose}
                      onChange={(e) => setNoradDose(Number(e.target.value))}
                      className="w-full accent-brand-blue h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>0.05 (Início)</span>
                      <span>0.5 (Moderada)</span>
                      <span>1.5 (Teto de Choque)</span>
                    </div>
                  </div>

                  <div className="bg-slate-950/40 p-3 border border-slate-850 rounded-xl space-y-1 text-slate-300 text-[11px] flex flex-col">
                    <span className="font-black text-slate-400 text-[9px] uppercase tracking-wider block">Propriedades da Diluição Secundária:</span>
                    <p>• Composição: {noradConcentration === "standard" ? "SG 5% 234 mL + Nora 4 ampolas (16 mL)" : "SG 5% 218 mL + Nora 8 ampolas (32 mL)"}</p>
                    <p>• Concentração de Noradrenalina: {noradConcentration === "standard" ? "64 mcg/mL de solução" : "128 mcg/mL de solução"}</p>
                    <p>• Vazão Necessária: <strong className="text-white font-black">{((noradDose * weight * 60) / (noradConcentration === "standard" ? 64 : 128)).toFixed(1)} mL/h</strong></p>
                  </div>
                </div>
              )}

              {/* 4. Insulina Regular CALCULATOR */}
              {activeDrug.id === "insulina" && (
                <div className="flex-1 flex flex-col gap-4 animate-in fade-in duration-200">
                  <div className="scale-100 flex flex-col gap-2 bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-200">Dose Alvo (UI/kg/hora):</span>
                      <span className="font-mono text-xs font-black text-orange-400">{insulinaDose} UI/kg/h</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.15"
                      step="0.01"
                      value={insulinaDose}
                      onChange={(e) => setInsulinaDose(Number(e.target.value))}
                      className="w-full accent-brand-blue h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>0.05 UI/kg/h (Leve)</span>
                      <span>0.1 UI/kg/h (Padrão CAD)</span>
                      <span>0.15 UI/kg/h (Agressiva)</span>
                    </div>
                  </div>

                  <div className="scale-100 flex flex-col gap-2 bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-200">Glicemia Capilar de Entrada:</span>
                      <span className={cn("font-mono text-xs font-black px-1.5 py-0.5 rounded", dkaInsulinGlycemia > 250 ? "bg-orange-950 text-orange-400" : "bg-emerald-950 text-emerald-400 animate-pulse")}>
                        {dkaInsulinGlycemia} mg/dL
                      </span>
                    </div>
                    <input
                      type="range"
                      min="100"
                      max="450"
                      value={dkaInsulinGlycemia}
                      onChange={(e) => setDkaInsulinGlycemia(Number(e.target.value))}
                      className="w-full accent-brand-blue h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>100 (Acoplar Soro Glic 5%)</span>
                      <span>250 (Limite Clínico)</span>
                      <span>450 (Hiperglicemia Severa)</span>
                    </div>
                  </div>

                  <div className="bg-slate-950/40 p-3 border border-slate-850 rounded-xl space-y-1 text-slate-300 text-[11px] flex flex-col">
                    <span className="font-black text-slate-400 text-[9px] uppercase tracking-wider block">Informações de Fluxo Atuais:</span>
                    <p>• Diluição: 100 UI Insulina Regular em 100 mL de SF 0.9% (1 UI/mL)</p>
                    <p>• Taxa de Infusão na BIC: <strong className="text-white font-black">{(insulinaDose * weight).toFixed(1)} mL/h</strong> (equivalente a {(insulinaDose * weight).toFixed(1)} UI/h)</p>
                  </div>
                </div>
              )}

              {/* 5. Soro Glicosado CALCULATOR */}
              {activeDrug.id === "soroglicosado" && (
                <div className="flex-1 flex flex-col gap-4 animate-in fade-in duration-200">
                  <div className="space-y-1.5 flex flex-col">
                    <label className="text-xs font-bold text-slate-300">Escolha da Concentração de Glicose:</label>
                    <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1 rounded-xl border border-slate-850">
                      <button
                        type="button"
                        onClick={() => setSgConcentration("sg5")}
                        className={cn(
                          "py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-all text-center",
                          sgConcentration === "sg5"
                            ? "bg-emerald-900 border border-emerald-500/30 text-emerald-100 shadow-md font-black"
                            : "text-slate-400 hover:text-slate-200"
                        )}
                      >
                        Soro Glicosado 5%
                      </button>
                      <button
                        type="button"
                        onClick={() => setSgConcentration("sg10")}
                        className={cn(
                          "py-2 px-3 text-xs font-bold rounded-lg cursor-pointer transition-all text-center",
                          sgConcentration === "sg10"
                            ? "bg-purple-900 border border-purple-500/30 text-purple-100 shadow-md font-black"
                            : "text-slate-400 hover:text-purple-300"
                        )}
                      >
                        Soro Glicosado 10%
                      </button>
                    </div>
                  </div>

                  {/* TARGET GLUCOSE FLOW RATE SLIDER (10g - 15g per hour) */}
                  <div className="scale-100 flex flex-col gap-2 bg-slate-950/60 p-3.5 border border-slate-850 rounded-xl">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-slate-200">Aporte Alvo de Glicose Pura (g/hora):</span>
                      <span className="font-mono text-xs font-black text-emerald-405 text-[#24f4e3]">{sgGlucoseTarget} g/h</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="15"
                      step="0.5"
                      value={sgGlucoseTarget}
                      onChange={(e) => setSgGlucoseTarget(Number(e.target.value))}
                      className="w-full accent-[#24f4e3] h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-bold">
                      <span>10.0 g/h</span>
                      <span>12.5 g/h (Alvo Padrão)</span>
                      <span>15.0 g/h</span>
                    </div>
                  </div>

                  {/* HOW TO TRANSFORM OR PREPARE SG 10% BLOCK */}
                  {sgConcentration === "sg10" && (
                    <div className="bg-purple-950/30 border border-purple-900/50 p-3.5 rounded-xl text-xs space-y-2 text-purple-250 animate-in slide-in-from-top-1 duration-200">
                      <span className="font-black text-purple-300 text-[9.5px] uppercase tracking-widest block">
                        🛠️ PREPARO DE CRIAÇÃO (SG 10% - 500 mL):
                      </span>
                      <p className="text-[11px] leading-relaxed text-slate-305">
                        Para criar <strong className="text-white">SG 10% (500 mL)</strong> misturando <strong className="text-emerald-450 text-emerald-400">SG 5%</strong> com <strong className="text-amber-500">Glicose Hipertônica 50%</strong>:
                      </p>
                      <ul className="list-decimal list-inside text-[11px] space-y-1 text-slate-300 pl-1">
                        <li>Pegue um frasco de <strong className="text-white">Soro Glicosado 5% de 500 mL</strong>.</li>
                        <li><strong className="text-rose-400 font-bold">Aspire e retire 50 mL</strong> de soro do frasco (descarte-o), deixando <strong className="text-white">450 mL</strong> de líquido.</li>
                        <li><strong className="text-emerald-400 font-bold">Adicione 50 mL de Glicose 50%</strong> (Equivale a 5 ampolas de 10 mL ou 2.5 ampolas de 20 mL) diretamente no mesmo frasco.</li>
                        <li><strong className="text-emerald-400 font-bold font-mono">Resultado final:</strong> Frasco com exatamente 500 mL de solução de Glicose a ~10%.</li>
                      </ul>
                    </div>
                  )}

                  {/* CLINICAL FOCUS CARD */}
                  <div className="bg-slate-950/50 p-3.5 border border-slate-850 rounded-xl text-slate-300 text-[11px] space-y-1.5 flex flex-col">
                    <span className="font-black text-slate-400 text-[9px] uppercase tracking-wider block">
                      🎯 FOCO FISIOPATOLÓGICO DA INFUSÃO:
                    </span>
                    <p className="leading-snug">
                      Na CAD (quando a glicemia cai abaixo de 250 mg/dL), nós <strong className="text-white">NÃO suspendemos a bomba de insulina</strong> para que a cetogênese hepática continue a ser bloqueada.
                    </p>
                    <p className="leading-snug text-emerald-300">
                      O foco principal é infundir de <strong className="text-emerald-400 text-white font-bold">10 a 15 g de glicose por hora</strong>. Isso garante o aporte de energia celular necessário para prosseguir com a insulina com segurança sem provocar hipoglicemia.
                    </p>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* RIGHT BENTO BLOCK: THE LIVE PRESCRIÇÃO, INFUSION PUMP AND WARNING CARD */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* INTERACTIVE DIGITAL INFUSION PUMP EMULATOR */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col sm:flex-row items-center gap-4 relative overflow-hidden">
              {/* LED display pane */}
              <div className="bg-slate-900 border border-emerald-500/50 rounded-xl p-4 flex-1 w-full font-mono flex flex-col justify-between h-[115px] shadow-[0_0_15px_rgba(16,185,129,0.15)] relative">
                {/* Pump scanlines effect */}
                <div className="absolute inset-0 bg-linear-to-b from-[#10b981]/5 to-transparent pointer-events-none" />
                
                <div className="flex justify-between items-center text-[10px] text-emerald-400 select-none border-b border-emerald-950 pb-1">
                  <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    BIC_EMBOX_ON
                  </span>
                  <span className="font-black text-emerald-400 text-[9px]">PUMP #01</span>
                </div>
                
                <div className="flex justify-between items-end my-1">
                  <div className="flex flex-col">
                    <span className="text-[9px] text-emerald-500 block font-bold uppercase leading-none">Vazão Programada:</span>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="text-3xl font-black text-white tracking-widest leading-none">{flowRateMlh}</span>
                      <span className="text-xs text-emerald-400 font-bold">mL/h</span>
                    </div>
                  </div>
                  
                  {/* Visual Drop speed animation */}
                  <div className="flex flex-col items-center justify-center border border-emerald-800/40 bg-slate-950 px-2.5 py-1.5 rounded">
                    <span className="text-[7.5px] uppercase font-bold text-emerald-500 opacity-85 leading-none">Bureta Dropper</span>
                    <div className="flex items-center gap-1.5 mt-1 text-emerald-400 text-[10px]">
                      <Droplets size={12} className="animate-bounce" />
                      <span className="font-extrabold tracking-tight">Ativo</span>
                    </div>
                  </div>
                </div>

                <div className="text-[9px] text-emerald-500/80 uppercase font-black tracking-widest truncate">
                  INFUNDINDO: {activeDrug.name.toUpperCase()}
                </div>
              </div>

              {/* Roteiro Clínico Curto */}
              <div className="flex-1 text-xs text-slate-300 space-y-1.5 flex flex-col">
                <span className="font-black text-slate-400 text-[10px] uppercase block tracking-wider">Metodologia de Preparo</span>
                <p className="text-slate-400 text-[11px] leading-snug">
                  <strong className="text-white">Instrução clínica:</strong> {activeDrug.preparation}
                </p>
                <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                  <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                  <span>Ajustado pelo rastro com peso de {weight} kg.</span>
                </div>
              </div>
            </div>

            {/* CRITICAL PITFALL HAZARD CARD */}
            <div className="bg-rose-950/40 border border-rose-900 rounded-2xl p-5 text-rose-200 shadow-lg flex items-start gap-4 animate-in duration-300">
              <div className="bg-rose-950 border border-rose-800 p-2.5 rounded-xl shrink-0 text-rose-450 shadow-md">
                <AlertTriangle size={24} className="animate-bounce text-rose-500" />
              </div>
              <div className="space-y-1.5 flex flex-col">
                <h4 className="text-rose-300 font-black text-sm uppercase tracking-wider flex items-center gap-1">
                  ⚠️ ERRO CRÍTICO / ARMADILHA CLÍNICA
                </h4>
                <p className="text-xs leading-relaxed opacity-95">
                  {activeDrug.trap}
                </p>
                <div className="text-[10px] text-rose-400/80 font-bold border-t border-rose-950 pt-1.5 flex items-center gap-1">
                  <span>Diretriz de Segurança:</span>
                  <span className="italic font-normal">Sempre valide a diluição em pares antes de ligar a bomba de infusão.</span>
                </div>
              </div>
            </div>

            {/* SUA PRESCRIÇÃO PRONTA (THE TERMINAL COPY CARD) */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col gap-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-black text-brand-blue block tracking-widest">Sua Prescrição Calibrada</span>
                  <h4 className="text-white font-extrabold text-xs">Texto Copiável para o Prontuário</h4>
                </div>
                
                <button
                  type="button"
                  onClick={() => handleCopy(prescriptionLine, "specific_drug")}
                  className={cn(
                    "py-1.5 px-4 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-1.5 border cursor-pointer",
                    copiedId === "specific_drug"
                      ? "bg-emerald-950 border-emerald-500 text-emerald-300 font-extrabold"
                      : "bg-[#24f4e3]/10 border-[#24f4e3]/45 text-[#24f4e3] hover:bg-[#24f4e3]/20"
                  )}
                >
                  {copiedId === "specific_drug" ? (
                    <>
                      <Check size={12} /> Copiado!
                    </>
                  ) : (
                    <>
                      <Copy size={12} /> Copiar Linha
                    </>
                  )}
                </button>
              </div>

              {/* Code display window */}
              <div className="bg-slate-950 border border-slate-850 rounded-xl p-4 font-mono text-xs text-emerald-300 leading-relaxed break-words shadow-inner relative overflow-hidden flex flex-col">
                <div className="absolute top-2 right-2 flex gap-1 items-center opacity-30 select-none">
                  <span className="block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[8px] uppercase font-bold text-emerald-500">LIVE RENDER</span>
                </div>
                {prescriptionLine}
              </div>

              <div className="text-[10px] text-slate-500 leading-relaxed font-bold">
                • <strong>Como prescrever:</strong> Cole esta linha diretamente no prontuário eletrônico do paciente. Ela contém o volume total, eletrólito acoplado e velocidade de vazão adequada.
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-4 animate-in fade-in duration-500">
      {/* Visual Header Grid */}
      <div className="bg-slate-900 border-2 border-brand-blue/30 rounded-2xl p-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <BookOpen size={96} className="text-brand-blue" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 text-brand-blue mb-1">
            <Activity size={18} className="animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.25em]">
              Suporte de Decisão Médica
            </span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            Diário de Prescrição Clínica
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl leading-relaxed">
            Plataforma didática interactiva de auxílio à prescrição hospitalar.
            Selecione o cenário, calibre os biomarcadores do seu paciente nos
            simuladores, compreenda as indicações farmacológicas e copie a "cola
            clínica" perfeitamente calculada para o prontuário.
          </p>
        </div>
      </div>

      {/* Main Tabs Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-900">
        {[
          {
            id: "cad",
            name: "Cetoacidose Diabética (CAD)",
            icon: Syringe,
            color: "hover:text-orange-400 text-orange-200",
          },
          {
            id: "ic",
            name: "IC Descompensada",
            icon: Heart,
            color: "hover:text-blue-400 text-blue-200",
          },
          {
            id: "pac",
            name: "Pneumonia (PAC)",
            icon: FileText,
            color: "hover:text-emerald-400 text-emerald-200",
          },
          {
            id: "sca",
            name: "Síndrome Coronariana",
            icon: Activity,
            color: "hover:text-amber-400 text-amber-200",
          },
          {
            id: "asma_dpoc",
            name: "Asma & DPOC Crise",
            icon: Wind,
            color: "hover:text-teal-400 text-teal-200",
          },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as PrescriptionTab);
                setExpandedExplanation(null);
              }}
              className={cn(
                "flex items-center justify-center gap-2 py-3.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer",
                tab.color,
                isActive
                  ? "bg-slate-900 border-2 border-brand-blue/80 shadow-[0_4px_16px_rgba(59,130,246,0.35)] text-white scale-[1.02]"
                  : "text-slate-400 hover:bg-slate-900/30",
              )}
            >
              <IconComponent size={16} />
              <span className="truncate">{tab.name.split(" ")[0]}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Main Body container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT COLUMN: SIMULATORS & EXPLANATORY CARDS (4/12) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Patient Weight Factor (Crucial component for clinical math) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-between">
              <span>Filtro de Ajuste Fisiológico</span>
              <span className="text-brand-blue font-mono font-bold">
                {weight} kg
              </span>
            </h4>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400">40kg</span>
              <input
                type="range"
                min="40"
                max="150"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="flex-1 accent-brand-blue bg-slate-950 h-2 rounded-lg"
              />
              <span className="text-xs text-slate-400">150kg</span>
            </div>
          </div>

          {/* TAB CONTENT: CETOACIDOSE DIABÉTICA (CAD) */}
          {activeTab === "cad" && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
                <h4 className="text-orange-400 font-extrabold text-sm uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Syringe size={18} /> Simulador Clínico da Cetoacidose
                </h4>

                {/* Glicemia Capilar slider */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <span>Glicemia Capilar de Entrada:</span>
                    <span className="font-mono font-bold text-orange-400">
                      {dkaGlycemia} mg/dL
                    </span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="600"
                    step="10"
                    value={dkaGlycemia}
                    onChange={(e) => setDkaGlycemia(Number(e.target.value))}
                    className="accent-orange-500 bg-slate-950 h-1.5 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>&lt; 250 (Iniciar Soro Glicosado)</span>
                    <span>&gt; 250 (Manter SF 0.9%)</span>
                  </div>
                </div>

                {/* Potássio slider */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <span>Potássio Sérico (K+):</span>
                    <span
                      className={cn(
                        "font-mono font-bold",
                        dkaK < 3.3 ? "text-rose-400" : "text-emerald-400",
                      )}
                    >
                      {dkaK.toFixed(1)} mEq/L
                    </span>
                  </div>
                  <input
                    type="range"
                    min="2.0"
                    max="6.0"
                    step="0.1"
                    value={dkaK}
                    onChange={(e) => setDkaK(Number(e.target.value))}
                    className="accent-rose-500 bg-slate-950 h-1.5 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span className="text-rose-400 font-bold">
                      K &lt; 3.3 (DANGER)
                    </span>
                    <span>3.3 - 5.2</span>
                    <span>K &gt; 5.2</span>
                  </div>
                </div>
              </div>

              {/* Explanatory clickable medicine cards */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-3">
                  Explicativo das Substâncias Prescritas (Clique para Expandir)
                </h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    {
                      id: "insulin",
                      label: "Insulina Regular BIC",
                      desc: "Suprime a cetogênese no fígado.",
                    },
                    {
                      id: "kcl",
                      label: "KCl 19,1% (Potássio)",
                      desc: "Evita queda de potássio sérico por translocação celular.",
                    },
                  ].map((med) => {
                    const isExpanded = expandedExplanation === med.id;
                    const config = medicineDetails[med.id];
                    return (
                      <div
                        key={med.id}
                        className="border border-slate-850 rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedExplanation(isExpanded ? null : med.id)
                          }
                          className="w-full flex items-center justify-between p-3.5 bg-slate-950/40 text-left hover:bg-slate-950/80 cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-200">
                            {med.label}
                          </span>
                          <span className="text-[11px] text-brand-blue font-bold">
                            {isExpanded ? "Fechar" : "Ver Indicação"}
                          </span>
                        </button>
                        {isExpanded && config && (
                          <div
                            className={cn(
                              "p-4 border-t text-xs leading-relaxed space-y-3",
                              config.color,
                            )}
                          >
                            <p>
                              <strong>Por que prescrever?</strong>{" "}
                              {config.indication}
                            </p>
                            <p>
                              <strong>Preparo/Diluição Padrão:</strong>{" "}
                              {config.formula}
                            </p>
                            <p className="bg-slate-950/50 p-2.5 rounded border border-rose-900/40 font-medium text-rose-300">
                              ⚠️ <strong>Armadilha Clínica:</strong>{" "}
                              {config.trap}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: IC DESCOMPENSADA */}
          {activeTab === "ic" && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
                <h4 className="text-blue-400 font-extrabold text-sm uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Heart size={18} /> Simulador da ICC Descompensada
                </h4>

                {/* Profile selection */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-slate-300 font-bold">
                    Perfil Clínico Hemodinâmico:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {
                        id: "B",
                        name: "Perfil B (Quente e Congesto)",
                        desc: "Pulmão cheio, boa perfusão periférica",
                      },
                      {
                        id: "C",
                        name: "Perfil C (Frio e Congesto)",
                        desc: "Pulmão cheio + má perfusão periférica (precisa de inotrópico)",
                      },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setIccProfile(p.id as "B" | "C")}
                        className={cn(
                          "py-3 px-4 rounded-xl border flex flex-col gap-1 items-center text-center transition-all cursor-pointer",
                          iccProfile === p.id
                            ? "bg-blue-950/50 border-blue-500 text-blue-200 shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                            : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700",
                        )}
                      >
                        <span className="font-extrabold text-xs">{p.name}</span>
                        <span className="text-[9px] opacity-80 leading-tight">
                          {p.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Chronic treatment factors */}
                <div className="flex flex-col gap-2 mt-2">
                  <div className="flex justify-between items-center text-xs text-slate-300">
                    <span>Dose Domiciliar Oral de Furosemida:</span>
                    <span className="font-mono font-bold text-amber-400">
                      {iccHomeFurosemide === 0
                        ? "Nenhuma (Virgem de Diurético)"
                        : iccHomeFurosemide + " mg/dia"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="160"
                    step="40"
                    value={iccHomeFurosemide}
                    onChange={(e) =>
                      setIccHomeFurosemide(Number(e.target.value))
                    }
                    className="accent-amber-500 bg-slate-950 h-1.5 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Sem diurético</span>
                    <span>40 mg (1cp)</span>
                    <span>80 mg (2cp)</span>
                    <span>160 mg (4cp)</span>
                  </div>
                </div>

                {iccProfile === "C" && (
                  <div className="flex flex-col gap-2 mt-2 animate-in slide-in-from-top-2 duration-300">
                    <div className="flex justify-between items-center text-xs text-slate-300">
                      <span>Infundir Dobutamina a:</span>
                      <span className="font-mono font-bold text-purple-400">
                        {dobutamineDose} mcg/kg/min
                      </span>
                    </div>
                    <input
                      type="range"
                      min="2.5"
                      max="20"
                      step="2.5"
                      value={dobutamineDose}
                      onChange={(e) =>
                        setDobutamineDose(Number(e.target.value))
                      }
                      className="accent-purple-500 bg-slate-950 h-1.5 rounded-lg"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500">
                      <span>Mínimo (2.5)</span>
                      <span>Médio (10)</span>
                      <span>Máximo (20 mcg/kg/min)</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Explanatory clickable medicine cards */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-3">
                  Explicativo das Substâncias Prescritas (Clique para Expandir)
                </h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    {
                      id: "furosemida",
                      label: "Furosemida Venosa",
                      desc: "Diurese intensa de alça de Henle.",
                    },
                    {
                      id: "dobutamina",
                      label: "Dobutamina BIC (Se Perfil C)",
                      desc: "Estímulo inotrópico cardíaco de força.",
                    },
                  ].map((med) => {
                    const isExpanded = expandedExplanation === med.id;
                    const config = medicineDetails[med.id];
                    return (
                      <div
                        key={med.id}
                        className="border border-slate-850 rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedExplanation(isExpanded ? null : med.id)
                          }
                          className="w-full flex items-center justify-between p-3.5 bg-slate-950/40 text-left hover:bg-slate-950/80 cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-200">
                            {med.label}
                          </span>
                          <span className="text-[11px] text-brand-blue font-bold">
                            {isExpanded ? "Fechar" : "Ver Indicação"}
                          </span>
                        </button>
                        {isExpanded && config && (
                          <div
                            className={cn(
                              "p-4 border-t text-xs leading-relaxed space-y-3",
                              config.color,
                            )}
                          >
                            <p>
                              <strong>Por que prescrever?</strong>{" "}
                              {config.indication}
                            </p>
                            <p>
                              <strong>Preparo/Diluição Padrão:</strong>{" "}
                              {config.formula}
                            </p>
                            <p className="bg-slate-950/50 p-2.5 rounded border border-rose-900/40 font-medium text-rose-300">
                              ⚠️ <strong>Armadilha Clínica:</strong>{" "}
                              {config.trap}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: PNEUMONIA (PAC) */}
          {activeTab === "pac" && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
                <h4 className="text-emerald-400 font-extrabold text-sm uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <FileText size={18} /> Calculadora Inteligente CURB-65
                </h4>

                <p className="text-xs text-slate-400 leading-tight">
                  Selecione os fatores de risco apresentados pelo paciente para
                  definir o local ótimo de internação e o esquema antibiótico
                  indicado.
                </p>

                <div className="flex flex-col gap-2 bg-slate-950/70 p-3.5 rounded-xl border border-slate-800/80">
                  <label className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-slate-900 rounded-lg transition-all text-xs text-slate-200 font-semibold">
                    <input
                      type="checkbox"
                      checked={hasConfusion}
                      onChange={(e) => setHasConfusion(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500"
                    />
                    <span>
                      <strong>C</strong>onfusão Mental Crônica ou de início
                      recente
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-slate-900 rounded-lg transition-all text-xs text-slate-200 font-semibold border-t border-slate-900/40">
                    <input
                      type="checkbox"
                      checked={hasUrea}
                      onChange={(e) => setHasUrea(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500"
                    />
                    <span>
                      <strong>U</strong>reia Séria Elevada (&gt;= 43 mg/dL)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-slate-900 rounded-lg transition-all text-xs text-slate-200 font-semibold border-t border-slate-900/40">
                    <input
                      type="checkbox"
                      checked={hasRespRate}
                      onChange={(e) => setHasRespRate(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500"
                    />
                    <span>
                      <strong>R</strong>espirações por Minuto aumentada (&gt;=
                      30 ipm)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-slate-900 rounded-lg transition-all text-xs text-slate-200 font-semibold border-t border-slate-900/40">
                    <input
                      type="checkbox"
                      checked={hasLowBp}
                      onChange={(e) => setHasLowBp(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500"
                    />
                    <span>
                      <strong>B</strong>aixa Pressão Arterial (PAS &lt; 90 ou
                      PAD &lt;= 60 mmHg)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer p-1.5 hover:bg-slate-900 rounded-lg transition-all text-xs text-slate-200 font-semibold border-t border-slate-900/40">
                    <input
                      type="checkbox"
                      checked={isAge65}
                      onChange={(e) => setIsAge65(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500"
                    />
                    <span>
                      Idade maior ou igual a <strong>65</strong> anos
                    </span>
                  </label>
                </div>

                {/* Score results card */}
                {(() => {
                  const rec = getCurbRecommendation();
                  return (
                    <div
                      className={cn(
                        "p-4 rounded-xl border flex flex-col gap-1.5",
                        rec.badgeColor,
                      )}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-extrabold text-xs uppercase tracking-wider">
                          Score CURB-65: {curbScore}
                        </span>
                        <span className="text-[10px] bg-slate-950/60 px-2.5 py-1 rounded-full font-black border border-current">
                          {rec.risk.split(" ")[0]} Risco
                        </span>
                      </div>
                      <p className="text-sm font-black text-white">
                        {rec.treatment}
                      </p>
                      <p className="text-xs opacity-90 leading-relaxed border-t border-white/10 mt-1 pt-1">
                        <strong>Recomendação:</strong> {rec.scheme}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* Explanatory clickable medicine cards */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-3">
                  Explicativo das Substâncias Prescritas (Clique para Expandir)
                </h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    {
                      id: "ceftriaxone",
                      label: "Ceftriaxone EV",
                      desc: "Antibiótico beta-lactâmico amplo contra pneumococos.",
                    },
                  ].map((med) => {
                    const isExpanded = expandedExplanation === med.id;
                    const config = medicineDetails[med.id];
                    return (
                      <div
                        key={med.id}
                        className="border border-slate-850 rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedExplanation(isExpanded ? null : med.id)
                          }
                          className="w-full flex items-center justify-between p-3.5 bg-slate-950/40 text-left hover:bg-slate-950/80 cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-200">
                            {med.label}
                          </span>
                          <span className="text-[11px] text-brand-blue font-bold">
                            {isExpanded ? "Fechar" : "Ver Indicação"}
                          </span>
                        </button>
                        {isExpanded && config && (
                          <div
                            className={cn(
                              "p-4 border-t text-xs leading-relaxed space-y-3",
                              config.color,
                            )}
                          >
                            <p>
                              <strong>Por que prescrever?</strong>{" "}
                              {config.indication}
                            </p>
                            <p>
                              <strong>Preparo/Diluição Padrão:</strong>{" "}
                              {config.formula}
                            </p>
                            <p className="bg-slate-950/50 p-2.5 rounded border border-rose-900/40 font-medium text-rose-300">
                              ⚠️ <strong>Armadilha Clínica:</strong>{" "}
                              {config.trap}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: SÍNDROME CORONARIANA AGUDA */}
          {activeTab === "sca" && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
                <h4 className="text-amber-400 font-extrabold text-sm uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Activity size={18} /> Calculadora de Ajuste Anticoagulante
                  (Crítico)
                </h4>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-300">
                      Idade do Paciente:
                    </label>
                    <input
                      type="number"
                      value={scaAge}
                      onChange={(e) => setScaAge(Number(e.target.value))}
                      className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-100 font-mono"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-300">Gênero:</label>
                    <div className="grid grid-cols-2 gap-1.5 h-10">
                      {["M", "F"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => setScaGender(g as "M" | "F")}
                          className={cn(
                            "rounded-xl border font-bold text-xs transition-colors cursor-pointer",
                            scaGender === g
                              ? "bg-amber-950/40 border-amber-500 text-amber-300"
                              : "bg-slate-950 border-slate-850 text-slate-400 hover:text-slate-300",
                          )}
                        >
                          {g === "M" ? "Masculino" : "Feminino"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-slate-300">
                      Creatinina Séria:
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={scaCreatinine}
                      onChange={(e) => setScaCreatinine(Number(e.target.value))}
                      className="bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sm text-slate-100 font-mono"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 justify-end">
                    <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-300 p-2 bg-slate-950 rounded-xl border border-slate-850">
                      <input
                        type="checkbox"
                        checked={isFibrinolysisScheduled}
                        onChange={(e) =>
                          setIsFibrinolysisScheduled(e.target.checked)
                        }
                        className="w-4 h-4 accent-amber-500"
                      />
                      <span>
                        Paciente vai realizar <strong>Fibrinólise</strong>
                      </span>
                    </label>
                  </div>
                </div>

                {/* Calculation indicator results */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 mt-2 space-y-2">
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Clearance de Creatinina (ClCr):</span>
                    <span
                      className={cn(
                        "font-bold text-sm font-mono",
                        calculatedClCr < 30
                          ? "text-rose-400"
                          : "text-emerald-400",
                      )}
                    >
                      {calculatedClCr} mL/h
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-relaxed bg-slate-900 border border-slate-800 p-2.5 rounded-lg flex gap-2">
                    <Info
                      className="text-amber-400 shrink-0 mt-0.5"
                      size={14}
                    />
                    <span>
                      {calculatedClCr < 30
                        ? "⚠️ Insuficiência Renal Séria. Reduzir Enoxaparina terapeutica para 1mg/kg via subcutânea cada 24 horas."
                        : scaAge >= 75
                          ? "✔ Idoso >= 75 anos. Reduzir Enoxaparina em infarto com supra (STEMI) para 0.75mg/kg de 12/12h, e omitir dose de bolus endovenoso."
                          : "✔ Função renal adequada. Administrar Enoxaparina 1mg/kg subcutânea de 12 em 12 horas."}
                    </span>
                  </div>
                </div>
              </div>

              {/* Explanatory clickable medicine cards */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
                <h4 className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-3">
                  Explicativo das Substâncias Prescritas (Clique para Expandir)
                </h4>
                <div className="flex flex-col gap-2.5">
                  {[
                    {
                      id: "enoxaparina",
                      label: "Enoxaparina (Clexane)",
                      desc: "Anticoagulação seletiva Anti-Xa.",
                    },
                  ].map((med) => {
                    const isExpanded = expandedExplanation === med.id;
                    const config = medicineDetails[med.id];
                    return (
                      <div
                        key={med.id}
                        className="border border-slate-850 rounded-xl overflow-hidden transition-all duration-300"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedExplanation(isExpanded ? null : med.id)
                          }
                          className="w-full flex items-center justify-between p-3.5 bg-slate-950/40 text-left hover:bg-slate-950/80 cursor-pointer"
                        >
                          <span className="text-xs font-bold text-slate-200">
                            {med.label}
                          </span>
                          <span className="text-[11px] text-brand-blue font-bold">
                            {isExpanded ? "Fechar" : "Ver Indicação"}
                          </span>
                        </button>
                        {isExpanded && config && (
                          <div
                            className={cn(
                              "p-4 border-t text-xs leading-relaxed space-y-3",
                              config.color,
                            )}
                          >
                            <p>
                              <strong>Por que prescrever?</strong>{" "}
                              {config.indication}
                            </p>
                            <p>
                              <strong>Preparo/Diluição Padrão:</strong>{" "}
                              {config.formula}
                            </p>
                            <p className="bg-slate-950/50 p-2.5 rounded border border-rose-900/40 font-medium text-rose-300">
                              ⚠️ <strong>Armadilha Clínica:</strong>{" "}
                              {config.trap}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT: ASMA & DPOC CRISE */}
          {activeTab === "asma_dpoc" && (
            <div className="flex flex-col gap-5 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col gap-4">
                <h4 className="text-teal-400 font-extrabold text-sm uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center gap-2">
                  <Wind size={18} /> Simulador de Broncoespasmo Grave
                </h4>

                {/* Disease Selection Toggle */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs text-slate-300 font-bold">
                    Fisiopatologia de Origem:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {
                        id: false,
                        name: "Asma Aguda",
                        desc: "Inflamação reversível, via aérea reativa",
                      },
                      {
                        id: true,
                        name: "Exacerbação de DPOC",
                        desc: "Remodelação alveolar crônica, retentor de CO2",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.name}
                        type="button"
                        onClick={() => setIsDpoc(opt.id)}
                        className={cn(
                          "py-3 px-4 rounded-xl border flex flex-col gap-1 items-center text-center transition-all cursor-pointer",
                          isDpoc === opt.id
                            ? "bg-teal-950/50 border-teal-500 text-teal-200 shadow-[0_0_12px_rgba(20,184,166,0.25)]"
                            : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-700",
                        )}
                      >
                        <span className="font-extrabold text-xs">
                          {opt.name}
                        </span>
                        <span className="text-[9px] opacity-80 leading-tight">
                          {opt.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Exacerbation severity check */}
                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-xs text-slate-300 font-bold">
                    Gravidade do Broncoespasmo:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {
                        id: false,
                        name: "Exacerbação Leve/Mod",
                        desc: "Prednisona oral, medicação espaçada",
                      },
                      {
                        id: true,
                        name: "Exacerbação Grave/Crítica",
                        desc: "Corticoide venoso, inalação contínua",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.name}
                        type="button"
                        onClick={() => setIsSevereExacerbation(opt.id)}
                        className={cn(
                          "py-3 px-4 rounded-xl border flex flex-col gap-1 items-center text-center transition-all cursor-pointer",
                          isSevereExacerbation === opt.id
                            ? "bg-rose-950/30 border-rose-500 text-rose-200"
                            : "bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-700",
                        )}
                      >
                        <span className="font-extrabold text-xs">
                          {opt.name}
                        </span>
                        <span className="text-[9px] opacity-80 leading-tight">
                          {opt.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clinical safety message */}
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-850 mt-2 space-y-2 text-xs leading-relaxed">
                  <span className="font-bold text-teal-400 flex items-center gap-1.5 mb-1">
                    <Info size={14} /> Alvo Recomendado de Oxigênio (SatO2):
                  </span>
                  <p className="text-slate-300">
                    {isDpoc
                      ? "⚠️ ATENÇÃO NO DPOC: O alvo de saturação deve ser mantido estritamente entre 88% e 92%. Níveis elevados de oxigênio removem o estímulo hipóxico respiratório, predispondo à hipoventilação grave, carbonarco e coma por CO2!"
                      : "✔ Na crise de Asmaduto: O alvo convencional de Saturação de O2 é entre 93% e 95%. Estimular broncodilatação vigorosa a cada 20 minutos."}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* MIDDLE COLUMN: EMERGENCY PHARMACOPOEIA / INDIVIDUAL DRUGS (4/12) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg flex-1 flex flex-col gap-4">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">
                Guia Rápido de Fármacos
              </span>
              <h3 className="text-white font-extrabold text-base flex items-center gap-2">
                <Sliders size={16} className="text-brand-blue animate-pulse" strokeWidth={3} />
                Calculadoras & Diluições
              </h3>
            </div>

            {/* SEQUENTIAL WORKFLOW OF EMERGENCY DRUGS */}
            <div className="bg-slate-950/60 border border-slate-850 rounded-xl p-3 flex flex-col gap-2">
              <div className="flex justify-between items-center border-b border-slate-900 pb-1.5 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Rastro Dinâmico de Infusões
                </span>
                <span className="text-[9px] text-slate-500 font-bold uppercase">Ordem de Conduta</span>
              </div>
              <p className="text-[10px] text-slate-400 leading-snug mb-1">
                Clique nos tópicos abaixo na ordem de prescrição recomendada para calibrar dosagens e armadilhas dinâmicas:
              </p>
              
              <div className="flex flex-col gap-1.5">
                {REQUISITE_SEQUENCE.map((item) => {
                  const isSelected = selectedDrugId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        selectDrugAndSync(item.id);
                        setActiveDrugTab("diluicao");
                      }}
                      className={cn(
                        "w-full text-left p-2.5 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer min-h-[44px]",
                        isSelected ? item.activeBg : item.bg
                      )}
                    >
                      <span className="font-extrabold tracking-tight text-[11px] truncate mr-2">{item.title}</span>
                      <span className={cn("text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md shrink-0", item.badgeBg)}>
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Search field & category pills */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={12} />
              <input
                type="text"
                placeholder="Buscar (KCL, soro, adrenalina, etc)..."
                value={drugSearchTerm}
                onChange={(e) => setDrugSearchTerm(e.target.value)}
                className="w-full pl-8 pr-4 py-1.5 bg-slate-950 border border-slate-850 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-blue/60 transition-colors"
              />
            </div>

            {/* Rapid category selectors */}
            <div className="flex flex-wrap gap-1">
              {["Tudo", "Eletrólitos", "Vasoativos", "Cristaloides", "Cardiológicos", "Hormônios", "Diuréticos"].map(cat => {
                const currentDrug = EMERGENCY_DRUGS.find(d => d.id === selectedDrugId);
                const isSelected = (cat === "Tudo" && !drugSearchTerm) || (currentDrug?.category === cat);
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      if (cat === "Tudo") {
                        setDrugSearchTerm("");
                      } else {
                        // find first drug in category
                        const found = EMERGENCY_DRUGS.find(d => d.category === cat);
                        if (found) selectDrugAndSync(found.id);
                      }
                    }}
                    className={cn(
                      "text-[9px] font-bold px-1.5 py-0.5 rounded-md transition-colors cursor-pointer",
                      isSelected
                        ? "bg-brand-blue/20 text-brand-blue border border-brand-blue/40"
                        : "bg-slate-950 text-slate-400 border border-slate-900 hover:text-slate-200"
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Drug list (Filtered by search) */}
            <div className="grid grid-cols-1 gap-1 max-h-[170px] overflow-y-auto pr-1">
              {EMERGENCY_DRUGS.filter(drug => 
                drug.name.toLowerCase().includes(drugSearchTerm.toLowerCase()) || 
                drug.category.toLowerCase().includes(drugSearchTerm.toLowerCase())
              ).map(drug => {
                const isSelected = selectedDrugId === drug.id;
                let colorClasses = "border-slate-850 hover:border-slate-700 bg-slate-950/40 text-slate-300";
                if (isSelected) {
                  if (drug.color === "rose") colorClasses = "border-rose-500/50 bg-rose-950/30 text-rose-200 shadow-[0_0_8px_rgba(239,68,68,0.1)] font-bold";
                  if (drug.color === "blue") colorClasses = "border-blue-500/50 bg-blue-950/30 text-blue-200 shadow-[0_0_8px_rgba(59,130,246,0.1)] font-bold";
                  if (drug.color === "amber") colorClasses = "border-amber-500/50 bg-amber-950/30 text-amber-200 shadow-[0_0_8px_rgba(245,158,11,0.1)] font-bold";
                  if (drug.color === "purple") colorClasses = "border-purple-500/50 bg-purple-950/30 text-purple-200 shadow-[0_0_8px_rgba(168,85,247,0.1)] font-bold";
                  if (drug.color === "orange") colorClasses = "border-orange-500/50 bg-orange-950/30 text-orange-200 shadow-[0_0_8px_rgba(249,115,22,0.1)] font-bold";
                  if (drug.color === "cyan") colorClasses = "border-cyan-500/50 bg-cyan-950/30 text-cyan-200 shadow-[0_0_8px_rgba(6,182,212,0.1)] font-bold";
                  if (drug.color === "emerald") colorClasses = "border-emerald-500/50 bg-emerald-950/30 text-emerald-200 shadow-[0_0_8px_rgba(16,185,129,0.1)] font-bold";
                }

                return (
                  <button
                    key={drug.id}
                    onClick={() => {
                      selectDrugAndSync(drug.id);
                      setActiveDrugTab("diluicao");
                    }}
                    className={cn(
                      "w-full text-left p-2 rounded-xl border text-xs flex items-center justify-between transition-all cursor-pointer",
                      colorClasses
                    )}
                  >
                    <span>{drug.name}</span>
                    <span className="text-[9px] uppercase tracking-wider font-extrabold opacity-60">
                      {drug.category}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Drug details card */}
            {(() => {
              const drug = EMERGENCY_DRUGS.find(d => d.id === selectedDrugId);
              if (!drug) return null;

              return (
                <div className="flex-1 bg-slate-950 border border-slate-850 rounded-xl p-3 flex flex-col gap-2.5">
                  <div className="flex justify-between items-start border-b border-slate-900 pb-2">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Detalhes Clínicos
                      </span>
                      <h4 className="text-white font-black text-xs">{drug.name}</h4>
                    </div>
                    {/* Copy specific line */}
                    <button
                      type="button"
                      onClick={() => handleCopy(drug.calculator(weight), drug.id)}
                      className={cn(
                        "py-1 px-2.5 rounded-lg text-[10px] font-bold uppercase transition-all flex items-center gap-1.5 border cursor-pointer",
                        copiedId === drug.id
                          ? "bg-emerald-950 border-emerald-500 text-emerald-300"
                          : "bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white"
                      )}
                    >
                      {copiedId === drug.id ? (
                        <>
                          <Check size={10} /> Copiado!
                        </>
                      ) : (
                        <>
                          <Copy size={10} /> Copiar Linha
                        </>
                      )}
                    </button>
                  </div>

                  {/* Sub-tabs within drug details of the selected drug */}
                  <div className="grid grid-cols-4 gap-1 bg-slate-900 p-0.5 rounded-lg">
                    {[
                      { id: "diluicao", label: "Preparo" },
                      { id: "mecanismo", label: "Clínica" },
                      { id: "calculo", label: "Cálculo" },
                      { id: "armadilha", label: "Erro Crítico" }
                    ].map(subTab => (
                      <button
                        key={subTab.id}
                        type="button"
                        onClick={() => setActiveDrugTab(subTab.id as any)}
                        className={cn(
                          "text-[9px] font-black uppercase text-center py-1 rounded-md cursor-pointer transition-all",
                          activeDrugTab === subTab.id
                            ? "bg-slate-950 text-white shadow-sm border border-slate-850/40"
                            : "text-slate-400 hover:text-slate-200"
                        )}
                      >
                        {subTab.label}
                      </button>
                    ))}
                  </div>

                  {/* Render tabs content */}
                  <div className="flex-1 text-xs leading-relaxed flex flex-col justify-between gap-2.5">
                    <div className="space-y-2">
                      {activeDrugTab === "mecanismo" && (
                        <div className="text-slate-300 animate-in fade-in duration-200">
                          <span className="font-bold text-slate-400 block text-[9px] uppercase mb-0.5">Indicação Médica Primária:</span>
                          <p>{drug.indication}</p>
                        </div>
                      )}

                      {activeDrugTab === "diluicao" && (
                        <div className="text-slate-300 animate-in fade-in duration-200 space-y-1.5">
                          <div>
                            <span className="font-bold text-slate-400 block text-[9px] uppercase mb-0.5">Diluição & Preparo Sugerido:</span>
                            <p className="bg-slate-900/40 p-2 border border-slate-900 rounded font-mono text-[10.5px] text-brand-blue leading-tight">{drug.preparation}</p>
                          </div>
                          <div>
                            <span className="font-bold text-slate-400 block text-[9px] uppercase mb-0.5">Velocidade / Vasão Recomendada:</span>
                            <p className="text-[11px]">{drug.speed}</p>
                          </div>
                        </div>
                      )}

                      {activeDrugTab === "armadilha" && (
                        <div className="bg-rose-950/20 border border-rose-900/40 p-2.5 rounded-lg text-rose-200 animate-in fade-in duration-200">
                          <span className="font-black text-rose-300 block text-[9px] uppercase mb-0.5 flex items-center gap-1">
                            ⚠️ ARMADILHA CLÍNICA / ERRO CRÍTICO
                          </span>
                          <p className="text-[11px] leading-snug">{drug.trap}</p>
                        </div>
                      )}

                      {activeDrugTab === "calculo" && (
                        <div className="text-slate-300 space-y-1 animate-in fade-in duration-200">
                          <span className="font-bold text-slate-400 block text-[9px] uppercase mb-0.5">Interpolação por Peso ({weight} kg):</span>
                          <p className="text-[10px] text-slate-400 leading-none mb-1">
                            Atualizado em tempo real pelo slider de peso do paciente.
                          </p>
                          <div className="bg-slate-900 border border-slate-850 p-2 rounded-lg text-[10.5px] font-mono text-emerald-300 break-words leading-tight">
                            {drug.calculator(weight)}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Bottom safety seal */}
                    <div className="pt-1.5 border-t border-slate-900 flex justify-between items-center text-[9px] text-slate-500 font-bold">
                      <span className="flex items-center gap-1 text-emerald-400/80">
                        <CheckCircle2 size={9} /> Calculado Ativo
                      </span>
                      <span>Bomba {drug.id === "noradrenalina" || drug.id === "adrenalina" || drug.id === "insulina" || drug.id === "amiodarona" ? "Sempre" : "Opcional"}</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        {/* RIGHT COLUMN: REPLAYING LIVE PRESCRIÇÃO TEXTAREA & ACTIONS (4/12) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 shadow-2xl flex flex-col gap-4 relative h-full">
            <div className="flex justify-between items-center border-b border-slate-800/80 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-0.5">
                  Cola de Prontuário Médico
                </span>
                <h3 className="text-white font-extrabold text-base flex items-center gap-2">
                  Prescrição Projetada do Cenário
                </h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  const texts: Record<PrescriptionTab, string> = {
                    cad: getDkaPrescription(),
                    ic: getIccPrescription(),
                    pac: getPacPrescription(),
                    sca: getScaPrescription(),
                    asma_dpoc: getAsmaDpocPrescription(),
                  };
                  handleCopy(texts[activeTab], "prescription");
                }}
                className={cn(
                  "py-2 px-4 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 border cursor-pointer",
                  copiedId === "prescription"
                    ? "bg-emerald-950 border-emerald-500 text-emerald-300"
                    : "bg-brand-blue/10 border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white",
                )}
              >
                {copiedId === "prescription" ? (
                  <>
                    <Check size={14} /> Prescrição Copiada!
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copiar para Prontuário
                  </>
                )}
              </button>
            </div>

            {/* Simulated Clinical Prescriber Screen */}
            <div className="flex-1 bg-slate-950 rounded-xl border border-slate-850 p-4 font-mono text-[11.5px] text-emerald-300 leading-relaxed overflow-y-auto max-h-[450px] whitespace-pre-wrap relative shadow-inner">
              <div className="absolute top-2 right-2 flex gap-1 items-center opacity-30 select-none">
                <span className="block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] uppercase font-bold text-emerald-500">
                  LIVE RENDER
                </span>
              </div>
              {(() => {
                if (activeTab === "cad") return getDkaPrescription();
                if (activeTab === "ic") return getIccPrescription();
                if (activeTab === "pac") return getPacPrescription();
                if (activeTab === "sca") return getScaPrescription();
                if (activeTab === "asma_dpoc") return getAsmaDpocPrescription();
                return "";
              })()}
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-900 flex flex-col gap-3">
              <h5 className="text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">
                Diretrizes de Auditoria & Segurança do Prontuário:
              </h5>
              <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
                <p>
                  • <strong>Termo de Responsabilidade:</strong> As informações
                  apresentadas são baseadas em diretrizes clínicas (SBC, GINA,
                  GOLD, KDIGO, AD-ALAD) e possuem caráter exclusivamente
                  educativo para internos e residentes.
                </p>
                <p>
                  • <strong>Confirmação de Identidade:</strong> Certifique-se
                  sempre de conferir as ampolas, alergias prévias e a velocidade
                  inicial na bomba antes de assinar eletronicamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
