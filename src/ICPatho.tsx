import React from 'react';
import { BookOpen, Activity, AlertCircle, Zap, ShieldCheck, ArrowRight, Heart, Droplet, Wind, AlertTriangle, Users, Globe, ShieldAlert, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ICPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. Ideia Central e Definição */}
      <section className="card p-8 border-l-4 border-l-brand-blue bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/30 shadow-sm border-line">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-bg-blue dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-400 shadow-inner">
            <Heart size={24} className="animate-pulse" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">A Nova Definição de IC</h2>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-bold uppercase tracking-widest">Ideia Central — GINA/AHA 2022</p>
          </div>
        </div>
        <div className="space-y-4 text-ink dark:text-slate-300 leading-relaxed">
          <p className="text-lg font-medium text-brand-navy dark:text-slate-100">
            Insuficiência cardíaca não é apenas "coração fraco".
          </p>
          <p>
            É uma síndrome clínica complexa onde uma anormalidade estrutural ou funcional gera sintomas porque o coração opera com <strong>débito inadequado</strong> e, sobretudo, com <strong>pressões de enchimento elevadas</strong>.
          </p>
          <div className="p-4 bg-bg dark:bg-slate-800/50 rounded-xl border border-line flex items-start gap-3">
            <Zap size={18} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm italic text-ink-muted dark:text-slate-400">
              "O ponto fino: muitos pacientes têm sintomas não porque a FE esteja baixa, mas porque o ventrículo precisa de pressões cada vez maiores para encher e manter o débito."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Evolução dos Modelos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Cardiorrenal', desc: 'Foco em retenção hídrica e rim.', icon: Droplet, color: 'text-blue-500', bg: 'bg-bg-blue dark:bg-blue-900/10' },
          { title: 'Hemodinâmico', desc: 'Foco na "bomba quebrada" e pressões.', icon: Activity, color: 'text-red-500', bg: 'bg-bg-red dark:bg-red-900/10' },
          { title: 'Neuro-hormonal', desc: 'Modelo atual: ativação tóxica crônica.', icon: Zap, color: 'text-amber-500', bg: 'bg-bg-orange dark:bg-amber-900/10' },
        ].map((m, i) => (
          <div key={i} className="p-5 rounded-2xl border border-line bg-card flex flex-col gap-2 shadow-sm">
            <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center mb-2", m.bg, m.color)}>
              <m.icon size={18} />
            </div>
            <h4 className="font-bold text-brand-navy dark:text-slate-100">{m.title}</h4>
            <p className="text-xs text-ink-muted dark:text-slate-400 leading-snug">{m.desc}</p>
          </div>
        ))}
      </section>

      {/* 3. Epidemiologia e Fatores de Risco */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <section className="card p-6 lg:col-span-1 bg-bg dark:bg-slate-800/50 border-line">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-bg-blue dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-400">
              <Globe size={18} />
            </div>
            <h3 className="font-bold text-brand-navy dark:text-slate-100">Epidemiologia</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-black text-brand-blue dark:text-blue-400 uppercase tracking-widest mb-1">Mundo</p>
              <p className="text-sm text-ink dark:text-slate-300 leading-snug">
                <strong>&gt;23 milhões</strong>. Prevalência <strong>&gt;10%</strong> em &gt;70 anos. O <strong>"Paradoxo"</strong>: maior sobrevida ao IAM = mais IC crônica.
              </p>
            </div>
            <div className="p-3 bg-card dark:bg-slate-800 rounded-lg border border-line shadow-sm">
              <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">Brasil (SUS)</p>
              <p className="text-sm text-ink dark:text-slate-300 leading-snug">
                Principal causa de internação CV. Fenômeno da <strong>"Porta Giratória"</strong> (altas taxas de readmissão).
              </p>
            </div>
          </div>
        </section>

        <section className="card p-6 lg:col-span-2 border-line bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-bg-orange dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <ShieldAlert size={18} />
            </div>
            <h3 className="font-bold text-brand-navy dark:text-slate-100 tracking-tight">Etiologias e Fatores de Risco</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {[
              { label: 'Doença Isquêmica', desc: 'Etiologia #1 (Infarto prévio)', icon: '🔥' },
              { label: 'Hipertensão', desc: 'Gatilho do remodelamento (Hipertrofia)', icon: '⚡' },
              { label: 'Diabetes/Obesidade', desc: 'Inflamação e lesão microvascular', icon: '🍭' },
              { label: 'Doença de Chagas', desc: 'Arritmias e Aneurisma de ponta', icon: '🇧🇷' },
              { label: 'Valvopatias', desc: 'Febre Reumática (Cenário SUS)', icon: '🫀' },
              { label: 'Tóxicos', desc: 'Álcool e Antraciclinas (Quimio)', icon: '🧪' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-2 rounded-xl hover:bg-bg dark:hover:bg-slate-800 transition-colors">
                <span className="text-xl">{item.icon}</span>
                <div>
                  <p className="text-xs font-bold text-brand-navy dark:text-slate-100">{item.label}</p>
                  <p className="text-[11px] text-ink-muted dark:text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Mapa Mental da Progressão (Re-inserido) */}
      <section className="card p-6 md:p-8 border-line bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-bg-purple dark:bg-indigo-900/30 flex items-center justify-center text-purple-600 dark:text-indigo-400">
            <Activity size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Mapa Mental da Progressão da IC</h2>
        </div>

        <div className="relative space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-bg-red dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center font-bold shrink-0 z-10 border-2 border-card shadow-sm">1</div>
            <div className="bg-bg dark:bg-slate-800/50 rounded-2xl p-5 border border-line flex-1 transition-all hover:shadow-md hover:border-red-200 dark:hover:border-red-900/50">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2 mb-2">
                <Zap size={16} className="text-red-500" />
                O Gatilho (Evento Índice)
              </h3>
              <p className="text-sm text-ink-muted dark:text-slate-400">
                Lesão miocárdica (ex: Infarto, Hipertensão não tratada, Chagas). 
                Gera perda de cardiomiócitos ou sobrecarga de trabalho.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-bg-blue dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold shrink-0 z-10 border-2 border-card shadow-sm">2</div>
            <div className="bg-bg dark:bg-slate-800/50 rounded-2xl p-5 border border-line flex-1 transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900/50">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2 mb-2">
                <Activity size={16} className="text-blue-500" />
                O Problema Mecânico
              </h3>
              <p className="text-sm text-ink-muted dark:text-slate-400 mb-3">
                Queda do <strong>Débito Cardíaco (DC)</strong>.
              </p>
              <div className="bg-card dark:bg-slate-800 p-3 rounded-lg border border-blue-100 dark:border-blue-900/30">
                <p className="text-xs font-bold text-blue-700 dark:text-blue-300 uppercase mb-1">Impacto Clínico</p>
                <p className="text-xs text-ink-muted dark:text-slate-400 italic">Fadiga, intolerância aos esforços, confusão mental (hipoperfusão).</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-bg-orange dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold shrink-0 z-10 border-2 border-card shadow-sm">3</div>
            <div className="bg-bg dark:bg-slate-800/50 rounded-2xl p-5 border border-line flex-1 transition-all hover:shadow-md hover:border-orange-200 dark:hover:border-orange-900/50">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2 mb-2">
                <AlertCircle size={16} className="text-orange-500" />
                O Alarme do Corpo
              </h3>
              <p className="text-sm text-ink-muted dark:text-slate-400">
                Barorreceptores (vasos) e Aparelho Justaglomerular (rins) detectam a queda de pressão/fluxo.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-bg-orange dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold shrink-0 z-10 border-2 border-card shadow-sm">4</div>
            <div className="bg-bg dark:bg-slate-800/50 rounded-2xl p-5 border border-line flex-1 transition-all hover:shadow-md hover:border-amber-200 dark:hover:border-amber-900/50">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2 mb-2">
                <ShieldCheck size={16} className="text-amber-500" />
                A "Falsa" Solução (Ativação Neuro-hormonal)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                <div className="p-4 bg-card dark:bg-slate-800 rounded-xl border border-red-100 dark:border-red-900/30">
                  <h4 className="text-xs font-black text-red-600 dark:text-red-400 uppercase mb-2">🔴 Via Simpática (SNS)</h4>
                  <p className="text-xs text-ink-muted dark:text-slate-400 mb-2">Liberação de Noradrenalina.</p>
                  <p className="text-xs font-medium text-brand-navy dark:text-slate-100">Efeito: Taquicardia e Vasoconstrição periférica.</p>
                  <div className="mt-2 p-2 bg-bg-red dark:bg-red-900/20 rounded border border-red-100 dark:border-red-900/30">
                    <p className="text-[10px] text-red-700 dark:text-red-200"><strong>Clínica:</strong> Pele fria e pálida (roubo de fluxo para órgãos nobres).</p>
                  </div>
                </div>
                <div className="p-4 bg-card dark:bg-slate-800 rounded-xl border border-amber-100 dark:border-amber-900/30">
                  <h4 className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase mb-2">🟡 Eixo SRAA</h4>
                  <p className="text-xs text-ink-muted dark:text-slate-400 mb-2">Angiotensina II e Aldosterona.</p>
                  <p className="text-xs font-medium text-brand-navy dark:text-slate-100">Efeito: Vasoconstrição forte e retenção de Sódio/Água.</p>
                  <div className="mt-2 p-2 bg-bg-orange dark:bg-amber-900/20 rounded border border-amber-100 dark:border-amber-900/30">
                    <p className="text-[10px] text-amber-700 dark:text-amber-200"><strong>Clínica:</strong> Congestão pulmonar, edema, turgência jugular.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex gap-4 relative">
            <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-line"></div>
            <div className="w-10 h-10 rounded-full bg-bg-purple dark:bg-indigo-900/30 text-purple-600 dark:text-indigo-400 flex items-center justify-center font-bold shrink-0 z-10 border-2 border-card shadow-sm">5</div>
            <div className="bg-bg dark:bg-slate-800/50 rounded-2xl p-5 border border-line flex-1 transition-all hover:shadow-md hover:border-purple-200 dark:hover:border-indigo-900/50">
              <h3 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2 mb-2">
                <AlertTriangle size={16} className="text-purple-500" />
                O Custo a Longo Prazo (Remodelamento)
              </h3>
              <p className="text-sm text-ink-muted dark:text-slate-400">
                O excesso contínuo desses hormônios causa <strong>fibrose, hipertrofia patológica e apoptose</strong>. 
                O ventrículo muda de tamanho e formato (esférico), piorando a função de bomba em um ciclo vicioso.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-bg-green dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold shrink-0 z-10 border-2 border-card shadow-sm">6</div>
            <div className="bg-bg-green dark:bg-emerald-900/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-900/30 flex-1 transition-all hover:shadow-md">
              <h3 className="font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mb-2">
                <Droplet size={16} className="text-emerald-500" />
                O Grito de Socorro (Peptídeos Natriuréticos)
              </h3>
              <p className="text-sm text-emerald-900 dark:text-emerald-100">
                O coração esticado libera <strong>ANP e BNP</strong>. Tentativa de natriurese e vasodilatação.
              </p>
              <div className="mt-3 bg-card/50 dark:bg-slate-800/50 p-3 rounded-lg border border-emerald-200 dark:border-emerald-900/30">
                <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 uppercase mb-1">Dica de Prova</p>
                <p className="text-xs text-emerald-800 dark:text-emerald-200 italic">O BNP é o grande marcador no exame de sangue para diferenciar dispneia cardíaca de pulmonar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mecanismos de Compensação: SNS e SRAA */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-bg-red dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400">
            <Zap size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Sistemas Neuro-hormonais: De Compensação a Toxicidade</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* SNS */}
          <div className="card p-6 border-t-4 border-t-red-500 bg-bg-red/10 dark:bg-red-900/10 border-line">
            <h3 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
              <Activity size={18} />
              Sistema Nervoso Simpático (SNS)
            </h3>
            <p className="text-sm text-ink dark:text-slate-300 leading-relaxed mb-4">
              Ativado por barorreceptores. No curto prazo, mantém o débito via FC e contratilidade. No longo prazo: <strong>morte de cardiomiócitos e arritmias</strong>.
            </p>
            <div className="bg-card dark:bg-slate-800 p-3 rounded-xl border border-red-100 dark:border-red-900/30">
              <p className="text-[10px] font-black text-red-600 dark:text-red-400 uppercase mb-1">Ponte Terapêutica</p>
              <p className="text-xs text-ink-muted dark:text-slate-400 italic">O Betabloqueador corta essa toxicidade crônica, permitindo a recuperação miocárdica.</p>
            </div>
          </div>

          {/* SRAA */}
          <div className="card p-6 border-t-4 border-t-amber-500 bg-bg-orange/10 dark:bg-amber-900/10 border-line">
            <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
              <Droplet size={18} />
              Eixo SRAA e Aldosterona
            </h3>
            <p className="text-sm text-ink dark:text-slate-300 leading-relaxed mb-4">
              Ativado pela hipoperfusão renal. Angiotensina II gera vasoconstrição e fibrose. Aldosterona retém sódio/água e piora a congestão.
            </p>
            <div className="bg-card dark:bg-slate-800 p-3 rounded-xl border border-amber-100 dark:border-amber-900/30">
              <p className="text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase mb-1">Ponte Terapêutica</p>
              <p className="text-xs text-ink-muted dark:text-slate-400 italic">IECA, BRA, ARNI e Espironolactona bloqueiam esse eixo remodelador.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Peptídeos Natriuréticos */}
      <section className="card p-8 bg-bg-green dark:bg-emerald-900 text-white overflow-hidden relative border-line">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Droplet size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-white">Peptídeos Natriuréticos (ANP/BNP)</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="bg-card dark:bg-slate-800 text-ink dark:text-slate-100 font-bold p-3 rounded-xl leading-relaxed mb-4">
                O "freio endógeno" insuficiente. Liberados pelo estiramento miocárdico para promover natriurese e vasodilatação.
              </p>
              <div className="p-4 bg-white/10 rounded-xl border border-white/20">
                <p className="text-xs font-bold text-emerald-300 uppercase mb-1">⚡ NEVER MISS</p>
                <p className="text-sm italic text-brand-navy dark:text-emerald-100">"São marcadores do esforço do ventrículo, não simplesmente da fração de ejeção baixa."</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-brand-navy dark:text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                <p className="text-sm font-bold">Diferenciam dispneia cardíaca de pulmonar.</p>
              </div>
              <div className="flex items-start gap-3 text-brand-navy dark:text-white">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0"></div>
                <p className="text-sm font-bold">Variam com obesidade (↓), idade (↑) e função renal (↑).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comparativo: ICFEr vs ICFEp */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-indigo-900/30 flex items-center justify-center text-purple-600 dark:text-indigo-400">
            <Layers size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">Fisiopatologia Comparada: Fenótipos Dominantes</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ICFEr */}
          <div className="card p-6 border-l-4 border-l-brand-blue bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/30 border-line">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-brand-blue dark:text-blue-400 text-lg">ICFEr (Reduzida)</h3>
              <span className="text-[10px] font-black bg-bg-blue dark:bg-blue-900/30 text-brand-blue dark:text-blue-400 px-2 py-1 rounded uppercase">FE ≤ 40%</span>
            </div>
            <p className="text-sm text-ink dark:text-slate-300 leading-relaxed mb-4">
              Problema de <strong>contratilidade</strong>. O ventrículo dilata (remodelamento excêntrico) para tentar manter o volume sistólico, mas perde eficiência.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-bg dark:bg-slate-800/50 rounded-lg text-xs border border-line">
                <span className="font-bold text-brand-navy dark:text-slate-100">Mecanismo:</span> Perda de cardiomiócitos (IAM) ou sobrecarga de volume.
              </div>
              <div className="p-3 bg-bg dark:bg-slate-800/50 rounded-lg text-xs border border-line">
                <span className="font-bold text-brand-navy dark:text-slate-100">Remodelamento:</span> Dilatação e afilamento de parede.
              </div>
            </div>
          </div>

          {/* ICFEp */}
          <div className="card p-6 border-l-4 border-l-emerald-500 bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/30 border-line">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-emerald-600 dark:text-emerald-400 text-lg">ICFEp (Preservada)</h3>
              <span className="text-[10px] font-black bg-bg-green dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded uppercase">FE ≥ 50%</span>
            </div>
            <p className="text-sm text-ink dark:text-slate-300 leading-relaxed mb-4">
              Síndrome <strong>cardiometabólica e inflamatória</strong>. O problema é a rigidez e o enchimento sob alta pressão.
            </p>
            <div className="space-y-2">
              <div className="p-3 bg-bg-green/50 dark:bg-emerald-900/20 rounded-lg text-xs border border-emerald-100 dark:border-emerald-900/30">
                <span className="font-bold text-emerald-700 dark:text-emerald-200">Mecanismo:</span> Inflamação sistêmica (Obesidade, HAS, DM) → Disfunção microvascular.
              </div>
              <div className="p-3 bg-bg-green/50 dark:bg-emerald-900/20 rounded-lg text-xs border border-emerald-100 dark:border-emerald-900/30">
                <span className="font-bold text-emerald-700 dark:text-emerald-200">Ponte Molecular:</span> Queda da via <strong>NO–cGMP–PKG</strong> (↑ rigidez).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Congestão e Repercussão Multiorgânica */}
      <section className="card p-8 border-line bg-bg dark:bg-slate-800/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-brand-navy dark:bg-slate-900 text-white flex items-center justify-center">
            <Users size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">A IC como Síndrome Multiorgânica</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { organ: 'Pulmão', effect: 'Congestão retrógrada, edema intersticial e dispneia.', icon: Wind, color: 'text-blue-500' },
            { organ: 'Rim', effect: 'Hipoperfusão e congestão venosa renal (Síndrome Cardiorrenal).', icon: Droplet, color: 'text-emerald-500' },
            { organ: 'Fígado', effect: 'Congestão passiva (Hepatomegalia congestiva).', icon: Activity, color: 'text-orange-500' },
            { organ: 'Músculo', effect: 'Má perfusão e inflamação, gerando fadiga e sarcopenia.', icon: Zap, color: 'text-purple-500' },
          ].map((item, i) => (
            <div key={i} className="bg-card dark:bg-slate-800 p-4 rounded-2xl border border-line shadow-sm">
              <div className={cn("mb-3", item.color)}>
                <item.icon size={20} />
              </div>
              <h4 className="font-bold text-sm text-brand-navy dark:text-slate-100 mb-1">{item.organ}</h4>
              <p className="text-[11px] text-ink-muted dark:text-slate-400 leading-relaxed">{item.effect}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Semiologia e Tratamento (Ponte) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2">
            <BookOpen size={18} className="text-brand-blue" />
            Explicação Fisiopatológica da Semiologia
          </h3>
          <div className="space-y-3">
            {[
              { sign: 'B3 (Terceira Bulha)', reason: 'Enchimento rápido em ventrículo dilatado e complacente (ICFEr).' },
              { sign: 'Ortopneia/DPN', reason: 'Redistribuição volêmica em decúbito sobre ventrículo no limite.' },
              { sign: 'Refluxo Hepatojugular', reason: 'Reflete pressão venosa sistêmica elevada e incapacidade do VD.' },
            ].map((s, i) => (
              <div key={i} className="p-3 bg-card dark:bg-slate-800/50 rounded-xl border border-line dark:border-slate-700">
                <p className="text-xs font-bold text-brand-navy dark:text-slate-100 mb-1">{s.sign}</p>
                <p className="text-[11px] text-ink-muted dark:text-slate-400">{s.reason}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2">
            <Zap size={18} className="text-amber-500" />
            Onde a Fisiopatologia encontra o Tratamento
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { drug: 'IECA/BRA/ARNI', target: 'Via Angiotensina' },
              { drug: 'Betabloqueador', target: 'Toxicidade Simpática' },
              { drug: 'Espironolactona', target: 'Aldosterona/Fibrose' },
              { drug: 'iSGLT2', target: 'Metabolismo/Hemodinâmica' },
            ].map((t, i) => (
              <div key={i} className="p-3 bg-brand-navy dark:bg-slate-800 text-white rounded-xl border border-white/5">
                <p className="text-[10px] font-black text-brand-blue dark:text-blue-400 uppercase mb-1">{t.drug}</p>
                <p className="text-[11px] opacity-80">{t.target}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fecho de Prova */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card p-8 bg-brand-blue dark:bg-blue-900 text-white text-center relative overflow-hidden border-line"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] mb-4 opacity-70">Fecho de Prova</h2>
          <p className="text-2xl font-bold italic leading-tight max-w-2xl mx-auto">
            "IC é síndrome de débito inadequado e/ou pressões de enchimento elevadas, sustentada por remodelamento e ativação neuro-hormonal crônica."
          </p>
        </div>
      </motion.section>
    </div>
  );
}
