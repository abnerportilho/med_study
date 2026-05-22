import React from 'react';
import { Stethoscope, Zap, AlertCircle, CheckCircle2, Pill, Activity, Droplets } from 'lucide-react';

export default function IraTreatment() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. MANEJO GERAL E PREVENÇÃO */}
      <section id="general-management">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Stethoscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Manejo Geral</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="font-bold text-brand-blue text-sm mb-4 flex items-center gap-2">
              <CheckCircle2 size={16} />
              Medidas Imediatas
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400">
                  <Droplets size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold">Volemia</p>
                  <p className="text-[9px] text-slate-400">Manejo rigoroso do balanço hídrico e controle de diurese.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-rose-600/20 flex items-center justify-center text-rose-400">
                  <Pill size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold">Drogas Nefrotóxicas</p>
                  <p className="text-[9px] text-slate-400">Interromper AINES, IECA/BRA e ajustar antibióticos.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center text-emerald-400">
                  <Activity size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold">Hemodinâmica</p>
                  <p className="text-[9px] text-slate-400">Manter Pressão Arterial Média (PAM) {">"} 80 mmHg.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
            <h4 className="font-bold text-amber-400 text-sm mb-4 flex items-center gap-2">
              <AlertCircle size={16} />
              Atenção Especial
            </h4>
            <ul className="text-[10px] text-slate-300 space-y-3">
              <li className="flex gap-2">
                <span className="text-amber-400 font-black">•</span>
                <strong>Contraste Iodado:</strong> Evitar se possível; se necessário, utilizar menor dose e hidratação prévia.
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400 font-black">•</span>
                <strong>Glicemia:</strong> Evitar hiperglicemia severa (alvo 140-180 mg/dL).
              </li>
              <li className="flex gap-2">
                <span className="text-amber-400 font-black">•</span>
                <strong>Acompanhamento:</strong> Monitoramento diário da função renal e eletrólitos.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. URGÊNCIAS DIALÍTICAS */}
      <section id="dialysis-urgencies">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-600/20 flex items-center justify-center text-rose-600">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Urgências Dialíticas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card p-4 border-rose-500/30 bg-rose-500/5 text-white">
            <h4 className="font-bold text-rose-400 text-[10px] uppercase mb-2">Volume</h4>
            <p className="text-xs font-bold">Edema Agudo de Pulmão</p>
            <p className="text-[9px] text-slate-400 mt-1">Refratário a diuréticos.</p>
          </div>
          <div className="card p-4 border-rose-500/30 bg-rose-500/5 text-white">
            <h4 className="font-bold text-rose-400 text-[10px] uppercase mb-2">Eletrólitos</h4>
            <p className="text-xs font-bold">Hipercalemia Grave</p>
            <p className="text-[9px] text-slate-400 mt-1">K+ {">"} 6,5 ou alterações no ECG.</p>
          </div>
          <div className="card p-4 border-rose-500/30 bg-rose-500/5 text-white">
            <h4 className="font-bold text-rose-400 text-[10px] uppercase mb-2">Ácido-Base</h4>
            <p className="text-xs font-bold">Acidose Metabólica</p>
            <p className="text-[9px] text-slate-400 mt-1">Grave e refratária (pH {"<"} 7,1).</p>
          </div>
          <div className="card p-4 border-rose-500/30 bg-rose-500/5 text-white">
            <h4 className="font-bold text-rose-400 text-[10px] uppercase mb-2">Uremia</h4>
            <p className="text-xs font-bold">Sinais de Uremia</p>
            <p className="text-[9px] text-slate-400 mt-1">Encefalopatia, Pericardite, Hemorragia.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Manejo da Hipercalemia</h4>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-amber-400 uppercase">Estabilização de Membrana</p>
                <p className="text-[10px] text-slate-300">Gluconato de Cálcio 10% (se alteração no ECG).</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-blue-400 uppercase">Shifting (Entrada na célula)</p>
                <p className="text-[10px] text-slate-300">Solução Polarizante (Insulina + Glicose), Bicarbonato, Beta-2 agonista.</p>
              </div>
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-rose-400 uppercase">Eliminação</p>
                <p className="text-[10px] text-slate-300">Furosemida, Resinas de troca (Sorcal), Hemodiálise.</p>
              </div>
            </div>
          </div>

          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-4">Doses de Diuréticos de Alça (IRA)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[10px] text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-2">Droga</th>
                    <th className="pb-2">Dose Inicial</th>
                    <th className="pb-2">Dose Máxima/Dia</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">Furosemida</td>
                    <td className="py-2">80 mg (EV/VO)</td>
                    <td className="py-2">600 mg</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 text-white font-bold">Bumetanida</td>
                    <td className="py-2">2 mg (EV/VO)</td>
                    <td className="py-2">10 mg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[9px] text-slate-500 mt-4 italic">*Nota: O uso de diuréticos não reduz a gravidade da IRA, mas auxilia no manejo volêmico.</p>
          </div>
        </div>

        <div className="card p-5 border-white/10 bg-slate-900 text-white mt-6">
          <h4 className="font-bold text-brand-blue text-sm mb-4">Indicações Adicionais de TRS</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Intoxicações Exógenas</p>
              <p className="text-[10px] text-slate-300">Lítio, Metanol, Etilenoglicol, Metformina.</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-bold text-slate-400 uppercase">Hipercalemia Específica</p>
              <p className="text-[10px] text-slate-300">K+ {">"} 5,5 em casos de Rabdomiólise ou Sangramento Intestinal.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MANEJO POR ESTÁGIO (KDIGO) */}
      <section id="stage-management">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Manejo Baseado em Estágios</h2>
        </div>

        <div className="space-y-4">
          <div className="card p-4 border-white/10 bg-slate-900 text-white flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center font-black text-slate-500">Risco</div>
            <div className="flex-1">
              <p className="text-xs font-bold">Descontinuar nefrotóxicos, garantir volemia e pressão de perfusão.</p>
            </div>
          </div>
          <div className="card p-4 border-blue-500/30 bg-blue-500/5 text-white flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-black text-white">1</div>
            <div className="flex-1">
              <p className="text-xs font-bold">Monitorar Creatinina e Débito Urinário, considerar diagnóstico não invasivo.</p>
            </div>
          </div>
          <div className="card p-4 border-emerald-500/30 bg-emerald-500/5 text-white flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center font-black text-white">2</div>
            <div className="flex-1">
              <p className="text-xs font-bold">Considerar diagnóstico invasivo, ajustar doses de drogas, considerar TRS.</p>
            </div>
          </div>
          <div className="card p-4 border-rose-500/30 bg-rose-500/5 text-white flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full bg-rose-600 flex items-center justify-center font-black text-white">3</div>
            <div className="flex-1">
              <p className="text-xs font-bold">Admissão em UTI, evitar cateteres subclávios se possível, iniciar TRS.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
