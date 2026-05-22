import React, { useState, useEffect } from 'react';
import { 
  AlertCircle, Activity, Skull, 
  ChevronRight, ArrowLeft,
  Wind, Heart
} from 'lucide-react';
import DKAMain from './DKAMain';
import IntoxicationsMain from './IntoxicationsMain';
import EAPMain from './EAPMain';
import SCAMain from './SCAMain';
import HypoglycemiaMain from './HypoglycemiaMain';

// Custom SAMU Star of Life Icon
const StarOfLife = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11 2h2v5.3l4.6-2.6 1 1.7-4.6 2.6L18.6 12l-4.6 2.6 4.6 2.6-1 1.7-4.6-2.6V22h-2v-5.3l-4.6 2.6-1-1.7 4.6-2.6L5.4 12l4.6-2.6-4.6-2.6 1-1.7 4.6 2.6V2z" />
  </svg>
);

interface EmergencyMainProps {
  diseaseId?: string;
}

export default function EmergencyMain({ diseaseId }: EmergencyMainProps) {
  const [internalTab, setInternalTab] = useState<'home' | 'cad' | 'intoxicacoes' | 'eap' | 'sca' | 'hipoglicemia'>('home');

  useEffect(() => {
    if (diseaseId === 'cad' || diseaseId === 'intoxicacoes' || diseaseId === 'eap' || diseaseId === 'sca' || diseaseId === 'hipoglicemia') {
      setInternalTab(diseaseId as any);
    } else {
      setInternalTab('home');
    }
  }, [diseaseId]);

  const subjects = [
    {
      id: 'sca',
      title: 'Síndrome Coronariana Aguda',
      subtitle: 'Estruturação de Risco & Reperfusão',
      icon: Heart,
      color: 'bg-red-700',
      description: 'Protocolo clínico progressivo para manejo de IAMEST e IAMSEST.'
    },
    {
      id: 'eap',
      title: 'Edema Agudo de Pulmão',
      subtitle: 'Congestão e Suporte Ventilatório',
      icon: Wind,
      color: 'bg-emerald-600',
      description: 'Manejo de insuficiência respiratória por congestão pulmonar cardiogênica.'
    },
    {
      id: 'cad',
      title: 'Cetoacidose Diabética',
      subtitle: 'Protocolo de Glicemia e Fluídos',
      icon: Activity,
      color: 'bg-blue-600',
      description: 'Manejo estruturado de descompensação diabética grave com acidose.'
    },
    {
      id: 'hipoglicemia',
      title: 'Manejo da Hipoglicemia',
      subtitle: 'Tríade de Whipple & Condutas',
      icon: AlertCircle,
      color: 'bg-amber-600',
      description: 'Protocolo progressivo para paciente consciente vs. rebaixado e exames durante a crise.'
    },
    {
      id: 'intoxicacoes',
      title: 'Intoxicações Exógenas',
      subtitle: 'Toxidromes e Antídotos',
      icon: Skull,
      color: 'bg-red-600',
      description: 'Identificação de síndromes tóxicas e medidas de descontaminação.'
    }
  ];

  const renderContent = () => {
    switch (internalTab) {
      case 'cad': return <DKAMain />;
      case 'intoxicacoes': return <IntoxicationsMain />;
      case 'eap': return <EAPMain />;
      case 'sca': return <SCAMain />;
      case 'hipoglicemia': return <HypoglycemiaMain />;
      default: return null;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {internalTab === 'home' ? (
        <div className="space-y-8">
          <header className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 text-red-600 mb-2">
                <StarOfLife size={28} />
                <span className="text-sm font-black uppercase tracking-[0.3em]">Protocolos SAMU</span>
              </div>
              <h1 className="text-4xl font-black text-brand-navy tracking-tighter uppercase">Protocolos de Emergência</h1>
              <p className="text-slate-600">Diretrizes para atendimento em ambiente de emergência e pré-hospitalar.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subjects.map((s) => {
              const SubjectIcon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setInternalTab(s.id as any)}
                  className="group relative flex flex-col p-8 rounded-3xl bg-slate-50 border border-line hover:border-brand-blue hover:shadow-2xl transition-all text-left overflow-hidden"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 transition-transform group-hover:scale-110 ${s.color}`}>
                    <SubjectIcon size={28} />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-black text-brand-blue uppercase tracking-widest">{s.subtitle}</p>
                    <h3 className="text-2xl font-black text-brand-navy tracking-tight">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-brand-blue font-bold text-sm">
                    Abrir Protocolo <ChevronRight size={16} />
                  </div>

                  <div className="absolute top-0 right-0 p-12 opacity-[0.03] rotate-12 -translate-y-4 translate-x-4">
                    <SubjectIcon size={160} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-6 rounded-3xl bg-red-50 border border-red-100 flex items-start gap-4">
            <div className="p-2 rounded-xl bg-red-100 text-red-600 shrink-0">
              <AlertCircle size={24} />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-red-900 uppercase text-xs tracking-widest">Atenção Prioritária</h4>
              <p className="text-sm text-red-800 italic">
                "A estabilização clínica (ABCDE) precede a aplicação de protocolos específicos. Em casos de dúvida, acione o suporte avançado imediatamente."
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <button
            onClick={() => setInternalTab('home')}
            className="flex items-center gap-2 text-slate-600 hover:text-brand-navy transition-colors font-bold text-sm"
          >
            <div className="p-1.5 rounded-lg bg-slate-100">
              <StarOfLife size={14} className="text-red-500" />
            </div>
            VOLTAR AO PORTAL DE EMERGÊNCIA
          </button>

          {renderContent()}
        </div>
      )}
    </div>
  );
}

