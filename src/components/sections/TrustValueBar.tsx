import { Clock, Zap, Repeat, CalendarCheck, Globe } from '@/components/ui/Icons';
import { siteConfig } from '@/lib/config';

export function TrustValueBar() {
  const features = [
    {
      title: '24/7 AI Availability',
      desc: 'Never miss another midnight inquiry or weekend lead.',
      icon: Clock,
      glow: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      title: 'Instant Responses',
      desc: 'Engage incoming prospects in under 3 seconds.',
      icon: Zap,
      glow: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      title: 'Automated Follow-ups',
      desc: 'Persistent multi-channel follow-ups that convert stale leads.',
      icon: Repeat,
      glow: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      title: 'Appointment Booking',
      desc: 'Direct calendar integration that fills open clinic & sales slots.',
      icon: CalendarCheck,
      glow: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <section className="relative py-12 bg-[#090d15] border-y border-white/[0.08]" aria-label="Value Proposition">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Supporting Hook */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">
            Always-On Revenue Infrastructure
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Your business shouldn't stop working when your team stops.
          </h2>
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>Serving high-growth businesses across:</span>
            <span className="font-semibold text-slate-200">
              UK • UAE • USA • Canada • Australia
            </span>
          </div>
        </div>

        {/* 4 Core Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.glow} mb-4 transition-transform group-hover:scale-105`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
