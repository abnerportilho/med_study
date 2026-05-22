import React, { useState } from "react";
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";

const mechanismData = [
  { stage: "Normal", hco3: 24, hPlus: 4, glicemia: 100, desc: "Homeostase mantida, tampão otimizado." },
  { stage: "CAD Inicial", hco3: 18, hPlus: 8, glicemia: 250, desc: "Acúmulo de cetoácidos. HCO₃⁻ começa a ser ativamente consumido." },
  { stage: "CAD Moderada", hco3: 12, hPlus: 12, glicemia: 450, desc: "Depleção parcial do tampão. Acidemia evidenciada." },
  { stage: "CAD Grave", hco3: 6, hPlus: 16, glicemia: 700, desc: "Esgotamento crítico do tampão sistêmico. Choque metabólico." },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // payload[0] could be hco3, payload[1] could be hPlus, payload[2] could be glicemia
    const getPayloadValue = (dataKey: string) => payload.find((p: any) => p.dataKey === dataKey)?.value;
    
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl text-xs max-w-[200px]">
        <p className="font-bold text-white mb-2 uppercase">{label}</p>
        <p className="text-amber-500 font-semibold mb-1">Glicemia: <span className="text-white">{getPayloadValue("glicemia")} mg/dL</span></p>
        <p className="text-cyan-400 font-semibold mb-1">HCO₃⁻ (Tampão): <span className="text-white">{getPayloadValue("hco3")} mEq/L</span></p>
        <p className="text-rose-400 font-semibold mb-2">Carga Ácida: <span className="text-white">Aumentando</span></p>
        <p className="text-slate-300 italic pt-2 border-t border-slate-800">{payload[0].payload.desc}</p>
      </div>
    );
  }
  return null;
};

export function AcidosisChart() {
  return (
    <div className="w-full mt-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
      <div className="mb-6">
        <h3 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2">
          <Activity size={16} className="text-rose-500" />
          Gráfico Interativo: Dinâmica do Tampão Sanguíneo e Glicemia
        </h3>
        <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
          O gráfico abaixo ilustra a relação entre a escalada da glicemia, a produção contínua de cetoácidos (carga ácida) 
          e as reservas de bicarbonato (HCO₃⁻). À medida que a cetogênese avança, o HCO₃⁻ é inexoravelmente consumido para neutralizar o H⁺, gerando a acidose metabólica grave.
        </p>
      </div>

      <div className="w-full h-[250px] sm:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={mechanismData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHco3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorHPlus" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="stage" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis yAxisId="left" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v} mEq`} domain={[0, 30]} />
            <YAxis yAxisId="rightLine" orientation="right" stroke="#f59e0b" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v} mg/dL`} />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#334155', strokeWidth: 1, strokeDasharray: '4 4' }} />
            <Area yAxisId="left" type="monotone" dataKey="hco3" stroke="#22d3ee" strokeWidth={3} fillOpacity={1} fill="url(#colorHco3)" name="HCO₃⁻" />
            <Area yAxisId="left" type="monotone" dataKey="hPlus" stroke="#f43f5e" strokeWidth={2} strokeDasharray="3 3" fillOpacity={1} fill="url(#colorHPlus)" name="Carga Ácida" />
            <Line yAxisId="rightLine" type="monotone" dataKey="glicemia" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4, strokeWidth: 2, fill: "#slate-900" }} name="Glicemia" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 pt-4 border-t border-slate-800 text-[10px] uppercase font-bold tracking-widest gap-2">
         <span className="text-cyan-400 flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-cyan-400/40 border border-cyan-400 inline-block"></span> Reservas de HCO₃⁻</span>
         <span className="text-rose-400 flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-rose-400/20 border border-rose-400 border-dashed inline-block"></span> Acúmulo de Cetoácidos (H⁺)</span>
         <span className="text-amber-500 flex items-center gap-1"><span className="w-3 h-0.5 bg-amber-500 inline-block"></span> Glicemia</span>
      </div>
    </div>
  );
}
