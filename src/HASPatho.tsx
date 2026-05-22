import React from 'react';
import { Globe, AlertTriangle, Activity, Heart, Droplet, Brain, Wind } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function HASPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. EPIDEMIOLOGIA */}
      <section id="epidemiology">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Globe size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Epidemiologia</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="card p-5 border-line bg-slate-50">
            <h3 className="text-sm font-bold text-brand-navy mb-1">Prevalência Mundial</h3>
            <p className="text-2xl font-black text-brand-blue">1 bilhão</p>
            <p className="text-xs text-ink-muted mt-1">Projeção de 1,5 bilhão até 2025 (&gt;1/3 da pop. global).</p>
          </div>
          <div className="card p-5 border-line bg-slate-50">
            <h3 className="text-sm font-bold text-brand-navy mb-1">Impacto Cardiovascular</h3>
            <p className="text-2xl font-black text-rose-500">2/3 dos AVCs</p>
            <p className="text-xs text-ink-muted mt-1">E responsável por ~50% de todos os IAMs.</p>
          </div>
          <div className="card p-5 border-line bg-slate-50">
            <h3 className="text-sm font-bold text-brand-navy mb-1">Cenário no Brasil</h3>
            <p className="text-2xl font-black text-emerald-500">~28%</p>
            <p className="text-xs text-ink-muted mt-1">Média de sal: 9,3 g/dia (meta é &lt;2 g/dia de sódio).</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex gap-4 items-start">
          <AlertTriangle className="text-brand-blue shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-brand-navy leading-relaxed">
            <strong>Correlação Clínica:</strong> A HAS é <strong>assintomática em ~50% dos casos</strong> — o diagnóstico ativo por triagem é fundamental.
          </p>
        </div>
      </section>

      {/* 2. FATORES DE RISCO */}
      <section id="risk-factors">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Fatores de Risco</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Não Modificáveis */}
          <div className="card p-6 border-line">
            <h3 className="font-bold text-brand-navy mb-4 border-b border-line pb-2">Não Modificáveis</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <strong className="text-ink">Idade:</strong> &gt; 55 anos ou &gt; 65 anos (rigidez arterial, disfunção endotelial progressiva).
              </li>
              <li>
                <strong className="text-ink">Sexo:</strong> Maior prevalência em homens até a menopausa; após, equipara-se.
              </li>
              <li>
                <strong className="text-ink">Hereditariedade/Genética:</strong> Polimorfismos em genes β-adrenérgicos e do SRAA.
              </li>
              <li className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                <strong className="text-amber-800">Etnia (Afrodescendentes):</strong> Maior prevalência e pior controle. Possuem atividade de renina plasmática menor.
                <div className="mt-2 text-xs text-amber-700 font-medium">
                  → Respondem melhor a BCC di-hidropiridínicos e diuréticos tiazídicos. IECA/BRA isolados têm eficácia reduzida.
                </div>
              </li>
            </ul>
          </div>

          {/* Modificáveis */}
          <div className="card p-6 border-line">
            <h3 className="font-bold text-brand-navy mb-4 border-b border-line pb-2">Modificáveis</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between items-center">
                <span className="font-medium text-ink">Obesidade / Sobrepeso</span>
                <span className="text-xs text-ink-muted bg-slate-100 px-2 py-1 rounded">Leptina ↑ simpático</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium text-ink">Excesso de Sódio</span>
                <span className="text-xs text-ink-muted bg-slate-100 px-2 py-1 rounded">↑ volemia, rigidez</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium text-ink">Sedentarismo</span>
                <span className="text-xs text-ink-muted bg-slate-100 px-2 py-1 rounded">↑ resistência vascular</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium text-ink">Tabagismo e Álcool</span>
                <span className="text-xs text-ink-muted bg-slate-100 px-2 py-1 rounded">Vasoconstrição / ↑ simpático</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium text-ink">Déficit de Potássio</span>
                <span className="text-xs text-ink-muted bg-slate-100 px-2 py-1 rounded">↑ retenção de Na+</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium text-ink">SAOS (Apneia do Sono)</span>
                <span className="text-xs text-ink-muted bg-slate-100 px-2 py-1 rounded">Hipóxia → ↑ simpático noturno</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. FISIOPATOLOGIA */}
      <section id="pathophysiology">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Fisiopatologia</h2>
        </div>

        <div className="bg-slate-900 text-white p-6 rounded-2xl mb-8 text-center border border-brand-blue/30">
          <p className="text-sm text-slate-300 mb-2">A pressão arterial é determinada por:</p>
          <div className="text-3xl font-black tracking-wider text-brand-blue">PA = DC × RVP</div>
          <p className="text-xs text-slate-400 mt-2">Débito Cardíaco (Volume Sistólico × FC) × Resistência Vascular Periférica</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hiperativação Simpática */}
          <div className="card p-6 border-line">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-4">
              <Wind size={18} className="text-brand-blue" />
              Hiperativação Simpática
            </h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li>• <strong className="text-ink">β1-adrenérgico (coração):</strong> ↑ FC e contratilidade → ↑ DC</li>
              <li>• <strong className="text-ink">α1-adrenérgico (vasos):</strong> vasoconstrição → ↑ RVP</li>
              <li>• <strong className="text-ink">β1-adrenérgico (rim):</strong> ↑ secreção de renina → ativação SRAA</li>
              <li>• <strong className="text-ink">ADH:</strong> estimulado pela noradrenalina → retenção de H₂O</li>
              <li>• <strong className="text-ink">Barorreceptores:</strong> dessensibilização progressiva → perda do reflexo vagal</li>
            </ul>
          </div>

          {/* SRAA */}
          <div className="card p-6 border-line">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-4">
              <Droplet size={18} className="text-rose-500" />
              Sistema Renina-Angiotensina-Aldosterona
            </h3>
            <p className="text-sm text-ink-muted mb-3">
              A <strong>Angiotensina II</strong> é o principal efetor, agindo em dois receptores:
            </p>
            <ul className="space-y-3 text-sm text-ink-muted mb-4">
              <li>• <strong className="text-rose-600">AT1:</strong> Vasoconstrição, retenção Na+/H₂O, hipertrofia, liberação de aldosterona.</li>
              <li>• <strong className="text-emerald-600">AT2 ("protetor"):</strong> Vasodilatação, natriurese, antiproliferação (maximizado pelo BRA).</li>
            </ul>
            <div className="bg-rose-50 p-3 rounded border border-rose-200 text-xs text-rose-800">
              <strong>Farmacologia:</strong> IECA bloqueia conversão de Ang I → Ang II (↑ bradicinina → tosse). BRA bloqueia receptor AT1. <strong>IECA + BRA é CONTRAINDICADO</strong> (risco de hipercalemia e IRA).
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
