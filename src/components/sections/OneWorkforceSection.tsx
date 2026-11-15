'use client';

import { useState, useEffect } from 'react';
import {
  User,
  PhoneCall,
  TrendingUp,
  Repeat,
  CalendarCheck,
  Database,
  ArrowRight,
  ArrowDown,
  Sparkles,
} from '@/components/ui/Icons';

export function OneWorkforceSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const pipeline = [
    {
      title: 'Customer',
      role: 'Inbound Channel',
      action: 'Calls phone or messages WhatsApp at 10 PM',
      icon: User,
      color: 'from-sky-500/20 to-blue-500/20 text-sky-400 border-sky-500/30',
      badge: 'Step 1',
    },
    {
      title: 'AI Receptionist',
      role: 'Instant Intake',
      action: 'Greets, answers questions & clarifies intent in <1s',
      icon: PhoneCall,
      color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400 border-indigo-500/30',
      badge: 'Step 2',
    },
    {
      title: 'AI Sales Agent',
      role: 'Lead Qualification',
      action: 'Screens budget, urgency, and service fit automatically',
      icon: TrendingUp,
      color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30',
      badge: 'Step 3',
    },
    {
      title: 'AI Follow-Up Agent',
      role: 'Nurture & Recovery',
      action: 'Re-engages if customer pauses or drops off',
      icon: Repeat,
      color: 'from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30',
      badge: 'Step 4',
    },
    {
      title: 'AI Appointment Agent',
      role: 'Calendar Lock',
      action: 'Checks real-time availability and books slot',
      icon: CalendarCheck,
      color: 'from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30',
      badge: 'Step 5',
    },
    {
      title: 'CRM Integration',
      role: 'Automated Record',
      action: 'Updates pipeline, assigns owner, sends notifications',
      icon: Database,
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30',
      badge: 'Step 6',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % pipeline.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [pipeline.length]);

  return (
    <section className="relative py-24 lg:py-32 bg-[#07090e] border-t border-white/[0.06] overflow-hidden" aria-labelledby="one-workforce-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Autonomous End-to-End Orchestration</span>
          </div>
          <h2 id="one-workforce-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            One AI Workforce. Multiple Business Tasks.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Instead of adding more repetitive work to your team, give your business AI employees that can handle it automatically.
          </p>
        </div>

        {/* Desktop Workflow Flowchart */}
        <div className="hidden lg:grid grid-cols-6 gap-3 relative mb-12">
          {pipeline.map((node, index) => {
            const Icon = node.icon;
            const isCurrent = activeStepIndex === index;

            return (
              <div key={node.title} className="relative flex flex-col items-center text-center">
                <div
                  className={`w-full p-4 rounded-2xl border transition-all duration-300 ${
                    isCurrent
                      ? 'bg-indigo-950/70 border-indigo-400 shadow-[0_0_25px_rgba(99,102,241,0.35)] scale-105 z-10'
                      : 'bg-[#0a0e17] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                      {node.badge}
                    </span>
                    {isCurrent && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                    )}
                  </div>

                  <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center mb-3 border`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1">
                    {node.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-indigo-300 mb-2">
                    {node.role}
                  </p>
                  <p className="text-xs text-slate-400 line-clamp-2">
                    {node.action}
                  </p>
                </div>

                {/* Connecting arrow if not last */}
                {index < pipeline.length - 1 && (
                  <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 text-slate-600 z-20 pointer-events-none">
                    <ArrowRight className="w-4 h-4 text-indigo-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Vertical Timeline Flow */}
        <div className="lg:hidden space-y-4 max-w-md mx-auto mb-12">
          {pipeline.map((node, index) => {
            const Icon = node.icon;
            const isCurrent = activeStepIndex === index;

            return (
              <div key={node.title} className="flex flex-col items-center">
                <div
                  className={`w-full p-4 rounded-xl border flex items-center gap-4 ${
                    isCurrent
                      ? 'bg-indigo-950/60 border-indigo-400 shadow-md'
                      : 'bg-[#0a0e17] border-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-slate-400">{node.badge}</span>
                      <h3 className="text-sm font-bold text-white">{node.title}</h3>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">{node.action}</p>
                  </div>
                </div>

                {index < pipeline.length - 1 && (
                  <ArrowDown className="w-4 h-4 text-indigo-500/60 my-1.5" />
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA block */}
        <div className="text-center pt-2">
          <a
            href="#book-demo"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-xl shadow-indigo-600/30 transition-all duration-200 active:scale-[0.98]"
          >
            <span>Build My AI Workforce</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
