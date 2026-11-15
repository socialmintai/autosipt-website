'use client';

import { useState } from 'react';
import {
  MessageSquare,
  PhoneCall,
  CheckCircle2,
  Calendar,
  Send,
  User,
  Bot,
  ArrowRight,
  Sparkles,
  Volume2,
  Clock,
  Database,
} from '@/components/ui/Icons';

export function ConversationDemoSection() {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'voice'>('whatsapp');
  const [stepIndex, setStepIndex] = useState(6); // Show full conversation initially, allow replay

  const messages = [
    { sender: 'customer', text: 'Hi, I want to book an appointment.', time: '11:42 AM' },
    { sender: 'ai', text: 'Absolutely. I can help with that. What service are you interested in?', time: '11:42 AM' },
    { sender: 'customer', text: 'A consultation.', time: '11:43 AM' },
    { sender: 'ai', text: 'Great. I have Tuesday at 11:00 AM or Wednesday at 3:00 PM available. Which works better?', time: '11:43 AM' },
    { sender: 'customer', text: 'Wednesday.', time: '11:44 AM' },
    { sender: 'ai', text: "Perfect. Your appointment is booked for Wednesday at 3 PM. I'll send you a confirmation.", time: '11:44 AM' },
  ];

  const handleReplay = () => {
    setStepIndex(1);
    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= messages.length) {
          clearInterval(interval);
          return messages.length;
        }
        return prev + 1;
      });
    }, 1200);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#090d15] border-t border-white/[0.08]" aria-labelledby="demo-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real-time Conversational Intelligence</span>
          </div>
          <h2 id="demo-title" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            See AutoSipt in Action
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Natural conversations that seamlessly guide prospects from curiosity to confirmed booking without human intervention.
          </p>

          {/* Interface Switcher */}
          <div className="inline-flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-white/10 mt-8">
            <button
              type="button"
              onClick={() => setActiveTab('whatsapp')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'whatsapp'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Interface
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('voice')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'voice'
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <PhoneCall className="w-4 h-4" />
              Voice Call Simulation
            </button>
          </div>
        </div>

        {/* Demo Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Main Simulated Phone Screen */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#0c1017] border border-white/15 p-4 sm:p-6 shadow-2xl overflow-hidden">
              {/* Header inside phone */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white font-bold text-sm shadow">
                    AI
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#0c1017]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      AutoSipt Assistant
                      <span className="text-[10px] font-normal text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        Verified
                      </span>
                    </h4>
                    <p className="text-xs text-slate-400">
                      {activeTab === 'whatsapp' ? 'Online • Typically replies instantly' : 'Call in progress • 00:48'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleReplay}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium px-2.5 py-1 rounded bg-white/5 hover:bg-white/10 transition-colors"
                >
                  ↻ Replay Chat
                </button>
              </div>

              {/* Voice mode active audio wave bar (if voice tab) */}
              {activeTab === 'voice' && (
                <div className="mb-4 p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Volume2 className="w-4 h-4 text-indigo-400 animate-pulse" />
                    <span className="text-xs font-mono text-indigo-300">Live Voice Agent • Latency: 420ms</span>
                  </div>
                  <div className="flex items-center gap-1 h-4">
                    <span className="w-1 bg-indigo-400 h-2 rounded-full animate-pulse" />
                    <span className="w-1 bg-indigo-400 h-4 rounded-full animate-pulse" />
                    <span className="w-1 bg-indigo-400 h-3 rounded-full animate-pulse" />
                    <span className="w-1 bg-indigo-400 h-1 rounded-full animate-pulse" />
                  </div>
                </div>
              )}

              {/* Message bubbles list */}
              <div className="space-y-3.5 min-h-[320px] max-h-[380px] overflow-y-auto pr-1">
                {messages.slice(0, stepIndex).map((msg, i) => {
                  const isCustomer = msg.sender === 'customer';

                  return (
                    <div
                      key={i}
                      className={`flex flex-col ${isCustomer ? 'items-end' : 'items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                          isCustomer
                            ? 'bg-indigo-600 text-white rounded-br-none'
                            : 'bg-slate-800/90 text-slate-100 rounded-bl-none border border-white/10'
                        }`}
                      >
                        <p>{msg.text}</p>
                        <span className={`block text-[10px] mt-1 text-right ${isCustomer ? 'text-indigo-200' : 'text-slate-400'}`}>
                          {msg.time}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Input simulator */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="AutoSipt automated response active..."
                  disabled
                  className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-slate-400 placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="button"
                  disabled
                  className="p-2.5 rounded-xl bg-indigo-600 text-white opacity-80 cursor-default"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Action Outcomes */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#0e131e] to-[#0a0e16] border border-white/10 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-400" />
                Automated Pipeline Results
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Executed live in the background while the conversation was taking place:
              </p>

              {/* Required 4 outcomes from specification */}
              <div className="space-y-3.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-300">Lead Qualified ✓</h4>
                    <p className="text-xs text-slate-400">Prospect verified as consultation candidate</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-indigo-300">Appointment Booked ✓</h4>
                    <p className="text-xs text-slate-400">Wednesday at 3:00 PM added to practitioner calendar</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-sky-300">Confirmation Sent ✓</h4>
                    <p className="text-xs text-slate-400">Instant SMS + WhatsApp reminder dispatched</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-purple-300">CRM Updated ✓</h4>
                    <p className="text-xs text-slate-400">Deal stage moved to "Meeting Scheduled" in HubSpot</p>
                  </div>
                </div>
              </div>

              {/* Section CTA */}
              <div className="mt-8 pt-4 border-t border-white/10">
                <a
                  href="#book-demo"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-sky-500 hover:from-indigo-500 hover:to-sky-400 shadow-md shadow-indigo-500/30 transition-all"
                >
                  <span>Build This For My Business</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
