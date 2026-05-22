import React, { useState } from 'react';
import { 
  Droplet, 
  Layers, 
  Activity, 
  Search, 
  Info, 
  AlertCircle, 
  ChevronRight,
  ClipboardCheck,
  Zap,
  Microscope,
  Stethoscope,
  Pill,
  ShieldCheck,
  Thermometer,
  User,
  History,
  FlaskConical,
  Beaker,
  Dna,
  BookOpen,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

// --- Data Types ---

interface Disease {
  id: string;
  name: string;
  fullName: string;
  shortDesc: string;
  brandColor: string;
  themeClasses: {
    bg: string;
    border: string;
    text: string;
    shadow: string;
    light: string;
  };
  epidemiology: { label: string, detail: string }[];
  physio: { step: string, desc: string }[];
  histology: { technique: string, finding: string }[];
  variants?: { name: string, location: string, prognosis: string, association: string }[];
  clinical: { type: string, findings: string[] }[];
  labs: { exam: string, expected: string, reason: string }[];
  etiology?: { type: string, mechanism: string, examples: string }[];
  treatment: {
    target: string;
    scheme: { phase: string, steps: string[] }[];
    patterns: { pattern: string, definition: string, action: string }[];
    sparing?: { agent: string, indication: string, evidence: string }[];
    raas?: string;
  };
  complications: { category: string, mechanics: string }[];
  pearls: string[];
  pillars?: string[];
  secondaryAlert?: { title: string, items: string[] };
  nextHook: string;
}

const GLOMERULAR_DISEASES: Disease[] = [
  {
    id: 'dlm',
    name: 'DLM',
    fullName: 'Doença por Lesão Mínima',
    shortDesc: 'Protótipo de síndrome nefrótica pura em crianças, reversível com corticoide.',
    brandColor: '#f59e0b', // amber-500
    themeClasses: {
      bg: 'bg-amber-500',
      border: 'border-amber-500',
      text: 'text-amber-500',
      shadow: 'shadow-[0_0_40px_rgba(245,158,11,0.3)]',
      light: 'bg-amber-500/10'
    },
    epidemiology: [
      { label: 'Faixa etária principal', detail: 'Crianças 2–8 anos (pico 3–5 anos)' },
      { label: 'Em adultos', detail: 'Segundo pico: > 60 anos' },
      { label: 'Prevalência pediátrica', detail: '70–90% da sínd. nefrótica em crianças' },
      { label: 'Prevalência em adultos', detail: '10–15% da sínd. nefrótica' },
      { label: 'Sexo', detail: 'M:F = 2:1 em crianças / igual em adultos' },
      { label: 'Associação em adultos', detail: 'Linfoma Hodgkin (5%), AINEs, lítio' }
    ],
    physio: [
      { step: 'Gatilho', desc: 'Infecção viral, atopia, fármaco ou linfoma ativam células T.' },
      { step: 'Imunologia', desc: 'Linfócitos T CD4+ disfuncionais produzem FATOR DE PERMEABILIDADE circulant (ex: suPAR, IL-13).' },
      { step: 'Lesão Podocitária', desc: 'Deleção do GLICOCÁLIX + Retração dos pedicelos (foot process effacement).' },
      { step: 'Perda de Barreira', desc: 'Diafragma de fenda desaparece e ocorre perda seletiva de CARGA NEGATIVA.' },
      { step: 'Clínica', desc: 'Proteinúria maciça SELETIVA (albumina), com endotélio e MBG intactos.' }
    ],
    histology: [
      { technique: 'Microscopia óptica (MO)', finding: 'NORMAL — glomérulos de aspecto normal.' },
      { technique: 'Imunofluorescência (IF)', finding: 'NEGATIVA — sem depósitos.' },
      { technique: 'Microscopia eletrônica (ME)', finding: 'Foot process effacement difuso (patognomônico).' }
    ],
    clinical: [
      { type: 'Síndrome Nefrótica', findings: ['Edema de início súbito (periorbitário/MMII)', 'Proteinúria maciça', 'Hipoalbuminemia (< 2.5 g/dL)', 'Anasarca em casos graves'] },
      { type: 'Ausências Importantes', findings: ['SEM hematúria dismórfica (endotélio ok)', 'SEM hipertensão (maioria)', 'SEM ↓ complemento', 'SEM azotemia (TFG preservada)'] }
    ],
    labs: [
      { exam: 'Proteinúria 24h', expected: '> 3,5 g/dia (adulto) / >40 mg/m²/h (criança)', reason: 'Lesão de podócito' },
      { exam: 'Albumina sérica', expected: '< 3,0 g/dL', reason: 'Perda urinária > síntese' },
      { exam: 'Lípides', expected: 'Colesterol e TG ↑', reason: 'Fígado compensa ↓oncótica' },
      { exam: 'Urina tipo 1', expected: 'Proteinúria ++++ sem hematúria', reason: 'Endotélio intacto' },
      { exam: 'Complemento', expected: 'Normal (C3 e C4)', reason: 'Sem ativação de imunocomplexos' },
      { exam: 'Creatinina', expected: 'Normal (maioria)', reason: 'TFG preservada' }
    ],
    treatment: {
      target: 'KDIGO 2021',
      scheme: [
        {
          phase: 'Crianças (Prednisona)',
          steps: [
            '60 mg/m²/dia (máx 60mg) por 4–6 semanas',
            'Depois 40 mg/m² em dias alternados por 4–6 semanas',
            'Desmame gradual'
          ]
        },
        {
          phase: 'Adultos (Prednisona)',
          steps: [
            '1 mg/kg/dia (máx 80mg) por 8–16 semanas',
            'Desmame mais lento que em crianças'
          ]
        }
      ],
      patterns: [
        { pattern: 'Corticossensível', definition: 'Remissão em ≤ 4 sem (criança) ou ≤ 16 sem (adulto)', action: 'Manter esquema padrão' },
        { pattern: 'Corticodependente', definition: 'Recaída ao reduzir ou 2 recaídas em 6 meses', action: 'Adicionar poupador' },
        { pattern: 'Corticorresistente', definition: 'Sem remissão após esquema completo', action: 'Biópsia + mudar conduta' }
      ],
      sparing: [
        { agent: 'Ciclofosfamida', indication: 'Corticodependente / Recidivante', evidence: 'Nível A' },
        { agent: 'Inibidores Calcineurina', indication: 'Resistente / Dependente', evidence: 'Nível A' },
        { agent: 'Rituximabe', indication: 'Refratário', evidence: 'Nível B' }
      ]
    },
    complications: [
      { category: 'Infecção', mechanics: 'Principal causa de morte em crianças (Peritonite por Pneumococo). Perda de IgG e opsoninas.' },
      { category: 'Trombose', mechanics: 'TVP, TEP, Veia Renal. Perda urinária de AT-III e Proteína C/S.' },
      { category: 'IRA', mechanics: 'Rara. Gerada por hipovolemia grave e edema intersticial.' }
    ],
    pearls: [
      'Causa mais comum de sínd. nefrótica em crianças.',
      'MO normal NÃO exclui — ME mostra foot process effacement.',
      'Não biopsia criança típica — biopsia se atípico ou resistente.',
      'Em adulto > 60 anos, sempre investigar Linfoma de Hodgkin.'
    ],
    pillars: [
      'Síndrome nefrótica pura em crianças',
      'Resposta rápida a corticoide (4-8 semanas)',
      'Ausência de hematúria e hipertensão',
      'Função renal e complemento normais',
      'MO normal (glomérulos "limpos")',
      'ME com fusão podocitária difusa'
    ],
    nextHook: 'GESF (Glomeruloesclerose Focal e Segmentar) — Onde o podócito não apenas "engulha", mas morre, gerando cicatriz permanente.'
  },
  {
    id: 'gesf',
    name: 'GESF',
    fullName: 'Glomeruloesclerose Segmentar e Focal',
    shortDesc: 'Principal causa de DRC terminal por GN primária no Ocidente, onde a morte podocitária gera cicatrizes permanentes.',
    brandColor: '#f97316', // orange-500
    themeClasses: {
      bg: 'bg-orange-500',
      border: 'border-orange-500',
      text: 'text-orange-500',
      shadow: 'shadow-[0_0_40px_rgba(249,115,22,0.3)]',
      light: 'bg-orange-500/10'
    },
    epidemiology: [
      { label: 'Faixa etária', detail: 'Qualquer idade (pico 20–45 anos)' },
      { label: 'Carga nos EUA', detail: '40% da sínd. nefrótica em adultos' },
      { label: 'Etnia & Genética', detail: 'Afrodescendentes (Risco 4x via APOL1)' },
      { label: 'Sexo', detail: 'M > F (especialmente na colapsante)' },
      { label: 'Incidência', detail: 'Triplicou nas últimas 3 décadas' },
      { label: 'Desfecho', detail: 'Principal GN primária levando à DRC Terminal' }
    ],
    physio: [
      { step: 'Agressão', desc: 'Múltiplas causas (fator circulante, vírus, genes) agridem o podócito.' },
      { step: 'Morte Celular', desc: 'Podócito entra em APOPTOSE ou destaca-se da membrana basal (MBG).' },
      { step: 'Sinéquia', desc: 'Área descoberta da MBG colapsa e adere à cápsula de Bowman.' },
      { step: 'Cicatriz', desc: 'Proliferação mesangial gera ESCLEROSE FOCAL e SEGMENTAR.' },
      { step: 'Vicioso', desc: 'Hiperfiltração nos néfrons restantes acelera a perda podocitária.' }
    ],
    histology: [
      { technique: 'Microscopia óptica (MO)', finding: 'ESCLEROSE FOCAL (alguns glomérulos) e SEGMENTAR (parte do tufo).' },
      { technique: 'Imunofluorescência (IF)', finding: 'IgM e C3 inespecíficos nas áreas de esclerose ("aprisionamento").' },
      { technique: 'Microscopia eletrônica (ME)', finding: 'Foot process effacement EXTENSO localizado.' }
    ],
    variants: [
      { name: 'NOS', location: 'Qualquer região', prognosis: 'Intermediário', association: 'Inespecífica / Idiopática' },
      { name: 'Perihilar', location: 'Hilo vascular', prognosis: 'Melhor', association: 'Hiperfiltração / Obesidade' },
      { name: 'Tip lesion', location: 'Polo tubular', prognosis: 'Excelente', association: 'Melhor resposta a corticoide' },
      { name: 'Colapsante', location: 'Todo o tufo', prognosis: 'Pior', association: 'HIV / APOL1 / COVID-19' }
    ],
    clinical: [
      { type: 'Perfil do Adulto', findings: ['Proteinúria MACIÇA (> 3.5g/dia) NÃO seletiva', 'Edema importante / Hipoalbuminemia', 'Hipertensão (frequente)', 'Hematúria micro em 30-50%'] },
      { type: 'Curso & Prognóstico', findings: ['Função renal pode estar ↓ no diagnóstico', 'Corticorresistência em 40-50% dos casos', 'Risco de recidiva no transplante (20-40%)'] }
    ],
    labs: [
      { exam: 'Urina 24h', expected: '> 3,5 g/dia, NÃO seletiva', reason: 'Lesão estrutural da barreira' },
      { exam: 'Sorologias', expected: 'HIV, Hep B/C Obrigatórios', reason: 'Excluir formas secundárias' },
      { exam: 'Genética', expected: 'APOL1 (G1/G2) se afrodescendente', reason: 'Muda prognóstico e decisão de TX' },
      { exam: 'Complemento', expected: 'Normal', reason: 'Mesmo mecanismo podocitário da DLM' },
      { exam: 'Hematúria', expected: 'Dismórfica em 50%', reason: 'Esclerose parcial da MBG' }
    ],
    etiology: [
      { type: 'Primária', mechanism: 'Fator circulante (suPAR / anti-CD40)', examples: 'Idiopática (80%)' },
      { type: 'Genética', mechanism: 'Mutações NPHS1/2, APOL1', examples: 'Resistente a imunossupr.' },
      { type: 'Adaptativa', mechanism: 'Hiperfiltração Glomerular', examples: 'Obesidade, Rim Único' },
      { type: 'Viral / Tóxica', mechanism: 'Lesão direta por Patógeno/Droga', examples: 'HIV, Heroína, Interferon' }
    ],
    treatment: {
      target: 'Algoritmo GESF — KDIGO 2021',
      scheme: [
        {
          phase: '1ª Linha: Prednisona',
          steps: [
            '1 mg/kg/dia (máx 80mg) por pelo menos 16 semanas',
            'Desmame lento após remissão completa (30-40% dos casos)'
          ]
        },
        {
          phase: '2ª Linha: Inib. Calcineurina',
          steps: [
            'Tacrolimus 0.1-0.2 mg/kg ou Ciclosporina 3-5 mg/kg',
            'Tempo: 4-6 meses para avaliar resposta'
          ]
        }
      ],
      patterns: [
        { pattern: 'Remissão Completa', definition: '30–40% com corticoide', action: 'Excelente desfecho' },
        { pattern: 'Corticorresistente', definition: '40–50% dos casos', action: 'Migrar para Tacrolimus/Ciclosporina' },
        { pattern: 'Recorrência TX', definition: '20–40% pós-transplante', action: 'Tratar com Plasmaférese' }
      ],
      sparing: [
        { agent: 'Inib. Calcineurina', indication: '1ª escolha na resistência', evidence: 'Nível A' },
        { agent: 'Micofenolato', indication: 'Alternativa ao Tacrolimus', evidence: 'Nível B' },
        { agent: 'Sparsentan', indication: 'Inibidor AT1 + Endotelina', evidence: 'Aprovado FDA 2023' }
      ],
      raas: 'IECA ou BRA Obrigatório em TODOS (Nível A). Reduz proteinúria em 30-50% e retarda progressão.'
    },
    complications: [
      { category: 'DRC Terminal', mechanics: 'GESF é a maior causa de diálise por GN primária. Progressão em 5-10 anos.' },
      { category: 'Sind. Nefrótica', mechanics: 'Hiperlipidemia grave, anasarca e risco trombótico (perda de AT-III).' },
      { category: 'Recidiva no Rim', mechanics: 'Fator circulante ataca o rim transplantado em semanas após cirurgia.' }
    ],
    pearls: [
      'Biópsia é mandatória (lesão focal pode gerar erro de amostragem).',
      'Sempre excluir HIV em variantes colapsantes.',
      'APOL1 G1/G2 confere risco 10x maior de GESF em afrodescendentes.',
      'O fator circulante é sistêmico: GESF pode "voltar" no transplante.'
    ],
    pillars: [
      'Síndrome nefrótica progressiva em adultos',
      'Hematúria microscópica presente (30-50%)',
      'Hipertensão arterial no diagnóstico',
      'Função renal reduzida na apresentação',
      'Proteinúria não-seletiva (perda de IgG)',
      'MO com esclerose focal e segmentar'
    ],
    secondaryAlert: {
      title: 'Alertas para Formas Secundárias',
      items: [
        'HIV+ → Variante Colapsante',
        'Obesidade/Rim Único → Adaptativa',
        'Refluxo Vesico-Ureteral → Hiperfiltração',
        'Heroína/Interferon → Tóxica',
        'História Familiar → GESF Genética'
      ]
    },
    nextHook: 'NEFROPATIA POR IgA (BERGER) — Onde a hematúria macroscópica "sincronizada" com resfriados é o sinal de alerta mestre.'
  },
  {
    id: 'igan',
    name: 'IgAN',
    fullName: 'Nefropatia por IgA',
    shortDesc: 'Glomerulopatia primária mais comum no mundo, marcada por hematúria macroscópica sincrônica com infecções de mucosas.',
    brandColor: '#10b981', // emerald-500
    themeClasses: {
      bg: 'bg-emerald-500',
      border: 'border-emerald-500',
      text: 'text-emerald-500',
      shadow: 'shadow-[0_0_40px_rgba(16,185,129,0.3)]',
      light: 'bg-emerald-500/10'
    },
    epidemiology: [
      { label: 'Faixa etária', detail: 'Pico entre 15–35 anos' },
      { label: 'Prevalência Mundial', detail: 'Principal causa de GN primária no globo' },
      { label: 'Etnia', detail: 'Mais comum em Asiáticos e Caucasianos' },
      { label: 'Sexo', detail: 'Masculino (2-3:1)' },
      { label: 'Contexto Brasil 🇧🇷', detail: 'Subdiagnosticada; principal causa de hematúria glomerular persistente' }
    ],
    physio: [
      { step: 'Hit 1', desc: 'Produção de IgA1 galactose-deficiente (Gd-IgA1) na mucosa após infecção.' },
      { step: 'Hit 2', desc: 'Produção de autoanticorpos (IgG/IgA) contra Gd-IgA1 circulante.' },
      { step: 'Hit 3', desc: 'Formação e DEPÓSITO MESANGIAL de imunocomplexos ativando o complemento.' },
      { step: 'Hit 4', desc: 'Proliferação mesangial + Inflamação mediada por citocinas (IL-6, TNF).' },
      { step: 'Dano', desc: 'Ruptura da MBG (hematúria) e lesão podocitária (proteinúria).' }
    ],
    histology: [
      { technique: 'Microscopia óptica (MO)', finding: 'Hipercelularidade MESANGIAL difusa e expansão da matriz.' },
      { technique: 'Imunofluorescência (IF)', finding: 'Depósito dominante de IgA e C3 no mesângio (Padrão-Ouro).' },
      { technique: 'Classificação Oxford', finding: 'MEST-C: Mesangial (M), Endocapilar (E), Sclerose (S), Tubular (T), Crescent (C).' }
    ],
    variants: [
      { name: 'M (Mesangial)', location: 'Matriz/Células', prognosis: 'Risco Linear', association: '> 50% dos glomérulos' },
      { name: 'E (Endocapilar)', location: 'Lúmen Capilar', prognosis: 'Agudo', association: 'Responde bem a corticoide' },
      { name: 'S (Esclerose)', location: 'Segmentar', prognosis: 'Crônico', association: 'Dano estrutural persistente' },
      { name: 'T (Tubular)', location: 'Interstício', prognosis: 'Pior', association: 'Atrofia e Fibrose irreversível' },
      { name: 'C (Crescentes)', location: 'Espaço de Bowman', prognosis: 'Urgente', association: 'Indica GN Rapidamente Progressiva' }
    ],
    clinical: [
      { type: 'Hematúria Macroscópica', findings: ['Sincrônica com URI (24-72h)', 'Urina cor de Coca-Cola/Chá', 'Autolimitada (3-7 dias)'] },
      { type: 'Persistência & Risco', findings: ['Hematúria micro persistente e assintomática', 'Proteinúria > 1g/d (alvo principal)', 'Hipertensão Arterial (30-40%)'] }
    ],
    labs: [
      { exam: 'Urina Tipo 1 (EAS)', expected: 'Hemácias Dismórficas + Cilindros Hemáticos', reason: 'Origem glomerular confirmada' },
      { exam: 'Proteinúria 24h', expected: 'Pode variar de < 0,5g a > 3,5g', reason: 'Marcador principal de progressão' },
      { exam: 'Complemento (C3/C4)', expected: 'NORMAIS', reason: 'Ativação via alternativa/lectina é focal' },
      { exam: 'IgA Sérica', expected: 'Elevada em 30-50%', reason: 'Sugestivo, mas não diagnóstico' },
      { exam: 'FG (Creatinina)', expected: 'Normal ou reduzida', reason: 'Define urgência da biópsia' }
    ],
    treatment: {
      target: 'KDIGO 2021 + Atualização 2024',
      scheme: [
        {
          phase: 'Suporte Máximo (Todos)',
          steps: [
            'IECA ou BRA em dose máxima tolerada (Enalapril/Losartana)',
            'Controle de PA < 130/80 mmHg (ideal < 120/80)',
            'Dieta hipossódica (< 2g Na/dia)',
            'SGLT2i (Dapagliflozina) se proteinúria persistente'
          ]
        },
        {
          phase: 'Imunossupressão (Se Risco)',
          steps: [
            'Prednisona 0.8-1 mg/kg/dia se proteinúria > 1g após 3-6 meses de suporte',
            'Budesonida entérica (Nefecon) se disponível (alvo mucosa)'
          ]
        }
      ],
      patterns: [
        { pattern: 'Baixo Risco', definition: 'Prot < 0.5g/d e FG normal', action: 'Monitorar anualmente' },
        { pattern: 'Alto Risco', definition: 'Prot > 1g/d persistente ou MEST-C elevado', action: 'Considerar corticoide' },
        { pattern: 'GNRP', definition: 'Queda rápida de FG + Crescentes', action: 'Pulsoterapia URGENTE' }
      ],
      raas: 'IECA/BRA Obrigatório se proteinúria > 0,5g/d. SGLT2i agora é Classe I (Nível A) para retardar progressão.'
    },
    complications: [
      { category: 'DRC Terminal', mechanics: '30-40% evoluem para diálise em 20 anos. Proteinúria é o motor.' },
      { category: 'Recorrência TX', mechanics: 'Altíssima frequência de depósitos de IgA no enxerto (quase 100%).' },
      { category: 'Vasculite IgA', mechanics: 'Envolvimento sistêmico (púrpura, dor abdominal) - ex-Henoch-Schönlein.' }
    ],
    pearls: [
      'Gatilho de mucosa = hematúria sincronizada (diferente da GNPE).',
      'Proteinúria é o alvo terapêutico, não a hematúria.',
      'MEST-C: T1 ou T2 é o preditor mais forte de perda renal.',
      'SGLT2i é o novo pilar da proteção renal em IgA.'
    ],
    pillars: [
      'Hematúria macro pós-faringite (24-72h)',
      'Complemento C3 e C4 normais',
      'IgA dominante na Imunofluorescência',
      'Proteinuária persistente > 1g/d',
      'Expansão mesangial na Microscopia Óptica',
      'Risco de progressão via Classificação Oxford'
    ],
    nextHook: 'NEFROPATIA MEMBRANOSA — Onde o podócito é atacado por anticorpos (anti-PLA2R) que formam "espículas" na MBG.'
  },
  {
    id: 'nm',
    name: 'NM',
    fullName: 'Glomerulopatia Membranosa',
    shortDesc: 'Síndrome nefrótica insidiosa em adultos, marcada pelo ataque autoimune ao podócito (anti-PLA2R) e alto risco trombótico.',
    brandColor: '#6366f1', // indigo-500
    themeClasses: {
      bg: 'bg-indigo-500',
      border: 'border-indigo-500',
      text: 'text-indigo-500',
      shadow: 'shadow-[0_0_40px_rgba(99,102,241,0.3)]',
      light: 'bg-indigo-500/10'
    },
    epidemiology: [
      { label: 'Faixa etária', detail: 'Principalmente adultos 40–60 anos' },
      { label: 'Sexo', detail: 'Masculino (2:1)' },
      { label: 'Prevalência', detail: '2ª causa mais comum de SN em adultos' },
      { label: 'Etiologia Primária', detail: '70–80% dos casos (Autoimune)' },
      { label: 'Risco Neoplásico', detail: '10–20% dos casos em > 50 anos são secundários' }
    ],
    physio: [
      { step: 'Auto-Ac', desc: 'Produção de anticorpos Anti-PLA2R (receptor de fosfolipase A2).' },
      { step: 'Depósito', desc: 'Formação de imunocomplexos IN SITU na face subepitelial da MBG.' },
      { step: 'Complemento', desc: 'Ativação do complexo de ataque à membrana (C5b-9) no podócito.' },
      { step: 'Espessamento', desc: 'MBG tenta englobar os depósitos, gerando "espículas" (spikes).' },
      { step: 'Clínica', desc: 'SN insidiosa com proteinúria não-seletiva e hipoalbuminemia grave.' }
    ],
    histology: [
      { technique: 'Microscopia óptica (MO)', finding: 'Espessamento difuso da MBG com "espículas" na Prata.' },
      { technique: 'Imunofluorescência (IF)', finding: 'Depósito GRANULAR de IgG e C3 ao longo das alças capilares.' },
      { technique: 'Microscopia eletrônica (ME)', finding: 'Depósitos subepiteliais densos (estadiamento de Ehrenreich).' }
    ],
    clinical: [
      { type: 'Síndrome Nefrótica', findings: ['Início INSIDIOSO (semanas/meses)', 'Edema progressivo e anasarca', 'Hipoalbuminemia muitas vezes < 2g/dL'] },
      { type: 'Eventos Vasculares', findings: ['Risco altíssimo de TROMBOSE de veia renal', 'TEP e TVP frequentes', 'Hematúria micro em 50%'] }
    ],
    labs: [
      { exam: 'Anti-PLA2R', expected: 'Positivo em 70-80% das primárias', reason: 'Marcador diagnóstico não-invasivo' },
      { exam: 'Rastreio Neoplasia', expected: 'Obrigatório em > 50 anos', reason: 'Forma paraneoplásica é comum' },
      { exam: 'Albumina Sérica', expected: 'Frequentemente < 2,5 g/dL', reason: 'Gera estado de hipercoagulabilidade' },
      { exam: 'Sorologias', expected: 'Hepatite B, Lúpus e Sífilis', reason: 'Excluir formas secundárias' }
    ],
    treatment: {
      target: 'KDIGO 2021 (Risco-Estratificado)',
      scheme: [
        {
          phase: 'Suporte & Profilaxia',
          steps: [
            'IECA/BRA em dose máxima + SGLT2i',
            'Anticoagulação se Albumina < 2.5g/dL + Fatores de Risco',
            'Controle pressórico rigoroso < 130/80'
          ]
        },
        {
          phase: 'Imunossupressão (Se Risco)',
          steps: [
            '1ª Linha: Rituximabe (1g IV, repete em 2 sem)',
            'Alternativa: Esquema Ponticelli (Ciclofosfamida + Corticoide)',
            'CNI (Tacrolimus) se contraindicação aos outros'
          ]
        }
      ],
      patterns: [
        { pattern: 'Baixo Risco', definition: 'Prot < 4g/d e FG normal', action: 'Observar 6 meses' },
        { pattern: 'Alto Risco', definition: 'Prot > 8g/d ou queda de FG', action: 'Iniciar Rituximabe' },
        { pattern: 'Resposta', definition: 'Queda de Anti-PLA2R precede remissão', action: 'Monitorar títulos' }
      ],
      raas: 'IECA/BRA Obrigatório. Anticoagulação com Warfarina é recomendada se albumina for muito baixa.'
    },
    complications: [
      { category: 'Trombose Veia Renal', mechanics: 'Tríade: Dor lombar, hematúria e piora súbita da proteinúria.' },
      { category: 'Neoplasia Oculta', mechanics: 'Marcadores tumorais e TCs devem ser feitos no diagnóstico no idoso.' }
    ],
    pearls: [
      'Anti-PLA2R positivo pode evitar biópsia se clínica for típica.',
      'Sempre rastrear câncer em idoso com membranosa.',
      'A glomerulopatia que mais trombosa veia renal.',
      'Remissão espontânea ocorre em 30% — paciência se risco for baixo.'
    ],
    pillars: [
      'Síndrome nefrótica insidiosa no adulto',
      'Anticorpo Anti-PLA2R positivo',
      'Espessamento da membrana basal ("Spikes")',
      'Rastreio obrigatório de neoplasias ocultas',
      'Alto risco de fenômenos tromboembólicos',
      'Depósito granular capilar de IgG/C3'
    ],
    secondaryAlert: {
      title: 'Checklist para NM Secundária',
      items: [
        'Idade > 50 anos → Neoplasia',
        'Lúpus (Classe V)',
        'Hepatite B (HBsAg+)',
        'Uso de AINEs / Ouro',
        'Sífilis Secundária'
      ]
    },
    nextHook: 'GLOMERULONEFRITE MEMBRANOPROLIFERATIVA (MPGN) — Onde o complemento é consumido agressivamente e a MBG se duplica.'
  }
];

// --- Components ---

const SectionHeader = ({ title, icon: Icon, color, barColor }: { title: string, icon: any, color: string, barColor: string }) => (
  <div className="flex items-center gap-4 mb-10">
    <div className={cn("w-16 h-16 rounded-3xl bg-slate-900 flex items-center justify-center border border-slate-800 shadow-2xl", color)}>
      <Icon size={32} />
    </div>
    <div>
      <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none">{title}</h2>
      <div className={cn("h-1 w-20 mt-2 rounded-full", barColor)} />
    </div>
  </div>
);

const InfoCard = ({ title, icon: Icon, children, className }: { title: string, icon?: any, children: React.ReactNode, className?: string }) => (
  <div className={cn("bg-slate-900 border-2 border-slate-800 rounded-[3rem] p-8 relative overflow-hidden group", className)}>
    {Icon && <Icon className="absolute top-6 right-6 text-slate-800 group-hover:text-slate-700 transition-colors" size={48} />}
    <div className="relative z-10">
      <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] italic mb-6">{title}</h3>
      {children}
    </div>
  </div>
);

