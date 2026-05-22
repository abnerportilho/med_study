import React from 'react';
import { Microscope, Wind, ShieldCheck, Info, Clock, Activity, AlertTriangle, Zap, Search, HelpCircle, Bug, Globe, AlertCircle } from 'lucide-react';

export default function PneumoniaPatho() {
  return (
    <div className="flex flex-col gap-12 pb-20 animate-in fade-in duration-700">
      {/* HEADER SECTION */}
      <section id="header">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center text-brand-blue shadow-inner">
            <Microscope size={28} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-brand-navy leading-tight">Fisiopatologia da Pneumonia</h1>
            <p className="text-ink-muted text-sm font-medium">Entendendo os mecanismos de agressão e defesa pulmonar</p>
          </div>
        </div>

        <div className="card p-6 border-brand-blue/20 bg-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 rotate-12">
            <Info size={120} />
          </div>
          <div className="relative z-10 flex flex-col gap-4">
             <div className="flex items-center gap-2 text-brand-blue">
                <Info size={20} />
                <h3 className="font-bold text-lg">Conceito e Definição</h3>
             </div>
             <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
               A <strong>Pneumonia Adquirida na Comunidade (PAC)</strong> é definida como o aparecimento agudo de sintomas e sinais de infecção do trato respiratório inferior, sem outra causa óbvia, associada a um <strong>infiltrado pulmonar novo</strong> no exame de imagem em paciente não hospitalizado. É a principal causa de morte por doenças infecciosas no mundo.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                   <h4 className="text-[10px] font-black uppercase text-brand-blue mb-2 flex items-center gap-2">
                      <Globe size={14} /> 
                      Epidemiologia e Impacto
                   </h4>
                   <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px]">
                         <span className="text-slate-400">Incidência Global:</span>
                         <span className="font-mono text-brand-blue">1.5 a 14 por 1.000 pessoas-ano</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                         <span className="text-slate-400">Mortalidade (Ambulatorial):</span>
                         <span className="font-mono text-emerald-400">{" < "} 1%</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                         <span className="text-slate-400">Mortalidade (Hospitalar):</span>
                         <span className="font-mono text-amber-400">5.7% – 14%</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px]">
                         <span className="text-slate-400">Mortalidade (UTI):</span>
                         <span className="font-mono text-rose-500">30% – 50%</span>
                      </div>
                   </div>
                </div>

                <div className="p-4 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                   <h4 className="text-[10px] font-black uppercase text-rose-400 mb-2 flex items-center gap-2">
                      <AlertCircle size={14} /> 
                      Fatores de Risco (Fisiopatológicos)
                   </h4>
                   <ul className="text-[10px] text-slate-300 space-y-1 list-disc pl-4">
                      <li><strong>Idade:</strong> Imunossenescência + Polifarmácia.</li>
                      <li><strong>Comorbidades:</strong> DPOC (principal), ICC, DM e Neoplasias.</li>
                      <li><strong>Estilo de Vida:</strong> Tabagismo, Etilismo e Desnutrição.</li>
                      <li><strong>Ambiente:</strong> Aglomerações, poluição, contato com crianças.</li>
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 🌬️ COMO A MICROBIOTA CHEGA NO PULMÃO? */}
      <section id="microbiota-entry">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Wind size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-brand-blue/20 pb-1">🌬️ Entrada da Microbiota</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-xl hover:border-brand-blue/40 transition-colors">
            <h4 className="font-bold text-brand-blue text-sm mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-[10px]">1</span>
              Microaspiração Subclínica
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              Mecanismo mais comum. Ocorre durante o sono em pessoas saudáveis (normal e periódico). 
            </p>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] text-slate-300">
                A pneumonia ocorre quando os <strong>mecanismos de defesa falham</strong> ou a carga bacteriana da orofaringe colonizada supera a capacidade de eliminação.
              </p>
            </div>
          </div>

          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-xl hover:border-brand-blue/40 transition-colors">
            <h4 className="font-bold text-brand-blue text-sm mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-[10px]">2</span>
              Inalação de Partículas Aéreas
            </h4>
            <div className="space-y-3">
              <div className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                <p className="text-[10px] text-slate-300"><strong>Vírus:</strong> Inalação de partículas <strong>{"<"} 5 μm</strong> que acessam diretamente os alvéolos.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                <p className="text-[10px] text-slate-300"><strong>Bactérias:</strong> Colonização faríngea prévia por patógenos virulentos.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                <p className="text-[10px] text-slate-300"><strong>Fungos:</strong> Inalação de esporos ambientais.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🛡️ MECANISMOS DE DEFESA DO PULMÃO */}
      <section id="defense-mechanisms">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-600">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-emerald-600/20 pb-1">🛡️ Mecanismos de Defesa</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-emerald-400 mb-3">1. Clearance Mucociliar</h4>
            <p className="text-[11px] text-slate-400 mb-3">Epitélio ciliado empurrando o muco para fora.</p>
            <div className="text-[10px] p-2 bg-rose-900/10 border border-rose-500/20 rounded">
              <p className="text-rose-400 font-bold mb-1 italic">Prejudicado por:</p>
              <p>Tabagismo, DPOC, Poluição, Ar frio e seco.</p>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-emerald-400 mb-3">2. Reflexo da Tosse</h4>
            <p className="text-[11px] text-slate-400 mb-3">Defesa mecânica extremamente eficaz.</p>
            <div className="text-[10px] p-2 bg-rose-900/10 border border-rose-500/20 rounded">
              <p className="text-rose-400 font-bold mb-1 italic">Prejudicado por:</p>
              <p>Doenças neuromusculares, AVC, Sedativos, Álcool.</p>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-black text-[10px] uppercase tracking-widest text-emerald-400 mb-3">3. Macrófagos Alveolares</h4>
            <p className="text-[11px] text-slate-400 mb-3">Células residentes que "comem" as bactérias.</p>
            <div className="text-[10px] p-2 bg-rose-900/10 border border-rose-500/20 rounded">
              <p className="text-rose-400 font-bold mb-1 italic">Prejudicado por:</p>
              <p>Idade (Imunossenescência), Corticoides, Alcoolismo, Desnutrição.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 📊 AS 4 FASES HISTOPATOLÓGICAS */}
      <section id="pathological-phases">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-white border-b-2 border-brand-blue/20 pb-1">📊 Fases Histopatológicas (Pneumococo)</h2>
        </div>

        <div className="p-4 bg-amber-50 rounded-xl border-l-4 border-amber-400 mb-8">
           <p className="text-xs text-amber-800 italic font-medium">
             ⚠️ <strong>Importante:</strong> O paciente só passa por todas essas fases se <strong>NÃO</strong> for tratado com antibióticos. A terapia precoce interrompe essa progressão.
           </p>
        </div>

        <div className="space-y-6">
          {/* FASE 1 */}
          <div className="card overflow-hidden border-blue-500/20 bg-slate-900 text-white shadow-xl flex border-l-8 border-l-blue-600">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-center mb-4">
                 <h4 className="font-bold text-lg text-blue-400 uppercase tracking-tight">1. Congestivo-Edematosa (1ªs 24h)</h4>
                 <Clock size={20} className="text-slate-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">O que acontece</p>
                   <p className="text-xs leading-relaxed">Multiplicação bacteriana, hiperemia ativa e extravasamento de líquido rico em proteínas (edema).</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Macroscopia</p>
                   <p className="text-xs leading-relaxed">Pulmão pesado, úmido e avermelhado.</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Clínica</p>
                   <p className="text-xs leading-relaxed">Febre súbita, calafrios, tosse seca.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FASE 2 */}
          <div className="card overflow-hidden border-rose-500/20 bg-slate-900 text-white shadow-xl flex border-l-8 border-l-rose-700">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-center mb-4">
                 <h4 className="font-bold text-lg text-rose-500 uppercase tracking-tight">2. Hepatização Vermelha (2-3 dias)</h4>
                 <AlertTriangle size={20} className="text-rose-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">O que acontece</p>
                   <p className="text-xs leading-relaxed">Invasão maciça de neutrófilos, hemácias e fibrina. Alvéolos totalmente preenchidos.</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Macroscopia</p>
                   <p className="text-xs leading-relaxed font-bold text-rose-200">Compacto, pesado, aspecto de FÍGADO. Afunda na água.</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Clínica</p>
                   <p className="text-xs leading-relaxed">Expectoração hemoptoica ("geleia de groselha"), dispneia progressiva.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FASE 3 */}
          <div className="card overflow-hidden border-slate-500/20 bg-slate-900 text-white shadow-xl flex border-l-8 border-l-slate-600">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-center mb-4">
                 <h4 className="font-bold text-lg text-slate-400 uppercase tracking-tight">3. Hepatização Cinzenta / Flava (4-6 dias)</h4>
                 <Microscope size={20} className="text-slate-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">O que acontece</p>
                   <p className="text-xs leading-relaxed">Neutrófilos destroem as bactérias, formando PUS. Hemácias degradadas.</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Macroscopia</p>
                   <p className="text-xs leading-relaxed">Continua compacto, mas agora cinza ou amarelado pelo acúmulo de pus.</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Clínica</p>
                   <p className="text-xs leading-relaxed">Expectoração amarelada/esverdeada (purulenta).</p>
                </div>
              </div>
            </div>
          </div>

          {/* FASE 4 */}
          <div className="card overflow-hidden border-emerald-500/20 bg-slate-900 text-white shadow-xl flex border-l-8 border-l-emerald-600">
            <div className="p-6 flex-1">
              <div className="flex justify-between items-center mb-4">
                 <h4 className="font-bold text-lg text-emerald-500 uppercase tracking-tight">4. Resolução (7-11 dias)</h4>
                 <Zap size={20} className="text-emerald-500" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">O que acontece</p>
                   <p className="text-xs leading-relaxed">Enzimas digerem fibrina. Macrófagos fagocitam debris e drenagem linfática limpa o local.</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Macroscopia</p>
                   <p className="text-xs leading-relaxed">Retorno à consistência normal e restauração da arquitetura pulmonar.</p>
                </div>
                <div>
                   <p className="text-[10px] font-black uppercase text-slate-500 mb-2">Clínica</p>
                   <p className="text-xs leading-relaxed">Tosse produtiva intensa (eliminação) e melhora progressiva.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🧬 COMPARAÇÃO: VIRAL vs BACTERIANA */}
      <section id="comparison">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-600/20 flex items-center justify-center text-amber-600">
            <Search size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy border-b-2 border-amber-600/20 pb-1 tracking-tight">🧬 Viral vs Bacteriana vs Atípica</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="card p-6 border-white/10 bg-slate-900 text-white border-t-4 border-t-brand-blue">
              <h4 className="font-bold text-lg mb-4 text-brand-blue">Bacteriana Clássica</h4>
              <ul className="text-xs text-slate-300 space-y-3">
                 <li className="flex gap-2"><span>•</span> <strong>Padrão Histológico:</strong> Alveolar, consolidação lobar.</li>
                 <li className="flex gap-2"><span>•</span> <strong>Infiltrado:</strong> Neutrófilos predominam.</li>
                 <li className="flex gap-2"><span>•</span> <strong>Expectoração:</strong> Purulenta ou hemoptoica.</li>
              </ul>
           </div>

           <div className="card p-6 border-white/10 bg-slate-900 text-white border-t-4 border-t-amber-500">
              <h4 className="font-bold text-lg mb-4 text-amber-500">Viral ou Atípica</h4>
              <ul className="text-xs text-slate-300 space-y-3">
                 <li className="flex gap-2"><span>•</span> <strong>Padrão Histológico:</strong> Intersticial (vidro fosco, reticulonodular).</li>
                 <li className="flex gap-2"><span>•</span> <strong>Infiltrado:</strong> Linfócitos predominam (vírus).</li>
                 <li className="flex gap-2"><span>•</span> <strong>Expectoração:</strong> Escassa ou tosse seca.</li>
              </ul>
           </div>
        </div>

        <div className="mt-8 p-6 bg-black rounded-2xl border border-line">
           <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
              <Zap size={20} className="text-blue-600" />
              Papel dos Vírus na Infecção Secundária
           </h4>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                 <p className="text-xs text-ink-muted">Os vírus facilitam as bactérias através de:</p>
                 <div className="p-3 bg-[#424242] rounded-lg border border-line text-[11px] text-white italic">
                    "Lesão epitelial, destruição de cílios e exposição de receptores bacterianos."
                 </div>
              </div>
              <div className="flex flex-col justify-center">
                 <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-1">Exemplo Clássico</p>
                 <p className="text-xs text-ink-muted">Influenza seguida de pneumonia estafilocócica (grave/fatal).</p>
              </div>
           </div>
        </div>
      </section>

      {/* 🎯 FLUXOGRAMA E MECANISMOS DE MULTIPLICAÇÃO */}
      <section id="mechanisms">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Activity size={24} />
                </div>
                <h2 className="text-xl font-bold text-brand-navy">Fatores de Reprodução</h2>
              </div>
              <div className="space-y-4">
                 <div className="p-4 bg-[#1e2d56] border-white/10 rounded-xl text-white">
                    <p className="text-[11px] font-bold text-brand-blue mb-1">Nutrientes</p>
                    <p className="text-[10px] text-slate-400">Edema alveolar e muco servem de fonte de carbono e nutrientes para bactérias.</p>
                 </div>
                 <div className="p-4 bg-[#1d294b] border-white/10 rounded-xl text-white">
                    <p className="text-[11px] font-bold text-brand-blue mb-1">Virulência</p>
                    <p className="text-[10px] text-slate-400">Cápsulas (Pneumococo), Leucocidina (Staph) e Biofilmes facilitam a invasão.</p>
                 </div>
              </div>
           </div>

           <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
                  <Wind size={24} />
                </div>
                <h2 className="text-xl font-bold text-brand-navy">Fluxograma</h2>
              </div>
              <div className="relative border-l-2 border-brand-blue/30 pl-8 space-y-6 py-2">
                 {[
                   { t: "Chegada", d: "Microaspiração ou Inalação" },
                   { t: "Falha de Defesa", d: "Tabagismo, Álcool, Comorbidades" },
                   { t: "Invasão", d: "Adesão e Multiplicação Alveolar" },
                   { t: "Inflamação", d: "Resposta inflamatória aguda (Exsudato)" }
                 ].map((step, i) => (
                   <div key={i} className="relative">
                      <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-brand-blue flex items-center justify-center text-white text-[10px] font-bold">
                        {i+1}
                      </div>
                      <h4 className="text-xs font-bold text-brand-navy uppercase tracking-widest">{step.t}</h4>
                      <p className="text-[10px] text-ink-muted">{step.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* 🧠 PONTOS CHAVE */}
      <section id="key-points">
         <div className="card p-8 bg-slate-900 border-brand-blue/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
               <ShieldCheck size={140} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-brand-blue mb-6 flex items-center gap-2 relative z-10">
               <Zap size={20} />
               Pontos-Chave para Fixação
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
               {[
                 "Microaspirações são normais; o problema é a falha defensiva.",
                 "Tabagismo é o maior inimigo do clearance mucociliar.",
                 "Hepatização = pulmão sólido, sem ar, como o fígado.",
                 "Vermelha (hemácias) → Cinzenta (pus).",
                 "Vírus + Bactéria = Coinfecção de alta gravidade.",
                 "Atípicas simulam padrão viral (intersticial)."
               ].map((point, i) => (
                 <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                       <Zap size={10} />
                    </div>
                    <p className="text-[11px] text-slate-300 font-medium">{point}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
