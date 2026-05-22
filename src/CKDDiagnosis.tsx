import React from 'react';
import { 
  ClipboardCheck, 
  Search, 
  Activity, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Zap,
  Microscope,
  ChevronRight
} from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default function CKDDiagnosis() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. DEFINIÇÃO DE DRC (KDIGO 2024) */}
      <section id="definition">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <ClipboardCheck size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Definição de DRC (KDIGO 2024)</h2>
        </div>

        <div className="card p-6 border-brand-blue/20 bg-brand-blue/5 mb-6">
          <div className="flex gap-4">
            <div className="mt-1 text-brand-blue">
              <Info size={20} />
            </div>
            <div>
              <p className="text-lg font-medium text-brand-navy leading-relaxed italic">
                "Anormalidades da estrutura ou função renal, presentes por <span className="text-brand-blue font-bold">≥ 3 meses</span>, com implicações para a saúde."
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "eTFG < 60", desc: "Qualquer valor abaixo de 60 mL/min/1,73m².", example: "Creatinina elevada cronicamente" },
            { title: "Albuminúria ≥ 30", desc: "RAC ≥ 30 mg/g (marcador de dano glomerular).", example: "RAC 180 mg/g persistente" },
            { title: "Sedimento Urinário", desc: "Cilindros hemáticos, leucocitários.", example: "Glomerulonefrite ativa" },
            { title: "Distúrbios Tubulares", desc: "Acidose tubular, perda de eletrólitos.", example: "Nefrite intersticial" },
            { title: "Histologia", desc: "Anormalidades na biópsia renal.", example: "Glomeruloesclerose, fibrose" },
            { title: "Imagem", desc: "Rins policísticos, USG: rim < 9 cm.", example: "Hidronefrose crônica" },
            { title: "Transplante", desc: "Histórico de transplante renal.", example: "DRC estágio G1T" },
          ].map((item, idx) => (
            <div key={idx} className="card p-4 border-line hover:border-brand-blue/30 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue" />
                <h3 className="font-bold text-brand-navy text-sm">{item.title}</h3>
              </div>
              <p className="text-[11px] text-ink-muted mb-2">{item.desc}</p>
              <div className="text-[10px] font-mono text-brand-blue bg-brand-blue/10 px-2 py-1 rounded uppercase">
                Ex: {item.example}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex gap-4">
          <AlertTriangle className="text-amber-500 shrink-0" size={20} />
          <p className="text-sm text-amber-200/80">
            <strong className="text-amber-500">Armadilha Clínica:</strong> Um único exame alterado <span className="underline">não</span> fecha DRC. É obrigatória a persistência por 3 meses.
          </p>
        </div>
      </section>

      {/* 2. EXAMES COMPLEMENTARES */}
      <section id="exams">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Search size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Exames para Diagnóstico</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Função Renal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
              <Activity size={18} className="text-brand-blue" />
              Função Renal (Filtração)
            </h3>
            <div className="space-y-3">
              {[
                { name: "Creatinina Sérica", pros: "Barato, disponível", cons: "Influenciada por massa muscular, dieta" },
                { name: "eTFG (CKD-EPI 2021)", pros: "Padrão atual, sem fator raça", cons: "Ainda depende da creatinina" },
                { name: "Cistatina C Sérica", pros: "Independente de massa muscular", cons: "Mais cara, menos disponível" },
                { name: "eTFG (Cr + Cistatina C)", pros: "Mais precisa, padrão-ouro", cons: "Custo mais alto" },
              ].map((ex, i) => (
                <div key={i} className="card p-4 border-line">
                  <div className="font-bold text-brand-navy text-sm mb-1">{ex.name}</div>
                  <div className="grid grid-cols-2 gap-2 text-[10px]">
                    <div className="text-emerald-400">✓ {ex.pros}</div>
                    <div className="text-rose-400">✗ {ex.cons}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dano Renal */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-brand-navy flex items-center gap-2">
              <Microscope size={18} className="text-brand-pink" />
              Dano Renal (Estrutural)
            </h3>
            <div className="space-y-3">
              {[
                { name: "RAC (UACR)", desc: "Albuminúria (dano glomerular)", use: "Todo rastreio de DRC - Essencial" },
                { name: "Sedimento Urinário", desc: "Cilindros, hemácias dismórficas", use: "Suspeita de Glomerulonefrite" },
                { name: "Ultrassonografia", desc: "Tamanho, forma, cistos", use: "Todo diagnóstico novo" },
                { name: "Biópsia Renal", desc: "Histologia definitiva", use: "Causa incerta que muda conduta" },
              ].map((ex, i) => (
                <div key={i} className="card p-4 border-line">
                  <div className="font-bold text-brand-navy text-sm mb-1">{ex.name}</div>
                  <p className="text-[10px] text-ink-muted mb-1">{ex.desc}</p>
                  <div className="text-[10px] font-bold text-brand-pink uppercase tracking-wider">{ex.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. ALGORITMO DIAGNÓSTICO */}
      <section id="algorithm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Algoritmo Diagnóstico Integrado</h2>
        </div>

        <div className="card p-8 border-brand-blue/20 bg-slate-900/50">
          <div className="flex flex-col items-center gap-4">
            <div className="px-6 py-3 rounded-xl bg-brand-navy border border-brand-blue text-white font-bold text-sm text-center shadow-lg">
              Paciente com Fator de Risco (DM, HAS, Idade &gt; 65)
            </div>
            <ArrowRight className="rotate-90 text-brand-blue" />
            <div className="px-6 py-3 rounded-xl bg-brand-blue/20 border border-brand-blue text-brand-blue font-bold text-sm text-center">
              RASTREIO: eTFG (Creatinina) + RAC (Urina)
            </div>
            <ArrowRight className="rotate-90 text-brand-blue" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              <div className="flex flex-col items-center gap-4">
                <div className="text-xs font-bold text-emerald-400">eTFG ≥ 60 E RAC &lt; 30</div>
                <ArrowRight className="rotate-90 text-emerald-400" />
                <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 text-xs text-center">
                  Repetir anualmente
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="text-xs font-bold text-rose-400">eTFG &lt; 60 OU RAC ≥ 30</div>
                <ArrowRight className="rotate-90 text-rose-400" />
                <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/5 text-xs text-center">
                  Repetir em 4-8 semanas (Total 3 meses)
                </div>
                <ArrowRight className="rotate-90 text-rose-400" />
                <div className="p-4 rounded-xl bg-brand-blue border border-brand-blue text-white font-bold text-sm shadow-xl">
                  DIAGNÓSTICO DE DRC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. NOVIDADES KDIGO 2026 */}
      <section id="kdigo-2026">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-brand-pink/20 flex items-center justify-center text-brand-pink">
            <Zap size={24} />
          </div>
          <h2 className="text-2xl font-bold text-brand-navy">Novidades KDIGO 2026</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { title: "LRA/AKD", desc: "Formalização do conceito de Doença Renal Aguda (7 dias – 3 meses). Evita rotular como DRC casos que ainda podem recuperar." },
            { title: "Biomarcadores", desc: "Recomendação forte de Cistatina C para confirmar eTFG em casos de dúvida (extremos de massa muscular)." },
            { title: "Diabetes", desc: "Triagem universal e periódica para todos os adultos com DM, não apenas os de alto risco." },
            { title: "Anemia", desc: "Rastreamento de anemia antecipado para o estágio G3a (antes era apenas a partir de G3b)." },
          ].map((item, i) => (
            <div key={i} className="card p-4 border-brand-pink/20 bg-brand-pink/5">
              <h4 className="font-bold text-brand-pink text-sm mb-1">{item.title}</h4>
              <p className="text-[11px] text-ink leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
