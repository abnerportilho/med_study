import React, { useState } from "react";
import {
  Droplets,
  Activity,
  Timer,
  ShieldAlert,
  Zap,
  Layers,
  Info,
  ClipboardList,
  BookOpen,
  Syringe,
  AlertCircle,
  Scale,
  ArrowDown,
  ArrowUp,
  Flame,
  ArrowLeft,
  ArrowRight,
  AlertTriangle,
  FlaskConical,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AcidosisChart } from "./AcidosisChart";
import { GasometryChart } from "./GasometryChart";
import { DeltaRatioVisualizer } from "./DeltaRatioVisualizer";
import { DiagnosisTab } from "./DiagnosisTab";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function DKAMain() {
  const [activeTab, setActiveTab] = useState<
    "fisiopatologia" | "diagnostico" | "tratamento"
  >("fisiopatologia");
  const [activeStep, setActiveStep] = useState(0);
  const [showInitialSteps, setShowInitialSteps] = useState(false);
  const [showExames, setShowExames] = useState(false);
  const [showEcgDetails, setShowEcgDetails] = useState(false);
  const [showHydration, setShowHydration] = useState(false);
  const [showInsulin, setShowInsulin] = useState(false);
  const [showPotassium, setShowPotassium] = useState(false);
  const [showGlucose, setShowGlucose] = useState(false);
  const [weight, setWeight] = useState<number | "">(70);
  const [kclAmpoules, setKclAmpoules] = useState<number>(2);
  const [soroInfundido, setSoroInfundido] = useState<number>(1000);
  const [velBomba, setVelBomba] = useState<number>(250);
  const [transitionFactor, setTransitionFactor] = useState<number>(0.5);
  const [showOverlapWarning, setShowOverlapWarning] = useState<boolean>(false);
  const [activeCriterionHelp, setActiveCriterionHelp] = useState<string | null>(null);

  const treatmentSteps = [
    {
      id: "initial",
      title: "0. Passos Iniciais",
      icon: Activity,
      content: (
        <div className="space-y-4">
          <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-900/40">
            <div className="text-center mb-8 flex flex-col items-center gap-4">
              <span className="inline-block px-4 py-2 bg-indigo-600 font-black text-white rounded-lg text-sm shadow-[0_0_20px_rgba(79,70,229,0.5)] transform scale-110">
                CAD DIAGNOSTICADA! O QUE FAZER?
              </span>

              <ArrowDown
                className="text-indigo-500/50 animate-bounce mt-4"
                size={32}
              />

              <button
                onClick={() => setShowInitialSteps(!showInitialSteps)}
                className={cn(
                  "px-6 py-3 border rounded-xl font-black uppercase tracking-widest transition-colors shadow-lg flex items-center justify-between gap-4 min-w-[240px]",
                  !showInitialSteps
                    ? "bg-indigo-900 border-indigo-500 text-indigo-200 hover:bg-indigo-800 hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                    : "bg-indigo-950/50 border-indigo-500/30 text-indigo-400 hover:bg-indigo-900/50 hover:text-indigo-300",
                )}
              >
                <span>Primeiras Condutas</span>
                {showInitialSteps ? (
                  <ArrowUp size={18} />
                ) : (
                  <ArrowDown size={18} />
                )}
              </button>
            </div>

            <AnimatePresence>
              {showInitialSteps && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col items-center gap-2 max-w-xl mx-auto overflow-hidden"
                >
                  {/* Passo 1 */}
                  <div className="w-full p-4 rounded-xl bg-slate-900 border-2 border-indigo-500 shadow-md relative group hover:border-indigo-400 transition-colors">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-xs shadow-lg">
                      1
                    </div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1 ml-4">
                      <span className="text-indigo-400">Suporte Básico</span>
                    </h4>
                    <p className="text-[12px] font-sans text-slate-400 ml-4">
                      Vias aéreas patentes, <strong>AVP calibroso</strong>,
                      Monitorização Cardíaca Contínua e O₂ complementar se
                      necessário.
                    </p>
                  </div>

                  <ArrowDown className="text-indigo-500/50" />

                  {/* Passo 2 */}
                  <div className="w-full p-4 rounded-xl bg-slate-900 border-2 border-blue-500 shadow-md relative group hover:border-blue-400 transition-colors">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-xs shadow-lg">
                      2
                    </div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1 ml-4">
                      <span className="text-blue-400">
                        Status Volêmico &amp; Confirmação
                      </span>
                    </h4>
                    <p className="text-[12px] font-sans text-slate-400 ml-4">
                      Avaliar rapidamente a{" "}
                      <strong>severidade da desidratação</strong> clinicamente e
                      documentar glicemia capilar + cetonemia para confirmação
                      beira-leito.
                    </p>
                  </div>

                  <ArrowDown className="text-blue-500/50" />

                  {/* Passo 3 */}
                  <div className="w-full p-4 rounded-xl bg-slate-900 border-2 border-amber-500 shadow-md relative group hover:border-amber-400 transition-colors">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-black text-xs shadow-lg">
                      3
                    </div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1 ml-4">
                      <span className="text-amber-400">
                        Controle Estrito de Balanço
                      </span>
                    </h4>
                    <p className="text-[12px] font-sans text-slate-400 ml-4">
                      <strong className="text-[12px]">Sonda vesical de demora</strong> (crucial se
                      quadro grave, rebaixamento neurológico ou dificuldade de
                      aferir o débito urinário espontâneo). Diurese deve ser
                      quantificada rigorosamente.
                    </p>
                  </div>

                  <ArrowDown className="text-amber-500/50" />

                  {/* Passo 4 */}
                  <div className="flex flex-col items-center w-full gap-2 mt-2">
                    {!showExames ? (
                      <button
                        onClick={() => setShowExames(true)}
                        className="px-4 py-3 w-full max-w-sm bg-fuchsia-900 border border-fuchsia-500 rounded-xl font-black text-fuchsia-200 uppercase tracking-widest hover:bg-fuchsia-800 transition-colors shadow-lg hover:shadow-[0_0_15px_rgba(217,70,239,0.4)] flex items-center justify-between"
                      >
                        <span>Exames Complementares</span>
                        <ArrowDown size={18} />
                      </button>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-full p-4 rounded-xl bg-slate-900 border-2 border-fuchsia-500 shadow-md relative group hover:border-fuchsia-400 transition-colors"
                      >
                        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-fuchsia-500 text-white flex items-center justify-center font-black text-xs shadow-lg">
                          4
                        </div>
                        <h4 className="text-xs font-black text-white uppercase tracking-wider mb-2 ml-4 flex justify-between items-center">
                          <span className="text-fuchsia-400">
                            Exames Iniciais a Solicitar
                          </span>
                          <button
                            onClick={() => setShowExames(false)}
                            className="text-slate-500 hover:text-white"
                          >
                            <ArrowUp size={16} />
                          </button>
                        </h4>
                        <div className="ml-4 overflow-x-auto mt-2">
                          <table className="w-full text-left text-[11px] border-collapse bg-slate-950/50 rounded-lg overflow-hidden border border-slate-800">
                            <thead>
                              <tr className="bg-slate-800 text-slate-300">
                                <th className="p-2 font-bold uppercase tracking-wider border-b border-slate-700 w-1/3">
                                  Exame
                                </th>
                                <th className="p-2 font-bold uppercase tracking-wider border-b border-slate-700">
                                  Finalidade / Justificativa
                                </th>
                              </tr>
                            </thead>
                            <tbody className="text-slate-400 divide-y divide-slate-800/50">
                              <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-2 font-bold text-fuchsia-300">
                                  Gasometria (Venosa/Arterial)
                                </td>
                                <td className="p-2">
                                  Detectar acidose metabólica e ser base para o
                                  cálculo do Ânion Gap.
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-2 font-bold text-fuchsia-300">
                                  Eletrólitos (Na⁺, K⁺, Cl⁻)
                                </td>
                                <td className="p-2">
                                  Avaliar K⁺ (crucial antes de insulina),
                                  calcular Sódio corrigido e Ânion Gap.
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-2 font-bold text-fuchsia-300">
                                  Cetonemia ou Cetonúria
                                </td>
                                <td className="p-2">
                                  Confirmar cetose (ideal β-hidroxibutirato ou
                                  fita urinária).
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-2 font-bold text-fuchsia-300">
                                  Função Renal (Ureia, Cr)
                                </td>
                                <td className="p-2">
                                  Avaliar componente pré-renal da desidratação
                                  (LRA).
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-2 font-bold text-fuchsia-300">
                                  Hemograma
                                </td>
                                <td className="p-2">
                                  Leucocitose é o padrão na CAD pela
                                  desidratação e estresse, mas não indica sepse
                                  sem desvio à esquerda.
                                </td>
                              </tr>
                              <tr className="hover:bg-slate-800/30 transition-colors">
                                <td className="p-2 font-bold text-fuchsia-300">
                                  EAS (Urina) e Culturas
                                </td>
                                <td className="p-2">
                                  Avaliar glicosúria/cetonúria; Culturas
                                  (urina/sangue) se suspeita de infecção.
                                </td>
                              </tr>
                              <tr
                                className="hover:bg-slate-800/30 transition-colors cursor-pointer group"
                                onClick={() =>
                                  setShowEcgDetails(!showEcgDetails)
                                }
                              >
                                <td className="p-2 font-bold text-fuchsia-300 flex items-center justify-between">
                                  <span>Eletrocardiograma (ECG)</span>
                                  <Activity
                                    size={14}
                                    className="text-fuchsia-500/50 group-hover:text-fuchsia-400 group-hover:scale-110 transition-all"
                                  />
                                </td>
                                <td className="p-2">
                                  Rastrear isquemia silenciosa ou repercussão de
                                  distúrbio de potássio.
                                  <span className="ml-2 inline-block text-[9px] uppercase font-black text-fuchsia-400/80 border border-fuchsia-500/30 px-1 py-0.5 rounded bg-fuchsia-950/50 transition-colors group-hover:bg-fuchsia-900 group-hover:text-fuchsia-200">
                                    Clique para ver Hipocalemia
                                  </span>
                                </td>
                              </tr>
                              <AnimatePresence>
                                {showEcgDetails && (
                                  <tr>
                                    <td
                                      colSpan={2}
                                      className="p-0 border-b border-slate-800"
                                    >
                                      <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="overflow-hidden bg-slate-900/80 border-t border-fuchsia-900/30"
                                      >
                                        <div className="p-4 flex flex-col gap-4">
                                          <h5 className="font-bold text-slate-300 flex items-center gap-2">
                                            <Zap
                                              size={16}
                                              className="text-rose-500"
                                            />{" "}
                                            Alterações da Hipocalemia no ECG
                                          </h5>
                                          <p className="text-[11px] text-slate-400">
                                            As principais alterações da
                                            hipocalemia no eletrocardiograma
                                            variam em função da gravidade.
                                            Especial atenção para{" "}
                                            <strong>
                                              depressão do segmento ST
                                            </strong>
                                            , achatamento/inversão da{" "}
                                            <strong>onda T</strong>, e
                                            proeminência da{" "}
                                            <strong>onda U</strong>.
                                          </p>

                                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {/* Moderate Hypokalemia */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col gap-2">
                                              <h6 className="text-[10px] font-black uppercase text-amber-500 tracking-wider">
                                                Hipocalemia Moderada
                                              </h6>
                                              <div className="bg-[#2A1521] rounded-lg p-2 flex items-center justify-center relative overflow-hidden border border-rose-900/30 h-24">
                                                <svg
                                                  viewBox="0 0 150 50"
                                                  className="w-full h-full text-rose-500/80"
                                                >
                                                  <pattern
                                                    id="grid-mod"
                                                    width="10"
                                                    height="10"
                                                    patternUnits="userSpaceOnUse"
                                                  >
                                                    <path
                                                      d="M 10 0 L 0 0 0 10"
                                                      fill="none"
                                                      stroke="rgba(244,63,94,0.05)"
                                                      strokeWidth="0.5"
                                                    />
                                                  </pattern>
                                                  <rect
                                                    width="100%"
                                                    height="100%"
                                                    fill="url(#grid-mod)"
                                                  />
                                                  <path
                                                    d="M 0 30 L 10 30 Q 15 20 20 30 L 28 30 L 31 32 L 37 5 L 42 36 Q 60 38 75 32 Q 95 20 115 30 L 150 30"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth="1.2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />

                                                  {/* T wave red marker */}
                                                  <g transform="translate(60, 24)">
                                                    <path
                                                      d="M0,0 L-4,-5 L4,-5 Z M0,0 L0,-12"
                                                      stroke="#f87171"
                                                      fill="#f87171"
                                                      strokeWidth="1"
                                                    />
                                                  </g>
                                                  {/* U wave orange marker */}
                                                  <g transform="translate(95, 38)">
                                                    <path
                                                      d="M0,0 L-4,5 L4,5 Z M0,0 L0,12"
                                                      stroke="#fbbf24"
                                                      fill="#fbbf24"
                                                      strokeWidth="1"
                                                    />
                                                  </g>
                                                </svg>
                                              </div>
                                              <p className="text-[10px] text-slate-400">
                                                Depressão do ST,{" "}
                                                <span className="text-red-400 font-bold">
                                                  achatamento da onda T
                                                </span>{" "}
                                                (vermelho),{" "}
                                                <span className="text-amber-400 font-bold">
                                                  ondas U proeminentes
                                                </span>{" "}
                                                (laranja).
                                              </p>
                                            </div>

                                            {/* Severe Hypokalemia */}
                                            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-col gap-2">
                                              <h6 className="text-[10px] font-black uppercase text-rose-500 tracking-wider">
                                                Hipocalemia Severa
                                              </h6>
                                              <div className="bg-[#2A1521] rounded-lg p-2 flex items-center justify-center relative overflow-hidden border border-rose-900/30 h-24">
                                                <svg
                                                  viewBox="0 0 150 50"
                                                  className="w-full h-full text-rose-500/80"
                                                >
                                                  <pattern
                                                    id="grid-sev"
                                                    width="10"
                                                    height="10"
                                                    patternUnits="userSpaceOnUse"
                                                  >
                                                    <path
                                                      d="M 10 0 L 0 0 0 10"
                                                      fill="none"
                                                      stroke="rgba(244,63,94,0.05)"
                                                      strokeWidth="0.5"
                                                    />
                                                  </pattern>
                                                  <rect
                                                    width="100%"
                                                    height="100%"
                                                    fill="url(#grid-sev)"
                                                  />
                                                  <path
                                                    d="M 0 30 L 10 30 Q 15 20 20 30 L 28 30 L 31 32 L 37 5 L 42 40 Q 60 48 76 34 Q 95 10 115 30 L 150 30"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    strokeWidth="1.2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                  />

                                                  {/* T wave negative red marker */}
                                                  <g transform="translate(60, 30)">
                                                    <path
                                                      d="M0,0 L-4,-5 L4,-5 Z M0,0 L0,-12"
                                                      stroke="#f87171"
                                                      fill="#f87171"
                                                      strokeWidth="1"
                                                    />
                                                  </g>
                                                  {/* U wave orange marker */}
                                                  <g transform="translate(95, 38)">
                                                    <path
                                                      d="M0,0 L-4,5 L4,5 Z M0,0 L0,12"
                                                      stroke="#fbbf24"
                                                      fill="#fbbf24"
                                                      strokeWidth="1"
                                                    />
                                                  </g>
                                                </svg>
                                              </div>
                                              <p className="text-[10px] text-slate-400">
                                                Maior depressão do ST,{" "}
                                                <span className="text-red-400 font-bold">
                                                  ondas T negativas
                                                </span>{" "}
                                                (vermelho) tornando a{" "}
                                                <span className="text-amber-400 font-bold">
                                                  onda U mais proeminente
                                                </span>{" "}
                                                (laranja).
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    </td>
                                  </tr>
                                )}
                              </AnimatePresence>
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  <ArrowDown className="text-fuchsia-500/50" />

                  {/* Passo 5 */}
                  <div className="w-full p-4 rounded-xl bg-slate-900 border-2 border-rose-500 shadow-md relative group hover:border-rose-400 transition-colors">
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center font-black text-xs shadow-lg">
                      5
                    </div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider mb-1 ml-4">
                      <span className="text-rose-500">
                        Rastreio do Fator Precipitante
                      </span>
                    </h4>
                    <p className="text-[12px] font-sans text-slate-400 ml-4">
                      Iniciar <strong>antibiótico precocemente</strong> se
                      houver forte suspeita de infecção subjacente (principal
                      fator precipitante).
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      ),
    },
    {
      id: "hydration_insulin",
      title: "1. Pilares do Tratamento",
      icon: Droplets,
      content: (
        <div className="flex flex-col gap-6 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <button
              onClick={() => {
                setShowHydration(!showHydration);
                setShowInsulin(false);
                setShowPotassium(false);
                setShowGlucose(false);
              }}
              className={cn(
                "p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 group",
                showHydration
                  ? "bg-cyan-900 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)]"
                  : "bg-cyan-950/40 border-cyan-500 hover:bg-cyan-900/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
              )}
            >
              <Droplets
                className="text-cyan-400 group-hover:scale-110 transition-transform duration-300"
                size={48}
              />
              <span className="font-black text-cyan-200 uppercase tracking-widest text-base mt-2 text-center">
                Hidratação
              </span>
            </button>

            <button
              onClick={() => {
                setShowInsulin(!showInsulin);
                setShowHydration(false);
                setShowPotassium(false);
                setShowGlucose(false);
              }}
              className={cn(
                "p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 group",
                showInsulin
                  ? "bg-orange-900 border-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.6)]"
                  : "bg-orange-950/40 border-orange-500 hover:bg-orange-900/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
              )}
            >
              <Zap
                className="text-orange-400 group-hover:scale-110 transition-transform duration-300"
                size={48}
              />
              <span className="font-black text-orange-200 uppercase tracking-widest text-base mt-2 text-center">
                Insulina Inicial
              </span>
            </button>

            <button
              onClick={() => {
                setShowPotassium(!showPotassium);
                setShowHydration(false);
                setShowInsulin(false);
                setShowGlucose(false);
              }}
              className={cn(
                "p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 group",
                showPotassium
                  ? "bg-rose-900 border-rose-400 shadow-[0_0_20px_rgba(244,63,94,0.6)]"
                  : "bg-rose-950/40 border-rose-500 hover:bg-rose-900/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]",
              )}
            >
              <Syringe
                className="text-rose-400 group-hover:scale-110 transition-transform duration-300"
                size={48}
              />
              <span className="font-black text-rose-200 uppercase tracking-widest text-base mt-2 text-center">
                Potássio
              </span>
            </button>

            <button
              onClick={() => {
                setShowGlucose(!showGlucose);
                setShowHydration(false);
                setShowInsulin(false);
                setShowPotassium(false);
              }}
              className={cn(
                "p-8 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-4 group",
                showGlucose
                  ? "bg-emerald-900 border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.6)]"
                  : "bg-emerald-950/40 border-emerald-500 hover:bg-emerald-900/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]",
              )}
            >
              <FlaskConical
                className="text-emerald-400 group-hover:scale-110 transition-transform duration-300"
                size={48}
              />
              <span className="font-black text-emerald-200 uppercase tracking-widest text-base mt-2 text-center">
                Soro Glicosado
              </span>
            </button>
          </div>

          <AnimatePresence>
            {showHydration && (
              <motion.div
                key="hydration-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full flex flex-col gap-6 overflow-hidden"
              >
                {/* Rules Card */}
                <div className="bg-slate-900 border-2 border-cyan-500/50 p-6 rounded-2xl shadow-lg relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Droplets size={64} className="text-cyan-500" />
                  </div>
                  <h4 className="text-cyan-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Droplets size={18} /> Volume na 1ª e 2ª Hora
                  </h4>
                  <div className="space-y-4 relative z-10">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-bold text-white bg-cyan-950/50 p-3 rounded-lg border border-cyan-800/30">
                        Soro Fisiológico (NaCl 0,9%) a{" "}
                        <span className="text-cyan-400">15-20ml/kg/h</span> nas
                        primeiras 2h.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2 text-xs">
                        <div className="bg-slate-950 p-3 rounded-lg flex flex-col justify-center">
                          <span className="text-slate-400 block mb-1">
                            🎯 Meta
                          </span>
                          <span className="text-slate-200">
                            Depleção média de 100ml/kg (4 a 5 litros). Ideal
                            para melhorar o fluxo renal e a excreção de H+.
                          </span>
                        </div>
                        <div className="bg-slate-950 p-3 rounded-lg border border-rose-900/30 flex flex-col justify-center">
                          <span className="text-rose-400 font-bold flex items-center gap-1 mb-1">
                            <AlertTriangle size={12} /> Atenção
                          </span>
                          <span className="text-slate-200">
                            Infundir &gt;5L em 8h eleva o risco de Edema
                            Cerebral e SDRA.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Auto-calculator block */}
                <div className="bg-cyan-950/30 border border-cyan-500/30 p-6 rounded-2xl flex flex-col md:flex-row gap-6 items-center flex-wrap">
                  {/* Input Block */}
                  <div className="flex flex-col gap-2 w-full md:w-auto md:max-w-xs flex-1">
                    <label className="text-[11px] uppercase font-black tracking-widest text-cyan-500">
                      Calculadora de Volume Inicial
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) =>
                          setWeight(
                            e.target.value === "" ? "" : Number(e.target.value),
                          )
                        }
                        className="w-full bg-slate-900 border-2 border-cyan-800/50 rounded-xl px-4 py-3 text-white font-bold text-xl focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="Ex: 70"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold uppercase text-xs">
                        Kg
                      </span>
                    </div>
                  </div>

                  {/* Output block */}
                  <div className="flex flex-col gap-3 flex-1 w-full min-w-0">
                    <div className="bg-cyan-900/20 border-l-4 border-cyan-500 p-4 rounded-r-xl">
                      <p className="text-[10px] uppercase font-bold text-cyan-500 mb-1 tracking-widest">
                        Alvo (15 - 20 ml/kg/h)
                      </p>
                      <p className="text-2xl font-black text-white flex items-baseline gap-2 flex-wrap">
                        {typeof weight === "number"
                          ? (weight * 15).toFixed(0)
                          : "0"}
                        <span className="text-cyan-400 font-medium text-sm">
                          a
                        </span>
                        {typeof weight === "number"
                          ? (weight * 20).toFixed(0)
                          : "0"}
                        <span className="text-sm font-bold text-slate-400">
                          mL / hora
                        </span>
                      </p>
                    </div>

                    <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 flex items-start gap-2 max-w-full">
                      <Info
                        size={14}
                        className="text-cyan-400 flex-shrink-0 mt-0.5"
                      />
                      <div className="leading-relaxed">
                        O Sódio deve ser <strong>corrigido</strong> para a
                        glicemia! Adicione{" "}
                        <span className="text-cyan-300 font-bold bg-cyan-950/50 px-1 rounded">
                          1,6 mEq/L
                        </span>{" "}
                        ao Na medido para cada 100 mg/dL de glicose acima de
                        100.
                        <br />
                        <span className="text-[10px] text-slate-400 mt-1 block">
                          Sódio corrigido Normal ou Baixo → Manter NaCl 0,9%.
                          <br />
                          Sódio corrigido &gt; 150 → Mudar para NaCl 0,45%.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showInsulin && (
              <motion.div
                key="insulin-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full flex flex-col gap-6 overflow-hidden"
              >
                <div className="bg-slate-900 border-2 border-orange-500/50 p-6 rounded-2xl shadow-lg relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Zap size={64} className="text-orange-500" />
                  </div>
                  <h4 className="text-orange-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap size={18} /> Supressão Cetogênica (Insulina)
                  </h4>

                  <div className="space-y-4 relative z-10">
                    <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-900/40">
                      <p className="text-sm text-orange-400 font-medium flex items-center gap-2">
                        <ShieldAlert size={18} />
                        Atenção: Apenas iniciar se K+ &gt; 3.3 mEq/L
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <h5 className="font-bold text-xs uppercase text-slate-300 mb-2">
                          Protocolo de Dosagem
                        </h5>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                            <div className="text-sm text-slate-200">
                              <strong>Ataque:</strong> Bolus{" "}
                              <span className="text-orange-400">
                                0,15 UI/kg
                              </span>{" "}
                              IV
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                            <div className="text-sm text-slate-200">
                              <strong>Manutenção:</strong> Infusão Contínua{" "}
                              <span className="text-orange-400">
                                0,1 UI/kg/h
                              </span>
                            </div>
                          </li>
                          <li className="bg-slate-900 p-2 rounded border border-slate-700 text-xs mt-2 text-slate-300">
                            <strong>Preparo Padrão:</strong> Insulina Regular
                            100UI + NaCl 0,9% 99ml
                          </li>
                        </ul>
                      </div>
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <h5 className="font-bold text-xs uppercase text-slate-300 mb-2">
                          Metas & Ajustes
                        </h5>
                        <div className="text-sm/relaxed text-slate-200 mb-3">
                          A meta <strong className="text-rose-400">NÃO</strong>{" "}
                          é zerar a glicose imediatamente. A meta é uma queda de{" "}
                          <strong className="text-orange-400">
                            50 a 70 mg/dL por hora
                          </strong>{" "}
                          (ou mínimo de 10% na primeira hora).
                        </div>
                        <div className="bg-rose-950/20 border border-rose-900/30 p-2 rounded text-xs text-slate-300">
                          <strong className="text-rose-400 flex items-center gap-1 mb-1">
                            <AlertTriangle size={12} /> Protocolo de Resistência
                          </strong>
                          Se a queda for &lt;50 mg/dL/h e hidratação adequada →
                          Dobrar a dose a cada 2-4 horas até atingir o alvo.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showPotassium && (
              <motion.div
                key="potassium-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full flex flex-col gap-6 overflow-hidden"
              >
                <div className="bg-slate-900 border-2 border-rose-500/50 p-6 rounded-2xl shadow-lg relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Syringe size={64} className="text-rose-500" />
                  </div>
                  <h4 className="text-rose-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Syringe size={18} /> Reposição de Potássio ("A Trava do
                    Potássio")
                  </h4>

                  <div className="space-y-4 relative z-10">
                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
                      <p className="text-sm text-rose-400 font-medium flex items-center gap-2">
                        <AlertTriangle size={18} />
                        REGRA DE OURO: NUNCA iniciar insulina se K &lt; 3,3
                        mEq/L! O risco de arritmia fatal é iminente.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-rose-900/40 flex flex-col items-center text-center gap-2">
                        <h5 className="font-extrabold text-sm uppercase text-white bg-rose-900/50 px-3 py-1 rounded-full border border-rose-700/50 w-full">
                          K &lt; 3,3 mEq/L
                        </h5>
                        <p className="text-sm text-slate-300 mt-2">
                          <strong className="text-rose-400">
                            Suspender insulina
                          </strong>{" "}
                          imediatamente.
                          <br />
                          <br />
                          Iniciar reposição EV intensa.
                        </p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-amber-900/40 flex flex-col items-center text-center gap-2">
                        <h5 className="font-extrabold text-sm uppercase text-white bg-amber-900/50 px-3 py-1 rounded-full border border-amber-700/50 w-full">
                          K entre 3,3 e 5,2
                        </h5>
                        <p className="text-sm text-slate-300 mt-2">
                          <strong className="text-amber-400">
                            Adicionar 10 a 30 mEq/L
                          </strong>{" "}
                          a partir da segunda hora de hidratação.
                          <br />
                          <br />
                          <span className="text-xs text-slate-400">
                            (Ex: KCl 19,1% 20ml + NaCl 0,9% 980ml a 250ml/h).
                          </span>
                        </p>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-emerald-900/40 flex flex-col items-center text-center gap-2">
                        <h5 className="font-extrabold text-sm uppercase text-white bg-emerald-900/50 px-3 py-1 rounded-full border border-emerald-700/50 w-full">
                          K &gt; 5,2 mEq/L
                        </h5>
                        <p className="text-sm text-slate-300 mt-2">
                          <strong className="text-emerald-400">
                            Não repor potássio.
                          </strong>
                          <br />
                          <br />
                          Reavaliar laboratório em 2 horas.
                        </p>
                      </div>
                    </div>

                    {/* Interactive Potassium Bag Preparation & Pump Calculator */}
                    <div className="border-t border-slate-800/60 my-6 pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20">
                          <Syringe className="text-rose-400" size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-base">
                            Simulador Interativo: Preparo e Infusão de Potássio
                          </h4>
                          <p className="text-[11px] text-slate-400">
                            Configure o volume do soro, quantidade de ampolas de
                            KCl 19,1% e a vazão na bomba para ver o impacto
                            clínico instantâneo.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-4">
                        {/* INPUT PANEL (5 Columns) */}
                        <div className="lg:col-span-5 bg-slate-950/60 border border-slate-800/80 p-5 rounded-2xl flex flex-col gap-5">
                          {/* 1. Base Soro */}
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                              1. Volume do Soro Base
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              {[500, 1000].map((vol) => (
                                <button
                                  key={vol}
                                  type="button"
                                  onClick={() => setSoroInfundido(vol)}
                                  className={cn(
                                    "py-2.5 px-4 rounded-xl font-bold text-sm tracking-tight border-2 transition-all cursor-pointer",
                                    soroInfundido === vol
                                      ? "bg-rose-950/40 border-rose-500 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.3)]"
                                      : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700",
                                  )}
                                >
                                  Soro {vol} mL
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* 2. KCl Ampoules */}
                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center justify-between">
                              <span>2. Ampolas de KCl 19.1% (10 mL)</span>
                              <span className="text-rose-400 font-bold font-mono">
                                {kclAmpoules}{" "}
                                {kclAmpoules === 1 ? "Ampola" : "Ampolas"}
                              </span>
                            </label>
                            <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                              <button
                                type="button"
                                onClick={() =>
                                  setKclAmpoules(Math.max(1, kclAmpoules - 1))
                                }
                                className="w-9 h-9 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 font-black text-lg flex items-center justify-center transition-colors cursor-pointer"
                              >
                                -
                              </button>
                              <div className="flex-1 text-center font-mono text-sm text-slate-300">
                                <span className="font-bold text-white">
                                  {kclAmpoules}
                                </span>{" "}
                                x 10 mL (~{Math.round(kclAmpoules * 25.6)} mEq)
                              </div>
                              <button
                                type="button"
                                onClick={() =>
                                  setKclAmpoules(Math.min(6, kclAmpoules + 1))
                                }
                                className="w-9 h-9 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-slate-200 font-black text-lg flex items-center justify-center transition-colors cursor-pointer"
                              >
                                +
                              </button>
                            </div>
                            <p className="text-[10px] text-slate-400 leading-tight">
                              Cada ampola de KCl 19,1% de 10 mL fornece{" "}
                              <span className="text-slate-300 font-bold">
                                25,6 mEq
                              </span>{" "}
                              de Potássio puro.
                            </p>
                          </div>

                          {/* 3. Pump Flow Rate (Vazão) */}
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                              <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                3. Vazão da Bomba de Infusão
                              </label>
                              <span className="text-rose-400 font-black font-mono text-sm">
                                {velBomba} mL/h
                              </span>
                            </div>
                            <div className="space-y-2">
                              <input
                                type="range"
                                min="20"
                                max="400"
                                step="10"
                                value={velBomba}
                                onChange={(e) =>
                                  setVelBomba(Number(e.target.value))
                                }
                                className="w-full accent-rose-500 bg-slate-900 rounded-lg h-2"
                              />
                              <div className="grid grid-cols-4 gap-1.5 mt-1">
                                {[50, 100, 125, 250].map((preset) => (
                                  <button
                                    key={preset}
                                    type="button"
                                    onClick={() => setVelBomba(preset)}
                                    className={cn(
                                      "py-1 px-1 rounded-md text-[10px] font-bold uppercase transition-all cursor-pointer border",
                                      velBomba === preset
                                        ? "bg-rose-950/50 border-rose-500 text-rose-300"
                                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200",
                                    )}
                                  >
                                    {preset} mL/h
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* SIMULATOR & CLINICAL ALERTS PANEL (7 Columns) */}
                        <div className="lg:col-span-7 flex flex-col gap-4">
                          {/* Soro Bag visual representation + summary */}
                          <div className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-2xl">
                            <h5 className="text-slate-300 text-xs font-extrabold uppercase tracking-widest mb-3 border-b border-slate-900 pb-2">
                              Composição Estimada da Bolsa
                            </h5>

                            {/* Calculating intermediate variables */}
                            {(() => {
                              const totalVolume =
                                soroInfundido + kclAmpoules * 10;
                              const totalK_mEq = kclAmpoules * 25.6;
                              const concentrationK_mEqL =
                                (totalK_mEq / totalVolume) * 1000;
                              const hourlyDeliveryK_mEq =
                                (totalK_mEq * velBomba) / totalVolume;

                              // Access safety status
                              let safetyAccessBg =
                                "bg-emerald-950/20 border-emerald-900/40 text-emerald-300";
                              let safetyAccessIcon = "text-emerald-400";
                              let safetyAccessLabel = "Via Periférica Seguro";
                              let safetyAccessText =
                                "Concentração ideal para acesso periférico convencional. Risco mínimo de flebite química.";

                              if (
                                concentrationK_mEqL > 40 &&
                                concentrationK_mEqL <= 80
                              ) {
                                safetyAccessBg =
                                  "bg-amber-950/20 border-amber-900/40 text-amber-300";
                                safetyAccessIcon = "text-amber-400";
                                safetyAccessLabel =
                                  "Requer Acesso Central (Ideal)";
                                safetyAccessText =
                                  "Concentração acima de 40 mEq/L. Preferencialmente infundir em linha central, ou monitorar local do acesso periférico de hora em hora devido ao alto risco de flebite dolorosa.";
                              } else if (concentrationK_mEqL > 80) {
                                safetyAccessBg =
                                  "bg-rose-950/30 border-rose-900/60 text-rose-200 animate-pulse";
                                safetyAccessIcon = "text-rose-400";
                                safetyAccessLabel =
                                  "Acesso Central Obrigatório!";
                                safetyAccessText =
                                  "Concentração extremamente alta (>80 mEq/L). Risco severo de esclerose venosa, queimação extrema e flebite. PERIGOSO se infundido em veia periférica.";
                              }

                              // Infusion rate safety status
                              let safetyRateBg =
                                "bg-emerald-950/20 border-emerald-900/40 text-emerald-300";
                              let safetyRateIcon = "text-emerald-400";
                              let safetyRateLabel =
                                "Velocidade de Reposição Segura";
                              let safetyRateText =
                                "Taxa de infusão dentro dos parâmetros seguros (<10 mEq/h). Seguro para ser manejado fora da UTI.";

                              if (
                                hourlyDeliveryK_mEq > 10 &&
                                hourlyDeliveryK_mEq <= 20
                              ) {
                                safetyRateBg =
                                  "bg-amber-950/25 border-amber-900/50 text-amber-300";
                                safetyRateIcon = "text-amber-400";
                                safetyRateLabel =
                                  "Taxa de Reposição Crítica (Atenção)";
                                safetyRateText =
                                  "Infusão de 10-20 mEq/h requer obrigatoriamente monitorização eletrocardiográfica (ECG) contínua de beira de leito devido ao risco de arritmias.";
                              } else if (hourlyDeliveryK_mEq > 20) {
                                safetyRateBg =
                                  "bg-rose-950/40 border-rose-800/80 text-rose-200 border-2";
                                safetyRateIcon = "text-rose-500 animate-pulse";
                                safetyRateLabel = "PERIGO: VELOCIDADE EXTREMA!";
                                safetyRateText =
                                  "Infundir acima de 20 mEq/h de potássio traz um risco crítico de arritmias letais instantâneas (parada cardíaca em diástole). Reduza a vazão na bomba ou remova ampolas.";
                              }

                              return (
                                <div className="space-y-4">
                                  {/* Real-time metrics grid */}
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
                                      <span className="text-[9px] uppercase font-bold text-slate-400">
                                        Volume Total
                                      </span>
                                      <span className="text-base font-black text-slate-100 mt-1">
                                        {totalVolume} mL
                                      </span>
                                      <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                                        Soro + KCl
                                      </span>
                                    </div>
                                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col justify-between">
                                      <span className="text-[9px] uppercase font-bold text-slate-400">
                                        K+ Total
                                      </span>
                                      <span className="text-base font-black text-rose-400 mt-1">
                                        {totalK_mEq.toFixed(1)} mEq
                                      </span>
                                      <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                                        Na bolsa inteira
                                      </span>
                                    </div>
                                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col justify-between col-span-1">
                                      <span className="text-[9px] uppercase font-bold text-slate-400">
                                        Concentração
                                      </span>
                                      <span className="text-sm font-black text-blue-400 mt-1">
                                        {concentrationK_mEqL.toFixed(1)}{" "}
                                        <span className="text-[9px] font-bold">
                                          mEq/L
                                        </span>
                                      </span>
                                      <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                                        ({(totalK_mEq / totalVolume).toFixed(3)}{" "}
                                        mEq/mL)
                                      </span>
                                    </div>
                                    <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 flex flex-col justify-between col-span-1">
                                      <span className="text-[9px] uppercase font-bold text-slate-400">
                                        Entrega / Hora
                                      </span>
                                      <span className="text-sm font-black text-amber-400 mt-1">
                                        {hourlyDeliveryK_mEq.toFixed(1)}{" "}
                                        <span className="text-[9px] font-bold">
                                          mEq/h
                                        </span>
                                      </span>
                                      <span className="text-[9px] text-slate-400 font-mono mt-0.5">
                                        Taxa de infusão
                                      </span>
                                    </div>
                                  </div>

                                  {/* Access safety alert box */}
                                  <div
                                    className={cn(
                                      "p-4 rounded-xl border flex gap-3",
                                      safetyAccessBg,
                                    )}
                                  >
                                    <Info
                                      className={cn(
                                        "flex-shrink-0 mt-0.5",
                                        safetyAccessIcon,
                                      )}
                                      size={18}
                                    />
                                    <div className="text-xs">
                                      <p className="font-extrabold uppercase tracking-wide mb-1 flex items-center gap-1.5">
                                        🛡️ {safetyAccessLabel}
                                      </p>
                                      <p className="opacity-90 leading-relaxed">
                                        {safetyAccessText}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Delivery velocity alert box */}
                                  <div
                                    className={cn(
                                      "p-4 rounded-xl border flex gap-3",
                                      safetyRateBg,
                                    )}
                                  >
                                    <AlertTriangle
                                      className={cn(
                                        "flex-shrink-0 mt-0.5",
                                        safetyRateIcon,
                                      )}
                                      size={18}
                                    />
                                    <div className="text-xs">
                                      <p className="font-extrabold uppercase tracking-wide mb-1 flex items-center gap-1.5">
                                        ⚠️ {safetyRateLabel}
                                      </p>
                                      <p className="opacity-90 leading-relaxed">
                                        {safetyRateText}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showGlucose && (
              <motion.div
                key="glucose-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="w-full flex flex-col gap-6 overflow-hidden"
              >
                <div className="bg-slate-900 border-2 border-emerald-500/50 p-6 rounded-2xl shadow-lg relative">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                    <FlaskConical size={64} className="text-emerald-500" />
                  </div>
                  <h4 className="text-emerald-400 font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                    <FlaskConical size={18} /> Soro Glicosado (O Limiar
                    Glicêmico)
                  </h4>

                  <div className="space-y-4 relative z-10">
                    <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                      <p className="text-sm text-emerald-400 font-medium flex items-center gap-2">
                        <Info size={18} />
                        INDICAÇÃO CRÍTICA: Iniciar quando a Glicemia atingir
                        &lt; 250 mg/dL.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <h5 className="font-bold text-xs uppercase text-slate-300 mb-2">
                          Como Prescrever (SG 5% ou SG 10%)
                        </h5>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                            <div className="text-sm text-slate-200">
                              <strong>Soro Glicosado 5% ou 10%</strong> acoplado
                              à hidratação venosa de manutenção.
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                            <div className="text-sm text-slate-200">
                              <strong>Infusão Paralela:</strong> Permite manter
                              a dose de insulina estritamente necessária para
                              reverter a cetose sem induzir hipoglicemia.
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                        <h5 className="font-bold text-xs uppercase text-slate-300 mb-2">
                          Meta & Fundamento Clínico
                        </h5>
                        <div className="text-sm/relaxed text-slate-200 mb-3">
                          <strong>Meta:</strong> Travar a glicemia entre{" "}
                          <strong className="text-emerald-400">
                            200 a 250 mg/dL
                          </strong>{" "}
                          até que a acidose metabólica esteja completamente
                          resolvida (pH &gt; 7,30 e HCO3 &gt; 15).
                        </div>
                        <div className="bg-rose-950/20 border border-rose-900/30 p-2 rounded text-xs text-slate-300">
                          <strong className="text-rose-400 flex items-center gap-1 mb-1">
                            <AlertTriangle size={12} /> Perigo do Desligamento
                            Antecipado!
                          </strong>
                          Nunca desligue a bomba de insulina apenas porque a
                          glicemia caiu. Adicione glicose ao soro para poder
                          manter a insulina ligada desligando a cetogênese!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ),
    },
    {
      id: "resolution_transition",
      title: "2. Resolução da CAD & Transição Subcutânea",
      icon: Layers,
      content: (
        <div className="flex flex-col gap-6 w-full text-slate-200">
          {/* Rectangular box of Resolution Criteria */}
          <div id="resolution-criteria-card" className="bg-slate-900 border-2 border-indigo-500/50 p-6 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ClipboardList size={64} className="text-indigo-400" />
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-white font-black text-base uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  Critérios de Reversão (Resolução) da CAD
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Clique nos botões de critérios para entender as metas ideais para encerrar a infusão contínua de insulina.
                </p>
              </div>
              <span className="text-[10px] bg-indigo-950 text-indigo-300 font-extrabold px-2.5 py-1 rounded-lg border border-indigo-800 shrink-0 uppercase tracking-wider">
                Diretriz ADA
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {/* Crit 1: Glicemia */}
              <button
                id="btn-crit-glicose"
                type="button"
                onClick={() => setActiveCriterionHelp(activeCriterionHelp === "glicose" ? null : "glicose")}
                className={cn(
                  "p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-2 min-h-[90px]",
                  activeCriterionHelp === "glicose"
                    ? "bg-emerald-950/40 border-emerald-500 shadow-md"
                    : "bg-slate-950 border-slate-800 hover:border-slate-750 hover:bg-slate-900/50"
                )}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Critério Alvo</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-black text-emerald-400 uppercase">Glicemia &lt; 200 mg/dL</span>
                <span className="text-[9px] text-slate-500 font-mono">Clique para detalhes</span>
              </button>

              {/* Crit 2: pH */}
              <button
                id="btn-crit-ph"
                type="button"
                onClick={() => setActiveCriterionHelp(activeCriterionHelp === "ph" ? null : "ph")}
                className={cn(
                  "p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-2 min-h-[90px]",
                  activeCriterionHelp === "ph"
                    ? "bg-indigo-950/40 border-indigo-500 shadow-md"
                    : "bg-slate-950 border-slate-800 hover:border-slate-750 hover:bg-slate-900/50"
                )}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Necessário +2</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                </div>
                <span className="text-xs font-black text-indigo-400 uppercase">pH Venoso &gt; 7,30</span>
                <span className="text-[9px] text-slate-500 font-mono">Clique para detalhes</span>
              </button>

              {/* Crit 3: HCO3 */}
              <button
                id="btn-crit-hco3"
                type="button"
                onClick={() => setActiveCriterionHelp(activeCriterionHelp === "hco3" ? null : "hco3")}
                className={cn(
                  "p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-2 min-h-[90px]",
                  activeCriterionHelp === "hco3"
                    ? "bg-indigo-950/40 border-indigo-500 shadow-md"
                    : "bg-slate-950 border-slate-800 hover:border-slate-750 hover:bg-slate-900/50"
                )}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Necessário +2</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                </div>
                <span className="text-xs font-black text-indigo-400 uppercase">Bicarbonato ≥ 15,0 mEq/L</span>
                <span className="text-[9px] text-slate-500 font-mono">Clique para detalhes</span>
              </button>

              {/* Crit 4: Anion Gap */}
              <button
                id="btn-crit-gap"
                type="button"
                onClick={() => setActiveCriterionHelp(activeCriterionHelp === "gap" ? null : "gap")}
                className={cn(
                  "p-3.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-2 min-h-[90px]",
                  activeCriterionHelp === "gap"
                    ? "bg-purple-950/40 border-purple-500 shadow-md"
                    : "bg-slate-950 border-slate-800 hover:border-slate-750 hover:bg-slate-900/50"
                )}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Necessário +2</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>
                <span className="text-xs font-black text-purple-400 uppercase">Ânion Gap ≤ 12 mEq/L</span>
                <span className="text-[9px] text-slate-500 font-mono">Clique para detalhes</span>
              </button>
            </div>

            {/* Interactive explanation bubble in layers */}
            <AnimatePresence>
              {activeCriterionHelp && (
                <motion.div
                  initial={{ opacity: 0, y: 5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 5, height: 0 }}
                  className="mt-4 overflow-hidden"
                >
                  <div className="bg-slate-955 p-4 border border-slate-800/80 bg-slate-950 rounded-xl text-xs space-y-1">
                    {activeCriterionHelp === "glicose" && (
                      <>
                        <h5 className="font-extrabold text-emerald-400 uppercase">🎯 Glicemia Alvo (&lt; 200 mg/dL)</h5>
                        <p className="text-slate-300 leading-relaxed">
                          A restauração da glicemia capilar &lt; 200 mg/dL é essencial, mas frequentemente ocorre bem ANTES da cura da acidose. Nunca encerre a infusão de insulina de manutenção baseado somente neste valor, sob o risco de reativar a lipólise hepática e reiniciar a cetoacidose.
                        </p>
                      </>
                    )}
                    {activeCriterionHelp === "ph" && (
                      <>
                        <h5 className="font-extrabold text-indigo-400 uppercase">🎯 pH Venoso ou Arterial &gt; 7,30</h5>
                        <p className="text-slate-300 leading-relaxed">
                          Mapeia a eliminação fisiológica da acidemia profunda por meio do restabelecimento do equilíbrio ácido-básico sistêmico. Exclui a necessidade de manter altas doses de insulina para compensação gasométrica.
                        </p>
                      </>
                    )}
                    {activeCriterionHelp === "hco3" && (
                      <>
                        <h5 className="font-extrabold text-indigo-400 uppercase">🎯 Bicarbonato Sérico ≥ 15,0 mEq/L</h5>
                        <p className="text-slate-300 leading-relaxed">
                          Sinaliza o reabastecimento dos estoques de tamponamento orgânicos. À medida que as cetonas param de ser sintetizadas, a depuração do excesso de H+ e a síntese renal espontânea de bicarbonato restauram as reservas.
                        </p>
                      </>
                    )}
                    {activeCriterionHelp === "gap" && (
                      <>
                        <h5 className="font-extrabold text-purple-400 uppercase">🎯 Fechamento do Ânion Gap (≤ 12 mEq/L)</h5>
                        <p className="text-slate-300 leading-relaxed">
                          É considerado o critério mais confiável de resolução! Indica que a concentração sanguínea dos cetoácidos (acumulados como ânions não-mensurados) retornou à faixa segura de normalidade.
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Graphical Downward Arrow connecting Resolution to Transition */}
          <div id="transition-arrow-connector" className="flex flex-col items-center justify-center my-4">
            <div className="h-8 w-1 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded-full animate-pulse" />
            <div className="bg-indigo-950/90 border border-indigo-500/40 px-5 py-2.5 rounded-full text-xs sm:text-sm md:text-base font-black text-indigo-300 uppercase tracking-widest my-2 flex items-center gap-2.5 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <ArrowDown size={16} className="animate-bounce text-[#24f4e3]" /> O critério foi preenchido? Iniciar Terapia de Transição <ArrowDown size={16} className="animate-bounce text-[#24f4e3]" />
            </div>
            <div className="h-8 w-1 bg-gradient-to-b from-indigo-500 to-emerald-500 rounded-full animate-pulse" />
          </div>

          {/* Rectangular box of Transition Therapy */}
          <div id="transition-therapy-card" className="bg-slate-900 border-2 border-[#24f4e3]/30 p-6 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Syringe size={64} className="text-[#24f4e3]" />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-4 border-b border-slate-800 pb-3">
              <div>
                <h4 className="text-white font-black text-base uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
                  Terapia de Transição para Insulina Subcutânea (Basal-Bolus)
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Mapeamento seguro baseado no peso do paciente (<strong className="text-slate-200">{weight || 70} kg</strong>) para retornar ao tratamento subcutâneo.
                </p>
              </div>
              <span className="text-[10px] bg-emerald-950 text-emerald-300 font-extrabold px-2.5 py-1 rounded-lg border border-emerald-800 shrink-0 uppercase tracking-wider">
                Segurança Assistida
              </span>
            </div>

            {/* Succinct explanation of Basal-Bolus */}
            <div className="bg-slate-950/60 border border-indigo-500/20 p-3.5 rounded-xl text-xs mb-5 flex flex-col md:flex-row gap-3 items-start md:items-center">
              <div className="bg-indigo-950/80 p-2 rounded-lg text-indigo-300 font-black shrink-0 uppercase tracking-widest text-[9.5px] border border-indigo-800/40">
                Conceito Chave
              </div>
              <p className="text-slate-300 leading-relaxed text-[11px] m-0">
                O esquema <strong className="text-white">Basal-Bolus</strong> reproduz a fisiologia pancreática: a insulina <strong className="text-[#24f4e3]">Basal</strong> suprime de forma contínua a produção de glicose e cetonas pelo fígado, enquanto o <strong className="text-purple-400">Bolus</strong> (rápida após refeições) controla os picos de glicemia das ingestas alimentares.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Dosing Slider & Mode Selection (5 columns) */}
              <div className="lg:col-span-5 bg-slate-950/80 border border-slate-850 p-4 rounded-xl flex flex-col gap-4">
                <span className="text-[10px] font-black uppercase text-[#24f4e3] tracking-widest block">
                  ⚙️ PARÂMETROS DE CÁLCULO
                </span>
                
                {/* Weight Sync Warning/Info */}
                <div className="text-[11px] bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-slate-300 leading-snug">
                  Muda o cálculo sincronizado alterando o peso do paciente na calculadora de hidratação acima. Peso atual: <strong className="text-white font-mono">{weight || 70} kg</strong>.
                </div>

                {/* Factor Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-slate-300">Fator de Dose Total Diária:</span>
                    <span className="font-mono font-black text-[#24f4e3]">{transitionFactor} UI/Kg/Dia</span>
                  </div>
                  <input
                    type="range"
                    min="0.3"
                    max="0.8"
                    step="0.05"
                    value={transitionFactor}
                    onChange={(e) => setTransitionFactor(Number(e.target.value))}
                    className="w-full accent-[#24f4e3] h-1.5 cursor-pointer rounded-lg bg-slate-950 animate-none"
                  />
                  <div className="flex justify-between text-[9px] text-slate-500 font-bold">
                    <span>0.3 UI/kg (Primo-Desc)</span>
                    <span>0.5 UI/kg (Padrão)</span>
                    <span>0.8 UI/kg (Resistente)</span>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-2.5 rounded text-[10px] text-slate-400 border border-slate-800/80 leading-relaxed">
                  <strong className="text-amber-400 block mb-0.5">💡 Como escolher o fator?</strong>
                  • <strong className="text-[#24f4e3] font-bold">0.3 UI/kg (NPH):</strong> Indicado na <strong className="text-white">Primo-descompensação</strong> (debut de diabetes), onde há extrema sensibilidade residual à insulina e alto risco de hipoglicemia severa pós-CAD.<br />
                  • <strong className="text-slate-350 font-bold">0.5 UI/kg:</strong> Paciente magro, sensível à insulina ou virgem de tratamento crônico.<br />
                  • <strong className="text-slate-350 font-bold">0.6 a 0.8 UI/kg:</strong> Paciente obeso, em vigência de infecção grave ativa ou uso crônico prévio de altas doses.
                </div>
              </div>

              {/* Dynamic Formula Output (7 columns) */}
              <div className="lg:col-span-7 flex flex-col gap-3">
                {(() => {
                  const patientWeight = Number(weight) || 70;
                  const totalDose = Math.round(patientWeight * transitionFactor);
                  const basalInsulin = Math.round(totalDose * 0.5);
                  const bolusInsulin = totalDose - basalInsulin; // remaining 50%
                  const singleBolus = Math.round((bolusInsulin / 3) * 10) / 10;
                  
                  return (
                    <div className="space-y-3 flex flex-col h-full justify-between">
                      <div className="bg-indigo-950/20 border border-indigo-900/30 p-4 rounded-xl flex flex-col justify-between">
                        <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Cálculo de Dose Total Reativa</span>
                        <div className="flex items-baseline gap-2 mt-1">
                          <span className="text-3xl font-black text-white">{totalDose} <span className="text-xs text-slate-400 font-bold">UI / dia</span></span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Basal Panel */}
                        <div className="bg-slate-950 p-3.5 border border-slate-800 rounded-xl flex flex-col justify-between">
                          <div className="mb-2">
                            <span className="text-[9px] font-black text-[#24f4e3] uppercase block tracking-wider">50% Insulina Basal</span>
                            <span className="text-xl font-black text-white mt-1 block">
                              {basalInsulin} <span className="text-xs text-slate-400 font-bold">UI / dia SC</span>
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-405 text-slate-400 leading-normal">
                            Garante supressão basal. Sugestão: <strong className="text-white">Glargina</strong> em dose única diária ou <strong className="text-white">NPH</strong> fracionada em 2 a 3 doses diárias.
                          </p>
                        </div>

                        {/* Bolus Panel */}
                        <div className="bg-slate-950 p-3.5 border border-slate-800 rounded-xl flex flex-col justify-between font-sans">
                          <div className="mb-2">
                            <span className="text-[9px] font-black text-purple-400 uppercase block tracking-wider">50% Insulina Bolus</span>
                            <span className="text-xl font-black text-white mt-1 block">
                              {bolusInsulin} <span className="text-xs text-slate-400 font-bold">UI / dia SC</span>
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-405 text-slate-400 leading-normal">
                            Divide-se para corrigir carboidratos das refeições: <strong className="text-white">{singleBolus} UI SC</strong> antes das 3 refeições principais (Café, Almoço e Jantar). Sugestão: <strong className="text-white">Regular/Aspart/Lispro</strong>.
                          </p>
                        </div>
                      </div>
                      
                      {/* Subcutaneous schedule summary block */}
                      <div className="bg-slate-950/25 border border-slate-850 p-3 rounded-lg text-xs font-mono text-slate-300">
                        <span className="text-[#24f4e3] font-bold">Prescrição Teórica:</span> Glargina {basalInsulin} UI SC às 22h + Aspart {singleBolus} UI SC antes do café, almoço e jantar.
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* GOLDEN TRANSITION WARNING / CRITICAL TRAP BUTTON */}
            <div className="border-t border-slate-800/60 mt-5 pt-4">
              <button
                id="btn-overlap-warning"
                type="button"
                onClick={() => setShowOverlapWarning(!showOverlapWarning)}
                className={cn(
                  "w-full px-4 py-3 border rounded-xl flex items-center justify-between text-xs font-bold transition-all cursor-pointer",
                  showOverlapWarning
                    ? "bg-rose-950/20 border-rose-500 text-rose-300"
                    : "bg-slate-950 border-rose-900/60 text-slate-350 text-slate-300 hover:border-rose-500 hover:text-rose-200"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
                  <strong className="uppercase">🚨 REGRA DE OURO DO OVERLAP (ERRO CRÍTICO!)</strong>
                </span>
                <span className="text-[10px] py-0.5 px-2 bg-rose-900/30 rounded border border-rose-750/40 text-rose-450 text-rose-400 uppercase tracking-widest font-black">
                  {showOverlapWarning ? "Ocultar" : "Revelar Detalhes"}
                </span>
              </button>

              <AnimatePresence>
                {showOverlapWarning && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden mt-3"
                  >
                    <div className="bg-slate-955 bg-slate-950 p-4 border border-rose-900/40 rounded-xl space-y-3 leading-relaxed text-xs text-rose-200">
                      <p>
                        A meia-vida da insulina regular quando infundida por via endovenosa é de apenas <strong className="text-white">5 a 9 minutos</strong>!
                      </p>
                      <p>
                        Se você simplesmente desligar a bomba de infusão com a bic ao alcançar a reversão e prescrever a insulina subcutânea, o corpo do paciente ficará sem insulina em menos de 10 minutos. Isso causa o <strong className="text-white font-bold">retorno imediato e fulminante da cetogênese no fígado</strong> acadêmica!
                      </p>
                      <div className="bg-slate-900 p-3 rounded border border-slate-800 text-slate-300 space-y-2">
                        <strong className="text-emerald-400 block mb-1">Como evitar esse erro crítico?</strong>
                        <p>1. Aplique a <strong className="text-[#24f4e3]">Insulina Basal Subcutânea (Glargina, NPH ou Degludeca)</strong>.</p>
                        <p>2. <strong className="text-rose-400 font-extrabold">MANTENHA a bomba de insulina endovenosa ligada</strong> por mais <strong className="text-white font-bold">1 a 2 horas</strong> após a aplicação subcutânea!</p>
                        <p>Este tempo de "overlap" (sobreposição) é vital para que a insulina subcutânea seja absorvida do tecido adiposo e atinja níveis terapêuticos na corrente sanguínea antes de suspender a via endovenosa, cortando o rebote de cetose.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Main Tab Navigation - High Contrast Color-Coded Backdrops */}
      <div className="flex flex-wrap gap-1.5 p-1 bg-slate-950 rounded-2xl border border-slate-900">
        {[
          {
            id: "fisiopatologia",
            label: "Definição & Fisiopato",
            icon: Layers,
            color: "border-blue-500 text-blue-300",
          },
          {
            id: "diagnostico",
            label: "Critérios & Diagnóstico",
            icon: Activity,
            color: "border-emerald-500 text-emerald-300",
          },
          {
            id: "tratamento",
            label: "Tratamento & Manejo",
            icon: ClipboardList,
            color: "border-cyan-500 text-cyan-300",
          },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={cn(
                "flex-1 min-w-[150px] md:min-w-0 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-tight transition-all",
                isActive
                  ? "bg-slate-900 border-2 " +
                      tab.color +
                      " shadow-xl shadow-black/50 scale-102"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50",
              )}
            >
              <Icon
                size={14}
                className={isActive ? "opacity-100" : "opacity-70"}
              />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="min-h-[500px]">
        <AnimatePresence mode="wait">
          {/* TAB 1: FISIOPATOLOGIA */}
          {activeTab === "fisiopatologia" && (
            <motion.div
              key="fisiopatologia"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Definição */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 shadow-lg">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                    <BookOpen size={20} className="text-blue-500" />
                    Definição
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    A{" "}
                    <strong className="text-blue-400">
                      Cetoacidose Diabética (CAD)
                    </strong>{" "}
                    é uma complicação metabólica aguda, com risco de morte,
                    tipicamente associada ao Diabetes Mellitus Tipo 1 (embora
                    possível no Tipo 2 em estresse).
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Caracteriza-se pela tríade clássica de hiperglicemia,
                    cetonemia (cetonúria) e acidose metabólica com ânion gap
                    elevado.
                  </p>
                  <div className="mt-4 p-4 rounded-xl bg-slate-900 border border-slate-800 border-l-4 border-l-blue-500">
                    <h4 className="text-xs font-black uppercase text-slate-400 mb-2">
                      Disparadores Comuns (Gatilhos)
                    </h4>
                    <ul className="text-xs text-slate-300 space-y-1 ml-4 list-disc marker:text-blue-500">
                      <li>Infecções (Pneumonia, ITU) - Fator mais comum</li>
                      <li>Omissão / Uso inadequado de insulina</li>
                      <li>EAM / AVE agudos</li>
                      <li>Drogas (Cocaína), Trauma, Cirurgia</li>
                    </ul>
                  </div>
                </div>

                {/* Balança Visual */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-col items-center justify-center relative overflow-hidden min-h-[300px]">
                  <h3 className="text-sm font-black text-white uppercase tracking-tight absolute top-4 left-4 flex items-center gap-2 z-30">
                    <Scale size={16} className="text-amber-500" />
                    Balança Metabólica
                  </h3>

                  <div className="flex-1 flex flex-col items-center justify-center w-full mt-32">
                    <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[390px] h-40 flex items-center justify-center text-center mt-24">
                      {/* Eixo central (Base) */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[24px] border-r-[24px] border-b-[40px] border-l-transparent border-r-transparent border-b-slate-700 z-0"></div>

                      {/* Haste da Balança */}
                      <div className="absolute top-1/2 left-0 right-0 h-3 bg-slate-600 rounded-full rotate-[18deg] origin-center z-10 transition-transform duration-1000">
                        {/* Prato Esquerdo - Contrarreguladores (Pesado) */}
                        <div className="absolute left-0 -translate-x-1/2 -translate-y-[100%] rotate-[-18deg] flex flex-col items-center pb-4">
                          <div className="p-3 w-14 h-14 md:w-16 md:h-16 bg-rose-500/20 border border-rose-500/50 rounded-2xl mb-2 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.4)]">
                            <ArrowUp size={28} className="text-rose-500" />
                          </div>
                          <span className="text-xs md:text-sm font-black text-rose-400 text-center uppercase whitespace-nowrap drop-shadow-md">
                            Contrarreguladores
                          </span>
                          <span className="text-[10px] md:text-xs text-slate-300 text-center mt-1 leading-tight drop-shadow-md">
                            Glucagon, Cortisol
                            <br />
                            Adrenalina, GH
                          </span>
                        </div>

                        {/* Prato Direito - Insulina (Leve) */}
                        <div className="absolute right-0 translate-x-1/2 -translate-y-[100%] rotate-[-18deg] flex flex-col items-center pb-4 opacity-80">
                          <div className="p-2 w-12 h-12 md:w-14 md:h-14 bg-blue-500/10 border border-blue-500/30 rounded-2xl mb-2 flex items-center justify-center">
                            <ArrowDown size={22} className="text-blue-500/80" />
                          </div>
                          <span className="text-xs md:text-sm font-black text-blue-400/80 text-center uppercase whitespace-nowrap">
                            Insulina
                          </span>
                          <span className="text-[10px] md:text-xs text-slate-400 text-center mt-1 leading-tight">
                            Ausente
                            <br />
                            ou Inefetiva
                          </span>
                        </div>
                      </div>

                      {/* Pino Central */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-300 border-[4px] border-slate-900 z-20"></div>
                    </div>
                  </div>
                </div>

                {/* Mecanismo Fisiopatologico Timeline */}
                <div className="p-6 rounded-2xl bg-[#0a1128] border border-blue-900/30 space-y-4 shadow-lg flex flex-col justify-center">
                  <h3 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
                    <Zap size={20} className="text-amber-500" />
                    Mecanismo Fisiopatológico
                  </h3>

                  <div className="relative border-l-2 border-blue-900/50 ml-3 pl-5 py-2 space-y-6">
                    <div className="relative">
                      <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-red-500"></div>
                      <p className="text-xs md:text-sm font-bold text-red-400 uppercase mb-1">
                        Déficit de Insulina + Horm. Contrarreguladores
                      </p>
                      <p className="text-xs md:text-sm text-slate-300">
                        Diminuição da captação de glicose e aumento do glucagon,
                        cortisol, GH e adrenalina.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-amber-500"></div>
                      <p className="text-xs md:text-sm font-bold text-amber-500 uppercase mb-1">
                        Lipólise & Cetogênese (Fígado)
                      </p>
                      <p className="text-xs md:text-sm text-slate-300">
                        Aumento da oxidação de ácidos graxos livres no fígado em
                        Cetonas (Acetoacetato e Beta-hidroxibutirato).
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-purple-500"></div>
                      <p className="text-xs md:text-sm font-bold text-purple-400 uppercase mb-1">
                        Acidose Hiper-Gap
                      </p>
                      <p className="text-xs md:text-sm text-slate-300">
                        Liberação de H+ (cetonas) consome progressivamente o
                        bicarbonato. Acidose Metabólica de Ânion Gap Elevado.
                      </p>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-blue-500"></div>
                      <p className="text-xs md:text-sm font-bold text-blue-400 uppercase mb-1">
                        Diurese Osmótica
                      </p>
                      <p className="text-xs md:text-sm text-slate-300">
                        Glicosúria excessiva causa depleção maciça de água, Na+
                        e K+, justificando a desidratação (4 a 5 L).
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mecanismo de Acidose (Visual) */}
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg flex flex-col justify-center relative">
                  <h3 className="text-sm font-black text-white uppercase tracking-tight flex items-center gap-2 mb-6">
                    <Flame size={16} className="text-orange-500" />
                    Mecanismo da Acidose
                  </h3>

                  <div className="flex flex-col items-center gap-2 w-full max-w-[340px] mx-auto">
                    <div className="w-full py-2 px-3 bg-slate-950 border border-slate-800 rounded-lg text-center">
                      <span className="text-xs font-bold text-slate-300 uppercase block tracking-wider">
                        Cetonas no Plasma
                      </span>
                      <span className="text-[11px] text-slate-500">
                        (Acetoacetato e B-OHB)
                      </span>
                    </div>
                    <ArrowDown size={18} className="text-slate-600" />

                    <div className="w-full p-3 bg-slate-900 border border-slate-700/50 rounded-lg">
                      <div className="flex items-center justify-center gap-1.5 font-mono text-sm mb-2 opacity-90 overflow-hidden">
                        <span className="text-rose-400 font-black whitespace-nowrap">
                          H⁺
                        </span>
                        <span className="text-slate-500 whitespace-nowrap">
                          +
                        </span>
                        <span className="text-cyan-400 font-black whitespace-nowrap">
                          HCO₃⁻
                        </span>
                        <span className="text-slate-500 whitespace-nowrap">
                          ⇌
                        </span>
                        <span className="text-purple-400 font-black whitespace-nowrap">
                          H₂CO₃
                        </span>
                        <span className="text-slate-500 whitespace-nowrap">
                          ⇌
                        </span>
                        <span className="text-emerald-400 font-black whitespace-nowrap">
                          H₂O
                        </span>
                        <span className="text-slate-500 whitespace-nowrap">
                          +
                        </span>
                        <span className="text-slate-300 font-black whitespace-nowrap">
                          CO₂
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-3">
                        <div className="p-2 bg-rose-950/40 border border-rose-900/50 rounded text-center">
                          <span className="text-[10px] font-bold text-rose-400 uppercase block">
                            Carga Ácida
                          </span>
                          <span className="text-[9px] text-rose-500/70 block">
                            (Excesso de H⁺)
                          </span>
                        </div>
                        <div className="p-2 bg-cyan-950/40 border border-cyan-900/50 rounded text-center">
                          <span className="text-[10px] font-bold text-cyan-400 uppercase block">
                            Consumo HCO₃⁻
                          </span>
                          <span className="text-[9px] text-cyan-500/70 block">
                            (Queda p/ Taponamento)
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 text-center border-t border-slate-800 pt-2">
                        <span className="text-[10px] text-slate-400 block">
                          Excesso de CO₂ expulso via:
                        </span>
                        <span className="text-[11px] font-bold text-emerald-400 uppercase block">
                          Respiração de Kussmaul
                        </span>
                      </div>
                    </div>

                    <ArrowDown size={18} className="text-slate-600" />
                    <div className="w-full p-3 bg-red-950/30 border border-red-500/40 rounded-lg text-center shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                      <span className="text-sm font-black text-red-500 uppercase block tracking-widest">
                        Acidose Metabólica
                      </span>
                      <span className="text-xs text-red-400/80 uppercase font-bold tracking-widest">
                        Ânion Gap Elevado
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <AcidosisChart />
              <GasometryChart />
              <DeltaRatioVisualizer />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                  <h4 className="text-sm font-black uppercase text-amber-500 mb-2">
                    Cetoacidose Euglicêmica
                  </h4>
                  <p className="text-[11px] text-slate-300">
                    Acidose + Cetonemia com Glicemia &lt; 200 mg/dL.
                  </p>
                  <ul className="text-[11px] text-slate-400 mt-2 space-y-1 list-disc ml-4 marker:text-amber-500">
                    <li>Uso de iSGLT2 (Gliflozinas)</li>
                    <li>Gestantes, Pancreatite</li>
                    <li>Doença hepática crônica / Abuso de álcool / Cocaína</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-md">
                  <h4 className="text-sm font-black uppercase text-rose-500 mb-2">
                    Fatores Precipitantes
                  </h4>
                  <ul className="text-[11px] text-slate-400 gap-x-2 space-y-1 list-disc ml-4 marker:text-rose-500 columns-2">
                    <li>Má adesão (Primodescompensação)</li>
                    <li>Infecções (Trato Respiratório/ITU)</li>
                    <li>IAM ou AVC Agudos</li>
                    <li>Medicamentoso (Corticoides)</li>
                    <li>Doenças gastrointestinais</li>
                    <li>Drogas de abuso</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: DIAGNOSTICO */}
          {activeTab === "diagnostico" && (
            <motion.div
              key="diagnostico"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <DiagnosisTab />
            </motion.div>
          )}

          {/* TAB 3: TRATAMENTO */}
          {activeTab === "tratamento" && (
            <motion.div
              key="tratamento"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-6"
            >
              <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-6">
                {treatmentSteps.map((step) => (
                  <div
                    key={step.id}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative w-full"
                  >
                    {step.content}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
