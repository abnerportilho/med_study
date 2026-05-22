import React from 'react';
import { AlertTriangle, User, Thermometer, Activity, LayoutDashboard, Search } from 'lucide-react';

export default function PneumoniaClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. FATORES DE RISCO */}
      <section id="risk-factors">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <User size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">Fatores de Risco</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-blue mb-4">Individuais / Não Modificáveis</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-xs">Idade Avançada</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-xs">Sexo Masculino</p>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-xs">IMC {"<"} 20</p>
              </div>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-blue mb-4">Comorbidades Principais</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-xs font-bold text-blue-400">DPOC (Principal fator)</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-400">
                <div className="p-2 border border-white/5 rounded">Asma</div>
                <div className="p-2 border border-white/5 rounded">ICC</div>
                <div className="p-2 border border-white/5 rounded">Diabetes</div>
                <div className="p-2 border border-white/5 rounded">Demência</div>
                <div className="p-2 border border-white/5 rounded">AVC Prévio</div>
              </div>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="text-[10px] uppercase font-black tracking-widest text-brand-blue mb-4">Hábitos e Social</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-xs">Tabagismo (Atual ou Prévio)</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-xs">
                Alcoolismo ({" > "} 40g/álcool/dia)
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/5 text-[9px] text-slate-400">
                 Residir com {" > "} 10 pessoas / Contato frequente com crianças.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUADRO CLÍNICO */}
      <section id="symptoms">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Thermometer size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">Diagnóstico Clínico</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full -mr-12 -mt-12" />
             <h4 className="font-bold text-brand-blue text-sm mb-4">Tríade Clássica (Início Agudo)</h4>
             <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1.5 bg-blue-600/30 border border-blue-500/50 rounded-full text-xs font-bold text-blue-100">Febre</span>
                <span className="px-3 py-1.5 bg-rose-600/30 border border-rose-500/50 rounded-full text-xs font-bold text-rose-100">Dor Torácica</span>
                <span className="px-3 py-1.5 bg-emerald-600/30 border border-emerald-500/50 rounded-full text-xs font-bold text-emerald-100">Expectoração</span>
             </div>
             <ul className="text-[10px] text-slate-400 space-y-4">
               <li>• <strong>Tosse:</strong> Presente em {">"} 80% dos casos.</li>
               <li>• <strong>Expectoração Amarela:</strong> Presente em ~50% dos casos.</li>
               <li>• <strong>Dispneia:</strong> Sensação subjetiva em 50-70% dos casos.</li>
               <li>• <strong>Extrapulmonar:</strong> Mialgia e prostração comuns.</li>
             </ul>
           </div>

           <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-2xl">
             <h4 className="font-bold text-brand-blue text-sm mb-4">Exame Físico (Preditores de Pneumonia)</h4>
             <p className="text-[10px] text-slate-400 mb-6 italic">"Aumento da probabilidade do diagnóstico:"</p>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="p-3 bg-white/5 rounded border border-white/10">
                   <p className="text-[10px] font-black text-blue-400">FR {">"} 25</p>
                   <p className="text-[9px] text-slate-500">Taquipneia</p>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10">
                   <p className="text-[10px] font-black text-rose-400">FC {">"} 100 bpm</p>
                   <p className="text-[9px] text-slate-500">Taquicardia</p>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10 col-span-full">
                   <p className="text-[10px] font-black text-emerald-400">Estertores na Ausculta</p>
                   <p className="text-[9px] text-slate-500">Ou diminuição unilateral dos sons respiratórios.</p>
                </div>
                <div className="p-3 bg-white/5 rounded border border-white/10 col-span-full">
                   <p className="text-[10px] font-black text-amber-400">Febre Persistente</p>
                   <p className="text-[9px] text-slate-500">Geralmente {">"} 38°C.</p>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 3. ESCORES PROGNÓSTICOS */}
      <section id="staging">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <LayoutDashboard size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">Quando e Onde Internar?</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* CURB-65 */}
          <div className="card overflow-hidden border-white/10 bg-slate-900 shadow-2xl">
            <div className="bg-brand-navy p-4 text-white">
               <h3 className="font-bold flex items-center gap-2">CURB-65</h3>
               <p className="text-[10px] text-slate-400">Confusion, Urea, Respiratory, Blood Pressure, Age</p>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
                <div className="p-2 border border-white/10 rounded"><strong>C</strong>onfusão Mental</div>
                <div className="p-2 border border-white/10 rounded"><strong>U</strong>reia {">"} 40 mg/dL</div>
                <div className="p-2 border border-white/10 rounded"><strong>R</strong>espiração ≥ 30 irpm</div>
                <div className="p-2 border border-white/10 rounded"><strong>B</strong>P (PAS {" < "} 90 ou PAD {" < "} 60)</div>
                <div className="p-2 border border-white/10 rounded col-span-full text-center"><strong>65</strong> anos ou mais</div>
              </div>
              
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-[10px]">
                  <thead>
                    <tr className="text-slate-500 border-b border-white/10">
                      <th className="pb-2 text-left">Pontos</th>
                      <th className="pb-2 text-left">Mortalidade</th>
                      <th className="pb-2 text-center text-blue-400">Conduta Sugerida</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    <tr className="border-b border-white/5">
                      <td className="py-2">0</td>
                      <td className="py-2">0.6%</td>
                      <td className="py-2 text-center text-emerald-400 font-bold uppercase tracking-tighter" rowSpan={2}>Ambulatorial</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">1</td>
                      <td className="py-2">2.7%</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">2</td>
                      <td className="py-2">6.8%</td>
                      <td className="py-2 text-center text-amber-400 font-bold uppercase tracking-tighter">Considerar Hospital</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2">3</td>
                      <td className="py-2">14%</td>
                      <td className="py-2 text-center text-rose-500 font-bold uppercase tracking-tighter" rowSpan={2}>Hospitalar / UTI</td>
                    </tr>
                    <tr className="bg-rose-900/20">
                      <td className="py-2 px-1">4 ou 5</td>
                      <td className="py-2 font-bold text-rose-400">27.8%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* PSI & SMART-COP */}
          <div className="flex flex-col gap-6">
            <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-xl">
               <h4 className="font-bold text-brand-blue text-sm mb-3 flex justify-between items-center">
                  <span>PSI / PORT</span>
                  <span className="text-[9px] font-normal text-slate-500 italic">"Pneumonia Severity Index"</span>
               </h4>
               <div className="overflow-x-auto">
                 <table className="w-full text-[9px] text-left border-collapse">
                   <thead>
                     <tr className="border-b border-white/10 text-slate-500 font-black uppercase">
                       <th className="pb-2 text-[8px]">Classe</th>
                       <th className="pb-2 text-[8px]">Pontos</th>
                       <th className="pb-2 text-[8px]">Risco</th>
                       <th className="pb-2 text-[8px]">Conduta</th>
                     </tr>
                   </thead>
                   <tbody className="text-slate-300">
                     <tr className="border-b border-white/5">
                       <td className="py-1.5 font-bold">I / II</td>
                       <td>{"≤"} 70</td>
                       <td>0,1 - 0,6%</td>
                       <td>Ambulatorial</td>
                     </tr>
                     <tr className="border-b border-white/5">
                       <td className="py-1.5 font-bold">III</td>
                       <td>71 - 90</td>
                       <td>2,8%</td>
                       <td className="text-amber-400">Obs / Intern. Breve</td>
                     </tr>
                     <tr className="border-b border-white/5 text-rose-300">
                       <td className="py-1.5 font-bold">IV / V</td>
                       <td>{">"} 90</td>
                       <td>8,2 - 29%</td>
                       <td className="font-bold">Internação</td>
                     </tr>
                   </tbody>
                 </table>
               </div>
               <div className="mt-3 p-2 bg-blue-500/10 rounded border border-blue-500/20">
                  <p className="text-[8px] text-blue-300 italic">Nota: Não decorar! Usar calculadoras online. Superior para identificar baixo risco.</p>
               </div>
            </div>

            <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-xl mb-4">
               <h4 className="font-bold text-brand-blue text-sm mb-3">Critérios de UTI (ATS/IDSA)</h4>
               <p className="text-[10px] text-slate-400 mb-4">Indicado UTI se <strong>1 maior</strong> ou <strong>≥ 3 menores</strong>.</p>
               <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-rose-400 uppercase tracking-widest">Maiores</p>
                    <ul className="text-[8px] text-slate-300 list-disc pl-3">
                      <li>Choque Séptico</li>
                      <li>Necessidade de VM</li>
                    </ul>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] font-black text-amber-400 uppercase tracking-widest">Menores</p>
                    <ul className="text-[8px] text-slate-300 list-disc pl-2">
                       <li>PaO2/FiO2 {"<"} 250 | Ureia ≥ 50</li>
                       <li>FR {" > "} 30 | Multilobar</li>
                       <li>Confusão | PAS {" < "} 90</li>
                    </ul>
                  </div>
               </div>
            </div>

            <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-xl">
               <h4 className="font-bold text-brand-blue text-sm mb-3 flex justify-between items-center">
                  <span>SMART-COP</span>
                  <span className="text-[10px] font-normal text-slate-500 italic">Predicts Support</span>
               </h4>
               <p className="text-[9px] text-slate-400 leading-relaxed uppercase">
                  <strong>S</strong>istólica {"<"} 90 (2) | <strong>M</strong>ultilobar (1) | <strong>A</strong>lbumina {"<"} 3.5 (1) | <strong>R</strong>esp ≥ 25 (1) | <strong>T</strong>aquicardia {">"} 125 (1) | <strong>C</strong>onfusão (1) | <strong>O</strong>xigênio (2) | <strong>P</strong>h {"<"} 7.30 (2).
               </p>
               <div className="mt-2 p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <p className="text-[8px] text-blue-200 font-bold text-center">Score {">"} 3 = 92% sensibilidade para VM / Vasopressores</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
