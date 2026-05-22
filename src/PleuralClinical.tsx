import React from 'react';
import { Stethoscope, Activity, AlertCircle, Info, UserCheck } from 'lucide-react';

export default function PleuralClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. QUADRO CLÍNICO */}
      <section id="clinical-presentation">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Stethoscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Quadro Clínico</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-2 flex items-center gap-2">
              <Activity size={16} />
              Dispneia
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Origem multifatorial. Depende do volume, velocidade de formação, reserva cardiopulmonar e distensibilidade da caixa torácica.
            </p>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-2 flex items-center gap-2">
              <AlertCircle size={16} />
              Dor Torácica
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tipo ventilatório-dependente (pontada). Normalmente bem localizada. Indica inflamação da pleura parietal.
            </p>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-2 flex items-center gap-2">
              <Info size={16} />
              Tosse Seca
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Esporádica. Causada por estímulos inflamatórios na pleura parietal ou colapso brônquico adjacente (atelectasia).
            </p>
          </div>
        </div>
      </section>

      {/* 2. EXAME FÍSICO */}
      <section id="physical-exam">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800/10 flex items-center justify-center text-slate-700">
            <UserCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Exame Físico (Síndrome de Barreira)</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white shadow-2xl">
          <div className="bg-brand-blue p-3 text-white font-black text-[10px] uppercase tracking-widest">ALTERAÇÕES (GERALMENTE {">"} 300ML)</div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="p-3 border border-white/10 font-bold text-brand-blue">Manobra</th>
                  <th className="p-3 border border-white/10 font-bold text-brand-blue">Achado Esperado</th>
                  <th className="p-3 border border-white/10 font-bold text-brand-blue">Explicação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-3 border border-white/10 font-bold">Inspeção</td>
                  <td className="p-3 border border-white/10">Taquipneia / Respiração Superficial</td>
                  <td className="p-3 border border-white/10 text-slate-400">Pode haver abaulamento e ↓ expansibilidade no lado afetado.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold">Palpação</td>
                  <td className="p-3 border border-white/10 text-rose-400 font-black">FTV Reduzido ou Abolido</td>
                  <td className="p-3 border border-white/10 text-slate-400">O líquido atua como barreira para a transmissão da vibração vocal.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold">Percussão</td>
                  <td className="p-3 border border-white/10 text-rose-400 font-black">Macicez ou Submacicez</td>
                  <td className="p-3 border border-white/10 text-slate-400">Som maciço sobre a área de acúmulo de líquido.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold">Ausculta</td>
                  <td className="p-3 border border-white/10 text-rose-400 font-black">MV Reduzido ou Abolido</td>
                  <td className="p-3 border border-white/10 text-slate-400">Pode haver <strong>atrito pleural</strong> audível em fases iniciais.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 font-bold">Voz</td>
                  <td className="p-3 border border-white/10">Egofonia (Som anasalado)</td>
                  <td className="p-3 border border-white/10 text-slate-400">Voz com timbre de "cabra", audível no limite superior do derrame.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. PONTOS DE ALERTA */}
      <section id="warning-signs">
        <div className="p-6 rounded-2xl bg-amber-900 text-white shadow-2xl border border-amber-500/30">
          <h4 className="font-black text-amber-400 mb-4 flex items-center gap-2 text-[10px] uppercase tracking-widest">
            <AlertCircle size={16} />
            Diferenciação: Consolidação vs Derrame
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-xs font-bold text-amber-200">Consolidação (Pneumonia):</p>
              <ul className="text-[10px] text-amber-100/80 list-disc pl-4">
                <li>FTV Aumentado</li>
                <li>Macicez</li>
                <li>Broncofonia / Pectoriloquia</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-bold text-rose-300">Derrame Pleural:</p>
              <ul className="text-[10px] text-rose-100/80 list-disc pl-4">
                <li>FTV Abolido</li>
                <li>Macicez</li>
                <li>MV Abolido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
