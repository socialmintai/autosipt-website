import { PhoneMissed, Clock3, UserX, RefreshCw, AlertTriangle, ArrowRight } from '@/components/ui/Icons';

export function ProblemSection() {
  const problems = [
    {
      title: 'Missed Calls',
      desc: 'Customers call when nobody is available.',
      impact: '62% of calls outside 9-to-5 go to competitors who answer first.',
      icon: PhoneMissed,
      tag: 'Lost Opportunities',
    },
    {
      title: 'Slow Responses',
      desc: 'Potential customers move on when they don’t receive an immediate response.',
      impact: 'Leads are 7x less likely to convert after just 1 hour of delay.',
      icon: Clock3,
      tag: 'Leaking Pipeline',
    },
    {
      title: 'Forgotten Follow-ups',
      desc: 'Your team cannot manually follow up with every lead.',
      impact: '80% of sales require 5+ follow-ups, yet 44% of reps give up after 1.',
      icon: UserX,
      tag: 'Wasted Ad Spend',
    },
    {
      title: 'Repetitive Work',
      desc: 'Employees spend hours answering the same questions and booking appointments.',
      impact: 'High-salary staff bogged down by low-leverage clerical tasks.',
      icon: RefreshCw,
      tag: 'Team Burnout',
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-[#07090e]" aria-labelledby="problem-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/20 mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Hidden Cost of Manual Operations</span>
          </div>
          <h2 id="problem-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How Many Leads Are You Losing Without Realizing It?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Every day, qualified buyers click your ads or visit your site, but slip away before your team can ever get in touch.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {problems.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="relative p-6 rounded-2xl bg-gradient-to-b from-[#0e131d] to-[#090d14] border border-white/10 hover:border-rose-500/40 transition-all duration-300 group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-400/80 px-2 py-0.5 rounded bg-rose-500/10 border border-rose-500/20">
                    {card.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-slate-300 mb-4 leading-snug">
                  {card.desc}
                </p>
                <div className="pt-3 border-t border-white/5 text-xs text-slate-400">
                  {card.impact}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Statement Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900/40 border border-indigo-500/30 p-8 text-center backdrop-blur-sm">
          <p className="text-lg sm:text-xl font-semibold text-slate-100 mb-6">
            AutoSipt automates these repetitive conversations so your team can focus on higher-value work.
          </p>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all active:scale-[0.98]"
          >
            <span>See the AI Workforce Solution</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
