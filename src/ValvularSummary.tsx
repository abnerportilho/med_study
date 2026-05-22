import React from 'react';
import { ArrowLeft, Zap, Activity, Heart, Stethoscope, Pill, Activity as EcoIcon, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import Phonocardiogram from './components/Phonocardiogram';

interface ValvularSummaryProps {
  valvopathy: 'eao' | 'iao' | 'emi' | 'imi' | 'pvm';
  onBack: () => void;
}

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function ValvularSummary({ valvopathy, onBack }: ValvularSummaryProps) {
  const data = {
      eao: {
      name: 'Estenose Aórtica',
      acronym: 'EAo',
      color: 'text-brand-blue',
      bgColor: 'bg-brand-blue/10',
      definition: 'Obstrução à via de saída do VE — Sobrecarga de pressão → Hipertrofia concêntrica.',
      etiology: [
        { label: 'Degenerativa/Calcificada', detail: 'Mais comum no mundo ocidental. Processo ativo semelhante à aterosclerose. ≥65 anos.' },
        { label: 'Bicúspide congênita', detail: 'Valva com 2 cúspides em vez de 3. Associa-se a aneurisma de aorta. 40–60 anos.' },
        { label: 'Reumática', detail: 'Fusão comissural + calcificação. Quase sempre com doença mitral concomitante. 30–50 anos.' }
      ],
      patho: [
        '↑ Pressão sistólica VE → ↑ espessura miocárdica (HC)',
        '↑ Consumo O2 miocárdico + ↓ perfusão subendocárdica → ISQUEMIA (mesmo sem DAC)',
        '↑ Pressão diastólica VE → disfunção diastólica → congestão retrógrada',
        'Gradiente transvalvar: grave se área valvar < 1,0 cm²'
      ],
      pearls: [
        { title: 'Lei de Laplace', content: 'Tensão = (Pressão × Raio) / (2 × Espessura). O VE aumenta a espessura para normalizar a tensão.' },
        { title: 'Baixo Fluxo / Baixo Gradiente', content: 'Área < 1cm² + gradiente < 40 + FE < 50%. Usar Dobutamina para diferenciar pseudoestenose.' }
      ],
      clinical: {
        triad: [
          { label: 'ANGINA', detail: 'Sobrevida ~5 anos' },
          { label: 'SÍNCOPE', detail: 'Sobrevida ~3 anos' },
          { label: 'ICC (Dispneia)', detail: 'Sobrevida ~2 anos' }
        ],
        physical: [
          { label: 'Sopro sistólico ejetivo', detail: 'Rude, "em diamante", foco aórtico (2º EID), IRRADIA CARÓTIDAS. Pico tardio = gravidade.' },
          { label: 'Pulso parvus et tardus', detail: 'Fraco e tardio. Marca a obstrução significativa.' },
          { label: 'Componente A2', detail: 'A2 abolida ou desdobramento paradoxal de S2 (sinal de EAo grave).' },
          { label: 'Fenômeno de Gallavardin', detail: 'Componente musical irradiando para o ápice (mimetiza insuficiência mitral).' },
          { label: 'Ictus Cordis', detail: 'Sustentado e não deslocado (hipertrofia concêntrica).' }
        ]
      },
      diagnosis: {
        eco: [
          { label: 'Vmax (Grave)', value: '≥ 4,0 m/s' },
          { label: 'Gradiente Médio (Grave)', value: '≥ 40 mmHg' },
          { label: 'AVA (Grave)', value: '≤ 1,0 cm²' },
          { label: 'AVA Indexada', value: '≤ 0,6 cm²/m²' }
        ]
      },
      treatment: [
        { label: 'Indicação IA', detail: 'Sintomáticos (SAD) OU assintomáticos com FEVE < 50% OU outra cirurgia cardíaca.' },
        { label: 'SAVR vs TAVI', detail: 'SAVR favorável se < 65 anos. TAVI favorável se ≥ 75 anos ou alto risco. Heart Team decide.' },
        { label: 'Score Cálcio TC', detail: 'H > 2.000 / M > 1.200 UA confirmam EAo grave em casos discordantes.' },
        { label: 'Teste de Esforço', detail: 'Indicado em assintomáticos. Intervir se sintomas ou ↓ PA > 20 mmHg durante o teste.' }
      ]
    },
    iao: {
      name: 'Insuficiência Aórtica',
      acronym: 'IAo',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      definition: 'Refluxo diastólico para o VE — Sobrecarga de volume → Hipertrofia excêntrica.',
      etiology: [
        { label: 'Degenerativa/Calcificada', detail: 'Acometimento das cúspides. Mais comum em países desenvolvidos.' },
        { label: 'Reumática', detail: 'Retração e espessamento das cúspides. Frequente no Brasil; raramente isolada.' },
        { label: 'Endocardite infecciosa', detail: 'Destruição/perfuração de cúspide. Causa de IAo AGUDA (emergência).' },
        { label: 'Aneurisma/Dissecção', detail: 'Dilatação do anel aórtico. IAo AGUDA na dissecção tipo A.' }
      ],
      patho: [
        '↑ Volume diastólico VE → dilatação progressiva (cardiomegalia "cor bovinum")',
        'Hipertrofia excêntrica: ↑ raio e ↑ espessura proporcional (alta complacência)',
        '↑ Pressão de pulso (diferencial): PA sistólica ↑ + PA diastólica ↓ (AMPLA)',
        'Sopro de Austin-Flint: jato de regurgitação direciona-se à mitral → ruflar funcional'
      ],
      pearls: [
        { title: 'Pressão de Pulso Ampla', detail: 'Diferencial elevada é a marca hemodinâmica da IAo crônica grave.' },
        { title: 'IAo Aguda', detail: 'VE sem tempo de adaptação → ↑↑ pressão diastólica VE → fechamento prematuro da mitral → EAP súbito.' }
      ],
      clinical: {
        triad: [],
        physical: [
          { label: 'Pressão Diferencial Ampla', detail: 'Diferença sísto-diastólica aumentada (ex: 160/40 mmHg).' },
          { label: 'Pulso de Corrigan', detail: 'Martelo d\'água (amplo e saltitante). Sinal de Hill: PA poplítea > Braquial (> 60 mmHg).' },
          { label: 'Pulsos Periféricos', detail: 'Sinal de Quincke (capilar), Musset (cabeça), Duroziez (sopro femoral).' },
          { label: 'Sopro Diastólico', detail: 'Aspirativo, decrescendo, melhor no 3º EIE (Erb) com handgrip.' },
          { label: 'Sopro de Austin Flint', detail: 'Rumble diastólico no ápice por fechamento funcional da mitral.' }
        ]
      },
      diagnosis: {
        eco: [
          { label: 'Vena Contracta', value: '> 0,6 cm' },
          { label: 'Volume Regurgitante', value: '≥ 60 mL' },
          { label: 'Fração de Regurgitação', value: '≥ 50%' },
          { label: 'Tempo de Meia Pressão', value: '< 200 ms' }
        ]
      },
      treatment: [
        { label: 'Cirurgia de Emergência', detail: 'IAo AGUDA (ex: Dissecção tipo A ou Endocardite) exige intervenção imediata.' },
        { label: 'IAo Crônica Grave', detail: 'Sintomáticos OU Assintomáticos com FEVE ≤ 50% OU DDFE > 70 / DSVE > 50 mm.' },
        { label: 'Follow-up', detail: 'Assintomáticos graves com FE preservada devem fazer Eco a cada 6-12 meses.' },
        { label: 'Medicamentoso', detail: 'IECA/BRA se HAS. EVITAR betabloqueadores em IAo pura (prolongam diástole).' }
      ]
    },
    emi: {
      name: 'Estenose Mitral',
      acronym: 'EMi',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      definition: 'Obstrução ao esvaziamento do AE — Sobrecarga retrógrada → HP → Falência VD.',
      etiology: [
        { label: 'Reumática (90%)', detail: 'Principal causa no Brasil. Latência de 20-40 anos entre o surto e a EMi.' },
        { label: 'Degenerativa', detail: 'Calcificação do anel mitral (MAC) em idosos. Causa crescente em países desenvolvidos.' }
      ],
      patho: [
        '↑ Pressão AE → Dilatação AE → Fibrilação Atrial (risco de trombo em auriculeta)',
        '↑ Pressão venocapilar pulmonar → Dispneia, DPN, ortopneia, hemoptise',
        'Hipertensão Pulmonar (HAP) → Dilatação VD → Insuficiência Tricúspide funcional',
        'VE POUPADO: diferencial importante com outras valvopatias!'
      ],
      pearls: [
        { title: 'Cascata Retrógrada', content: 'AE → Pulmão → VD → AD → Congestão Sistêmica. O VE é o único que não sofre.' },
        { title: 'Síndrome de Ortner', content: 'Rouquidão por compressão do nervo laríngeo recorrente pelo AE dilatado.' }
      ],
      clinical: {
        triad: [],
        physical: [
          { label: 'B1 hiperfonética', detail: 'Valvas mitrais abrem com força pelo gradiente AE-VE elevado.' },
          { label: 'Estalido de abertura', detail: 'Abertura brusca da valva espessada no início da diástole.' },
          { label: 'Sopro em ruflar diastólico', detail: 'Com reforço pré-sistólico (se ritmo sinusal). Melhor em DLE com campânula.' },
          { label: 'Hiperfonese de P2', detail: 'Sinal de Hipertensão Pulmonar grave.' },
          { label: 'Fácies mitral', detail: 'Rubor malar bilateral com cianose periférica (baixo débito + HP).' }
        ]
      },
      diagnosis: {
        eco: [
          { label: 'Área valvar grave', value: '< 1,0 cm²' },
          { label: 'Gradiente médio grave', value: '> 10 mmHg' },
          { label: 'P mitrale (ECG)', value: 'Onda P larga (>120ms) e bífida (sobrecarga AE)' },
          { label: 'Escore de Wilkins', value: 'Avalia mobilidade, espessamento, calcificação e aparato subvalvar.' }
        ]
      },
      treatment: [
        { label: 'Valvuloplastia (VMB)', detail: 'Escolha na EMi reumática se Wilkins ≤ 8, sem trombo em AE e sem IMi grave.' },
        { label: 'Troca Valvar', detail: 'Indicada se Wilkins > 8 ou contraindicação à VMB.' },
        { label: 'Medicamentoso', detail: 'Betabloqueadores/BCC para controle de frequência na FA (prolonga enchimento VE).' },
        { label: 'Anticoagulação', detail: 'OBRIGATÓRIA se FA ou trombo prévio. Usar Varfarina (DOAC não validado na EMi reumática).' }
      ]
    },
    imi: {
      name: 'Insuficiência Mitral',
      acronym: 'IMi',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      definition: 'Refluxo sistólico do VE para o AE — Sobrecarga de volume em AE e VE.',
      etiology: [
        { label: 'Primária (Orgânica)', detail: 'Prolapso (PVM), Reumática, Endocardite, Ruptura de cordoalha (Pós-IAM).' },
        { label: 'Secundária (Funcional)', detail: 'Valva normal, mas anel dilatado ou deslocamento de papilares (CMP dilatada).' }
      ],
      patho: [
        '↑ Volume AE → Dilatação AE → FA → Trombo → Embolia',
        '↑ Pré-carga VE → Dilatação VE → Hipertrofia excêntrica progressiva',
        'FE "supranormal": a regurgitação para o AE (baixa pressão) mascara a disfunção do VE',
        'FE < 60% na IMi grave = equivalente a FE < 50% em outras patologias'
      ],
      pearls: [
        { title: 'Armadilha Clínica', content: 'FE preservada na IMi NÃO significa VE normal. A baixa pós-carga "infla" a FE.' },
        { title: 'IMi Aguda', content: 'Ruptura de papilar (Pós-IAM) → EAP súbito com coração de tamanho normal no Rx.' }
      ],
      clinical: {
        triad: [],
        physical: [
          { label: 'Sopro holossistólico', detail: 'Uniforme, inicia com B1, termina em B2. Melhor no ápice, irradia para axila.' },
          { label: 'Hipofonese de B1', detail: 'Fusão/retração das cúspides diminui o som do fechamento.' },
          { label: 'Ictus desviado', detail: 'Reflete a cardiomegalia por dilatação VE (desviado para esquerda e baixo).' },
          { label: 'B3 (galope)', detail: 'Enchimento rápido do VE dilatado — sinal de gravidade.' }
        ]
      },
      diagnosis: {
        eco: [
          { label: 'FE (Ponto de corte)', value: '< 60% (indicação cirúrgica)' },
          { label: 'DSVE (Grave)', value: '≥ 40 mm' },
          { label: 'Fração regurgitante', value: '> 50%' },
          { label: 'Volume regurgitante', value: '≥ 60 ml/batimento' }
        ]
      },
      treatment: [
        { label: 'Plastia Mitral', detail: 'Preferida à troca: preserva aparato subvalvar e melhor função VE pós-op.' },
        { label: 'MitraClip', detail: 'Borda-a-borda percutâneo. Opção para IMi secundária em alto risco cirúrgico.' },
        { label: 'IMi Aguda', detail: 'Cirurgia de URGÊNCIA. Estabilizar com Nitroprussiato + IABP (↓ pós-carga → ↓ regurgitação).' },
        { label: 'Medicamentoso', detail: 'IECA/BRA se disfunção VE ou IMi secundária. BB se IC associada.' }
      ]
    },
    pvm: {
      name: 'Prolapso de Valva Mitral',
      acronym: 'PVM',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
      definition: 'Deslocamento de uma ou ambas as cúspides mitrais para o AE durante a sístole.',
      etiology: [
        { label: 'Degeneração Mixomatosa', detail: 'Causa primária clássica. Expansão do tecido conjuntivo da valva.' },
        { label: 'Idiopática', detail: 'Maioria dos casos. Frequentemente assintomática e descoberta em rotina.' },
        { label: 'Síndromes Genéticas', detail: 'Marfan, Ehlers-Danlos, Osteogênese Imperfeita.' }
      ],
      patho: [
        'Alongamento das cordas tendíneas → hipermobilidade valvar',
        'Pode evoluir para IMi grave por ruptura de cordoalha',
        'Geralmente benigno, mas exige vigilância para endocardite se houver sopro',
        'Associa-se a disautonomia (palpitações, ansiedade, dor torácica atípica)'
      ],
      pearls: [
        { title: 'O "Clique" de Barlow', content: 'O som clássico ocorre pelo tensionamento súbito das cordas alongadas durante a sístole.' },
        { title: 'Manobras Dinâmicas', content: 'Valsalva antecipa o clique; agachamento atrasa o clique e reduz o sopro.' }
      ],
      clinical: {
        triad: [],
        physical: [
          { label: 'Clique mesossistólico', detail: 'Ruído de estalido seco no meio da sístole.' },
          { label: 'Sopro sistólico tardio', detail: 'Segue o clique, melhor ouvido no ápice.' },
          { label: 'Palpitações', detail: 'Comum, muitas vezes associada a extrassístoles benignas.' }
        ]
      },
      diagnosis: {
        eco: [
          { label: 'Protrusão da cúspide', value: '> 2 mm além do anel' },
          { label: 'Espessamento valvar', value: '> 5 mm (forma clássica)' },
          { label: 'Sinal de rede bancária', value: 'Visualização da cúspide "mergulhando" no AE' }
        ]
      },
      treatment: [
        { label: 'Observação', detail: 'Casos leves/moderados sem IMi significativa ou sintomas graves.' },
        { label: 'Betabloqueadores', detail: 'Úteis se houver sintomas de palpitação ou dor torácica atípica.' },
        { label: 'Cirurgia (Plastia)', detail: 'Indicada se houver IMi grave associada com sintomas ou disfunção VE.' },
        { label: 'Vigilância', detail: 'Ecocardiograma periódico para monitorar progressão da regurgitação.' }
      ]
    }
  };

  const current = data[valvopathy];

  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header */}
      <div className="flex items-center gap-6">
        <button 
          onClick={onBack}
          className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700 shadow-xl group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <div className="flex items-center gap-3 mb-1">
             <div className="inline-block px-3 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-500 text-[9px] font-black uppercase tracking-widest italic">
              Visão Geral — {current.acronym}
            </div>
          </div>
          <div className="flex items-center gap-4">
             <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">{current.name}</h2>
          </div>
          <p className="text-sm text-slate-400 italic max-w-2xl">{current.definition}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column: Patho & Etiology */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Pérolas Clínicas */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(current as any).pearls.map((p: any, i: number) => (
              <div key={i} className="p-6 rounded-[2rem] border-2 border-brand-blue/20 bg-slate-800 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl -mr-12 -mt-12"></div>
                <h4 className="font-black text-[10px] text-brand-blue uppercase mb-2 italic tracking-widest">{p.title}</h4>
                <p className="text-[11px] text-slate-300 leading-relaxed italic">{p.content || p.detail}</p>
              </div>
            ))}
          </section>

          {/* Etiologia */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-brand-blue border border-slate-700">
                <Zap size={20} />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Etiologia e Panorama</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {current.etiology.map((e, i) => (
                <div key={i} className="p-6 rounded-[2.5rem] border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-all group">
                  <h4 className="font-black text-xs text-white mb-2 uppercase italic tracking-widest border-b border-slate-800 pb-2 flex justify-between items-center group-hover:border-brand-blue/30">
                    {e.label}
                    <ArrowLeft size={12} className="rotate-180 text-slate-600 group-hover:text-brand-blue transition-colors" />
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed italic group-hover:text-slate-300">{e.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fisiopatologia */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-rose-500 border border-slate-700">
                <Activity size={20} />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Fisiopatologia — Invariantes</h3>
            </div>
            <div className="p-8 rounded-[3rem] border-2 border-slate-700 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <ul className="space-y-6">
                {current.patho.map((p, i) => (
                  <li key={i} className="flex gap-6 items-start group">
                    <div className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 text-[10px] font-black text-brand-blue border border-slate-700 shadow-inner group-hover:bg-brand-blue group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <span className="text-[13px] text-slate-300 leading-relaxed italic group-hover:text-white transition-colors">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Quadro Clínico */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 border border-slate-700">
                <Stethoscope size={20} />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Semiologia e Achados</h3>
            </div>

            <div className="mb-8">
              <Phonocardiogram type={valvopathy} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.clinical.physical.map((p, i) => (
                <div key={i} className="p-6 rounded-[2rem] border border-slate-800 bg-slate-900/50 flex gap-4 transition-all hover:bg-slate-900 group">
                  <div className="w-10 h-10 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 text-[11px] font-black text-emerald-500 shadow-xl group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-black text-xs text-white mb-1 uppercase italic tracking-widest">{p.label}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed italic group-hover:text-slate-300">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {current.clinical.triad.length > 0 && (
              <div className="mt-8 p-8 rounded-[3rem] bg-slate-900 border-2 border-amber-500/30 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl -ml-16 -mt-16"></div>
                <h4 className="text-[10px] font-black mb-6 uppercase tracking-[0.3em] text-amber-500 italic text-center">Tríade Clássica de Marcadores de Gravidade</h4>
                <div className="grid grid-cols-3 gap-8 relative z-10">
                  {current.clinical.triad.map((t, i) => (
                    <div key={i} className="text-center space-y-2">
                      <p className="text-sm font-black text-white italic tracking-tighter uppercase">{t.label}</p>
                      <div className="h-[2px] bg-amber-500/20 w-8 mx-auto rounded-full" />
                      <p className="text-[10px] text-slate-500 uppercase font-bold italic">{t.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 flex items-center justify-center gap-3">
                   <AlertTriangle size={14} className="text-amber-500" />
                   <p className="text-[9px] text-amber-500/70 uppercase font-black tracking-widest italic">Progressão de Pior Prognóstico: Angina → Síncope → Dispneia</p>
                </div>
              </div>
            )}
          </section>
        </div>

        {/* Right Column: Diagnosis & Treatment */}
        <div className="space-y-12">
          {/* Diagnóstico Eco */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-rose-500 border border-slate-700">
                <EcoIcon size={20} />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Gravidade (Eco)</h3>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
              <div className="bg-slate-800 p-4 border-b border-slate-700 text-center">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic">Parâmetros Críticos</p>
              </div>
              <div className="p-4 space-y-2">
                {current.diagnosis.eco.map((d, i) => (
                  <div key={i} className="flex justify-between items-center p-4 hover:bg-slate-800 rounded-2xl transition-all border border-transparent hover:border-rose-500/20 group">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic group-hover:text-slate-400">{d.label}</span>
                    <span className="text-xs font-black text-rose-500 bg-rose-500/10 px-3 py-1 rounded-xl shadow-inner border border-rose-500/10">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tratamento */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-emerald-500 border border-slate-700">
                <Pill size={20} />
              </div>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tight">Intervenções</h3>
            </div>
            <div className="space-y-4">
              {current.treatment.map((t, i) => (
                <div key={i} className="p-6 rounded-[2rem] border-2 border-slate-700 bg-slate-800 relative overflow-hidden group hover:border-slate-600 transition-all shadow-xl">
                  <div className={cn("absolute top-0 right-0 w-2 h-full opacity-30", valvopathy === 'eao' ? 'bg-brand-blue' : valvopathy === 'iao' ? 'bg-emerald-500' : valvopathy === 'emi' ? 'bg-purple-500' : 'bg-rose-500')} />
                  <div className="flex items-center gap-3 mb-3 relative z-10">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <h4 className="font-black text-[10px] text-white uppercase italic tracking-widest">{t.label}</h4>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed italic pl-7 relative z-10 group-hover:text-slate-300">{t.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pérolas Finais */}
          <section className="p-8 rounded-[3rem] bg-slate-900 border-2 border-brand-blue/30 shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden">
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -ml-16 -mb-16"></div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
               <Info size={18} className="text-brand-blue" />
               <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue italic">Pérolas de Alta Performance</h4>
            </div>
            <ul className="space-y-4 relative z-10">
              {[
                "A cardite é a única manifestação da FR que deixa sequela permanente.",
                "Estenose Mitral é a ÚNICA valvopatia que tipicamente poupa o VE.",
                "FE preservada na IMi NÃO significa necessariamente um VE normal."
              ].map((p, idx) => (
                 <li key={idx} className="flex gap-4 items-start group">
                  <span className="text-brand-blue font-black text-xs italic group-hover:scale-125 transition-transform">#{idx + 1}</span>
                  <span className="text-[11px] text-slate-400 italic leading-relaxed group-hover:text-slate-200 transition-colors">{p}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
