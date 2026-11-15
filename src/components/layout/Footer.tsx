import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { siteConfig } from '@/lib/config';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#05070a] border-t border-white/[0.08] text-slate-400 font-sans" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-14">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" showTagline={true} />
            <p className="text-sm text-slate-300 font-medium tracking-tight">
              {siteConfig.primaryTagline}
            </p>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              AutoSipt builds intelligent AI agents that answer customers, capture leads, follow up automatically, book appointments, and handle repetitive business operations 24/7.
            </p>

            {/* Target markets */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                Serving Businesses In
              </span>
              <div className="flex flex-wrap gap-2">
                {siteConfig.targetMarkets.map((market) => (
                  <span
                    key={market}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    {market}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#solutions" className="text-slate-400 hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-slate-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#book-demo" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Demo
                </a>
              </li>
            </ul>
          </div>

          {/* AI Solutions */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              AI Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#solutions" className="text-slate-400 hover:text-white transition-colors">
                  AI Voice Agent
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-slate-400 hover:text-white transition-colors">
                  WhatsApp AI Agent
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-slate-400 hover:text-white transition-colors">
                  AI Lead Follow-Up
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-slate-400 hover:text-white transition-colors">
                  AI Appointment Agent
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-slate-400 hover:text-white transition-colors">
                  AI Customer Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Connect & Legal
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a
                  href="https://linkedin.com/company/autosipt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-indigo-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/autosipt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  X (formerly Twitter)
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@autosipt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-red-400 transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>

            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Legal
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} AutoSipt. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Venture-grade AI architecture • 99.9% uptime SLA • SOC2 compliant standards
          </p>
        </div>
      </div>
    </footer>
  );
}
