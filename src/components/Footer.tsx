import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Voettekst"
      className="mt-12 pt-6 border-t border-[#D1C7BA] flex items-center justify-start gap-3.5 text-left"
    >
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
    </footer>
  );
};
