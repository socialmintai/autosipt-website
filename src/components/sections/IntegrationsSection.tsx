import { Sparkles, CheckCircle2, ArrowRight } from '@/components/ui/Icons';
import { INTEGRATIONS } from '@/lib/config';

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-24 lg:py-32 bg-[#07090e] border-t border-white/[0.08]" aria-labelledby="integrations-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seamless Ecosystem Compatibility</span>
          </div>
          <h2 id="integrations-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Connects With Your Existing Tools
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            No need to replace your stack. AutoSipt connects directly with your CRM, telephony, and calendar tools via certified APIs and secure webhooks.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {INTEGRATIONS.map((tool) => (
            <div
              key={tool.name}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#0c1018] to-[#07090e] border border-white/10 hover:border-indigo-500/40 flex flex-col items-center text-center transition-all duration-200 group hover:-translate-y-1 shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center font-bold text-sm text-indigo-400 mb-3 group-hover:scale-110 transition-transform">
                {tool.name.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="text-sm font-bold text-white mb-0.5 group-hover:text-indigo-300 transition-colors">
                {tool.name}
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                {tool.category}
              </p>
            </div>
          ))}

          {/* Plus Custom API Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-b from-indigo-950/40 to-slate-950 border border-indigo-500/30 flex flex-col items-center justify-center text-center">
            <div className="text-xs font-mono font-bold text-indigo-300 mb-1">
              + REST API
            </div>
            <p className="text-xs font-semibold text-white">Custom Webhooks</p>
            <p className="text-[10px] text-indigo-400 mt-1">Any Custom Stack</p>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Bi-directional data sync • SOC2 Type II standards • 256-bit SSL encryption</span>
        </div>
      </div>
    </section>
  );
}
