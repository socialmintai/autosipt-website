import React from 'react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ className = '', size = 'md', showTagline = false }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group transition-opacity hover:opacity-95 ${className}`} aria-label="AutoSipt - AI Employees for Your Business">
      {/* Modern automation flow glyph */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 via-sky-500/20 to-purple-600/20 border border-white/10 p-1.5 shadow-[0_0_20px_rgba(99,102,241,0.25)] group-hover:border-indigo-400/40 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] transition-all duration-300`}>
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="as-gradient" x1="2" y1="4" x2="30" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="0.5" stopColor="#6366F1" />
              <stop offset="1" stopColor="#A855F7" />
            </linearGradient>
            <linearGradient id="as-glow" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#60A5FA" stopOpacity="0.8" />
              <stop offset="1" stopColor="#818CF8" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {/* Subtle automation cycle path with dynamic flow node */}
          <path
            d="M8 22C6 19 6 13 11 8C16 3 24 5 25 11C26 17 21 21 16 21C11 21 9 24 9 26C9 27.5 10.5 28.5 13 28.5H23"
            stroke="url(#as-gradient)"
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central AI node representing intelligent automation */}
          <circle cx="16" cy="11" r="2.5" fill="#38BDF8" />
          <circle cx="23" cy="28.5" r="2" fill="#A855F7" />
          {/* Micro pulse halo */}
          <circle cx="16" cy="11" r="5" stroke="url(#as-glow)" strokeWidth="1" strokeDasharray="2 2" className="animate-spin-slow opacity-60" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-semibold tracking-tight text-white font-sans ${textSizes[size]} flex items-center`}>
          Auto<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-300">Sipt</span>
          <span className="ml-1 inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="AI Workforce Active" />
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-wider uppercase text-slate-400 font-medium -mt-1">
            AI Employees
          </span>
        )}
      </div>
    </Link>
  );
}
