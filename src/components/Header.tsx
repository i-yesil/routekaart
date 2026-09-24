import React, { useState, useEffect } from 'react';
import { Printer, ShieldAlert, BookOpen, ExternalLink } from 'lucide-react';

interface HeaderProps {
  onOpenMeldpunt?: () => void;
  onOpenStagecode?: () => void;
  onOpenPrint?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPrint }) => {
  const [isDefinitieOpen, setIsDefinitieOpen] = useState(false);
  const [isStagecodeOpen, setIsStagecodeOpen] = useState(false);
  const [isMeldpuntOpen, setIsMeldpuntOpen] = useState(false);

  // Close popovers on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDefinitieOpen(false);
        setIsStagecodeOpen(false);
        setIsMeldpuntOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handlePrint = () => {
    try {
      window.print();
    } catch (e) {
      console.warn('Direct print call prevented:', e);
    }
    if (onOpenPrint) {
      onOpenPrint();
    }
  };

  return (
    <header role="banner" className="border-b-[3px] border-[#BA093F] pb-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[26px] sm:text-[30px] font-bold text-[#BA093F] leading-[1.2] tracking-tight">
            Routekaart Gelijke Stagekansen
          </h1>
          <p className="text-[14px] text-[#003340] font-semibold mt-1">
            Aanpak stagediscriminatie
          </p>
        </div>

        {/* De 4 gevraagde items op een rij: 1. Definitie pilletje, 2. Stagecode, 3. Meldpunt, 4. Printen */}
        <div className="flex flex-wrap items-center gap-2.5 no-print" role="toolbar" aria-label="Snelle acties">
          {/* ==========================================
               1. DEFINITIE PILLETJE: WAT IS STAGEDISCRIMINATIE?
               Huisstijl Hogeschool Rotterdam
               ========================================== */}
          <div className="hr-def-container">
            {/* Het Pilletje / Knop */}
            <button
              type="button"
              className="hr-def-pill"
              onClick={() => {
                setIsStagecodeOpen(false);
                setIsMeldpuntOpen(false);
                setIsDefinitieOpen(!isDefinitieOpen);
              }}
              title="Klik voor de definitie"
              aria-expanded={isDefinitieOpen}
            >
              <span className="hr-def-icon" aria-hidden="true">?</span>
              <span>Wat is stagediscriminatie?</span>
            </button>

            {/* De Popover Kaart met de definitie */}
            <div
              id="hr-def-card"
              className="hr-def-card"
              style={{ display: isDefinitieOpen ? 'block' : 'none' }}
              role="dialog"
              aria-label="Definitie stagediscriminatie"
            >
              <div className="hr-def-header">
                <div className="hr-def-title-wrap">
                  <span className="hr-def-dot" aria-hidden="true"></span>
                  <span className="hr-def-title">WAT IS STAGEDISCRIMINATIE?</span>
                </div>
                <button
                  type="button"
                  className="hr-def-close"
                  onClick={() => setIsDefinitieOpen(false)}
                  title="Sluiten"
                  aria-label="Sluit definitie"
                >
                  &times;
                </button>
              </div>
              <p className="hr-def-text">
                Afwijzing, uitsluiting of ongelijke behandeling tijdens of het zoeken van de stage op basis van afkomst, kleur, gender, religie, seksuele oriëntatie of (on)zichtbare beperking.
              </p>
              <p className="mt-2.5 pt-2.5 border-t border-[#EDE6DA] text-[12px] text-[#5A554E] leading-relaxed">
                De Stagecode hbo stelt heldere normen en beschermingsmaatregelen vast om voor elke student een veilige, eerlijke en inclusieve stageperiode te waarborgen.
              </p>
            </div>

            {/* Achtergrondoverlay om te sluiten bij buiten klikken */}
            {isDefinitieOpen && (
              <div
                id="hr-def-backdrop"
                className="hr-def-backdrop"
                style={{ display: 'block' }}
                onClick={() => setIsDefinitieOpen(false)}
              />
            )}
          </div>

          {/* ==========================================
               2. STAGECODE HBO PILLETJE MET VERWIJZING
               ========================================== */}
          <div className="hr-def-container">
            <button
              type="button"
              className="hr-def-pill"
              onClick={() => {
                setIsDefinitieOpen(false);
                setIsMeldpuntOpen(false);
                setIsStagecodeOpen(!isStagecodeOpen);
              }}
              title="Bekijk de Stagecode hbo kaders en afspraken"
              aria-expanded={isStagecodeOpen}
            >
              <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#00587A] text-white" aria-hidden="true">
                <BookOpen className="w-2.5 h-2.5 text-white" />
              </span>
              <span>Stagecode hbo</span>
            </button>

            {/* Popover voor Stagecode hbo & Landelijk Manifest */}
            <div
              className="hr-def-card border-2 border-[#00587A]"
              style={{ display: isStagecodeOpen ? 'block' : 'none' }}
              role="dialog"
              aria-label="Stagecode hbo en Manifest Gelijke Kansen"
            >
              <div className="hr-def-header border-b border-[#EDE6DA]">
                <div className="hr-def-title-wrap">
                  <span className="w-2 h-2 rounded-full bg-[#00587A]" aria-hidden="true"></span>
                  <span className="text-[12px] font-black text-[#00587A] tracking-wider">STAGECODE HBO &amp; MANIFEST</span>
                </div>
                <button
                  type="button"
                  className="hr-def-close"
                  onClick={() => setIsStagecodeOpen(false)}
                  title="Sluiten"
                  aria-label="Sluit Stagecode popover"
                >
                  &times;
                </button>
              </div>
              <p className="hr-def-text mb-3">
                Iedere student heeft recht op een veilige, inclusieve en gelijkwaardige stageplek. Hogeschool Rotterdam conformeert zich aan de Stagecode hbo en het landelijke Manifest Gelijke Kansen.
              </p>
              <div className="pt-2.5 border-t border-[#EDE6DA] flex flex-wrap items-center gap-2">
                <a
                  href="https://www.vereniginghogescholen.nl/system/knowledge_base/attachments/files/000/001/615/original/Stagecode_hbo.pdf?1779095526"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#00587A] hover:bg-[#003340] text-white text-[12px] font-bold transition-colors"
                  title="Download officiële Stagecode hbo (PDF)"
                >
                  <span>Stagecode(pdf)</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href="https://open.overheid.nl/documenten/74c0269a-d08e-4779-b707-4d71dd8820ea/file"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#D1C7BA] bg-[#FAF7F2] hover:bg-white text-[#003340] text-[12px] font-bold transition-colors"
                  title="Bekijk het landelijk Manifest tegen stagediscriminatie hoger onderwijs (PDF)"
                >
                  <span>Manifest (pdf)</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {isStagecodeOpen && (
              <div
                className="hr-def-backdrop"
                style={{ display: 'block' }}
                onClick={() => setIsStagecodeOpen(false)}
              />
            )}
          </div>

          {/* ==========================================
               3. CENTRAAL MELDPUNT PILLETJE (ROOD & OPVALLEND)
               ========================================== */}
          <div className="hr-def-container">
            <button
              type="button"
              className="hr-def-pill hr-def-pill-red"
              onClick={() => {
                setIsDefinitieOpen(false);
                setIsStagecodeOpen(false);
                setIsMeldpuntOpen(!isMeldpuntOpen);
              }}
              title="Centraal Meldpunt en vertrouwenspersonen"
              aria-expanded={isMeldpuntOpen}
              aria-label="Centraal Meldpunt Stagediscriminatie"
            >
              <ShieldAlert className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
              <span className="text-white font-extrabold tracking-wide">Meldpunt</span>
            </button>

            {/* Popover voor Meldpunt */}
            <div
              className="hr-def-card border-2 border-[#BA093F]"
              style={{ display: isMeldpuntOpen ? 'block' : 'none' }}
              role="dialog"
              aria-label="Centraal Meldpunt informatie"
            >
              <div className="hr-def-header">
                <div className="hr-def-title-wrap">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#BA093F]" aria-hidden="true"></span>
                  <span className="text-[12px] font-black text-[#BA093F] tracking-wider">CENTRAAL MELDPUNT</span>
                </div>
                <button
                  type="button"
                  className="hr-def-close"
                  onClick={() => setIsMeldpuntOpen(false)}
                  title="Sluiten"
                  aria-label="Sluit meldpunt popover"
                >
                  &times;
                </button>
              </div>
              <p className="hr-def-text mb-3">
                Hogeschool Rotterdam heeft n.a.v. de stagecode een centraal en laagdrempelig meldpunt ingericht waar studenten discriminatie veilig, vertrouwelijk en desgewenst anoniem kunnen melden.
              </p>
              <div className="pt-2.5 border-t border-[#EDE6DA] flex flex-wrap items-center gap-2">
                <a
                  href="https://forms.cloud.microsoft/e/fD8hpCT6WL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#BA093F] hover:bg-[#9B0734] text-white text-[12px] font-bold transition-colors shadow-2xs"
                >
                  <span>Meldingsformulier</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {isMeldpuntOpen && (
              <div
                className="hr-def-backdrop"
                style={{ display: 'block' }}
                onClick={() => setIsMeldpuntOpen(false)}
              />
            )}
          </div>

          {/* ==========================================
               4. PRINTEN
               ========================================== */}
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[#D1C7BA] bg-white hover:bg-[#FAF7F2] text-[12.5px] font-bold text-[#003340] transition-colors cursor-pointer shadow-2xs focus-visible:outline-2 focus-visible:outline-[#003340] focus-visible:outline-offset-2"
            aria-label="Print deze routekaart of sla op als PDF"
          >
            <Printer className="w-4 h-4 text-[#3D3833]" aria-hidden="true" />
            <span>Printen</span>
          </button>
        </div>
      </div>
    </header>
  );
};


