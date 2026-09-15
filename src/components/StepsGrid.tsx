import React from 'react';
import { Step } from '../types';
import { BookOpen, Eye, MessageSquare, Users, Sprout, ArrowRight, Mail } from 'lucide-react';
import { STEP_STYLES } from '../data/routekaartData';

interface StepsGridProps {
  stappen: Step[];
  onOpenAction: (actieType: string, stepTitle: string) => void;
}

const STEP_ICONS = [
  BookOpen,
  Eye,
  MessageSquare,
  Users,
  Sprout
];

export const StepsGrid: React.FC<StepsGridProps> = ({ stappen, onOpenAction }) => {
  return (
    <section aria-label="Vijf opeenvolgende fasen van de routekaart">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-5 stappen-grid">
        {stappen.map((stap, index) => {
          const style = STEP_STYLES[index] || STEP_STYLES[0];
          const IconComponent = STEP_ICONS[index] || BookOpen;

          return (
            <article
              key={stap.id || index}
              className="stap-card bg-white border-2 border-[#D1C7BA] rounded-xl overflow-hidden flex flex-col shadow-xs transition-all duration-150 hover:shadow-md"
              style={{ borderColor: style.borderColor }}
            >
              {/* Step Header with Guaranteed WCAG AA Contrast */}
              <div
                className="flex items-center gap-2.5 px-3.5 py-3 border-b"
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                  borderBottomColor: style.borderColor,
                }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold shrink-0"
                  style={{
                    backgroundColor: style.badgeBg,
                    color: style.badgeText,
                  }}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <IconComponent className="w-4 h-4 shrink-0" aria-hidden="true" />
                <h3 className="text-[13.5px] font-bold leading-tight truncate">
                  {stap.titel}
                </h3>
              </div>

              {/* Step Content Body */}
              <div className="p-3.5 flex flex-col flex-1 bg-white">
                {/* Core message */}
                <p className="text-[13px] font-bold text-[#003340] leading-snug mb-2">
                  {stap.kern}
                </p>

                {/* Detail content */}
                <div
                  className="text-[12.5px] text-[#1F2937] leading-relaxed flex-1 space-y-1.5 [&_p]:mb-1.5 [&_ul]:space-y-1.5 [&_li:not([class*='flex'])]:relative [&_li:not([class*='flex'])]:pl-3.5 [&_li:not([class*='flex'])]:before:content-[''] [&_li:not([class*='flex'])]:before:absolute [&_li:not([class*='flex'])]:before:left-0 [&_li:not([class*='flex'])]:before:top-2 [&_li:not([class*='flex'])]:before:w-1.5 [&_li:not([class*='flex'])]:before:h-1.5 [&_li:not([class*='flex'])]:before:rounded-full [&_li:not([class*='flex'])]:before:bg-[var(--bullet-color)] [&_b]:text-[#003340] [&_b]:font-semibold [&_a]:text-[#00587A] [&_a]:underline [&_a]:font-bold hover:[&_a]:text-[#003340] [&_a]:transition-colors"
                  style={{ '--bullet-color': style.bulletColor } as React.CSSProperties}
                  dangerouslySetInnerHTML={{ __html: stap.detail }}
                />

                {/* Action Button */}
                {stap.actie && (
                  <button
                    type="button"
                    onClick={() => {
                      if (stap.actieType === 'mail') {
                        const subject = encodeURIComponent('Zorgen over mijn (zoektocht naar een) stage');
                        const body = encodeURIComponent(
                          `Beste [Naam Studentcoach/vertrouwenspersoon],\n\n` +
                          `Ik neem contact met je op omdat ik het gevoel heb dat ik te maken heb (gehad) met stagediscriminatie/ ongelijk behandeld wordt op mijn stageplek. Ik vind het lastig om hierover te praten en ik maak me zorgen over de impact op mijn studie/beoordeling. Zouden we hier op korte termijn (vertrouwelijk) over in gesprek kunnen gaan, zodat ik kan ontdekken wat mijn opties zijn?\n\n` +
                          `Met vriendelijke groet,\n\n` +
                          `[Jouw naam]\n` +
                          `[Je opleiding/studentnummer]`
                        );
                        try {
                          window.location.href = `mailto:?subject=${subject}&body=${body}`;
                        } catch {
                          // Fallback to modal dialog
                        }
                      }
                      onOpenAction(stap.actieType || 'aanpak', stap.titel);
                    }}
                    className={`inline-flex items-center justify-between w-full mt-3 pt-2.5 border-t border-[#E4DDD2] text-[12.5px] font-bold transition-colors cursor-pointer group text-left focus-visible:outline-2 focus-visible:outline-[#003340] focus-visible:outline-offset-2 min-h-[38px] ${
                      stap.actieType === 'mail'
                        ? 'text-[#0078D4] hover:text-[#106EBE]'
                        : 'text-[#00587A] hover:text-[#003950]'
                    }`}
                    aria-label={`Lees meer over ${stap.actie} voor stap ${index + 1}: ${stap.titel}`}
                  >
                    <span className="inline-flex items-center gap-1.5 truncate pr-1 group-hover:underline underline-offset-2">
                      {stap.actieType === 'mail' && (
                        <Mail className="w-3.5 h-3.5 text-[#0078D4] shrink-0" aria-hidden="true" />
                      )}
                      <span>{stap.actie}</span>
                    </span>
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