export default function GlomerulopatiasMain() {
  const [triageStep, setTriageStep] = useState<'syndrome' | 'complement' | 'content'>('syndrome');
  const [selectedProfile, setSelectedProfile] = useState<'nefrotico' | 'nefritico'>('nefrotico');
  const [selectedDisease, setSelectedDisease] = useState<string>('dlm');
  const disease = GLOMERULAR_DISEASES.find(d => d.id === selectedDisease) || GLOMERULAR_DISEASES[0];

  const NEXT_DISEASES = [
    { id: 'dlm', name: 'DLM', label: 'Lesão Mínima', color: 'bg-amber-500', shadow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]' },
    { id: 'gesf', name: 'GESF', label: 'Focal e Segmentar', color: 'bg-orange-600', shadow: 'shadow-[0_0_30px_rgba(234,88,12,0.3)]' },
    { id: 'nm', name: 'NM', label: 'Membranosa', disabled: false, color: 'bg-indigo-500', shadow: 'shadow-[0_0_30px_rgba(99,102,241,0.3)]' },
    { id: 'igan', name: 'IgAN', label: 'Nefropatia por IgA', disabled: false, color: 'bg-emerald-500', shadow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]' }
  ];

  const [showSuspicionGuide, setShowSuspicionGuide] = useState(false);
  const [showComparisonGuide, setShowComparisonGuide] = useState(false);
  const [showComplementDiseases, setShowComplementDiseases] = useState(false);

  return (
    <div className="flex flex-col gap-12 pb-20 animate-in fade-in duration-700">
      
      <AnimatePresence mode="wait">
        {triageStep === 'syndrome' && (
          <motion.div 
            key="syndrome"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="flex flex-col gap-10"
          >
            <div className="text-center space-y-4">
                <h2 className="text-[11px] font-black text-brand-blue uppercase tracking-[0.4em] italic">Screening Inicial</h2>
                <h1 className="text-5xl font-black text-white italic tracking-tighter">Qual o Perfil Clínico Dominante?</h1>
                <p className="text-slate-400 italic max-w-2xl mx-auto">Identifique a síndrome glomerular principal para direcionar o raciocínio diagnóstico.</p>
                <div className="pt-4">
                  <button 
                    onClick={() => setShowComparisonGuide(true)}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[10px] font-black uppercase italic tracking-widest hover:bg-slate-700 hover:text-white transition-all shadow-xl"
                  >
                    <BookOpen size={16} className="text-brand-blue" />
                    Comparativo: Nefrótica vs Nefrítica
                  </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Perfil Nefrótico */}
                <button 
                  onClick={() => {
                    setSelectedProfile('nefrotico');
                    setTriageStep('complement');
                  }}
                  className="p-12 rounded-[4rem] bg-indigo-500/5 border-2 border-indigo-500/20 hover:border-indigo-500 transition-all group relative overflow-hidden text-left"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Droplet size={200} />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <div className="w-20 h-20 rounded-3xl bg-indigo-500 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/20">
                            <Droplet size={40} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black text-white italic tracking-tighter">Perfil Nefrótico</h3>
                            <p className="text-indigo-400 font-black text-xs uppercase tracking-widest italic mt-2">Dano ao Podócito (Barreira)</p>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Proteinúria maciça (> 3,5 g/24h)',
                                'Hipoalbuminemia importante',
                                'Edema / Anasarca súbito',
                                'Dislipidemia (fígado compensa)'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 italic text-sm">
                                    <ShieldCheck className="text-indigo-500 shrink-0" size={16} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-indigo-500/10 flex items-center gap-3 text-indigo-400">
                            <span className="text-[10px] font-black uppercase tracking-widest italic">Avançar Raciocínio</span>
                            <ChevronRight size={16} />
                        </div>
                    </div>
                </button>

                {/* Perfil Nefrítico */}
                <button 
                  onClick={() => {
                    setSelectedProfile('nefritico');
                    setTriageStep('complement');
                  }}
                  className="p-12 rounded-[4rem] bg-rose-500/5 border-2 border-rose-500/20 hover:border-rose-500 transition-all group relative overflow-hidden text-left"
                >
                    <div className="absolute top-0 right-0 p-12 opacity-5">
                        <Activity size={200} />
                    </div>
                    <div className="relative z-10 space-y-6">
                        <div className="w-20 h-20 rounded-3xl bg-rose-500 flex items-center justify-center text-white shadow-2xl shadow-rose-500/20">
                            <Activity size={40} />
                        </div>
                        <div>
                            <h3 className="text-4xl font-black text-white italic tracking-tighter">Perfil Nefrítico</h3>
                            <p className="text-rose-400 font-black text-xs uppercase tracking-widest italic mt-2">Inflamação (Endotélio/Mesângio)</p>
                        </div>
                        <ul className="space-y-3">
                            {[
                                'Hematúria Dismórfica',
                                'Hipertensão Arterial (HAS)',
                                'Oligúria e Azotemia',
                                'Edema moderado (volemia)'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300 italic text-sm">
                                    <AlertCircle className="text-rose-500 shrink-0" size={16} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-rose-500/10 flex items-center gap-3 text-rose-400">
                            <span className="text-[10px] font-black uppercase tracking-widest italic">Ver Exemplo (IgA)</span>
                            <ChevronRight size={16} />
                        </div>
                    </div>
                </button>
            </div>
          </motion.div>
        )}

        {triageStep === 'complement' && (
          <motion.div 
             key="complement"
             initial={{ opacity: 0, x: 50 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: -50 }}
             className="flex flex-col gap-10"
          >
            <div className="flex items-center justify-between">
                <button 
                  onClick={() => setTriageStep('syndrome')}
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black italic tracking-widest"
                >
                    <ChevronRight className="rotate-180" size={16} />
                    Voltar
                </button>
                <div className="text-right">
                    <h4 className={cn(
                        "text-[10px] font-black uppercase tracking-widest italic",
                        selectedProfile === 'nefrotico' ? "text-indigo-400" : "text-rose-400"
                    )}>
                        Perfil {selectedProfile === 'nefrotico' ? 'Nefrótico' : 'Nefrítico'} Selecionado
                    </h4>
                </div>
            </div>

            <div className="text-center space-y-4">
                <h1 className="text-5xl font-black text-white italic tracking-tighter">O Complemento está Consumido?</h1>
                <p className="text-slate-400 italic max-w-2xl mx-auto">
                    O status do sistema complemento é o maior divisor de águas nas {selectedProfile === 'nefrotico' ? 'síndromes nefróticas' : 'síndromes nefríticas'}.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* NÃO Consome Complemento */}
                <button 
                  onClick={() => setTriageStep('content')}
                  className="p-12 rounded-[4rem] bg-emerald-500/5 border-2 border-emerald-500/20 hover:border-emerald-500 transition-all group relative overflow-hidden text-left"
                >
                    <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white italic tracking-tighter leading-none">NÃO Consome<br/>Complemento</h3>
                        <p className="text-xs text-slate-400 italic leading-relaxed">C3 e C4 Normais. {selectedProfile === 'nefrotico' ? 'Indica lesão podocitária pura ou depósitos não-clássicos.' : 'Indica glomerulopatias paucimunes ou por IgA.'}</p>
                        <div className="grid grid-cols-1 gap-2 pt-4">
                            {(selectedProfile === 'nefrotico' 
                                ? ['DLM (Lesão Mínima)', 'GESF (Focal e Segmentar)', 'Nefropatia por IgA (Berger)']
                                : ['Nefropatia por IgA (Berger)', 'Vasculites ANCA+ (Paucimune)', 'Púrpura de Henoch-Schönlein']
                            ).map((d, i) => (
                                <div key={i} className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold text-emerald-400 italic">
                                    {d}
                                </div>
                            ))}
                        </div>
                    </div>
                </button>

                {/* Consome Complemento */}
                <button 
                  onClick={() => setShowComplementDiseases(true)}
                  className="p-12 rounded-[4rem] bg-amber-500/5 border-2 border-amber-500/20 hover:border-amber-500 transition-all group relative overflow-hidden text-left"
                >
                    <div className="relative z-10 space-y-6">
                        <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-white">
                            <FlaskConical size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white italic tracking-tighter leading-none">Consome<br/>Complemento</h3>
                        <p className="text-xs text-slate-400 italic leading-relaxed">↓ C3 e/ou ↓ C4. Indica via clássica ou alternativa ativada (Imunocomplexos).</p>
                        <div className="grid grid-cols-1 gap-2 pt-4">
                            {(selectedProfile === 'nefrotico'
                                ? ['Lúpus (LES)', 'MPGN (Membranoprolif.)', 'Crioglobulinemia']
                                : ['GN Pós-Estreptocócica (GNPE)', 'Nefrite Lúpica (LES)', 'GN Membranoproliferativa']
                            ).map((d, i) => (
                                <div key={i} className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] font-black text-amber-500 uppercase italic">
                                    {d}
                                </div>
                            ))}
                        </div>
                        <div className="pt-6 border-t border-amber-500/10 flex items-center gap-3 text-amber-500">
                            <span className="text-[10px] font-black uppercase tracking-widest italic">Ver Perfis Clínicos</span>
                            <ChevronRight size={16} />
                        </div>
                    </div>
                </button>
            </div>
          </motion.div>
        )}

        {triageStep === 'content' && (
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
            <div className="flex items-center justify-between">
                <button 
                  onClick={() => setTriageStep('complement')}
                  className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-black italic tracking-widest"
                >
                    <ChevronRight className="rotate-180" size={16} />
                    Reiniciar Raciocínio
                </button>
            </div>

            {/* Navigation Pipeline */}
            <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
                <Layers className="text-brand-blue" size={20} />
                <h4 className="text-sm font-black text-white uppercase italic tracking-widest">Trilha de Estudo: Glomerulopatias Primárias</h4>
            </div>
            <button 
                onClick={() => setShowSuspicionGuide(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-brand-blue text-[10px] font-black uppercase italic tracking-widest hover:bg-brand-blue/20 transition-all"
            >
                <Search size={14} />
                Guia de Suspeição
            </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {NEXT_DISEASES.map((d, idx) => (
              <button
                key={d.id}
                disabled={d.disabled}
                onClick={() => setSelectedDisease(d.id)}
                className={cn(
                  "p-6 rounded-[2rem] border-2 transition-all duration-300 relative group overflow-hidden",
                  selectedDisease === d.id 
                    ? cn(d.color, "border-transparent", d.shadow) 
                    : d.disabled 
                        ? "bg-slate-900/50 border-slate-800 opacity-40 cursor-not-allowed"
                        : "bg-slate-900 border-slate-800 hover:border-slate-600"
                )}
              >
                <div className="relative z-10 flex flex-col items-start gap-1">
                    <span className={cn(
                        "text-[9px] font-black uppercase tracking-widest",
                        selectedDisease === d.id ? "text-white/60" : "text-slate-500"
                    )}>GN {idx + 1}</span>
                    <span className={cn(
                        "text-xl font-black italic tracking-tighter",
                        selectedDisease === d.id ? "text-white" : "text-slate-200"
                    )}>{d.name}</span>
                    <span className={cn(
                        "text-[10px] font-bold italic opacity-60",
                        selectedDisease === d.id ? "text-white" : "text-slate-400"
                    )}>{d.label}</span>
                </div>
              </button>
            ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={selectedDisease}
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: -30 }}
           transition={{ duration: 0.5, ease: "easeOut" }}
           className="space-y-12"
        >
          {/* Header Info */}
          <div className={cn("p-12 rounded-[4rem] bg-slate-900 border-2 relative overflow-hidden transition-colors duration-500", disease.themeClasses.border.replace('border-', 'border-') + '/20')}>
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Microscope size={240} />
            </div>
            <div className="relative z-10 max-w-3xl">
                <div className={cn("inline-flex items-center gap-2 px-6 py-2 rounded-full border text-xs font-black uppercase italic tracking-widest mb-6 transition-all duration-500", disease.themeClasses.light, disease.themeClasses.border.replace('border-', 'border-') + '/30', disease.themeClasses.text)}>
                    <Droplet size={14} />
                    Glomerulopatia Primária
                </div>
                <h1 className="text-6xl font-black text-white italic tracking-tighter mb-4 leading-none">
                    {disease.fullName}
                </h1>
                <p className="text-2xl text-slate-400 italic leading-relaxed font-medium">
                    {disease.shortDesc}
                </p>
            </div>
          </div>

          {/* Main Grid T-Layout */}
          <div className="space-y-12">
            
            {/* Top Row: Pathophysiology (The "Why") */}
            <InfoCard title="Fisiopatologia de Precisão" icon={Activity}>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    {disease.physio.map((p, i) => (
                        <div key={i} className="relative space-y-3 p-6 rounded-3xl bg-slate-800/50 border border-slate-700/30">
                            <div className={cn("text-[10px] font-black uppercase tracking-widest italic", disease.themeClasses.text)}>
                                {i + 1}. {p.step}
                            </div>
                            <p className="text-sm text-slate-200 italic leading-snug">{p.desc}</p>
                            {i < disease.physio.length - 1 && (
                                <ChevronRight className="absolute -right-4 top-1/2 -translate-y-1/2 text-slate-700 hidden md:block" size={24} />
                            )}
                        </div>
                    ))}
                </div>
            </InfoCard>

            {/* Middle Row: Balanced 2-Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Epidemiology, Clinical & Pillars */}
                <div className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <InfoCard title="Epidemiologia & Alvos" icon={User} className="h-full">
                            <div className="grid grid-cols-1 gap-y-6">
                                {disease.epidemiology.map((e, i) => (
                                    <div key={i} className="space-y-1">
                                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">{e.label}</p>
                                        <p className="text-base text-white font-black italic line-clamp-2">{e.detail}</p>
                                    </div>
                                ))}
                            </div>
                        </InfoCard>

                        {disease.pillars && (
                            <InfoCard title="Os 6 Pilares do Diagnóstico" icon={Layers} className="h-full">
                                <div className="space-y-3">
                                    {disease.pillars.map((pill, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                                            <ShieldCheck size={14} className={disease.themeClasses.text} />
                                            <span className="text-[11px] text-slate-200 font-bold italic line-clamp-1">{pill}</span>
                                        </div>
                                    ))}
                                </div>
                            </InfoCard>
                        )}
                    </div>

                    <InfoCard title="Espectro Clínico (Semio)" icon={Stethoscope}>
                        <div className="space-y-10">
                            {disease.clinical.map((c, i) => (
                                <div key={i} className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className={cn("h-1 w-8 rounded-full", disease.themeClasses.bg)} />
                                        <h4 className="text-sm font-black text-white uppercase italic tracking-widest">{c.type}</h4>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {c.findings.map((f, idx) => (
                                            <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/50">
                                                <AlertCircle size={14} className="text-slate-500" />
                                                <span className="text-sm text-slate-200 italic">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </InfoCard>

                    {disease.secondaryAlert && (
                         <div className={cn("p-10 rounded-[3rem] border-2 relative overflow-hidden group", disease.themeClasses.border + "/20", disease.themeClasses.light)}>
                            <AlertCircle className="absolute -top-4 -right-4 text-white/5" size={120} />
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className={cn("p-2 rounded-xl", disease.themeClasses.bg)}>
                                        <Stethoscope className="text-white" size={18} />
                                    </div>
                                    <h4 className="text-xl font-black text-white uppercase italic tracking-tighter">{disease.secondaryAlert.title}</h4>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {disease.secondaryAlert.items.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                            <div className={cn("w-1.5 h-1.5 rounded-full", disease.themeClasses.bg)} />
                                            <span className="text-xs text-white font-bold italic">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[10px] text-slate-400 italic">Pesquisar SEMPRE antes de iniciar imunossupressão agressiva.</p>
                            </div>
                         </div>
                    )}
                </div>

                {/* Right: Histology & Lab */}
                <div className="space-y-12">
                    <InfoCard title="Arquitetura Histológica" icon={Microscope}>
                        <div className="space-y-6">
                            {disease.histology.map((h, i) => (
                                <div key={i} className="p-8 rounded-[3rem] bg-slate-800 border-2 border-slate-700 flex flex-col gap-2 group/h">
                                    <div className="flex items-center justify-between">
                                        <h4 className={cn("text-sm font-black uppercase italic tracking-widest", disease.themeClasses.text)}>{h.technique}</h4>
                                        {h.finding.toLowerCase().includes('normal') ? (
                                            <ShieldCheck className="text-emerald-500" size={20} />
                                        ) : (
                                            <AlertCircle className="text-rose-500" size={20} />
                                        )}
                                    </div>
                                    <p className="text-xl text-white font-black italic tracking-tight">{h.finding}</p>
                                </div>
                            ))}

                            {disease.variants && (
                                <div className="p-10 rounded-[3.5rem] bg-slate-900 border-2 border-slate-800 space-y-8">
                                    <div className="flex items-center gap-3">
                                        <Layers className="text-brand-blue" size={20} />
                                        <h4 className="text-sm font-black text-white uppercase italic tracking-widest">Variantes de Columbia</h4>
                                    </div>
                                    <div className="space-y-6">
                                        {disease.variants.map((v, i) => (
                                            <div key={i} className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-800 last:border-0 last:pb-0">
                                                <div>
                                                    <p className="text-xl font-black text-white italic">{v.name}</p>
                                                    <p className="text-[10px] text-slate-500 uppercase italic mb-2">Local/Foco: {v.location}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className={cn(
                                                        "text-xs font-black uppercase italic mb-1",
                                                        v.prognosis.includes('Excelente') ? "text-emerald-500" : 
                                                        v.prognosis.includes('Melhor') ? "text-indigo-400" : "text-rose-500"
                                                    )}>Prog: {v.prognosis}</p>
                                                    <p className="text-[10px] text-slate-400 italic">{v.association}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="p-8 rounded-[3rem] bg-amber-500/5 border-2 border-amber-500/20">
                                <p className="text-xs text-amber-200 italic leading-relaxed">
                                    <span className="font-black uppercase">Nota Biópsia:</span> {disease.id === 'gesf' ? 'Mandatória em todos os casos para definir padrão e excluir causas secundárias.' : 'Em crianças típicas, não se biopsia de rotina.'}
                                </p>
                            </div>
                        </div>
                    </InfoCard>

                    <InfoCard title="Perfil Laboratorial" icon={FlaskConical}>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-800">
                                        <th className="pb-4 text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Parâmetro</th>
                                        <th className="pb-4 text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Expectativa</th>
                                        <th className="pb-4 text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Racional Médico</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {disease.labs.map((l, i) => (
                                        <tr key={i} className="group/row">
                                            <td className="py-5 pr-4 text-sm font-black text-white italic">{l.exam}</td>
                                            <td className={cn("py-5 pr-4 text-sm font-bold italic", disease.themeClasses.text)}>{l.expected}</td>
                                            <td className="py-5 text-xs text-slate-400 italic">{l.reason}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </InfoCard>
                </div>
            </div>

            <InfoCard title="Manejo Terapêutico Estruturado" icon={Pill}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Column 1: Core Scheme */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Protocolo de Ataque</h4>
                        <div className="space-y-6">
                            {disease.treatment.scheme.map((s, i) => (
                                <div key={i} className="p-8 rounded-[3rem] bg-indigo-500/10 border-2 border-indigo-500/20 space-y-4">
                                     <div className="flex items-center gap-3">
                                        <Pill className="text-indigo-400" size={20} />
                                        <span className="text-sm font-black text-white uppercase italic">{s.phase}</span>
                                     </div>
                                     <ul className="space-y-2">
                                        {s.steps.map((step, idx) => (
                                            <li key={idx} className="text-xs text-slate-300 italic flex items-start gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1 shrink-0" />
                                                {step}
                                            </li>
                                        ))}
                                     </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Specific Logic (RAAS/Etiology) */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest italic">{disease.treatment.raas ? 'Controle de Proteinúria' : 'Padrões de Resposta'}</h4>
                        {disease.treatment.raas ? (
                             <div className="p-8 rounded-[3.5rem] bg-emerald-500/10 border-2 border-emerald-500/20 space-y-4">
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="text-emerald-400" size={20} />
                                    <span className="text-xs font-black text-emerald-400 uppercase italic">Bloqueio RAAS (IECA/BRA)</span>
                                </div>
                                <p className="text-sm text-slate-200 italic leading-relaxed">{disease.treatment.raas}</p>
                                <div className="pt-4 border-t border-emerald-500/20">
                                    <p className="text-[10px] text-emerald-300/60 uppercase font-black tracking-widest">Nível de Evidência: A</p>
                                </div>
                             </div>
                        ) : (
                            <div className="space-y-4">
                                {disease.treatment.patterns.map((p, i) => (
                                    <div key={i} className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50 space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black text-white uppercase italic tracking-widest">{p.pattern}</span>
                                            <Zap className="text-amber-500" size={14} />
                                        </div>
                                        <p className="text-[10px] text-slate-400 italic line-clamp-1">{p.definition}</p>
                                        <p className={cn("text-[11px] font-bold italic mt-2 border-t border-slate-700 pt-2", disease.themeClasses.text)}>{p.action}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {disease.etiology && (
                             <div className="p-8 rounded-[3.5rem] bg-indigo-600/5 border-2 border-slate-800 space-y-6">
                                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic leading-none">Classificação Etiológica</h4>
                                <div className="space-y-4">
                                    {disease.etiology.map((et, i) => (
                                        <div key={i} className="space-y-1">
                                            <p className="text-xs font-black text-white italic">{et.type}</p>
                                            <p className="text-[10px] text-slate-400 italic">Mec: {et.mechanism}</p>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        )}
                    </div>

                    {/* Column 3: Sparing Agents */}
                    <div className="space-y-8">
                        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Poupadores / Novas Terapias</h4>
                        <div className="space-y-4">
                            {disease.treatment.sparing?.map((s, i) => (
                                <div key={i} className={cn("flex items-center justify-between p-6 rounded-3xl bg-slate-900 border border-slate-800 group transition-colors", "hover:" + disease.themeClasses.border + "/30")}>
                                    <div>
                                        <p className="text-sm font-black text-white italic">{s.agent}</p>
                                        <p className="text-[10px] text-slate-500 italic uppercase">{s.indication}</p>
                                    </div>
                                    <div className={cn("px-3 py-1 rounded-full bg-slate-800 text-[10px] font-black border border-slate-700 transition-colors shrink-0 ml-2", "group-hover:" + disease.themeClasses.bg, "group-hover:text-white", disease.themeClasses.text)}>
                                        {s.evidence}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </InfoCard>

            {/* Bottom Row: Complications & Pearls */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 <InfoCard title="Prognóstico / Complicações" icon={AlertCircle}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {disease.complications.map((c, i) => (
                            <div key={i} className="space-y-3">
                                <h4 className="text-2xl font-black text-white italic tracking-tighter">{c.category}</h4>
                                <p className="text-xs text-slate-400 italic leading-relaxed">{c.mechanics}</p>
                            </div>
                        ))}
                    </div>
                 </InfoCard>

                 <div className="space-y-6">
                    <div className="flex items-center gap-3 px-2">
                        <Zap className="text-yellow-500" size={18} />
                        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest italic">Pérolas de Ouro — {disease.name}</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {disease.pearls.map((p, i) => (
                            <div key={i} className="p-8 rounded-[3rem] bg-indigo-500/5 border-2 border-indigo-500/10 flex items-center justify-center text-center">
                                <p className="text-sm text-slate-200 italic font-medium leading-relaxed">{p}</p>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Comparison Hub (Only for GESF to solve the logic check) */}
            {disease.id === 'gesf' && (
                <div className="p-12 rounded-[4rem] bg-slate-900 border-2 border-slate-800 space-y-10">
                    <div className="text-center">
                        <h4 className="text-[11px] font-black text-brand-blue uppercase tracking-[0.4em] italic mb-2">Comparison Hub</h4>
                        <h3 className="text-4xl font-black text-white italic tracking-tighter">DLM vs GESF: Quadro Diferencial</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="border-b border-slate-800">
                                <tr>
                                    <th className="py-4 text-[10px] font-black text-slate-500 uppercase italic">Característica</th>
                                    <th className="py-4 text-[10px] font-black text-white uppercase italic">DLM</th>
                                    <th className="py-4 text-[10px] font-black text-brand-blue uppercase italic">GESF</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {[
                                    { f: 'Fisiopatologia', d: 'Podócito disfuncional', g: 'Podócito morto → Cicatriz' },
                                    { f: 'Biópsia (MO)', d: 'Normal', g: 'Esclerose Focal e Segmentar' },
                                    { f: 'Biópsia (ME)', d: 'Fusão podocitária difusa', g: 'Fusão extensa + Cicatriz' },
                                    { f: 'Hematúria', d: 'Rara (< 10%)', g: 'Comum (30-50%) ✅' },
                                    { f: 'Hipertensão', d: 'Ausente/Rara', g: 'Presente no diag (~50%) ✅' },
                                    { f: 'Função Renal (FG)', d: 'Normal no início', g: 'Frequentemente ↓ no diag ✅' },
                                    { f: 'Proteinúria', d: 'Seletiva (Só Albumina)', g: 'NÃO-Seletiva (IgG e Transf.)' },
                                    { f: 'Resposta Corticoide', d: '85-95% (Excelente)', g: '30-40% (Mod-Baixa)' },
                                    { f: 'Prognóstico', d: 'Excelente', g: 'Reservado (DRC terminal)' }
                                ].map((row, i) => (
                                    <tr key={i}>
                                        <td className="py-4 text-xs font-black text-slate-500 uppercase italic">{row.f}</td>
                                        <td className="py-4 text-sm text-slate-300 italic">{row.d}</td>
                                        <td className="py-4 text-sm text-white font-black italic">{row.g}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}

            {/* Next Chapter Hook */}
            <div className={cn("p-12 rounded-[4rem] bg-slate-900 border-2 relative overflow-hidden text-center", disease.themeClasses.border + "/30")}>
                <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent to-transparent", "via-" + disease.themeClasses.bg.replace('bg-', ''))} />
                <h4 className={cn("text-[11px] font-black uppercase tracking-[0.4em] italic mb-6", disease.themeClasses.text)}>Gancho para a Próxima Aula</h4>
                <p className="text-3xl font-black text-white italic tracking-tighter leading-tight max-w-4xl mx-auto">
                    {disease.nextHook}
                </p>
                <div className="mt-8 flex items-center justify-center gap-3 text-slate-500">
                    <History size={18} />
                    <span className="text-[10px] font-black uppercase tracking-widest italic">Em breve no próximo bloco clínico</span>
                </div>
            </div>

          </div>
        </motion.div>
       </AnimatePresence>
      </motion.div>
     )}
    </AnimatePresence>

      {/* Manual de Suspeição Modal */}
      <AnimatePresence>
        {showSuspicionGuide && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setShowSuspicionGuide(false)}
                    className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                />
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="relative z-10 w-full max-w-5xl max-h-full bg-slate-900 border-2 border-slate-800 rounded-[4rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                >
                    <div className="p-10 border-b border-slate-800 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-brand-blue flex items-center justify-center text-white">
                                <Search size={24} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-black text-white italic tracking-tighter uppercase">Manual de Suspeição Clínica</h2>
                                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] italic">Diferenciais & Gatilhos Diagnósticos</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => setShowSuspicionGuide(false)}
                            className="p-4 rounded-2xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                        >
                            Fechar [ESC]
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-10 space-y-12">
                        {/* 4 Patterns of Suspicion */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { title: 'Síndrome Nefrótica', color: 'bg-indigo-500', desc: 'Proteinúria maciça + Edema. Pensar em DLM, GESF, NM.' },
                                { title: 'Síndrome Nefrítica', color: 'bg-rose-500', desc: 'Hematúria + HAS + Oligúria. Pensar em GNPE, IgA, Lúpus.' },
                                { title: 'Hematúria Isolada', color: 'bg-emerald-500', desc: 'Achado de EAS. Pensar em IgA, Alport, Doença de MBF.' },
                                { title: 'GNRP', color: 'bg-purple-500', desc: 'Piora rápída de FG + Cilindros. URGÊNCIA: Biópsia em 24h.' },
                            ].map((p, i) => (
                                <div key={i} className="p-6 rounded-3xl bg-slate-800/50 border border-slate-700/50 space-y-3">
                                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white", p.color)}>
                                        <AlertCircle size={20} />
                                    </div>
                                    <h4 className="text-sm font-black text-white italic">{p.title}</h4>
                                    <p className="text-[10px] text-slate-400 italic leading-relaxed">{p.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Comparative Table */}
                        <div className="rounded-[2.5rem] border-2 border-slate-800 overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-slate-800/50">
                                    <tr>
                                        <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Doença</th>
                                        <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Perfil Típico</th>
                                        <th className="p-6 text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Pivô Clínico</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {[
                                        { nm: 'DLM', p: 'Criança 2-8 anos, edema súbito.', pv: 'Resposta dramática a corticoide.' },
                                        { nm: 'GESF', p: 'Adulto negro/obeso, SN + hematúria.', pv: 'Proteinúria não-seletiva + ↓FG precoce.' },
                                        { nm: 'Membranosa', p: 'Homem >40 anos, SN insidiosa.', pv: 'Anti-PLA2R+ / Rastrear Neoplasia.' },
                                        { nm: 'IgA', p: 'Jovem, hematúria 24-72h pós-resfriado.', pv: 'Sincronia mucosa + C3 normal.' },
                                        { nm: 'GNPE', p: 'Criança, 1-3 sem após infecção.', pv: 'C3 baixo e ASLO elevado.' },
                                    ].map((row, i) => (
                                        <tr key={i}>
                                            <td className="p-6 text-sm font-black text-white italic">{row.nm}</td>
                                            <td className="p-6 text-xs text-slate-300 italic">{row.p}</td>
                                            <td className="p-6 text-xs text-brand-blue font-bold italic">{row.pv}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Red Flags */}
                        <div className="p-10 rounded-[3rem] bg-rose-500/10 border-2 border-rose-500/30 space-y-6">
                            <div className="flex items-center gap-4">
                                <AlertCircle className="text-rose-500" size={32} />
                                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Red Flags: Encaminhamento Urgente</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-xs text-slate-200 italic">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                                        FG caindo rapidamente + Hematúria glomerular
                                    </li>
                                    <li className="flex items-start gap-3 text-xs text-slate-200 italic">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                                        Síndrome Nefrótica em Adulto (Indicação Formal de Biópsia)
                                    </li>
                                </ul>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3 text-xs text-slate-200 italic">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                                        Membranosa em {'>'} 50 anos: Rastrear Neoplasia Oculta
                                    </li>
                                    <li className="flex items-start gap-3 text-xs text-slate-200 italic">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5" />
                                        C3/C4 baixos + Hematúria: Pensar em Lúpus ou Crioglobulina
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      {/* Comparativo Nefrótica vs Nefrítica Modal */}
      <AnimatePresence>
        {showComparisonGuide && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComparisonGuide(false)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative z-10 w-full max-w-6xl max-h-full bg-slate-900 border-2 border-slate-800 rounded-[4rem] overflow-hidden flex flex-col shadow-[0_0_150px_rgba(0,0,0,0.8)]"
            >
                {/* Header */}
                <div className="p-10 border-b border-slate-800 flex items-center justify-between bg-slate-800/10 shrink-0">
                    <div className="flex items-center gap-6">
                        <div className="flex -space-x-4">
                            <div className="w-14 h-14 rounded-2xl bg-indigo-500 flex items-center justify-center text-white border-4 border-slate-900 z-10">
                                <Droplet size={28} />
                            </div>
                            <div className="w-14 h-14 rounded-2xl bg-rose-500 flex items-center justify-center text-white border-4 border-slate-900">
                                <Activity size={28} />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Nefrótica vs Nefrítica</h2>
                            <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] italic leading-tight">Mastering Glomerular Syndromes • KDIGO 2024</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setShowComparisonGuide(false)}
                        className="px-8 py-4 rounded-2xl bg-slate-800 text-slate-400 font-black uppercase italic tracking-widest text-[10px] hover:text-white hover:bg-slate-700 transition-all"
                    >
                        [ESC] Fechar Guia
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-12 space-y-16 custom-scrollbar">
                    {/* Intro / Physiopath Map */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="p-10 rounded-[3rem] bg-indigo-500/5 border border-indigo-500/20 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white">
                                    <Droplet size={20} />
                                </div>
                                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Padrão Nefrótico</h3>
                            </div>
                            <p className="text-xs text-indigo-200/70 italic leading-relaxed">Problema de <b>PERMEABILIDADE</b>. O podócito (barreira) é o alvo. A proteinúria domina o quadro pela perda de seletividade de carga e tamanho.</p>
                            <div className="space-y-4 pt-4">
                                <div className="p-4 rounded-2xl bg-slate-900 border border-indigo-500/10">
                                    <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3 italic">Critérios (≥3 de 4)</h4>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Proteinúria</span>
                                            <span className="text-white font-bold">≥ 3,5g / 24h</span>
                                        </li>
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Albumina Sérica</span>
                                            <span className="text-white font-bold">{'<'} 3,0g / dL</span>
                                        </li>
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Edema</span>
                                            <span className="text-white font-bold">Generalizado (Anasarca)</span>
                                        </li>
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Dislipidemia</span>
                                            <span className="text-white font-bold">LDL ↑ / TG ↑</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 rounded-[3rem] bg-rose-500/5 border border-rose-500/20 space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-rose-500 flex items-center justify-center text-white">
                                    <Activity size={20} />
                                </div>
                                <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">Padrão Nefrítico</h3>
                            </div>
                            <p className="text-xs text-rose-200/70 italic leading-relaxed">Problema de <b>INFLAMAÇÃO</b>. O endotélio ou mesângio sofre proliferação. A hematúria e a queda de filtração (FG) dominam o quadro clínico.</p>
                            <div className="space-y-4 pt-4">
                                <div className="p-4 rounded-2xl bg-slate-900 border border-rose-500/10">
                                    <h4 className="text-[10px] font-black text-rose-400 uppercase tracking-widest mb-3 italic">Critérios (≥3 de 5)</h4>
                                    <ul className="space-y-2">
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Hematúria</span>
                                            <span className="text-white font-bold">Dismórfica / Cilindros</span>
                                        </li>
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Hipertensão (HAS)</span>
                                            <span className="text-white font-bold">Nova ou Piora</span>
                                        </li>
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Oligúria</span>
                                            <span className="text-white font-bold">{'<'} 400ml / 24h</span>
                                        </li>
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">Edema</span>
                                            <span className="text-white font-bold">Leve / Facial Matinal</span>
                                        </li>
                                        <li className="flex justify-between items-center text-[11px] italic">
                                            <span className="text-slate-400">↓ Filtração Aguda</span>
                                            <span className="text-white font-bold">↑ Creatinina Agudo</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Master Comparison Table */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <Layers className="text-brand-blue" size={24} />
                            <h3 className="text-xl font-black text-white italic tracking-tighter uppercase italic">Diferenciação Mestra</h3>
                        </div>
                        <div className="rounded-[3rem] border-2 border-slate-800 overflow-hidden bg-slate-800/10">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-slate-800/50">
                                        <th className="p-8 text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] italic">Característica</th>
                                        <th className="p-8 text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] italic">Síndrome Nefrótica</th>
                                        <th className="p-8 text-[10px] font-black text-rose-400 uppercase tracking-[0.2em] italic">Síndrome Nefrítica</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800">
                                    {[
                                        { cat: 'Início', sn: 'Insidioso (semanas/meses)', si: 'Agudo (horas/dias)' },
                                        { cat: 'Proteinúria', sn: 'Maciça (> 3,5g/d)', si: 'Leve-moderada' },
                                        { cat: 'Hematúria', sn: 'Microscópica (30-50%)', si: 'Macroscópica (Coca-cola)' },
                                        { cat: 'Urina', sn: 'Espumosa (Proteinúria)', si: 'Acastanhada / Hematúria macro' },
                                        { cat: 'Cilindros', sn: 'Gordurosos / Corpos ovais', si: 'Hemáticos (Patognomônico)' },
                                        { cat: 'PA', sn: 'Normal (na maioria)', si: 'Elevada (SRAA + Volêmica)' },
                                        { cat: 'Risco Trombótico', sn: 'ALTO (Albumina < 2,5)', si: 'Baixo' },
                                        { cat: 'Urgência', sn: 'Trombose / Infecção', si: 'Congestão / HAS Maligna' },
                                    ].map((row, i) => (
                                        <tr key={i} className="hover:bg-slate-800/20 transition-colors">
                                            <td className="p-8 text-[10px] font-black text-slate-400 uppercase italic">{row.cat}</td>
                                            <td className="p-8 text-xs text-indigo-100 italic">{row.sn}</td>
                                            <td className="p-8 text-xs text-rose-100 italic">{row.si}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Sinais, Sintomas e Complicações */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Stethoscope className="text-indigo-400" size={24} />
                                <h4 className="text-sm font-black text-white uppercase tracking-widest italic">Semiologia Nefrótica</h4>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-8 rounded-[2.5rem] bg-indigo-500/5 border border-indigo-500/20 space-y-4">
                                    <h5 className="text-[10px] font-black text-indigo-400 uppercase italic tracking-widest">Aparência Clínica</h5>
                                    <ul className="space-y-3">
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                            <b>Urina Espumosa:</b> Como "colarinho de cerveja" que não some.
                                        </li>
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                            <b>Edema de Anasarca:</b> Pobre em sódio, depressível, gravitacional.
                                        </li>
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                                            <b>Xantelasmas:</b> Depósitos de lipídios palpebrais (dislipidemia grave).
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-8 rounded-[2.5rem] bg-rose-500/5 border border-rose-500/20 space-y-4">
                                    <h5 className="text-[10px] font-black text-rose-400 uppercase italic tracking-widest">Complicações Críticas</h5>
                                    <ul className="space-y-3">
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                            <b>Trombose de Veia Renal:</b> Dor lombar, hematúria e varicocele aguda à esquerda.
                                        </li>
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                            <b>Infecções:</b> Perda de IGs e sistema complemento na urina (Pneumococo).
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Stethoscope className="text-rose-400" size={24} />
                                <h4 className="text-sm font-black text-white uppercase tracking-widest italic">Semiologia Nefrítica</h4>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-8 rounded-[2.5rem] bg-rose-500/5 border border-rose-500/20 space-y-4">
                                    <h5 className="text-[10px] font-black text-rose-400 uppercase italic tracking-widest">Aparência Clínica</h5>
                                    <ul className="space-y-3">
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                            <b>Hematúria Macro:</b> Cor de "chá preto" ou "Coca-Cola".
                                        </li>
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                            <b>Edema Facial:</b> Mais proeminente ao acordar, matinal.
                                        </li>
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                            <b>Sintomas de HAS:</b> Cefaleia holocraniana, tonteira, borramento visual.
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-8 rounded-[2.5rem] bg-rose-500/5 border border-rose-500/20 space-y-4">
                                    <h5 className="text-[10px] font-black text-rose-400 uppercase italic tracking-widest">Complicações Críticas</h5>
                                    <ul className="space-y-3">
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                            <b>Congestão Aguda:</b> Edema Agudo de Pulmão por hipervolemia.
                                        </li>
                                        <li className="text-xs text-slate-300 italic flex items-start gap-2">
                                            <div className="w-1 h-1 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                                            <b>IRA Oligúrica:</b> Perda súbita da filtração glomerular ({'<' } 400ml/d).
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fisiopath Logic */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <h4 className="text-sm font-black text-indigo-400 uppercase tracking-widest italic">Cascatas Fisiopatológicas</h4>
                            <div className="space-y-4">
                                <div className="p-6 rounded-3xl bg-slate-800/30 border border-indigo-500/10 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                        <span className="text-[10px] font-black text-white uppercase italic">Nefrótica (O Podócito)</span>
                                    </div>
                                    <div className="space-y-3 relative pl-4 border-l border-slate-700">
                                        {[
                                            'Lesão podocitária (fusão de foot processes)',
                                            'Perda de seletividade (Proteinúria maciça)',
                                            'Queda da pressão oncótica (Hipoalbuminemia)',
                                            'Transudação de volume (EDEMA gravitacional)',
                                            'Fígado compensa (Dislipidemia + Hipercoagulabilidade)'
                                        ].map((step, i) => (
                                            <div key={i} className="text-[10px] text-slate-400 italic">
                                                {i + 1}. {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-sm font-black text-rose-400 uppercase tracking-widest italic invisible">_</h4>
                            <div className="space-y-4">
                                <div className="p-6 rounded-3xl bg-slate-800/30 border border-rose-500/10 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                                        <span className="text-[10px] font-black text-white uppercase italic">Nefrítica (Inflamação)</span>
                                    </div>
                                    <div className="space-y-3 relative pl-4 border-l border-slate-700">
                                        {[
                                            'Ativação imunocomplexo / inflamação local',
                                            'Infiltração celular + MBG rompida',
                                            'Hematúria (Eritrócitos na MBG) + Cilindros',
                                            'Obstrução capilar / Proliferação celular',
                                            'Queda de FG + Retenção de Na+ (HAS / Congestão)'
                                        ].map((step, i) => (
                                            <div key={i} className="text-[10px] text-slate-400 italic">
                                                {i + 1}. {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KDIGO 2024 Pearls */}
                    <div className="p-10 rounded-[3rem] bg-brand-blue/10 border-2 border-brand-blue/30 space-y-8">
                        <div className="flex items-center gap-4">
                            <Sparkles className="text-brand-blue" size={28} />
                            <h4 className="text-xl font-black text-white italic tracking-tighter uppercase italic">Perlas KDIGO 2024 & Prática SUS</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="space-y-2">
                                <span className="text-[9px] font-black text-brand-blue uppercase italic tracking-widest">Diagnóstico</span>
                                <p className="text-[11px] text-slate-200 italic leading-relaxed">Proteinúria residual é o maior preditor de DRC. Meta universal: <b>{'<'} 0,5 - 1,0g / d</b>.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[9px] font-black text-brand-blue uppercase italic tracking-widest">Segurança</span>
                                <p className="text-[11px] text-slate-200 italic leading-relaxed">Na síndrome nefrítica, trate a <b>hipercalemia (K+ {'>'} 6,0)</b> antes de qualquer outro diagnóstico.</p>
                            </div>
                            <div className="space-y-2">
                                <span className="text-[9px] font-black text-brand-blue uppercase italic tracking-widest">SUS / Brasil</span>
                                <p className="text-[11px] text-slate-200 italic leading-relaxed">Biópsia é mandatória em adultos com SN para acesso a imunossupressores de alto custo no PCDT.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Doenças que Consomem Complemento Modal */}
      <AnimatePresence>
        {showComplementDiseases && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-6 md:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowComplementDiseases(false)}
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-3xl"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative z-10 w-full max-w-5xl max-h-full bg-slate-900 border-2 border-slate-800 rounded-[4rem] overflow-hidden flex flex-col shadow-[0_0_150px_rgba(0,0,0,0.8)]"
            >
                <div className="p-10 border-b border-slate-800 flex items-center justify-between bg-amber-500/5 shrink-0">
                    <div className="flex items-center gap-6">
                        <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-2xl shadow-amber-500/30">
                            <FlaskConical size={28} />
                        </div>
                        <div>
                            <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase">Perfis de Consumo de Complemento</h2>
                            <p className="text-[10px] text-amber-500 font-black uppercase tracking-[0.4em] italic leading-tight">Síndromes com ↓ C3 / ↓ C4 • Padrão Camaleão</p>
                        </div>
                    </div>
                    <button 
                        onClick={() => setShowComplementDiseases(false)}
                        className="px-8 py-4 rounded-2xl bg-slate-800 text-slate-400 font-black uppercase italic tracking-widest text-[10px] hover:text-white transition-all"
                    >
                        Fechar
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-12 space-y-12 custom-scrollbar">
                    {(selectedProfile === 'nefrotico' ? [
                        {
                            name: 'Nefrite Lúpica (LES)',
                            perfil: 'O "Grande Camaleão" da nefrologia. Pode mimetizar qualquer síndrome glomerular.',
                            pivo: 'Mulher jovem, sinais sistêmicos (rash, artrite, febre), fotosensibilidade.',
                            consumo: '↓ C3 e ↓ C4 (Via Clássica). A queda de C4 precede a de C3.',
                            biopsia: 'Obrigatória para definir classe (III, IV e V são as agressivas).',
                            tip: 'Cuidado com a Classe V (Membranosa), que pode não consumir muito complemento.'
                        },
                        {
                            name: 'GN Membranoproliferativa (MPGN)',
                            perfil: 'Geralmente um quadro misto (nefrótico + nefrítico). Proteinúria + hematúria persistente.',
                            pivo: 'Criança ou adulto jovem. Frequentemente idiopática ou associada a infecções crônicas.',
                            consumo: '↓ C3 Predominante. Consumo persistente (não normaliza em 8 semanas como a GNPE).',
                            biopsia: 'Duplo contorno ("trilho de trem") na membrana basal glomerular.',
                            tip: 'Hoje classificada por imunofluorescência em Doença de Depósitos de C3 ou mediada por Imunocomplexos.'
                        },
                        {
                            name: 'Crioglobulinemia',
                            perfil: 'Vasculite de pequenos vasos mediada por imunocomplexos que precipitam no frio.',
                            pivo: 'Adultos com Hepatite C (HCV). Púrpura palpável, artralgia e neuropatia periférica.',
                            consumo: '↓ C4 MUITO acentuado com C3 pouco alterado ou normal.',
                            biopsia: 'Trombos intraluminais hialinos ("Cryoplugs") no glomérulo.',
                            tip: 'O diagnóstico é clínico-laboratorial (dosagem de crioglobulinas séricas).'
                        }
                    ] : [
                        {
                            name: 'GN Pós-Estreptocócica (GNPE)',
                            perfil: 'O protótipo da síndrome nefrítica aguda na infância após piodermite ou faringite.',
                            pivo: 'Período de latência (1-3 semanas) + ASLO ou Anti-DNAse B elevados.',
                            consumo: '↓ C3 Transitório. Normaliza obrigatoriamente em até 8 semanas.',
                            biopsia: 'Presença de "Gibas" ou "Humps" (depósitos subepiteliais de IgG e C3).',
                            tip: 'Se o complemento (C3) permanecer baixo após 8 semanas, a biópsia é mandatória para excluir MPGN.'
                        },
                        {
                            name: 'Nefrite Lúpica (LES)',
                            perfil: 'Manifestação nefrítica do Lupus. Indica geralmente atividade inflamatória grave (Classe III ou IV).',
                            pivo: 'Hematúria ativa + FAN positivo + Consumo de C3 e C4.',
                            consumo: '↓ C3 e ↓ C4. Marcador fiel de atividade de doença sistêmica.',
                            biopsia: 'Padrão "Full House" (positividade para IgG, IgA, IgM, C3 e C1q).',
                            tip: 'Na nefrite lúpica, a sedimentoscopia urinária é um "biópsia líquida".'
                        },
                        {
                            name: 'GN Membranoproliferativa (MPGN)',
                            perfil: 'Frequentemente se apresenta como síndrome nefrítica persistente ou recorrente.',
                            pivo: 'Hematúria e proteinúria que não melhoram após a fase aguda.',
                            consumo: '↓ C3 Crônico. Diferencia-se da GNPE pela persistência do consumo > 8 semanas.',
                            biopsia: 'Proliferação mesangial acentuada com interposição de citoplasma.',
                            tip: 'Pense em MPGN sempre que uma "GNPE" não seguir o curso natural de melhora.'
                        }
                    ]).map((d, i) => (
                        <div key={i} className="group relative">
                            <div className="p-8 rounded-[3rem] bg-slate-800/20 border-2 border-slate-800 hover:border-amber-500/30 transition-all space-y-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">{d.name}</h3>
                                    <div className="px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[10px] font-black text-amber-500 uppercase italic">
                                        {d.consumo}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Perfil Clínico</span>
                                            <p className="text-xs text-slate-300 italic leading-relaxed">{d.perfil}</p>
                                        </div>
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest italic">O Pivô do Diagnóstico</span>
                                            <p className="text-xs text-amber-200/70 italic leading-relaxed font-bold">{d.pivo}</p>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="space-y-1">
                                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">Achado Histológico Estrela</span>
                                            <p className="text-xs text-slate-300 italic leading-relaxed">{d.biopsia}</p>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-brand-blue/5 border border-brand-blue/20">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Zap className="text-brand-blue" size={12} />
                                                <span className="text-[9px] font-black text-brand-blue uppercase italic">Dica de Prova / Residência</span>
                                            </div>
                                            <p className="text-[10px] text-brand-blue/80 italic font-bold">{d.tip}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
