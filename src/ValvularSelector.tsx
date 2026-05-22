import React, { useState } from 'react';
import { ArrowRight, Activity, Heart, Zap, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

interface ValvularSelectorProps {
  onSelect: (valvopathy: 'eao' | 'iao' | 'emi' | 'imi' | 'pvm') => void;
  onShowComparison: () => void;
}

export default function ValvularSelector({ onSelect, onShowComparison }: ValvularSelectorProps) {
  const [viewMode, setViewMode] = useState<'focus' | 'defects'>('focus');
  const [selectedFocus, setSelectedFocus] = useState<'mitral' | 'aortic' | null>(null);

  const valvopathies = [
    {
      id: 'eao',
      focus: 'aortic',
      name: 'Estenose Aórtica',
      acronym: 'EAo',
      description: 'Sopro sistólico de ejeção, rude, crescendo-decrescendo, irradiando para o pescoço/carótidas.',
      color: 'bg-brand-blue',
      icon: Zap
    },
    {
      id: 'iao',
      focus: 'aortic',
      name: 'Insuficiência Aórtica',
      acronym: 'IAo',
      description: 'Sopro diastólico em decrescendo, melhor ouvido no foco aórtico ou borda esternal esquerda.',
      color: 'bg-emerald-500',
      icon: Activity
    },
    {
      id: 'emi',
      focus: 'mitral',
      name: 'Estenose Mitral',
      acronym: 'EMi',
      description: 'Sopro diastólico grave, frequentemente com estalido de abertura, melhor em decúbito lateral esquerdo.',
      color: 'bg-purple-500',
      icon: ShieldAlert
    },
    {
      id: 'imi',
      focus: 'mitral',
      name: 'Insuficiência Mitral',
      acronym: 'IMi',
      description: 'Sopro holossistólico de alta frequência, melhor ouvido no ápice com irradiação para axila.',
      color: 'bg-rose-500',
      icon: Heart
    },
    {
      id: 'pvm',
      focus: 'mitral',
      name: 'Prolapso Mitral',
      acronym: 'PVM',
      description: 'Sopro sistólico tardio, frequentemente precedido por um clique mesossistólico.',
      color: 'bg-indigo-500',
      icon: Activity
    }
  ];

  const filteredValvopathies = valvopathies.filter(v => v.focus === selectedFocus);

  return (
    <div className="flex flex-col gap-12 pb-20 animate-in fade-in duration-700">
      {/* Editorial Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-block px-4 py-1 rounded-full bg-brand-blue/20 text-brand-blue text-[10px] font-black uppercase tracking-[0.3em] border border-brand-blue/30">
          Cardiologia Clínica
        </div>
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">Doenças Valvares</h2>
        <p className="text-lg text-slate-400 leading-relaxed italic">
          {viewMode === 'focus' 
            ? "Selecione o foco valvar para explorar as patologias."
            : `Defeitos do Foco ${selectedFocus === 'mitral' ? 'Mitral' : 'Aórtico'}`}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {viewMode === 'focus' ? (
          <motion.div 
            key="focus-selection"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full px-4"
          >
            <button
              onClick={() => {
                setSelectedFocus('aortic');
                setViewMode('defects');
              }}
              className="group relative overflow-hidden p-10 rounded-[3rem] border-2 border-slate-700 hover:border-brand-blue transition-all bg-slate-800 shadow-2xl hover:shadow-brand-blue/10 text-left"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue opacity-20 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={32} />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Foco Aórtico</h3>
                <span className="text-[10px] font-black text-brand-blue bg-brand-blue/10 px-2 py-1 rounded-lg border border-brand-blue/20">2º EID</span>
              </div>
              <p className="text-slate-400 text-sm italic">Principais lesões da valva aórtica e repercussões no ventrículo esquerdo.</p>
            </button>

            <button
              onClick={() => {
                setSelectedFocus('mitral');
                setViewMode('defects');
              }}
              className="group relative overflow-hidden p-10 rounded-[3rem] border-2 border-slate-700 hover:border-purple-500 transition-all bg-slate-800 shadow-2xl hover:shadow-purple-500/10 text-left"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500 opacity-20 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart size={32} />
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">Foco Mitral</h3>
                <span className="text-[10px] font-black text-purple-400 bg-purple-500/10 px-2 py-1 rounded-lg border border-purple-500/20">5º EIE</span>
              </div>
              <p className="text-slate-400 text-sm italic">Patologias do aparelho valvar mitral e repercussões atriais e pulmonares.</p>
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="defect-selection"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col gap-8 max-w-4xl mx-auto w-full px-4"
          >
            <div className="flex items-center justify-between">
              <button 
                onClick={() => setViewMode('focus')}
                className="text-[10px] font-black uppercase text-slate-500 hover:text-white flex items-center gap-2 transition-colors italic"
              >
                <ArrowRight className="rotate-180" size={14} /> Voltar aos Focos
              </button>
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest italic">Selecione a Valvopatia</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredValvopathies.map((v) => (
                <button
                  key={v.id}
                  onClick={() => onSelect(v.id as any)}
                  className="group relative flex flex-col items-start p-8 transition-all rounded-[2.5rem] border-2 border-slate-700 bg-slate-800 hover:border-white/20 hover:shadow-2xl text-left overflow-hidden min-h-[220px]"
                >
                  <div className={cn("absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity", v.color)} />
                  
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md text-white font-black", v.color)}>
                    <v.icon size={24} />
                  </div>
                  
                  <div className="space-y-2 relative z-10">
                    <div className="flex items-center gap-3 mb-1">
                       <span className={cn("text-[9px] font-black px-2 py-0.5 rounded-full text-white", v.color)}>
                        {v.acronym}
                      </span>
                      <h3 className="text-xl font-black text-white uppercase italic">{v.name}</h3>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed italic pr-4">
                      {v.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sumário */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto w-full px-4">
        <div className="p-6 rounded-3xl border border-slate-700 bg-slate-800/50 flex flex-col gap-4 shadow-sm group hover:bg-slate-800 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center font-black text-xs italic border border-slate-600">01</div>
            <h4 className="font-bold text-slate-200 text-sm uppercase italic">Fisiopatologia</h4>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed italic group-hover:text-slate-400">
            Entenda a cascata de sobrecarga de pressão e volume em cada foco.
          </p>
        </div>
        <div className="p-6 rounded-3xl border border-slate-700 bg-slate-800/50 flex flex-col gap-4 shadow-sm group hover:bg-slate-800 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center font-black text-xs italic border border-slate-600">02</div>
            <h4 className="font-bold text-slate-200 text-sm uppercase italic">Exame Físico</h4>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed italic group-hover:text-slate-400">
            Diferenciação entre sopros sistólicos e diastólicos por foco.
          </p>
        </div>
        <div className="p-6 rounded-3xl border border-slate-700 bg-slate-800/50 flex flex-col gap-4 shadow-sm group hover:bg-slate-800 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-slate-700 text-white flex items-center justify-center font-black text-xs italic border border-slate-600">03</div>
            <h4 className="font-bold text-slate-200 text-sm uppercase italic">Conduta</h4>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed italic group-hover:text-slate-400">
            Checklist de intervenção baseado em sintomas e imagem.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full p-8 rounded-[2.5rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl relative overflow-hidden border border-slate-700">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 shadow-inner">
          <Activity className="text-brand-blue" size={32} />
        </div>
        <div>
          <h4 className="font-black text-xl mb-1 uppercase italic tracking-tight">Tabela Mestra de Valvopatias</h4>
          <p className="text-sm text-slate-400 italic">Compare sopros, pulsos e achados de imagem entre as 4 principais valvopatias.</p>
        </div>
        <button 
          onClick={onShowComparison}
          className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-brand-blue/90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap ml-auto shadow-lg shadow-brand-blue/20 flex items-center gap-3"
        >
          Abrir Comparativo <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
