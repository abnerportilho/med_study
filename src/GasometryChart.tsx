import React from "react";
import { ComposedChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Stethoscope } from "lucide-react";

const gasometryData = [
  { stage: "Basal", pH: 7.4, hco3: 24, pCO2: 40, pO2: 95, anionGap: 12, deltaInfo: "-", desc: "Homeostase normal. Tampão e respiração equilibrados." },
  { stage: "CAD Leve", pH: 7.3, hco3: 18, pCO2: 35, pO2: 96, anionGap: 18, deltaInfo: "1.0", desc: "Início da acidemia. Hiperventilação compensatória (teto de pCO2 caindo)." },
  { stage: "CAD Moderada", pH: 7.15, hco3: 12, pCO2: 25, pO2: 98, anionGap: 24, deltaInfo: "1.0", desc: "Respiração de Kussmaul evidente (pCO₂ baixo). HCO₃⁻ muito consumido e Ânion Gap em franca ascensão." },
  { stage: "CAD Grave", pH: 6.9, hco3: 6, pCO2: 15, pO2: 100, anionGap: 30, deltaInfo: "1.0", desc: "Falência compensatória: pCO₂ não consegue cair mais para compensar. pH despenca." },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const getVal = (k: string) => payload.find((p: any) => p.dataKey === k)?.value;
    const deltaInfo = payload[0].payload.deltaInfo;
    return (
      <div className="bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-xl text-xs w-[240px]">
        <p className="font-bold text-white mb-3 uppercase border-b border-slate-800 pb-2">{label}</p>
        <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center"><span className="text-purple-400 block text-[9px] uppercase font-bold mb-0.5">pH</span><span className="text-white font-mono text-sm">{getVal("pH")}</span></div>
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center"><span className="text-emerald-400 block text-[9px] uppercase font-bold mb-0.5">pCO₂</span><span className="text-white font-mono text-sm">{getVal("pCO2")}</span></div>
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 to-transparent"></div>
               <span className="text-amber-400 block text-[9px] uppercase font-bold mb-0.5 relative">Ânion Gap</span>
               <span className="text-white font-mono text-sm relative">{getVal("anionGap")}</span>
            </div>
            <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 text-center relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
               <span className="text-cyan-400 block text-[9px] uppercase font-bold mb-0.5 relative">HCO₃⁻</span>
               <span className="text-white font-mono text-sm relative">{getVal("hco3")}</span>
            </div>
            
            <div className="p-2 bg-slate-800/50 rounded-lg border border-slate-700 text-center col-span-2 flex items-center justify-between px-3">
               <span className="text-rose-400 uppercase font-bold text-[9px]">Relação Δ/Δ (AG/HCO₃⁻)</span>
               <span className="text-white font-mono font-bold bg-slate-950 px-2 py-0.5 rounded text-xs">{deltaInfo}</span>
            </div>
        </div>
        <p className="text-slate-400 italic leading-relaxed text-[10px]">{payload[0].payload.desc}</p>
      </div>
    );
  }
  return null;
};

export function GasometryChart() {
  return (
    <div className="w-full mt-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
      <div className="mb-6">
        <h3 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2">
          <Stethoscope size={16} className="text-emerald-500" />
          Cascata Gasométrica da Cetoacidose
        </h3>
        <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
          Acompanhe a evolução simultânea: acúmulo de cetoácidos eleva o <strong>Ânion Gap</strong>, esgotando o <strong>HCO₃⁻</strong> numa proporção 1:1 (Relação Δ/Δ de 1.0, típica da CAD não complicada). 
          O pulmão intensifica a ventilação abaixando o <strong>pCO₂</strong> (Kussmaul) até o limite, quando a compensação falha e o <strong>pH</strong> sofre queda brusca.
        </p>
      </div>

      <div className="w-full h-[280px] sm:h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={gasometryData} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="stage" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
            
            {/* Eixo principal esquerdo para HCO3, pCO2 e Anion Gap */}
            <YAxis yAxisId="left" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} domain={[0, 50]} tickFormatter={(v) => `${v}`} />
            
            {/* Eixo direito escopo estreito apenas para o pH */}
            <YAxis yAxisId="pH" orientation="right" stroke="#a78bfa" fontSize={10} tickLine={false} axisLine={false} domain={[6.8, 7.5]} />
            
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#334155', strokeWidth: 1, strokeDasharray: '4 4' }} />
            
            {/* Linhas Plotadas */}
            <Line yAxisId="left" type="monotone" dataKey="pCO2" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: "#0f172a", strokeWidth: 2 }} activeDot={{ r: 6 }} name="pCO₂" />
            <Line yAxisId="left" type="monotone" dataKey="hco3" stroke="#22d3ee" strokeWidth={3} dot={{ r: 4, fill: "#0f172a", strokeWidth: 2 }} activeDot={{ r: 6 }} name="HCO₃⁻" />
            <Line yAxisId="left" type="monotone" dataKey="anionGap" stroke="#fbbf24" strokeWidth={3} dot={{ r: 4, fill: "#0f172a", strokeWidth: 2 }} activeDot={{ r: 6 }} name="Ânion Gap" />
            
            {/* Linha pH Tracejada Secundária */}
            <Line yAxisId="pH" type="monotone" dataKey="pH" stroke="#a78bfa" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, fill: "#0f172a", strokeWidth: 2 }} activeDot={{ r: 6 }} name="pH" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex flex-wrap justify-center items-center mt-6 pt-5 border-t border-slate-800 text-[10px] sm:text-xs uppercase font-bold tracking-widest gap-4 sm:gap-6">
         <span className="text-emerald-500 flex items-center gap-1.5"><span className="w-4 h-0.5 bg-emerald-500 inline-block"></span> pCO₂ ↓ Lavado</span>
         <span className="text-cyan-400 flex items-center gap-1.5"><span className="w-4 h-0.5 bg-cyan-400 inline-block"></span> HCO₃⁻ ↓ Consumo</span>
         <span className="text-amber-400 flex items-center gap-1.5"><span className="w-4 h-0.5 bg-amber-400 inline-block"></span> Ânion Gap ↑</span>
         <span className="text-purple-400 flex items-center gap-1.5"><span className="w-4 h-0.5 border-t-2 border-purple-400 border-dashed inline-block"></span> pH ↓ Acidemia</span>
      </div>
    </div>
  );
}
