import nodemailer from 'nodemailer';

interface SendLeadNotificationParams {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  createdAt: Date;
}

export async function sendLeadNotificationEmail(lead: SendLeadNotificationParams) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('[SMTP Disabled] Mock email notification logged:');
    console.log(JSON.stringify(lead, null, 2));
    return { mock: true };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const recipient = process.env.LEAD_RECEIVER_EMAIL || process.env.SMTP_USER;
  
  const mailOptions = {
    from: `"Delkash IPR Lead Desk" <${process.env.SMTP_USER}>`,
    to: recipient,
    subject: `⚡ New High-Intent Lead: ${lead.name} (${lead.service})`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 24px;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
          <div style="background-color: #0F172A; padding: 20px; text-align: center;">
            <h2 style="color: #D4AF37; margin: 0; font-size: 22px;">Delkash Associates</h2>
            <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 13px;">Intellectual Property Legal Consultation Desk</p>
          </div>
          <div style="padding: 24px;">
            <h3 style="color: #0F172A; margin-top: 0;">New Client Consultation Request</h3>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Client Name:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-weight: bold;">${lead.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Phone Number:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="tel:${lead.phone}" style="color: #1d4ed8;">${lead.phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;"><a href="mailto:${lead.email}" style="color: #1d4ed8;">${lead.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Service Required:</strong></td>
                <td style="padding: 8px 0; color: #0f172a;"><span style="background: #fef3c7; color: #92400e; padding: 3px 8px; border-radius: 4px; font-weight: 600;">${lead.service}</span></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; vertical-align: top;"><strong>Message / Notes:</strong></td>
                <td style="padding: 8px 0; color: #334155; line-height: 1.5;">${lead.message || 'No additional details provided.'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b;"><strong>Timestamp:</strong></td>
                <td style="padding: 8px 0; color: #64748b;">${new Date(lead.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</td>
              </tr>
            </table>
            <div style="margin-top: 24px; text-align: center;">
              <a href="https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}" style="display: inline-block; background: #25D366; color: #ffffff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px;">Open WhatsApp Chat with Client</a>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 12px; text-align: center; font-size: 12px; color: #64748b;">
            Confidential Attorney-Client Notification • Delkash Associates (Saket Court Chambers & Jamia Nagar Office, New Delhi)
          </div>
        </div>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

