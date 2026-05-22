import React from 'react';
import { Pill, ShieldCheck, AlertTriangle, Activity, HeartPulse, Clock, Zap } from 'lucide-react';

export default function PleuralTreatment() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. MANEJO GERAL */}
      <section id="general-management">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Pill size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Manejo Terapêutico</h2>
        </div>

        <div className="card p-6 border-white/10 bg-slate-900 text-white mb-6">
          <h4 className="font-bold text-brand-blue mb-4 flex items-center gap-2">
            <ShieldCheck size={18} />
            Princípios do Tratamento
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            O tratamento do derrame pleural é focado na <strong>causa base</strong>. O alívio sintomático (toracocentese de alívio) é indicado para pacientes com dispneia importante.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs font-bold text-brand-blue mb-2">Transudatos (ICC/Cirrose):</p>
              <p className="text-[10px] text-slate-400">Tratar a doença sistêmica (Diuréticos, Restrição hídrica). Toracocentese apenas se refratário ou dúvida diagnóstica.</p>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-xs font-bold text-rose-400 mb-2">Exudatos (Pneumonia/TB):</p>
              <p className="text-[10px] text-slate-400">Antibioticoterapia ou esquema RIPE. Avaliar necessidade de drenagem se houver sinais de empiema.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DRENAGEM DE TÓRAX */}
      <section id="chest-drainage">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Indicações de Drenagem (Derrame Parapneumônico)</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl mb-6">
          <div className="bg-rose-600 p-3 text-white font-black text-[10px] uppercase tracking-widest">CRITÉRIOS PARA DRENO (TUBO)</div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">1</div>
                  <p className="text-xs text-slate-300"><strong>Empiema:</strong> Saída de pus na punção ou bactéria no Gram/Cultura.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">2</div>
                  <p className="text-xs text-slate-300"><strong>pH {"<"} 7,20:</strong> Usar seringa de gasometria para coleta precisa.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">3</div>
                  <p className="text-xs text-slate-300"><strong>Glicose {"<"} 40-60 mg/dL:</strong> Marcador de consumo biológico intenso.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">4</div>
                  <p className="text-xs text-slate-300"><strong>DHL {">"} 1000 U/L:</strong> Algumas referências citam {">"} 2/3 LSN.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">5</div>
                  <p className="text-xs text-slate-300"><strong>Derrame Loculado:</strong> Requer atenção especial (pode precisar de fibrinolíticos).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded bg-rose-500/20 flex items-center justify-center text-rose-400 shrink-0 mt-1">6</div>
                  <p className="text-xs text-slate-300"><strong>Derrame Parapneumônico Complicado:</strong> Necessita dreno em 100% dos casos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DERRAME MALIGNO */}
      <section id="malignant-effusion">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-500">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Derrame Pleural Maligno</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-purple-400 text-sm mb-3">Pleurodese</h4>
            <p className="text-[10px] text-slate-300 leading-relaxed">
              Indicada para derrames malignos recorrentes. Consiste na injeção de substância irritante (ex: Talco) para "colar" as pleuras e impedir novo acúmulo. Requer expansão pulmonar completa.
            </p>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-purple-400 text-sm mb-3">Cateter Pleural de Longa Permanência</h4>
            <p className="text-[10px] text-slate-300 leading-relaxed">
              Alternativa à pleurodese, especialmente se o pulmão for "aprisionado" (não expande). Permite drenagem domiciliar intermitente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
