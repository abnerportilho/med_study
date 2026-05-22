import React, { useState } from "react";
import {
  Stethoscope,
  Activity,
  TestTube,
  AlertOctagon,
  Brain,
  Droplets,
  Thermometer,
  Flame,
  Scale,
} from "lucide-react";

export function DiagnosisTab() {
  const [activeIonTab, setActiveIonTab] = useState<
    "sodio" | "potassio" | "fosfato"
  >("potassio");
  const [activeDiff, setActiveDiff] = useState<
    "ehh" | "alcool" | "latica" | "drc"
  >("ehh");

  return (
    <div className="space-y-8">
      {/* SEÇÃO 1: SINAIS E SINTOMAS (ACHADOS CLÍNICOS) */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
        <h3 className="text-sm font-black text-rose-500 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Stethoscope size={18} />
          Achados Clínicos (Sinais e Sintomas)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-slate-950 border border-rose-900/30">
            <h4 className="text-xs font-bold text-slate-300 uppercase mb-3 flex items-center gap-2">
              <Droplets size={14} className="text-blue-400" /> Cardeais /
              Hipovolemia
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                <span className="text-slate-300">
                  <strong className="text-white">
                    Poliúria, Polidipsia, Polifagia:
                  </strong>{" "}
                  Acompanhados de intensa <strong>perda de peso</strong> (dias a
                  semanas).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                <span className="text-slate-300">
                  <strong className="text-white">Desidratação Grave:</strong>{" "}
                  Mucosas secas, turgor diminuído.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                <span className="text-slate-300">
                  <strong className="text-white">
                    Instabilidade Hemodinâmica:
                  </strong>{" "}
                  Taquicardia compensatória e hipotensão postural.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-rose-900/30">
            <h4 className="text-xs font-bold text-slate-300 uppercase mb-3 flex items-center gap-2">
              <AlertOctagon size={14} className="text-amber-500" /> Sinais
              Sistêmicos
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                <span className="text-slate-300">
                  <strong className="text-amber-400">Gastrointestinais:</strong>{" "}
                  Náuseas, vômitos e dor abdominal difusa (pode simular quadro
                  de abdome agudo, causado pela cetose).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1 shrink-0"></span>
                <span className="text-slate-300">
                  <strong className="text-white">Temperatura:</strong>{" "}
                  Geralmente normotérmico ou levemente hipotérmico devido à
                  vasodilatação periférica.{" "}
                  <em>
                    Atenção: Febre indica forte suspeita de infecção subjacente!
                  </em>
                </span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-rose-900/30 md:col-span-2 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <h4 className="text-xs font-bold text-slate-300 uppercase mb-3 flex items-center gap-2">
                <Activity size={14} className="text-emerald-400" /> Respiratório
              </h4>
              <p className="text-xs text-slate-300 bg-emerald-950/20 p-3 rounded-lg border border-emerald-900/50">
                <strong className="text-white block mb-1">
                  Respiração de Kussmaul:
                </strong>{" "}
                Padrão respiratório rápido e profundo. Representa o esforço
                compensatório extremo do pulmão para lavar o pCO₂ e amenizar a
                acidemia severa.
              </p>
              <p className="text-xs text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-700/50 mt-2">
                <strong className="text-white block mb-1">
                  Hálito Cetônico:
                </strong>{" "}
                Odor frutado (semelhante a maçã podre), decorrente da exalação
                de acetona.
              </p>
            </div>
            <div className="flex-1">
              <h4 className="text-xs font-bold text-slate-300 uppercase mb-3 flex items-center gap-2">
                <Brain size={14} className="text-purple-400" /> Neurológico
              </h4>
              <p className="text-xs text-slate-300 bg-purple-950/20 p-3 rounded-lg border border-purple-900/50">
                <strong className="text-white block mb-1">
                  Alteração do Status Mental:
                </strong>{" "}
                Desde fadiga e lentidão leve até confusão mental, torpor crasso
                e, em casos gravíssimos ou muito hiperosmolares,{" "}
                <strong>coma</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: EXAMES COMPLEMENTARES */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
        <h3 className="text-sm font-black text-cyan-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <TestTube size={18} />
          Achados em Exames Complementares
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Card Glicemia */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center hover:border-amber-500/50 transition-colors">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 block mb-2">
              Glicemia
            </span>
            <span className="text-2xl font-black text-amber-500 block mb-1">
              300 a 900
            </span>
            <span className="text-xs font-bold text-slate-400">mg/dL</span>
          </div>

          {/* Card Cetonas */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center hover:border-rose-500/50 transition-colors">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 block mb-2">
              Cetonemia/Cetonúria
            </span>
            <span className="text-2xl font-black text-rose-500 block mb-1">
              Presente (+)
            </span>
            <span className="text-xs font-bold text-slate-400">
              Sangue e Urina
            </span>
          </div>

          {/* Card pH e HCO3 */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center hover:border-purple-500/50 transition-colors">
            <span className="text-[10px] uppercase font-black tracking-widest text-slate-500 block mb-2">
              Gasometria
            </span>
            <span className="text-xl font-black text-purple-400 block pb-1 border-b border-slate-800">
              pH &lt; 7,3
            </span>
            <span className="text-xl font-black text-cyan-400 block pt-1">
              HCO₃⁻ &lt; 15
            </span>
          </div>

          {/* Card Eletrólitos */}
          <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex flex-col justify-center space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-bold">Potássio</span>
              <span className="text-white font-mono">5 - 7 mEq/L</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-bold">Sódio medido</span>
              <span className="text-white font-mono">~130 (↓)</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-400 font-bold">Fosfato</span>
              <span className="text-white font-mono">6 - 7 mEq/L</span>
            </div>
          </div>
        </div>

        {/* Adicionais lab */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs">
            <strong className="text-white uppercase text-[10px] block mb-1 text-slate-400">
              Leucograma:
            </strong>
            Leucocitose importante (ex: 20-30k) pode ocorrer pelo
            estresse/hemoconcentração, sem necessariamente indicar infecção.
            Desvio à esquerda forte e febre são mais preditivos.
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-center flex flex-col justify-center">
            <strong className="text-white uppercase text-[10px] block mb-1 text-slate-400">
              Osmolaridade Sérica:
            </strong>
            Elevada. Ex: &gt; 320 mOsm/kg.
          </div>
          <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs">
            <strong className="text-white uppercase text-[10px] block mb-1 text-slate-400">
              Amilase Sérica:
            </strong>
            Pode estar falsamente elevada (até 3x o LSN) pela ação salivar e
            renal, sem pancreatite. A lipase é mais específica se alta suspeita
            de dor abdominal biliar/pancreática.
          </div>
        </div>
      </div>

      {/* SEÇÃO EXTRA: DISTÚRBIOS ELETROLÍTICOS E ARMADILHAS */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-500 to-rose-500"></div>
        <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
          <AlertOctagon size={18} className="text-amber-500" />
          Distúrbios Eletrolíticos e Armadilhas (Red Flags)
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveIonTab("sodio")}
            className={`px-4 py-2 flex-1 md:flex-none rounded-lg text-xs font-bold uppercase transition-all ${activeIonTab === "sodio" ? "bg-blue-900 border-blue-500 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]" : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300"} border`}
          >
            Sódio (Na⁺)
          </button>
          <button
            onClick={() => setActiveIonTab("potassio")}
            className={`px-4 py-2 flex-1 md:flex-none rounded-lg text-xs font-bold uppercase transition-all ${activeIonTab === "potassio" ? "bg-rose-900 border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]" : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300"} border`}
          >
            Potássio (K⁺)
          </button>
          <button
            onClick={() => setActiveIonTab("fosfato")}
            className={`px-4 py-2 flex-1 md:flex-none rounded-lg text-xs font-bold uppercase transition-all ${activeIonTab === "fosfato" ? "bg-slate-700 border-slate-400 text-slate-200 shadow-[0_0_15px_rgba(148,163,184,0.3)]" : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300"} border`}
          >
            Fosfato (PO₄³⁻)
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* SODIO */}
          {activeIonTab === "sodio" && (
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-blue-400 uppercase tracking-wider">
                  Sódio (Na⁺)
                </span>
                <span className="px-2 py-1 bg-blue-900/40 text-blue-300 text-[10px] font-bold rounded uppercase">
                  Falsamente Baixo
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                A hiperglicemia intensa aumenta a osmolaridade plasmática,
                "puxando" água do meio intracelular para o extracelular, o que{" "}
                <strong>dilui o sódio</strong> (hiponatremia dilucional).
              </p>
              <div className="p-3 bg-blue-950/20 border border-blue-900/50 rounded text-[10px] text-slate-300">
                <strong className="text-blue-400 block mb-1">
                  Cálculo de Correção:
                </strong>
                Para cada 100 mg/dL de glicose acima de 100, adicione{" "}
                <strong>1,6 mEq/L</strong> ao Na medido (ou 2,4 mEq/L se glicose
                &gt; 400).
              </div>
            </div>
          )}

          {/* POTASSIO */}
          {activeIonTab === "potassio" && (
            <div className="p-5 rounded-xl bg-slate-950 border border-rose-900/30 relative overflow-hidden group hover:border-rose-500/50 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                <AlertOctagon size={40} className="text-rose-500" />
              </div>
              <div className="flex items-center justify-between mb-4 relative">
                <span className="text-xs font-black text-rose-500 uppercase tracking-wider">
                  Potássio (K⁺)
                </span>
                <span className="px-2 py-1 bg-rose-900/40 text-rose-300 text-[10px] font-bold rounded uppercase">
                  Atenção Extrema
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mb-3 leading-relaxed relative">
                Geralmente medido como <strong>normal ou alto</strong> (shift
                extracelular por falta de insulina e acidose). PORÉM, o estoque
                corporal total está <strong>MUITO depletado</strong> (diurese
                osmótica).
              </p>
              <div className="p-3 bg-rose-950/30 border border-rose-900/50 rounded text-[10px] text-rose-200 relative">
                <strong className="text-rose-400 block mb-1">
                  ARMADILHA CLÍNICA:
                </strong>
                Se o K⁺ inicial vier &lt; 3,3 mEq/L, o paciente tem uma depleção
                severíssima. <strong>NÃO INICIE INSULINA!</strong> A insulina
                colocaria o pouco K⁺ pra dentro da célula, causando hipocalemia
                fatal. Reponha potássio primeiro.
              </div>
            </div>
          )}

          {/* FOSFATO */}
          {activeIonTab === "fosfato" && (
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-slate-400 uppercase tracking-wider">
                  Fosfato (PO₄³⁻)
                </span>
                <span className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold rounded uppercase">
                  Depleção Global
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                Dinâmica idêntica ao potássio: parece normal no plasma inicial,
                mas há depleção corporal maciça. A insulina fará os níveis
                caírem durante o tratamento.
              </p>
              <div className="p-3 bg-slate-900/50 border border-slate-800 rounded text-[10px] text-slate-300">
                <strong className="text-slate-400 block mb-1">
                  Reposição Rotineira?
                </strong>
                Não. Raramente precisa repor na emergência, exceto se &lt; 1,0
                mg/dL ou disfunção respiratória/cardíaca. Reposição empírica
                indiscriminada pode induzir hipocalcemia.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEÇÃO 3: CRITÉRIOS DIAGNÓSTICOS E GRAVIDADE */}
      <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 shadow-lg">
        <h3 className="text-sm font-black text-emerald-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Thermometer size={18} />
          Critérios Diagnósticos e Gravidade
        </h3>

        <div className="text-center mb-6">
          <p className="text-xs text-slate-300 font-bold">
            A tríade obrigatória para definir o diagnóstico laboratorial da CAD:
          </p>
        </div>

        {/* TRÍADE VENN SIMPLIFICADA */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div className="w-full sm:w-1/3 p-5 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Flame size={48} />
            </div>
            <span className="block text-[10px] font-black uppercase text-amber-500 tracking-widest mb-2 relative">
              A. Glicemia Alta
            </span>
            <span className="block text-2xl font-black text-white relative">
              &gt; 200
            </span>
            <span className="block text-[10px] text-amber-400/80 font-bold mt-1 uppercase relative">
              mg/dL
            </span>
          </div>

          <div className="w-full sm:w-1/3 p-5 rounded-2xl bg-purple-500/10 border border-purple-500/40 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Droplets size={48} />
            </div>
            <span className="block text-[10px] font-black uppercase text-purple-400 tracking-widest mb-2 relative">
              B. Acidose
            </span>
            <span className="block text-xl font-black text-white relative leading-tight">
              pH &lt; 7,3 <br />
              <span className="text-sm text-purple-300">ou</span>
              <br />
              HCO₃⁻ &lt; 15
            </span>
          </div>

          <div className="w-full sm:w-1/3 p-5 rounded-2xl bg-rose-500/10 border border-rose-500/40 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <Activity size={48} />
            </div>
            <span className="block text-[10px] font-black uppercase text-rose-500 tracking-widest mb-2 relative">
              C. Cetonemia
            </span>
            <span className="block text-xl font-black text-white relative">
              &gt; 3,0 mmol/L
            </span>
            <span className="block text-[10px] text-rose-400/80 font-bold mt-2 uppercase relative">
              (Ou Moderada / Forte 3+/4+)
            </span>
          </div>
        </div>

        {/* TABELA DE GRAVIDADE */}
        <div className="mt-8 pt-6 border-t border-emerald-900/40">
          <h4 className="text-xs font-bold text-slate-300 uppercase mb-4 text-center">
            Classificação de Gravidade (Status Ácido-Base)
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border-l-4 border-emerald-500 flex flex-col justify-between">
              <div>
                <span className="text-sm font-black text-emerald-400 block mb-3">
                  CAD LEVE
                </span>
                <ul className="text-xs text-slate-400 space-y-2 mt-2">
                  <li className="flex justify-between border-b border-slate-800 pb-1">
                    <span>Status Mental:</span>{" "}
                    <strong className="text-white">Alerta</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-1">
                    <span>pH Arterial:</span>{" "}
                    <strong className="text-emerald-300">7,2 a 7,3</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-1">
                    <span>HCO₃⁻ Seringa:</span>{" "}
                    <strong className="text-emerald-300">15 a 18</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border-l-4 border-amber-500 flex flex-col justify-between">
              <div>
                <span className="text-sm font-black text-amber-500 block mb-3">
                  CAD MODERADA
                </span>
                <ul className="text-xs text-slate-400 space-y-2 mt-2">
                  <li className="flex justify-between border-b border-slate-800 pb-1">
                    <span>Status Mental:</span>{" "}
                    <strong className="text-white">
                      Alerta ou Discretamente Sonolento
                    </strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-1">
                    <span>pH Arterial:</span>{" "}
                    <strong className="text-amber-400">7,1 a 7,2</strong>
                  </li>
                  <li className="flex justify-between border-b border-slate-800 pb-1">
                    <span>HCO₃⁻ Seringa:</span>{" "}
                    <strong className="text-amber-400">10 a 14,9</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border-l-4 border-rose-500 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-rose-500/5 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <span className="text-sm font-black text-rose-500 block mb-3">
                  CAD GRAVE
                </span>
                <ul className="text-xs text-slate-400 space-y-2 mt-2">
                  <li className="flex justify-between border-b border-rose-950 pb-1">
                    <span>Status Mental:</span>{" "}
                    <strong className="text-white">Comatoso / Torporoso</strong>
                  </li>
                  <li className="flex justify-between border-b border-rose-950 pb-1">
                    <span>pH Arterial:</span>{" "}
                    <strong className="text-rose-400">&lt; 7,1</strong>
                  </li>
                  <li className="flex justify-between border-b border-rose-950 pb-1">
                    <span>HCO₃⁻ Seringa:</span>{" "}
                    <strong className="text-rose-400">&lt; 10</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 4: DIAGNÓSTICO DIFERENCIAL */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
        <h3 className="text-sm font-black text-purple-400 uppercase tracking-widest mb-6 flex items-center gap-2">
          <Scale size={18} />
          Diagnóstico Diferencial
        </h3>

        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setActiveDiff("ehh")}
            className={`px-4 py-2 flex-1 md:flex-none rounded-lg text-xs font-bold uppercase transition-all ${activeDiff === "ehh" ? "bg-amber-900 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]" : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300"} border`}
          >
            EHH
          </button>
          <button
            onClick={() => setActiveDiff("alcool")}
            className={`px-4 py-2 flex-1 md:flex-none rounded-lg text-xs font-bold uppercase transition-all ${activeDiff === "alcool" ? "bg-cyan-900 border-cyan-500 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]" : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300"} border`}
          >
            Álcool / Jejum
          </button>
          <button
            onClick={() => setActiveDiff("latica")}
            className={`px-4 py-2 flex-1 md:flex-none rounded-lg text-xs font-bold uppercase transition-all ${activeDiff === "latica" ? "bg-rose-900 border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.3)]" : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300"} border`}
          >
            Acidose Lática / Fármacos
          </button>
          <button
            onClick={() => setActiveDiff("drc")}
            className={`px-4 py-2 flex-1 md:flex-none rounded-lg text-xs font-bold uppercase transition-all ${activeDiff === "drc" ? "bg-slate-700 border-slate-400 text-slate-200 shadow-[0_0_15px_rgba(148,163,184,0.3)]" : "bg-slate-950 border-slate-800 text-slate-500 hover:bg-slate-800 hover:text-slate-300"} border`}
          >
            Insuficiência Renal
          </button>
        </div>

        <div className="grid grid-cols-1">
          {activeDiff === "ehh" && (
            <div className="p-5 rounded-xl bg-slate-950 border border-amber-900/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-amber-500 uppercase tracking-wider">
                  Estado Hiperglicêmico Hiperosmolar
                </span>
                <span className="px-2 py-1 bg-amber-900/40 text-amber-300 text-[10px] font-bold rounded uppercase">
                  Glicemia &gt; 600
                </span>
              </div>
              <p className="text-[12px] text-slate-300 mb-3 leading-relaxed">
                Mais comum em idosos e pacientes com DM2. Possui{" "}
                <strong>mortalidade alta (10-20%)</strong>.
              </p>
              <div className="p-3 bg-amber-950/20 border border-amber-900/50 rounded text-[11px] text-slate-300 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>
                    <strong>Glicemia Extremada:</strong> Frequentemente bem
                    acima de 600 mg/dL.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>
                    <strong>Osmolaridade Sérica:</strong> Muito alta,
                    tipicamente &gt; 320 mOsm/kg.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">•</span>
                  <span>
                    <strong>Gasometria:</strong> Geralmente{" "}
                    <strong>normal</strong>, sem acidose metabólica grave, e sem
                    cetonemia expressiva, o que o diferencia da CAD.
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeDiff === "alcool" && (
            <div className="p-5 rounded-xl bg-slate-950 border border-cyan-900/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-cyan-400 uppercase tracking-wider">
                  Cetoacidose Alcoólica / Cetose de Jejum
                </span>
                <span className="px-2 py-1 bg-cyan-900/40 text-cyan-300 text-[10px] font-bold rounded uppercase">
                  Glicemia Normal ou Baixa
                </span>
              </div>
              <p className="text-[12px] text-slate-300 mb-3 leading-relaxed">
                Ocorre tipicamente em pacientes com histórico de{" "}
                <strong>etilismo abusivo</strong> ou desnutrição e jejum
                prolongado (exclusão de carboidratos).
              </p>
              <div className="p-3 bg-cyan-950/20 border border-cyan-900/50 rounded text-[11px] text-slate-300 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>
                    <strong>Ponto de Divergência:</strong> Cursa com ânion-gap
                    elevado por cetonas, mas a{" "}
                    <strong>
                      glicemia está normal, diminuída (&lt; 200 mg/dL) ou em
                      níveis de hipoglicemia
                    </strong>
                    .
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  <span>
                    <strong>Tratamento:</strong> Reversão rápida com a
                    administração de glicose (freq. associada a tiamina).
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeDiff === "latica" && (
            <div className="p-5 rounded-xl bg-slate-950 border border-rose-900/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-rose-500 uppercase tracking-wider">
                  Acidose Lática / Intoxicação
                </span>
                <span className="px-2 py-1 bg-rose-900/40 text-rose-300 text-[10px] font-bold rounded uppercase">
                  Anion-Gap Sem Cetose
                </span>
              </div>
              <p className="text-[12px] text-slate-300 mb-3 leading-relaxed">
                Provocada por acidose lática secundária a hipoperfusão (choque,
                sepse) ou intoxicação/uso inadequado de fármacos.
              </p>
              <div className="p-3 bg-rose-950/20 border border-rose-900/50 rounded text-[11px] text-slate-300 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>
                    <strong>Farmacologia:</strong> Causada pelo uso de{" "}
                    <strong>Salicilatos</strong> (AAS) e acúmulo de{" "}
                    <strong>Metformina</strong> em pacientes com insuficiência
                    renal.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-rose-500 mt-0.5">•</span>
                  <span>
                    <strong>Ponto de Divergência:</strong> Gasometria mostra
                    acidose com ânion-gap alto, mas{" "}
                    <strong>não há cetonemia / cetonúria forte</strong>. Lactato
                    encontra-se flagrantemente elevado.
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeDiff === "drc" && (
            <div className="p-5 rounded-xl bg-slate-950 border border-slate-700 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-slate-300 uppercase tracking-wider">
                  Insuficiência Renal Crônica (DRC)
                </span>
                <span className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold rounded uppercase">
                  Uremia (Escórias)
                </span>
              </div>
              <p className="text-[12px] text-slate-300 mb-3 leading-relaxed">
                Falência sustentada da função renal que reduz a capacidade de
                eliminar ácidos inorgânicos fixos.
              </p>
              <div className="p-3 bg-slate-900 border border-slate-700/50 rounded text-[11px] text-slate-300 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>
                    <strong>Ânion-Gap:</strong> Elevado à custa de ácidos não
                    mensurados (fosfatos, sulfatos, urato), não por corpos
                    cetônicos.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>
                    <strong>Ponto de Divergência:</strong> Ausência de
                    cetonemia. Níveis de <strong>Ureia e Creatinina</strong>{" "}
                    estão substancialmente elevados desde a admissão, com
                    histórico clínico compatível.
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEÇÃO 5: TABELA COMPARATIVA DE DIAGNÓSTICO DIFERENCIAL */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg overflow-x-auto">
        <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
          <Scale size={18} className="text-slate-400" />
          Resumo Comparativo
        </h3>
        <table className="w-full text-left text-xs min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="p-3 font-black uppercase tracking-wider">
                Critério
              </th>
              <th className="p-3 font-black uppercase tracking-wider text-rose-400">
                CAD
              </th>
              <th className="p-3 font-black uppercase tracking-wider text-purple-400">
                CAD Euglicêmica
              </th>
              <th className="p-3 font-black uppercase tracking-wider text-amber-500">
                Estado Hiperosmolar
              </th>
              <th className="p-3 font-black uppercase tracking-wider text-cyan-400">
                Acidose Lática
              </th>
              <th className="p-3 font-black uppercase tracking-wider text-slate-300">
                Insuficiência Renal
              </th>
            </tr>
          </thead>
          <tbody className="text-slate-300 divide-y divide-slate-800/50">
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-bold text-slate-400">Ânion Gap</td>
              <td className="p-3">
                <span className="text-rose-400 font-bold">Elevado</span>
              </td>
              <td className="p-3">
                <span className="text-purple-400 font-bold">Elevado</span>
              </td>
              <td className="p-3">Normal ou levemente ↑</td>
              <td className="p-3">
                <span className="text-cyan-400 font-bold">Elevado</span>
              </td>
              <td className="p-3">
                <span className="text-slate-300 font-bold">Elevado</span>
              </td>
            </tr>
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-bold text-slate-400">Glicemia</td>
              <td className="p-3 text-rose-400">&gt; 200 - 250</td>
              <td className="p-3 text-purple-400 font-bold">&lt; 200</td>
              <td className="p-3 text-amber-500 font-bold">
                MUITO ALTA (&gt; 600)
              </td>
              <td className="p-3">Variável</td>
              <td className="p-3">Variável</td>
            </tr>
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-bold text-slate-400">
                Cetonemia/Cetonúria
              </td>
              <td className="p-3 text-rose-400 font-bold">Forte (+++/++++)</td>
              <td className="p-3 text-purple-400 font-bold">
                Forte (+++/++++)
              </td>
              <td className="p-3">Ausente ou Traços</td>
              <td className="p-3">Ausente</td>
              <td className="p-3">Ausente</td>
            </tr>
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-bold text-slate-400">pH / Bicarbonato</td>
              <td className="p-3">pH &lt; 7.3 / HCO3 &lt; 15</td>
              <td className="p-3">pH &lt; 7.3 / HCO3 &lt; 15</td>
              <td className="p-3 font-bold">Normal (pH &gt; 7.3)</td>
              <td className="p-3 text-cyan-400">pH &lt; 7.3 / HCO3 baixo</td>
              <td className="p-3 text-slate-300">pH &lt; 7.3 / HCO3 baixo</td>
            </tr>
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-bold text-slate-400">
                Achado Específico
              </td>
              <td className="p-3">β-hidroxibutirato alto</td>
              <td className="p-3">
                Falso negativo no EAS se betahidroxibutirato
              </td>
              <td className="p-3 text-amber-500">Osmolaridade &gt; 320</td>
              <td className="p-3 text-cyan-400">Lactato &gt; 5 mmol/L</td>
              <td className="p-3 text-slate-300">Ureia e Creatinina ↑↑</td>
            </tr>
            <tr className="hover:bg-slate-800/30 transition-colors">
              <td className="p-3 font-bold text-slate-400">Contexto Típico</td>
              <td className="p-3 text-xs">
                DM1, sepse, infecção, omissão de insulina
              </td>
              <td className="p-3 text-xs">
                Uso de iSGLT2, gestante, má alimentação, uso abusivo de álcool, cocaína, pancreatite e doença hepática crônica
              </td>
              <td className="p-3 text-xs">
                DM2, idoso, com desidratação severa insidiosa
              </td>
              <td className="p-3 text-xs">
                Choque, sepse, isquemia, uso de metformina + hipóxia
              </td>
              <td className="p-3 text-xs">
                DRC estabelecida, oligúria, urina espumosa
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
