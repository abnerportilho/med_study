import React from 'react';
import { 
  Stethoscope, 
  Wind, 
  AlertTriangle, 
  Heart, 
  Info, 
  Eye, 
  Ear, 
  Activity,
  Layers,
  ThermometerSnowflake,
  ShieldAlert
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function COPDClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. ANAMNESE */}
      <section id="anamnesis">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Stethoscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Anamnese: As Pistas no Discurso</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Dispneia */}
          <div className="card p-6 border-line hover:border-brand-blue/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Wind size={18} />
              </div>
              <h3 className="font-bold text-brand-navy">Dispneia (O Sintoma Capital)</h3>
            </div>
            <p className="text-sm text-ink leading-relaxed mb-4">
              <span className="font-bold text-brand-blue">Progressiva, Persistente e relacionada a Esforços.</span> Diferente da Asma (paroxística) e da ICC (ortopneia), a dispneia da DPOC é diária e piora lentamente ao longo de anos.
            </p>
            <div className="p-4 rounded-xl bg-slate-800/50 border border-line">
              <h4 className="text-xs font-bold text-brand-navy mb-2">Escala mMRC (O que deixa de fazer?)</h4>
              <ul className="space-y-2 text-[11px] text-ink-muted">
                <li><span className="font-bold text-ink">Grau 1:</span> Falta de ar em exercícios intensos.</li>
                <li><span className="font-bold text-ink">Grau 2:</span> Anda mais devagar que pessoas da mesma idade.</li>
                <li><span className="font-bold text-amber-500">Grau 3:</span> Para após andar 100m ou poucos minutos.</li>
                <li><span className="font-bold text-rose-400">Grau 4:</span> Falta de ar para tomar banho/trocar de roupa.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {/* Tosse e Expectoração */}
            <div className="card p-6 border-line hover:border-emerald-500/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Activity size={18} />
                </div>
                <h3 className="font-bold text-brand-navy">Tosse e Expectoração</h3>
              </div>
              <p className="text-xs text-ink-muted leading-relaxed mb-2">
                <span className="font-bold text-ink">Bronquite Crônica:</span> Tosse produtiva por ≥ 3 meses/ano, por 2 anos consecutivos.
              </p>
              <ul className="space-y-1 text-[11px] text-ink-muted">
                <li>• <span className="font-bold text-ink">Basal:</span> Mucóide (toalete matinal).</li>
                <li>• <span className="font-bold text-amber-500">Exacerbação:</span> Purulenta e aumento do volume.</li>
              </ul>
            </div>

            {/* Gatilhos */}
            <div className="card p-6 border-line hover:border-amber-500/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <ShieldAlert size={18} />
                </div>
                <h3 className="font-bold text-brand-navy">Gatilhos de Piora</h3>
              </div>
              <ul className="space-y-2 text-xs text-ink-muted">
                <li className="flex items-center gap-2">
                  <AlertTriangle size={14} className="text-amber-500" />
                  <span><span className="font-bold text-ink">Infecções Virais (IVAS):</span> Demora semanas para melhorar.</span>
                </li>
                <li className="flex items-center gap-2">
                  <ThermometerSnowflake size={14} className="text-blue-400" />
                  <span><span className="font-bold text-ink">Frio:</span> Ar seco funciona como estímulo broncoconstritor.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INSPEÇÃO */}
      <section id="inspection">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink">
            <Eye size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Inspeção: A Materialização da Hiperinsuflação</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-line bg-slate-800/30">
            <h3 className="font-bold text-brand-pink mb-4 uppercase text-xs tracking-wider">Inspeção Estática</h3>
            <ul className="space-y-4 text-sm text-ink-muted">
              <li>
                <span className="font-bold text-ink block mb-1">Tórax em Tonel</span>
                Aumento do Diâmetro AP. O tórax fica arredondado, parecendo estar em inspiração profunda constante. Ângulo de Charpy obtuso (&gt;90°).
              </li>
              <li>
                <span className="font-bold text-ink block mb-1">Musculatura Acessória</span>
                Esternocleidomastóideo e Escalenos hipertrofiados e encurtados. Ombros elevados (Cintura Escapular em Suspensão).
              </li>
              <li className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                <span className="font-bold text-rose-400 block mb-1">Sinal de Hoover</span>
                Respiração paradoxal em casos avançados (abdome afunda na inspiração devido ao diafragma retificado).
              </li>
            </ul>
          </div>

          <div className="card p-6 border-line bg-slate-800/30">
            <h3 className="font-bold text-brand-blue mb-4 uppercase text-xs tracking-wider">Inspeção Dinâmica</h3>
            <ul className="space-y-4 text-sm text-ink-muted">
              <li>
                <span className="font-bold text-ink block mb-1">Fase Expiratória Prolongada</span>
                Relação Inspiração:Expiração passa de 1:2 para 1:3 ou 1:4.
              </li>
              <li className="p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-xl">
                <span className="font-bold text-brand-blue block mb-2 flex items-center gap-2">
                  <Wind size={16} /> Freno Labial
                </span>
                <p className="text-xs leading-relaxed">
                  Achado mais específico da DPOC avançada. O paciente expira contra os lábios semicerrados para aumentar a PEEP extrínseca, empurrando o PIP para jusante e impedindo o colapso bronquiolar precoce.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. PALPAÇÃO E PERCUSSÃO */}
      <section id="palpation-percussion">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Layers size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Palpação e Percussão</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-5 border-line">
            <h4 className="font-bold text-emerald-500 text-sm mb-2">Expansibilidade</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              <span className="font-bold text-ink">Diminuída Globalmente.</span> O tórax parece um "barril de chumbo", duro e pouco complacente, pois já está hiperinsuflado ao máximo.
            </p>
          </div>
          <div className="card p-5 border-line">
            <h4 className="font-bold text-emerald-500 text-sm mb-2">Frêmito Toracovocal (FTV)</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              <span className="font-bold text-ink">Diminuído ou Abolido.</span> O excesso de ar e a destruição do parênquima amortecem a transmissão da vibração vocal.
            </p>
          </div>
          <div className="card p-5 border-line">
            <h4 className="font-bold text-emerald-500 text-sm mb-2">Percussão</h4>
            <p className="text-xs text-ink-muted leading-relaxed">
              <span className="font-bold text-ink">Hipersonoridade Difusa.</span> Limite inferior do pulmão rebaixado (som claro pulmonar até o 7º/8º EIC, onde normalmente haveria macicez hepática).
            </p>
          </div>
        </div>
      </section>

      {/* 4. AUSCULTA PULMONAR */}
      <section id="auscultation">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <Ear size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">4. Ausculta Pulmonar: A Tradução do PIP</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border-line">
            <h3 className="font-bold text-brand-navy mb-3">Murmúrio Vesicular (MV)</h3>
            <p className="text-sm text-ink-muted leading-relaxed mb-4">
              <span className="font-bold text-ink">Universalmente Diminuído.</span> O fluxo aéreo é baixo. "Brisa fraca passando por uma árvore seca".
            </p>
            <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg flex items-start gap-3">
              <AlertTriangle className="text-rose-500 shrink-0 mt-0.5" size={16} />
              <p className="text-xs text-rose-300">
                <span className="font-bold text-rose-400">Sinal de Alarme:</span> MV ausente em um hemitórax + piora súbita da dispneia = <span className="font-bold">Pneumotórax</span> (ruptura de bolha).
              </p>
            </div>
          </div>

          <div className="card p-6 border-line">
            <h3 className="font-bold text-brand-navy mb-3">Ruídos Adventícios</h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li>
                <span className="font-bold text-amber-500 block">Sibilos Expiratórios</span>
                Fase expiratória final. Na expiração forçada, o sopro é interrompido por silêncio ou sibilo tardio (colapso do PIP em tempo real).
              </li>
              <li>
                <span className="font-bold text-brand-blue block">Roncos</span>
                Comuns na Bronquite Crônica (secreção solta). Modificam com a tosse.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl border border-line bg-slate-800/50 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brand-navy flex items-center justify-center text-slate-300 shrink-0">
            <Activity size={18} />
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Tempo Expiratório Forçado (TEF)</h4>
            <p className="text-xs text-ink-muted">
              Auscultar a traqueia e pedir para soprar tudo. <span className="font-bold text-amber-500">&gt; 6 segundos</span> sugere obstrução grave (VEF1 &lt; 40%).
            </p>
          </div>
        </div>
      </section>

      {/* 5. SEMIOLOGIA CARDIOVASCULAR */}
      <section id="cardiovascular">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-rose-500/20 flex items-center justify-center text-rose-500">
            <Heart size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">5. Semiologia Cardiovascular (Cor Pulmonale)</h2>
        </div>

        <div className="card p-6 border-rose-500/20 bg-gradient-to-br from-slate-900 to-rose-950/30">
          <p className="text-sm text-slate-300 mb-6">
            Consequência crônica da Hipertensão Pulmonar gerada pela hipoxemia e destruição do leito capilar.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Ausculta Cardíaca</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• <span className="font-bold text-white">B2 Hiperfonética:</span> Em foco pulmonar (pulso paraesternal esquerdo).</li>
                <li>• <span className="font-bold text-white">Sopro de Rivero-Carvallo:</span> Insuficiência tricúspide que aumenta com a inspiração profunda.</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider">Sinais Sistêmicos (IC Direita)</h4>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>• <span className="font-bold text-white">Turgência Jugular:</span> Piora com compressão hepática (Refluxo Hepatojugular).</li>
                <li>• <span className="font-bold text-white">Hepatomegalia Dolorosa e Ascite.</span></li>
                <li>• <span className="font-bold text-white">Edema de MMII:</span> Simétrico, frio e mole.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. QUADRO RESUMO: FENÓTIPOS */}
      <section id="phenotypes-summary">
        <div className="card overflow-hidden border-line">
          <div className="bg-brand-navy p-4 text-white font-bold text-center">
            Os Dois Extremos do Fenótipo Clínico
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-800/50">
                  <th className="p-4 border border-line">Achado Semiológico</th>
                  <th className="p-4 border border-line text-brand-pink">Pink Puffer (Enfisematoso)</th>
                  <th className="p-4 border border-line text-brand-blue">Blue Bloater (Bronquítico)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Estado Geral</td>
                  <td className="p-4 border border-line">Caquético, emagrecido, <span className="font-bold">soprando ar</span></td>
                  <td className="p-4 border border-line">Obeso, pletórico, <span className="font-bold">sonolento</span></td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Cor da Pele</td>
                  <td className="p-4 border border-line font-bold text-brand-pink">Rosada (mantém O2)</td>
                  <td className="p-4 border border-line font-bold text-brand-blue">Cianótico (Hipoventilação)</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Freno Labial</td>
                  <td className="p-4 border border-line font-bold text-emerald-400">Muito Frequente</td>
                  <td className="p-4 border border-line">Menos frequente</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Ausculta Pulmonar</td>
                  <td className="p-4 border border-line">MV quase abolido (silêncio)</td>
                  <td className="p-4 border border-line font-bold">Sibilos e Roncos profusos</td>
                </tr>
                <tr>
                  <td className="p-4 border border-line font-bold bg-slate-800/30">Cor Pulmonale</td>
                  <td className="p-4 border border-line">Tardio</td>
                  <td className="p-4 border border-line font-bold text-rose-400">PRECOCE e grave</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex gap-4 items-start">
          <Info className="text-brand-blue shrink-0 mt-0.5" size={20} />
          <div>
            <p className="text-xs font-bold text-brand-navy mb-1">Por que o Blue Bloater é sonolento?</p>
            <p className="text-xs text-brand-blue/80 leading-relaxed">
              A sonolência está frequentemente associada à <strong>Síndrome de Hipoventilação-Obesidade (Síndrome de Pickwick)</strong> e à retenção crônica de CO₂ (hipercapnia), que causa narcose.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
