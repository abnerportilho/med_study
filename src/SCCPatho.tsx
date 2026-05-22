import React from 'react';
import { BookOpen, Activity, AlertCircle, Search, LayoutDashboard, Pill, Droplet, Wind, Heart, Stethoscope, Users, ChevronRight, Menu, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function SCCPatho() {
  return (
    <div className="flex flex-col gap-8">
      {/* Definição */}
      <section className="card p-6 border-l-4 border-l-brand-blue bg-card dark:bg-slate-900/50 border-line dark:border-slate-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
            <BookOpen size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Definição</h2>
        </div>
        <p className="text-ink dark:text-slate-300 mb-4">
          A SCC é uma <strong>alteração anatômica e/ou funcional</strong> que leva à isquemia do músculo cardíaco — ou seja, um desequilíbrio entre a oferta e a demanda de oxigênio.
        </p>
        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
          <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-3 uppercase tracking-wider">Características Importantes</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
              <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
              <span>Quase sempre <strong>reversível</strong></span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
              <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
              <span>Tem relação com <strong>esforço físico</strong></span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
              <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
              <span>Causa mais comum: <strong>aterosclerose</strong></span>
            </li>
            <li className="flex items-start gap-2 text-sm text-ink-muted dark:text-slate-400">
              <CheckCircle2 size={16} className="text-green-500 shrink-0 mt-0.5" />
              <span>Outras causas: vasoespasmo, disfunção microvascular, disfunção ventricular</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Fisiopatologia */}
      <section className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Activity size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Fisiopatologia</h2>
        </div>
        
        <p className="text-ink dark:text-slate-300 mb-6">
          É uma doença <strong>inflamatória crônica sistêmica</strong> da camada íntima das artérias, que começa na adolescência.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Cascata de Formação da Placa */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-4 uppercase tracking-wider">Formação da Placa</h3>
            <div className="flex flex-col gap-2 relative">
              <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-brand-blue/20"></div>
              
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
                <p className="text-sm text-ink-muted dark:text-slate-400 pt-0.5">LDL penetra a íntima → oxida</p>
              </div>
              
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
                <p className="text-sm text-ink-muted dark:text-slate-400 pt-0.5">Endotélio ativa → monócito adere e migra</p>
              </div>
              
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
                <p className="text-sm text-ink-muted dark:text-slate-400 pt-0.5">Monócito vira macrófago → fagocita LDL oxidado</p>
              </div>
              
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0">4</div>
                <p className="text-sm text-ink-muted dark:text-slate-400 pt-0.5">Vira célula espumosa (foam cell)</p>
              </div>
              
              <div className="flex items-start gap-3 relative z-10">
                <div className="w-6 h-6 rounded-full bg-brand-blue text-white flex items-center justify-center text-xs font-bold shrink-0">5</div>
                <p className="text-sm text-ink-muted dark:text-slate-400 pt-0.5">Necrose → núcleo lipídico + cápsula fibrosa</p>
              </div>

              <div className="flex items-start gap-3 relative z-10 mt-2">
                <div className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center shrink-0">
                  <AlertTriangle size={12} />
                </div>
                <p className="text-sm font-bold text-red-600 dark:text-red-400 pt-0.5">PLACA ATEROSCLERÓTICA</p>
              </div>
            </div>
          </div>

          {/* Placa Estável vs Vulnerável */}
          <div className="flex flex-col gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 rounded-xl">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-900/30">
              <p className="text-sm text-blue-800 dark:text-blue-300">
                A inflamação age em todas as fases: recrutamento celular, oxidação do LDL, produção de proteases que destroem a cápsula, e hipercoagulabilidade pós-rotura.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-line dark:border-slate-800">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 dark:bg-slate-800 text-brand-navy dark:text-slate-200 font-bold">
                  <tr>
                    <th className="px-4 py-3 border-b border-line dark:border-slate-700">Característica</th>
                    <th className="px-4 py-3 border-b border-line dark:border-slate-700 text-green-700 dark:text-green-400">Placa Estável</th>
                    <th className="px-4 py-3 border-b border-line dark:border-slate-700 text-red-700 dark:text-red-400">Placa Vulnerável</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line dark:divide-slate-800">
                  <tr>
                    <td className="px-4 py-3 font-medium text-ink dark:text-slate-300">Cápsula</td>
                    <td className="px-4 py-3 text-ink-muted dark:text-slate-400">Espessa</td>
                    <td className="px-4 py-3 text-ink-muted dark:text-slate-400">Fina</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-ink dark:text-slate-300">Núcleo</td>
                    <td className="px-4 py-3 text-ink-muted dark:text-slate-400">Pequeno</td>
                    <td className="px-4 py-3 text-ink-muted dark:text-slate-400">Grande</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-ink dark:text-slate-300">Desfecho</td>
                    <td className="px-4 py-3 text-green-600 dark:text-green-400 font-medium">Obstrução gradual → SCC</td>
                    <td className="px-4 py-3 text-red-600 dark:text-red-400 font-medium">Rotura → SCA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Fatores de Risco */}
      <section className="card p-6 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400">
            <AlertTriangle size={20} />
          </div>
          <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Fatores de Risco</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              Modificáveis
            </h3>
            <ul className="space-y-2">
              {['LDL elevado', 'HDL reduzido', 'Hipertensão arterial', 'Diabetes mellitus', 'Tabagismo', 'Obesidade', 'Sedentarismo'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-muted dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 border border-line dark:border-slate-800 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
            <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              Não Modificáveis
            </h3>
            <ul className="space-y-2 mb-6">
              {['Idade > 55 anos', 'Sexo masculino', 'Histórico familiar'].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-ink-muted dark:text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-3 border border-orange-100 dark:border-orange-900/30 flex items-start gap-2">
              <div className="text-orange-500 shrink-0 mt-0.5">💡</div>
              <p className="text-xs text-orange-800 dark:text-orange-300">
                Os não modificáveis pesam no cálculo de risco e na decisão de tratar mais agressivamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cenários Clínicos */}
      <section className="card p-6 border-l-4 border-l-purple-500 bg-card dark:bg-slate-900/50 border-line dark:border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <LayoutDashboard size={20} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-brand-navy dark:text-slate-100">Cenários Clínicos da SCC</h2>
            <p className="text-sm text-ink-muted dark:text-slate-400">A diretriz define 5 cenários em que a SCC pode se manifestar:</p>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          {[
            {
              id: 1,
              title: "O mais clássico",
              desc: "Paciente com angina estável ou dispneia aos esforços",
              result: "Isquemia desencadeada pelo aumento da demanda"
            },
            {
              id: 2,
              title: "IC de etiologia coronariana",
              desc: "Paciente com insuficiência cardíaca + suspeita de origem isquêmica com disfunção de VE",
              result: "Isquemia crônica levando à disfunção ventricular"
            },
            {
              id: 3,
              title: "Pós-evento",
              desc: "Paciente que já teve SCA ou foi submetido a revascularização (ICP ou CRM)",
              result: "Fase estável após o evento agudo"
            },
            {
              id: 4,
              title: "Sem obstrução significativa",
              desc: "Paciente com angina microvascular ou vasoespasmo",
              result: "Isquemia sem lesão obstrutiva significativa (chamado de ANOCA/INOCA)"
            },
            {
              id: 5,
              title: "Achado incidental",
              desc: "Paciente assintomático com doença detectada em avaliação cardiológica de rotina",
              result: "Ex: angiotomografia ou escore de cálcio alterado"
            }
          ].map(cenario => (
            <div key={cenario.id} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 border border-line dark:border-slate-800 flex flex-col md:flex-row md:items-center gap-4 transition-all duration-300 hover:shadow-md hover:border-brand-blue/30 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 border border-line dark:border-slate-700 flex items-center justify-center text-brand-navy dark:text-slate-100 font-bold text-lg shrink-0 shadow-sm">
                {cenario.id}
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-brand-navy dark:text-slate-200 mb-1">{cenario.title}</h3>
                <p className="text-sm text-ink-muted dark:text-slate-400">{cenario.desc}</p>
              </div>
              <div className="hidden md:flex items-center text-slate-300 dark:text-slate-600">
                <ArrowRight size={20} />
              </div>
              <div className="md:w-1/3 bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-line dark:border-slate-700 shadow-sm">
                <p className="text-xs font-medium text-brand-blue dark:text-blue-400">{cenario.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo Lógico */}
        <div className="mt-8 bg-brand-navy dark:bg-slate-950 rounded-xl p-6 text-white relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-800/40 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-blue/20 rounded-full -ml-12 -mb-12"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-1">Isquemia miocárdica crônica</h3>
              <p className="text-slate-300 dark:text-slate-400 text-sm">Pode se manifestar como:</p>
            </div>
            
            <div className="hidden md:block text-brand-blue dark:text-blue-400">
              <ArrowRight size={24} />
            </div>

            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="bg-slate-800/40 rounded-lg px-3 py-2 text-xs">Angina/dispneia aos esforços (1)</div>
              <div className="bg-slate-800/40 rounded-lg px-3 py-2 text-xs">Disfunção ventricular / IC (2)</div>
              <div className="bg-slate-800/40 rounded-lg px-3 py-2 text-xs">Fase pós-SCA ou pós-revascularização (3)</div>
              <div className="bg-slate-800/40 rounded-lg px-3 py-2 text-xs">Vasoespasmo / disfunção microvascular (4)</div>
              <div className="bg-slate-800/40 rounded-lg px-3 py-2 text-xs sm:col-span-2">Assintomático com exame alterado (5)</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
