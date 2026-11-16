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

// In-memory fallback cache for serverless environments
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
    submittedAt: new Date(Date.now() - 3600000).toISOString(),
  },
];

function getFilePath(): string {
  // Use /tmp in serverless production (AWS Lambda / Vercel), or local data folder
  const isVercel = process.env.VERCEL === '1';
  if (isVercel) {
    return path.join('/tmp', 'autosipt-leads.json');
  }
  return path.join(process.cwd(), 'data', 'leads.json');
}

export function getAllLeads(): StoredLead[] {
  try {
    const filePath = getFilePath();
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.error('Error reading leads file:', err);
  }
  return memoryLeads;
}

export function saveLead(lead: Omit<StoredLead, 'id'>): StoredLead {
  const newLead: StoredLead = {
    ...lead,
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
  };

  memoryLeads = [newLead, ...memoryLeads];

  try {
    const filePath = getFilePath();
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(memoryLeads, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing lead to disk:', err);
  }

  return newLead;
}
