import React from 'react';
import { Search, Activity, Heart, ShieldAlert, ListChecks, CheckCircle2, XCircle } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function SCCClinical() {
  return (
    <div className="flex flex-col gap-8">
      {/* Overview */}
      <section className="card p-6 border-l-4 border-l-brand-blue bg-card dark:bg-slate-900/50 border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center text-brand-blue dark:text-blue-400">
            <Search size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Quadro Clínico Principal</h2>
        </div>
        <p className="text-ink dark:text-slate-300 mb-6">
          A SCC se manifesta principalmente por <strong>isquemia miocárdica transitória</strong>, geralmente por desbalanço entre oferta e demanda de O₂.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-1">Dor Torácica</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400 mb-2">Sintoma mais clássico</p>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-medium">Presente em ~50% dos casos</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-1">Dispneia</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400 mb-2">Equivalente isquêmico</p>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-medium">Importante se não há dor típica</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-1">Cansaço</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400 mb-2">Redução da tolerância</p>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-medium">Queixa mais "real" do paciente</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-1">Assintomático</h3>
            <p className="text-xs text-ink-muted dark:text-slate-400 mb-2">Doença detectada em avaliação</p>
            <p className="text-xs text-brand-blue dark:text-blue-400 font-medium">Triagem ou exame complementar</p>
          </div>
        </div>
      </section>

      {/* Dor Anginosa Típica & Classificação */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Características da Dor */}
        <div className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
              <Heart size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Padrão da Dor Típica</h2>
          </div>
          
          <div className="space-y-3">
            {[
              { label: 'Localização', value: 'Retroesternal ou hemitórax esquerdo' },
              { label: 'Irradiação', value: 'Mandíbula, braço esquerdo, às vezes direito' },
              { label: 'Qualidade', value: 'Aperto, pressão, peso, queimação' },
              { label: 'Duração', value: 'Curta, geralmente < 10 minutos' },
              { label: 'Gatilhos', value: 'Esforço, emoção, refeição, frio' },
              { label: 'Alívio', value: 'Repouso e/ou nitrato' },
              { label: 'Comportamento', value: 'Reprodutível com certo limiar de esforço' }
            ].map(item => (
              <div key={item.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 py-2 border-b border-line dark:border-slate-800 last:border-0">
                <span className="text-sm font-bold text-brand-navy dark:text-slate-200 sm:w-1/3">{item.label}</span>
                <span className="text-sm text-ink-muted dark:text-slate-400 sm:w-2/3">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Classificação Clínica */}
        <div className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
              <ListChecks size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Classificação da Dor</h2>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-line dark:border-slate-800 mb-6 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-xs font-bold text-brand-navy dark:text-slate-200 uppercase tracking-wider mb-2">Os 3 Critérios:</h3>
            <ol className="list-decimal list-inside text-sm text-ink-muted dark:text-slate-400 space-y-1">
              <li>Desconforto retroesternal com características/duração compatíveis</li>
              <li>Provocada por exercício ou estresse emocional</li>
              <li>Aliviada por repouso ou nitrato</li>
            </ol>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div>
                <span className="text-sm font-bold text-red-800 dark:text-red-300 block">Angina Típica</span>
                <span className="text-xs text-red-600 dark:text-red-400">Alta probabilidade isquêmica</span>
              </div>
              <span className="px-2 py-1 bg-red-200 dark:bg-red-900/40 text-red-800 dark:text-red-200 rounded text-xs font-bold">3/3 critérios</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-900/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div>
                <span className="text-sm font-bold text-orange-800 dark:text-orange-300 block">Angina Atípica</span>
                <span className="text-xs text-orange-600 dark:text-orange-400">Probabilidade intermediária</span>
              </div>
              <span className="px-2 py-1 bg-orange-200 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 rounded text-xs font-bold">2/3 critérios</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/30 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
              <div>
                <span className="text-sm font-bold text-green-800 dark:text-green-300 block">Dor Não Anginosa</span>
                <span className="text-xs text-green-600 dark:text-green-400">Menor chance coronariana</span>
              </div>
              <span className="px-2 py-1 bg-green-200 dark:bg-green-900/40 text-green-800 dark:text-green-200 rounded text-xs font-bold">0-1/3 critérios</span>
            </div>
          </div>
        </div>
      </section>

      {/* Classe Funcional CCS */}
      <section className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Activity size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Classe Funcional (CCS)</h2>
            <p className="text-sm text-ink-muted dark:text-slate-400">A limitação funcional é tão importante quanto o tipo da dor.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { ccs: 'I', title: 'Grandes Esforços', desc: 'Quase sem limitação', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-900/30 text-green-800 dark:text-green-300', badge: 'bg-green-200 dark:bg-green-900/40 text-green-800 dark:text-green-200' },
            { ccs: 'II', title: 'Moderados Esforços', desc: 'Limitação leve', color: 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-900/30 text-yellow-800 dark:text-yellow-300', badge: 'bg-yellow-200 dark:bg-yellow-900/40 text-yellow-800 dark:text-yellow-200' },
            { ccs: 'III', title: 'Pequenos Esforços', desc: 'Limitação importante', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-900/30 text-orange-800 dark:text-orange-300', badge: 'bg-orange-200 dark:bg-orange-900/40 text-orange-800 dark:text-orange-200' },
            { ccs: 'IV', title: 'Em Repouso', desc: 'Quadro grave, foge do padrão estável', color: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-900/30 text-red-800 dark:text-red-300', badge: 'bg-red-200 dark:bg-red-900/40 text-red-800 dark:text-red-200' }
          ].map(item => (
            <div key={item.ccs} className={cn("rounded-xl p-4 border flex flex-col items-center text-center transition-all duration-300 hover:shadow-md hover:-translate-y-0.5", item.color)}>
              <span className={cn("px-3 py-1 rounded-full text-xs font-bold mb-3", item.badge)}>CCS {item.ccs}</span>
              <h3 className="text-sm font-bold mb-1">{item.title}</h3>
              <p className="text-xs opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Suspeita Clínica & Diferenciais */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          {/* Aumentam Suspeita */}
          <div className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-500" />
              Aumentam a Suspeita
            </h3>
            <ul className="space-y-2">
              {[
                'Relação clara com esforço',
                'Melhora previsível com repouso',
                'Dor em aperto/pressão retroesternal',
                'Irradiação típica',
                'Dispneia ao esforço sem outra explicação',
                'Fatores de risco cardiovascular presentes'
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0 mt-1.5"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Afastam Suspeita */}
          <div className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <XCircle size={16} className="text-orange-500" />
              Afastam o Padrão Clássico
            </h3>
            <ul className="space-y-2">
              {[
                'Dor em pontada ou pleurítica',
                'Dor bem localizada (aponta com um dedo)',
                'Dor reproduzida à palpação (musculoesquelética)',
                'Dor muito prolongada sem relação com esforço',
                'Queimação isolada com relação alimentar (TGI)'
              ].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-4 bg-orange-50 dark:bg-orange-900/20 p-2 rounded border border-orange-100 dark:border-orange-900/30">
              Atenção: isso não exclui doença coronariana, apenas reduz a probabilidade do quadro clássico.
            </p>
          </div>
        </div>

        {/* Diagnósticos Diferenciais */}
        <div className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400">
              <ShieldAlert size={20} />
            </div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Diagnósticos Diferenciais</h2>
          </div>
          
          <div className="space-y-4">
            {[
              { group: 'Cardíacas', examples: 'Estenose aórtica, miocardiopatia hipertrófica, arritmias, HAS grave, IC' },
              { group: 'Vasculares', examples: 'Dissecção aguda de aorta, TEP' },
              { group: 'Pulmonares', examples: 'Doença pleural, causas respiratórias' },
              { group: 'Gastrointestinais', examples: 'Refluxo, espasmo esofágico' },
              { group: 'Musculoesqueléticas', examples: 'Dor da parede torácica, costocondrite' },
              { group: 'Psicogênicas', examples: 'Ansiedade, síndrome do pânico, somatização' }
            ].map(item => (
              <div key={item.group} className="bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
                <span className="text-sm font-bold text-brand-navy dark:text-slate-200 block mb-1">{item.group}</span>
                <span className="text-xs text-ink-muted dark:text-slate-400">{item.examples}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
