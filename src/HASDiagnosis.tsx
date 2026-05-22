import React from 'react';
import { Activity, Search, FileText, AlertTriangle, HeartPulse, Clock } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function HASDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. AFERIÇÃO E MÉTODOS DIAGNÓSTICOS */}
      <section id="measurement">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <HeartPulse size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Aferição e Métodos Diagnósticos</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="card p-6 border-line">
            <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
              <Clock size={18} className="text-brand-blue" />
              Técnica de Aferição
            </h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li>• <strong>Repouso:</strong> ≥ 5 min em ambiente calmo.</li>
              <li>• <strong>Posição:</strong> Sentado, dorso apoiado, pernas não cruzadas, braço na altura do coração.</li>
              <li>• <strong>Braço:</strong> 1ª consulta medir em ambos; usar o maior valor como referência.</li>
              <li>• <strong>Manguito:</strong> Largura ≥ 40% e câmara ≥ 80% da circunferência do braço.</li>
              <li>• <strong>Idosos/Diabéticos:</strong> Medir hipotensão ortostática (após 1 e 3 min em pé).</li>
            </ul>
          </div>

          <div className="card p-6 border-line bg-slate-800/5">
            <h3 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
              <Activity size={18} className="text-emerald-500" />
              Métodos Diagnósticos
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <strong className="text-ink">Consultório:</strong> PA ≥ 140/90 mmHg em ≥ 2 ocasiões distintas. (Diagnóstico definitivo na 1ª consulta apenas se Estágio 3 ou com LOA).
              </div>
              <div className="bg-emerald-50 p-3 rounded border border-emerald-200">
                <strong className="text-emerald-800">MAPA (Padrão-Ouro):</strong> Monitoriza 24h. Detecta descenso noturno. Indicado para suspeita de Avental Branco, Mascarada ou HAS resistente.
              </div>
              <div>
                <strong className="text-ink">MRPA:</strong> Automedição domiciliar (3 dias, 2x ao dia). Sem medidas do sono.
              </div>
            </div>
          </div>
        </div>

        {/* Fenótipos MAPA */}
        <div className="card overflow-hidden border-line">
          <div className="bg-brand-navy p-4 text-white font-bold text-center">
            Fenótipos Hipertensivos (MAPA)
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/10">
                  <th className="p-3 border border-line font-bold text-brand-navy">Fenótipo</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">Consultório</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">MAPA</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">Significado Clínico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-3 border border-line font-medium">Normotensão</td>
                  <td className="p-3 border border-line">&lt; 140/90</td>
                  <td className="p-3 border border-line">&lt; 130/80</td>
                  <td className="p-3 border border-line text-ink-muted">Sem risco aumentado</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-medium text-rose-600">HAS Confirmada</td>
                  <td className="p-3 border border-line font-bold">≥ 140/90</td>
                  <td className="p-3 border border-line font-bold">≥ 130/80</td>
                  <td className="p-3 border border-line text-ink-muted">Tratamento indicado</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-medium text-amber-600">Avental Branco (HAB)</td>
                  <td className="p-3 border border-line font-bold">≥ 140/90</td>
                  <td className="p-3 border border-line">&lt; 130/80</td>
                  <td className="p-3 border border-line text-ink-muted">Risco intermediário; reavaliar</td>
                </tr>
                <tr className="bg-rose-50">
                  <td className="p-3 border border-line font-bold text-rose-700">HAS Mascarada (HM)</td>
                  <td className="p-3 border border-line">&lt; 140/90</td>
                  <td className="p-3 border border-line font-bold text-rose-600">≥ 130/80</td>
                  <td className="p-3 border border-line font-bold text-rose-700">Alto risco! Prognóstico PIOR que HAB.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 2. EXAMES BASAIS */}
      <section id="basal-exams">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <FileText size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Exames Complementares Basais</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Urina I (EQU)', desc: 'Hematúria, proteinúria (LOA renal)' },
            { name: 'Potássio Sérico', desc: 'Hipocalemia → pensar em hiperaldosteronismo' },
            { name: 'Creatinina + TFG', desc: 'Estadiar DRC; orientar fármaco' },
            { name: 'Glicemia + HbA1c', desc: 'Rastrear DM (FRCV major)' },
            { name: 'Lipidograma', desc: 'Estimar risco CV global' },
            { name: 'Ácido Úrico', desc: 'Contraindicação relativa a tiazídicos' },
            { name: 'Microalbuminúria', desc: 'Marcador precoce de LOA renal/endotelial' },
            { name: 'ECG 12 derivações', desc: 'HVE, isquemia, FA, bloqueios' }
          ].map((exam, i) => (
            <div key={i} className="card p-4 border-line bg-slate-50">
              <h4 className="font-bold text-brand-navy text-sm mb-1">{exam.name}</h4>
              <p className="text-xs text-ink-muted">{exam.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. HAS SECUNDÁRIA */}
      <section id="secondary-htn">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <Search size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Hipertensão Arterial Secundária</h2>
        </div>

        <p className="text-sm text-ink-muted mb-6">
          Prevalência de 10–20%. Investigar em: HAS início precoce (&lt;30 anos), HAS grave/resistente, perda de controle ou pistas clínicas.
        </p>

        <div className="space-y-4">
          {[
            {
              cause: 'Feocromocitoma',
              suspect: 'Tríade: cefaleia + palpitações + sudorese. Crises paroxísticas.',
              investigate: 'Metanefrinas plasmáticas ou catecolaminas urinárias 24h.',
              note: 'Pode mimetizar pânico. α-bloqueio ANTES do BB.'
            },
            {
              cause: 'Hiperaldosteronismo Primário',
              suspect: 'HAS + hipocalemia espontânea/grave com diurético. HAS resistente.',
              investigate: 'Relação Aldosterona/Renina > 30. TC de adrenal.',
              note: 'Causa mais comum de HAS secundária. Tratar com Espironolactona.'
            },
            {
              cause: 'SAOS',
              suspect: 'Obesidade, ronco, apneias, ausência de descenso noturno na MAPA.',
              investigate: 'Polissonografia (padrão-ouro).',
              note: 'HAS refratária sem CPAP não é verdadeiramente resistente.'
            },
            {
              cause: 'Estenose de Artéria Renal',
              suspect: 'HAS < 30 anos (mulher/displasia) ou > 55 anos (aterosclerose). Piora renal com IECA/BRA.',
              investigate: 'Doppler de artérias renais (1ª linha).',
              note: 'IECA/BRA piora função renal na estenose bilateral.'
            },
            {
              cause: 'Coarctação de Aorta',
              suspect: 'PAS MMSS > PAS MMII. Pulso femoral fraco. HAS em jovem.',
              investigate: 'AngioTC/RM de aorta; Ecocardiograma.',
              note: 'Palpação simultânea radial/femoral: delay = sinal clássico.'
            }
          ].map((item, i) => (
            <div key={i} className="card p-5 border-line flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4">
                <h4 className="font-bold text-brand-navy">{item.cause}</h4>
              </div>
              <div className="md:w-3/4 space-y-2 text-sm">
                <p><strong className="text-ink">Suspeita:</strong> <span className="text-ink-muted">{item.suspect}</span></p>
                <p><strong className="text-ink">Investigação:</strong> <span className="text-ink-muted">{item.investigate}</span></p>
                <p className="text-xs text-amber-700 bg-amber-50 p-2 rounded border border-amber-200">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
