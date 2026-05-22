import React from 'react';
import { Search, Activity, FileText, CheckCircle2, AlertTriangle, Info } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function RheumaticDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. EVIDÊNCIA DE INFECÇÃO ESTREPTOCÓCICA */}
      <section id="strep-evidence">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Search size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Evidência de Infecção Estreptocócica</h2>
        </div>

        <p className="text-sm text-ink-muted mb-6">
          O diagnóstico de Febre Reumática (exceto Coreia isolada ou Cardite insidiosa) <strong>exige</strong> prova de infecção prévia pelo Estreptococo do Grupo A.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-2 flex items-center gap-2">
              <Activity size={16} />
              ASLO (Antiestreptolisina O)
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Positiva em 80% dos casos. Títulos elevados ou em ascensão sugerem infecção recente.
            </p>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-2 flex items-center gap-2">
              <FileText size={16} />
              Cultura de Orofaringe
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Padrão-ouro para faringite, mas frequentemente negativa quando os sintomas de FR aparecem.
            </p>
          </div>
          <div className="card p-5 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 size={16} />
              Teste Rápido (TRPS)
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Alta especificidade. Se positivo, confirma a presença do antígeno estreptocócico.
            </p>
          </div>
        </div>
      </section>

      {/* 2. EXAMES COMPLEMENTARES */}
      <section id="complementary-exams">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-slate-800/10 flex items-center justify-center text-slate-700">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Exames Complementares</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-line bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue mb-4">Provas de Atividade Inflamatória</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center p-2 bg-[#696969] rounded border border-white/10">
                <span className="text-xs font-medium">VHS (Velocidade de Hemossedimentação)</span>
                <span className="text-[10px] font-black text-rose-400">Aumentado</span>
              </li>
              <li className="flex justify-between items-center p-2 bg-[#696969] rounded border border-white/10">
                <span className="text-xs font-medium">PCR (Proteína C Reativa)</span>
                <span className="text-[10px] font-black text-rose-400">Aumentado</span>
              </li>
            </ul>
            <p className="text-[10px] text-slate-400 mt-3 italic">
              *Úteis para monitorar a resposta ao tratamento e a atividade da doença.
            </p>
          </div>

          <div className="card p-6 border-white/10 bg-slate-900 text-white">
            <h4 className="font-bold text-brand-blue mb-4">Eletrocardiograma (ECG)</h4>
            <div className="p-4 rounded-xl bg-amber-900/40 border border-amber-500/30">
              <p className="text-xs text-amber-400 font-bold mb-1">Prolongamento do Intervalo PR:</p>
              <p className="text-xs text-amber-200/70">
                Sinal de cardite (Bloqueio Atrioventricular de 1º grau). É um critério menor de Jones.
              </p>
            </div>
          </div>
        </div>

        {/* Ecocardiograma */}
        <div className="mt-6 card p-6 border-brand-blue/20 bg-brand-blue/5">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
              <Activity size={32} className="text-brand-blue" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-blue mb-2">Ecocardiograma: O Papel na Cardite Subclínica</h4>
              <p className="text-sm text-ink-muted leading-relaxed">
                A revisão de 2015 dos critérios de Jones incluiu a <strong>Cardite Subclínica</strong> (detectada apenas pelo Eco, sem sopro ao exame físico) como critério maior em populações de médio/alto risco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIAGNÓSTICO DIFERENCIAL */}
      <section id="differential">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Diagnóstico Diferencial</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-white/10 bg-[#000000] text-white">
            <h5 className="font-bold text-xs text-brand-blue mb-1">Artrite Idiopática Juvenil</h5>
            <p className="text-[10px] text-slate-300">Artrite persistente, não migratória.</p>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-[#000000] text-white">
            <h5 className="font-bold text-xs text-brand-blue mb-1">Artrite Séptica</h5>
            <p className="text-[10px] text-slate-300">Monoartrite aguda, sinais flogísticos intensos.</p>
          </div>
          <div className="p-4 rounded-xl border border-white/10 bg-[#000000] text-white">
            <h5 className="font-bold text-xs text-brand-blue mb-1">Endocardite Infecciosa</h5>
            <p className="text-[10px] text-slate-300">Febre prolongada, sopro, hemoculturas positivas.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
