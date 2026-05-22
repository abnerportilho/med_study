import React from 'react';
import { 
  Pill, 
  ShieldCheck, 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Zap,
  Heart,
  Activity,
  Droplets,
  Scale
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function CKDTreatment() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. PILARES DA NEFROPROTEÇÃO */}
      <section id="nephroprotection">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Pilares da Nefroproteção (KDIGO 2024)</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* IECA ou BRA */}
          <div className="card p-6 border-brand-blue/20 bg-brand-blue/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white">
                <Pill size={18} />
              </div>
              <h3 className="font-bold text-brand-navy">IECA ou BRA</h3>
            </div>
            <ul className="space-y-2 text-xs text-ink leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Indicado para todos com <span className="font-bold text-brand-blue">Albuminúria A2 ou A3</span> (RAC ≥ 30 mg/g).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Alvo de PA: <span className="font-bold">&lt; 120 mmHg (Sistólica)</span> se tolerado.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle size={14} className="text-amber-500 shrink-0 mt-0.5" />
                <span>Monitorar K+ e Creatinina em 2-4 semanas. Aceitável ↑ Cr até 30%.</span>
              </li>
            </ul>
          </div>

          {/* iSGLT2 */}
          <div className="card p-6 border-emerald-500/20 bg-emerald-500/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <Zap size={18} />
              </div>
              <h3 className="font-bold text-brand-navy">iSGLT2 (Dapagliflozina/Empagliflozina)</h3>
            </div>
            <ul className="space-y-2 text-xs text-ink leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Indicado se <span className="font-bold">eTFG ≥ 20</span> e albuminúria (mesmo sem DM).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>Redução drástica de progressão para diálise e morte CV.</span>
              </li>
              <li className="flex items-start gap-2">
                <Info size={14} className="text-brand-blue shrink-0 mt-0.5" />
                <span>Pode manter até o início da diálise, mesmo se eTFG cair &lt; 20 após início.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Outras Terapias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Estatinas", desc: "Indicado para todos > 50 anos com DRC (Prevenção CV).", icon: Heart },
            { title: "Dieta", desc: "Proteína 0.8g/kg/dia. Sódio < 2g/dia.", icon: Scale },
            { title: "Controle Glicêmico", desc: "Alvo HbA1c ~7.0% (individualizar).", icon: Activity },
          ].map((item, i) => (
            <div key={i} className="card p-4 border-line flex items-start gap-3">
              <div className="text-brand-blue mt-1">
                <item.icon size={18} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-brand-navy mb-1">{item.title}</h4>
                <p className="text-[10px] text-ink-muted leading-tight">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. MANEJO DE COMPLICAÇÕES */}
      <section id="complications">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink">
            <AlertCircle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Manejo de Complicações</h2>
        </div>

        <div className="space-y-4">
          {/* Anemia */}
          <div className="card p-5 border-line">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-brand-navy flex items-center gap-2">
                <Droplets size={18} className="text-rose-500" />
                Anemia da DRC
              </h3>
              <span className="text-[10px] bg-rose-500/10 text-rose-500 px-2 py-0.5 rounded font-bold">Hb Alvo: 10-11.5 g/dL</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-ink uppercase">1. Reposição de Ferro</p>
                <p className="text-[10px] text-ink-muted">Garantir estoques (Ferritina &gt; 100 e Sat. Transferrina &gt; 20%) antes de iniciar EPO.</p>
              </div>
              <div className="space-y-2">
                <p className="text-[11px] font-bold text-ink uppercase">2. Agentes Estimuladores (ESA)</p>
                <p className="text-[10px] text-ink-muted">Eritropoetina se Hb &lt; 10. Cuidado com risco de trombose se Hb &gt; 13.</p>
              </div>
            </div>
          </div>

          {/* Distúrbio Mineral e Ósseo */}
          <div className="card p-5 border-line">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-4">
              <Activity size={18} className="text-amber-500" />
              Distúrbio Mineral e Ósseo (DMO-DRC)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3 rounded-lg bg-slate-800/50 border border-line">
                <p className="text-[10px] font-bold text-amber-500 mb-1">Fósforo</p>
                <p className="text-[9px] text-ink-muted">Manter em níveis normais. Usar quelantes (Sevelamer, Carbonato de Cálcio) com as refeições.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50 border border-line">
                <p className="text-[10px] font-bold text-amber-500 mb-1">Vitamina D</p>
                <p className="text-[9px] text-ink-muted">Repor Colecalciferol se deficiência. Calcitriol se PTH persistente elevado.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/50 border border-line">
                <p className="text-[10px] font-bold text-amber-500 mb-1">PTH</p>
                <p className="text-[9px] text-ink-muted">Alvo no G5: 2 a 9 vezes o limite superior da normalidade.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CRITÉRIOS DE ENCAMINHAMENTO */}
      <section id="referral">
        <div className="card p-6 border-brand-blue/40 bg-brand-navy/30">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <ArrowRight className="text-brand-blue" />
            Quando encaminhar ao Nefrologista?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "eTFG < 30 mL/min (Estágios G4 e G5).",
              "Albuminúria grave (RAC > 300 mg/g).",
              "Queda rápida da eTFG (> 5 mL/min/ano).",
              "Hematúria persistente ou cilindros hemáticos.",
              "Hipertensão resistente (4+ drogas).",
              "Potássio persistente > 5.5 mEq/L.",
              "Doença renal hereditária (ex: Rins Policísticos).",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-xs text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREPARAÇÃO PARA TERAPIA SUBSTITUTIVA */}
      <section id="dialysis-prep">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Preparação para Diálise/Transplante</h2>
        </div>
        <div className="card p-6 border-line bg-slate-800/30">
          <p className="text-sm text-ink-muted mb-4">Deve ser iniciada quando a <span className="text-brand-blue font-bold">eTFG &lt; 15-20</span>.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-brand-blue uppercase">Acesso Vascular</h4>
              <p className="text-[10px] text-ink-muted">Confecção de FAV (Fístula Arteriovenosa) idealmente 6 meses antes do início previsto.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-brand-blue uppercase">Vacinação</h4>
              <p className="text-[10px] text-ink-muted">Hepatite B (dose dobrada), Pneumococo, Influenza.</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-brand-blue uppercase">Educação</h4>
              <p className="text-[10px] text-ink-muted">Escolha da modalidade: Hemodiálise, Diálise Peritoneal ou Transplante Preemptivo.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
