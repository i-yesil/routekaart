import React, { useEffect, useRef, useState } from 'react';
import { X, Check, Copy, Info, Mail, ExternalLink, FileText } from 'lucide-react';
import { RESOURCE_DETAILS } from '../data/routekaartData';

interface ActionModalProps {
  resourceId: string | null;
  customTitle?: string;
  onClose: () => void;
}

export const ActionModal: React.FC<ActionModalProps> = ({
  resourceId,
  customTitle,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (resourceId) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      // Focus the close button when opened
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        previousFocusRef.current?.focus();
      };
    }
  }, [resourceId, onClose]);

  if (!resourceId) return null;

  const resource = RESOURCE_DETAILS[resourceId] || RESOURCE_DETAILS['aanpak'];

  const handleCopySummary = () => {
    const textToCopy = `${resource.title}\n${resource.subtitle}\n\n${resource.content.inleiding}\n\n` +
      resource.content.punten.map(p => `• ${p.kop}: ${p.tekst}`).join('\n\n') +
      (resource.content.tips ? `\n\nRichtlijnen:\n` + resource.content.tips.map(t => `- ${t}`).join('\n') : '');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyEmailText = () => {
    if (!resource.emailTemplate) return;
    const emailToCopy = `Onderwerp: ${resource.emailTemplate.subject}\n\n${resource.emailTemplate.body}`;
    navigator.clipboard.writeText(emailToCopy);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#003340]/65 backdrop-blur-xs no-print"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF7F2] border-2 border-[#003340] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col text-[#003340]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-[#D1C7BA] bg-white sticky top-0 z-10 rounded-t-2xl flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {resource.badge && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold bg-[#BA093F]/15 text-[#8F002D] border border-[#BA093F]/30 uppercase tracking-wide">
                  {resource.badge}
                </span>
              )}
              {customTitle && (
                <span className="text-[12px] text-[#3D3833] font-semibold truncate">
                  Stap: {customTitle}
                </span>
              )}
            </div>
            <h2 id="modal-title" className="text-[19px] sm:text-[22px] font-bold text-[#003340] leading-tight">
              {resource.title}
            </h2>
            <p id="modal-desc" className="text-[13px] text-[#3D3833] font-medium mt-0.5">
              {resource.subtitle}
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-[#3D3833] hover:text-[#003340] hover:bg-[#F0EAE1] transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-[#003340]"
            aria-label="Sluit dialoogvenster"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-5 text-[13.5px] leading-relaxed">
          {/* Introduction */}
          <div className="bg-white border-2 border-[#D1C7BA] rounded-xl p-4 text-[#1F2937] font-medium shadow-2xs">
            <p>{resource.content.inleiding}</p>
          </div>

          {/* External document link if provided (e.g. Stagecode hbo PDF) */}
          {resource.externalUrl && (
            <div className="bg-[#FAF7F2] border-2 border-[#00587A] rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-[#00587A]/10 flex items-center justify-center text-[#00587A] shrink-0">
                  <FileText className="w-5 h-5" aria-hidden="true" />
                </span>
                <div>
                  <h4 className="text-[14px] font-bold text-[#003340]">
                    Officieel brondocument
                  </h4>
                  <p className="text-[12px] text-[#4A5568]">
                    Gepubliceerd door Vereniging Hogescholen
                  </p>
                </div>
              </div>
              <a
                href={resource.externalUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#00587A] hover:bg-[#00425C] text-white text-[13px] font-bold transition-colors cursor-pointer shrink-0 shadow-xs focus-visible:outline-2 focus-visible:outline-[#003340]"
                aria-label={`${resource.externalUrl.label} (opent in nieuw venster)`}
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>{resource.externalUrl.label}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          )}

          {/* Email Template Card if provided (e.g. Mail je begeleider) */}
          {resource.emailTemplate && (
            <div className="bg-white border-2 border-[#0078D4] rounded-xl overflow-hidden shadow-xs">
              {/* Card top bar */}
              <div className="bg-[#0078D4] text-white px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FCC200]" aria-hidden="true" />
                  <span className="text-[13px] font-bold">Standaard e-mailbericht voor begeleider</span>
                </div>
                <span className="text-[11px] bg-white/15 px-2 py-0.5 rounded font-medium">
                  Outlook &amp; Webmail
                </span>
              </div>

              {/* Email meta fields */}
              <div className="p-4 bg-[#F8F9FA] border-b border-[#E1DFDD] space-y-2 text-[12.5px]">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-bold text-[#003340] w-20 shrink-0">Aan:</span>
                  <span className="text-[#605E5C] italic bg-white px-2.5 py-1 rounded border border-[#E1DFDD] flex-1">
                    [Leeg gelaten – vul hier het e-mailadres in van je studentcoach/stagebegeleider]
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-bold text-[#003340] w-20 shrink-0">Onderwerp:</span>
                  <span className="text-[#003340] font-semibold bg-white px-2.5 py-1 rounded border border-[#E1DFDD] flex-1">
                    {resource.emailTemplate.subject}
                  </span>
                </div>
              </div>

              {/* Email body preview */}
              <div className="p-4 bg-white">
                <div className="whitespace-pre-line font-sans text-[13px] text-[#1F2937] leading-relaxed bg-[#FAF7F2] p-3.5 rounded-lg border border-[#D1C7BA]">
                  {resource.emailTemplate.body}
                </div>
              </div>

              {/* Action buttons for Outlook & Copy */}
              <div className="p-3.5 bg-[#F8F9FA] border-t border-[#E1DFDD] flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2.5">
                <button
                  type="button"
                  onClick={handleCopyEmailText}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-2 border-[#D1C7BA] bg-white hover:bg-[#FAF7F2] text-[#003340] text-[13px] font-bold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#003340]"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                      <span className="text-emerald-700">E-mailtekst gekopieerd!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#00587A]" aria-hidden="true" />
                      <span>Kopieer e-mailtekst</span>
                    </>
                  )}
                </button>

                <a
                  href={resource.emailTemplate.mailtoUrl}
                  target="_top"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-[#0078D4] hover:bg-[#106EBE] text-white text-[13px] font-bold transition-colors cursor-pointer shadow-xs focus-visible:outline-2 focus-visible:outline-[#003340]"
                  aria-label="Open deze standaard e-mail direct in Outlook"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  <span>Open direct in Outlook</span>
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          )}

          {/* Key points */}
          <div className="space-y-3">
            <h3 className="text-[12px] font-bold uppercase tracking-wider text-[#3D3833]">
              Belangrijkste handvatten & afspraken
            </h3>
            {resource.content.punten.map((punt, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#D1C7BA] rounded-xl p-4 shadow-2xs"
              >
                <h4 className="text-[14.5px] font-bold text-[#003340] mb-1">
                  {punt.kop}
                </h4>
                <p className="text-[13px] text-[#1F2937] leading-relaxed">
                  {punt.tekst}
                </p>
              </div>
            ))}
          </div>

          {/* Practical tips */}
          {resource.content.tips && resource.content.tips.length > 0 && (
            <div className="bg-[#EDF4F6] border-2 border-[#00587A]/30 rounded-xl p-4">
              <h3 className="text-[13.5px] font-bold text-[#003340] mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-[#00587A]" aria-hidden="true" />
                Praktische richtlijnen & waarborgen
              </h3>
              <ul className="space-y-2 text-[13px] text-[#1F2937]">
                {resource.content.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#00587A] font-bold select-none" aria-hidden="true">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact box if any */}
          {resource.content.contactInfo && (
            <div className="bg-[#FDEEF3] border-2 border-[#BA093F] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h4 className="text-[14px] font-bold text-[#BA093F]">
                  {resource.content.contactInfo.naam}
                </h4>
                <p className="text-[12.5px] text-[#1F2937]">
                  {resource.content.contactInfo.toelichting}
                </p>
              </div>
              <div className="flex items-center gap-2">
                {resource.content.contactInfo.linkUrl ? (
                  <a
                    href={resource.content.contactInfo.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#BA093F] text-white text-[12.5px] font-bold hover:bg-[#9B0734] transition-colors focus-visible:outline-2 focus-visible:outline-[#003340] shrink-0"
                    aria-label={`${resource.content.contactInfo.linkLabel || 'Bekijk vertrouwenspersonen'} (opent in nieuw venster)`}
                  >
                    <span>{resource.content.contactInfo.linkLabel || 'Bekijk vertrouwenspersonen'}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <a
                    href={`mailto:${resource.content.contactInfo.contact}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#BA093F] text-white text-[12.5px] font-bold hover:bg-[#9B0734] transition-colors focus-visible:outline-2 focus-visible:outline-[#003340]"
                    aria-label={`Stuur een e-mail naar ${resource.content.contactInfo.contact}`}
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Stuur mail</span>
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#D1C7BA] bg-white rounded-b-2xl flex items-center justify-between gap-3 sticky bottom-0">
          <button
            type="button"
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border-2 border-[#D1C7BA] text-[12.5px] font-bold text-[#003340] hover:bg-[#FAF7F2] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#003340]"
            aria-label="Kopieer samenvatting van richtlijnen naar klembord"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                <span>Gekopieerd!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#3D3833]" aria-hidden="true" />
                <span>Kopieer richtlijnen</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-[#003340] hover:bg-[#00222B] text-white text-[12.5px] font-bold transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#BA093F]"
          >
            Sluiten
          </button>
        </div>
      </div>
    </div>
  );
};
