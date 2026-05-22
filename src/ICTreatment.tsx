import React, { useState } from 'react';
import { Pill, Activity, ShieldCheck, Zap, Heart, ArrowRight, Info, AlertCircle, CheckCircle2, ListFilter, Users, ClipboardList, Thermometer, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ICTreatment() {
  const [activeCategory, setActiveCategory] = useState('pillars');
  const [selectedPhenotype, setSelectedPhenotype] = useState('icfer');

  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Header Section */}
      <section className="card p-8 border-l-4 border-l-brand-blue bg-gradient-to-br from-card to-bg/30 shadow-sm dark:from-slate-800/50 dark:to-slate-900/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-bg-blue dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-400 shadow-inner">
            <Pill size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">Tratamento da Insuficiência Cardíaca</h2>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-bold uppercase tracking-widest">Estratégia Terapêutica Baseada em Evidência</p>
          </div>
        </div>
        
        {/* Phenotype Selector - MOVED TO TOP */}
        <div className="flex items-center gap-2 p-1 bg-bg dark:bg-slate-900/50 rounded-2xl border border-line w-fit mb-6 overflow-x-auto no-scrollbar">
          {[
            { id: 'icfer', label: 'ICFEr (≤ 40%)', color: 'bg-brand-blue text-white' },
            { id: 'icfem', label: 'ICFEm (41-49%)', color: 'bg-amber-500 text-white' },
            { id: 'icfep', label: 'ICFEp (≥ 50%)', color: 'bg-emerald-600 text-white' },
            { id: 'hfimpef', label: 'HFimpEF (Melhorada)', color: 'bg-indigo-600 text-white' },
          ].map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedPhenotype(p.id)}
              className={cn(
                "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap",
                selectedPhenotype === p.id
                  ? p.color + " shadow-md"
                  : "text-ink-muted hover:text-brand-navy"
              )}
            >
              {p.label}
            </button>
          ))}
        </div>

        <div className="space-y-4 text-ink leading-relaxed">
          <p className="text-lg font-medium text-brand-navy dark:text-slate-200">
            {selectedPhenotype === 'icfer' 
              ? "Na ICFEr, o tratamento moderno baseia-se nos 4 pilares farmacológicos que mudam o prognóstico."
              : selectedPhenotype === 'icfem'
              ? "Na ICFEm, o pilar central são os iSGLT2 (Classe I), com as demais classes sendo consideradas conforme o perfil clínico."
              : selectedPhenotype === 'icfep'
              ? "Na ICFEp, o foco principal é o uso de iSGLT2 (Classe I) e o controle agressivo de comorbidades."
              : "Na HFimpEF, a melhora da FE não autoriza a suspensão da terapia; o risco de recaída exige manutenção do tratamento."}
          </p>
          {selectedPhenotype === 'icfer' && (
            <p className="dark:text-slate-300">
              O objetivo é iniciar e titular as medicações rapidamente (ACC 2024), sem esperar a otimização completa de uma classe para iniciar a próxima.
            </p>
          )}
        </div>
      </section>

      {/* Navigation Tabs for Treatment Sections */}
      <div className="flex items-center gap-2 border-b border-line pb-px overflow-x-auto no-scrollbar">
        {[
          { id: 'pillars', label: selectedPhenotype === 'icfer' ? 'Os 4 Pilares' : 'Pilar Central', icon: ShieldCheck },
          { id: 'doses', label: 'Tabela de Doses', icon: ListFilter },
          { id: 'classes', label: 'Detalhes por Classe', icon: Pill },
          { id: 'specific', label: 'Cenários Específicos', icon: Zap },
          { id: 'sus', label: 'Recorte SUS/PCDT', icon: Users },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveCategory(tab.id)}
            className={cn(
              "flex items-center gap-2 px-4 py-3 text-sm font-bold transition-all border-b-2 -mb-px whitespace-nowrap",
              activeCategory === tab.id
                ? "border-brand-blue text-brand-blue dark:text-blue-400"
                : "border-transparent text-ink-muted dark:text-slate-400 hover:text-brand-navy dark:hover:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600"
            )}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeCategory === 'pillars' && (
          <motion.div
            key="pillars"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-8"
          >
            {selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: 'ARNI / IECA / BRA', desc: 'Bloqueio do Eixo RAA. ARNI é preferencial em sintomáticos.', color: 'bg-bg-blue dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-900/30' },
                  { title: 'Betabloqueador', desc: 'Carvedilol, Metoprolol ou Bisoprolol. Freia toxicidade simpática.', color: 'bg-bg-red dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-100 dark:border-red-900/30' },
                  { title: 'MRA', desc: 'Espironolactona. Bloqueia aldosterona e reduz fibrose.', color: 'bg-bg-orange dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 border-orange-100 dark:border-orange-900/30' },
                  { title: 'iSGLT2', desc: 'Dapa ou Empagliflozina. Independente de diabetes.', color: 'bg-bg-green dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30' },
                ].map((p, i) => (
                  <div key={i} className={cn("p-5 rounded-2xl border flex flex-col gap-2 shadow-sm", p.color)}>
                    <h4 className="font-bold text-sm">{p.title}</h4>
                    <p className="text-xs opacity-80 leading-snug">{p.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card p-6 border-l-4 border-l-emerald-500 bg-bg-green/30 dark:bg-emerald-900/20">
                <h3 className="font-bold text-emerald-800 dark:text-emerald-400 mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} />
                  Pilar Central (Classe I - ESC 2023)
                </h3>
                <div className="p-5 bg-card dark:bg-slate-800/50 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-sm mb-4">
                  <h4 className="font-bold text-brand-navy dark:text-slate-100 text-sm mb-2">iSGLT2 (Dapagliflozina / Empagliflozina)</h4>
                  <p className="text-xs text-ink-muted dark:text-slate-400 leading-relaxed">
                    Atualmente é a única classe com recomendação <strong>Classe I, Nível A</strong> para redução de hospitalização por IC e morte cardiovascular em pacientes com FE preservada ou levemente reduzida.
                  </p>
                </div>
                <div className="p-4 bg-card/50 dark:bg-slate-800/30 rounded-xl border border-emerald-100 dark:border-emerald-900/30 text-xs text-emerald-900 dark:text-emerald-100 italic">
                  "As demais classes (RAASi, BB, MRA) possuem recomendações de menor força (2a/2b) nestes fenótipos e devem ser individualizadas."
                </div>
              </div>
            )}

            <section className="card p-6 bg-bg dark:bg-slate-900/50 border-line">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-4 flex items-center gap-2">
                <Info size={18} className="text-brand-blue dark:text-blue-400" />
                {selectedPhenotype === 'hfimpef' ? 'Atenção: Não desprescrever' : 'Como pensar sem decorar errado'}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-ink dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>{selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' ? '4 Pilares' : 'iSGLT2'}:</strong> Tratamento modificador de prognóstico (sobrevida).</span>
                </li>
                {selectedPhenotype === 'hfimpef' && (
                  <li className="flex items-start gap-3 text-sm text-ink dark:text-slate-300 font-bold text-red-600 dark:text-red-400">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>Manter GDMT da ICFEr mesmo com a melhora da FE para reduzir o risco de recaída (ACC 2024).</span>
                  </li>
                )}
                <li className="flex items-start gap-3 text-sm text-ink dark:text-slate-300">
                  <CheckCircle2 size={16} className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Diurético:</strong> Tratamento de congestão/sintoma (fundamental em todos os fenótipos congestos).</span>
                </li>
                {selectedPhenotype === 'icfer' && (
                  <li className="flex items-start gap-3 text-sm text-ink dark:text-slate-300">
                    <CheckCircle2 size={16} className="text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Titulação Rápida:</strong> ACC 2024 recomenda não esperar para colocar os 4 pilares.</span>
                  </li>
                )}
              </ul>
            </section>

          </motion.div>
        )}

        {activeCategory === 'doses' && (
          <motion.div
            key="doses"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="card p-6 border-line bg-card dark:bg-slate-800/50 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-bg dark:bg-slate-900/50 border-b border-line">
                    <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Classe</th>
                    <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Fármaco</th>
                    <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Dose Inicial</th>
                    <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Dose Alvo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {[
                    { class: 'IECA', drug: 'Enalapril', start: '2,5 mg 2x/dia', target: '10–20 mg 2x/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'IECA', drug: 'Captopril', start: '6,25 mg 3x/dia', target: '50 mg 3x/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'BRA', drug: 'Losartana', start: '25–50 mg/dia', target: '50–150 mg/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'ARNI', drug: 'Sacubitril/Valsartana', start: '49/51 mg 2x/dia', target: '97/103 mg 2x/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'Betabloq', drug: 'Carvedilol', start: '3,125 mg 2x/dia', target: '25–50 mg 2x/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'Betabloq', drug: 'Metoprolol Succ.', start: '12,5–25 mg/dia', target: '200 mg/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'MRA', drug: 'Espironolactona', start: '12,5–25 mg/dia', target: '25–50 mg/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'iSGLT2', drug: 'Dapagliflozina', start: '10 mg/dia', target: '10 mg/dia', show: true },
                    { class: 'iSGLT2', drug: 'Empagliflozina', start: '10 mg/dia', target: '10 mg/dia', show: true },
                    { class: 'Hidral+Nit', drug: 'Combinação Fixa', start: '20/37,5 mg 3x/dia', target: '40/75 mg 3x/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                    { class: 'Ivabradina', drug: 'Ivabradina', start: '5 mg 2x/dia', target: '7,5 mg 2x/dia', show: selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef' },
                  ].filter(r => r.show).map((row, i) => (
                    <tr key={i} className="hover:bg-bg dark:hover:bg-slate-900/50 transition-colors">
                      <td className="p-3 font-bold text-brand-blue dark:text-blue-400">{row.class}</td>
                      <td className="p-3 font-medium text-brand-navy dark:text-slate-200">{row.drug}</td>
                      <td className="p-3 text-ink-muted dark:text-slate-400">{row.start}</td>
                      <td className="p-3 font-bold text-emerald-700 dark:text-emerald-400">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}


        {activeCategory === 'classes' && (
          <motion.div
            key="classes"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {selectedPhenotype === 'icfer' && (
              <>
                {/* 1. ARNI/IECA/BRA */}
                <div className="card p-6 border-l-4 border-l-blue-500 bg-card dark:bg-slate-800/50">
                  <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-4 flex items-center gap-2">
                    <ShieldCheck size={18} />
                    1. ARNI, IECA e BRA: O Eixo Renina-Angiotensina
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-3 text-sm text-ink dark:text-slate-300">
                      <p><strong>Mecanismo:</strong> Reduzem vasoconstrição, retenção de sódio e remodelamento. ARNI é o preferido em sintomáticos elegíveis.</p>
                      <div className="p-3 bg-bg-red dark:bg-red-900/30 rounded-lg border border-red-100 dark:border-red-900/30 text-xs text-red-800 dark:text-red-100">
                        <strong>Washout:</strong> Se trocar IECA por ARNI, aguardar 36 horas para evitar angioedema.
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-bg dark:bg-slate-900/50 rounded-lg border border-line text-xs">
                        <span className="font-bold text-brand-navy dark:text-slate-200">Contraindicação:</span> Gestação.
                      </div>
                      <div className="p-3 bg-bg dark:bg-slate-900/50 rounded-lg border border-line text-xs">
                        <span className="font-bold text-brand-navy dark:text-slate-200">Monitorar:</span> Creatinina e Potássio (K).
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Betabloqueadores */}
                <div className="card p-6 border-l-4 border-l-red-500 bg-card dark:bg-slate-800/50">
                  <h3 className="font-bold text-red-700 dark:text-red-400 mb-4 flex items-center gap-2">
                    <Activity size={18} />
                    2. Betabloqueadores (O Trio de Ouro)
                  </h3>
                  <p className="text-sm text-ink dark:text-slate-300 mb-4">Apenas três têm evidência robusta: <strong>Carvedilol, Metoprolol Succinato e Bisoprolol</strong>.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 bg-bg dark:bg-slate-900/50 rounded-xl border border-line text-xs">
                      <p className="font-bold text-brand-navy dark:text-slate-200 mb-1">Carvedilol</p>
                      <p className="text-ink-muted dark:text-slate-400">Potente, bom se HAS associada. Baixa mais a PA.</p>
                    </div>
                    <div className="p-3 bg-bg dark:bg-slate-900/50 rounded-xl border border-line text-xs">
                      <p className="font-bold text-brand-navy dark:text-slate-200 mb-1">Metoprolol Succ.</p>
                      <p className="text-ink-muted dark:text-slate-400">Mais seletivo. Útil se a PA for o limite.</p>
                    </div>
                    <div className="p-3 bg-bg dark:bg-slate-900/50 rounded-xl border border-line text-xs">
                      <p className="font-bold text-brand-navy dark:text-slate-200 mb-1">Bisoprolol</p>
                      <p className="text-ink-muted dark:text-slate-400">Opção sólida, dose única diária.</p>
                    </div>
                  </div>
                </div>

                {/* 3. MRA */}
                <div className="card p-6 border-l-4 border-l-amber-500 bg-card dark:bg-slate-800/50">
                  <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-3">3. Antagonistas Mineralocorticoides</h3>
                  <p className="text-xs text-ink dark:text-slate-300 leading-relaxed mb-3">Espironolactona. Foco em bloquear aldosterona e reduzir fibrose.</p>
                  <div className="p-3 bg-bg-orange dark:bg-orange-900/30 rounded-lg border border-amber-100 dark:border-amber-900/30 text-[10px] text-amber-800 dark:text-amber-100">
                    <strong>Cuidado:</strong> Hipercalemia e Ginecomastia (Eplerenona dá menos ginecomastia).
                  </div>
                </div>
              </>
            )}

            {selectedPhenotype === 'icfep' && (
              <div className="card p-6 border-l-4 border-l-emerald-500 bg-card dark:bg-slate-800/50">
                <h3 className="font-bold text-emerald-700 dark:text-emerald-400 mb-4 flex items-center gap-2">
                  <Heart size={18} />
                  Manejo de Comorbidades (Central na ICFEp)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    { label: 'Pressão Arterial', detail: 'Controle agressivo para reduzir hospitalizações.' },
                    { label: 'Fibrilação Atrial', detail: 'Controle de ritmo/frequência e anticoagulação.' },
                    { label: 'Obesidade / DM2', detail: 'Perda de peso e iSGLT2 são fundamentais.' },
                    { label: 'DRC / DAC', detail: 'Tratamento específico da causa base.' },
                    { label: 'Apneia do Sono', detail: 'Rastreio e tratamento com CPAP se indicado.' },
                  ].map((c, i) => (
                    <div key={i} className="p-3 bg-bg dark:bg-slate-900/50 rounded-xl border border-line text-xs">
                      <p className="font-bold text-brand-navy dark:text-slate-200 mb-1">{c.label}</p>
                      <p className="text-ink-muted dark:text-slate-400">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        )}

        {activeCategory === 'specific' && (
          <motion.div
            key="specific"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { drug: 'Diuréticos (Furosemida)', role: 'Descongestão', detail: 'Usar a menor dose para manter euvolemia. Vigiar K e Função Renal.', show: true },
                { drug: 'Hidralazina + Nitrato', role: 'Nichos', detail: 'Pacientes negros NYHA III-IV ou intolerantes a RAAS.', show: selectedPhenotype === 'icfer' },
                { drug: 'Ivabradina', role: 'Controle de FC', detail: 'Ritmo sinusal + FC ≥ 70 bpm apesar de Betabloq máximo.', show: selectedPhenotype === 'icfer' },
                { drug: 'Digoxina', role: 'Sintomáticos', detail: 'Reduz hospitalização. Janela terapêutica estreita (0,5-0,9 ng/mL).', show: selectedPhenotype === 'icfer' },
              ].filter(i => i.show).map((item, i) => (
                <div key={i} className="p-4 rounded-2xl border border-line bg-card dark:bg-slate-800/50 shadow-sm">
                  <h4 className="font-bold text-brand-navy dark:text-slate-100 text-sm mb-1">{item.drug}</h4>
                  <p className="text-[10px] font-black text-brand-blue dark:text-blue-400 uppercase mb-2">{item.role}</p>
                  <p className="text-xs text-ink-muted dark:text-slate-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>

          </motion.div>
        )}

        {activeCategory === 'sus' && (
          <motion.div
            key="sus"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <section className="card p-6 border-line bg-bg-green/30 dark:bg-emerald-900/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-bg-green dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Users size={20} />
                </div>
                <h3 className="font-bold text-brand-navy dark:text-slate-100">Recorte SUS / PCDT 2024</h3>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-card dark:bg-slate-800/50 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-2">Dapagliflozina no SUS</h4>
                  <p className="text-xs text-ink-muted dark:text-slate-400">Adultos com ICFEr, NYHA II–IV, FE &lt; 40% e sintomas.</p>
                </div>
                {selectedPhenotype === 'icfer' && (
                  <div className="p-4 bg-card dark:bg-slate-800/50 rounded-xl border border-emerald-100 dark:border-emerald-900/30">
                    <h4 className="font-bold text-emerald-700 dark:text-emerald-400 text-sm mb-2">Sacubitril/Valsartana (ARNI)</h4>
                    <p className="text-xs text-ink-muted dark:text-slate-400 mb-2">Critérios mais restritivos que diretrizes internacionais:</p>
                    <ul className="text-[10px] text-ink-muted dark:text-slate-400 space-y-1 list-disc pl-4">
                      <li>Idade &lt; 75 anos</li>
                      <li>NYHA II e FE &lt; 35%</li>
                      <li>BNP &gt; 150 ou NT-proBNP &gt; 600</li>
                      <li>Persistência de sintomas apesar de tratamento otimizado</li>
                    </ul>
                  </div>
                )}
              </div>
            </section>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Resumo de Prova */}
      <section className="card p-6 border-line bg-bg-navy text-white shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-400 shadow-inner">
            <Zap size={20} />
          </div>
          <div>
            <h3 className="font-bold text-lg tracking-tight">Tabela de Memorização Rápida</h3>
            <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Resumo para Prova e Prática</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <ClipboardList size={14} />
            Resumo Operacional para Decorar
          </h4>
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="p-4 font-bold text-amber-400">Classe</th>
                <th className="p-4 font-bold text-amber-400">Muda Prognóstico?</th>
                <th className="p-4 font-bold text-amber-400">Cenário Principal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { class: 'ARNI / IECA / BRA', prog: (selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef') ? 'Sim' : '2a/2b', when: (selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef') ? 'Base da ICFEr' : 'HAS / Isquemia', show: true },
                { class: 'Betabloqueador', prog: (selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef') ? 'Sim' : '2a/2b', when: (selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef') ? 'Base da ICFEr' : 'Pós-IAM / Arritmias', show: true },
                { class: 'Espironolactona (MRA)', prog: (selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef') ? 'Sim' : '2b', when: (selectedPhenotype === 'icfer' || selectedPhenotype === 'hfimpef') ? 'Sintomáticos' : 'HAS Resistente', show: true },
                { class: 'iSGLT2', prog: 'Sim', when: 'Todos os Fenótipos', show: true },
                { class: 'Diurético', prog: 'Não*', when: 'Congestão (Sintomas)', show: true },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <span className="bg-white/10 px-2 py-1 rounded-md font-bold text-white inline-block">
                      {row.class}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={cn(
                      "px-2 py-1 rounded-md font-black inline-block",
                      row.prog === 'Sim' ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"
                    )}>
                      {row.prog}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="text-slate-300">
                      {row.when}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { fen: 'ICFEm', frase: 'iSGLT2 é o pilar mais sólido; o restante pode ser considerado.' },
            { fen: 'ICFEp', frase: 'iSGLT2 + Diurético + Tratar Comorbidades.' },
            { fen: 'HFimpEF', frase: 'Manter tratamento da ICFEr mesmo com FE melhorada.' },
          ].map((f, i) => (
            <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[10px] text-amber-400 font-bold uppercase mb-1">{f.fen} — Frase de Prova</p>
              <p className="text-xs text-slate-200 leading-snug">{f.frase}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
          <p className="text-[10px] text-slate-400 italic leading-relaxed">
            * Diuréticos são fundamentais para o alívio de sintomas e redução de internações por congestão, mas não possuem evidência isolada de redução de mortalidade.
            {selectedPhenotype !== 'icfer' && " Em ICFEp/ICFEm, o iSGLT2 é o único pilar com recomendação Classe I para prognóstico cardiovascular (ESC 2023)."}
          </p>
        </div>
      </section>

      {/* Medidas Não Farmacológicas */}
      <section className="p-6 rounded-2xl bg-bg-blue dark:bg-blue-900/20 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <Thermometer size={24} className="text-brand-blue dark:text-blue-400" />
          <h3 className="font-bold text-xl text-brand-navy dark:text-slate-100">Medidas Não Farmacológicas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-brand-blue dark:text-blue-400 uppercase">Vacinação (PCDT/SUS)</h4>
            <ul className="text-sm space-y-2 text-brand-navy dark:text-slate-300">
              <li className="flex items-center gap-2">• Influenza (Anual)</li>
              <li className="flex items-center gap-2">• Pneumococo</li>
              <li className="flex items-center gap-2">• COVID-19</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-brand-blue dark:text-blue-400 uppercase">Estilo de Vida</h4>
            <ul className="text-sm space-y-2 text-brand-navy dark:text-slate-300">
              <li className="flex items-center gap-2">• Reabilitação Cardíaca</li>
              <li className="flex items-center gap-2">• Restrição Hídrica (se grave/congesto)</li>
              <li className="flex items-center gap-2">• Controle de Comorbidades</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Frase Final */}
      <div className="p-6 bg-bg dark:bg-slate-900/50 rounded-2xl border border-line text-center">
        <p className="text-brand-navy dark:text-slate-200 font-bold italic">
          "Na ICFEr, o tratamento moderno é construir rapidamente os 4 pilares e usar diurético para descongestão; fora da ICFEr, os iSGLT2 foram a grande virada recente."
        </p>
      </div>

    </div>
  );
}
