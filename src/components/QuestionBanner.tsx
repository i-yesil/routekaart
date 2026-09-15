import React from 'react';
import { HelpCircle } from 'lucide-react';

interface QuestionBannerProps {
  vraag: string;
  rolNaam: string;
}

export const QuestionBanner: React.FC<QuestionBannerProps> = ({ vraag, rolNaam }) => {
  return (
    <div
      className="bg-[#003340] text-white px-4 sm:px-5 py-3.5 rounded-xl text-[15px] sm:text-[16px] font-semibold mb-4 flex items-center gap-3 shadow-xs border border-[#00222B]"
      role="region"
      aria-label={`Leidende vraag voor ${rolNaam}`}
    >
      <span
        className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center shrink-0 text-[#FCC200]"
        aria-hidden="true"
      >
        <HelpCircle className="w-5 h-5 text-[#FCC200]" />
      </span>
      <div className="flex-1 leading-snug">
        <h2 className="text-[15px] sm:text-[16.5px] font-bold text-white m-0">
          {vraag}
        </h2>
      </div>
    </div>
  );
};
