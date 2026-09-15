import React, { useRef } from 'react';
import { Actor } from '../types';
import { GraduationCap, UserCheck, Network, Building2, ShieldCheck } from 'lucide-react';

interface ActorSelectorProps {
  actoren: Actor[];
  actiefIndex: number;
  onSelect: (index: number) => void;
}

const getActorIcon = (iconName: string) => {
  switch (iconName) {
    case 'GraduationCap':
      return <GraduationCap className="w-5 h-5" aria-hidden="true" />;
    case 'UserCheck':
      return <UserCheck className="w-5 h-5" aria-hidden="true" />;
    case 'Network':
      return <Network className="w-5 h-5" aria-hidden="true" />;
    case 'Building2':
      return <Building2 className="w-5 h-5" aria-hidden="true" />;
    case 'ShieldCheck':
      return <ShieldCheck className="w-5 h-5" aria-hidden="true" />;
    default:
      return <GraduationCap className="w-5 h-5" aria-hidden="true" />;
  }
};

export const ActorSelector: React.FC<ActorSelectorProps> = ({
  actoren,
  actiefIndex,
  onSelect,
}) => {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // WCAG 2.1.1 Keyboard: WAI-ARIA Tabs keyboard pattern
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex: number | null = null;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      newIndex = (index + 1) % actoren.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      newIndex = (index - 1 + actoren.length) % actoren.length;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = actoren.length - 1;
    }

    if (newIndex !== null) {
      e.preventDefault();
      onSelect(newIndex);
      tabsRef.current[newIndex]?.focus();
    }
  };

  return (
    <nav className="mb-6" aria-label="Rolselectie en navigatie">
      <p id="actor-select-label" className="text-[13px] font-extrabold uppercase tracking-[0.9px] text-[#003340] mb-2.5">
        Kies je rol om de handelingsroute te bekijken:
      </p>

      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 no-print"
        role="tablist"
        aria-labelledby="actor-select-label"
      >
        {actoren.map((actor, idx) => {
          const isActief = idx === actiefIndex;
          return (
            <button
              key={actor.id}
              ref={(el) => { tabsRef.current[idx] = el; }}
              role="tab"
              aria-selected={isActief}
              aria-controls={`panel-${actor.id}`}
              id={`tab-${actor.id}`}
              tabIndex={isActief ? 0 : -1}
              onClick={() => onSelect(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={`flex items-center gap-2.5 p-3 rounded-xl bg-white border-2 text-left cursor-pointer transition-all duration-150 min-h-[52px] focus-visible:outline-2 focus-visible:outline-[#003340] focus-visible:outline-offset-2 ${
                isActief
                  ? 'border-[#BA093F] shadow-[0_4px_14px_rgba(186,9,63,0.16)] -translate-y-0.5'
                  : 'border-[#D1C7BA] hover:border-[#003340] hover:-translate-y-0.5'
              }`}
            >
              <span
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  isActief
                    ? 'bg-[#BA093F] text-white'
                    : 'bg-[#F7EFE3] text-[#BA093F]'
                }`}
              >
                {getActorIcon(actor.icoon)}
              </span>
              <div className="min-w-0 flex-1">
                <span className="block text-[13px] font-bold text-[#003340] leading-tight truncate">
                  {actor.naam}
                </span>
                <span
                  title={actor.rol}
                  className="text-[11px] text-[#3D3833] line-clamp-1 leading-snug block"
                >
                  {actor.rol}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
