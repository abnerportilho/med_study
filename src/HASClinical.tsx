import React from 'react';
import { Stethoscope, Eye, Heart, Brain, Activity, AlertCircle, AlertTriangle, Droplet } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function HASClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. APRESENTAÇÃO CLÍNICA */}
      <section id="clinical-presentation">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Stethoscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Apresentação Clínica</h2>
        </div>

        <div className="card p-6 border-line mb-6 bg-slate-50">
          <p className="text-sm text-ink-muted leading-relaxed mb-4">
            Aproximadamente <strong className="text-rose-500">50% dos hipertensos são assintomáticos</strong>. Quando presentes, os sintomas são inespecíficos:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-ink">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Cefaleia occipital (especialmente matinal)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Cervicalgia, tontura, zumbidos, escotomas
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Fadiga, dispneia aos esforços (LOA cardíaca)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              Dor torácica (LOA coronariana ou dissecção)
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 flex gap-4 items-start">
          <AlertTriangle className="text-rose-500 shrink-0 mt-0.5" size={20} />
          <div className="text-sm text-rose-800">
            <p className="font-bold mb-1">Atenção aos Sinais de Alarme:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li><strong>Cefaleia + palpitações + sudorese em crises:</strong> Pensar em FEOCROMOCITOMA.</li>
              <li><strong>Cefaleia + PA &gt; 180/120 + LOA:</strong> Emergência Hipertensiva (necessita redução de PA em minutos-horas com droga EV).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. LESÕES DE ÓRGÃO-ALVO (LOA) */}
      <section id="target-organ-damage">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Lesões de Órgão-Alvo (LOA)</h2>
        </div>

        {/* Retinopatia */}
        <div className="card overflow-hidden border-line mb-8">
          <div className="bg-[#505252] p-4 text-white font-bold flex items-center gap-2">
            <Eye size={18} />
            Retinopatia Hipertensiva (Fundo de Olho)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/10">
                  <th className="p-3 border border-line font-bold text-brand-navy">Grau</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">Achado Fundoscópico</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">Correlação Clínica</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-3 border border-line font-bold">Grau 1</td>
                  <td className="p-3 border border-line">Estreitamento arteriolar difuso (fio de cobre)</td>
                  <td className="p-3 border border-line text-ink-muted">HAS de longa data; baixo risco isolado</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-bold">Grau 2</td>
                  <td className="p-3 border border-line">Cruzamentos AV patológicos (Gunn/Salus)</td>
                  <td className="p-3 border border-line text-ink-muted">Maior rigidez arteriolar; moderado risco CV</td>
                </tr>
                <tr className="bg-rose-50/50">
                  <td className="p-3 border border-line font-bold text-rose-600">Grau 3</td>
                  <td className="p-3 border border-line">Hemorragias e/ou exsudatos (algodão)</td>
                  <td className="p-3 border border-line text-rose-700 font-medium">HAS grave; alto risco; urgência de controle</td>
                </tr>
                <tr className="bg-rose-100/50">
                  <td className="p-3 border border-line font-bold text-rose-700">Grau 4</td>
                  <td className="p-3 border border-line">Edema de papila + achados do Grau 3</td>
                  <td className="p-3 border border-line text-rose-800 font-bold">Emergência hipertensiva / HAS maligna</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Outras LOAs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 border-line">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3">
              <Heart size={18} className="text-rose-500" /> Coração
            </h3>
            <p className="text-sm text-ink-muted">
              <strong>HVE (Hipertrofia Ventricular Esquerda)</strong> concêntrica. No ECG: Critério de Sokolow-Lyon ≥ 35mm.
            </p>
          </div>
          <div className="card p-5 border-line">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3">
              <Activity size={18} className="text-amber-500" /> Rim e Vasos
            </h3>
            <p className="text-sm text-ink-muted">
              <strong>Rim:</strong> TFG &lt; 60 ml/min; microalbuminúria 30–300 mg/24h.<br/>
              <strong>Vasos:</strong> ITB &lt; 0,9; Placa carotídea ≥ 0,9 mm.
            </p>
          </div>
          <div className="card p-5 border-line">
            <h3 className="font-bold text-brand-navy flex items-center gap-2 mb-3">
              <Brain size={18} className="text-brand-blue" /> Cérebro
            </h3>
            <p className="text-sm text-ink-muted">
              Lacunas, leucoaraiose, microaneurismas visíveis em TC/RM (se sintomas).
            </p>
          </div>
        </div>
      </section>

      {/* 3. COMPLICAÇÕES */}
      <section id="complications">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <AlertCircle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Principais Complicações</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'IAM / SCA', desc: 'Lesão endotelial → aterosclerose acelerada, ruptura de placa.', icon: Heart, color: 'text-rose-500' },
            { title: 'AVC (Isquêmico/Hemorrágico)', desc: 'Aterosclerose + tromboembolismo ou lesão de pequenos vasos (lipohialinose).', icon: Brain, color: 'text-brand-blue' },
            { title: 'Insuficiência Cardíaca', desc: 'Sobrecarga pressórica → HVE concêntrica → disfunção diastólica (ICFEP).', icon: Activity, color: 'text-amber-500' },
            { title: 'Fibrilação Atrial', desc: 'HVE + fibrose atrial → reentrada elétrica.', icon: Activity, color: 'text-purple-500' },
            { title: 'Nefropatia Hipertensiva', desc: 'Hiperfiltração → esclerose focal segmentar → proteinúria → DRC.', icon: Droplet, color: 'text-emerald-500' },
            { title: 'Dissecção Aórtica', desc: 'Estresse parietal → degeneração da camada média. Dor "em rasgo".', icon: AlertTriangle, color: 'text-rose-600' }
          ].map((comp, i) => (
            <div key={i} className="card p-4 border-line flex items-start gap-3 hover:border-slate-300 transition-colors">
              <comp.icon size={20} className={cn("shrink-0 mt-0.5", comp.color)} />
              <div>
                <h4 className="font-bold text-brand-navy text-sm">{comp.title}</h4>
                <p className="text-xs text-ink-muted mt-1">{comp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
