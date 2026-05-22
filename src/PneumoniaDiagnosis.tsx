import React from 'react';
import { Microscope, Table, ImageIcon, Stethoscope, Search, Globe, Zap, AlertCircle } from 'lucide-react';

export default function PneumoniaDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. PAPEL DA IMAGEM */}
      <section id="imaging">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <ImageIcon size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">Papel da Imagem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Radiografia (Rx de Tórax)</h4>
            <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">Fundamental na tríade clássica (Hx + EF + Rx). Obrigatória quando disponível.</p>
            <ul className="text-[9px] text-slate-500 space-y-2">
              <li className="flex gap-2"><span>•</span> Posições PA e Perfil preferencialmente.</li>
              <li className="flex gap-2"><span>•</span> Detecta complicações e extensão da lesão.</li>
              <li className="flex gap-2"><span>•</span> Somente 40% dos médicos diagnosticam PAC sem Rx.</li>
            </ul>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-lg border-brand-blue/30">
            <h4 className="font-bold text-emerald-400 text-sm mb-4 flex items-center justify-between">
               <span>Ultrassonografia (USG)</span>
               <Zap size={14} className="text-emerald-500" />
            </h4>
            <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">Ganhando espaço na emergência pela agilidade e acurácia.</p>
            <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20 mb-3">
               <p className="text-[9px] font-bold text-emerald-200 uppercase mb-1">Acurácia Superior</p>
               <p className="text-[9px] text-emerald-100">Especificidade de 100% para consolidações. Mais sensível que o Rx.</p>
            </div>
            <p className="text-[9px] text-slate-500">Achados: Consolidações, padrão intersticial focal e anormalidades pleurais.</p>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="font-bold text-amber-400 text-sm mb-4">Tomografia (TC de Tórax)</h4>
            <p className="text-[10px] text-slate-400 mb-4 leading-relaxed">Método mais sensível. Empregado se Rx/USG forem limitados ou normais com Hx forte.</p>
            <ul className="text-[9px] text-slate-500 space-y-2">
              <li className="flex gap-2 text-white"><span>•</span> <strong>Imunossuprimidos</strong></li>
              <li className="flex gap-2 text-white"><span>•</span> <strong>Obesos</strong></li>
              <li className="flex gap-2"><span>•</span> Abscessos ou derrames loculados.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. MICROBIOLOGIA */}
      <section id="microbiology">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Microscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">Perfil Microbiológico</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl mb-8">
           <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50 border-b border-white/10">
                  <th className="p-4 text-[10px] uppercase font-black tracking-widest text-blue-400">Tipo de Agente</th>
                  <th className="p-4 text-[10px] uppercase font-black tracking-widest text-slate-200">Principais Exemplos</th>
                </tr>
              </thead>
              <tbody className="text-[10px] sm:text-xs">
                 <tr className="border-b border-white/5">
                   <td className="p-4 font-bold text-white">Bactérias Típicas</td>
                   <td className="p-4 text-slate-300">
                     <span className="text-blue-200 font-bold">Streptococcus pneumoniae (Pneumococo - Mais comum)</span>, Haemophilus influenzae, Moraxella catarrhalis.
                   </td>
                 </tr>
                 <tr className="border-b border-white/5">
                   <td className="p-4 font-bold text-white">Bactérias Atípicas</td>
                   <td className="p-4 text-slate-300">Mycoplasma pneumoniae, Chlamydia pneumoniae, Legionella pneumophila.</td>
                 </tr>
                 <tr>
                   <td className="p-4 font-bold text-white">Vírus Respiratórios</td>
                   <td className="p-4 text-slate-300">Rinovírus, Influenza, Metapneumovírus, Coronavírus.</td>
                 </tr>
              </tbody>
           </table>
           <div className="p-4 bg-blue-900/10 border-t border-white/5">
              <p className="text-[9px] text-blue-300 italic">"Pneumonias com coinfecção Vírus + Bactéria (presente em 20%) tendem a ser mais graves e prolongadas."</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           <div className="card p-4 border-white/5 bg-slate-800/50">
              <h5 className="text-[10px] font-black text-amber-400 uppercase mb-2">Mycoplasma</h5>
              <p className="text-[9px] text-slate-400 leading-relaxed">Comum em idosos. Tosse seca (pior à noite), mialgia, dor de garganta. Quadro insidioso (4 a 20 dias).</p>
           </div>
           <div className="card p-4 border-white/5 bg-slate-800/50">
              <h5 className="text-[10px] font-black text-amber-400 uppercase mb-2">Chlamydia p.</h5>
              <p className="text-[9px] text-slate-400 leading-relaxed">Quadro clínico com dor de garganta, tosse e cefaleia. Podem persistir por semanas/meses.</p>
           </div>
           <div className="card p-4 border-white/10 bg-amber-900/10 border shadow-inner">
              <h5 className="text-[10px] font-black text-rose-400 uppercase mb-2">Legionella (Mais Grave)</h5>
              <p className="text-[9px] text-slate-300 leading-relaxed">Relacionada a sistemas de água/ar-condicionado. Cursa com <strong>alteração de estado mental e diarreia</strong> (20-40%).</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
             <h4 className="font-bold text-brand-blue text-sm mb-4 flex items-center gap-2">
                <Search size={16} />
                Investigação Etiológica: Pra quem?
             </h4>
             <div className="space-y-4">
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                   <p className="text-[10px] font-bold text-rose-300 mb-1">PAC Não Grave (Ambulatorial)</p>
                   <p className="text-[9px] text-slate-400">Geralmente não é necessária. Só solicitar se mudar conduta.</p>
                </div>
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                   <p className="text-[10px] font-bold text-emerald-300 mb-1">PAC Grave / Hospitalizados</p>
                   <p className="text-[9px] text-slate-400">Solicitar exames básicos: Cultura de escarro + Gram, Hemoculturas e Antígenos Urinários (Pneumococo e Legionella).</p>
                </div>
             </div>
           </div>

           <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
             <h4 className="font-bold text-brand-blue text-sm mb-4">Recomendações ATS/IDSA (2019)</h4>
             <p className="text-[10px] text-slate-400 mb-4 italic">Obter escarro antes do ATB se:</p>
             <ul className="text-[10px] text-slate-400 space-y-2 list-disc pl-5">
               <li>Pneumonia considerada grave (principalmente se IOT).</li>
               <li>Risco para agentes MDR (MRSA ou P. aeruginosa).</li>
               <li>Histórico de internação ou uso de ATB nos últimos 90 dias.</li>
               <li>Infecção prévia por MRSA ou Pseudomonas.</li>
             </ul>
           </div>
        </div>
      </section>

      {/* 3. COMPLICAÇÕES: DERRAME PARAPNEUMÔNICO */}
      <section id="complications">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-600/20 flex items-center justify-center text-orange-600">
            <AlertCircle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-orange-600/20 pb-1">Derrame Parapneumônico</h2>
        </div>

        <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-2xl">
           <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                 <p className="text-xs text-slate-300 mb-4">
                    Com complicação frequente, a <strong>Toracocentese Diagnóstica</strong> é mandatória se houver derrame visível no exame de imagem ({">"} 1 cm no perfil ou decúbito).
                 </p>
                 <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 bg-white/5 rounded border border-white/10">
                       <p className="text-[10px] font-black tracking-widest text-brand-blue uppercase mb-1">Padrão Exsudato</p>
                       <p className="text-[9px] text-slate-400">DHL e Proteínas elevadas no líquido pleural (Critérios de Light).</p>
                    </div>
                    <div className="p-3 bg-white/5 rounded border border-white/10">
                       <p className="text-[10px] font-black tracking-widest text-brand-blue uppercase mb-1">Metabolismo</p>
                       <p className="text-[9px] text-slate-400">Glicose baixa, pH baixo e Colesterol alto.</p>
                    </div>
                 </div>

                 {/* TABELA DE CRITÉRIOS DE LIGHT */}
                 <div className="rounded-xl overflow-hidden border border-white/10 mb-4 bg-slate-800/30">
                    <div className="p-3 bg-slate-800 border-b border-white/10">
                       <h4 className="text-[10px] font-black uppercase text-brand-blue">Tabela: Critérios de Light (Exsudato vs Transudato)</h4>
                    </div>
                    <table className="w-full text-left text-[10px]">
                       <thead>
                          <tr className="bg-slate-900/50 text-slate-400 border-b border-white/10">
                             <th className="p-3">Critério / Exame</th>
                             <th className="p-3">Exsudato (Inflamatório)</th>
                             <th className="p-3">Transudato (Pressão)</th>
                          </tr>
                       </thead>
                       <tbody className="text-slate-300">
                          <tr className="border-b border-white/5 bg-blue-900/10">
                             <td className="p-3 font-bold">Prot. Pleural / Prot. Sérica</td>
                             <td className="p-3 text-blue-300 font-bold">{">"} 0.5</td>
                             <td className="p-3 font-mono">{"≤"} 0.5</td>
                          </tr>
                          <tr className="border-b border-white/5 bg-blue-900/10">
                             <td className="p-3 font-bold">DHL Pleural / DHL Sérico</td>
                             <td className="p-3 text-blue-300 font-bold">{">"} 0.6</td>
                             <td className="p-3 font-mono">{"≤"} 0.6</td>
                          </tr>
                          <tr className="border-b border-white/5 bg-blue-900/10">
                             <td className="p-3 font-bold">DHL Pleural</td>
                             <td className="p-3 text-blue-300 font-bold">{">"} 2/3 limite superior sérico</td>
                             <td className="p-3 font-mono">{"<"} 2/3 limite superior</td>
                          </tr>
                          <tr className="border-b border-white/5">
                             <td className="p-3">Gradiente de Albumina</td>
                             <td className="p-3 font-mono">{"<"} 1.2 g/dL</td>
                             <td className="p-3 text-emerald-400 font-bold">{">"} 1.2 g/dL</td>
                          </tr>
                          <tr>
                             <td className="p-3">Colesterol Pleural</td>
                             <td className="p-3 text-blue-300 font-bold">{">"} 45 mg/dL</td>
                             <td className="p-3 font-mono">{"<"} 45 mg/dL</td>
                          </tr>
                       </tbody>
                    </table>
                    <div className="p-3 bg-slate-900/20">
                       <p className="text-[9px] text-slate-500 italic">Basta <strong>UM</strong> critério positivo (em azul) para classificar como exsudato.</p>
                    </div>
                 </div>
              </div>
              <div className="w-full md:w-64 p-4 bg-rose-600/20 border border-rose-500/30 rounded-2xl shadow-xl">
                 <h4 className="font-bold text-rose-300 text-sm mb-3">Definição de EMPIEMA</h4>
                 <ul className="text-[10px] text-rose-100 space-y-2 font-bold">
                    <li>1. Pus na punção (aspecto macroscópico).</li>
                    <li>2. Presença de bactéria no Gram ou Cultura.</li>
                 </ul>
                 <p className="text-[9px] text-rose-300 mt-4 opacity-80 italic">Indicação absoluta de drenagem torácica.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
