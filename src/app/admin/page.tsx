'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import {
  Users,
  MessageSquare,
  PhoneCall,
  Mail,
  Download,
  RefreshCw,
  Sparkles,
  ArrowRight,
  Shield,
  CheckCircle2,
  Calendar,
} from '@/components/ui/Icons';

interface Lead {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  website?: string;
  serviceInterest: string;
  message?: string;
  submittedAt: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/lead');
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
        // Also check if localStorage has local cached leads
        const cached = localStorage.getItem('autosipt_leads_local');
        if (cached) {
          try {
            const localLeads = JSON.parse(cached);
            const merged = [...data.leads];
            localLeads.forEach((l: Lead) => {
              if (!merged.find((m) => m.id === l.id || (m.email === l.email && m.name === l.name))) {
                merged.push(l);
              }
            });
            setLeads(merged);
          } catch (e) {}
        }
      }
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Name', 'Company', 'Email', 'Phone', 'Country', 'Service Interest', 'Submitted At', 'Message'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.name}"`,
      `"${l.company}"`,
      `"${l.email}"`,
      `"${l.phone}"`,
      `"${l.country}"`,
      `"${l.serviceInterest}"`,
      `"${l.submittedAt}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`,
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `autosipt-leads-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(filter.toLowerCase()) ||
      l.company.toLowerCase().includes(filter.toLowerCase()) ||
      l.email.toLowerCase().includes(filter.toLowerCase()) ||
      l.serviceInterest.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                AutoSipt Lead CRM & Inquiries
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Inbox
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Every customer enquiry submitted on <strong className="text-white">autosipt.com</strong> is automatically recorded here.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={fetchLeads}
              disabled={loading}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button
              type="button"
              onClick={exportCSV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-[#0c1017] border border-white/10">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Total Leads Captured</p>
            <p className="text-3xl font-extrabold text-white mt-1 font-mono">{leads.length}</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0c1017] border border-white/10">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Notification Destination</p>
            <p className="text-sm font-semibold text-indigo-400 mt-1 truncate">
              riteshyadav7342@gmail.com
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-[#0c1017] border border-white/10">
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Target Countries</p>
            <p className="text-sm font-semibold text-slate-300 mt-1">
              UK • UAE • USA • Canada • Australia
            </p>
          </div>
        </div>

        {/* Email & Webhook Setup Helper Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/30 text-xs sm:text-sm text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-indigo-300 font-bold">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>How to get direct Email / Phone alerts:</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            By default, all leads are saved directly here in this dashboard. If you also want an instant email to your Gmail inbox, add your free API key in Vercel:
            <code className="mx-1 px-1.5 py-0.5 rounded bg-black/50 text-indigo-300 font-mono">RESEND_API_KEY</code> or add <code className="mx-1 px-1.5 py-0.5 rounded bg-black/50 text-indigo-300 font-mono">LEAD_WEBHOOK_URL</code> for instant Telegram/Discord sound alerts.
          </p>
        </div>

        {/* Filter input */}
        <div className="flex items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Search leads by name, business, email or goal..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full sm:max-w-md px-4 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
          />
          <span className="text-xs text-slate-500 font-mono shrink-0">
            Showing {filteredLeads.length} of {leads.length}
          </span>
        </div>

        {/* Leads Table */}
        <div className="rounded-2xl bg-[#0c1017] border border-white/10 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900/80 border-b border-white/10 text-slate-400 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="p-4">Prospect & Business</th>
                  <th className="p-4">Contact Info</th>
                  <th className="p-4">Automation Goal</th>
                  <th className="p-4">Country</th>
                  <th className="p-4">Date & Time</th>
                  <th className="p-4 text-right">Instant Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500">
                      {loading ? 'Loading leads...' : 'No inquiries found matching your search.'}
                    </td>
                  </tr>
                ) : (
                  filteredLeads.map((lead) => {
                    const cleanPhone = lead.phone.replace(/[^0-9+]/g, '');
                    const waText = encodeURIComponent(
                      `Hi ${lead.name}, thanks for reaching out to AutoSipt! I saw your demo request for ${lead.company} regarding ${lead.serviceInterest}. When are you free for a quick 10-minute preview?`
                    );

                    return (
                      <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                        <td className="p-4">
                          <p className="font-bold text-white text-sm">{lead.name}</p>
                          <p className="text-indigo-400 text-xs mt-0.5">{lead.company}</p>
                          {lead.message && (
                            <p className="text-[11px] text-slate-400 mt-1 max-w-xs truncate" title={lead.message}>
                              "{lead.message}"
                            </p>
                          )}
                        </td>
                        <td className="p-4 space-y-1">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-slate-300 hover:text-white flex items-center gap-1.5"
                          >
                            <Mail className="w-3.5 h-3.5 text-slate-500" />
                            <span>{lead.email}</span>
                          </a>
                          <a
                            href={`tel:${cleanPhone}`}
                            className="text-slate-400 hover:text-white flex items-center gap-1.5"
                          >
                            <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
                            <span>{lead.phone}</span>
                          </a>
                        </td>
                        <td className="p-4">
                          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                            {lead.serviceInterest}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-0.5 rounded text-[11px] bg-white/5 text-slate-300 border border-white/10">
                            {lead.country}
                          </span>
                        </td>
                        <td className="p-4 text-slate-400 font-mono text-[11px]">
                          {new Date(lead.submittedAt).toLocaleString()}
                        </td>
                        <td className="p-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {cleanPhone && (
                              <a
                                href={`https://wa.me/${cleanPhone}?text=${waText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors flex items-center gap-1 text-[11px] font-semibold"
                                title="Open WhatsApp Chat with pre-filled message"
                              >
                                <MessageSquare className="w-3 h-3 text-emerald-400" />
                                WhatsApp
                              </a>
                            )}
                            <a
                              href={`mailto:${lead.email}?subject=AutoSipt%20AI%20Automation%20Demo%20for%20${encodeURIComponent(lead.company)}`}
                              className="px-2.5 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 transition-colors flex items-center gap-1 text-[11px] font-semibold"
                            >
                              <Mail className="w-3 h-3 text-indigo-400" />
                              Email
                            </a>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-4 text-center">
          <Link href="/" className="text-xs font-medium text-slate-400 hover:text-white transition-colors">
            ← Return to AutoSipt.com Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
