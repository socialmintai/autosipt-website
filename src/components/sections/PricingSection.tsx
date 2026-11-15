import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from '@/components/ui/Icons';
import { PRICING_PLANS } from '@/lib/config';

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#090d15] border-t border-white/[0.08] scroll-mt-20" aria-labelledby="pricing-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent, High-ROI Plans</span>
          </div>
          <h2 id="pricing-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Start Small. Scale With Your Business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            No long-term contracts. Deploy your AI employee today and scale as your appointment volume grows.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.highlight;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                  isGrowth
                    ? 'bg-gradient-to-b from-[#101628] via-[#0b0f1c] to-[#07090e] border-indigo-500/60 shadow-[0_0_40px_rgba(99,102,241,0.25)] scale-100 lg:-translate-y-2'
                    : 'bg-[#0c1017] border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-indigo-500 to-sky-400 text-white shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white tracking-wide">
                      {plan.name}
                    </h3>
                    {isGrowth && <Zap className="w-5 h-5 text-indigo-400" />}
                  </div>

                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-medium text-slate-400">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-400 mb-8 min-h-[40px]">
                    {plan.subtitle}
                  </p>

                  <div className="pt-6 border-t border-white/10 space-y-3.5 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Included Capabilities:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <a
                    href="#book-demo"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isGrowth
                        ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 text-white shadow-xl shadow-indigo-600/30'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Required Disclaimer */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            <span className="font-semibold text-slate-400">Disclaimer:</span> Pricing may vary based on usage, integrations, call volume and workflow complexity. Telephony carrier minutes and official WhatsApp API messages billed transparently at pass-through rates.
          </p>
        </div>
      </div>
    </section>
  );
}
