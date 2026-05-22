import React from 'react';
import { ArrowLeft, Info } from 'lucide-react';

const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

interface ValvularComparisonProps {
  onBack: () => void;
}

export default function ValvularComparison({ onBack }: ValvularComparisonProps) {
  const comparisonData = [
    { aspect: 'Fisiopato', eao: 'Sobrecarga pressão VE → HC concêntrica', iao: 'Sobrecarga volume VE → HE excêntrica', emi: 'Obstrução AE → HP → Falência VD — VE POUPADO', imi: 'Sobrecarga volume AE+VE → HE excêntrica' },
    { aspect: 'Sopro', eao: 'Sistólico ejetivo rude (diamante)', iao: 'Diastólico aspirativo decrescendo', emi: 'Ruflar diastólico ± reforço pré-sistólico', imi: 'Holossistólico uniforme' },
    { aspect: 'Foco / irradiação', eao: 'Aórtico → carótidas', iao: 'BPE → ápice (Erb)', emi: 'Ápice (melhor DLE, campânula)', imi: 'Ápice → axila e dorso' },
    { aspect: 'Pulso', eao: 'Parvus et tardus', iao: 'Martelo d\'água (Corrigan)', emi: 'Normal ou ↓ débito', imi: 'Normal ou ↑ débito' },
    { aspect: 'PA diferencial', eao: 'Normal ou ↓', iao: 'AMPLA (↑ sistólica, ↓ diastólica)', emi: 'Normal', imi: 'Normal' },
    { aspect: 'B1', eao: 'Normal ou ↓', iao: 'Normal', emi: 'HIPERFONÉTICA', imi: 'HIPOFONÉTICA' },
    { aspect: 'B2', eao: '↓ ou abolida (A2 suave)', iao: '↓ (A2 suave); pode ter S3', emi: 'P2 ↑ (HAP); Estalido de abertura', imi: 'P2 ↑ (HAP); S3 freq.' },
    { aspect: 'Achado extra', eao: 'Gallavardin (musical no ápice)', iao: 'Austin-Flint (rumble no ápice)', emi: 'Estalido abertura (próximo S2)', imi: 'Clique mesossist. (PVM)' },
    { aspect: 'Manobras', eao: 'Handgrip =/↑; Valsalva ↓', iao: 'Handgrip ↑↑ (regurgitação)', emi: 'DLE + Campânula ↑', imi: 'Handgrip ↑; Agachamento ↑' },
    { aspect: 'VE no ECG', eao: 'HVE concêntrica (Sokolow ↑)', iao: 'HVE excêntrica (dilatação)', emi: 'NORMAL ou ↓ (VE poupado)', imi: 'HVE excêntrica' },
    { aspect: 'AE', eao: 'Não afetado', iao: 'Não afetado', emi: 'MUITO DILATADO (P mitrale, FA)', imi: 'Dilatado' },
    { aspect: 'Rx tórax', eao: 'Cardiomegalia leve; calcificação aórtica', iao: 'Cardiomegalia importante (Cor bovinum)', emi: 'AE ↑, BFE ↑, linhas Kerley, HP', imi: 'AE ↑, VE ↑, congestão' },
    { aspect: 'Indicação cirúrgica', eao: 'Qualquer sintoma SAD', iao: 'Sintomas OU FE ≤ 50%', emi: 'Sintomas OU Área < 1,5cm²', imi: 'Sintomas OU FE < 60%' },
    { aspect: 'Ponto crítico FE', eao: 'FE < 50% → cirurgia (assint.)', iao: 'FE < 50% → cirurgia (assint.)', emi: 'N/A (VE poupado)', imi: 'FE < 60% = equivalente FE < 50%' },
    { aspect: 'Tratamento preferencial', eao: 'Troca valvar / TAVI', iao: 'Troca valvar', emi: 'VMB (Wilkins ≤ 8) / Troca', imi: 'Plastia mitral / Troca' }
  ];

  const mnemonics = [
    { valvopathy: 'EAo', timing: 'Sistólico', quality: 'Rude, Romboidal', focus: 'Aórtico', irrad: 'Carótidas' },
    { valvopathy: 'IAo', timing: 'Diastólico', quality: 'Aspirativo', focus: 'Aórtico Acet.', irrad: 'Ápice' },
    { valvopathy: 'EMi', timing: 'Diastólico', quality: 'Ruflar', focus: 'Ápice (Mitral)', irrad: 'Pouca' },
    { valvopathy: 'IMi', timing: 'Sistólico', quality: 'Holo em Platô', focus: 'Ápice (Mitral)', irrad: 'Axila' }
  ];

  return (
    <div className="flex flex-col gap-10 pb-20 animate-in fade-in duration-700">
      <div className="flex items-center gap-6">
        <button 
          onClick={onBack}
          className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-all border border-slate-700 shadow-xl group"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
           <div className="inline-block px-3 py-0.5 rounded-full bg-brand-blue/20 text-brand-blue text-[9px] font-black uppercase tracking-widest border border-brand-blue/30 mb-1">
            Resumo Corporativo
          </div>
          <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter">Tabela Mestra — Diferenciação Clínica</h2>
          <p className="text-sm text-slate-400 italic">Comparativo entre as 4 principais valvopatias.</p>
        </div>
      </div>

      <div className="rounded-[2.5rem] overflow-hidden border-2 border-slate-700 bg-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-700">
                <th className="p-5 border-r border-slate-700 font-black uppercase tracking-widest text-[9px] text-slate-500 italic">Aspecto</th>
                <th className="p-5 border-r border-slate-700 font-black uppercase tracking-widest text-[11px] text-brand-blue italic text-center bg-brand-blue/5">EAo</th>
                <th className="p-5 border-r border-slate-700 font-black uppercase tracking-widest text-[11px] text-emerald-500 italic text-center bg-emerald-500/5">IAo</th>
                <th className="p-5 border-r border-slate-700 font-black uppercase tracking-widest text-[11px] text-purple-500 italic text-center bg-purple-500/5">EMi</th>
                <th className="p-5 font-black uppercase tracking-widest text-[11px] text-rose-500 italic text-center bg-rose-500/5">IMi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {comparisonData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-900 transition-colors group">
                  <td className="p-4 border-r border-slate-700 font-black text-[10px] text-white bg-slate-900 uppercase italic tracking-tighter">{row.aspect}</td>
                  <td className="p-4 border-r border-slate-700 text-[11px] text-slate-400 leading-relaxed italic">{row.eao}</td>
                  <td className="p-4 border-r border-slate-700 text-[11px] text-slate-400 leading-relaxed italic">{row.iao}</td>
                  <td className="p-4 border-r border-slate-700 text-[11px] text-slate-400 leading-relaxed italic">{row.emi}</td>
                  <td className="p-4 text-[11px] text-slate-400 leading-relaxed italic">{row.imi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mnemonics.map((m, i) => (
          <div key={i} className="p-6 rounded-[2.5rem] border-2 border-slate-700 bg-slate-800 shadow-xl group hover:border-slate-600 transition-all overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-2xl -mr-12 -mt-12 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <span className="text-sm font-black text-white italic tracking-widest uppercase">{m.valvopathy}</span>
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest italic">{m.timing}</span>
            </div>
            <div className="space-y-4 relative z-10">
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-brand-blue/20 transition-colors">
                <p className="text-[8px] text-slate-600 uppercase font-black tracking-widest mb-1 italic">Qualidade</p>
                <p className="text-[10px] font-black text-slate-200 uppercase italic tracking-tighter">{m.quality}</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-brand-blue/20 transition-colors">
                <p className="text-[8px] text-slate-600 uppercase font-black tracking-widest mb-1 italic">Foco / Ausculta</p>
                <p className="text-[10px] font-black text-slate-200 uppercase italic tracking-tighter">{m.focus}</p>
              </div>
              <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700 group-hover:border-brand-blue/20 transition-colors">
                <p className="text-[8px] text-slate-600 uppercase font-black tracking-widest mb-1 italic">Irradiação</p>
                <p className="text-[10px] font-black text-slate-200 uppercase italic tracking-tighter">{m.irrad}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-[2.5rem] bg-slate-900 border-2 border-brand-blue/30 flex gap-8 items-center shadow-2xl overflow-hidden relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 shadow-inner border border-brand-blue/10">
          <Info size={36} />
        </div>
        <div className="relative z-10">
          <h4 className="font-black text-white text-base mb-2 uppercase italic tracking-tight">Pérola de Prova: Sokolow e Câmaras</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed italic">
            A Estenose Mitral é a <strong>única</strong> valvopatia que poupa o ventrículo esquerdo em sua fase inicial/pura. Todas as outras resultam em sobrecarga crônica direta do VE.
          </p>
        </div>
      </div>
    </div>
  );
}
