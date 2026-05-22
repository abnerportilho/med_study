import React from 'react';
import { Zap, ShieldAlert, Activity, AlertTriangle } from 'lucide-react';

export default function PleuralPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. CONCEITO E FISIOPATOLOGIA */}
      <section id="concept">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Conceito e Fisiopatologia</h2>
        </div>

        <div className="card p-6 border-white/10 bg-slate-900 text-white mb-6 shadow-2xl">
          <p className="text-sm text-slate-300 leading-relaxed">
            O <strong>Derrame Pleural</strong> é o acúmulo excessivo de líquido no espaço pleural (cavidade considerada <strong>virtual</strong>). Em condições normais, existem apenas <strong>0,1 a 0,2 ml/kg</strong> de líquido lubrificante.
          </p>
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400">
            <strong>Origem:</strong> Capilares da pleura parietal. <strong>Reabsorção:</strong> Sistema linfático. O desequilíbrio ocorre por alteração nas forças de Starling ou drenagem.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-sm">
            <h4 className="font-bold text-brand-blue mb-3 flex items-center gap-2">
              <ShieldAlert size={18} className="text-rose-400" />
              Mecanismos de Formação
            </h4>
            <ul className="space-y-4 text-[10px] text-slate-300">
              <li className="flex gap-2">
                <span className="font-black text-rose-400">01</span>
                <span><strong>Transudato:</strong> Alteração de forças sistêmicas (Hidrostática/Oncótica). Pleura íntegra. Ex: ICC, Cirrose, Síndrome Nefrótica.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-black text-rose-400">02</span>
                <span><strong>Exudato:</strong> Doença local da pleura ou capilares. ↑ Permeabilidade ou ↓ Drenagem. Ex: Pneumonia, Câncer, TEP, TB.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-black text-rose-400">03</span>
                <span><strong>Drenagem Linfática:</strong> Obstrução por tumor ou fibrose impede a reabsorção do líquido pleural pelos estômatos parietais.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-black text-rose-400">04</span>
                <span><strong>Passagem Transdiafragmática:</strong> Líquido ascítico pode migrar para o tórax via poros diafragmáticos (Hidrotórax Hepático).</span>
              </li>
            </ul>
          </div>

          <div className="card p-5 border-brand-blue/20 bg-slate-900 text-white shadow-xl">
            <h4 className="font-black text-[10px] text-brand-blue mb-4 uppercase tracking-widest">Dinâmica de Starling</h4>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-brand-blue">Pressão Hidrostática:</p>
                <p className="text-[10px] text-slate-300">Empurra o líquido para fora dos capilares. ↑ na ICC (congestão).</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-brand-blue">Pressão Oncótica:</p>
                <p className="text-[10px] text-slate-300">Segura o líquido no vaso (proteínas). ↓ na Hipoalbuminemia.</p>
              </div>
              <div className="p-3 bg-rose-500/10 rounded-lg border border-rose-500/20">
                <p className="text-[10px] font-bold text-rose-400">Espaço Pleural:</p>
                <p className="text-[10px] text-rose-200">A pressão pleural é <strong>negativa</strong>, o que favorece a entrada de líquido se houver lesão capilar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLASSIFICAÇÃO INICIAL */}
      <section id="classification">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Classificação Bioquímica</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue mb-2">Transudatos</h4>
            <p className="text-xs text-slate-400 mb-4">Líquido "limpo", pobre em proteínas e células.</p>
            <div className="space-y-2">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px]">
                <strong>Causas:</strong> ICC (mais comum), Cirrose, Síndrome Nefrótica, Diálise Peritoneal, Obstrução de Veia Cava Superior, Mixedema e Urinotórax.
              </div>
            </div>
          </div>
          <div className="card p-6 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-rose-400 mb-2">Exudatos</h4>
            <p className="text-xs text-slate-400 mb-4">Líquido "inflamatório", rico em proteínas e LDH.</p>
            <div className="space-y-2">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px]">
                <strong>Causas:</strong> Parapneumônico, Malignidade, TB, TEP, Colagenoses, Vasculites, Hemotórax, Doenças Pericárdicas e Gastrointestinais.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
