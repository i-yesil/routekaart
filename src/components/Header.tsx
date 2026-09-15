import React from 'react';
import { Printer, ShieldAlert, BookOpen, ChevronDown, SlidersHorizontal } from 'lucide-react';

interface HeaderProps {
  onOpenMeldpunt: () => void;
  onOpenStagecode: () => void;
  isHandelingskaderOpen: boolean;
  onToggleHandelingskader: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMeldpunt,
  onOpenStagecode,
  isHandelingskaderOpen,
  onToggleHandelingskader,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header role="banner" className="border-b-[3px] border-[#BA093F] pb-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[26px] sm:text-[30px] font-bold text-[#BA093F] leading-[1.2] tracking-tight">
            Routekaart Gelijke Stagekansen
          </h1>
          <p className="text-[14px] text-[#003340] font-semibold mt-1">
            Aanpak stagediscriminatie
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 no-print self-start md:self-end" role="toolbar" aria-label="Snelle acties">
          <button
            type="button"
            onClick={onOpenStagecode}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-[#D1C7BA] bg-white hover:bg-[#FAF7F2] text-[12.5px] font-bold text-[#003340] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#003340] focus-visible:outline-offset-2"
            aria-label="Bekijk de Stagecode hbo normen en afspraken"
          >
            <BookOpen className="w-4 h-4 text-[#00587A]" aria-hidden="true" />
            <span>Stagecode hbo</span>
          </button>

          <button
            type="button"
            onClick={onToggleHandelingskader}
            aria-expanded={isHandelingskaderOpen}
            aria-controls="handelingskader-collapse"
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 text-[12.5px] font-bold transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-[#003340] focus-visible:outline-offset-2 ${
              isHandelingskaderOpen
                ? 'bg-[#003340] border-[#003340] text-white shadow-xs'
                : 'bg-white border-[#D1C7BA] hover:bg-[#FAF7F2] text-[#003340]'
            }`}
            aria-label="Klap het Handelingskader per rol open of dicht"
          >
            <SlidersHorizontal className={`w-4 h-4 ${isHandelingskaderOpen ? 'text-[#FCC200]' : 'text-[#00587A]'}`} aria-hidden="true" />
            <span>Handelingskader</span>
            <ChevronDown
              className={`w-3.5 h-3.5 transition-transform duration-200 ${
                isHandelingskaderOpen ? 'rotate-180 text-white' : 'text-[#3D3833]'
              }`}
              aria-hidden="true"
            />
          </button>

          <button
            type="button"
            onClick={onOpenMeldpunt}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#BA093F] hover:bg-[#9B0734] text-white text-[12.5px] font-bold transition-colors shadow-xs cursor-pointer focus-visible:outline-2 focus-visible:outline-[#003340] focus-visible:outline-offset-2"
            aria-label="Direct naar het Centraal Meldpunt en Vertrouwenspersonen"
          >
            <ShieldAlert className="w-4 h-4 text-white" aria-hidden="true" />
            <span>Meldpunt</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-[#D1C7BA] bg-white hover:bg-[#FAF7F2] text-[12.5px] font-bold text-[#003340] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#003340] focus-visible:outline-offset-2"
            aria-label="Print deze routekaart of sla op als PDF"
          >
            <Printer className="w-4 h-4 text-[#3D3833]" aria-hidden="true" />
            <span className="hidden sm:inline">Printen</span>
          </button>
        </div>
      </div>
    </header>
  );
};

