import React from 'react';
import { Search, Activity, AlertCircle, Zap, ShieldCheck, Heart, ArrowRight, User, Info, AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utilities ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function ICClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* Header Section */}
      <section className="card p-8 border-l-4 border-l-brand-blue bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/30 shadow-sm border-line">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-bg-blue dark:bg-blue-900/30 flex items-center justify-center text-brand-blue dark:text-blue-400 shadow-inner">
            <Search size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-navy dark:text-slate-100 tracking-tight">Clínica Pura da Insuficiência Cardíaca</h2>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-bold uppercase tracking-widest">A Síndrome Clínica Soberana</p>
          </div>
        </div>
        <div className="space-y-4 text-ink dark:text-slate-300 leading-relaxed">
          <p className="text-lg font-medium text-brand-navy dark:text-slate-100">
            A imagem clínica central da IC é: paciente com dispneia, fadiga e limitação ao esforço, com ou sem sinais de congestão pulmonar e sistêmica.
          </p>
          <p>
            No Brasil, o PCDT destaca como manifestações principais: <strong>dispneia, ortopneia, edema de membros inferiores e fadiga</strong>.
          </p>
        </div>
      </section>

      {/* Tabela 1: Sintomas que mais aparecem */}
      <section className="card p-6 border-line bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-bg dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
            <Activity size={18} />
          </div>
          <h3 className="font-bold text-brand-navy dark:text-slate-100">Tabela 1 — Sintomas que mais aparecem</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-bg dark:bg-slate-800/50 border-b border-line">
                <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Grupo Clínico</th>
                <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Manifestações mais típicas</th>
                <th className="p-3 font-bold text-brand-navy dark:text-slate-100">Leitura Fisiopatológica</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              <tr>
                <td className="p-3 font-bold text-blue-700 dark:text-blue-400">Congestão Pulmonar</td>
                <td className="p-3 text-ink dark:text-slate-300">Dispneia aos esforços, ortopneia, DPN, tosse, sibilância</td>
                <td className="p-3 text-ink-muted dark:text-slate-400 italic">Aumento retrógrado das pressões do lado esquerdo</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-emerald-700 dark:text-emerald-400">Congestão Sistêmica</td>
                <td className="p-3 text-ink dark:text-slate-300">Edema periférico, distensão abdominal, plenitude hepática, ascite</td>
                <td className="p-3 text-ink-muted dark:text-slate-400 italic">Aumento da pressão venosa sistêmica</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-amber-700 dark:text-amber-400">Baixo Débito</td>
                <td className="p-3 text-ink dark:text-slate-300">Fadiga, astenia, intolerância ao exercício, extremidades frias, tontura</td>
                <td className="p-3 text-ink-muted dark:text-slate-400 italic">Perfusão tecidual inadequada</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-purple-700 dark:text-purple-400">Repercussão Funcional</td>
                <td className="p-3 text-ink dark:text-slate-300">Queda da capacidade de fazer atividades habituais</td>
                <td className="p-3 text-ink-muted dark:text-slate-400 italic">Soma de congestão + reserva cardíaca ruim</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela 2: IC Esquerda vs Direita */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="card p-6 border-line bg-bg-blue/30 dark:bg-blue-900/10">
          <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-4 flex items-center gap-2">
            <ArrowRight size={18} className="text-blue-500 dark:text-blue-400" />
            Predomínio: IC Esquerda
          </h3>
          <ul className="space-y-2">
            {['Dispneia', 'Ortopneia', 'DPN', 'Estertores', 'Tosse', 'B3'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-ink dark:text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="card p-6 border-line bg-bg-green/30 dark:bg-emerald-900/10">
          <h3 className="font-bold text-brand-navy dark:text-slate-100 mb-4 flex items-center gap-2">
            <ArrowRight size={18} className="text-emerald-500 dark:text-emerald-400" />
            Predomínio: IC Direita
          </h3>
          <ul className="space-y-2">
            {['Turgência jugular', 'Refluxo hepatojugular', 'Hepatomegalia congestiva', 'Edema periférico', 'Ascite'].map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-ink dark:text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="p-4 bg-bg-orange dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-900/30 flex items-start gap-3">
        <AlertTriangle size={18} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-900 dark:text-amber-200 italic">
          <strong>A pegadinha:</strong> Na vida real e em prova, muita “IC direita” é consequência de falência esquerda crônica ou hipertensão pulmonar secundária. Pense em predomínio clínico, não em separação rígida.
        </p>
      </div>

      {/* Tabela 3: Linguagem do Paciente */}
      <section className="card p-6 border-line bg-card">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-bg-purple dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
            <User size={18} />
          </div>
          <h3 className="font-bold text-brand-navy dark:text-slate-100">Tabela 3 — Como o paciente costuma “contar” a doença</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { queixa: '“falta de ar quando ando”', significado: 'Dispneia de esforço' },
            { queixa: '“preciso de mais travesseiros”', significado: 'Ortopneia' },
            { queixa: '“acordo sufocado de madrugada”', significado: 'Dispneia paroxística noturna' },
            { queixa: '“minhas pernas incham no fim do dia”', significado: 'Congestão venosa sistêmica' },
            { queixa: '“estou cansando para coisas simples”', significado: 'Baixa reserva funcional / baixo débito relativo' },
            { queixa: '“engordei rápido e a barriga aumentou”', significado: 'Retenção hidrossalina / ascite' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-line bg-bg dark:bg-slate-800/50 flex flex-col gap-1">
              <p className="text-sm font-bold text-brand-navy dark:text-slate-100 italic">{item.queixa}</p>
              <div className="flex items-center gap-2 text-xs text-ink-muted dark:text-slate-400">
                <ArrowRight size={12} />
                <span>{item.significado}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Semiologia que vale ouro */}
      <section className="card p-6 md:p-8 border-line bg-gradient-to-br from-card to-bg/30 dark:from-slate-800/50 dark:to-slate-900/30">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-bg-orange dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <Zap size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Semiologia que Vale Ouro</h2>
        </div>
        <p className="text-sm text-ink-muted dark:text-slate-400 mb-6">
          Os sinais que mais pesam no exame físico. <strong>B3</strong> é especialmente útil (sobrecarga de volume), enquanto estertores podem faltar em IC crônica adaptada.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { sinal: 'B3', interpretação: 'Sobrecarga de volume / enchimento rápido em ventrículo alterado', color: 'border-red-200 dark:border-red-900/30 bg-bg-red/30 dark:bg-red-900/10' },
            { sinal: 'Estertores bibasais', interpretação: 'Congestão pulmonar', color: 'border-blue-200 dark:border-blue-900/30 bg-bg-blue/30 dark:bg-blue-900/10' },
            { sinal: 'Turgência jugular', interpretação: 'Pressão venosa elevada', color: 'border-indigo-200 dark:border-indigo-900/30 bg-bg-purple/30 dark:bg-indigo-900/10' },
            { sinal: 'Refluxo hepatojugular', interpretação: 'Dificuldade do coração em acomodar aumento do retorno venoso', color: 'border-emerald-200 dark:border-emerald-900/30 bg-bg-green/30 dark:bg-emerald-900/10' },
            { sinal: 'Edema maleolar', interpretação: 'Congestão sistêmica', color: 'border-slate-200 dark:border-slate-700 bg-bg dark:bg-slate-800/50' },
            { sinal: 'Hepatomegalia congestiva', interpretação: 'Repercussão venosa sistêmica', color: 'border-orange-200 dark:border-orange-900/30 bg-bg-orange/30 dark:bg-orange-900/10' },
            { sinal: 'Extremidades frias', interpretação: 'Baixo débito / vasoconstrição periférica', color: 'border-amber-200 dark:border-amber-900/30 bg-bg-orange/30 dark:bg-amber-900/10' },
          ].map((item, i) => (
            <div key={i} className={cn("p-4 rounded-xl border flex flex-col gap-1", item.color)}>
              <h4 className="font-bold text-brand-navy dark:text-slate-100 text-sm">{item.sinal}</h4>
              <p className="text-xs text-ink-muted dark:text-slate-400">{item.interpretação}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O que mais cai em prova */}
      <section className="card p-6 border-line bg-bg-navy dark:bg-slate-900 text-white">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-amber-400">
            <Zap size={18} />
          </div>
          <h3 className="font-bold text-lg text-red-500 dark:text-red-400 underline font-sans">O que mais cai em prova</h3>
        </div>
        <ul className="space-y-4">
          {[
            'Ortopneia e DPN sugerem congestão pulmonar por aumento de pressão de enchimento esquerda.',
            'Edema isolado não fecha IC; precisa de contexto clínico.',
            'FE normal não exclui IC, então clínica continua soberana no início do raciocínio.',
            'IC é síndrome de limitação funcional progressiva; NYHA vem depois, mas a clínica já antecipa isso.'
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-white font-bold">
              <div className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 font-bold text-[10px]">
                {i + 1}
              </div>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Resumo Operacional */}
      <section className="p-6 rounded-2xl bg-bg-blue dark:bg-blue-900 text-white shadow-lg shadow-brand-blue/20 dark:shadow-blue-900/20">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck size={24} className="text-brand-blue dark:text-blue-400" />
          <h3 className="font-bold text-xl text-brand-navy dark:text-white">Resumo Operacional</h3>
        </div>
        <p className="text-brand-blue dark:text-blue-200 text-sm mb-4 leading-relaxed">
          Antes de falar em BNP, eco ou classificação, o retrato clínico que você deve enxergar é:
        </p>
        <div className="bg-card/20 p-4 rounded-xl border border-brand-blue/20 dark:border-blue-400/20">
          <p className="text-lg font-bold text-center text-brand-navy dark:text-white">
            Dispneia + Fadiga + Intolerância ao esforço + Sinais de congestão pulmonar e/ou sistêmica.
          </p>
        </div>
        <p className="mt-4 text-xs text-brand-blue/70 dark:text-blue-200/70 italic">
          Se esse retrato existe, você começa a pensar em IC. Depois entramos em confirmação diagnóstica e fenotipagem.
        </p>
      </section>
    </div>
  );
}
