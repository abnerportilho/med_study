import React, { useState } from 'react';
import { Activity, HeartPulse, ShieldAlert, GitMerge, CheckCircle2, AlertTriangle, Users, Stethoscope, Scissors, Pill, ChevronDown, ChevronUp, Syringe, Dumbbell, Target, ShieldCheck } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SCCTreatment() {
  const [activeTab, setActiveTab] = useState<'criterios' | 'icp_crm' | null>(null);

  const toggleTab = (tab: 'criterios' | 'icp_crm') => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Princípios Fundamentais */}
      <section className="card p-6 border-l-4 border-l-brand-blue bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <ShieldAlert size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Princípios da Revascularização Miocárdica</h2>
        </div>
        
        <p className="text-ink dark:text-slate-300 mb-6">
          A revascularização na Síndrome Coronariana Crônica (SCC) deve ser considerada quando há a combinação de <strong>três elementos fundamentais</strong>:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-line flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center mb-3">
              <Activity size={20} />
            </div>
            <h3 className="font-bold text-sm text-brand-navy dark:text-slate-200 mb-1">Anatomia</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400">DAC significativa documentada (obstrução &gt; 50%)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-line flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3">
              <HeartPulse size={20} />
            </div>
            <h3 className="font-bold text-sm text-brand-navy dark:text-slate-200 mb-1">Isquemia</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400">Demonstrada em testes funcionais (&gt; 10% da massa ventricular)</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-line flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <Pill size={20} />
            </div>
            <h3 className="font-bold text-sm text-brand-navy dark:text-slate-200 mb-1">Clínica</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400">Persistência de sintomas apesar do tratamento clínico otimizado</p>
          </div>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-900/30 flex gap-3">
          <AlertTriangle className="text-orange-500 shrink-0" size={20} />
          <p className="text-sm text-orange-800 dark:text-orange-300">
            <strong>Conceito Chave:</strong> Na forma crônica estável, a revascularização <strong>não reduz a mortalidade</strong> em comparação ao tratamento clínico otimizado, mas proporciona alívio dos sintomas anginosos e melhora significativa da qualidade de vida.
          </p>
        </div>
      </section>

      {/* Interactive Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Critérios de Indicação Button */}
        <button
          onClick={() => toggleTab('criterios')}
          className={cn(
            "card p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border-2 bg-card border-line dark:bg-slate-800/50",
            activeTab === 'criterios' ? "border-brand-blue bg-brand-blue/5 dark:bg-blue-900/20" : "border-transparent"
          )}
        >
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
            <CheckCircle2 size={24} />
          </div>
          <h2 className="text-[21px] font-bold text-brand-navy dark:text-slate-100 text-center">Critérios de Indicação</h2>
          {activeTab === 'criterios' ? <ChevronUp className="text-brand-blue dark:text-blue-400" /> : <ChevronDown className="text-ink-muted dark:text-slate-400" />}
        </button>

        {/* ICP vs CRM Button */}
        <button
          onClick={() => toggleTab('icp_crm')}
          className={cn(
            "card p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 border-2 bg-card border-line dark:bg-slate-800/50",
            activeTab === 'icp_crm' ? "border-purple-500 bg-purple-500/5 dark:bg-purple-900/20" : "border-transparent"
          )}
        >
          <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <GitMerge size={24} />
          </div>
          <h2 className="text-[21px] font-bold text-brand-navy dark:text-slate-100 text-center">ICP vs CRM</h2>
          {activeTab === 'icp_crm' ? <ChevronUp className="text-purple-500 dark:text-purple-400" /> : <ChevronDown className="text-ink-muted dark:text-slate-400" />}
        </button>
      </div>

      {/* Expanded Content Area */}
      {activeTab && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          {activeTab === 'criterios' && (
            <section className="card p-6 border-t-4 border-t-green-500 bg-card border-line dark:bg-slate-800/50">
              <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100 mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-green-500" size={24} />
                Critérios Específicos de Indicação
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Angina refratária à medicação anti-isquêmica máxima tolerada',
                  'Lesão grave no Tronco Comum da Esquerda (TCE) - independente de isquemia devido ao alto risco de morte súbita',
                  'Doença multivascular em pacientes sintomáticos',
                  'Isquemia severa evidenciada nos testes de imagem'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-line">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-blue-400 shrink-0 mt-2"></div>
                    <p className="text-[16px] text-ink-muted dark:text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === 'icp_crm' && (
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Angioplastia (ICP) */}
              <div className="card p-6 border-t-4 border-t-brand-blue bg-card border-line dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 dark:bg-blue-900/30 flex items-center justify-center">
                    <Stethoscope className="text-brand-blue dark:text-blue-400" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100">Intervenção Coronária Percutânea (ICP)</h3>
                </div>
                <p className="text-xs text-ink-muted dark:text-slate-400 mb-4 uppercase tracking-wider font-bold">Angioplastia com Stent</p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-ink dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Procedimento:</strong> Minimamente invasivo. Acesso radial ou femoral. Dilatação com balão e implante de stent farmacológico.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-ink dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Recuperação:</strong> Rápida, com alta em 24 a 48 horas.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-ink dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" />
                    <span><strong>Pós-operatório:</strong> Exige Dupla Antiagregação Plaquetária (DAPT) por 6 meses (AAS + Clopidogrel), ou 1-3 meses se alto risco de sangramento.</span>
                  </li>
                </ul>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-line">
                  <p className="text-xs font-bold text-red-500 dark:text-red-400 mb-1">Limitações:</p>
                  <p className="text-xs text-ink-muted dark:text-slate-400">Possibilidade de reestenose do vaso tratado e menor eficácia em doença difusa ou calcificada extensa.</p>
                </div>
              </div>

              {/* Cirurgia (CRM) */}
              <div className="card p-6 border-t-4 border-t-purple-500 bg-card border-line dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <Scissors className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100">Cirurgia de Revascularização (CRM)</h3>
                </div>
                <p className="text-xs text-ink-muted dark:text-slate-400 mb-4 uppercase tracking-wider font-bold">Bypass / Ponte de Safena e Mamária</p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-ink dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Procedimento:</strong> Invasivo (esternotomia média). Anestesia geral, circulação extracorpórea. Enxertos: Mamária para DA, Safena/Radial para demais.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-ink dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Recuperação:</strong> Internação prolongada, recuperação de semanas a meses.</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-ink dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                    <span><strong>Vantagens:</strong> Superior em doença multivaso complexa, diabéticos ou lesão grave de TCE. Resultados mais duradouros. Não exige DAPT prolongado.</span>
                  </li>
                </ul>

                <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-line">
                  <p className="text-xs font-bold text-red-500 dark:text-red-400 mb-1">Limitações:</p>
                  <p className="text-xs text-ink-muted dark:text-slate-400">Maior risco cirúrgico em pacientes idosos ou com múltiplas comorbidades.</p>
                </div>
              </div>
            </section>
          )}
        </div>
      )}

      {/* Heart Team */}
      <section className="card p-6 bg-brand-navy dark:bg-slate-900 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-line">
        <div className="flex items-center gap-3 mb-6 bg-black/30 dark:bg-black/50 p-4 rounded-xl">
          <div className="w-10 h-10 rounded-xl bg-slate-800/40 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <Users size={20} />
          </div>
          <h2 className="text-xl font-bold text-white">A Decisão do Heart Team</h2>
        </div>

        <p className="text-slate-900 dark:text-slate-100 font-bold font-sans text-sm mb-6 bg-slate-100/90 dark:bg-slate-800/90 p-3 rounded-lg">
          A escolha entre os métodos depende de fatores anatômicos (Escore SYNTAX), clínicos (idade, diabetes, fragilidade) e técnicos. A decisão segue a lógica multidisciplinar:
        </p>

        <div className="space-y-4">
          <div className="flex items-start gap-4 bg-slate-100/10 dark:bg-slate-800/50 p-4 rounded-xl border border-white/10 dark:border-slate-700">
            <div className="w-8 h-8 rounded-full bg-brand-blue dark:bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1">
              <Stethoscope size={16} />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy dark:text-slate-100 mb-1">Preferência por ICP (Angioplastia)</h4>
              <p className="text-sm text-ink-muted dark:text-slate-300">Quando a revascularização é possível anatomicamente, mas o paciente <strong>não é candidato cirúrgico</strong> devido a fragilidade ou múltiplas comorbidades.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-slate-100/10 dark:bg-slate-800/50 p-4 rounded-xl border border-white/10 dark:border-slate-700">
            <div className="w-8 h-8 rounded-full bg-purple-600 dark:bg-purple-700 text-white flex items-center justify-center shrink-0 mt-1">
              <Scissors size={16} />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy dark:text-slate-100 mb-1">Preferência por CRM (Cirurgia)</h4>
              <p className="text-sm text-ink-muted dark:text-slate-300">Anatomia complexa multivaso (alto Escore SYNTAX), comprometimento da DA proximal associada a outras lesões, e especialmente em pacientes <strong>diabéticos</strong>.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 bg-slate-100/10 dark:bg-slate-800/50 p-4 rounded-xl border border-white/10 dark:border-slate-700">
            <div className="w-8 h-8 rounded-full bg-teal-600 dark:bg-teal-700 text-white flex items-center justify-center shrink-0 mt-1">
              <GitMerge size={16} />
            </div>
            <div>
              <h4 className="font-bold text-brand-navy dark:text-slate-100 mb-1">Tratamento Híbrido</h4>
              <p className="text-sm text-ink-muted dark:text-slate-300">Combina ambas as técnicas em procedimentos distintos. Reservado para situações anatômicas específicas onde a abordagem combinada oferece vantagem técnica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamento Farmacológico - Combinado */}
      <section className="card p-6 border-t-4 border-t-brand-blue bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
        <h2 className="text-2xl font-bold text-brand-navy dark:text-slate-100 mb-6 text-center">Tratamento Farmacológico</h2>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Coluna 1: Redução de Eventos (Balão Vermelho) */}
          <div className="flex flex-col gap-4 bg-red-50/80 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0 shadow-sm">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-lg font-bold text-red-900 dark:text-red-300">Redução de Eventos</h3>
            </div>
            <p className="text-sm text-red-800/80 dark:text-red-400/80 mb-2">Visa prevenir IAM, AVC e morte cardiovascular. A terapia combinada ideal pode reduzir o risco de eventos em até 70%.</p>

            <div className="space-y-3">
              <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm">
                <h4 className="font-bold text-sm text-red-700 dark:text-red-400 mb-1">Ácido Acetilsalicílico (AAS)</h4>
                <p className="text-sm text-ink-muted dark:text-slate-400"><strong>75 a 100 mg/dia.</strong> Base da antiplaquetarização. Manter indefinidamente, salvo alergia grave ou risco hemorrágico inaceitável.</p>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm">
                <h4 className="font-bold text-sm text-red-700 dark:text-red-400 mb-1">Estatinas de Alta Potência</h4>
                <p className="text-sm text-ink-muted dark:text-slate-400"><strong>Meta: LDL &lt; 50 mg/dL.</strong> Atorvastatina 40-80mg ou Rosuvastatina 20-40mg. Se não atingir meta: associar Ezetimiba ou Inibidores de PCSK9. Intolerantes: Ácido bempedoico + Ezetimiba.</p>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm">
                <h4 className="font-bold text-sm text-red-700 dark:text-red-400 mb-1">IECA ou BRA</h4>
                <p className="text-sm text-ink-muted dark:text-slate-400">Ramipril, enalapril ou perindopril. Preferenciais em disfunção de VE, HAS ou Diabetes, oferecendo proteção vascular.</p>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm">
                <h4 className="font-bold text-sm text-red-700 dark:text-red-400 mb-1">Betabloqueadores (Redução de Eventos)</h4>
                <p className="text-sm text-ink-muted dark:text-slate-400">Indicados particularmente se FE &lt; 40% ou após evento isquêmico agudo prévio.</p>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-xl border border-red-100 dark:border-red-900/30 shadow-sm">
                <h4 className="font-bold text-sm text-red-700 dark:text-red-400 mb-1">Inibidores de SGLT2 ou Agonistas de GLP-1</h4>
                <p className="text-sm text-ink-muted dark:text-slate-400">Em pacientes com <strong>Diabetes Mellitus tipo 2</strong>, reduzem eventos CV maiores independentemente do controle glicêmico.</p>
              </div>
            </div>
          </div>

          {/* Coluna 2: Alívio dos Sintomas (Balão Azul Claro) */}
          <div className="flex flex-col gap-4 bg-sky-50/80 dark:bg-sky-900/10 border border-sky-100 dark:border-sky-900/30 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center text-sky-600 dark:text-sky-400 shrink-0 shadow-sm">
                <Pill size={20} />
              </div>
              <h3 className="text-lg font-bold text-sky-900 dark:text-sky-300">Alívio dos Sintomas</h3>
            </div>
            <p className="text-sm text-sky-800/80 dark:text-sky-400/80 mb-4">Visam reduzir a frequência e intensidade dos episódios anginosos, aumentar o limiar de isquemia e melhorar a tolerância ao exercício.</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wider mb-3 border-b border-sky-200 dark:border-sky-800 pb-2">Primeira Linha</h4>
                <div className="space-y-3">
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Betabloqueadores</h5>
                    <p className="text-sm text-ink-muted dark:text-slate-400">Reduzem FC, contratilidade e PA. Eficazes se FC elevada em repouso. <em>Não associar a BCC di-hidropiridínicos rotineiramente.</em></p>
                  </div>
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Bloqueadores de Canais de Cálcio (BCC)</h5>
                    <p className="text-sm text-ink-muted dark:text-slate-400">Verapamil/Diltiazem (não di-hydro) se BB contraindicados (ex: broncoespasmo). Amlodipino pode ser associado com cuidado.</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-sky-900 dark:text-sky-300 uppercase tracking-wider mb-3 border-b border-sky-200 dark:border-sky-800 pb-2">Segunda Linha e Associações</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Nitratos de Ação Rápida</h5>
                    <p className="text-xs text-ink-muted dark:text-slate-400">Sublingual/spray para alívio imediato ou profilaxia pré-esforço.</p>
                  </div>
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Nitratos de Ação Prolongada</h5>
                    <p className="text-xs text-ink-muted dark:text-slate-400">Prevenção de episódios. Exige janela livre (geralmente à noite) para evitar tolerância.</p>
                  </div>
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Ivabradina</h5>
                    <p className="text-xs text-ink-muted dark:text-slate-400">Inibidor do canal If. Usar se FC repouso &gt; 70 bpm após BB máximo tolerado, ou se BB contraindicado.</p>
                  </div>
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Trimetazidina</h5>
                    <p className="text-xs text-ink-muted dark:text-slate-400">Otimiza uso de glicose pelo miocárdio (eficiência energética) sem alterar hemodinâmica.</p>
                  </div>
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Ranolazina</h5>
                    <p className="text-xs text-ink-muted dark:text-slate-400">Reduz fluxo de cálcio tardio. Útil em angina refratária sem reduzir FC ou PA.</p>
                  </div>
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-sky-100 dark:border-sky-900/30 shadow-sm">
                    <h5 className="font-bold text-sm text-sky-700 dark:text-sky-400 mb-1">Alopurinol</h5>
                    <p className="text-xs text-ink-muted dark:text-slate-400">300-600 mg/dia. Pode reduzir eventos anginosos por redução do estresse oxidativo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estilo de Vida e Vacinação */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="card p-6 border-t-4 border-t-green-500 bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
              <Dumbbell size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Estilo de Vida</h2>
          </div>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
              <div>
                <strong className="text-sm text-brand-navy dark:text-slate-200 block">Cessação Tabágica</strong>
                <span className="text-xs text-ink-muted dark:text-slate-400">Fator modificável mais importante. Reduz risco significativamente em poucos anos.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
              <div>
                <strong className="text-sm text-brand-navy dark:text-slate-200 block">Atividade Física Regular</strong>
                <span className="text-xs text-ink-muted dark:text-slate-400">Reabilitação supervisionada, aeróbico moderado ≥ 150 min/semana.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
              <div>
                <strong className="text-sm text-brand-navy dark:text-slate-200 block">Controle de Peso</strong>
                <span className="text-xs text-ink-muted dark:text-slate-400">IMC &lt; 25 kg/m² ou perda de 5-10% do peso em obesos.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 mt-1.5 shrink-0"></div>
              <div>
                <strong className="text-sm text-brand-navy dark:text-slate-200 block">Dieta Cardioprotetora</strong>
                <span className="text-xs text-ink-muted dark:text-slate-400">Mediterrânea ou DASH. Reduzir gorduras saturadas/trans, aumentar ômega-3 e fibras. Restringir sódio se HAS.</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="card p-6 border-t-4 border-t-purple-500 bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Syringe size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Vacinação</h2>
          </div>
          <p className="text-sm text-ink-muted dark:text-slate-400 mb-4">Medida preventiva com impacto significativo na morbimortalidade cardiovascular:</p>
          
          <div className="space-y-3">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-line">
              <strong className="text-sm text-brand-navy dark:text-slate-200 block mb-1">Influenza</strong>
              <span className="text-xs text-ink-muted dark:text-slate-400">Anual para todos. Preferencialmente quadrivalente alta dose em &gt; 60 anos.</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-line">
              <strong className="text-sm text-brand-navy dark:text-slate-200 block mb-1">Pneumocócica</strong>
              <span className="text-xs text-ink-muted dark:text-slate-400">Dose única conjugada (VPC13/15/20) seguida de polissacarídica 23-valente após 1 ano (reforço a cada 5 anos).</span>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900/50 p-3 rounded-lg border border-line">
              <strong className="text-sm text-brand-navy dark:text-slate-200 block mb-1">COVID-19</strong>
              <span className="text-xs text-ink-muted dark:text-slate-400">Esquema primário completo e reforços conforme calendário.</span>
            </div>
          </div>
        </section>
      </div>

      {/* Abordagem Personalizada Brasileira */}
      <section className="card p-6 bg-slate-50 dark:bg-slate-900/50 border border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-navy dark:bg-slate-800 flex items-center justify-center text-white">
            <Target size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Abordagem Personalizada Brasileira (Algoritmo)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-line shadow-sm">
            <h3 className="font-bold text-sm text-brand-navy dark:text-slate-100 mb-3 pb-2 border-b border-line">FE Preservada (≥50%)</h3>
            <ul className="space-y-3 text-xs text-ink-muted dark:text-slate-400">
              <li><strong className="text-brand-blue dark:text-blue-400">FC ≥ 70 e PA ≥ 120/70:</strong><br/>BB ou BCC não di-hidro</li>
              <li><strong className="text-brand-blue dark:text-blue-400">FC ≥ 70 e PA &lt; 120/70:</strong><br/>BB + Ivabradina, Ranolazina ou Trimetazidina</li>
              <li><strong className="text-brand-blue dark:text-blue-400">FC &lt; 70:</strong><br/>BCC di-hidro, Nitrato or Ranolazina</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-line shadow-sm">
            <h3 className="font-bold text-sm text-brand-navy dark:text-slate-100 mb-3 pb-2 border-b border-line">FE Reduzida (&lt;50%)</h3>
            <ul className="space-y-3 text-xs text-ink-muted dark:text-slate-400">
              <li><strong className="text-brand-blue dark:text-blue-400">Prioridade Absoluta:</strong><br/>BB com evidência de redução de mortalidade (Bisoprolol, Carvedilol, Metoprolol succinato)</li>
              <li><strong className="text-brand-blue dark:text-blue-400">Se FC elevada:</strong><br/>Ivabradina como complemento</li>
              <li><strong className="text-red-500 dark:text-red-400">Evitar:</strong><br/>BCC com efeito inotrópico negativo</li>
            </ul>
          </div>

          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl border border-line shadow-sm">
            <h3 className="font-bold text-sm text-brand-navy dark:text-slate-100 mb-3 pb-2 border-b border-line">INOCA (Sem Obstrução)</h3>
            <ul className="space-y-3 text-xs text-ink-muted dark:text-slate-400">
              <li><strong className="text-brand-blue dark:text-blue-400">Doença Microvascular:</strong><br/>BB, BCC, Ivabradina</li>
              <li><strong className="text-brand-blue dark:text-blue-400">Vasoespasmo Primário:</strong><br/>BCC, Nitratos de ação rápida para crises</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
