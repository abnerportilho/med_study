import React, { useState } from 'react';
import { 
  Pill, 
  AlertTriangle, 
  Activity, 
  Wind, 
  ShieldCheck, 
  Syringe, 
  HeartPulse, 
  Stethoscope,
  ArrowRight,
  Info,
  CheckCircle2,
  ThermometerSnowflake
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function COPDTreatment() {
  const [activeGroup, setActiveGroup] = useState<'A' | 'B' | 'E'>('A');

  const groups = {
    A: {
      id: 'A',
      title: 'Grupo A',
      subtitle: 'Baixo Risco, Pouco Sintoma',
      criteria: '0-1 exacerbação (sem internação) + mMRC 0-1 / CAT < 10',
      color: 'text-emerald-500',
      bg: 'bg-emerald-500',
      lightBg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      treatment: 'Broncodilatador Único (LAMA ou LABA)',
      details: 'Uso contínuo para alívio de sintomas. SABA/SAMA podem ser usados para resgate.',
      meds: [
        { class: 'LAMA (Antimuscarínico Longo)', names: 'Spiriva (Tiotrópio), Seebri (Glicopirrônio), Incruse (Umeclidínio)' },
        { class: 'LABA (Beta-2 Longo)', names: 'Foradil (Formoterol), Onbrize (Indacaterol)' },
        { class: 'Resgate (SABA/SAMA)', names: 'Aerolin (Salbutamol), Berotec (Fenoterol), Atrovent (Ipratrópio)' }
      ]
    },
    B: {
      id: 'B',
      title: 'Grupo B',
      subtitle: 'Baixo Risco, Muito Sintoma',
      criteria: '0-1 exacerbação (sem internação) + mMRC ≥ 2 / CAT ≥ 10',
      color: 'text-amber-500',
      bg: 'bg-amber-500',
      lightBg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      treatment: 'Dupla Broncodilatação (LABA + LAMA)',
      details: 'A dispneia persistente responde melhor à combinação fixa do que à monoterapia.',
      meds: [
        { class: 'LABA + LAMA (Combinação Fixa)', names: 'Spiolto (Tiotrópio + Olodaterol), Ultibro (Indacaterol + Glicopirrônio), Anoro (Umeclidínio + Vilanterol)' }
      ]
    },
    E: {
      id: 'E',
      title: 'Grupo E',
      subtitle: 'Alto Risco (Exacerbador)',
      criteria: '≥ 1 exacerbação com internação OU ≥ 1 moderada',
      color: 'text-rose-500',
      bg: 'bg-rose-500',
      lightBg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      treatment: 'LABA + LAMA ou Tripla Terapia (LABA + LAMA + CI)',
      details: 'A escolha inicial depende do nível de Eosinófilos no sangue periférico.',
      meds: [
        { class: 'Se Eosinófilos < 300', names: 'Manter LABA + LAMA (Spiolto, Ultibro, Anoro). Evitar CI pelo risco de pneumonia.' },
        { class: 'Se Eosinófilos ≥ 300 (Tripla Terapia)', names: 'Trelegy (Fluticasona + Umeclidínio + Vilanterol), Trimbow (Beclometasona + Formoterol + Glicopirrônio)' }
      ]
    }
  };

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. CLASSIFICAÇÃO E TRATAMENTO FARMACOLÓGICO */}
      <section id="pharmacological">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Pill size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Classificação ABE e Tratamento Inalatório (GOLD 2026)</h2>
        </div>

        <p className="text-sm text-ink-muted mb-6 leading-relaxed">
          O tratamento da DPOC é guiado pelo <strong>Risco de Exacerbação</strong> e pelos <strong>Sintomas</strong>, não apenas pelo VEF1. O Grupo E foi atualizado: agora, apenas <strong className="text-rose-500">1 exacerbação moderada</strong> já classifica o paciente como alto risco.
        </p>

        {/* GOLD 1-4 Spirometric Severity */}
        <div className="mb-8 overflow-hidden rounded-2xl border border-line bg-slate-100">
          <div className="bg-slate-800 p-3 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <Activity size={14} />
            Gravidade da Obstrução (Pós-BD) — GOLD 1-4
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
            <div className="p-4 text-center bg-[#000e59]">
              <span className="text-xs font-bold text-emerald-400 block mb-1">GOLD 1 (Leve)</span>
              <span className="text-lg font-black text-white">≥ 80%</span>
              <span className="text-[10px] text-slate-300 block mt-1">do previsto</span>
            </div>
            <div className="p-4 text-center bg-[#000e59]">
              <span className="text-xs font-bold text-amber-400 block mb-1">GOLD 2 (Mod)</span>
              <span className="text-lg font-black text-white">50-79%</span>
              <span className="text-[10px] text-slate-300 block mt-1">do previsto</span>
            </div>
            <div className="p-4 text-center bg-[#000e59]">
              <span className="text-xs font-bold text-orange-400 block mb-1">GOLD 3 (Grave)</span>
              <span className="text-lg font-black text-white">30-49%</span>
              <span className="text-[10px] text-slate-300 block mt-1">do previsto</span>
            </div>
            <div className="p-4 text-center bg-[#000e59]">
              <span className="text-xs font-bold text-rose-400 block mb-1">GOLD 4 (M. Grave)</span>
              <span className="text-lg font-black text-white">&lt; 30%</span>
              <span className="text-[10px] text-slate-300 block mt-1">do previsto</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Info size={16} className="text-brand-blue" />
          <p className="text-sm font-bold text-brand-navy">Selecione o perfil clínico (ABE) para ver a conduta:</p>
        </div>

        {/* Interactive Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {(Object.keys(groups) as Array<keyof typeof groups>).map((key) => {
            const group = groups[key];
            const isActive = activeGroup === key;
            return (
              <button
                key={key}
                onClick={() => setActiveGroup(key)}
                className={cn(
                  "card p-5 border-2 text-left transition-all relative overflow-hidden group",
                  isActive ? group.border : "border-line hover:border-slate-400",
                  isActive ? group.lightBg : "bg-slate-800/30"
                )}
              >
                <div className={cn(
                  "absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 rounded-full transition-transform",
                  group.bg,
                  isActive ? "scale-100 opacity-20" : "scale-0 opacity-0"
                )} />
                <h3 className={cn("font-black text-2xl mb-1", isActive ? group.color : "text-slate-400")}>
                  {group.title}
                </h3>
                <p className={cn("text-sm font-bold mb-2", isActive ? "text-brand-navy" : "text-slate-300")}>
                  {group.subtitle}
                </p>
                <p className="text-xs text-ink-muted line-clamp-2">{group.criteria}</p>
              </button>
            );
          })}
        </div>

        {/* Active Profile Details */}
        <div className={cn(
          "card p-6 md:p-8 border-2 transition-all duration-500",
          groups[activeGroup].border,
          groups[activeGroup].lightBg
        )}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white", groups[activeGroup].bg)}>
                  <Pill size={20} />
                </div>
                <div>
                  <h3 className={cn("text-xl font-black", groups[activeGroup].color)}>
                    Tratamento: {groups[activeGroup].treatment}
                  </h3>
                  <p className="text-sm text-brand-navy font-medium mt-1">{groups[activeGroup].details}</p>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {groups[activeGroup].meds.map((med, idx) => (
                  <div key={idx} className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/50">
                    <h4 className="text-xs font-bold text-brand-navy uppercase tracking-wider mb-2">{med.class}</h4>
                    <p className="text-sm text-ink font-medium">{med.names}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eosinophil Box for Group E */}
            {activeGroup === 'E' && (
              <div className="md:w-1/3 bg-slate-900 p-5 rounded-2xl border border-rose-500/30 text-white">
                <div className="flex items-center gap-2 mb-3 text-rose-400">
                  <Activity size={18} />
                  <h4 className="font-bold">O Papel do Eosinófilo</h4>
                </div>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  O eosinófilo no sangue periférico é o biomarcador que prevê a resposta ao Corticoide Inalatório (CI) na DPOC.
                </p>
                <ul className="space-y-3 text-xs">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={14} />
                    <span><strong>&lt; 100 céls/µL:</strong> Evitar CI. Aumenta risco de Pneumonia.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                    <span><strong>≥ 300 céls/µL:</strong> CI é Mandatório. Reduz mortalidade.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="text-brand-blue shrink-0 mt-0.5" size={14} />
                    <span><strong>100-299 céls/µL:</strong> Zona cinzenta. Considere CI se exacerbador frequente.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. TRATAMENTO NÃO FARMACOLÓGICO */}
      <section id="non-pharmacological">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Tratamento Não Farmacológico (O Alicerce)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-line hover:border-emerald-500/30 transition-all">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3">
              <Wind size={18} className="text-emerald-500" />
              Cessação do Tabagismo
            </h3>
            <p className="text-sm text-ink-muted mb-3">
              Única medida que <strong className="text-brand-navy">reduz a velocidade de queda anual do VEF1</strong>. Sem cigarro, o declínio volta a ser o fisiológico (~30 mL/ano), e não acelerado (~60-80 mL/ano).
            </p>
            <p className="text-xs text-ink bg-[#31775a] text-black p-2 rounded border border-line">
              <strong>Estratégia:</strong> TCC + Bupropiona, TRN (adesivos/gomas) ou Vareniclina.
            </p>
          </div>

          <div className="card p-6 border-line hover:border-brand-blue/30 transition-all">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3">
              <Syringe size={18} className="text-brand-blue" />
              Vacinação (Prevenção)
            </h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li>• <strong>Influenza:</strong> Anual para TODOS.</li>
              <li>• <strong>Pneumococo:</strong> VPC13/VPP23 para &gt;65 anos ou VEF1 &lt;40%.</li>
              <li>• <strong>COVID-19 / VSR:</strong> Conforme calendário.</li>
              <li>• <strong>dTpa:</strong> Reforço a cada 10 anos.</li>
            </ul>
          </div>

          <div className="card p-6 border-line hover:border-amber-500/30 transition-all">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3">
              <HeartPulse size={18} className="text-amber-500" />
              Reabilitação Pulmonar
            </h3>
            <p className="text-sm text-ink-muted mb-3">
              Indicada para Grupos B e E. Melhora a <strong>eficiência muscular periférica</strong>, reduzindo a produção de lactato e a dispneia.
            </p>
            <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded border border-amber-200">
              Não melhora o VEF1, mas melhora drasticamente a qualidade de vida.
            </p>
          </div>

          <div className="card p-6 border-line hover:border-purple-500/30 transition-all">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3">
              <Activity size={18} className="text-purple-500" />
              Oxigenoterapia Domiciliar (ODP)
            </h3>
            <p className="text-sm text-ink-muted mb-3">
              Aumenta a <strong>sobrevida</strong> (Estudo NOTT) apenas em pacientes com <strong>Hipoxemia Grave em Repouso</strong>. Meta: ≥ 15 horas/dia.
            </p>
            <div className="space-y-3">
              <ul className="space-y-1 text-xs bg-[#31775a] text-black p-2 rounded border border-line">
                <li>• <strong>Critério 1:</strong> PaO₂ ≤ 55 mmHg ou SatO₂ ≤ 88% em repouso.</li>
                <li>• <strong>Critério 2:</strong> PaO₂ 56-59 mmHg + Cor Pulmonale (edema, IC direita) ou Hematócrito &gt; 55%.</li>
              </ul>
              <div className="p-2 rounded bg-rose-50 border border-rose-200 text-[10px] text-rose-700">
                <strong>Atenção:</strong> O O₂ <strong>não</strong> aumenta sobrevida se a hipoxemia for apenas ao esforço ou noturna (melhora apenas a dispneia).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXACERBAÇÃO AGUDA */}
      <section id="exacerbation">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Manejo da Exacerbação Aguda</h2>
        </div>

        <div className="card overflow-hidden border-rose-500/30 mb-6">
          <div className="bg-rose-500 p-4 text-white font-bold flex items-center gap-2">
            <Stethoscope size={20} />
            Diagnóstico Clínico (Critérios de Anthonisen)
          </div>
          <div className="p-6 bg-rose-500/5">
            <div className="flex flex-wrap gap-4 justify-center mb-6">
              <div className="bg-rose-50/80 px-4 py-2 rounded-full border border-rose-200 text-sm font-bold text-rose-700 shadow-sm">
                1. Piora da Dispneia
              </div>
              <div className="bg-rose-50/80 px-4 py-2 rounded-full border border-rose-200 text-sm font-bold text-rose-700 shadow-sm">
                2. Aumento do Volume do Escarro
              </div>
              <div className="bg-rose-50/80 px-4 py-2 rounded-full border border-rose-200 text-sm font-bold text-rose-700 shadow-sm">
                3. Mudança para Purulência
              </div>
            </div>
            <p className="text-center text-sm font-bold text-brand-navy">
              Regra Prática: Tem Purulência (cor)? = <span className="text-rose-600">Antibiótico</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 border-line">
            <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2">
              <Wind size={16} className="text-brand-blue" /> Broncodilatador
            </h4>
            <p className="text-sm text-ink-muted">
              Aumentar a dose do SABA/SAMA de resgate (uso com espaçador).
            </p>
          </div>
          <div className="card p-5 border-line bg-amber-500/5 border-amber-500/30">
            <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2">
              <Pill size={16} className="text-amber-500" /> Corticoide Sistêmico
            </h4>
            <p className="text-sm text-ink-muted">
              <strong>Obrigatório.</strong> Prednisona 40 mg/dia por 5 dias. Não precisa fazer desmame! Melhora o VEF1 mais rápido.
            </p>
          </div>
          <div className="card p-5 border-line">
            <h4 className="font-bold text-brand-navy mb-2 flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-500" /> Antibiótico
            </h4>
            <p className="text-sm text-ink-muted">
              Apenas se escarro purulento + dispneia/volume. (Amoxicilina+Clavulanato, Azitromicina ou Doxiciclina).
            </p>
          </div>
        </div>

        {/* VNI */}
        <div className="mt-6 p-6 rounded-xl bg-slate-900 border border-brand-blue/30 text-white flex flex-col md:flex-row gap-6 items-center">
          <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
            <Activity size={32} className="text-brand-blue" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-brand-blue mb-2">Suporte Ventilatório e O₂: O Padrão-Ouro</h4>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              A <strong>Ventilação Não Invasiva (VNI - BIPAP)</strong> é o padrão-ouro na DPOC exacerbada com acidose respiratória (pH &lt; 7,35). Ela reduz mortalidade e necessidade de intubação.
            </p>
            <div className="bg-brand-blue/10 border border-brand-blue/30 p-3 rounded-lg">
              <p className="text-xs text-brand-blue font-bold mb-1">Alvo de Oxigenação na Crise:</p>
              <p className="text-xs text-slate-300">Manter <strong>SatO₂ entre 88-92%</strong>. O excesso de O₂ pode causar narcose por CO₂ ao abolir o drive hipóxico e piorar o distúrbio V/Q.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TRATAMENTOS AVANÇADOS */}
      <section id="advanced">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-300">
            <ThermometerSnowflake size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">4. Tratamentos Avançados e Cirúrgicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-5 border-line">
            <h4 className="font-bold text-brand-navy mb-2">Cirurgia de Redução Volumétrica (CRVP)</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Retirada de bolhas gigantes de <strong>ápice</strong>. Melhora a retração elástica do pulmão remanescente, empurrando o PIP para uma zona mais estável.
            </p>
          </div>
          <div className="card p-5 border-line">
            <h4 className="font-bold text-brand-navy mb-2">Válvulas Endobrônquicas (Zephyr®)</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Válvula unidirecional: deixa o ar sair, mas não entrar. Reduz a hiperinsuflação grave sem cirurgia aberta.
            </p>
          </div>
          <div className="card p-5 border-line">
            <h4 className="font-bold text-brand-navy mb-2">Transplante Pulmonar</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              Indicado para DPOC Muito Grave (GOLD 4) com BODE score ≥ 7 (avaliando IMC, VEF1, Dispneia e Caminhada).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
