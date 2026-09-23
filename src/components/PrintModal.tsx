import React, { useState } from 'react';
import { Printer, X, Check, Copy } from 'lucide-react';
import { PrintView } from './PrintView';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintModal: React.FC<PrintModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    try {
      window.print();
    } catch (err) {
      console.warn('Direct print command prevented by environment:', err);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="print-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#003340]/75 backdrop-blur-xs no-print animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF7F2] border-2 border-[#003340] rounded-2xl max-w-6xl w-full max-h-[95vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#003340] text-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#BA093F] flex items-center justify-center text-white shrink-0">
              <Printer className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 id="print-dialog-title" className="text-[15px] sm:text-[17px] font-bold leading-tight">
                Afdrukweergave: Student &amp; Begeleider (1 pagina liggend)
              </h2>
              <p className="text-[11.5px] text-[#D1C7BA] leading-none mt-0.5">
                Geoptimaliseerd voor A4 Landscape &middot; Beide rollen 1-op-1 uitgelijnd
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#BA093F] hover:bg-[#9B0734] text-white text-[13px] font-bold shadow-sm transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              <span>Nu afdrukken / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
              aria-label="Sluit afdrukvoorbeeld"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Tip / Guidance banner */}
        <div className="bg-[#EBF5F8] border-b border-[#B8D8E6] px-4 sm:px-6 py-2.5 text-[12px] sm:text-[12.5px] text-[#003340] flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#00587A]">Tip voor afdrukken:</span>
            <span>
              Kies in het printvenster voor <strong>Liggend (Landscape)</strong> en vink eventueel <em>&ldquo;Achtergrondafbeeldingen&rdquo;</em> aan voor de officiële huiskleuren.
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11.5px]">
            <span>Blokkeert je browser het pop-upvenster?</span>
            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1 text-[#00587A] font-bold underline hover:text-[#003340] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#006E66]" />
                  <span>Link gekopieerd!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Kopieer directe link</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body showing exact Print Sheet */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 bg-[#EAE3D5]/50 flex justify-center">
          <div className="w-full max-w-[1100px] bg-white rounded-xl shadow-lg border border-[#D1C7BA] p-3 sm:p-4">
            <PrintView forPreview={true} />
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-4 sm:px-6 py-2.5 bg-white border-t border-[#D1C7BA] flex items-center justify-between shrink-0">
          <span className="text-[12px] text-[#718096]">
            Sneltoets: <strong>Ctrl + P</strong> (Windows) of <strong>Cmd + P</strong> (Mac)
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg border border-[#D1C7BA] hover:bg-[#F7EFE3] text-[12.5px] font-bold text-[#003340] transition-colors cursor-pointer"
            >
              Sluiten
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="px-4 py-1.5 rounded-lg bg-[#003340] hover:bg-[#00222B] text-[12.5px] font-bold text-white transition-colors cursor-pointer inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Afdrukken</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
