'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
  Zap,
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
  const [isSendingTest, setIsSendingTest] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/lead', { cache: 'no-store' });
      const data = await res.json();
      const serverLeads: Lead[] = data.success && Array.isArray(data.leads) ? data.leads : [];
      
      // Also pull local storage leads submitted from this device
      let localLeads: Lead[] = [];
      try {
        localLeads = JSON.parse(localStorage.getItem('autosipt_leads_local') || '[]');
      } catch (e) {}

      // Combine server leads + local leads without duplication
      const combined = [...serverLeads];
      for (const loc of localLeads) {
        if (!combined.some((c) => c.id === loc.id || (c.email === loc.email && c.name === loc.name))) {
          combined.unshift(loc);
        }
      }

      setLeads(combined);
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
    // Auto refresh every 10 seconds for real-time live monitoring
    const interval = setInterval(fetchLeads, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    setDeletingId(id);
    try {
      await fetch(`/api/lead?id=${id}`, { method: 'DELETE' });
      setLeads((prev) => prev.filter((l) => l.id !== id));
    } catch (err) {
      console.error('Failed to delete lead:', err);
    } finally {
      setDeletingId(null);
    }
  };

  const handleSendTestLead = async () => {
    setIsSendingTest(true);
    try {
      const testLead = {
        name: `Test Client ${Math.floor(Math.random() * 900 + 100)}`,
        company: 'Apex Health Partners',
        email: 'ritesh.test@autosipt.com',
        phone: '+1 800 555 9876',
        country: 'USA',
        website: 'https://example.com',
        serviceInterest: ['AI Voice Agent'],
        message: 'Live test inquiry triggered directly from the AutoSipt dashboard.',
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(testLead),
      });
      const data = await res.json();
      if (data.success && data.lead) {
        setLeads((prev) => [data.lead, ...prev]);
      }
    } catch (err) {
      console.error('Error generating test lead:', err);
    } finally {
      setIsSendingTest(false);
    }
  };

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
                Live Cloud Sync (10s)
              </span>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Every customer inquiry submitted on <strong className="text-white">AutoSipt</strong> is tracked here in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleSendTestLead}
              disabled={isSendingTest}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-indigo-300 transition-colors"
              title="Submit a real test lead to verify live pipeline"
            >
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              {isSendingTest ? 'Adding...' : '+ Send Test Lead'}
            </button>

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
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Target Markets</p>
            <p className="text-sm font-semibold text-slate-300 mt-1">
              UK • UAE • USA • Canada • Australia
            </p>
          </div>
        </div>

        {/* Quick Instructions Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/20 to-slate-900 border border-indigo-500/30 text-xs sm:text-sm text-slate-300 space-y-2">
          <div className="flex items-center gap-2 text-indigo-300 font-bold">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Permanent Cloud Storage on Vercel:</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            To store unlimited leads permanently on Vercel with zero expiration, connect <strong>Vercel KV (Redis)</strong> in 1 click from your Vercel Dashboard (<strong>Storage Tab ➔ Create KV ➔ Connect to Project</strong>). AutoSipt automatically recognizes Vercel KV with zero code changes!
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
                  <th className="p-4 text-right">Actions</th>
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
                    const cleanPhone = lead.phone ? lead.phone.replace(/[^0-9+]/g, '') : '';
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
                          {cleanPhone && (
                            <a
                              href={`tel:${cleanPhone}`}
                              className="text-slate-400 hover:text-white flex items-center gap-1.5"
                            >
                              <PhoneCall className="w-3.5 h-3.5 text-slate-500" />
                              <span>{lead.phone}</span>
                            </a>
                          )}
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
                            <button
                              type="button"
                              onClick={() => handleDelete(lead.id)}
                              disabled={deletingId === lead.id}
                              className="px-2 py-1.5 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 transition-colors text-[11px] font-medium"
                              title="Delete Lead"
                            >
                              ✕
                            </button>
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
