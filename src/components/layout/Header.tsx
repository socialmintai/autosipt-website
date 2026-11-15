'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navigation } from '@/lib/config';
import { Logo } from '@/components/ui/Logo';
import { Menu, X, ArrowRight, Sparkles } from '@/components/ui/Icons';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-[#07090e]/60 backdrop-blur-sm border-b border-white/[0.04] py-4'
      }`}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-3">
            <Logo size="md" />
            <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              AI Workforce
            </span>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.main.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <a
              href="#book-demo"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_25px_rgba(99,102,241,0.55)] transition-all duration-200 active:scale-[0.98]"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu drop-down */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-3 pt-4 pb-6 px-4 bg-[#0c1017]/95 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="flex flex-col gap-3">
              {navigation.main.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#book-demo"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-medium text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 shadow-lg shadow-indigo-500/25"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>Book a Free Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
