import nodemailer from 'nodemailer';

const escape = (s = '') =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isEmail = (s = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const {
      name = '',
      email = '',
      institution = '',
      phone = '',
      subject = '',
      message = '',
      website = '',
    } = req.body || {};

    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      return res
        .status(400)
        .json({ ok: false, error: 'Please fill in all required fields.' });
    }
    if (!isEmail(email)) {
      return res
        .status(400)
        .json({ ok: false, error: 'Please enter a valid email address.' });
    }
    if (message.length > 5000) {
      return res
        .status(400)
        .json({ ok: false, error: 'Message is too long (max 5000 chars).' });
    }

    const {
      EMAIL_HOST,
      EMAIL_PORT,
      EMAIL_USER,
      EMAIL_PASS,
      EMAIL_TO,
      EMAIL_FROM_NAME = 'InnoTech Website',
    } = process.env;

    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
      return res
        .status(500)
        .json({ ok: false, error: 'Email service is not configured.' });
    }

    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: Number(EMAIL_PORT) || 587,
      secure: Number(EMAIL_PORT) === 465,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    const to = EMAIL_TO || EMAIL_USER;

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0b1320;max-width:600px;margin:0 auto;">
        <div style="background:linear-gradient(135deg,#0a1f44 0%,#0066cc 100%);color:#fff;padding:24px 28px;border-radius:12px 12px 0 0;">
          <div style="font-size:12px;letter-spacing:.1em;text-transform:uppercase;opacity:.85;">New Inquiry</div>
          <div style="font-size:20px;font-weight:700;margin-top:6px;">${escape(subject)}</div>
        </div>
        <div style="background:#fff;border:1px solid #e6eaf2;border-top:0;padding:24px 28px;border-radius:0 0 12px 12px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#5b6b85;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${escape(name)}</td></tr>
            <tr><td style="padding:8px 0;color:#5b6b85;">Email</td><td style="padding:8px 0;font-weight:600;"><a href="mailto:${escape(email)}" style="color:#0066cc;text-decoration:none;">${escape(email)}</a></td></tr>
            ${institution ? `<tr><td style="padding:8px 0;color:#5b6b85;">Institution</td><td style="padding:8px 0;font-weight:600;">${escape(institution)}</td></tr>` : ''}
            ${phone ? `<tr><td style="padding:8px 0;color:#5b6b85;">Phone</td><td style="padding:8px 0;font-weight:600;">${escape(phone)}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#5b6b85;">Inquiry Type</td><td style="padding:8px 0;font-weight:600;">${escape(subject)}</td></tr>
          </table>
          <div style="margin-top:18px;padding-top:18px;border-top:1px solid #e6eaf2;">
            <div style="color:#5b6b85;font-size:13px;text-transform:uppercase;letter-spacing:.08em;font-weight:600;margin-bottom:10px;">Message</div>
            <div style="white-space:pre-wrap;line-height:1.6;color:#1f2a44;">${escape(message)}</div>
          </div>
        </div>
        <div style="text-align:center;color:#5b6b85;font-size:12px;margin-top:14px;">
          Sent via the InnoTech Technologies contact form.
        </div>
      </div>
    `;

    const text = [
      `New inquiry from the InnoTech contact form`,
      `--`,
      `Name: ${name}`,
      `Email: ${email}`,
      institution ? `Institution: ${institution}` : null,
      phone ? `Phone: ${phone}` : null,
      `Inquiry Type: ${subject}`,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join('\n');

    await transporter.sendMail({
      from: `"${EMAIL_FROM_NAME}" <${EMAIL_USER}>`,
      to,
      replyTo: email,
      subject: `[InnoTech] ${subject} — ${name}`,
      text,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return res
      .status(500)
      .json({ ok: false, error: 'Failed to send message. Please try again.' });
  }
}
