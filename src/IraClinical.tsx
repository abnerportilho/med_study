import React from 'react';
import { ShieldAlert, Zap, Thermometer, Droplets, Heart, Activity } from 'lucide-react';

export default function IraClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      {/* 1. FATORES DE RISCO: EXPOSIÇÕES VS SUSCEPTIBILIDADES */}
      <section id="risk-factors">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <ShieldAlert size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Fatores de Risco</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Susceptibilities */}
          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-4 text-blue-400 flex items-center gap-2">
              <Droplets size={20} />
              Susceptibilidades (O Paciente)
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Idade e Gênero:</strong> Idade avançada, Sexo feminino (controverso), Raça negra.
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Doenças Renais:</strong> Doença Renal Crônica (DRC) prévia (Principal fator).
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Comorbidades:</strong> Diabetes Mellitus, Anemia, Câncer (Mieloma, Leucemias).
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Doenças Crônicas:</strong> Insuficiência Cardíaca, Pulmonar ou Hepática (Cirrose).
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Volemia:</strong> Hipovolemia ou depleção de volume (sangramento, diuréticos).
              </div>
            </div>
          </div>

          {/* Exposures */}
          <div className="card p-6 border-white/10 bg-slate-900 text-white shadow-lg">
            <h3 className="font-bold text-lg mb-4 text-rose-400 flex items-center gap-2">
              <Zap size={20} />
              Exposições (Gatilhos Agudos)
            </h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Infecção:</strong> Sepsis (Principal causa na UTI).
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Choque:</strong> Circulatório (Hipovolêmico, Distributivo, Cardiogênico).
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Trauma e Cirurgia:</strong> Grandes queimaduras, Trauma, Cirurgia Cardíaca (CEC).
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Nefrotóxicos:</strong> Aminoglicosídeos, Anfotericina B, AINEs, Contraste Iodado.
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 text-[10px]">
                <strong>Tóxicos Específicos:</strong> Rabdomiólise, Plantas ou animais venenosos.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 card p-4 bg-amber-900/20 border border-amber-500/30 text-white">
          <p className="text-xs font-bold text-amber-200 mb-1">Destaque Clínico:</p>
          <p className="text-[10px] text-amber-100 italic">"A combinação de susceptibilidade + exposição multiplica o risco. Exemplo: idoso com DM e DRC que recebe contraste iodado + AINE."</p>
        </div>
      </section>

      {/* 2. FISIOPATOLOGIA: SISTEMA RAAS */}
      <section id="raas-system">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Regulação: Sistema Renina-Angiotensina</h2>
        </div>

        <div className="card p-8 border-white/10 bg-slate-900 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Heart size={120} />
          </div>
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-center w-64">
                <p className="text-[10px] font-black uppercase text-emerald-400">Fígado</p>
                <p className="text-sm font-bold">Angiotensinogênio</p>
              </div>
              <div className="h-8 w-px bg-slate-700 relative">
                <div className="absolute -right-20 top-1/2 -translate-y-1/2 bg-blue-600 px-2 py-0.5 rounded text-[10px] font-bold">RENINA (Rim)</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="p-3 bg-slate-800 border border-white/10 rounded-xl text-center w-64">
                <p className="text-sm font-bold">Angiotensina I</p>
              </div>
              <div className="h-8 w-px bg-slate-700 relative">
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 bg-rose-600 px-2 py-0.5 rounded text-[10px] font-bold">ECA (Pulmão)</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="p-4 bg-rose-500/20 border border-rose-500/50 rounded-xl text-center w-72 shadow-lg shadow-rose-500/10">
                <p className="text-[10px] font-black uppercase text-rose-400">Efetor Principal</p>
                <p className="text-lg font-black">Angiotensina II</p>
              </div>
            </div>

            {/* Effects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold text-brand-blue mb-2 flex items-center gap-2">
                  <Zap size={14} />
                  Ações Hemodinâmicas
                </h4>
                <ul className="text-[10px] text-slate-400 space-y-1">
                  <li>• Vasoconstrição da arteríola aferente e eferente.</li>
                  <li>• Aumento da pressão intraglomerular.</li>
                  <li>• Regulação da Pressão Arterial Sistêmica.</li>
                </ul>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h4 className="text-xs font-bold text-emerald-400 mb-2 flex items-center gap-2">
                  <Droplets size={14} />
                  Ações Tubulares
                </h4>
                <ul className="text-[10px] text-slate-400 space-y-1">
                  <li>• Reabsorção de Sódio no Túbulo Proximal.</li>
                  <li>• Estimula Aldosterona (Absorção de Na+ no T. Distal/Coletor).</li>
                  <li>• Estimula cotransporte NaCl.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
