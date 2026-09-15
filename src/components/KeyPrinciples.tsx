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
                  ? 'bg-[#FFF7ED] border-[#EA580C]/35'
                  : 'bg-[#FFFDF9] border-[#FDBA74]/50'
              }`}
            >
              <h4 className="text-[13.5px] font-bold text-[#7C2D12] mb-1.5">
                {blok.t}
              </h4>
              <div
                className="text-[12.5px] text-[#431407] leading-relaxed [&_a]:text-[#C2410C] [&_a]:underline [&_a]:font-bold hover:[&_a]:text-[#7C2D12]"
                dangerouslySetInnerHTML={{ __html: blok.i }}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
