import React from 'react';
import { Blok } from '../types';

interface KeyPrinciplesProps {
  blokken: Blok[];
}

export const KeyPrinciples: React.FC<KeyPrinciplesProps> = ({ blokken }) => {
  return (
    <section aria-label="Kernprincipes en contactpunten" className="mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {blokken.map((blok, idx) => {
          const isBlauw = blok.b;
          return (
            <article
              key={idx}
              className={`rounded-xl p-3.5 sm:p-4 border-2 transition-colors ${
                isBlauw
                  ? 'bg-[#EDF4F6] border-[#00587A]/30'
                  : 'bg-[#FAF7F2] border-[#D1C7BA]'
              }`}
            >
              <h4 className="text-[13.5px] font-bold text-[#003340] mb-1.5 flex items-center gap-2">
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                    isBlauw ? 'bg-[#00587A]' : 'bg-[#BA093F]'
                  }`}
                  aria-hidden="true"
                />
                {blok.t}
              </h4>
              <div
                className="text-[12.5px] text-[#1F2937] leading-relaxed [&_a]:text-[#00587A] [&_a]:underline [&_a]:font-semibold hover:[&_a]:text-[#003340]"
                dangerouslySetInnerHTML={{ __html: blok.i }}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
