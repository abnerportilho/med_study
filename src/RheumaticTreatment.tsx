import React from 'react';
import { Pill, ShieldCheck, AlertTriangle, Activity, HeartPulse, Clock } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function RheumaticTreatment() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. TRATAMENTO DA FASE AGUDA */}
      <section id="acute-treatment">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Pill size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Tratamento da Fase Aguda</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white mb-6">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Manifestação</th>
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Tratamento</th>
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Detalhe</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="p-3 border border-white/10 font-bold">Artrite</td>
                <td className="p-3 border border-white/10 text-slate-300">AAS (ácido acetilsalicílico)</td>
                <td className="p-3 border border-white/10 text-slate-400">50–100 mg/kg/dia ÷ 4x; melhora dramática em 24–48h (valor diagnóstico).</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-bold">Cardite (leve)</td>
                <td className="p-3 border border-white/10 text-slate-300">AAS</td>
                <td className="p-3 border border-white/10 text-slate-400">Idem — anti-inflamatório de escolha em cardite leve.</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-bold">Cardite (mod/grave)</td>
                <td className="p-3 border border-white/10 text-slate-300">Prednisona 1–2 mg/kg/dia</td>
                <td className="p-3 border border-white/10 text-slate-400">2–3 semanas, desmame progressivo; repouso ao leito.</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-bold">Coreia de Sydenham</td>
                <td className="p-3 border border-white/10 text-slate-300">Carbamazepina ou Ácido valproico</td>
                <td className="p-3 border border-white/10 text-slate-400">Sintomático; reservar para casos com impacto funcional.</td>
              </tr>
              <tr className="bg-[#696969] text-white">
                <td className="p-3 border border-white/10 font-bold">Erradicação Estrep.</td>
                <td className="p-3 border border-white/10">Penicilina G benzatina IM</td>
                <td className="p-3 border border-white/10">Dose única: 600.000 UI (&lt;25 kg) / 1.200.000 UI (&gt;25 kg).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. PREVENÇÃO SECUNDÁRIA */}
      <section id="secondary-prevention">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <ShieldCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Prevenção Secundária</h2>
        </div>

        <div className="card p-6 border-white/10 bg-slate-900 text-white mb-6">
          <h4 className="font-bold text-brand-blue mb-4 flex items-center gap-2">
            <Clock size={18} />
            Penicilina G Benzatina a cada 21 dias
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-[#696969] text-white">
                  <th className="p-3 border border-white/10 font-bold">Situação</th>
                  <th className="p-3 border border-white/10 font-bold">Duração da Profilaxia</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                <tr>
                  <td className="p-3 border border-white/10 text-slate-300">Sem cardite</td>
                  <td className="p-3 border border-white/10 text-slate-400">Até 21 anos OU 5 anos após o último surto (o que for maior).</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 text-slate-300">Cardite leve sem lesão ou com lesão residual mínima</td>
                  <td className="p-3 border border-white/10 text-slate-400">Até 25 anos OU 10 anos após o último surto.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 text-slate-300">Lesão valvar moderada ou grave</td>
                  <td className="p-3 border border-white/10 text-slate-400">Até 40 anos OU por toda a vida.</td>
                </tr>
                <tr>
                  <td className="p-3 border border-white/10 text-slate-300">Pós-cirurgia valvar (troca/plastia)</td>
                  <td className="p-3 border border-white/10 text-slate-400">Por toda a vida.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#040618] text-white shadow-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-blue mb-3">Macete Profilaxia Secundária:</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-2 border border-white/10 rounded-lg">
              <p className="text-[8px] text-slate-400 uppercase">Sem Cardite</p>
              <p className="text-xs font-black text-brand-blue">21a ou 5a</p>
            </div>
            <div className="text-center p-2 border border-white/10 rounded-lg">
              <p className="text-[8px] text-slate-400 uppercase">Cardite Leve</p>
              <p className="text-xs font-black text-brand-blue">25a ou 10a</p>
            </div>
            <div className="text-center p-2 border border-white/10 rounded-lg">
              <p className="text-[8px] text-slate-400 uppercase">Cardite Grave</p>
              <p className="text-xs font-black text-brand-blue">40a ou Vida</p>
            </div>
            <div className="text-center p-2 border border-white/10 rounded-lg">
              <p className="text-[8px] text-slate-400 uppercase">Pós-Cirurgia</p>
              <p className="text-xs font-black text-brand-blue">Toda a Vida</p>
            </div>
          </div>
          <p className="text-[9px] text-slate-500 mt-4 italic text-center">
            *Duração: o que for MAIOR entre a idade limite e o tempo após o último surto.
          </p>
        </div>
      </section>
    </div>
  );
}
