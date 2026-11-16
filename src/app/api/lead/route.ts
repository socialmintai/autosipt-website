import { NextRequest, NextResponse } from 'next/server';
import { saveLead, getAllLeads } from '@/lib/leads-store';

export async function GET() {
  try {
    const leads = getAllLeads();
    return NextResponse.json({ success: true, count: leads.length, leads });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to retrieve leads' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    let body;
    try {
      body = await req.json();
    } catch (e) {
      return NextResponse.json({ success: false, error: 'Invalid JSON payload' }, { status: 400 });
    }

    const { name, company, email, phone, country, website, serviceInterest, message } = body || {};

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // 1. Save lead to internal lead store so it's visible in /admin
    const saved = saveLead({
      name,
      company: company || 'Not specified',
      email,
      phone: phone || 'Not provided',
      country: country || 'Not specified',
      website: website || 'None',
      serviceInterest: Array.isArray(serviceInterest) ? serviceInterest.join(', ') : serviceInterest || 'General',
      message: message || 'None',
      submittedAt: new Date().toISOString(),
    });

    console.log('📥 [NEW AUTOSIPT LEAD STORED]:', saved);

    // 2. Target email recipient
    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'riteshyadav7342@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    // 3. Send email via Resend if API key is present
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'AutoSipt Leads <onboarding@resend.dev>',
            to: [recipientEmail],
            subject: `🚀 New Lead: ${saved.name} (${saved.company})`,
            html: `
              <h2>New Lead Submission from AutoSipt Website</h2>
              <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
                <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td>${saved.name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Business:</td><td>${saved.company}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td><a href="mailto:${saved.email}">${saved.email}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Phone / WhatsApp:</td><td><a href="tel:${saved.phone}">${saved.phone}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Country:</td><td>${saved.country}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Website:</td><td>${saved.website}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Automation Goal:</td><td>${saved.serviceInterest}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Context / Message:</td><td>${saved.message}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Received At:</td><td>${saved.submittedAt}</td></tr>
              </table>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Failed to send email via Resend:', emailErr);
      }
    }

    // 4. Webhook notification (Discord / Telegram / Slack / Zapier / Make)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🎯 **New AutoSipt Demo Request!**\n**Name:** ${saved.name}\n**Company:** ${saved.company}\n**Email:** ${saved.email}\n**Phone:** ${saved.phone}\n**Goal:** ${saved.serviceInterest}\n**Country:** ${saved.country}`,
          }),
        });
      } catch (webhookErr) {
        console.error('Failed to forward lead to webhook:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully.',
      lead: saved,
    });
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
