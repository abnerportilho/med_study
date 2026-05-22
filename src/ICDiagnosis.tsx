import React from 'react';
import { Activity, CheckCircle2, AlertCircle, Zap, ShieldCheck, Heart, ArrowRight, ClipboardList, Search, Info, Globe, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ICDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Header Section */}
      <section className="card p-8 border-l-4 border-l-brand-blue bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/50 shadow-sm border-line">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-bg-blue dark:bg-blue-500/20 flex items-center justify-center text-brand-blue dark:text-blue-400 shadow-inner">
            <Activity size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">Diagnóstico Clínico-Sindrômico</h2>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-bold uppercase tracking-widest">Critérios e Fluxo de Investigação</p>
          </div>
        </div>
        <div className="space-y-4 text-ink dark:text-slate-300 leading-relaxed">
          <p className="text-lg font-medium text-brand-navy dark:text-slate-100">
            O diagnóstico de IC é essencialmente clínico na abordagem inicial, baseado na combinação de história, exame físico e exames de triagem.
          </p>
          <p>
            A confirmação exige evidência objetiva de disfunção cardíaca (estrutural ou funcional) e, em casos de dúvida, níveis elevados de peptídeos natriuréticos.
          </p>
        </div>
      </section>

      {/* Critérios de Framingham */}
      <section className="card p-6 md:p-8 border-line bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-bg-purple dark:bg-purple-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <ClipboardList size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Critérios de Framingham</h2>
        </div>
        <p className="text-sm text-ink-muted dark:text-slate-400 mb-6 italic">
          Diagnóstico: 2 critérios maiores OU 1 maior + 2 menores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Critérios Maiores */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-red-600 dark:text-red-400 uppercase tracking-widest flex items-center gap-2">
              <Zap size={14} /> Critérios Maiores
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Dispneia Paroxística Noturna',
                'Turgência Jugular Patológica',
                'Estertores Crepitantes',
                'Cardiomegalia (Raio-X)',
                'Edema Agudo de Pulmão',
                'Terceira Bulha (B3)',
                'Refluxo Hepatojugular',
                'Perda de peso > 4,5kg em 5 dias com tratamento'
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-bg-red dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 text-sm font-medium text-red-900 dark:text-red-100 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-red-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Critérios Menores */}
          <div className="space-y-4">
            <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest flex items-center gap-2">
              <Activity size={14} /> Critérios Menores
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                'Edema de Tornozelo (Bilateral)',
                'Tosse Noturna',
                'Dispneia aos Esforços',
                'Hepatomegalia',
                'Derrame Pleural',
                'Capacidade Vital reduzida em 1/3',
                'Taquicardia (> 120 bpm)'
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-lg bg-bg-blue dark:bg-blue-500/10 border border-blue-100 dark:border-blue-500/20 text-sm font-medium text-blue-900 dark:text-blue-100 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo Diagnóstico */}
      <section className="card p-6 md:p-8 border-line bg-bg dark:bg-slate-900/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-bg-blue dark:bg-blue-500/20 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <Search size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Fluxo de Investigação (Diretriz SBC)</h2>
        </div>

        <div className="relative space-y-8">
          {/* Step 1 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-card dark:bg-slate-800 border-2 border-brand-blue dark:border-blue-500 text-brand-blue dark:text-blue-400 flex items-center justify-center font-bold shrink-0 z-10">1</div>
            <div className="flex-1">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-2">Suspeita Clínica</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400">História de dispneia, fadiga, ortopneia e fatores de risco (HAS, IAM, Chagas).</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-card dark:bg-slate-800 border-2 border-brand-blue dark:border-blue-500 text-brand-blue dark:text-blue-400 flex items-center justify-center font-bold shrink-0 z-10">2</div>
            <div className="flex-1">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-2">Exames de Triagem (ECG + Raio-X)</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-3">Um ECG totalmente normal torna o diagnóstico de IC improvável.</p>
              <div className="p-3 bg-card dark:bg-slate-800/50 rounded-lg border border-line">
                <p className="text-xs font-bold text-brand-blue dark:text-blue-400 uppercase mb-1">Achados Sugestivos</p>
                <p className="text-xs text-ink-muted dark:text-slate-400">Sobrecarga de câmaras, ondas Q de infarto antigo, bloqueios de ramo (especialmente BRE).</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-card dark:bg-slate-800 border-2 border-brand-blue dark:border-blue-500 text-brand-blue dark:text-blue-400 flex items-center justify-center font-bold shrink-0 z-10">3</div>
            <div className="flex-1">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-2">Peptídeos Natriuréticos (Se disponível)</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-3">BNP ou NT-proBNP. Essencial para excluir IC em casos de dúvida.</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-bg-green dark:bg-emerald-500/10 rounded-lg border border-emerald-100 dark:border-emerald-500/20">
                  <p className="text-[10px] font-black text-emerald-700 dark:text-emerald-400 uppercase mb-1">Exclusão (VPN)</p>
                  <p className="text-xs text-emerald-800 dark:text-emerald-100 italic">BNP &lt; 35 pg/mL ou NT-proBNP &lt; 125 pg/mL (Crônico)</p>
                </div>
                <div className="p-3 bg-bg-red dark:bg-red-500/10 rounded-lg border border-red-100 dark:border-red-500/20">
                  <p className="text-[10px] font-black text-red-700 dark:text-red-400 uppercase mb-1">Sugestivo</p>
                  <p className="text-xs text-red-800 dark:text-red-100 italic">Valores elevados sugerem IC, mas exigem confirmação por imagem.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-blue dark:bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 z-10 shadow-lg shadow-brand-blue/30 dark:shadow-blue-600/30">4</div>
            <div className="flex-1">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-2">Ecocardiograma Transtorácico</h3>
              <p className="text-sm text-ink-muted dark:text-slate-400">O "Padrão-Ouro" para fenotipagem. Avalia Fração de Ejeção (FE), volumes, função diastólica e valvopatias.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Etiologias da IC no Brasil */}
      <section className="card p-6 md:p-8 border-line bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-bg-green dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Globe size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Etiologias da IC no Brasil</h2>
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-widest">O Retrato da Realidade Brasileira</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-4 bg-bg dark:bg-slate-800/50 rounded-xl border border-line text-sm text-ink dark:text-slate-300 leading-relaxed">
            <p>
              No Brasil atual, a IC é majoritariamente <strong>isquêmica e hipertensiva</strong>, mas o país ainda mantém duas "assinaturas" etiológicas próprias: <strong>doença de Chagas e valvopatia reumática</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-line bg-card dark:bg-slate-800/50 shadow-sm">
              <h4 className="font-bold text-brand-navy dark:text-slate-100 text-sm mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue dark:bg-blue-500" />
                Volume Total
              </h4>
              <p className="text-xs text-ink-muted dark:text-slate-400 leading-relaxed">
                Isquêmica e Hipertensiva mandam no volume total, especialmente em centros urbanos e no envelhecimento populacional.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-line bg-card dark:bg-slate-800/50 shadow-sm">
              <h4 className="font-bold text-brand-navy dark:text-slate-100 text-sm mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                Chagas e Valvar
              </h4>
              <p className="text-xs text-ink-muted dark:text-slate-400 leading-relaxed">
                Chagas continua estratégica (pior prognóstico) e a Febre Reumática mantém peso maior que em países de alta renda.
              </p>
            </div>
          </div>

          {/* Tabela de Etiologias */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-bg dark:bg-slate-800/50 border-b border-line">
                  <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Etiologia</th>
                  <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Peso no Brasil</th>
                  <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Comentário de Prova</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {[
                  { name: 'Isquêmica', weight: 'Muito Alta', comment: 'Hoje é uma das principais no Brasil.' },
                  { name: 'Hipertensiva', weight: 'Muito Alta', comment: 'Extremamente prevalente; muitas vezes misturada à isquêmica.' },
                  { name: 'Dilatada não isquêmica', weight: 'Mod. a Alta', comment: 'Bloco heterogêneo (idiopática, alcoólica, miocardite).' },
                  { name: 'Valvar', weight: 'Moderada', comment: 'No Brasil tem mais peso do que em muitos países ricos.' },
                  { name: 'Chagásica', weight: 'Estratégica', comment: 'Menos frequente que antes, mas continua muito relevante e mais grave.' },
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-3 font-bold text-brand-navy dark:text-slate-100">{row.name}</td>
                    <td className="p-3">
                      <span className={cn(
                        "px-2 py-0.5 rounded-full font-bold text-[10px]",
                        row.weight === 'Muito Alta' ? "bg-bg-red dark:bg-red-500/20 text-red-700 dark:text-red-400" : "bg-bg-orange dark:bg-amber-500/20 text-amber-700 dark:text-amber-400"
                      )}>
                        {row.weight}
                      </span>
                    </td>
                    <td className="p-3 text-ink-muted dark:text-slate-400 italic">{row.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* O que mais cai em prova */}
          <div className="p-5 bg-brand-navy dark:bg-slate-900 rounded-2xl text-white">
            <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Zap size={14} /> O que mais cai em prova
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                No Brasil, diferente de EUA/Europa, <strong>Chagas</strong> ainda deve ser lembrada.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                As principais etiologias gerais hoje são <strong>isquêmica e hipertensiva</strong>.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                <strong>Valvopatia reumática</strong> ainda faz parte da nossa realidade.
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1 shrink-0" />
                <strong>IC chagásica</strong> costuma ter <strong>pior prognóstico</strong> que outras etiologias.
              </li>
            </ul>
          </div>

          <div className="p-4 bg-bg-green dark:bg-emerald-500/10 rounded-xl border border-emerald-100 dark:border-emerald-500/20 flex items-start gap-3">
            <ShieldCheck size={18} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-sm text-emerald-900 dark:text-emerald-100 font-medium italic">
              "Frase para decorar: Na prática brasileira atual, a IC é majoritariamente isquêmica e hipertensiva, mas o Brasil ainda mantém duas assinaturas etiológicas próprias: doença de Chagas e valvopatia reumática."
            </p>
          </div>
        </div>
      </section>

      {/* Quando a clínica fica forte ou fraca */}
      <section className="card p-6 border-line bg-card dark:bg-slate-900/50">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-bg-orange dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Info size={18} />
          </div>
          <h3 className="font-bold text-brand-navy dark:text-slate-100">Valor Preditivo dos Sinais</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl border border-emerald-100 dark:border-emerald-900/30 bg-bg-green/30 dark:bg-emerald-900/10">
            <h4 className="text-xs font-black text-emerald-700 dark:text-emerald-400 uppercase mb-2">Alta Suspeição (Clínica Forte)</h4>
            <ul className="text-xs text-ink-muted dark:text-slate-400 space-y-1.5">
              <li>• História de Infarto Prévio</li>
              <li>• Presença de B3</li>
              <li>• Turgência Jugular</li>
              <li>• Desvio do Ictus Cordis</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-red-100 dark:border-red-900/30 bg-bg-red/30 dark:bg-red-900/10">
            <h4 className="text-xs font-black text-red-700 dark:text-red-400 uppercase mb-2">Baixa Suspeição (Clínica Fraca)</h4>
            <ul className="text-xs text-ink-muted dark:text-slate-400 space-y-1.5">
              <li>• ECG Totalmente Normal</li>
              <li>• Ausência de Dispneia aos Esforços</li>
              <li>• BNP em níveis basais</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resumo Operacional */}
      <section className="p-6 rounded-2xl bg-brand-navy dark:bg-slate-900 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck size={24} className="text-amber-400" />
          <h3 className="font-bold text-xl">Conclusão Diagnóstica</h3>
        </div>
        <p className="text-slate-300 dark:text-slate-400 text-sm mb-4 leading-relaxed">
          O diagnóstico final de IC requer a presença de <strong>Sintomas/Sinais</strong> + <strong>Evidência de Disfunção Cardíaca</strong>.
        </p>
        <div className="bg-card/20 dark:bg-slate-800/50 p-4 rounded-xl border border-white/10">
          <p className="text-sm italic text-center text-slate-200 dark:text-slate-300">
            "Não trate apenas o BNP; trate o paciente. O BNP é um excelente teste de exclusão, mas o diagnóstico é a soma da clínica com a imagem."
          </p>
        </div>
      </section>
    </div>
  );
}
