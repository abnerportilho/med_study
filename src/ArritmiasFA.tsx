import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Clock, 
  Layers, 
  TrendingUp, 
  Users, 
  Globe, 
  AlertTriangle, 
  Info,
  Box,
  Stethoscope,
  Pill,
  Search,
  CheckCircle2,
  AlertCircle,
  X,
  BookOpen,
  ClipboardList,
  RotateCcw,
  LayoutList,
  ChevronRight,
  ShieldAlert,
  ListChecks,
  Flame
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

const FA_TOPICS = [
  {
    id: 'definicao',
    title: 'Definição & ECG',
    icon: Activity,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    shadow: 'shadow-rose-500/20',
    bar: 'bg-rose-500',
    content: (
      <div className="space-y-8">
        <div>
          <h4 className="font-bold text-white text-lg mb-2 italic flex items-center gap-2">
            <Zap size={18} className="text-rose-500" /> O Conceito Central
          </h4>
          <p className="text-slate-400 leading-relaxed text-base">
            A Fibrilação Atrial é a <span className="text-rose-400 font-bold">arritmia sustentada mais comum</span> na prática clínica. Caracteriza-se por uma atividade elétrica atrial desorganizada, sem contração atrial efetiva. No ECG, isso se traduz pela <span className="text-rose-400 font-semibold underline decoration-rose-400/30 font-mono">ausência de ondas P</span> e por um <span className="text-rose-400 font-semibold underline decoration-rose-400/30 font-mono">intervalo RR totalmente irregular</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-line">
            <h4 className="text-xs font-black text-slate-500 uppercase mb-2 tracking-widest">Natureza</h4>
            <p className="text-sm font-bold text-white">Arritmia Supraventricular (Taqui ou Bradia.)</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-950 border border-line">
            <h4 className="text-xs font-black text-slate-500 uppercase mb-2 tracking-widest">Status Clínico</h4>
            <p className="text-sm font-bold text-white italic">Estável vs Instável (Síncope/Choque)</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
           <h4 className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-4 border-b border-indigo-500/20 pb-2 flex items-center gap-2">
             <CheckCircle2 size={14} /> Diagnóstico Padrão-Ouro
           </h4>
           <div className="space-y-4 text-base font-medium">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <p className="text-sm text-slate-300 italic">ECG de 12 derivações ou derivação única por no mínimo <span className="text-white font-black underline decoration-rose-500/40">30 segundos</span>.</p>
              </div>
           </div>
        </div>

        <div>
          <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 pl-1">Classificação Temporal</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { t: 'Paroxística', d: '< 7 dias, reversão espontânea.', icon: Zap },
              { t: 'Persistente', d: '> 7 dias até 1 ano.', icon: Clock },
              { t: 'Persistente Longa', d: '> 1 ano de duração.', icon: Layers },
              { t: 'Permanente', d: 'Decisão de não reverter.', icon: X },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950 border border-line group">
                <item.icon size={14} className="text-rose-500 mt-0.5 shrink-0" />
                <div>
                  <h5 className="font-bold text-white text-xs uppercase leading-none mb-1">{item.t}</h5>
                  <p className="text-[10px] text-slate-500 leading-tight">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'fisiopato',
    title: 'Fisiopatologia & Riscos',
    icon: Flame,
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    shadow: 'shadow-orange-500/20',
    bar: 'bg-orange-500',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card p-6 border-line bg-gradient-to-br from-blue-600/10 to-transparent">
             <h4 className="text-xs font-black text-blue-400 uppercase mb-3 tracking-widest">Impacto Global</h4>
             <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-black text-white italic">1.5 - 2.9%</span>
             </div>
             <p className="text-sm text-slate-400 leading-relaxed">
               Prevalência mundial que cresce exponencialmente após os <span className="text-white font-bold">65 anos</span>.
             </p>
          </div>
          <div className="card p-6 border-line bg-slate-950 flex flex-col justify-center text-center">
             <div className="text-4xl font-black text-rose-500 italic mb-1 uppercase tracking-tighter">5X mais AVC</div>
             <p className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Mecanismo Embólico no Apêndice Esquerdo</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black text-orange-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
            <AlertCircle size={14} /> Fatores de Risco
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { l: 'Intrínsecos', v: 'Idade, Sexo (M), Genética.' },
              { l: 'Conduta', v: 'Obesidade, Álcool, Tabagismo.' },
              { l: 'Clínicos', v: 'HAS (#1), DM, Hipertireoidismo.' }
            ].map((row, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-line">
                <span className="text-xs font-bold text-orange-500 uppercase block mb-1">{row.l}</span>
                <p className="text-sm font-medium text-slate-300">{row.v}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black text-orange-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2 border-b border-orange-500/10 pb-2">
            <Layers size={14} /> Os 5 Pilares da Gênese
          </h4>
          <div className="space-y-4">
            {[
              { 
                t: '1. Fatores Eletrofisiológicos', 
                d: 'Encurtamento do período refratário atrial, disfunção de conexinas (junção gap) e influência genética. Cria substrato vulnerável à reentrada.' 
              },
              { 
                t: '2. Fatores Hemodinâmicos', 
                d: 'Aumento da pressão intra-atrial (HAS, Valvopatias) → Estiramento de fibras que altera a condução elétrica celular.' 
              },
              { 
                t: '3. Fatores Estruturais', 
                d: 'Fibrose e inflamação crônica criam barreiras anatômicas e caminhos lentos que sustentam circuitos de reentrada.' 
              },
              { 
                t: '4. Fatores Desencadeantes (Gatilhos)', 
                d: 'Focos ectópicos originados majoritariamente nas Veias Pulmonares (VP). Alvo principal da ablação por cateter.' 
              },
              { 
                t: '5. Fatores Moduladores', 
                d: 'Alterações no tônus autonômico (Simpático/Vagal) modulam o início da FA tanto no estresse quanto no sono.' 
              }
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-line group hover:border-orange-500/30 transition-colors">
                <h5 className="font-black text-white text-xs uppercase mb-1 tracking-wider">{p.t}</h5>
                <p className="text-sm text-slate-400 leading-relaxed italic">{p.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-orange-500/5 border border-orange-500/20 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              <Zap size={40} className="text-orange-500" />
           </div>
           <h4 className="text-xs font-black text-orange-400 uppercase tracking-widest mb-3">Sequência Fisiopatológica</h4>
           <div className="flex flex-col gap-3 relative z-10">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-white font-bold italic underline decoration-orange-500/30">Gatilhos (VPs)</span> → Desordem Elétrica → <span className="text-white font-bold italic">Remodelamento & Fibrose</span> → Substrato Crônico Independente.
              </p>
              <div className="h-px bg-orange-500/20 w-full my-1" />
              <div className="flex items-center justify-between gap-4">
                 <div className="text-center flex-1">
                    <p className="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-1">A Máxima Clínica</p>
                    <p className="text-white text-3xl font-black italic uppercase leading-none tracking-tighter">"FA Gera FA"</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 'diagnostico',
    title: 'Diagnostico',
    icon: Search,
    color: 'text-indigo-500',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    shadow: 'shadow-indigo-500/20',
    bar: 'bg-indigo-500',
    content: (
      <div className="space-y-8">
        <div>
          <h4 className="font-bold text-white text-lg mb-4 italic flex items-center gap-2 border-b border-indigo-500/10 pb-2">
            <Stethoscope size={20} className="text-indigo-400" /> Quadro Clínico
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card p-6 bg-slate-950 border-line">
              <h5 className="text-xs font-black text-slate-500 uppercase mb-4 tracking-widest">Sintomas Comuns</h5>
              <div className="space-y-3">
                {[
                  { t: 'Palpitações', d: 'Sensação de coração "acelerado" ou "irregular".' },
                  { t: 'Fadiga e Fraqueza', d: 'Perda da contribuição atrial ao débito.' },
                  { t: 'Dispneia aos esforços', d: 'Pode evoluir para repouso em casos graves.' },
                  { t: 'Vertigem', d: 'Redução transitória do débito cardíaco.' },
                  { t: 'Sintomas de AVC', d: 'A FA pode se manifestar primeiro por embolia.' }
                ].map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <ChevronRight size={14} className="text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-white leading-none mb-1">{s.t}</p>
                      <p className="text-xs text-slate-500 leading-tight">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card p-6 bg-slate-950 border-line flex flex-col justify-center border-l-4 border-l-rose-500/30">
               <h5 className="text-xs font-black text-rose-400 uppercase mb-4 tracking-widest flex items-center gap-2">
                 <AlertTriangle size={12} /> Alerta Clínico
               </h5>
               <p className="text-sm text-slate-300 leading-relaxed italic mb-4">
                 Uma parcela relevante dos pacientes é <span className="text-white font-bold">completamente assintomática</span>. O diagnóstico costuma ser incidental ou já em complicações.
               </p>
               <div className="p-3 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                  <p className="text-sm font-bold text-indigo-400 mb-1 leading-none uppercase tracking-tighter italic">O Pulso Irregular</p>
                  <p className="text-xs text-slate-400 italic font-medium leading-tight">Déficit de pulso: FC central apical {">"} FC de pulso radial.</p>
               </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-4 pl-1 border-b border-indigo-500/10 pb-2">
             Padrão-Ouro: O ECG (2 Marcadores)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
               <h5 className="text-rose-500 font-black text-xs uppercase mb-2 tracking-widest leading-none">1. SEM ONDA P</h5>
               <p className="text-sm text-slate-300 leading-relaxed">
                 Substituída por uma <span className="text-white font-bold italic">linha de base ondulante (ondas f)</span>. Atividade atrial caótica entre 350-600 estímulos/min.
               </p>
            </div>
            <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/20">
               <h5 className="text-rose-500 font-black text-xs uppercase mb-2 tracking-widest leading-none">2. RR IRREGULAR</h5>
               <p className="text-sm text-slate-300 leading-relaxed">
                 O nó AV recebe estímulos aleatórios. Ritmo ventricular <span className="text-white font-bold italic underline decoration-rose-500/30">irregularmente irregular</span>.
               </p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-xl bg-slate-950 border border-line">
             <h5 className="text-xs font-black text-amber-500 uppercase mb-2 tracking-widest flex items-center gap-2">
               <RotateCcw size={12} /> Diferencial: Flutter Atrial
             </h5>
             <p className="text-sm text-slate-400 leading-relaxed italic">
               Atividade atrial <span className="text-white font-bold">organizada</span>. Clássico padrão em <span className="text-amber-400 font-black">"Dente de Serra"</span> (serrilhado) em derivações inferiores. Ritmo Ventricular geralmente mais regular (proporção 2:1, 3:1).
             </p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-black text-indigo-400 uppercase tracking-widest mb-4 pl-1 border-b border-indigo-500/10 pb-2">
             Ferramentas Diagnósticas & Acurácia
          </h4>
          <div className="overflow-x-auto rounded-2xl border border-line bg-slate-950">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-slate-500 uppercase font-black">
                <tr>
                  <th className="p-3">Método</th>
                  <th className="p-3">Sensi.</th>
                  <th className="p-3">Espec.</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-t border-line"><td className="p-3 font-bold text-white">Palpação Pulso</td><td className="p-3">70-81%</td><td className="p-3">87-97%</td></tr>
                <tr className="border-t border-line"><td className="p-3 font-bold text-white">Monitores de Pressão</td><td className="p-3">86-92%</td><td className="p-3">93-100%</td></tr>
                <tr className="border-t border-line"><td className="p-3 font-bold text-indigo-400 italic">Eletrocardiograma</td><td className="p-3">76-95%</td><td className="p-3">98%</td></tr>
                <tr className="border-t border-line"><td className="p-3 font-bold text-emerald-400">Smartwatches</td><td className="p-3">83-94%</td><td className="p-3">99%</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           {[
             { t: 'Holter 24h a 7 dias', d: 'Indicado para FA paroxística não capturada no ECG convencional.' },
             { t: 'Wearables & Marcapassos', d: 'Sensibilidade extrema para FA subclínica identificado por DCEI ou Smartwatches.' },
           ].map((e, i) => (
             <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-line border-t-indigo-500/20">
               <h5 className="text-xs font-bold text-white mb-1 uppercase tracking-tight">{e.t}</h5>
               <p className="text-sm text-slate-500 leading-tight italic">{e.d}</p>
             </div>
           ))}
        </div>
      </div>
    )
  },
  {
    id: 'tratamento',
    title: 'Tratamento',
    icon: ListChecks,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    shadow: 'shadow-emerald-500/20',
    bar: 'bg-emerald-500',
    content: (
      <div className="space-y-12">
        {/* Header ABC */}
        <div>
          <h4 className="text-sm font-black text-emerald-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-2 border-b border-emerald-500/10 pb-2">
            <ClipboardList size={16} /> Manejo Integrado (ESC 2024)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
             {['A — Anticoagulação', 'B — Better Symptoms', 'C — Cardio Risk'].map((t, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-950 border border-line text-center">
                   <p className="text-[10px] font-black text-emerald-500 uppercase">{t}</p>
                </div>
             ))}
          </div>
        </div>

        {/* Passo a Passo Timeline */}
        <div className="space-y-12 relative pl-8 border-l-2 border-emerald-500/20 ml-2">
          
          {/* PASSO 1 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs shadow-lg shadow-emerald-500/20">1</div>
            <h5 className="text-white font-black text-sm uppercase tracking-wider mb-4 italic">Estabilidade Hemodinâmica</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-rose-500/10 border border-rose-500/20">
                <p className="text-rose-500 font-black text-[10px] uppercase mb-2">Instável (4 D's)</p>
                <p className="text-xs text-slate-300 italic mb-4">Dor torácica, Dispneia grave, Alteração consciência, Drop na PA.</p>
                <div className="p-3 bg-rose-500 text-white rounded-xl text-center font-black text-xs uppercase italic">Cardioversão Elétrica Imediata</div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950 border border-line flex items-center justify-center">
                <p className="text-emerald-500 font-black text-xs uppercase italic">Estável → Passo 2</p>
              </div>
            </div>
          </div>

          {/* PASSO 2 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs shadow-lg shadow-emerald-500/20">2</div>
            <h5 className="text-white font-black text-sm uppercase tracking-wider mb-4 italic">Duração da Arritmia</h5>
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-slate-950 border border-line">
                <p className="text-blue-400 font-black text-[10px] uppercase mb-2">{"<"} 24h: Cardioversão Precoce</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-slate-900 rounded-full text-[10px] text-slate-300 border border-line italic">Anticoagulação Imediata</span>
                  <span className="px-3 py-1 bg-slate-900 rounded-full text-[10px] text-slate-300 border border-line italic">Amio 5mg/kg EV ou Propa 600mg VO</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-slate-950 border border-line border-l-4 border-l-amber-500">
                <p className="text-amber-500 font-black text-[10px] uppercase mb-2">{">"} 24h ou Desconhecida</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900">
                    <p className="text-[11px] font-bold text-white mb-1">Eco TT Disponível</p>
                    <p className="text-[10px] text-slate-400">Sem trombo? CV imediata. Com trombo? 3 semanas AC.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900">
                    <p className="text-[11px] font-bold text-white mb-1">Sem Eco TT</p>
                    <p className="text-[10px] text-amber-500 font-bold italic">Obrigatório 3 semanas AC antes da CV.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PASSO 3 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs shadow-lg shadow-emerald-500/20">3</div>
            <h5 className="text-white font-black text-sm uppercase tracking-wider mb-4 italic">Estratégia Terapêutica</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-5 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                  <p className="text-blue-400 font-black text-[10px] uppercase mb-1">Controle de Ritmo</p>
                  <p className="text-xs text-slate-300 mb-2">Restaurar ritmo sinusal (Sintomáticos).</p>
                  <p className="text-[10px] text-slate-500 italic">Verapamil, Amiodarona, Ablação.</p>
               </div>
               <div className="p-5 rounded-2xl bg-slate-950 border border-line">
                  <p className="text-slate-500 font-black text-[10px] uppercase mb-1">Controle de Frequência</p>
                  <p className="text-xs text-slate-300 mb-2">FC {"<"} 80 bpm (Idosos/Assintomáticos).</p>
                  <p className="text-[10px] text-slate-500 italic">Betabloqueadores, Digoxina.</p>
               </div>
            </div>
          </div>

          {/* PASSO 4 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs shadow-lg shadow-emerald-500/20">4</div>
            <h5 className="text-white font-black text-sm uppercase tracking-wider mb-4 italic">Anticoagulação Crônica</h5>
            <div className="p-6 rounded-2xl bg-slate-950 border border-line">
               <div className="flex justify-between items-center mb-4">
                  <p className="text-rose-500 font-black text-xs uppercase tracking-tighter">Score CHA₂DS₂-VASc</p>
                  <div className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 rounded-full text-[10px] text-rose-400 font-black italic">H ≥ 2 | M ≥ 3</div>
               </div>
               <p className="text-xs text-slate-400 mb-4 italic leading-relaxed">Avaliar risco embólico para decisão de anticoagulação indefinida (preferencialmente com <span className="text-white font-bold">DOACs</span>).</p>
               <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                  <p className="text-[11px] font-bold text-amber-500 uppercase mb-1 flex items-center gap-2">
                    <ShieldAlert size={14} /> Regra de Ouro
                  </p>
                  <p className="text-xs text-slate-300 font-medium">Cardioverteu? <span className="text-white font-black italic">4 semanas de AC mandatórias</span>, independente do escore.</p>
               </div>
            </div>
          </div>

          {/* PASSO 5 */}
          <div className="relative">
            <div className="absolute -left-[45px] top-0 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-slate-900 font-black text-xs shadow-lg shadow-emerald-500/20">5</div>
            <h5 className="text-white font-black text-sm uppercase tracking-wider mb-4 italic">Seguimento & Ablação</h5>
            <div className="p-5 rounded-2xl bg-slate-950 border border-line">
               <p className="text-emerald-500 font-black text-[10px] uppercase mb-2">Modificação de Estilo de Vida</p>
               <p className="text-xs text-slate-300 leading-relaxed mb-4">Manejo de HAS, DM, Obesidade e Álcool. Avaliar Ablação de Veias Pulmonares em refratários.</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
];

export default function ArritmiasFA() {
  const [activeTopic, setActiveTopic] = useState('definicao');

  return (
    <div className="flex flex-col gap-12 pb-32 animate-in fade-in duration-700">
      {/* SEÇÃO DE TÓPICOS INTERATIVOS */}
      <section className="mt-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-brand-blue border border-line">
            <Search size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy tracking-tight">Explorador de Arritmias</h2>
        </div>
        
        <p className="text-ink-muted text-xs mb-8 max-w-2xl leading-relaxed italic">
          Navegue pelos tópicos fundamentais da Fibrilação Atrial para uma consulta rápida e direcionada. Utilize o modelo "CC to ABC" para o manejo clínico.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          {FA_TOPICS.map(topic => {
            const Icon = topic.icon;
            const isActive = activeTopic === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTopic(topic.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full font-black text-[11px] uppercase tracking-widest transition-all duration-300 border-2",
                  isActive 
                    ? `${topic.bg} ${topic.color} ${topic.border} shadow-lg shadow-${topic.id === 'definicao' ? 'rose' : topic.id === 'fisiopato' ? 'orange' : topic.id === 'diagnostico' ? 'indigo' : 'emerald'}-500/20 scale-105` 
                    : "bg-slate-900 text-slate-500 border-transparent hover:border-slate-700 opacity-60 hover:opacity-100"
                )}
              >
                <Icon size={14} className={cn(isActive ? topic.color : "text-slate-500")} />
                {topic.title}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {FA_TOPICS.map(topic => {
            if (topic.id !== activeTopic) return null;
            const Icon = topic.icon;
            return (
              <motion.div 
                key={topic.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className={cn(
                  "p-8 md:p-10 rounded-[2.5rem] border-2 relative overflow-hidden bg-slate-900 shadow-2xl transition-all duration-500",
                  topic.border
                )}
              >
                <div className={cn("absolute top-0 left-0 w-2 h-full", topic.bar)}></div>
                <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                  <div className={cn("w-16 h-16 rounded-2xl shrink-0 flex items-center justify-center text-white shadow-xl rotate-3", topic.bar)}>
                    <Icon size={32} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter italic">
                      {topic.title}
                    </h3>
                    <div className="prose prose-invert max-w-none">
                      {topic.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>
    </div>
  );
}
