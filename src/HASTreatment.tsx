import React from 'react';
import { Pill, ShieldCheck, AlertTriangle, Activity, HeartPulse, Zap } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function HASTreatment() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. TRATAMENTO NÃO MEDICAMENTOSO (MEV) */}
      <section id="mev">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Tratamento Não Medicamentoso (MEV)</h2>
        </div>

        <p className="text-sm text-ink-muted mb-6">
          Indicado para TODOS os hipertensos (e pré-hipertensos), como adjuvante. Nunca deve atrasar o início de fármaco em pacientes de alto risco.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Redução de Peso', desc: 'A mais eficaz. 1–2 mmHg por kg perdido.', icon: Activity, color: 'text-emerald-500' },
            { title: 'Dieta DASH', desc: 'Rica em frutas/vegetais, pobre em gordura. Reduz 8–14 mmHg.', icon: HeartPulse, color: 'text-brand-blue' },
            { title: 'Restrição de Sódio', desc: '< 2 g/dia de sódio (< 5 g de sal/dia). Reduz 2–8 mmHg.', icon: ShieldCheck, color: 'text-amber-500' },
            { title: 'Atividade Física', desc: 'Aeróbica 150 min/sem ou intensa 75 min/sem. Reduz 4–9 mmHg.', icon: Zap, color: 'text-purple-500' }
          ].map((item, i) => (
            <div key={i} className="card p-5 border-line bg-slate-50">
              <item.icon size={20} className={cn("mb-3", item.color)} />
              <h4 className="font-bold text-brand-navy text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. PIRÂMIDE DE PRIORIDADE */}
      <section id="priority-pyramid">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Pill size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Pirâmide de Prioridade e Fármacos</h2>
        </div>

        <div className="flex flex-col gap-2 mb-8">
          <div className="bg-emerald-500 text-white p-4 rounded-t-xl text-center">
            <h3 className="font-black text-lg">1ª LINHA — TRÍADE ESSENCIAL</h3>
            <p className="text-sm opacity-90">(Redução de mortalidade comprovada)</p>
            <p className="font-bold mt-2">IECA ou BRA • BCC Di-hidropiridínico • Diurético Tiazídico</p>
          </div>
          <div className="bg-brand-blue text-white p-4 text-center">
            <h3 className="font-black text-lg">SITUAÇÕES ESPECIAIS — BETABLOQUEADOR</h3>
            <p className="text-sm opacity-90">(Como 1ª/2ª linha)</p>
            <p className="font-bold mt-2">ICC sistólica • DAC/Pós-IAM • FA • Tireotoxicose • Enxaqueca</p>
          </div>
          <div className="bg-amber-500 text-white p-4 text-center">
            <h3 className="font-black text-lg">3ª LINHA — ADJUVANTES</h3>
            <p className="font-bold mt-2">Espironolactona (4ª droga) • Clonidina • Hidralazina • Minoxidil</p>
          </div>
          <div className="bg-rose-600 text-white p-4 rounded-b-xl text-center">
            <h3 className="font-black text-lg flex items-center justify-center gap-2">
              <AlertTriangle size={20} /> ATENÇÃO — COMBINAÇÕES PROIBIDAS
            </h3>
            <p className="font-bold mt-2">IECA + BRA (IRA/Hipercalemia) • Verapamil/Diltiazem + BB (BAV)</p>
          </div>
        </div>

        {/* Tabela de Fármacos */}
        <div className="card overflow-hidden border-line">
          <div className="bg-[#666868] p-4 text-white font-bold text-center">
            Principais Fármacos Anti-hipertensivos
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/10">
                  <th className="p-3 border border-line font-bold text-brand-navy">Classe</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">Fármacos</th>
                  <th className="p-3 border border-line font-bold text-brand-navy">Peculiaridades / Efeitos Adversos</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-3 border border-line font-bold">IECA</td>
                  <td className="p-3 border border-line">Enalapril, Ramipril, Lisinopril</td>
                  <td className="p-3 border border-line text-ink-muted">Tosse seca (10-20%), angioedema. Proteção renal. Teratogênico.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-bold">BRA</td>
                  <td className="p-3 border border-line">Losartana, Valsartana, Olmesartana</td>
                  <td className="p-3 border border-line text-ink-muted">Losartana é uricosúrico (bom para gota). Teratogênico.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-bold">BCC Di-HDP</td>
                  <td className="p-3 border border-line">Anlodipino, Nifedipino GITS</td>
                  <td className="p-3 border border-line text-ink-muted">Edema maleolar (dose-dependente). 1ª escolha em afrodescendentes.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-bold">BCC Não-DHP</td>
                  <td className="p-3 border border-line">Verapamil, Diltiazem</td>
                  <td className="p-3 border border-line text-ink-muted">Controle de FC na FA. Constipação. Não associar com BB.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-bold">Tiazídicos</td>
                  <td className="p-3 border border-line">HCTZ, Clortalidona, Indapamida</td>
                  <td className="p-3 border border-line text-ink-muted">Hipocalemia, hiperuricemia (gota). Indapamida é neutra no DM.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-bold">Poupadores K+</td>
                  <td className="p-3 border border-line">Espironolactona</td>
                  <td className="p-3 border border-line text-ink-muted">4ª droga na HAS resistente. Risco de hipercalemia e ginecomastia.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-line font-bold">Betabloqueadores</td>
                  <td className="p-3 border border-line">Metoprolol, Bisoprolol, Carvedilol</td>
                  <td className="p-3 border border-line text-ink-muted">Fadiga, broncoespasmo. 1ª linha na ICC com FEVE reduzida.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. URGÊNCIA E EMERGÊNCIA */}
      <section id="urgency-emergency">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Urgência e Emergência Hipertensiva</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-line bg-[#fbde9e]">
            <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
              <Activity size={18} />
              Urgência Hipertensiva
            </h3>
            <ul className="space-y-3 text-sm text-amber-900">
              <li>• <strong>PA:</strong> Geralmente &gt; 180/110 mmHg.</li>
              <li>• <strong>LOA Aguda:</strong> AUSENTE.</li>
              <li>• <strong>Risco Imediato:</strong> NÃO.</li>
              <li>• <strong>Via:</strong> Oral (Captopril, Clonidina, Anlodipino).</li>
              <li>• <strong>Meta:</strong> Reduzir gradualmente em 24–48h.</li>
            </ul>
          </div>

          <div className="card p-6 border-line bg-[#ffcccc]">
            <h3 className="font-bold text-rose-800 mb-4 flex items-center gap-2">
              <AlertTriangle size={18} />
              Emergência Hipertensiva
            </h3>
            <ul className="space-y-3 text-sm text-rose-900">
              <li>• <strong>PA:</strong> Geralmente &gt; 180/120 mmHg.</li>
              <li>• <strong>LOA Aguda:</strong> PRESENTE (Encefalopatia, AVC, IAM, Dissecção).</li>
              <li>• <strong>Risco Imediato:</strong> SIM.</li>
              <li>• <strong>Via:</strong> Intravenosa (Nitroprussiato, Labetalol).</li>
              <li>• <strong>Meta:</strong> Reduzir ≤ 25% da PAM na 1ª hora (exceto dissecção aórtica: &lt;120 mmHg em minutos).</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
