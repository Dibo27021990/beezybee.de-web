// file: app/api/sendTicketEmail/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { category, email, message } = await request.json();
    // Nodemailer Transporter konfigurieren (SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: process.env.SMTP_PORT || 587,
      secure: false,  // bei Port 465 auf true setzen
      auth: {
        user: process.env.SMTP_USER || "your_smtp_user",
        pass: process.env.SMTP_PASS || "your_smtp_pass"
      }
    });
    // E-Mail-Inhalt vorbereiten
    const mailOptions = {
      from: `"Helperbee Support" <no-reply@gethelperbee.com>`,
      to: "info@gethelperbee.com",
      subject: `${category === 'appIssue' ? '[DRINGEND] ' : ''}Support Ticket: ${category}`,
      text: `Neue Support-Anfrage:\nKategorie: ${category}\nVon: ${email}\nNachricht:\n${message}`
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: 'ok' });
  } catch (error) {
    console.error("Error sending support email:", error);
    return NextResponse.json({ status: 'error' }, { status: 500 });
  }
}
