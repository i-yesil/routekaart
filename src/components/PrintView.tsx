import React from 'react';
import { ACTOREN, STEP_STYLES } from '../data/routekaartData';
import { HogeschoolRotterdamLogo } from './HogeschoolRotterdamLogo';
import { BookOpen, Eye, MessageSquare, Users, Sprout, ShieldAlert, HeartHandshake, PhoneCall } from 'lucide-react';

const STEP_ICONS = [BookOpen, Eye, MessageSquare, Users, Sprout];

interface PrintViewProps {
  forPreview?: boolean;
}

export const PrintView: React.FC<PrintViewProps> = ({ forPreview = false }) => {
  const studentActor = ACTOREN.find((a) => a.id === 'student') || ACTOREN[0];
  const begeleiderActor = ACTOREN.find((a) => a.id === 'begeleider') || ACTOREN[1];

  return (
    <div
      className={
        forPreview
          ? "w-full font-sans bg-white text-[#003340] box-border p-2 leading-tight"
          : "print-only font-sans bg-white text-[#003340] w-full max-h-[100vh] box-border p-1 leading-tight select-none"
      }
    >
      {/* 1. Header (Compact, max ~16mm) */}
      <header className="flex items-center justify-between pb-1.5 mb-1.5 border-b-2 border-[#003340]">
        <div className="flex items-center gap-2.5">
          <HogeschoolRotterdamLogo className="h-7" theme="color" />
          <div className="flex flex-col">
            <span className="text-[13px] font-black tracking-tight text-[#003340] uppercase">
              Routekaart Gelijke Stagekansen &amp; Aanpak Stagediscriminatie
            </span>
            <span className="text-[9.5px] font-medium text-[#4A5568]">
              Hogeschool Rotterdam &middot; Onderwijs &amp; Kwaliteit &middot; Themagroep Studentgerichte Omgeving 2026
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-right">
          <div className="px-2 py-0.5 bg-[#F7EFE3] border border-[#D1C7BA] rounded text-[9.5px] text-[#003340] font-bold">
            Stagecode hbo &middot; Manifest Gelijke Kansen
          </div>
          <div className="px-2 py-0.5 bg-[#FDEEF3] border border-[#BA093F] rounded text-[9.5px] text-[#BA093F] font-bold">
            Meldpunt: hint.hr.nl &middot; Forms
          </div>
        </div>
      </header>

      {/* 2. Main Comparison Matrix: 2 Rows x 5 Columns */}
      <div className="flex flex-col gap-1.5">

        {/* ================= ROW 1: STUDENT ================= */}
        <section aria-label="Routekaart Student">
          {/* Subheader / Banner Student */}
          <div className="flex items-center justify-between px-2.5 py-1 bg-[#003340] text-white rounded-t-md">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-[#BA093F] text-white text-[10px] font-black rounded tracking-wide uppercase">
                STUDENT
              </span>
              <span className="text-[11px] font-bold">
                {studentActor.vraag}
              </span>
            </div>
            <div className="text-[9.5px] text-[#E2D8C9] font-medium">
              <strong className="text-white font-bold">Belangrijk:</strong> {studentActor.letOp}
            </div>
          </div>

          {/* 5 Aligned Step Columns for Student */}
          <div className="grid grid-cols-5 gap-1.5 border-x-2 border-b-2 border-[#003340] p-1.5 rounded-b-md bg-[#FBF9F6]">
            {studentActor.stappen.map((stap, index) => {
              const style = STEP_STYLES[index] || STEP_STYLES[0];
              const Icon = STEP_ICONS[index] || BookOpen;

              return (
                <div
                  key={stap.id}
                  className="bg-white border rounded flex flex-col h-full min-h-[88px] overflow-hidden"
                  style={{ borderColor: style.borderColor }}
                >
                  {/* Step Header */}
                  <div
                    className="flex items-center gap-1.5 px-2 py-1 text-white shrink-0 min-h-[26px]"
                    style={{ backgroundColor: style.bg, color: style.text }}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-extrabold shrink-0"
                      style={{ backgroundColor: style.badgeBg, color: style.badgeText }}
                    >
                      {index + 1}
                    </span>
                    <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
                    <span className="text-[10px] font-bold leading-tight">
                      {stap.titel}
                    </span>
                  </div>

                  {/* Step Body */}
                  <div className="p-1.5 flex flex-col flex-1 justify-between text-[9px] leading-tight">
                    <div>
                      <p className="font-bold text-[#003340] text-[9.5px] mb-1">
                        {stap.kern}
                      </p>
                      {index === 3 ? (
                        <div className="space-y-0.5 text-[#2D3748] text-[8.5px]">
                          <div><strong>A.</strong> (Nog) niets doen</div>
                          <div><strong>B.</strong> Zelf het gesprek voeren</div>
                          <div><strong>C.</strong> Driehoeksgesprek</div>
                          <div><strong>D.</strong> Officiële melding</div>
                        </div>
                      ) : index === 4 ? (
                        <p className="text-[#4A5568] text-[8.5px]">
                          Hoe gaat het nu? Heb je nog steun nodig? Beïnvloedt het je studie? Schakel het decanaat in.
                        </p>
                      ) : (
                        <div
                          className="text-[#4A5568] text-[8.5px] space-y-0.5 [&_a]:text-[#00587A] [&_a]:font-bold"
                          dangerouslySetInnerHTML={{ __html: stap.detail || '' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ================= ROW 2: BEGELEIDER (Directly Aligned 1-to-1) ================= */}
        <section aria-label="Routekaart Begeleider">
          {/* Subheader / Banner Begeleider */}
          <div className="flex items-center justify-between px-2.5 py-1 bg-[#00587A] text-white rounded-t-md">
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 bg-[#D99B00] text-[#00222B] text-[10px] font-black rounded tracking-wide uppercase">
                BEGELEIDER
              </span>
              <span className="text-[11px] font-bold">
                {begeleiderActor.vraag}
              </span>
              <span className="text-[9px] text-[#E2D8C9] hidden sm:inline">
                (Coach, stagebegeleider, coördinator, docent)
              </span>
            </div>
            <div className="text-[9.5px] text-[#E2D8C9] font-medium">
              <strong className="text-white font-bold">Protocol:</strong> {begeleiderActor.letOp}
            </div>
          </div>

          {/* 5 Aligned Step Columns for Begeleider */}
          <div className="grid grid-cols-5 gap-1.5 border-x-2 border-b-2 border-[#00587A] p-1.5 rounded-b-md bg-[#F4F9FB]">
            {begeleiderActor.stappen.map((stap, index) => {
              const style = STEP_STYLES[index] || STEP_STYLES[0];
              const Icon = STEP_ICONS[index] || BookOpen;

              return (
                <div
                  key={stap.id}
                  className="bg-white border rounded flex flex-col h-full min-h-[88px] overflow-hidden"
                  style={{ borderColor: style.borderColor }}
                >
                  {/* Step Header */}
                  <div
                    className="flex items-center gap-1.5 px-2 py-1 text-white shrink-0 min-h-[26px]"
                    style={{ backgroundColor: style.bg, color: style.text }}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-extrabold shrink-0"
                      style={{ backgroundColor: style.badgeBg, color: style.badgeText }}
                    >
                      {index + 1}
                    </span>
                    <Icon className="w-3 h-3 shrink-0" aria-hidden="true" />
                    <span className="text-[10px] font-bold leading-tight">
                      {stap.titel}
                    </span>
                  </div>

                  {/* Step Body */}
                  <div className="p-1.5 flex flex-col flex-1 justify-between text-[9px] leading-tight">
                    <div>
                      <p className="font-bold text-[#003340] text-[9.5px] mb-1">
                        {stap.kern}
                      </p>
                      {index === 1 ? (
                        <p className="text-[#4A5568] text-[8.5px]">
                          Let op signalen in werving &amp; stage. Plan binnen 5 werkdagen een vertrouwelijk gesprek.
                        </p>
                      ) : index === 3 ? (
                        <div className="space-y-0.5 text-[#2D3748] text-[8.5px]">
                          <div><strong>A.</strong> (Nog) niets doen</div>
                          <div><strong>B.</strong> Zelf gesprek voeren</div>
                          <div><strong>C.</strong> Driehoeksgesprek</div>
                          <div><strong>D.</strong> Officiële melding</div>
                        </div>
                      ) : index === 4 ? (
                        <p className="text-[#4A5568] text-[8.5px]">
                          Blijf vinger aan pols houden. Evalueer de stageplek (evt. Rode Lijst). Bij aanhoudende last: decanaat.
                        </p>
                      ) : (
                        <div
                          className="text-[#4A5568] text-[8.5px] space-y-0.5 [&_a]:text-[#00587A] [&_a]:font-bold"
                          dangerouslySetInnerHTML={{ __html: stap.detail || '' }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* 3. Bottom Reference Bar: Kernprincipes & Contactpersonen (Max ~18mm) */}
      <footer className="mt-1.5 pt-1.5 border-t border-[#D1C7BA] grid grid-cols-3 gap-2 text-[8.5px] leading-tight text-[#4A5568]">
        {/* Kolom 1: Kernprincipes */}
        <div className="bg-[#F7EFE3] p-1.5 rounded border border-[#E2D8C9]">
          <div className="flex items-center gap-1 font-bold text-[#003340] text-[9px] mb-0.5">
            <HeartHandshake className="w-3 h-3 text-[#BA093F]" />
            <span>Belangrijke Waarborgen</span>
          </div>
          <div>&bull; <strong>Empathie vóór bewijs:</strong> Vermoeden rechtvaardigt al een gesprek.</div>
          <div>&bull; <strong>Regie bij student:</strong> Student bepaalt vervolgstappen.</div>
          <div>&bull; <strong>Onafhankelijk:</strong> Welzijn student gaat vóór stagebedrijf.</div>
        </div>

        {/* Kolom 2: Contactpunten */}
        <div className="bg-[#F7EFE3] p-1.5 rounded border border-[#E2D8C9]">
          <div className="flex items-center gap-1 font-bold text-[#003340] text-[9px] mb-0.5">
            <PhoneCall className="w-3 h-3 text-[#00587A]" />
            <span>Bij wie kun je terecht?</span>
          </div>
          <div>&bull; <strong>Studentcoach / Begeleider:</strong> Gesprek binnen 5 werkdagen.</div>
          <div>&bull; <strong>Vertrouwenspersoon:</strong> Onafhankelijk en vertrouwelijk (hint.hr.nl).</div>
          <div>&bull; <strong>Centraal Meldpunt &amp; Decanaat:</strong> Melden en studiebegeleiding.</div>
        </div>

        {/* Kolom 3: Organisatie & Afspraken */}
        <div className="bg-[#F7EFE3] p-1.5 rounded border border-[#E2D8C9] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 font-bold text-[#003340] text-[9px] mb-0.5">
              <ShieldAlert className="w-3 h-3 text-[#006E66]" />
              <span>Kader &amp; Verantwoording</span>
            </div>
            <div>Hogeschool Rotterdam &middot; Onderwijs &amp; Kwaliteit</div>
            <div className="text-[#718096]">Themagroep Studentgerichte Omgeving 2026</div>
          </div>
          <div className="text-[8px] font-semibold text-[#003340] mt-0.5">
            Volgens Stagecode hbo &middot; www.hogeschoolrotterdam.nl
          </div>
        </div>
      </footer>
    </div>
  );
};
