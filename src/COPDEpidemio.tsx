import React from 'react';
import { 
  Globe, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  Cigarette, 
  Flame, 
  Briefcase, 
  Dna, 
  Baby, 
  BarChart3,
  Search,
  CheckCircle2,
  Info
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function COPDEpidemio() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. EPIDEMIOLOGIA: A MAGNITUDE DO PROBLEMA */}
      <section id="epidemiology">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Globe size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Epidemiologia: A Magnitude Global</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card p-5 border-line bg-slate-800/50">
            <div className="flex items-center gap-2 text-brand-blue mb-2">
              <Users size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Prevalência</span>
            </div>
            <p className="text-2xl font-black text-brand-navy">10-12%</p>
            <p className="text-[10px] text-ink-muted mt-1">Da população adulta mundial (&gt;40 anos). ~400 milhões de pessoas.</p>
          </div>
          <div className="card p-5 border-line bg-slate-800/50">
            <div className="flex items-center gap-2 text-rose-400 mb-2">
              <TrendingUp size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Mortalidade</span>
            </div>
            <p className="text-2xl font-black text-brand-navy">3ª ou 4ª</p>
            <p className="text-[10px] text-ink-muted mt-1">Principal causa de morte no mundo. Em ascensão em países de baixa renda.</p>
          </div>
          <div className="card p-5 border-line bg-slate-800/50">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <BarChart3 size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">No Brasil</span>
            </div>
            <p className="text-2xl font-black text-brand-navy">15-16%</p>
            <p className="text-[10px] text-ink-muted mt-1">Prevalência em regiões metropolitanas (SP). Grande carga no SUS.</p>
          </div>
        </div>

        {/* O Viés do Subdiagnóstico */}
        <div className="card p-6 border-amber-500/20 bg-amber-500/5 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10 text-amber-500">
            <Search size={120} />
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="mt-1 text-amber-500">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">A Regra dos 80-20 (Subdiagnóstico)</h3>
              <p className="text-sm text-ink leading-relaxed">
                Apenas <span className="font-bold text-amber-500">1 em cada 5 pacientes</span> tem diagnóstico formal. 
                O paciente atribui a dispneia ao sedentarismo ou "cigarro do vovô", procurando ajuda apenas quando já perdeu &gt;50% da função pulmonar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FATORES DE RISCO: MUITO ALÉM DO CIGARRO */}
      <section id="risk-factors">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Fatores de Risco</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tabagismo */}
          <div className="card p-6 border-line hover:border-brand-blue/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Cigarette size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Tabagismo (80% dos casos)</h3>
            </div>
            <ul className="space-y-3 text-xs text-ink-muted leading-relaxed">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                <span><span className="font-bold text-brand-blue">Maços-Ano:</span> Risco exponencial acima de 20 maços-ano.</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                <span><span className="font-bold text-brand-blue">Passivo:</span> Aumenta o risco em 1,5 a 2 vezes (fumaça lateral penetra mais fundo).</span>
              </li>
            </ul>
          </div>

          {/* Biomassa */}
          <div className="card p-6 border-line hover:border-amber-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Flame size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Queima de Biomassa</h3>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed mb-3">
              O "DPOC da Mulher Rural" (fogão a lenha). Causa mais <span className="font-bold">Fibrose Peribrônquica</span> do que enfisema puro.
            </p>
            <div className="text-[10px] font-bold text-amber-600 bg-amber-500/10 px-2 py-1 rounded inline-block uppercase tracking-wider">
              PIP: Deslocamento por Alta Resistência
            </div>
          </div>

          {/* Ocupacional */}
          <div className="card p-6 border-line hover:border-emerald-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <Briefcase size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Exposição Ocupacional</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Sílica", "Carvão", "Cádmio", "Grãos"].map(tag => (
                <span key={tag} className="text-[10px] font-mono bg-slate-800 px-2 py-1 rounded border border-line">{tag}</span>
              ))}
            </div>
            <p className="text-[10px] text-ink-muted mt-3 italic">Pense em DPOC em mineiros, pedreiros ou metalúrgicos não fumantes.</p>
          </div>

          {/* Genética */}
          <div className="card p-6 border-line hover:border-brand-pink/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-pink/10 flex items-center justify-center text-brand-pink">
                <Dna size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Deficiência de Alfa-1 (AAT)</h3>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Fator genético mais importante. A AAT inibe a <span className="font-bold">Elastase</span> (a tesoura do pulmão).
            </p>
            <div className="mt-3 p-2 rounded bg-brand-pink/5 border border-brand-pink/20 text-[10px] text-brand-pink">
              <strong>Pista:</strong> Enfisema Panlobular em JOVEM (&lt;45a) e não fumante, em BASES.
            </div>
          </div>
        </div>

        {/* Outros Fatores */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-xl border border-line bg-slate-800/30">
            <Baby className="text-brand-blue mt-1 shrink-0" size={18} />
            <div>
              <h4 className="text-xs font-bold text-brand-navy mb-1">Eventos da Infância</h4>
              <p className="text-[10px] text-ink-muted leading-relaxed">Infecções graves, prematuridade e asma grave não tratada (remodelamento fixo).</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-xl border border-line bg-slate-800/30">
            <TrendingUp className="text-brand-blue mt-1 shrink-0" size={18} />
            <div>
              <h4 className="text-xs font-bold text-brand-navy mb-1">Envelhecimento e Pobreza</h4>
              <p className="text-[10px] text-ink-muted leading-relaxed">Perda fisiológica de VEF1 (25-30mL/ano) acelerada no DPOC (60-80mL/ano).</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESUMO PARA RACIOCÍNIO CLÍNICO */}
      <section id="clinical-reasoning">
        <div className="card overflow-hidden border-line">
          <div className="bg-brand-navy p-4 text-white font-bold text-center flex items-center justify-center gap-2">
            <Search size={18} />
            Raciocínio Clínico: O Perfil do Paciente
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/80">
                  <th className="p-4 border border-line">Se o paciente é...</th>
                  <th className="p-4 border border-line">Pense em...</th>
                  <th className="p-4 border border-line">Correlação com o PIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-4 border border-line font-medium">Homem, 65a, 50 maços/ano</td>
                  <td className="p-4 border border-line font-bold text-brand-blue">DPOC Clássica</td>
                  <td className="p-4 border border-line text-ink-muted">Perda de retração + Bronquite</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-medium">Mulher, 70a, nunca fumou, mora na roça</td>
                  <td className="p-4 border border-line font-bold text-amber-500">Queima de Biomassa</td>
                  <td className="p-4 border border-line text-ink-muted">Alta Resistência (Bronquiolite)</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-medium">Paciente, 40a, não fumante, enfisema nas bases</td>
                  <td className="p-4 border border-line font-bold text-brand-pink">Deficiência de AAT</td>
                  <td className="p-4 border border-line text-ink-muted">Destruição maciça do parênquima</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-medium">Jovem com "asma" que não melhora</td>
                  <td className="p-4 border border-line font-bold text-emerald-400">DPOC Precoce ou ACO</td>
                  <td className="p-4 border border-line text-ink-muted">Remodelamento fixo da via aérea</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Dica Final */}
      <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex gap-4 items-center">
        <Info className="text-brand-blue shrink-0" size={20} />
        <p className="text-xs text-brand-blue/80 italic">
          <strong>Lembre-se:</strong> O diagnóstico de DPOC deve ser considerado em qualquer paciente com dispneia, tosse crônica ou produção de escarro, e história de exposição a fatores de risco.
        </p>
      </div>
    </div>
  );
}
