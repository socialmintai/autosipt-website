import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from '@/components/ui/Icons';

export function FinalCtaSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#090d15] via-[#0b0f1c] to-[#07090e] border-t border-white/[0.08] overflow-hidden" aria-labelledby="final-cta-title">
      {/* Background glow highlights */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/15 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 id="final-cta-title" className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Your Next Employee Doesn't Need a Desk.
        </h2>

        {/* Subheadline */}
        <p className="mt-6 text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-300 max-w-2xl mx-auto">
          Give your business an AI workforce that works 24/7.
        </p>

        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl mx-auto">
          Start capturing every missed lead, booking calendar appointments around the clock, and eliminating repetitive manual follow-ups today.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-[0_0_35px_rgba(99,102,241,0.45)] hover:shadow-[0_0_45px_rgba(99,102,241,0.65)] transition-all duration-300 active:scale-[0.98]"
          >
            <span>Book a Free AI Demo</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            href="#roi-calculator"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
          >
            <span>Get a Free Automation Assessment</span>
          </a>
        </div>

        {/* Below Trust markers */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            No obligation
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-sky-400" />
            Business-specific recommendations
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-purple-400" />
            Fast setup
          </span>
        </div>
      </div>
    </section>
  );
}
