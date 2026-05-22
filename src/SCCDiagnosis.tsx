import React, { useState } from 'react';
import { Activity, GitMerge, Search, AlertTriangle, CheckCircle2, HeartPulse, Zap, Target, ArrowRight, Lightbulb, ListChecks, Stethoscope, Droplet } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SCCDiagnosis() {
  const [activeExam, setActiveExam] = useState('te');

  return (
    <div className="flex flex-col gap-8">
      {/* Raciocínio Inicial */}
      <section className="card p-6 border-l-4 border-l-brand-blue bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <GitMerge size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">O Caminho Mental do Diagnóstico</h2>
        </div>
        
        <p className="text-ink dark:text-slate-300 mb-6">
          Na suspeita de doença coronariana crônica, o raciocínio <strong>não começa pelo exame</strong>, começa pela clínica.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border border-line">
          <div className="flex-1 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold text-xl mx-auto md:mx-0 mb-3 shadow-md">1</div>
            <h3 className="font-bold text-brand-navy dark:text-slate-200 mb-1">Clínica</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400">Esse quadro parece isquemia crônica?</p>
          </div>
          <ArrowRight className="text-slate-300 dark:text-slate-600 hidden md:block" size={24} />
          <div className="flex-1 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl mx-auto md:mx-0 mb-3 shadow-md">2</div>
            <h3 className="font-bold text-brand-navy dark:text-slate-200 mb-1">Probabilidade</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400">A chance de DAC obstrutiva é baixa, moderada ou alta?</p>
          </div>
          <ArrowRight className="text-slate-300 dark:text-slate-600 hidden md:block" size={24} />
          <div className="flex-1 text-center md:text-left">
            <div className="w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-xl mx-auto md:mx-0 mb-3 shadow-md">3</div>
            <h3 className="font-bold text-brand-navy dark:text-slate-200 mb-1">Confirmação</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400">Preciso demonstrar doença anatômica, isquemia funcional, ou ambas?</p>
          </div>
        </div>
      </section>

      {/* Fechando o Diagnóstico */}
      <section className="card p-6 border-t-4 border-t-brand-blue bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <Search size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Quando eu diagnostico DCC?</h2>
        </div>
        
        <p className="text-ink dark:text-slate-300 mb-6">
          A DCC não é diagnosticada por um único exame isolado nem por fator de risco. O diagnóstico nasce da integração entre <strong>quadro clínico</strong>, <strong>probabilidade clínica</strong> e <strong>evidência objetiva</strong> (anatômica e/ou funcional).
        </p>

        <div className="bg-brand-blue/5 dark:bg-blue-900/20 border border-brand-blue/20 dark:border-blue-900/30 p-4 rounded-xl mb-8">
          <div className="flex gap-3">
            <Lightbulb className="text-brand-blue dark:text-blue-400 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-brand-navy dark:text-slate-200 font-medium">
              <strong>Versão de prova:</strong> Diagnostico DCC quando há quadro clínico compatível com isquemia miocárdica crônica estável associado a evidência objetiva de doença coronariana, seja anatômica (AngioTC/Cineangiocoronariografia), seja funcional (testes isquêmicos positivos), ou quando já existe DAC previamente documentada, infarto prévio ou revascularização.
            </p>
          </div>
        </div>

        <h3 className="font-bold text-brand-navy dark:text-slate-200 mb-4">Situações que fecham o diagnóstico:</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-line">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-green-500" size={18} />
              <h4 className="font-bold text-sm text-brand-navy dark:text-slate-200">1. DAC Anatômica Documentada</h4>
            </div>
            <p className="text-xs text-ink-muted dark:text-slate-400">Quadro clínico típico/compatível + DAC obstrutiva demonstrada por AngioTC ou Cineangiocoronariografia.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-line">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-green-500" size={18} />
              <h4 className="font-bold text-sm text-brand-navy dark:text-slate-200">2. Isquemia Objetiva</h4>
            </div>
            <p className="text-xs text-ink-muted dark:text-slate-400">Quadro clínico típico/compatível + Prova funcional positiva (Teste Ergométrico, Eco Stress, Cintilografia, RM).</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-line">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-green-500" size={18} />
              <h4 className="font-bold text-sm text-brand-navy dark:text-slate-200">3. DAC Prévia Conhecida</h4>
            </div>
            <p className="text-xs text-ink-muted dark:text-slate-400">Pacientes com infarto prévio, revascularização prévia ou DAC já documentada (mesmo sem dor típica atual).</p>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-xl border border-red-100 dark:border-red-900/30">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="text-red-500" size={20} />
            <h3 className="font-bold text-red-800 dark:text-red-300">Pegadinhas que valem ouro</h3>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-100/50 dark:bg-slate-800 p-3 rounded-lg border border-red-100 dark:border-red-900/30 shadow-sm flex flex-col gap-1">
                <span className="text-xs font-bold text-red-700 dark:text-red-400 line-through">Angina = DCC automaticamente</span>
                <span className="text-xs text-ink-muted dark:text-slate-400"><strong>Não.</strong> Angina gera suspeita, mas o diagnóstico completo integra clínica + evidência objetiva.</span>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800 p-3 rounded-lg border border-red-100 dark:border-red-900/30 shadow-sm flex flex-col gap-1">
                <span className="text-xs font-bold text-red-700 dark:text-red-400 line-through">AngioTC é prova funcional</span>
                <span className="text-xs text-ink-muted dark:text-slate-400"><strong>Não.</strong> É um exame anatômico.</span>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800 p-3 rounded-lg border border-red-100 dark:border-red-900/30 shadow-sm flex flex-col gap-1">
                <span className="text-xs font-bold text-red-700 dark:text-red-400 line-through">Fator de risco alto já fecha diagnóstico</span>
                <span className="text-xs text-ink-muted dark:text-slate-400"><strong>Não.</strong> Fator de risco isolado, sem sintoma e sem evidência objetiva, não fecha DCC.</span>
              </div>
              <div className="bg-slate-100/50 dark:bg-slate-800 p-3 rounded-lg border border-red-100 dark:border-red-900/30 shadow-sm flex flex-col gap-1">
                <span className="text-xs font-bold text-red-700 dark:text-red-400 line-through">Todo paciente com dor torácica tem DCC</span>
                <span className="text-xs text-ink-muted dark:text-slate-400"><strong>Não.</strong> A dor precisa ser investigada e contextualizada.</span>
              </div>
            </div>
        </div>
      </section>

      {/* Probabilidade Pré-Teste (PPT) e Conduta */}
      <section className="card p-6 bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Target size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Probabilidade Pré-Teste (PPT) e Conduta</h2>
            <p className="text-sm text-ink-muted dark:text-slate-400">A PPT decide SE você deve investigar. O algoritmo didático clássico orienta a conduta:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {[
            { level: 'Muito Baixa', action: 'Não exige novos testes' },
            { level: 'Baixa', action: 'Reavaliação ou AngioTC' },
            { level: 'Moderada', action: 'Prova Funcional ou AngioTC' },
            { level: 'Alta', action: 'Prova Funcional' },
            { level: 'Muito Alta', action: 'Cineangiocoronariografia (Invasivo)' }
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl border border-[#c2c2c2] bg-[#151d44] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl group cursor-default">
              <span className="text-[17px] font-black uppercase tracking-[0.15em] mb-3 text-white opacity-90 group-hover:opacity-100">{item.level}</span>
              <span className="text-sm font-bold leading-tight text-white/90">{item.action}</span>
            </div>
          ))}
          <div className="p-5 rounded-2xl border border-[#c2c2c2] bg-[#151d44] flex flex-col items-start justify-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl group cursor-default md:col-span-1">
            <div className="mb-2">
              <h5 className="text-[18px] font-black text-white uppercase tracking-wider">Conduta</h5>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[20px] font-bold text-brand-blue tracking-tight">Investigação</span>
              <div className="flex flex-col">
                <span className="text-[17px] text-white/80">Estratégia clínica</span>
                <span className="text-[16px] text-white/60">Individualizada</span>
                <span className="text-[17px] text-brand-blue/80 font-medium italic mt-1">Sempre clínica</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-xl border border-orange-100 dark:border-orange-900/30 flex gap-3">
          <AlertTriangle className="text-orange-500 shrink-0" size={20} />
          <p className="text-sm text-orange-800 dark:text-orange-300">
            <strong>Atenção (Prática Moderna vs Aula):</strong> O modelo clássico (Diamond-Forrester) tende a superestimar a probabilidade. Diretrizes recentes recalibraram a PPT, reconhecendo melhor o grupo de baixa probabilidade onde testes podem ser adiados.
          </p>
        </div>
      </section>

      {/* Funcional vs Anatômico */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6 border-t-4 border-t-purple-500 bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="text-purple-500" size={24} />
            <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100">Provas Funcionais</h3>
          </div>
          <p className="text-sm text-ink-muted dark:text-slate-400 mb-4">Respondem: <strong>"Essa doença está causando isquemia?"</strong></p>
          <ul className="space-y-2">
            {[
              'Teste Ergométrico',
              'Ecocardiograma com Estresse',
              'Cintilografia de Perfusão Miocárdica',
              'Ressonância Magnética com Estresse'
            ].map(item => (
              <li key={item} className="flex items-center gap-2 text-sm text-ink dark:text-slate-300">
                <CheckCircle2 size={16} className="text-purple-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 border-t-4 border-t-teal-500 bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
          <div className="flex items-center gap-3 mb-4">
            <Search className="text-teal-500" size={24} />
            <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100">Exames Anatômicos</h3>
          </div>
          <p className="text-sm border-[#b48383] bg-[#ed8ee8] p-3 rounded-lg text-brand-navy font-bold shadow-sm mb-4">Respondem: <strong>"Há obstrução anatômica / placa?"</strong></p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-ink dark:text-slate-300">
              <CheckCircle2 size={16} className="text-teal-500" />
              <strong>AngioTC de Coronárias</strong> (Não invasivo)
            </li>
            <li className="flex items-center gap-2 text-sm text-ink dark:text-slate-300">
              <CheckCircle2 size={16} className="text-red-500" />
              <strong>Cineangiocoronariografia</strong> (Invasivo / Cateterismo)
            </li>
          </ul>
        </div>
      </section>

      {/* Exames Complementares Iniciais */}
      <section className="card p-6 bg-[#f8fafc] border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-900/40">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
            <Stethoscope size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Exames Complementares Iniciais</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-600/5 dark:bg-blue-900/20 p-5 rounded-2xl border border-blue-200 dark:border-blue-900/30 transition-all duration-300 hover:border-brand-blue/50 hover:shadow-lg group">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-4 flex items-center gap-2 uppercase tracking-wider">
              <Droplet size={16} className="text-brand-blue dark:text-blue-400 group-hover:scale-110 transition-transform" />
              Laboratório
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-blue-500 shrink-0 mt-1.5"></div>
                <span><strong className="text-brand-navy dark:text-slate-200">Glicemia de jejum e HbA1c</strong></span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-blue-500 shrink-0 mt-1.5"></div>
                <span><strong className="text-brand-navy dark:text-slate-200">Função renal:</strong> Creatinina, ureia</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-blue-500 shrink-0 mt-1.5"></div>
                <span><strong className="text-brand-navy dark:text-slate-200">Função tireoideana</strong></span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-blue-500 shrink-0 mt-1.5"></div>
                <span><strong className="text-brand-navy dark:text-slate-200">Perfil lipídico:</strong> Colesterol total e frações, triglicérides</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue dark:bg-blue-500 shrink-0 mt-1.5"></div>
                <span><strong className="text-brand-navy dark:text-slate-200">Lp(a):</strong> Apenas na primeira consulta</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0 mt-1.5"></div>
                <span><strong className="text-brand-navy dark:text-slate-200">PCR:</strong> Controverso, inespecífico</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-purple-600/5 dark:bg-purple-900/20 p-5 rounded-2xl border border-purple-200 dark:border-purple-900/30 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg group">
              <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-2 flex items-center gap-2">
                <Activity size={16} className="text-purple-500 group-hover:scale-110 transition-transform" />
                ECG de Repouso
              </h3>
              <p className="text-sm text-ink-muted dark:text-slate-400">Fundamental na avaliação inicial de todos os pacientes.</p>
            </div>

            {/* Eco Transtorácico (already updated in previous turn but refining consistency) */}
            <div className="bg-red-600/5 dark:bg-slate-900/80 p-5 rounded-2xl border border-red-200 dark:border-line transition-all duration-300 hover:border-brand-blue/50 hover:shadow-lg group">
              <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-2 flex items-center gap-2">
                <HeartPulse size={16} className="text-red-400 group-hover:scale-110 transition-transform" />
                Ecocardiograma Transtorácico
              </h3>
              <p className="text-sm text-ink-muted dark:text-slate-400">Avalia alterações segmentares e faz o diagnóstico diferencial com outras patologias (ex: EAo).</p>
            </div>

            <div className="bg-brand-blue/10 dark:bg-blue-900/30 p-5 rounded-2xl border border-brand-blue/30 dark:border-blue-900/40 transition-all duration-300 hover:border-brand-blue/60 hover:shadow-lg group">
              <h3 className="text-sm font-bold text-brand-blue dark:text-blue-400 mb-1 flex items-center gap-2">
                <Target size={16} className="group-hover:rotate-12 transition-transform" />
                Testes Isquêmicos
              </h3>
              <p className="text-xs text-brand-blue/80 dark:text-blue-300/80">Abordagem funcional detalhada na seção abaixo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detalhamento dos Exames */}
      <section className="card p-6 bg-card border-line transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-slate-800/50">
        <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100 mb-6 flex items-center gap-3">
          <HeartPulse className="text-brand-blue dark:text-blue-400" size={24} />
          Escolha do Método (Filtro do Paciente)
        </h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'te', label: 'Teste Ergométrico', icon: Activity },
            { id: 'cintilo', label: 'Cintilografia', icon: Target },
            { id: 'eco', label: 'Eco Estresse', icon: HeartPulse },
            { id: 'angiotc', label: 'AngioTC', icon: Search },
            { id: 'cine', label: 'Cateterismo', icon: Zap }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveExam(tab.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all border",
                activeExam === tab.id
                  ? "bg-brand-blue text-white border-brand-blue shadow-md"
                  : "bg-slate-50 dark:bg-slate-900 text-ink-muted dark:text-slate-400 border-line hover:border-brand-blue/30 hover:text-brand-navy dark:hover:text-slate-100"
              )}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-line p-6 relative overflow-hidden">
          {activeExam === 'te' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100 mb-2">Teste Ergométrico</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-4">Primeira escolha investigativa na probabilidade pré-teste moderada quando o paciente possui condições físicas de realizar esforço.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800 dark:bg-slate-950 p-5 rounded-2xl border border-line transition-all duration-300 hover:border-brand-blue/50 hover:shadow-lg group">
                  <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-[0.2em] mb-4">Fases & Interpretação</h4>
                  <ul className="text-sm text-slate-300 space-y-3">
                    <li><strong className="text-white">Esforço:</strong> 8 a 12 min até atingir a FC máxima predita.</li>
                    <li><strong className="text-white">Recuperação:</strong> 6 min de monitoramento contínuo.</li>
                    <li><strong className="text-white">Critério Positivo:</strong> Infradesnivelamento do segmento ST ≥ 1 mm (0,1 mV) com morfologia <strong className="text-red-400 underline underline-offset-4 decoration-2">horizontal ou descendente</strong>.</li>
                    <li className="text-orange-400/90 italic text-xs">Atenção: Morfologias ascendentes ou côncavas geralmente são falsos positivos (DAC não obstrutiva).</li>
                  </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-line">
                    <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Acurácia & Avaliação Adicional</h4>
                    <p className="text-sm text-ink-muted dark:text-slate-400 mb-2">Sensibilidade: 45-55% | Especificidade: 77-85%</p>
                    <ul className="text-sm text-ink-muted dark:text-slate-400 space-y-1">
                      <li>• Capacidade funcional (METs)</li>
                      <li>• Comportamento pressórico (Queda &gt; 20 mmHg = mau prognóstico)</li>
                      <li>• Arritmias induzidas pelo exercício</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/30">
                    <h4 className="font-bold text-xs text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">Contraindicações Absolutas</h4>
                    <p className="text-sm text-red-800 dark:text-red-300">Bloqueio de Ramo Esquerdo (BRE), Fibrilação Atrial (FA), incapacidade de caminhar e angina instável recente.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeExam === 'cintilo' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100 mb-2">Cintilografia de Perfusão Miocárdica</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-4">Método de escolha quando o Teste Ergométrico está contraindicado (BRE, FA, marcapasso ou limitações físicas).</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-line">
                  <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Método & Interpretação</h4>
                  <ul className="text-sm text-ink-muted dark:text-slate-400 space-y-2">
                    <li><strong className="text-brand-navy dark:text-slate-200">Estresse:</strong> Físico ou Farmacológico (adenosina, dipiridamol ou dobutamina - útil na asma/DPOC).</li>
                    <li><strong className="text-brand-navy dark:text-slate-200">Defeito Reversível:</strong> Hipocaptação no estresse que normaliza no repouso = <strong className="text-green-600 dark:text-green-400">Isquemia viável</strong>.</li>
                    <li><strong className="text-brand-navy dark:text-slate-200">Defeito Fixo:</strong> Hipocaptação persiste em ambas as fases = <strong className="text-red-600 dark:text-red-400">Área de fibrose/infarto antigo (cicatriz)</strong>.</li>
                  </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-line">
                    <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Extensão & Acurácia</h4>
                    <p className="text-sm text-ink-muted dark:text-slate-400 mb-2">Sensibilidade: 90-91% | Especificidade: 75-84%</p>
                    <ul className="text-sm text-ink-muted dark:text-slate-400 space-y-1">
                      <li>• <strong className="text-brand-navy dark:text-slate-200">Leve:</strong> &lt; 10% do miocárdio</li>
                      <li>• <strong className="text-brand-navy dark:text-slate-200">Moderada:</strong> 10% a 30%</li>
                      <li>• <strong className="text-brand-navy dark:text-slate-200">Grave:</strong> &gt; 30% (Indicação forte para cateterismo)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-900/30">
                    <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-1">Vantagens Adicionais</h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300">Delimita precisamente o território coronariano acometido (anterior, inferior, lateral) e avalia a fração de ejeção do VE.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeExam === 'eco' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100 mb-2">Ecocardiograma com Estresse (Stress Echo)</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-4">Alternativa imagenológica que permite avaliar a função contrátil miocárdica em tempo real durante o estresse.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-line">
                  <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Alterações da Contratilidade</h4>
                  <ul className="text-sm text-ink-muted dark:text-slate-400 space-y-2">
                    <li><span className="font-bold text-green-600 dark:text-green-400">Normocinesia:</span> Contração normal do segmento.</li>
                    <li><span className="font-bold text-yellow-600 dark:text-yellow-400">Hipocinesia:</span> Redução da contratilidade (isquemia moderada).</li>
                    <li><span className="font-bold text-orange-600 dark:text-orange-400">Acinesia:</span> Ausência completa de movimento (isquemia severa/infarto).</li>
                    <li><span className="font-bold text-red-600 dark:text-red-400">Discinesia:</span> Movimento paradoxal - expansão na sístole (infarto transmural antigo).</li>
                  </ul>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-line">
                    <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Acurácia & Indicações</h4>
                    <p className="text-sm text-ink-muted dark:text-slate-400 mb-2">Sensibilidade: 80-85% | Especificidade: 80-88%</p>
                    <ul className="text-sm text-ink-muted dark:text-slate-400 space-y-1">
                      <li>• Diferencia dor torácica cardíaca vs não cardíaca</li>
                      <li>• Avalia viabilidade miocárdica antes de revascularização</li>
                      <li>• Avalia simultaneamente anatomia e função valvar</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-900/30">
                    <h4 className="font-bold text-xs text-orange-600 dark:text-orange-400 uppercase tracking-wider mb-1">Limitação Importante</h4>
                    <p className="text-sm text-orange-800 dark:text-orange-300">Altamente dependente do operador, apresentando variabilidade considerável entre diferentes examinadores.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeExam === 'angiotc' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100 mb-2">AngioTC de Coronárias</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-4">Exame anatômico não invasivo. Mostra presença de placa e estenose, mas não demonstra se a lesão gera isquemia.</p>
              
              <div className="bg-slate-100/50 dark:bg-slate-800 p-4 rounded-lg border border-line">
                <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Papel Clínico</h4>
                <p className="text-sm text-ink-muted dark:text-slate-400">
                  Excelente para excluir doença obstrutiva (alto valor preditivo negativo) em pacientes com risco baixo a moderado. 
                  Quando a pergunta clínica é "esse paciente tem obstrução anatômica?", a angioTC é excelente. Quando a pergunta é "essa lesão está causando isquemia e tem peso funcional?", os testes funcionais ganham protagonismo.
                </p>
              </div>
            </div>
          )}

          {activeExam === 'cine' && (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-lg font-bold text-brand-navy dark:text-slate-100 mb-2">Cineangiocoronariografia (Cateterismo)</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-4">Padrão-ouro para o diagnóstico anatômico da DAC, permitindo visualização direta da luz das artérias coronárias sob fluoroscopia.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-line">
                    <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Indicações Principais</h4>
                    <ul className="text-sm text-ink-muted dark:text-slate-400 space-y-2">
                      <li>• PPT muito elevada (&gt; 90%)</li>
                      <li>• Testes isquêmicos positivos, inconclusivos ou duvidosos com sintomas evidentes</li>
                      <li>• Angina limitante ou rapidamente progressiva</li>
                      <li>• Insuficiência cardíaca de provável etiologia isquêmica</li>
                      <li>• Avaliação de enxertos/stents prévios</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-line">
                    <h4 className="font-bold text-xs text-brand-blue dark:text-blue-400 uppercase tracking-wider mb-2">Técnica & Interpretação</h4>
                    <ul className="text-sm text-ink-muted dark:text-slate-400 space-y-2">
                      <li><strong className="text-brand-navy dark:text-slate-200">Acesso:</strong> Radial (preferido, menor risco) ou femoral.</li>
                      <li><strong className="text-brand-navy dark:text-slate-200">Lesão Significativa:</strong> Obstrução &gt; 50%.</li>
                      <li><strong className="text-brand-navy dark:text-slate-200">Lesão Grave/Obstrutiva:</strong> Redução &gt; 70%.</li>
                      <li><strong className="text-brand-navy dark:text-slate-200">Pior Prognóstico:</strong> Lesão em Tronco de Coronária Esquerda (TCE) ou doença multivascular.</li>
                      <li><strong className="text-brand-navy dark:text-slate-200">Fluxo TIMI:</strong> 3 (perfusão normal) a 0 (oclusão total).</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/30">
                    <h4 className="font-bold text-xs text-red-600 dark:text-red-400 uppercase tracking-wider mb-2">Riscos & Complicações</h4>
                    <p className="text-sm text-red-800 dark:text-red-300 mb-2">Taxa de complicações major &lt; 1%.</p>
                    <ul className="text-sm text-red-800 dark:text-red-300 space-y-1">
                      <li>• IAM, AVC, dissecção arterial, embolia</li>
                      <li>• Nefropatia induzida por contraste</li>
                      <li>• Reações anafilactoides</li>
                    </ul>
                    <p className="text-xs text-red-700 dark:text-red-400 mt-2"><em>Atenção à carga de radiação e anticoagulação (cuidado em renais/idosos).</em></p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900/30">
                    <h4 className="font-bold text-xs text-green-700 dark:text-green-400 uppercase tracking-wider mb-2">Implicações Terapêuticas</h4>
                    <p className="text-sm text-green-800 dark:text-green-300">
                      Porta de entrada para <strong className="text-brand-navy dark:text-slate-200">revascularização miocárdica</strong> (Angioplastia com Stent ou Cirurgia de Bypass) quando há lesões obstrutivas significativas com área de isquemia &gt; 10% em pacientes refratários ao tratamento clínico.
                    </p>
                    <p className="text-xs text-green-700 dark:text-green-400 mt-2">A escolha depende da anatomia (Escore SYNTAX), clínica e equipe.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Algoritmo Final Resumido */}
      <section className="card p-6 bg-brand-navy dark:bg-slate-900 text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <ListChecks size={20} />
          </div>
          <h2 className="text-xl font-bold text-white">Algoritmo Final de Decisão</h2>
        </div>

        <div className="space-y-4 mb-8">
          {[
            { step: '1º', text: 'Estime a probabilidade pré-teste (PPT) a partir de idade, sexo e padrão da dor.' },
            { step: '2º', text: 'Decida se vale investigar. Muito baixa = não. Moderada/Alta = sim. Muito alta = Invasivo direto.' },
            { step: '3º', text: 'Defina a pergunta: Funcional ("há isquemia?") ou Anatômica ("há obstrução?").' },
            { step: '4º', text: 'Se funcional, filtre o paciente: Consegue fazer esforço e tem ECG normal? TE. Senão? Imagem (Eco/Cinti).' },
            { step: '5º', text: 'Se muito alto risco ou sintomas intensos, a Cineangiocoronariografia (cateterismo) é a referência.' }
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-slate-800/40 p-3 rounded-lg border border-white/10">
              <span className="font-bold text-brand-blue dark:text-blue-400 bg-white/10 px-2 py-1 rounded text-xs">{item.step}</span>
              <p className="text-sm text-slate-100 pt-0.5">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Frase de Ouro */}
        <div className="bg-black/40 dark:bg-black/60 p-5 rounded-xl border border-brand-blue/30 flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-blue dark:bg-blue-600 flex items-center justify-center shrink-0 shadow-lg">
            <Lightbulb className="text-white" size={24} />
          </div>
          <div>
            <h3 className="text-brand-blue dark:text-blue-400 font-bold text-sm uppercase tracking-wider mb-1">Frase de Ouro para Gravar</h3>
            <p className="text-lg font-medium text-white leading-snug">
              "A probabilidade pré-teste decide <span className="text-brand-blue dark:text-blue-400">SE</span> investigar; a pergunta clínica e as características do paciente decidem <span className="text-brand-blue dark:text-blue-400">QUAL</span> exame pedir."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
