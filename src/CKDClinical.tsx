import React from 'react';
import { 
  Stethoscope, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  Activity,
  Zap,
  ChevronRight,
  Info
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function CKDClinical() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. APRESENTAÇÃO CLÍNICA */}
      <section id="clinical-presentation">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Stethoscope size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">1. Apresentação Clínica e Síndrome Urêmica</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6 border-emerald-500/20 bg-emerald-500/5">
            <h3 className="font-bold text-emerald-400 mb-2 flex items-center gap-2">
              <CheckCircle2 size={18} />
              DRC Precoce (G1-G3a)
            </h3>
            <p className="text-sm text-ink leading-relaxed">
              Geralmente <span className="font-bold underline">assintomática</span>. A grande armadilha clínica. A única pista pode ser hipertensão de difícil controle ou albuminúria detectada em rastreio de rotina.
            </p>
          </div>
          <div className="card p-6 border-rose-500/20 bg-rose-500/5">
            <h3 className="font-bold text-rose-400 mb-2 flex items-center gap-2">
              <AlertTriangle size={18} />
              DRC Avançada (G3b-G5)
            </h3>
            <p className="text-sm text-ink leading-relaxed">
              Surgimento da <span className="font-bold">Síndrome Urêmica</span>. Ocorre quando a filtração cai a níveis críticos, levando ao acúmulo de toxinas nitrogenadas e distúrbios hidroeletrolíticos.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { 
              system: "Neurológico", 
              classic: "Fadiga, sonolência, confusão mental, déficit de atenção.", 
              atypical: "Mioclonia, cegueira cortical, neuropatia periférica em bota/luva, soluços intratáveis." 
            },
            { 
              system: "Cardiovascular", 
              classic: "Edema periférico, HAS refratária, dispneia (congestão).", 
              atypical: "Pericardite urêmica (atrito pericárdico), calcifilaxia (úlceras isquêmicas dolorosas)." 
            },
            { 
              system: "Hematológico", 
              classic: "Anemia normo/normo (queda de EPO), palidez cutânea.", 
              atypical: "Disfunção plaquetária (sangramentos espontâneos, equimoses), imunodeficiência funcional." 
            },
            { 
              system: "Gastrointestinal", 
              classic: "Náuseas, vômitos matinais, anorexia, halitose (hálito urêmico).", 
              atypical: "Ascite urêmica, íleo paralítico, gastrite/duodenite erosiva." 
            },
            { 
              system: "Dermatológico", 
              classic: "Prurido intenso, xerose (pele seca), hiperpigmentação.", 
              atypical: "Frost urêmico (cristais brancos de ureia na pele) — sinal de uremia terminal." 
            },
            { 
              system: "Eletrolítico", 
              classic: "Hipercalemia, Acidose Metabólica, Hiperfosfatemia.", 
              atypical: "Hipocalcemia, Hipermagnesemia, Hiponatremia dilucional." 
            },
          ].map((item, i) => (
            <div key={i} className="card p-5 border-line flex flex-col md:flex-row gap-4 md:items-start hover:border-brand-blue/30 transition-all">
              <div className="md:w-40 shrink-0">
                <div className="font-bold text-brand-blue text-sm mb-1">{item.system}</div>
                <div className="w-8 h-1 bg-brand-blue/20 rounded-full" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="text-xs text-ink leading-relaxed">
                  <span className="font-bold text-ink-muted uppercase text-[9px] block mb-1">Manifestações Clássicas:</span> 
                  {item.classic}
                </div>
                <div className="text-xs text-rose-300 font-medium leading-relaxed">
                  <span className="font-bold text-rose-500/50 uppercase text-[9px] block mb-1">Red Flags / Atípicas:</span> 
                  {item.atypical}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. DISTÚRBIOS ELETROLÍTICOS E ÁCIDO-BÁSICOS */}
      <section id="electrolytes">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-500">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">2. Distúrbios Eletrolíticos e Ácido-Básicos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {[
            { 
              title: "Hipercalemia", 
              desc: "Redução da secreção distal de K+. Risco de arritmias fatais.", 
              detail: "Geralmente surge com eTFG < 20-25." 
            },
            { 
              title: "Acidose Metabólica", 
              desc: "Retenção de H+ e perda de bicarbonato. Piora a progressão da DRC.", 
              detail: "Ânion-Gap aumentado (acúmulo de ácidos)." 
            },
            { 
              title: "Sódio (Hiponatremia)", 
              desc: "Hiponatremia dilucional por incapacidade de excretar água livre.", 
              detail: "Cuidado com reposição hídrica excessiva." 
            },
            { 
              title: "Hiperfosfatemia", 
              desc: "Retenção de fósforo por queda na filtração.", 
              detail: "Gatilho para o Hiperparatireoidismo Secundário." 
            },
            { 
              title: "Hipocalcemia", 
              desc: "Queda na síntese de Calcitriol (Vit D ativa).", 
              detail: "Leva à reabsorção óssea e dor." 
            },
            { 
              title: "Hipermagnesemia", 
              desc: "Geralmente assintomática até estágios terminais.", 
              detail: "Evitar antiácidos com Magnésio." 
            },
          ].map((item, i) => (
            <div key={i} className="card p-4 border-amber-500/10 bg-amber-500/5">
              <h4 className="font-bold text-amber-500 text-sm mb-1">{item.title}</h4>
              <p className="text-[11px] text-ink leading-relaxed mb-2">{item.desc}</p>
              <div className="text-[9px] font-bold text-amber-600/70 uppercase tracking-wider">{item.detail}</div>
            </div>
          ))}
        </div>

        {/* Pérola de Prova: Gasometria na Uremia */}
        <div className="card p-6 border-brand-blue/30 bg-brand-blue/5 border-l-4 border-l-brand-blue">
          <div className="flex gap-4">
            <div className="mt-1 text-brand-blue">
              <Info size={20} />
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-brand-navy flex items-center gap-2">
                Pérola de Prova: O Cenário Gasométrico da Uremia
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-brand-blue">pCO₂ Reduzido</p>
                  <p className="text-[11px] text-ink-muted leading-relaxed">
                    Resposta compensatória fisiológica (hiperventilação). O corpo tenta "lavar" o ácido volátil (CO₂) para compensar a queda do pH.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-bold text-brand-blue">Ânion-Gap (AG) Aumentado</p>
                  <p className="text-[11px] text-ink-muted leading-relaxed">
                    Ocorre pelo acúmulo de ácidos orgânicos e inorgânicos (<span className="font-bold">sulfatos, fosfatos, hipurato</span>) que não são medidos no ionograma padrão.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXAME FÍSICO DIRECIONADO */}
      <section id="physical-exam">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">3. Exame Físico Direcionado</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card p-4 border-line">
            <h4 className="text-xs font-bold text-brand-blue uppercase mb-2">Volemia</h4>
            <ul className="text-xs text-ink-muted space-y-1">
              <li>• Edema de MMII (cacifo)</li>
              <li>• Turgência jugular a 45°</li>
              <li>• Estertoração crepitante</li>
            </ul>
          </div>
          <div className="card p-4 border-line">
            <h4 className="text-xs font-bold text-brand-blue uppercase mb-2">Pele e Mucosas</h4>
            <ul className="text-xs text-ink-muted space-y-1">
              <li>• Palidez de mucosas (anemia)</li>
              <li>• Escoriações (prurido)</li>
              <li>• Hálito cetônico/urêmico</li>
            </ul>
          </div>
          <div className="card p-4 border-line">
            <h4 className="text-xs font-bold text-brand-blue uppercase mb-2">Sinais Vitais</h4>
            <ul className="text-xs text-ink-muted space-y-1">
              <li>• Hipertensão (causa ou efeito)</li>
              <li>• Respiração de Kussmaul (acidose)</li>
              <li>• Atrito pericárdico</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. DIAGNÓSTICO DIFERENCIAL */}
      <section id="differential">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Clock size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">4. Diagnóstico Diferencial: DRC × LRA × AKD</h2>
        </div>

        <div className="card overflow-hidden border-line">
          <div className="grid grid-cols-4 text-[10px] font-bold text-center bg-slate-800 p-4">
            <div className="text-left">Característica</div>
            <div className="text-brand-pink">LRA (Aguda)</div>
            <div className="text-brand-orange">AKD (Subaguda)</div>
            <div className="text-brand-blue">DRC (Crônica)</div>
          </div>
          <div className="divide-y divide-line">
            {[
              { label: "Duração", lra: "< 7 dias", akd: "7 dias - 3 meses", drc: "≥ 3 meses" },
              { label: "Critério", lra: "Cr ↑ ≥ 0,3mg/dL em 48h ou ≥ 1,5x basal", akd: "Persistência da LRA ou eTFG < 60", drc: "eTFG < 60 ou Marcador de Dano" },
              { label: "Reversibilidade", lra: "Alta potencial", akd: "Intermediária", drc: "Baixa (Progressiva)" },
              { label: "Tamanho Renal (USG)", lra: "Normal ou Aumentado", akd: "Variável", drc: "Geralmente Reduzido (< 9cm)" },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-4 text-[10px] text-center p-4 hover:bg-slate-800/30 transition-colors">
                <div className="font-bold text-ink-muted text-left">{row.label}</div>
                <div className="text-ink">{row.lra}</div>
                <div className="text-ink">{row.akd}</div>
                <div className="text-ink font-bold">{row.drc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex gap-4">
          <Info className="text-brand-blue shrink-0" size={20} />
          <p className="text-xs text-brand-blue/80">
            <strong>Dica Clínica:</strong> Na dúvida entre LRA e DRC em um paciente sem exames prévios, a presença de rins pequenos ao USG, anemia normocítica e distúrbios minerais (PTH elevado) sugere cronicidade.
          </p>
        </div>
      </section>
    </div>
  );
}
