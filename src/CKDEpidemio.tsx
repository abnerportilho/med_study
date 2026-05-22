import React from 'react';
import { 
  Globe, 
  Users, 
  TrendingUp, 
  AlertTriangle, 
  Activity, 
  Zap, 
  Heart, 
  Search,
  Info,
  CheckCircle2,
  BarChart3
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function CKDEpidemio() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. EPIDEMIOLOGIA: O IMPACTO SILENCIOSO */}
      <section id="epidemiology">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Globe size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Epidemiologia: O Impacto Silencioso</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="card p-5 border-line bg-slate-800/50">
            <div className="flex items-center gap-2 text-brand-blue mb-2">
              <Users size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Prevalência Global</span>
            </div>
            <p className="text-2xl font-black text-brand-navy">~10%</p>
            <p className="text-[10px] text-ink-muted mt-1">Da população mundial possui algum grau de DRC. Mais de 800 milhões de pessoas.</p>
          </div>
          <div className="card p-5 border-line bg-slate-800/50">
            <div className="flex items-center gap-2 text-rose-400 mb-2">
              <TrendingUp size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">Mortalidade</span>
            </div>
            <p className="text-2xl font-black text-brand-navy">#5</p>
            <p className="text-[10px] text-ink-muted mt-1">Projeção para ser a 5ª principal causa de morte no mundo até 2040.</p>
          </div>
          <div className="card p-5 border-line bg-slate-800/50">
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <BarChart3 size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">No Brasil</span>
            </div>
            <p className="text-2xl font-black text-brand-navy">~12 mi</p>
            <p className="text-[10px] text-ink-muted mt-1">Estimativa de brasileiros com DRC. Grande parte em estágios iniciais sem diagnóstico.</p>
          </div>
        </div>

        {/* O Desafio do Diagnóstico Precoce */}
        <div className="card p-6 border-amber-500/20 bg-amber-500/5 relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10 text-amber-500">
            <Search size={120} />
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="mt-1 text-amber-500">
              <AlertTriangle size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">A Doença Silenciosa</h3>
              <p className="text-sm text-ink leading-relaxed">
                A DRC é frequentemente assintomática até estágios avançados (G4-G5). Estima-se que <span className="font-bold text-amber-500">90% das pessoas</span> com DRC não sabem que têm a doença, perdendo a janela de oportunidade para nefroproteção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FATORES DE RISCO E CAUSAS PRINCIPAIS */}
      <section id="risk-factors">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Fatores de Risco e Causas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Diabetes */}
          <div className="card p-6 border-line hover:border-amber-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                <Zap size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Diabetes Mellitus (Causa #1)</h3>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Responsável por cerca de <span className="font-bold text-amber-500">30-40%</span> dos casos de DRC terminal. A hiperglicemia causa lesão microvascular e hiperfiltração.
            </p>
          </div>

          {/* Hipertensão */}
          <div className="card p-6 border-line hover:border-brand-blue/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Activity size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Hipertensão Arterial (Causa #2)</h3>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Causa e consequência da DRC. Responsável por <span className="font-bold text-brand-blue">25-30%</span> dos casos. O barotrauma glomerular leva à nefroesclerose.
            </p>
          </div>

          {/* Obesidade e Risco CV */}
          <div className="card p-6 border-line hover:border-rose-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                <Heart size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Obesidade e Síndrome Metabólica</h3>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              Aumenta a demanda metabólica renal e promove estado pró-inflamatório, acelerando a perda de néfrons.
            </p>
          </div>

          {/* Idade e Genética */}
          <div className="card p-6 border-line hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                <Users size={20} />
              </div>
              <h3 className="font-bold text-brand-navy">Idade e Histórico Familiar</h3>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              A perda de função renal é parte do envelhecimento, mas acelerada por fatores genéticos e comorbidades.
            </p>
          </div>
        </div>

        {/* Grupos de Risco para Rastreio */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-brand-navy mb-4">Quem deve ser rastreado?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Diabéticos (Tipo 1 e 2).",
              "Hipertensos.",
              "Idosos (> 60 anos).",
              "Histórico familiar de DRC.",
              "Doenças cardiovasculares prévias.",
              "Uso crônico de nefrotóxicos (AINEs).",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-line bg-slate-800/30">
                <CheckCircle2 className="text-brand-blue shrink-0" size={16} />
                <span className="text-xs text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. A CONEXÃO CARDIO-RENAL */}
      <section id="cardio-renal">
        <div className="card p-8 border-brand-blue/40 bg-gradient-to-br from-brand-navy to-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Heart size={120} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Activity className="text-rose-400" />
            A Conexão Cardio-Renal
          </h2>
          <p className="text-sm text-slate-200 mb-6 leading-relaxed max-w-2xl">
            A maioria dos pacientes com DRC em estágios iniciais <span className="text-rose-400 font-bold">morre de causas cardiovasculares</span> antes mesmo de chegar à diálise. A DRC é um multiplicador de risco CV independente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xs font-bold text-brand-blue uppercase mb-2">Risco de Morte CV</h4>
              <p className="text-[11px] text-slate-300">Aumenta exponencialmente à medida que a eTFG cai e a albuminúria sobe.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xs font-bold text-brand-blue uppercase mb-2">Prevenção</h4>
              <p className="text-[11px] text-slate-300">O tratamento da DRC é, em última análise, uma estratégia de proteção cardiovascular.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dica Final */}
      <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex gap-4 items-center">
        <Info className="text-brand-blue shrink-0" size={20} />
        <p className="text-xs text-brand-blue/80 italic">
          <strong>Pérola Clínica:</strong> O rastreio com Creatinina e RAC deve ser anual em todos os grupos de risco. Não espere a creatinina subir para agir.
        </p>
      </div>
    </div>
  );
}
