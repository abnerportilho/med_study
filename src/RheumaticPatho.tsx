import React from 'react';
import { Globe, Users, Zap, ShieldAlert, Activity, AlertTriangle } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function RheumaticPatho() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. CONCEITO E FISIOPATOLOGIA */}
      <section id="concept">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Conceito e Fisiopatologia</h2>
        </div>

        <div className="card p-6 border-white/10 bg-slate-900 text-white mb-6">
          <p className="text-sm text-slate-300 leading-relaxed">
            A febre reumática (FR) é uma doença inflamatória sistêmica e recorrente, resultado de uma resposta autoimune (celular e humoral) deflagrada após faringoamigdalite por <strong>Streptococcus pyogenes</strong> (Estreptococo beta-hemolítico do grupo A).
          </p>
          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400">
            Acomete tecido conjuntivo, subcutâneo e pele, com predileção pelo coração. Requer predisposição genética — apenas 3–5% dos expostos desenvolvem FR.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white shadow-sm">
            <h4 className="font-bold text-brand-blue mb-3 flex items-center gap-2">
              <ShieldAlert size={18} className="text-rose-400" />
              Mimetismo Molecular e Autoimunidade
            </h4>
            <ul className="space-y-4 text-[10px] text-slate-300">
              <li className="flex gap-2">
                <span className="font-black text-rose-400">01</span>
                <span><strong>Faringoamigdalite:</strong> Colonização por S. pyogenes → produção de estreptolisina O e DNAse B.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-black text-rose-400">02</span>
                <span><strong>Apresentação de Antígenos:</strong> Proteína M e carboidrato C da parede bacteriana são processados.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-black text-rose-400">03</span>
                <span><strong>Reação Cruzada:</strong> Anticorpos anti-M reagem com miosina, laminina e vimentina no coração.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-black text-rose-400">04</span>
                <span><strong>Nódulos de Aschoff:</strong> Patognomônico da fase aguda; granuloma com células de Anitschkow (núcleo em "lagarta").</span>
              </li>
            </ul>
          </div>

          <div className="card p-5 border-brand-blue/20 bg-slate-900 text-white shadow-xl">
            <h4 className="font-black text-[10px] text-brand-blue mb-4 uppercase tracking-widest">Ponto Clínico Crucial</h4>
            <div className="space-y-4">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-brand-blue">Intervalo de Latência:</p>
                <p className="text-[10px] text-slate-300">O intervalo entre a faringoamigdalite e o surto de FR é de <strong>2 a 4 semanas</strong>.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-brand-blue">Janela de Oportunidade:</p>
                <p className="text-[10px] text-slate-300">Tratamento da faringite em até <strong>9 dias</strong> (AHA) previne 100% dos surtos de FR.</p>
              </div>
              <div className="p-3 bg-rose-500/10 rounded-lg border border-rose-500/20">
                <p className="text-[10px] font-bold text-rose-400">A Cardite Reumática:</p>
                <p className="text-[10px] text-rose-200">Única manifestação que deixa <strong>sequela permanente</strong> (valvopatia crônica).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EPIDEMIOLOGIA */}
      <section id="epidemiology">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Globe size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Epidemiologia</h2>
        </div>

        <div className="card overflow-hidden border-white/10 bg-slate-900 text-white">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Indicador</th>
                <th className="p-3 border border-white/10 font-bold text-brand-blue">Dado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              <tr>
                <td className="p-3 border border-white/10 font-medium">1º surto</td>
                <td className="p-3 border border-white/10">5–15 anos (crianças e adolescentes)</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-medium">Maior causa de cardiopatia adquirida em &lt;25 anos</td>
                <td className="p-3 border border-white/10">OMS, 2015</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-medium">Brasil — hospitalizações por FR aguda</td>
                <td className="p-3 border border-white/10">~10.000 casos/ano (DATASUS, últimos 10 anos)</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-medium">Países em desenvolvimento</td>
                <td className="p-3 border border-white/10">80% dos casos globais (RHD Action, 2015)</td>
              </tr>
              <tr>
                <td className="p-3 border border-white/10 font-medium">Definição epidemiológica</td>
                <td className="p-3 border border-white/10 font-black text-rose-400">Doença sentinela da pobreza</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
