import React from 'react';
import { LayoutDashboard, Target, AlertTriangle, Activity } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function HASClassification() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. CLASSIFICAÇÃO DA PA */}
      <section id="bp-classification">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Classificação da Pressão Arterial</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {[
            { stage: 'Ótima', pas: '< 120', pad: '< 80', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
            { stage: 'Normal', pas: '120–129', pad: '80–84', color: 'text-emerald-600', bg: 'bg-emerald-500/5', border: 'border-emerald-500/20' },
            { stage: 'Pré-hipertensão', pas: '130–139', pad: '85–89', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30' },
            { stage: 'HAS Estágio 1', pas: '140–159', pad: '90–99', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
            { stage: 'HAS Estágio 2', pas: '160–179', pad: '100–109', color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500/30' },
            { stage: 'HAS Estágio 3', pas: '≥ 180', pad: '≥ 110', color: 'text-rose-700', bg: 'bg-rose-700/10', border: 'border-rose-700/30' }
          ].map((item, i) => (
            <div key={i} className={cn("card p-5 border text-center flex flex-col items-center justify-center gap-2", item.border, item.bg)}>
              <h3 className={cn("font-black text-lg", item.color)}>{item.stage}</h3>
              <div className="flex gap-4 mt-2">
                <div>
                  <p className="text-xs text-ink-muted uppercase">PAS</p>
                  <p className="font-bold text-ink">{item.pas}</p>
                </div>
                <div className="w-px bg-line" />
                <div>
                  <p className="text-xs text-ink-muted uppercase">PAD</p>
                  <p className="font-bold text-ink">{item.pad}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. ESTRATIFICAÇÃO DE RISCO CV */}
      <section id="cv-risk">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <LayoutDashboard size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Estratificação de Risco CV Global</h2>
        </div>

        <p className="text-sm text-ink-muted mb-4">
          A decisão de tratar farmacologicamente e a meta pressórica dependem do risco CV global, não apenas do nível de PA.
        </p>

        <div className="card overflow-hidden border-line mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/10">
                  <th className="p-3 border border-line font-bold text-brand-navy">Estágio HA</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">Sem FRCV</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">1–2 FRCV</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">≥ 3 FRCV / SM / LOA</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">DM / DRC 3 / Doença CV</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-3 border border-line font-medium">Pré-hipertensão</td>
                  <td className="p-3 border border-line text-emerald-600">Baixo</td>
                  <td className="p-3 border border-line text-emerald-600">Baixo</td>
                  <td className="p-3 border border-line text-amber-600">Moderado</td>
                  <td className="p-3 border border-line font-bold text-rose-500">Alto</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-medium">Estágio 1</td>
                  <td className="p-3 border border-line text-emerald-600">Baixo</td>
                  <td className="p-3 border border-line text-amber-600">Moderado</td>
                  <td className="p-3 border border-line font-bold text-rose-500">Alto</td>
                  <td className="p-3 border border-line font-black text-rose-700">Muito Alto</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-medium">Estágio 2</td>
                  <td className="p-3 border border-line text-amber-600">Moderado</td>
                  <td className="p-3 border border-line text-orange-500">Mod/Alto</td>
                  <td className="p-3 border border-line font-bold text-rose-500">Alto</td>
                  <td className="p-3 border border-line font-black text-rose-700">Muito Alto</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-medium">Estágio 3</td>
                  <td className="p-3 border border-line font-bold text-rose-500">Alto</td>
                  <td className="p-3 border border-line font-black text-rose-700">Muito Alto</td>
                  <td className="p-3 border border-line font-black text-rose-700">Muito Alto</td>
                  <td className="p-3 border border-line font-black text-rose-700">Muito Alto</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex gap-4 items-start">
          <AlertTriangle className="text-rose-600 shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-rose-800">
            <strong>Risco Alto / Muito Alto:</strong> Iniciar tratamento farmacológico IMEDIATAMENTE, independentemente de tentativa de MEV isolada. Meta &lt; 130/80 mmHg.
          </p>
        </div>
      </section>

      {/* 3. METAS PRESSÓRICAS */}
      <section id="bp-targets">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Target size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Metas Pressóricas Individualizadas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card p-5 border-line bg-emerald-50">
            <h4 className="font-bold text-emerald-800 mb-2">Meta Padrão (Maioria)</h4>
            <div className="text-2xl font-black text-emerald-600 mb-2">&lt; 130/80 mmHg</div>
            <p className="text-xs text-emerald-700">Adultos jovens/meia-idade, alto risco CV, DM2, DRC, IC.</p>
          </div>
          
          <div className="card p-5 border-line bg-amber-50">
            <h4 className="font-bold text-amber-800 mb-2">Idoso Frágil / ≥ 80 anos</h4>
            <div className="text-2xl font-black text-amber-600 mb-2">&lt; 140/90 mmHg</div>
            <p className="text-xs text-amber-700">Até 150 se necessário. Evitar hipotensão ortostática e quedas.</p>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20">
          <h4 className="font-bold text-brand-navy text-sm mb-2">Fenômeno da "Curva em J"</h4>
          <p className="text-sm text-brand-blue/80">
            PA diastólica <strong>&lt; 60–65 mmHg</strong> em coronariopatas aumenta o risco de IAM, pois o fluxo coronariano depende da diástole. Em pacientes com DAC, a meta da PAD é ≥ 65–70 mmHg.
          </p>
        </div>
      </section>
    </div>
  );
}
