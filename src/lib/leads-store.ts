import fs from 'fs';
import path from 'path';

export interface StoredLead {
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

// In-memory fallback cache
let memoryLeads: StoredLead[] = [
  {
    id: 'demo-sample-1',
    name: 'Dr. Michael Vance',
    company: 'Harley Dental Clinic',
    email: 'm.vance@harleydental.co.uk',
    phone: '+44 7700 900123',
    country: 'UK',
    serviceInterest: 'Appointment Booking',
    message: 'Need 24/7 AI voice receptionist to handle patient bookings.',
    submittedAt: '2026-11-16T16:03:16.003Z',
  },
  {
    id: 'demo-sample-2',
    name: 'Sarah Al-Mansoor',
    company: 'Dubai Luxury Real Estate',
    email: 'sarah@dubailuxury.ae',
    phone: '+971 50 123 4567',
    country: 'UAE',
    serviceInterest: 'WhatsApp AI Agent',
    message: 'Qualify high-ticket villa buyers and schedule viewings.',
    submittedAt: '2026-11-18T10:15:00.000Z',
  },
];

function getFilePath(): string {
  const isVercel = process.env.VERCEL === '1';
  if (isVercel) {
    return path.join('/tmp', 'autosipt-leads.json');
  }
  return path.join(process.cwd(), 'data', 'leads.json');
}

// Helper to check for Upstash / Vercel KV credentials
function getKvConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    return { url: url.replace(/\/$/, ''), token };
  }
  return null;
}

export async function getAllLeads(): Promise<StoredLead[]> {
  const kv = getKvConfig();

  // 1. If Vercel KV / Upstash Redis is connected, fetch from cloud KV
  if (kv) {
    try {
      const res = await fetch(`${kv.url}/get/autosipt_leads`, {
        headers: { Authorization: `Bearer ${kv.token}` },
        cache: 'no-store',
      });
      if (res.ok) {
        const data = await res.json();
        if (data.result) {
          const parsed = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
          if (Array.isArray(parsed) && parsed.length > 0) {
            memoryLeads = parsed;
            return parsed;
          }
        }
      }
    } catch (err) {
      console.error('Failed to fetch leads from Vercel KV:', err);
    }
  }

  // 2. Read from disk if available
  try {
    const filePath = getFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        memoryLeads = parsed;
        return parsed;
      }
    }
  } catch (err) {
    // Disk read fallback
  }

  return memoryLeads;
}

export async function saveLead(lead: Omit<StoredLead, 'id'>): Promise<StoredLead> {
  const newLead: StoredLead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
  };

  const current = await getAllLeads();
  const updated = [newLead, ...current.filter((l) => l.id !== newLead.id)];
  memoryLeads = updated;

  // 1. Save to Vercel KV / Upstash Redis if available
  const kv = getKvConfig();
  if (kv) {
    try {
      await fetch(`${kv.url}/set/autosipt_leads`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kv.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updated),
      });
      console.log('✅ Lead saved to Vercel Cloud KV successfully!');
    } catch (err) {
      console.error('Failed to save lead to Vercel KV:', err);
    }
  }

  // 2. Save to Google Sheets Webhook if configured
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (sheetsUrl) {
    try {
      await fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newLead),
      });
      console.log('✅ Lead forwarded to Google Sheets webhook!');
    } catch (err) {
      console.error('Failed to forward to Google Sheets:', err);
    }
  }

  // 3. Save to disk
  try {
    const filePath = getFilePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), 'utf-8');
  } catch (err) {
    // Disk write fallback
  }

  return newLead;
}

export async function deleteLead(id: string): Promise<boolean> {
  const current = await getAllLeads();
  const filtered = current.filter((l) => l.id !== id);
  memoryLeads = filtered;

  const kv = getKvConfig();
  if (kv) {
    try {
      await fetch(`${kv.url}/set/autosipt_leads`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${kv.token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filtered),
      });
    } catch (err) {
      console.error('Failed to update KV after delete:', err);
    }
  }

  try {
    const filePath = getFilePath();
    fs.writeFileSync(filePath, JSON.stringify(filtered, null, 2), 'utf-8');
  } catch (err) {}

  return true;
}
