import React from 'react';
import { 
  Wind, 
  Activity, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Zap,
  Layers,
  ShieldAlert,
  ChevronRight,
  Maximize2,
  Minimize2
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function COPDPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. DEFINIÇÃO E CONCEITO CENTRAL */}
      <section id="definition">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Wind size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Definição e Conceito Central</h2>
        </div>

        <div className="card p-6 border-brand-blue/20 bg-brand-blue/5 mb-6">
          <div className="flex gap-4">
            <div className="mt-1 text-brand-blue">
              <Info size={20} />
            </div>
            <div>
              <p className="text-lg font-medium text-brand-navy leading-relaxed italic">
                "O problema não é 'entrar ar', o problema é <span className="text-brand-blue font-bold underline">tirar o ar</span>."
              </p>
              <p className="text-sm text-ink-muted mt-2">
                A DPOC (GOLD 2024) é caracterizada por sintomas respiratórios persistentes e limitação do fluxo aéreo devido a anormalidades nas vias aéreas e/ou alvéolos, geralmente causadas por exposição significativa a partículas ou gases nocivos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-5 border-line hover:border-brand-blue/30 transition-all">
            <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
              <ShieldAlert className="text-brand-blue" size={18} />
              Bronquite Crônica
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Inflamação da mucosa, hipertrofia de glândulas, fibrose peribrônquica e excesso de muco. 
              <span className="block mt-2 font-bold text-brand-blue">Mecanismo: Aumento da Resistência (Cano Sujo).</span>
            </p>
          </div>
          <div className="card p-5 border-line hover:border-brand-pink/30 transition-all">
            <h3 className="font-bold text-brand-navy mb-3 flex items-center gap-2">
              <Activity className="text-brand-pink" size={18} />
              Enfisema
            </h3>
            <p className="text-xs text-ink-muted leading-relaxed">
              Destruição das paredes alveolares e perda de elastina (septos que ancoram os bronquíolos).
              <span className="block mt-2 font-bold text-brand-pink">Mecanismo: Perda da Retração Elástica (Elástico Frouxo).</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. O PONTO DE IGUAL PRESSÃO (PIP) */}
      <section id="pip-concept">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">O Ponto de Igual Pressão (PIP)</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-sm text-ink leading-relaxed">
              O PIP é o ponto exato da árvore brônquica onde a pressão dentro do lúmen se iguala à pressão pleural (externa).
            </p>
            <div className="card p-4 border-emerald-500/20 bg-emerald-500/5">
              <h4 className="text-xs font-bold text-emerald-400 uppercase mb-2">Fisiologia Normal</h4>
              <ul className="text-[11px] text-ink-muted space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Retração elástica alta (elástico novo).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>PIP localiza-se em brônquios cartilaginosos (rígidos).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Resultado: Expiração silenciosa e eficiente.</span>
                </li>
              </ul>
            </div>
            <div className="card p-4 border-rose-500/20 bg-rose-500/5">
              <h4 className="text-xs font-bold text-rose-400 uppercase mb-2">Na DPOC</h4>
              <ul className="text-[11px] text-ink-muted space-y-2">
                <li className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
                  <span>O PIP se <span className="font-bold">desloca para montante</span> (em direção ao alvéolo).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
                  <span>Para em bronquíolos membranosos (sem cartilagem).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle size={14} className="text-rose-400 shrink-0 mt-0.5" />
                  <span>Resultado: Colapso expiratório precoce e aprisionamento aéreo.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card p-6 border-line bg-slate-800/30">
            <h4 className="text-sm font-bold text-brand-navy mb-4">Mecânica do Colapso</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-bg border border-line">
                <span className="text-xs font-bold">Alvéolo</span>
                <ArrowRight size={16} className="text-brand-blue" />
                <span className="text-xs font-bold">PIP (Colapso)</span>
                <ArrowRight size={16} className="text-brand-blue" />
                <span className="text-xs font-bold">Boca</span>
              </div>
              <div className="p-4 rounded-xl bg-brand-navy border border-brand-blue/30">
                <p className="text-[10px] text-slate-300 leading-relaxed italic">
                  "Se a via fecha antes do ar sair, o ar fica preso. Na próxima inspiração, o pulmão já está meio cheio. Isso é a <span className="text-brand-blue font-bold">Hiperinsuflação Dinâmica</span>."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FENÓTIPOS E O PIP */}
      <section id="phenotypes">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink">
            <Layers size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Fenótipos e o Deslocamento do PIP</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Enfisema */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-brand-pink" />
              <h3 className="text-lg font-bold text-brand-navy">Enfisema (Pink Puffer)</h3>
            </div>
            <div className="card p-5 border-line space-y-3">
              <p className="text-xs text-ink leading-relaxed">
                <span className="font-bold text-brand-pink">Causa do Deslocamento:</span> Perda da Retração Elástica.
              </p>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                O pulmão é um "elástico frouxo". Não gera pressão alveolar forte. A pressão no lúmen cai abruptamente.
              </p>
              <div className="p-3 rounded-lg bg-brand-pink/10 border border-brand-pink/20">
                <h5 className="text-[10px] font-bold text-brand-pink uppercase mb-1">Clínica do PIP</h5>
                <p className="text-[10px] text-ink">
                  <span className="font-bold">Sopro Expiratório:</span> O ar sai no início, mas a via fecha subitamente. O paciente faz <span className="font-bold">Freno Labial</span> para reabrir a via.
                </p>
              </div>
            </div>
          </div>

          {/* Bronquite */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-brand-blue" />
              <h3 className="text-lg font-bold text-brand-navy">Bronquite Crônica (Blue Bloater)</h3>
            </div>
            <div className="card p-5 border-line space-y-3">
              <p className="text-xs text-ink leading-relaxed">
                <span className="font-bold text-brand-blue">Causa do Deslocamento:</span> Alta Resistência das Vias Aéreas.
              </p>
              <p className="text-[11px] text-ink-muted leading-relaxed">
                O ar passa por um "cano entupido". A pressão é dissipada pelo atrito ao longo do trajeto (Lei de Poiseuille).
              </p>
              <div className="p-3 rounded-lg bg-brand-blue/10 border border-brand-blue/20">
                <h5 className="text-[10px] font-bold text-brand-blue uppercase mb-1">Clínica do PIP</h5>
                <p className="text-[10px] text-ink">
                  <span className="font-bold">Sibilos Expiratórios:</span> Colapso contínuo e grave desde o início. Chiado por turbulência e estreitamento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TABELA COMPARATIVA */}
      <section id="comparison">
        <div className="card overflow-hidden border-line">
          <div className="bg-brand-navy p-4 text-white font-bold text-center">
            O Deslocamento do PIP nos Dois Fenótipos
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="p-4 border border-line">Característica</th>
                  <th className="p-4 border border-line text-brand-pink">ENFISEMA (Pink Puffer)</th>
                  <th className="p-4 border border-line text-brand-blue">BRONQUITE (Blue Bloater)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Mecanismo do PIP</td>
                  <td className="p-4 border border-line">Baixa Pressão de Recolhimento (Mola Fraca)</td>
                  <td className="p-4 border border-line">Alta Resistência (Cano Sujo/Estreito)</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Parênquima</td>
                  <td className="p-4 border border-line">Destruído (↓ Tração Radial)</td>
                  <td className="p-4 border border-line">Inflamado, mas mais íntegro</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Via Aérea</td>
                  <td className="p-4 border border-line">Lúmen preservado, parede flácida</td>
                  <td className="p-4 border border-line">Obstruído por muco e edema</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Momento do Colapso</td>
                  <td className="p-4 border border-line">Tardio na expiração (fecha de repente)</td>
                  <td className="p-4 border border-line">Precoce na expiração (gradual)</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Freno Labial</td>
                  <td className="p-4 border border-line font-bold text-emerald-400">MUITO EFICAZ</td>
                  <td className="p-4 border border-line text-rose-400">Pouco eficaz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. CONVERGÊNCIA: HIPERINSUFLAÇÃO */}
      <section id="convergence">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <Maximize2 size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">A Convergência: Hiperinsuflação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-line bg-slate-800/50">
            <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
              <Minimize2 size={18} className="text-brand-blue" />
              Desfecho Mecânico Comum
            </h4>
            <div className="space-y-3">
              {[
                "Ar entra mais fácil do que sai.",
                "Inspiração começa antes do esvaziamento (Air Trapping).",
                "Volume residual sobe progressivamente.",
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-ink">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 border-rose-500/20 bg-rose-500/5">
            <h4 className="font-bold text-rose-400 mb-4 flex items-center gap-2">
              <AlertCircle size={18} />
              Consequência Final
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-rose-400 font-bold text-xs">1.</div>
                <p className="text-xs text-ink leading-relaxed">
                  <span className="font-bold">Rebaixamento do diafragma:</span> Desvantagem mecânica severa.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 text-rose-400 font-bold text-xs">2.</div>
                <p className="text-xs text-ink leading-relaxed">
                  <span className="font-bold">Dispneia:</span> O esforço para respirar aumenta drasticamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
