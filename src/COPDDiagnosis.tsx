import React from 'react';
import { 
  Activity, 
  AlertTriangle, 
  CheckCircle2, 
  Wind, 
  Search, 
  ArrowRight,
  Info,
  Stethoscope
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function COPDDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. ESPIROMETRIA */}
      <section id="spirometry">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Wind size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Confirmação Diagnóstica: A Espirometria</h2>
        </div>

        <div className="card p-8 border-brand-blue/30 bg-gradient-to-br from-slate-900 to-brand-navy relative overflow-hidden mb-6">
          <div className="absolute -right-4 -bottom-4 opacity-10 text-brand-blue">
            <Activity size={120} />
          </div>
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white mb-2">O Padrão-Ouro</h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed max-w-2xl">
              A espirometria é o eletrocardiograma do pneumologista. Ela mede volumes e fluxos pulmonares, traduzindo em números a obstrução. <strong className="text-brand-blue">A regra é clara: sem espirometria, não há diagnóstico de DPOC.</strong>
            </p>

            <div className="p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-amber-400" size={24} />
                <h4 className="text-base font-bold text-amber-400 uppercase tracking-wider">Critério Obrigatório</h4>
              </div>
              <p className="text-sm text-slate-200 mb-4">
                Após a administração de um Broncodilatador (Prova Broncodilatadora - PBD), para excluir asma, o achado deve ser:
              </p>
              <div className="bg-slate-900/80 p-4 rounded-xl border border-brand-blue/30 text-center mb-4">
                <span className="text-3xl font-black text-white tracking-tight">VEF1 / CVF &lt; 0,70</span>
              </div>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                  <span><strong className="text-white">VEF1:</strong> Volume de ar expirado no primeiro segundo. Baixo devido ao colapso da via (PIP deslocado).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0 mt-1.5" />
                  <span><strong className="text-white">CVF:</strong> Capacidade Vital Forçada (volume total de ar expirado).</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                  <span><strong className="text-white">Significado:</strong> Razão &lt; 70% indica obstrução <strong className="text-amber-400">fixa e não totalmente reversível</strong>.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIAGNÓSTICO DIFERENCIAL */}
      <section id="differential">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Search size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Diagnóstico Diferencial: DPOC vs. Asma</h2>
        </div>

        <div className="card overflow-hidden border-line mb-6">
          <div className="bg-brand-navy p-4 text-white font-bold text-center">
            A Prova Broncodilatadora (PBD)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/10">
                  <th className="p-4 border border-line font-bold text-brand-navy">Característica</th>
                  <th className="p-4 border border-line font-bold text-brand-blue">DPOC</th>
                  <th className="p-4 border border-line font-bold text-emerald-600">Asma</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-4 border border-line font-medium text-ink">Relação VEF1/CVF Pré-BD</td>
                  <td className="p-4 border border-line text-ink-muted">&lt; 0,70</td>
                  <td className="p-4 border border-line text-ink-muted">Pode estar normal ou baixa na crise</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-medium text-ink">Relação VEF1/CVF Pós-BD</td>
                  <td className="p-4 border border-line font-bold text-brand-blue">&lt; 0,70 (Obstrução Fixa)</td>
                  <td className="p-4 border border-line font-bold text-emerald-600">&gt; 0,70 (Reverteu)</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-medium text-ink">Resposta ao Broncodilatador (Δ VEF1)</td>
                  <td className="p-4 border border-line text-ink-muted">Geralmente &lt; 200 mL e &lt; 12%</td>
                  <td className="p-4 border border-line font-bold text-emerald-600">≥ 200 mL E ≥ 12% (Reversibilidade)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex gap-4 items-start">
          <Info className="text-emerald-600 shrink-0 mt-0.5" size={20} />
          <p className="text-xs text-emerald-800 leading-relaxed italic">
            <strong>Nota de Prova:</strong> Um estudo sugere que um aumento de <strong>≥ 10% do VEF1 previsto</strong> tem alta especificidade (91%) para asma.
          </p>
        </div>
      </section>

      {/* 3. ROTEIRO MENTAL */}
      <section id="roadmap">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <CheckCircle2 size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Roteiro Mental para Diagnóstico</h2>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-line" />
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Suspeita Clínica',
                desc: 'Tosse crônica + Dispneia + Exposição (Tabaco/Fumaça) + Fase Expiratória Prolongada (>6s) + Freno Labial.',
                icon: Stethoscope,
                color: 'text-brand-blue',
                bg: 'bg-brand-blue/10',
                border: 'border-brand-blue/30'
              },
              {
                step: '2',
                title: 'Confirmação',
                desc: 'Solicitar Espirometria Completa com Prova Broncodilatadora (PBD).',
                icon: Activity,
                color: 'text-amber-500',
                bg: 'bg-amber-500/10',
                border: 'border-amber-500/30'
              },
              {
                step: '3',
                title: 'Laudo',
                desc: 'VEF1/CVF PÓS-BD < 0,70.',
                icon: CheckCircle2,
                color: 'text-emerald-500',
                bg: 'bg-emerald-500/10',
                border: 'border-emerald-500/30'
              },
              {
                step: '4',
                title: 'Estadiamento',
                desc: 'Classificar em GOLD 1, 2, 3 ou 4 (pelo VEF1 isolado).',
                icon: ArrowRight,
                color: 'text-brand-pink',
                bg: 'bg-brand-pink/10',
                border: 'border-brand-pink/30'
              },
              {
                step: '5',
                title: 'Estratificação de Risco',
                desc: 'Classificar em Grupo A, B ou E (pelas exacerbações e sintomas) para escolher o tratamento.',
                icon: ArrowRight,
                color: 'text-purple-500',
                bg: 'bg-purple-500/10',
                border: 'border-purple-500/30'
              }
            ].map((item, i) => (
              <div key={i} className="relative flex items-start gap-6">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center shrink-0 border-2 bg-card relative z-10", item.border, item.color)}>
                  <span className="font-black text-lg">{item.step}</span>
                </div>
                <div className={cn("card p-5 border-line flex-1 hover:shadow-md transition-all", item.bg)}>
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon size={18} className={item.color} />
                    <h4 className="font-bold text-brand-navy">{item.title}</h4>
                  </div>
                  <p className="text-sm text-ink-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
