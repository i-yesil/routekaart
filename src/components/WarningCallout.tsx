import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface WarningCalloutProps {
  letOpHtml: string;
}

export const WarningCallout: React.FC<WarningCalloutProps> = ({ letOpHtml }) => {
  return (
    <aside
      role="note"
      aria-label="Belangrijke waarborg en aandachtspunt"
      className="flex items-start gap-3 bg-[#FDEEF3] border-2 border-[#BA093F] rounded-xl px-4 py-3.5 mb-5 text-[13.5px] sm:text-[14px] text-[#003340] leading-relaxed shadow-2xs"
    >
      <AlertTriangle className="w-5 h-5 text-[#BA093F] shrink-0 mt-0.5" aria-hidden="true" />
      <div
        className="flex-1 [&_b]:text-[#BA093F] [&_b]:font-bold [&_strong]:text-[#BA093F] [&_strong]:font-bold text-[#1F2937]"
        dangerouslySetInnerHTML={{ __html: letOpHtml }}
      />
    </aside>
  );
};
