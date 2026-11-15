import { X, Check, Bot, Zap, ArrowRight, ShieldCheck, Sparkles } from '@/components/ui/Icons';

export function WhyAutoSiptSection() {
  const comparisonRows = [
    {
      feature: 'Conversational Comprehension',
      chatbot: 'Rigid keyword matching & predefined decision trees',
      autosipt: 'Deep contextual reasoning, nuance & human speech cadence',
    },
    {
      feature: 'Taking Real Actions',
      chatbot: 'Limited to displaying text links or static FAQs',
      autosipt: 'Books calendars, queries inventory & triggers API webhooks',
    },
    {
      feature: 'Proactivity & Outreach',
      chatbot: 'Purely reactive — sits idle until a visitor types',
      autosipt: 'Automated follow-ups across WhatsApp, SMS & phone',
    },
    {
      feature: 'Lead Qualification',
      chatbot: 'Cannot qualify budget, intent, or decision timelines',
      autosipt: 'Dynamically assesses readiness and scores prospects',
    },
    {
      feature: 'Appointment Scheduling',
      chatbot: 'Dumps a calendar URL and hopes the user books',
      autosipt: 'Checks live slots, negotiates times & locks booking in chat',
    },
    {
      feature: 'CRM & Pipeline Synchronization',
      chatbot: 'Rarely syncs detailed dialogue context',
      autosipt: 'Creates contacts, logs transcripts & advances deal stages',
    },
    {
      feature: 'Operational Uptime',
      chatbot: 'Often breaks on complex questions, requiring human takeover',
      autosipt: 'Autonomous 24/7 execution with intelligent triage protocols',
    },
  ];

  return (
    <section id="why-autosipt" className="relative py-24 lg:py-32 bg-[#07090e] border-t border-white/[0.08]" aria-labelledby="why-autosipt-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Generational Shift in Business Automation</span>
          </div>
          <h2 id="why-autosipt-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Not Just Another Chatbot.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Compare outdated rule-based widgets with modern autonomous AI employees designed to execute real business objectives.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#0c1017] border border-white/10 shadow-2xl overflow-hidden mb-12">
          {/* Header Row */}
          <div className="grid grid-cols-12 bg-slate-900/80 p-5 sm:p-6 border-b border-white/10 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <div className="col-span-4 text-slate-400">Capability</div>
            <div className="col-span-4 text-slate-400 text-center flex items-center justify-center gap-1.5">
              <span>Traditional Chatbot</span>
            </div>
            <div className="col-span-4 text-indigo-400 text-center flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>AutoSipt AI Agents</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/5">
            {comparisonRows.map((row, index) => (
              <div
                key={row.feature}
                className="grid grid-cols-12 p-4 sm:p-6 text-xs sm:text-sm items-center hover:bg-white/[0.02] transition-colors"
              >
                <div className="col-span-4 font-semibold text-white pr-2">
                  {row.feature}
                </div>

                {/* Traditional Chatbot column */}
                <div className="col-span-4 text-slate-400 text-center px-2 flex flex-col items-center justify-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-1">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs text-slate-400 hidden sm:inline">
                    {row.chatbot}
                  </span>
                </div>

                {/* AutoSipt AI Agents column */}
                <div className="col-span-4 text-indigo-200 text-center px-2 flex flex-col items-center justify-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-1">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-200 hidden sm:inline">
                    {row.autosipt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Statement & Call to Action */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug">
            AutoSipt isn't just answering questions. It's helping your business get work done.
          </p>

          <div>
            <a
              href="#book-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all active:scale-[0.98]"
            >
              <span>Book a Free AI Demo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
