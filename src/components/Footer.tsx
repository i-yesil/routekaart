import React from 'react';
import { Server, Download } from 'lucide-react';

interface FooterProps {
  onOpenServerModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenServerModal }) => {
  return (
    <footer
      role="contentinfo"
      aria-label="Voettekst"
      className="mt-12 pt-6 border-t border-[#D1C7BA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left no-print"
    >
      <div className="flex items-center gap-3.5">
        <img
          src="/hr-logo.png"
          alt="Hogeschool Rotterdam"
          className="h-11 sm:h-12 w-auto object-contain shrink-0"
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col justify-center">
          <span className="text-[16px] sm:text-[17px] font-bold text-[#003340] leading-tight tracking-tight">
            Hogeschool Rotterdam
          </span>
          <span className="text-[13.5px] sm:text-[14px] font-medium text-[#003340] leading-snug mt-0.5">
            Onderwijs &amp; Kwaliteit
          </span>
          <span className="text-[13px] sm:text-[13.5px] text-[#4A5568] leading-snug mt-0.5">
            Themagroep Studentgerichte Omgeving 2026
          </span>
        </div>
      </div>

      {onOpenServerModal && (
        <div className="flex items-center gap-2 self-start sm:self-center">
          <button
            type="button"
            onClick={onOpenServerModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white hover:bg-[#FAF7F2] border border-[#D1C7BA] text-[12.5px] font-bold text-[#003340] shadow-2xs hover:border-[#BA093F] transition-all cursor-pointer"
            title="Bekijk hoe je deze routekaart op postulate.hro.nl zet"
          >
            <Server className="w-3.5 h-3.5 text-[#BA093F]" aria-hidden="true" />
            <span>Plaatsen op O&amp;O Server</span>
          </button>
          
          <a
            href="/routekaart-serverbestanden.zip"
            download="routekaart-serverbestanden.zip"
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#BA093F]/10 hover:bg-[#BA093F]/18 text-[12px] font-bold text-[#BA093F] transition-colors"
            title="Download direct het complete ZIP-bestand voor postulate.hro.nl"
          >
            <Download className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="hidden md:inline">Download ZIP</span>
          </a>
        </div>
      )}
    </footer>
  );
};

