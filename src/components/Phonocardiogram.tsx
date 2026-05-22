import React from 'react';

interface PhonocardiogramProps {
  type: 'eao' | 'iao' | 'emi' | 'imi' | 'pvm';
  collapsed?: boolean;
}

const Phonocardiogram: React.FC<PhonocardiogramProps> = ({ type, collapsed = false }) => {
  return (
    <div className={`w-full bg-slate-950/50 rounded-3xl ${collapsed ? 'p-3' : 'p-6'} border border-slate-800 shadow-inner`}>
      {!collapsed && (
        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 italic text-center">
          Fonocardiograma Característico
        </p>
      )}
      <div className={`relative ${collapsed ? 'h-16' : 'h-24'} w-full flex items-center justify-center`}>
        <svg viewBox="0 0 400 100" className="w-full h-full">
          {/* Baseline */}
          <line x1="10" y1="70" x2="390" y2="70" stroke="#334155" strokeWidth="2" />
          
          {!collapsed && (
            <>
              <text x="50" y="90" fill="#64748b" className="text-[10px] font-black italic uppercase">Sístole</text>
              <text x="250" y="90" fill="#64748b" className="text-[10px] font-black italic uppercase">Diástole</text>
            </>
          )}
          
          {/* Cycle 1 */}
          {/* B1 */}
          <rect x="25" y="45" width="10" height="25" fill="#94a3b8" rx="2" />
          {!collapsed && <text x="25" y="82" fill="#94a3b8" className="text-[9px] font-black">B1</text>}
          
          {/* Murmurs */}
          {type === 'eao' && (
            <path d="M 40 70 L 80 30 L 120 70" fill="none" stroke="#3b82f6" strokeWidth="2" />
          )}
          
          {type === 'imi' && (
            <rect x="35" y="40" width="95" height="30" fill="rgba(244,63,94,0.1)" stroke="#f43f5e" strokeWidth="2" strokeDasharray="2,2" />
          )}

          {type === 'pvm' && (
            <>
              <line x1="80" y1="40" x2="80" y2="70" stroke="#6366f1" strokeWidth="2" strokeDasharray="2,2" />
              <path d="M 80 70 L 130 50 L 130 70" fill="rgba(99,102,241,0.1)" stroke="#6366f1" strokeWidth="2" />
              {!collapsed && <text x="75" y="35" fill="#6366f1" className="text-[8px] font-bold">Clique</text>}
            </>
          )}
          
          {/* B2 */}
          <rect x="130" y="45" width="10" height="25" fill="#94a3b8" rx="2" />
          {!collapsed && <text x="130" y="82" fill="#94a3b8" className="text-[9px] font-black">B2</text>}
          
          {type === 'iao' && (
            <path d="M 140 40 L 260 70" stroke="#10b981" strokeWidth="2" />
          )}

          {type === 'emi' && (
            <>
              {/* Estalido */}
              <line x1="155" y1="40" x2="155" y2="70" stroke="#a855f7" strokeWidth="1.5" />
              {!collapsed && <text x="145" y="35" fill="#a855f7" className="text-[8px] font-bold">Estalido</text>}
              {/* Ruflar */}
              <path d="M 155 70 L 220 50 L 280 70 L 330 30 L 330 70" fill="rgba(168,85,247,0.1)" stroke="#a855f7" strokeWidth="2" />
            </>
          )}

          {/* Cycle 2 B1 */}
          <rect x="330" y="45" width="10" height="25" fill="#94a3b8" rx="2" />
          {!collapsed && <text x="330" y="82" fill="#94a3b8" className="text-[9px] font-black">B1</text>}
        </svg>
      </div>
    </div>
  );
};

export default Phonocardiogram;
