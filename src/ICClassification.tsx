import React from 'react';
import { LayoutDashboard, Activity, ShieldCheck, Zap, Heart, ArrowRight, Info, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ICClassification() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Header Section */}
      <section className="card p-8 border-l-4 border-l-brand-blue bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/50 shadow-sm border-line">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-bg-blue dark:bg-blue-500/20 flex items-center justify-center text-brand-blue dark:text-blue-400 shadow-inner">
            <LayoutDashboard size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">Classificações da IC</h2>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-bold uppercase tracking-widest">Fenotipagem e Gravidade</p>
          </div>
        </div>
        <div className="space-y-4 text-ink dark:text-slate-300 leading-relaxed">
          <p className="text-lg font-medium text-brand-navy dark:text-slate-100">
            Classificar a IC não é apenas um exercício acadêmico; é o que define a <strong>estratégia terapêutica</strong> e o <strong>prognóstico</strong>.
          </p>
          <p>
            Utilizamos três eixos principais: a capacidade funcional (NYHA), a progressão da doença (Estágios) e o fenótipo pela Fração de Ejeção.
          </p>
        </div>
      </section>

      {/* 1. Classificação Funcional (NYHA) */}
      <section className="card p-6 md:p-8 border-line bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-bg-blue dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Activity size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Classificação Funcional (NYHA)</h2>
        </div>
        <p className="text-sm text-ink-muted dark:text-slate-400 mb-6">
          Avalia a gravidade dos sintomas durante a atividade física. É <strong>dinâmica</strong> (pode mudar com o tratamento).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { class: 'I', title: 'Assintomático', desc: 'Sem limitação. Atividades físicas habituais não causam sintomas.', color: 'bg-bg-green dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20' },
            { class: 'II', title: 'Leve', desc: 'Limitação leve. Confortável em repouso, mas atividades habituais causam sintomas.', color: 'bg-bg-blue dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-500/20' },
            { class: 'III', title: 'Moderada', desc: 'Limitação acentuada. Confortável em repouso, mas atividades menores que as habituais causam sintomas.', color: 'bg-bg-orange dark:bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-100 dark:border-orange-500/20' },
            { class: 'IV', title: 'Grave', desc: 'Incapacidade. Sintomas presentes mesmo em repouso.', color: 'bg-bg-red dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-100 dark:border-red-500/20' },
          ].map((item, i) => (
            <div key={i} className={cn("p-5 rounded-2xl border flex flex-col gap-2", item.color)}>
              <span className="text-2xl font-black opacity-30">NYHA {item.class}</span>
              <h4 className="font-bold text-sm">{item.title}</h4>
              <p className="text-xs opacity-80 leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Estágios da IC (AHA/ACC) */}
      <section className="card p-6 md:p-8 border-line bg-bg dark:bg-slate-900/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-bg-purple dark:bg-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <ShieldCheck size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Estágios da IC (AHA/ACC)</h2>
        </div>
        <p className="text-sm text-ink-muted dark:text-slate-400 mb-6">
          Avalia a progressão estrutural da doença. É <strong>unidirecional</strong> (o paciente não "volta" de estágio).
        </p>

        <div className="space-y-4">
          {[
            { stage: 'A', label: 'Em Risco', desc: 'Fatores de risco presentes (HAS, DM, Obesidade), mas sem doença estrutural ou sintomas.', icon: Heart, color: 'text-blue-500 dark:text-blue-400', bgColor: 'bg-bg-blue dark:bg-blue-500/10' },
            { stage: 'B', label: 'Pré-IC', desc: 'Doença estrutural presente (ex: Hipertrofia VE, Infarto prévio), mas ainda sem sintomas.', icon: Activity, color: 'text-amber-500 dark:text-amber-400', bgColor: 'bg-bg-orange dark:bg-orange-500/10' },
            { stage: 'C', label: 'IC Sintomática', desc: 'Sintomas atuais ou prévios de IC associados a doença estrutural.', icon: Zap, color: 'text-orange-500 dark:text-orange-400', bgColor: 'bg-bg-orange dark:bg-orange-500/10' },
            { stage: 'D', label: 'IC Avançada', desc: 'Sintomas graves em repouso, refratários ao tratamento clínico otimizado.', icon: AlertCircle, color: 'text-red-500 dark:text-red-400', bgColor: 'bg-bg-red dark:bg-red-500/10' },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 p-4 bg-card dark:bg-slate-800/50 rounded-2xl border border-line shadow-sm transition-all hover:shadow-md">
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl shrink-0", item.bgColor, item.color)}>
                {item.stage}
              </div>
              <div>
                <h4 className="font-bold text-brand-navy dark:text-slate-100 flex items-center gap-2">
                  {item.label}
                  <item.icon size={14} className={item.color} />
                </h4>
                <p className="text-xs text-ink-muted dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Fração de Ejeção (Fenótipos) */}
      <section className="card p-6 md:p-8 border-line bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/50">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-bg-green dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <Zap size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Fenótipos pela Fração de Ejeção (FEVE)</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border-2 border-red-100 dark:border-red-900/30 bg-bg-red/30 dark:bg-red-900/10 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-black text-red-600 dark:text-red-400 uppercase tracking-widest">ICFEr</span>
              <h4 className="text-lg font-bold text-brand-navy dark:text-slate-100">Reduzida</h4>
            </div>
            <div className="text-3xl font-black text-red-600 dark:text-red-400">≤ 40%</div>
            <p className="text-xs text-ink-muted dark:text-slate-400 italic">Onde a evidência do "Quarteto Fantástico" é mais robusta.</p>
          </div>

          <div className="p-6 rounded-2xl border-2 border-amber-100 dark:border-amber-900/30 bg-bg-orange/30 dark:bg-orange-900/10 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-black text-amber-600 dark:text-amber-400 uppercase tracking-widest">ICFEm</span>
              <h4 className="text-lg font-bold text-brand-navy dark:text-slate-100">Levemente Reduzida</h4>
            </div>
            <div className="text-3xl font-black text-amber-600 dark:text-amber-400">41 – 49%</div>
            <p className="text-xs text-ink-muted dark:text-slate-400 italic">Zona cinzenta; tratamento similar à ICFEr.</p>
          </div>

          <div className="p-6 rounded-2xl border-2 border-emerald-100 dark:border-emerald-900/30 bg-bg-green/30 dark:bg-emerald-900/10 flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">ICFEp</span>
              <h4 className="text-lg font-bold text-brand-navy dark:text-slate-100">Preservada</h4>
            </div>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">≥ 50%</div>
            <p className="text-xs text-ink-muted dark:text-slate-400 italic">Diagnóstico mais difícil; foco em iSGLT2 e controle de comorbidades.</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-brand-navy dark:bg-slate-900 rounded-xl text-white flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-amber-400 shrink-0">
            <Info size={20} />
          </div>
          <div>
            <h4 className="font-bold text-sm mb-1">ICFErec (Recuperada)</h4>
            <p className="text-xs text-slate-300 dark:text-slate-400 leading-relaxed">
              Pacientes que tinham FE ≤ 40% e que, após tratamento, apresentaram aumento de &gt;10 pontos percentuais E atingiram FE &gt; 40%. 
              <strong>Atenção:</strong> Não suspender a medicação!
            </p>
          </div>
        </div>
      </section>

      {/* Resumo de Prova */}
      <section className="p-6 rounded-2xl bg-brand-blue dark:bg-blue-900/50 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck size={24} className="text-white" />
          <h3 className="font-bold text-xl text-white">Dica de Ouro para Prova</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 text-white">1</div>
            <p className="text-sm text-white">NYHA avalia o <strong>agora</strong> (sintomas). Estágios avaliam a <strong>história</strong> (estrutura).</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 text-white">2</div>
            <p className="text-sm text-white">Um paciente pode ser Estágio C e estar em NYHA I (tratado e assintomático), mas nunca voltará a ser Estágio B.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
