import React from 'react';

interface LogoProps {
  className?: string;
  theme?: 'light' | 'dark' | 'color';
}

/**
 * Hogeschool Rotterdam Logo
 * Consistent with HR corporate visual identity:
 * - Characteristic Karmijnrood block (#BA093F / #D3104C)
 * - Typographic wordmark "hogeschool rotterdam"
 */
export const HogeschoolRotterdamLogo: React.FC<LogoProps> = ({
  className = 'h-10',
  theme = 'color'
}) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#003340';
  const accentColor = '#BA093F'; // WCAG AA accessible Karmijnrood

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} aria-label="Hogeschool Rotterdam Logo">
      {/* Emblem */}
      <svg
        viewBox="0 0 54 54"
        className="h-full aspect-square shrink-0 rounded-lg shadow-xs"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="54" height="54" rx="8" fill={accentColor} />
        {/* Geometric stylized 'hr' letters matching Hogeschool Rotterdam identity */}
        <path
          d="M13 14H19V25.2C20.6 23.2 23 22 26 22C31.5 22 34 25.5 34 31.2V40H28V32.4C28 28.5 26.6 26.8 23.8 26.8C20.8 26.8 19 28.9 19 32.8V40H13V14Z"
          fill="#FFFFFF"
        />
        <path
          d="M37 22.5H43V26.2C44.4 23.6 47 22.2 49.5 22.2C50.5 22.2 51.4 22.4 52 22.8V28.2C51.1 27.6 49.8 27.4 48.6 27.4C45.2 27.4 43 29.8 43 33.6V40H37V22.5Z"
          fill="#FFFFFF"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className="text-[17px] font-extrabold tracking-tight"
          style={{ color: textColor }}
        >
          hogeschool
        </span>
        <span
          className="text-[17px] font-extrabold tracking-tight mt-0.5"
          style={{ color: accentColor }}
        >
          rotterdam
        </span>
      </div>
    </div>
  );
};
