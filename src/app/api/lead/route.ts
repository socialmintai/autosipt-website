import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/lib/config';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, country, website, serviceInterest, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    const leadInfo = {
      name,
      company: company || 'Not specified',
      email,
      phone: phone || 'Not provided',
      country: country || 'Not specified',
      website: website || 'None',
      serviceInterest: Array.isArray(serviceInterest) ? serviceInterest.join(', ') : serviceInterest || 'General',
      message: message || 'None',
      submittedAt: new Date().toISOString(),
    };

    console.log('📥 [NEW AUTOSIPT LEAD RECEIVED]:', leadInfo);

    // Target recipient email (Configurable in .env or defaults to admin)
    const recipientEmail = process.env.NOTIFICATION_EMAIL || process.env.ADMIN_EMAIL || 'riteshyadav7342@gmail.com';
    const resendApiKey = process.env.RESEND_API_KEY;

    // 1. Send via Resend if API key is present
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'AutoSipt Leads <onboarding@resend.dev>', // or custom verified domain
            to: [recipientEmail],
            subject: `🚀 New Lead: ${leadInfo.name} (${leadInfo.company})`,
            html: `
              <h2>New Lead Submission from AutoSipt Website</h2>
              <table style="width: 100%; border-collapse: collapse; font-family: sans-serif;">
                <tr><td style="padding: 8px; font-weight: bold;">Full Name:</td><td>${leadInfo.name}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Business:</td><td>${leadInfo.company}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td><a href="mailto:${leadInfo.email}">${leadInfo.email}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Phone / WhatsApp:</td><td><a href="tel:${leadInfo.phone}">${leadInfo.phone}</a></td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Country:</td><td>${leadInfo.country}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Website:</td><td>${leadInfo.website}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Automation Goal:</td><td>${leadInfo.serviceInterest}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Context / Message:</td><td>${leadInfo.message}</td></tr>
                <tr><td style="padding: 8px; font-weight: bold;">Received At:</td><td>${leadInfo.submittedAt}</td></tr>
              </table>
            `,
          }),
        });
      } catch (emailErr) {
        console.error('Failed to send email via Resend:', emailErr);
      }
    }

    // 2. Optional: Webhook notification (Discord / Telegram / Zapier / Make / Slack)
    const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🎯 **New AutoSipt Demo Request!**\n**Name:** ${leadInfo.name}\n**Company:** ${leadInfo.company}\n**Email:** ${leadInfo.email}\n**Phone:** ${leadInfo.phone}\n**Goal:** ${leadInfo.serviceInterest}\n**Country:** ${leadInfo.country}`,
          }),
        });
      } catch (webhookErr) {
        console.error('Failed to forward lead to webhook:', webhookErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully.',
      data: leadInfo,
    });
  } catch (error) {
    console.error('Error handling lead submission:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
