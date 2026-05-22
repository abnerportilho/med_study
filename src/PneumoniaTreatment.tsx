import React from 'react';
import { Pill, Activity, Zap, ShieldAlert, Clock, AlertTriangle, Check, X } from 'lucide-react';

export default function PneumoniaTreatment() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. TRATAMENTO EMPÍRICO */}
      <section id="empiric-treatment">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Pill size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">Tratamento Empírico</h2>
        </div>

        <div className="flex flex-col gap-6">
           {/* TABELA DE TRATAMENTO POR AMBIENTE */}
           <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
              <div className="p-4 bg-slate-800 border-b border-white/10">
                 <h3 className="text-sm font-black uppercase tracking-widest text-brand-blue">Resumo de Tratamento por Ambiente</h3>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-slate-900 text-[10px] uppercase font-black text-slate-500 border-b border-white/10">
                          <th className="p-4">Ambiente / Paciente</th>
                          <th className="p-4">Esquema Preferencial</th>
                          <th className="p-4 text-center">Duração</th>
                          <th className="p-4">Observações</th>
                       </tr>
                    </thead>
                    <tbody className="text-xs">
                       <tr className="bg-emerald-900/20 border-b border-white/5 hover:bg-emerald-900/30 transition-colors">
                          <td className="p-4 align-top">
                             <div className="font-bold text-emerald-400">AMBULATORIAL (Sem Comorb.)</div>
                             <div className="text-[10px] text-slate-500 mt-1">Hígido, sem uso recente de ATB</div>
                          </td>
                          <td className="p-4 align-top">
                             <div className="p-2 bg-emerald-500/10 rounded border border-emerald-500/20">
                                <p className="font-bold text-emerald-100">Amoxicilina (1g 8/8h)</p>
                                <p className="text-[10px] text-slate-400 mt-1">OU Doxiciclina</p>
                             </div>
                          </td>
                          <td className="p-4 text-center font-mono text-emerald-400">5 dias</td>
                          <td className="p-4 text-[10px] text-slate-400 leading-relaxed">Considerar Macrolídeo (Azitro/Claritro) se resistência local {"<"} 25%.</td>
                       </tr>
                       <tr className="bg-amber-900/20 border-b border-white/5 hover:bg-amber-900/30 transition-colors">
                          <td className="p-4 align-top">
                             <div className="font-bold text-amber-500">AMBULATORIAL (Com Comorb.)</div>
                             <div className="text-[10px] text-slate-500 mt-1">DPOC, DM, ICC, Renal, Etilismo</div>
                          </td>
                          <td className="p-4 align-top">
                             <div className="p-2 bg-amber-500/10 rounded border border-amber-500/20">
                                <p className="font-bold text-amber-100">Beta-lactâmico + Macrolídeo</p>
                                <p className="text-[10px] text-slate-400 mt-1">Ex: Amox-Clav + Azitromicina</p>
                                <p className="text-[10px] text-amber-500 mt-2">OU Monoterapia: Levofloxacino</p>
                             </div>
                          </td>
                          <td className="p-4 text-center font-mono text-amber-500">5 - 7 dias</td>
                          <td className="p-4 text-[10px] text-slate-400 leading-relaxed">Beta-lactâmicos preferidos: Amox-Clav ou Cefuroxima.</td>
                       </tr>
                       <tr className="bg-blue-900/20 border-b border-white/5 hover:bg-blue-900/30 transition-colors">
                          <td className="p-4 align-top">
                             <div className="font-bold text-blue-400">ENFERMARIA (Hospitalar)</div>
                             <div className="text-[10px] text-slate-500 mt-1">Estável, mas necessita suporte</div>
                          </td>
                          <td className="p-4 align-top">
                             <div className="p-3 bg-blue-500/10 rounded border border-blue-500/20">
                                <p className="font-bold text-blue-100 italic">"Padrão-Ouro":</p>
                                <p className="font-black text-blue-300">Ceftriaxona + Azitromicina</p>
                                <p className="text-[10px] text-blue-400 mt-2">OU Monoterapia: Quinofloxacino</p>
                             </div>
                          </td>
                          <td className="p-4 text-center font-mono text-blue-400">7 dias</td>
                          <td className="p-4 text-[10px] text-slate-400 leading-relaxed">Trocar para via oral assim que estável hemodinamicamente e afebril.</td>
                       </tr>
                       <tr className="bg-rose-900/30 hover:bg-rose-900/40 transition-colors">
                          <td className="p-4 align-top">
                             <div className="font-bold text-rose-500">UTI (Grave)</div>
                             <div className="text-[10px] text-slate-500 mt-1">Choque ou Insuf. Respiratória</div>
                          </td>
                          <td className="p-4 align-top">
                             <div className="p-3 bg-rose-500/10 rounded border border-rose-500/20">
                                <p className="font-black text-rose-200 uppercase tracking-tighter mb-1">Terapia Combinada:</p>
                                <p className="text-white">Ceftriaxona + Azitromicina</p>
                                <p className="text-white mt-1">OU Ceftriaxona + Fluoroquinolona</p>
                             </div>
                          </td>
                          <td className="p-4 text-center font-mono text-rose-500">7 - 14 dias</td>
                          <td className="p-4 text-[10px] text-slate-400 leading-relaxed">Cobrir MRSA/Pseudomonas se houver fatores de risco (internação prévia, ATB recente).</td>
                       </tr>
                    </tbody>
                 </table>
              </div>
           </div>

           {/* NOVA TABELA DE COBERTURA DE ANTIBIÓTICOS (ESTILO IMAGEM) */}
           <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900 mt-4">
              <div className="p-4 bg-slate-800 border-b border-white/10 flex justify-between items-center">
                 <h3 className="text-sm font-black uppercase tracking-widest text-brand-blue">Perfil de Cobertura de Antibióticos</h3>
                 <span className="text-[10px] bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30">Referência de Aula</span>
              </div>
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-slate-900 text-[10px] uppercase font-black text-slate-500 border-b border-white/10">
                          <th className="p-4">Antibiótico</th>
                          <th className="p-4 text-center">Típicos?</th>
                          <th className="p-4 text-center">Atípicos?</th>
                          <th className="p-4">Observação Importante</th>
                       </tr>
                    </thead>
                    <tbody className="text-xs">
                       {[
                         { atb: "Amoxicilina", tip: "Sim", ati: "Não", obs: "Padrão para Pneumococo sensível.", icon: true },
                         { atb: "Amoxicilina + Clavulanato", tip: "Sim (Amplo)", ati: "Não", obs: "Cobre H. influenzae e M. catarrhalis.", icon: true },
                         { atb: "Cefuroxima (2ª G)", tip: "Sim", ati: "Não", obs: "Alternativa oral potente à Amoxicilina.", icon: true },
                         { atb: "Ceftriaxona (3ª G)", tip: "Sim", ati: "Não", obs: "Padrão-ouro para o Típico na internação.", icon: true },
                         { atb: "Azitromicina / Claritro", tip: "Limitada*", ati: "Sim", obs: "Única função aqui: cobrir atípicos. *Resistência alta.", icon: "lim" },
                         { atb: "Doxiciclina", tip: "Sim (Mod.)", ati: "Sim", obs: "Excelente opção de monoterapia para jovens hígidos.", icon: true },
                         { atb: "Levofloxacino / Moxi", tip: "Sim", ati: "Sim", obs: "Monoterapia oral ou EV. Cobre Típico + Atípico.", icon: true },
                         { atb: "Piperacilina-Tazobactam", tip: "Sim (Amplo)", ati: "Não", obs: "Restrito a UTI (suspeita de Pseudomonas).", icon: true },
                         { atb: "Meropenem", tip: "Sim (Amplo)", ati: "Não", obs: "Uso restrito (ESBL / Pseudomonas resistente).", icon: true },
                         { atb: "Vancomicina / Linezolida", tip: "Sim (MRSA)", ati: "Não*", obs: "NÃO cobre típicos usuais. Só se MRSA. *Linezolida tem leve ação.", icon: "mrsa" },
                       ].map((row, i) => (
                         <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                            <td className="p-4 font-bold text-slate-200">{row.atb}</td>
                            <td className="p-4 text-center">
                               {row.tip === "Sim" || row.tip.startsWith("Sim") ? (
                                 <div className="flex items-center justify-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                                   <Check size={12} strokeWidth={3} />
                                   <span className="text-[10px] font-bold">{row.tip}</span>
                                 </div>
                               ) : row.tip === "Limitada*" ? (
                                 <div className="flex items-center justify-center gap-1.5 text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                                   <AlertTriangle size={12} strokeWidth={3} />
                                   <span className="text-[10px] font-bold">{row.tip}</span>
                                 </div>
                               ) : (
                                 <div className="flex items-center justify-center gap-1.5 text-rose-500 bg-rose-500/10 px-2 py-1 rounded">
                                   <X size={12} strokeWidth={3} />
                                   <span className="text-[10px] font-bold">Não</span>
                                 </div>
                               )}
                            </td>
                            <td className="p-4 text-center">
                               {row.ati === "Sim" ? (
                                 <div className="flex items-center justify-center gap-1.5 text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                                   <Check size={12} strokeWidth={3} />
                                   <span className="text-[10px] font-bold">Sim</span>
                                 </div>
                               ) : row.ati === "Não*" ? (
                                 <div className="flex items-center justify-center gap-1.5 text-amber-500 bg-amber-500/10 px-2 py-1 rounded">
                                   <AlertTriangle size={12} strokeWidth={3} />
                                   <span className="text-[10px] font-bold">Limitada</span>
                                 </div>
                               ) : (
                                 <div className="flex items-center justify-center gap-1.5 text-rose-500 bg-rose-500/10 px-2 py-1 rounded">
                                   <X size={12} strokeWidth={3} />
                                   <span className="text-[10px] font-bold">Não</span>
                                 </div>
                               )}
                            </td>
                            <td className="p-4 text-[10px] text-slate-400 leading-relaxed">{row.obs}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </div>
        </div>
      </section>

      {/* 2. TERAPIA ALVO-ESPECÍFICA */}
      <section id="targeted-therapy">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <ShieldAlert size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">Terapia Alvo para Agentes Específicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-xl flex flex-col gap-4">
              <div className="flex justify-between items-start">
                 <h4 className="font-black text-xs text-brand-blue">MRSA (S. aureus MDR)</h4>
                 <Zap size={16} className="text-amber-500" />
              </div>
              <p className="text-[10px] text-slate-400">Suspeitar se: Hospitalização recente, uso prévio de ATB, doenças pulmonares estruturais.</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                 <div className="p-2 bg-white/5 rounded text-[10px] text-center border border-white/10">Vancomicina</div>
                 <div className="p-2 bg-white/5 rounded text-[10px] text-center border border-white/10">Linezolida</div>
              </div>
              <p className="text-[9px] text-slate-500 italic">Duração: 7 a 21 dias.</p>
           </div>

           <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-xl flex flex-col gap-4">
              <div className="flex justify-between items-start">
                 <h4 className="font-black text-xs text-emerald-400">Pseudomonas sp.</h4>
                 <Zap size={16} className="text-emerald-500" />
              </div>
              <p className="text-[10px] text-slate-400">Opções antipseudomônicas (7-14 dias):</p>
              <ul className="text-[10px] text-slate-300 space-y-1 list-disc pl-4 uppercase">
                 <li>Pip/Tazo ou Meropenem</li>
                 <li>Cefepime</li>
                 <li>Polimixina B / Levofloxacino</li>
              </ul>
              <div className="p-2 bg-amber-900/10 border border-amber-500/20 rounded">
                 <p className="text-[9px] text-amber-200">ESBL (Enterobactérias): Carbapenêmicos por 7-14 dias.</p>
              </div>
           </div>
        </div>
      </section>

      {/* 3. CORTICOSTEROIDES */}
      <section id="corticoids">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-600">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1 text-blue-700">Uso de Corticoides (NEJM 2023)</h2>
        </div>

        <div className="card p-8 border-brand-blue/20 bg-slate-50 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12"><ShieldAlert size={120} /></div>
           
           <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
              <div className="flex-1 space-y-4">
                 <h4 className="font-bold text-brand-navy text-lg">Preditores de Benefício com Hidrocortisona</h4>
                 <p className="text-xs text-ink-muted leading-relaxed">Em pacientes com <strong>PAC Grave</strong>, o uso de Hidrocortisona evidenciou redução significativa da mortalidade em 28 dias (6,2% vs 11,9%).</p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-black rounded-xl border border-white shadow-sm">
                       <p className="text-[10px] font-black uppercase text-blue-400 mb-2">Esquema</p>
                       <p className="text-sm font-bold text-white">Hidrocortisona 200mg/dia</p>
                       <p className="text-xs text-white opacity-70">(50mg IV a cada 6 horas)</p>
                       <p className="text-[10px] text-white opacity-70 mt-2">Duração: 4-5 dias com desmame em 8-14 dias.</p>
                    </div>
                    <div className="p-4 bg-[#4a0000] rounded-xl border border-white shadow-sm border-l-4 border-l-rose-500">
                       <p className="text-[10px] font-black uppercase text-rose-300 mb-2">Contraindicações</p>
                       <p className="text-xs text-white opacity-80 font-bold">Infecções virais não controladas ou alto risco de adversos.</p>
                    </div>
                 </div>
              </div>

              <div className="w-full md:w-64 space-y-4">
                 <div className="p-4 bg-blue-600 text-white rounded-2xl shadow-xl border-4 border-[#ff0000]">
                    <h5 className="font-bold text-xs mb-2">Indicação: Choque Séptico</h5>
                    <p className="text-[10px] leading-relaxed opacity-90">Recomendado (Surviving Sepsis 2021) apenas se hipotensão persistente apesar de reposição volêmica e vasopressores.</p>
                    <div className="mt-4 pt-3 border-t border-white/20">
                       <span className="text-[14px] font-black">200mg/dia</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
