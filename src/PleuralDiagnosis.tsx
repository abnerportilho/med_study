import React from 'react';
import { Search, FileText, Microscope, ImageIcon, CheckCircle2, AlertTriangle, GitBranch, Table as TableIcon } from 'lucide-react';

export default function PleuralDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. EXAMES DE IMAGEM */}
      <section id="imaging">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <ImageIcon size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Exames de Imagem</h2>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 text-white mb-6 shadow-xl">
          <p className="text-xs font-black text-brand-blue uppercase tracking-widest mb-2">Axioma Diagnóstico:</p>
          <p className="text-sm font-bold italic">"Derrame pleural identificado é igual a punção!"</p>
          <p className="text-[10px] text-slate-400 mt-1">*Exceções: Insuficiência Cardíaca clássica e impossibilidade técnica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-3">Raio-X de Tórax</h4>
            <ul className="text-[10px] text-slate-300 space-y-2">
              <li>• <strong>Incidências:</strong> PA, Perfil e Laurell (Decúbito Lateral).</li>
              <li>• <strong>Laurell:</strong> Detecta derrames pequenos (10-50ml).</li>
              <li>• <strong>Sinal do Menisco:</strong> Curva côncava superior clássica.</li>
            </ul>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-3">Ultrassonografia (USG)</h4>
            <ul className="text-[10px] text-slate-300 space-y-2">
              <li>• <strong>Sinal da Água Viva:</strong> Pulmão flutuando no líquido.</li>
              <li>• <strong>Sensibilidade:</strong> Detecta volumes mínimos (~5ml).</li>
              <li>• <strong>Guia:</strong> Essencial para toracocentese segura.</li>
            </ul>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-3">Tomografia (TC)</h4>
            <ul className="text-[10px] text-slate-300 space-y-2">
              <li>• <strong>Foco Casoso:</strong> Pode sugerir Tuberculose.</li>
              <li>• <strong>Pleura:</strong> Avalia espessamento e nódulos.</li>
              <li>• <strong>Diferencial:</strong> Abscesso vs Derrame loculado.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. CRITÉRIOS DE LIGHT */}
      <section id="lights-criteria">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Microscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Critérios de Light (Ouro)</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl mb-6">
          <div className="bg-emerald-600 p-3 text-white font-black text-[10px] uppercase tracking-widest">DEFINIÇÃO DE EXUDATO (Sens 98% / Esp 72%)</div>
          <div className="p-6">
            <p className="text-xs text-slate-400 mb-6">Basta <strong>UM</strong> dos critérios abaixo para ser classificado como <strong>EXUDATO</strong>:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Proteína Pleural / Sérica</p>
                <p className="text-2xl font-black text-brand-blue">{">"} 0,5</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">LDH Pleural / Sérico</p>
                <p className="text-2xl font-black text-brand-blue">{">"} 0,6</p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-center">
                <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">LDH Pleural</p>
                <p className="text-2xl font-black text-brand-blue">{">"} 2/3 LSN Sérica</p>
              </div>
            </div>
          </div>
          <div className="bg-amber-900/30 p-4 border-t border-white/10">
            <p className="text-[10px] text-amber-200 flex items-center gap-2">
              <AlertTriangle size={14} />
              <strong>Atenção:</strong> Transudatos podem "parecer" exudatos em pacientes usando diuréticos ("enxugando" o derrame).
            </p>
          </div>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900 text-white mb-6">
          <h4 className="font-bold text-brand-blue text-sm mb-4">Aumentando a Especificidade</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Colesterol</p>
              <p className="text-xs font-black text-brand-blue">{">"} 40-55 mg/dL</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Proteína Pleural</p>
              <p className="text-xs font-black text-brand-blue">{">"} 3,0 g/dL</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Gradiente Alb.</p>
              <p className="text-xs font-black text-brand-blue">{">"} 1,2 (Trans)</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center">
              <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Gradiente Prot.</p>
              <p className="text-xs font-black text-brand-blue">{">"} 3,1 (Trans)</p>
            </div>
          </div>
        </div>

        {/* TABELA COMPARATIVA DETALHADA */}
        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl mt-8">
          <div className="bg-slate-800/50 p-3 text-white font-black text-[10px] uppercase tracking-widest border-b border-white/10">Tabela Comparativa: Bioquímica</div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/30 border-b border-white/10">
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-slate-400">Parâmetro / Exame</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue-400">Transudato</th>
                  <th className="p-4 text-[10px] font-black uppercase tracking-widest text-rose-400">Exudato</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Prot. Pleural / Sérica (Light)</td>
                  <td className="p-4 text-blue-200">≤ 0,5</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 0,5</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">LDH Pleural / Sérico (Light)</td>
                  <td className="p-4 text-blue-200">≤ 0,6</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 0,6</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">LDH Pleural (Light)</td>
                  <td className="p-4 text-blue-200">≤ 2/3 LSN Sérica</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 2/3 LSN Sérica</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Colesterol Pleural</td>
                  <td className="p-4 text-blue-200">{"<"} 45 mg/dL</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 45 mg/dL</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Proteína Pleural</td>
                  <td className="p-4 text-blue-200">{"<"} 3,0 g/dL</td>
                  <td className="p-4 text-rose-200 font-black">{">"} 3,0 g/dL</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Gradiente Alb. (S-P)</td>
                  <td className="p-4 text-blue-200 font-black">{">"} 1,2 g/dL</td>
                  <td className="p-4 text-rose-200">{"<"} 1,2 g/dL</td>
                </tr>
                <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Gradiente Prot. (S-P)</td>
                  <td className="p-4 text-blue-200 font-black">{">"} 3,1 g/dL</td>
                  <td className="p-4 text-rose-200">{"<"} 3,1 g/dL</td>
                </tr>
                <tr className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-bold text-slate-300">Aspecto Macroscópico</td>
                  <td className="p-4 text-blue-200">Límpido / Citrino</td>
                  <td className="p-4 text-rose-200">Turvo / Hemático / Purulento</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. ANÁLISE DO LÍQUIDO PLEURAL */}
      <section id="fluid-analysis">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800/10 flex items-center justify-center text-slate-700">
            <FileText size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Análise Bioquímica e Citológica</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Marcadores Específicos</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">ADA {">"} 40 U/L</span>
                <span className="text-[10px] text-brand-blue font-black">TB (Sens 92% / Esp 90%)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">ADA {">"} 70 U/L</span>
                <span className="text-[10px] text-brand-blue font-black">Alta Especificidade p/ TB</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">TRM-TB (Pleura)</span>
                <span className="text-[10px] text-slate-400">Sens 50% / Esp 98%</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Biópsia de Pleura</span>
                <span className="text-[10px] text-brand-blue font-black">Padrão-Ouro p/ TB</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Glicose {"<"} 60 mg/dL</span>
                <span className="text-[10px] text-slate-400">Pneumonia, Câncer, TB, AR</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">pH {"<"} 7,20</span>
                <span className="text-[10px] text-rose-400">Indica Drenagem (Empiema)</span>
              </div>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Câncer e Relações</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Citologia Oncótica</span>
                <span className="text-[10px] text-slate-400">Negativa em 40% (analisar 75ml)</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">DHL / ADA {">"} 20</span>
                <span className="text-[10px] text-rose-400 font-black">Sugere Malignidade</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">DHL / Linfócito {">"} 30</span>
                <span className="text-[10px] text-rose-400 font-black">Sugere Malignidade</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Biópsia de Pleura</span>
                <span className="text-[10px] text-rose-400 font-black">Se Citologia Negativa</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Amilase Elevada</span>
                <span className="text-[10px] text-slate-400">Pancreatite, Ruptura Esofágica</span>
              </div>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Outros Critérios</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">BNP (Pleura ou Sangue)</span>
                <span className="text-[10px] text-slate-400">Sugere IC</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">FAN (Fator Antinuclear)</span>
                <span className="text-[10px] text-slate-400">Sugere LES</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Triglicerídeos {">"} 110</span>
                <span className="text-[10px] text-brand-blue font-black">Quilotórax</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Creatinina (P {">"} S)</span>
                <span className="text-[10px] text-slate-400">Urinotórax</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-white/5 rounded border border-white/10">
                <span className="text-[10px] font-bold">Ht {">"} 50% Sangue</span>
                <span className="text-[10px] text-rose-400 font-black">Hemotórax</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FLUXOGRAMA DE CELULARIDADE */}
      <section id="flowchart">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <GitBranch size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Fluxograma de Celularidade</h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* Root Node */}
          <div className="card p-4 bg-slate-900 border-brand-blue/50 border-2 text-white text-center w-64 shadow-xl">
            <p className="text-xs font-black uppercase tracking-widest text-brand-blue">Ponto de Partida</p>
            <p className="text-sm font-bold">Alta Celularidade (Exudato)</p>
          </div>

          {/* Connection Line */}
          <div className="w-px h-8 bg-brand-blue/30"></div>

          {/* Split Container */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-2xl relative">
            {/* Horizontal Line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-brand-blue/30"></div>
            
            {/* Left Branch: Linfocítico */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-4 bg-brand-blue/30"></div>
              <div className="card p-4 bg-slate-900 border-emerald-500/50 border-2 text-white text-center w-full shadow-lg">
                <p className="text-[10px] font-black uppercase text-emerald-400">Predomínio Linfocítico</p>
                <p className="text-xs font-bold">{">"} 50% de Linfócitos</p>
              </div>
              <div className="w-px h-4 bg-brand-blue/30"></div>
              <div className="space-y-2 w-full">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px] text-slate-300">
                  <strong className="text-brand-blue">Tuberculose:</strong> ADA {">"} 40, Biópsia (Padrão-Ouro).
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px] text-slate-300">
                  <strong className="text-brand-blue">Neoplasia:</strong> Citologia, DHL/ADA {">"} 20.
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px] text-slate-300">
                  <strong className="text-brand-blue">Colagenoses:</strong> Artrite Reumatoide (Glicose muito baixa).
                </div>
              </div>
            </div>

            {/* Right Branch: Neutrofílico */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-px h-4 bg-brand-blue/30"></div>
              <div className="card p-4 bg-slate-900 border-rose-500/50 border-2 text-white text-center w-full shadow-lg">
                <p className="text-[10px] font-black uppercase text-rose-400">Predomínio Neutrofílico</p>
                <p className="text-xs font-bold">Processos Agudos</p>
              </div>
              <div className="w-px h-4 bg-brand-blue/30"></div>
              <div className="space-y-2 w-full">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px] text-slate-300">
                  <strong className="text-rose-400">Parapneumônico:</strong> Pneumonia (20-60% dos casos).
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px] text-slate-300">
                  <strong className="text-rose-400">TEP:</strong> Início agudo, dor pleurítica intensa.
                </div>
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 text-[10px] text-slate-300">
                  <strong className="text-rose-400">Pancreatite:</strong> Amilase elevada no líquido.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
