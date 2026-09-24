import React, { useState } from 'react';
import { Download, X, Copy, Check, Server, ExternalLink, HelpCircle } from 'lucide-react';

interface ServerDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServerDeployModal: React.FC<ServerDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedMail, setCopiedMail] = useState(false);

  if (!isOpen) return null;

  const tegelHtml = `<!-- Tegel voor Routekaart Gelijke Stagekansen op de O&O startpagina -->
<div class="card">
  <div style="display:flex; justify-content:space-between; align-items:center;">
    <h3 style="color:#BA093F; font-weight:bold; margin:0;">Routekaart Gelijke Stagekansen</h3>
    <span style="background:#e2e8f0; border-radius:50%; width:20px; height:20px; display:inline-flex; align-items:center; justify-content:center; font-size:12px; font-weight:bold;">i</span>
  </div>
  <p style="color:#4a5568; font-size:14px; margin:12px 0 20px 0;">
    Handelingsperspectief en stappenplan bij het ervaren of vermoeden van stagediscriminatie voor studenten en begeleiders.
  </p>
  <a href="/routekaart/" style="display:block; text-align:center; background:#BA093F; color:#ffffff; padding:10px 16px; border-radius:8px; font-weight:bold; text-decoration:none;">
    Start Routekaart
  </a>
</div>`;

  const mailText = `Hoi,

Hierbij het kant-en-klare ZIP-bestand voor de nieuwe Routekaart Gelijke Stagekansen (Aanpak stagediscriminatie).

Zou jij deze op de O&O-server (postulate.hro.nl) willen zetten?
1. Pak de map 'routekaart' uit in httpdocs: /httpdocs/routekaart/
2. Voeg een tegel toe aan de startpagina ('Welkom bij de dienst O&O!') naast Spel AI en AI Triviant met een link naar /routekaart/

Belangrijk: Dit project heeft GEEN MySQL-database of persoonsgegevens nodig. Alle meldingen gaan via het officiële Microsoft Forms-meldpunt van de HR. Het is dus direct AVG-proof en onderhoudsvrij.

Alvast bedankt!`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(tegelHtml);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2500);
  };

  const handleCopyMail = () => {
    navigator.clipboard.writeText(mailText);
    setCopiedMail(true);
    setTimeout(() => setCopiedMail(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="server-dialog-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#003340]/75 backdrop-blur-xs no-print animate-in fade-in duration-200"
    >
      <div className="bg-[#FAF7F2] border-2 border-[#003340] rounded-2xl max-w-2xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#003340] text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#BA093F] flex items-center justify-center text-white shrink-0">
              <Server className="w-4 h-4" aria-hidden="true" />
            </div>
            <div>
              <h2 id="server-dialog-title" className="text-[16px] sm:text-[18px] font-bold leading-tight">
                Plaatsen op de O&amp;O Server
              </h2>
              <p className="text-[12px] text-[#D1C7BA] leading-none mt-0.5">
                postulate.hro.nl &middot; Instructies &amp; ZIP-bestand
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Sluit venster"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-5 text-[13.5px] text-[#003340]">
          
          {/* Direct Download Box */}
          <div className="p-4 bg-white border-2 border-[#BA093F] rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-bold text-[#BA093F] text-[15px] flex items-center gap-1.5">
                <Download className="w-4 h-4" />
                <span>Kant-en-klaar serverbestand</span>
              </h3>
              <p className="text-[12.5px] text-[#4A5568] mt-0.5">
                Bevat de complete map <code>routekaart/</code> met alle pagina&apos;s, stijlen en scripts. Geen installatie of terminal nodig!
              </p>
            </div>
            <a
              href="/routekaart-serverbestanden.zip"
              download="routekaart-serverbestanden.zip"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#BA093F] hover:bg-[#9B0734] text-white font-bold text-[13px] shadow-sm transition-colors shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download ZIP (229 KB)</span>
            </a>
          </div>

          {/* Waarom staat het er nu nog niet bij? */}
          <div className="p-4 bg-[#EBF5F8] border border-[#B8D8E6] rounded-xl">
            <h4 className="font-bold text-[#00587A] text-[14px] flex items-center gap-1.5 mb-1.5">
              <HelpCircle className="w-4 h-4" />
              <span>Waarom staat het nog niet op de O&amp;O-startpagina?</span>
            </h4>
            <p className="text-[13px] text-[#2D3748] leading-relaxed">
              Op de O&amp;O-welkomstpagina (<em>&ldquo;Welkom bij de dienst O&amp;O!&rdquo;</em>) staan nu tegels voor <strong>Spel AI</strong> en <strong>AI Triviant</strong>.
              Zodra de beheerder/collega van de server de map <code>routekaart</code> in <code>httpdocs</code> zet en onderstaande tegel toevoegt, verschijnt hij er netjes tussen!
            </p>
          </div>

          {/* Tegel HTML Code */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[#003340] text-[13.5px]">
                Code voor de tegel op de startpagina:
              </h4>
              <button
                type="button"
                onClick={handleCopyCode}
                className="inline-flex items-center gap-1 text-[12px] font-bold text-[#00587A] hover:text-[#003340] cursor-pointer"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#006E66]" />
                    <span>Gekopieerd!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Kopieer HTML-code</span>
                  </>
                )}
              </button>
            </div>
            <pre className="bg-[#1F2937] text-[#F3F4F6] p-3 rounded-lg text-[11.5px] font-mono overflow-x-auto select-all leading-relaxed">
              {tegelHtml}
            </pre>
          </div>

          {/* Kant-en-klare e-mailtekst voor collega */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-[#003340] text-[13.5px]">
                Handige tekst om te sturen naar je collega/beheerder:
              </h4>
              <button
                type="button"
                onClick={handleCopyMail}
                className="inline-flex items-center gap-1 text-[12px] font-bold text-[#00587A] hover:text-[#003340] cursor-pointer"
              >
                {copiedMail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#006E66]" />
                    <span>Gekopieerd!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Kopieer bericht</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-[#F7EFE3] border border-[#D1C7BA] p-3 rounded-lg text-[12.5px] text-[#4A5568] whitespace-pre-line leading-relaxed">
              {mailText}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-white border-t border-[#D1C7BA] flex items-center justify-end shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#003340] hover:bg-[#00222B] text-[13px] font-bold text-white transition-colors cursor-pointer"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};
