import React, { useState } from "react";
import { Calculator, AlertTriangle, ArrowUp, ArrowDown, Info } from "lucide-react";

export function DeltaRatioVisualizer() {
  const [ag, setAg] = useState(30);
  const [hco3, setHco3] = useState(10);

  const deltaAg = Math.max(0, ag - 12);
  const deltaHco3 = Math.max(0, 24 - hco3);
  const deltaRatio = deltaHco3 > 0 ? (deltaAg / deltaHco3).toFixed(2) : "0.00";
  const numRatio = parseFloat(deltaRatio);

  let interpretation = "";
  let tagColor = "";
  let example = "";

  if (numRatio < 0.8) {
    interpretation = "Acidose Hiperclorêmica Associada";
    tagColor = "bg-blue-900/50 text-blue-400 border-blue-500/50";
    example = "Diarreia, Acidose Tubular Renal ou Expansão Volêmica (soro fisiológico).";
  } else if (numRatio >= 0.8 && numRatio <= 2.0) {
    interpretation = "Acidose Metabólica com AG Elevado Pura";
    tagColor = "bg-emerald-900/50 text-emerald-400 border-emerald-500/50";
    example = "Típico da Cetoacidose Diabética clássica.";
  } else {
    interpretation = "Alcalose Metabólica Associada";
    tagColor = "bg-rose-900/50 text-rose-400 border-rose-500/50";
    example = "Vômitos severos ou uso de diuréticos.";
  }

  return (
    <div className="w-full mt-6 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
      <div className="mb-6 border-b border-slate-800 pb-4">
        <h3 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2">
          <Calculator size={16} className="text-amber-500" />
          Relação Δ/Δ (Delta Ratio) - Distúrbios Ocultos
        </h3>
        <p className="text-xs text-slate-400 mt-2 max-w-3xl leading-relaxed">
          O <strong>H⁺</strong> derruba o bicarbonato. O <strong>Cetoânion⁻</strong> levanta o Ânion Gap. 
          O Delta-Delta mede se essa troca é proporcional (1:1). Variações apontam para distúrbios mistos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Lado Esquerdo - Calculadora Visual */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <label className="text-xs font-bold text-amber-500 uppercase flex justify-between mb-2">
              <span>Ânion Gap (Medido)</span>
              <span>{ag} mEq/L</span>
            </label>
            <input 
              type="range" min="12" max="40" value={ag} 
              onChange={(e) => setAg(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500" 
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
               <span>12 (Normal)</span>
               <span>40 (Grave)</span>
            </div>
            <div className="mt-2 text-xs text-slate-400 font-mono">
              Δ AG = {ag} - 12 (Base) = <span className="text-amber-400 font-bold">{deltaAg}</span>
            </div>
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <label className="text-xs font-bold text-cyan-500 uppercase flex justify-between mb-2">
              <span>HCO₃⁻ (Medido)</span>
              <span>{hco3} mEq/L</span>
            </label>
            <input 
              type="range" min="2" max="24" value={hco3} 
              onChange={(e) => setHco3(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500" 
            />
            <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
               <span>2 (Grave)</span>
               <span>24 (Normal)</span>
            </div>
            <div className="mt-2 text-xs text-slate-400 font-mono">
              Δ HCO₃⁻ = 24 (Base) - {hco3} = <span className="text-cyan-400 font-bold">{deltaHco3}</span>
            </div>
          </div>

          <div className="bg-slate-800 border border-slate-700 p-4 rounded-xl text-center shadow-inner">
             <div className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-1">Resultado (ΔAG / ΔHCO₃⁻)</div>
             <div className="text-4xl font-black text-white font-mono">{deltaRatio}</div>
          </div>
        </div>

        {/* Lado Direito - Interpretação */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className={`p-5 rounded-xl border ${tagColor} transition-colors duration-500`}>
             <div className="flex items-center gap-2 mb-3">
               <AlertTriangle size={20} />
               <span className="text-sm font-black uppercase tracking-wider">{interpretation}</span>
             </div>
             <p className="text-sm opacity-90 leading-relaxed font-medium">Cenário Clínico: {example}</p>
             
             {numRatio < 0.8 && (
               <div className="mt-4 pt-3 border-t border-blue-500/30 text-xs">
                 O HCO₃⁻ caiu <strong>demais</strong> desproporcionalmente ao aumento do AG. Há perda de bicarbonato (ex: trato GI ou renal) ocorrendo ao mesmo tempo.
               </div>
             )}
             {numRatio >= 0.8 && numRatio <= 2.0 && (
               <div className="mt-4 pt-3 border-t border-emerald-500/30 text-xs">
                 Para cada H⁺ que consome um HCO₃⁻, um Cetoânion sobra no plasma elevando o AG. Equação perfeitamente balanceada = doença pura.
               </div>
             )}
             {numRatio > 2.0 && (
               <div className="mt-4 pt-3 border-t border-rose-500/30 text-xs">
                 O HCO₃⁻ <strong>não caiu o suficiente</strong> para o tanto que o AG subiu. Algo está segurando o bicarbonato alto (ex: perda de ácido gástrico por vômitos).
               </div>
             )}
          </div>

          {/* Mini Gráfico de Barras Estático para a Proporção */}
          <div className="mt-6 flex flex-col gap-3">
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">Comparativo de Deltas</div>
             
             <div className="flex items-center gap-3 w-full">
               <div className="w-16 text-right text-[10px] uppercase font-bold text-amber-500 truncate">Δ AG</div>
               <div className="flex-1 bg-slate-950 h-6 rounded-full overflow-hidden relative border border-slate-800">
                  <div 
                    className="h-full bg-amber-500 transition-all duration-500" 
                    style={{ width: `${Math.min(100, (deltaAg / 28) * 100)}%` }}
                  ></div>
               </div>
               <div className="w-8 font-mono text-xs text-white">{deltaAg}</div>
             </div>
             
             <div className="flex items-center gap-3 w-full">
               <div className="w-16 text-right text-[10px] uppercase font-bold text-cyan-500 truncate">Δ HCO₃⁻</div>
               <div className="flex-1 bg-slate-950 h-6 rounded-full overflow-hidden relative border border-slate-800">
                  <div 
                    className="h-full bg-cyan-500 transition-all duration-500" 
                    style={{ width: `${Math.min(100, (deltaHco3 / 22) * 100)}%` }}
                  ></div>
               </div>
               <div className="w-8 font-mono text-xs text-white">{deltaHco3}</div>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
