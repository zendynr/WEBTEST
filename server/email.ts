import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GOOGLE_EMAIL,
    pass: process.env.GOOGLE_APP_PASSWORD,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  text: string;
  html: string;
}

/**
 * Send email using nodemailer
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  try {
    const { to, subject, text, html } = options;
    
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to,
      subject,
      text,
      html,
    };
    
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}

/**
 * Send notification email for new contact form submission
 */
export async function sendContactNotification(contactMessage: ContactMessage): Promise<boolean> {
  const { name, email, subject, message } = contactMessage;
  
  const emailSubject = `New Contact Form Submission: ${subject}`;
  
  const timestamp = new Date().toLocaleString();
  
  const textContent = `
    New contact form submission from ${name} (${email}):
    
    Subject: ${subject}
    
    Message:
    ${message}
    
    Date: ${timestamp}
  `;
  
  const htmlContent = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${name} (${email})</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <h3>Message:</h3>
    <p>${message.replace(/\n/g, '<br>')}</p>
    <p><small>Submitted on ${timestamp}</small></p>
  `;
  
  return sendEmail({
    to: process.env.GOOGLE_EMAIL || '',
    subject: emailSubject,
    text: textContent,
    html: htmlContent,
  });
}

/**
 * Send confirmation email to the user who submitted the contact form
 */
export async function sendContactConfirmation(contactMessage: ContactMessage): Promise<boolean> {
  const { name, email, subject } = contactMessage;
  
  const emailSubject = `Thank you for contacting ZoneBrozStudios`;
  
  const textContent = `
    Dear ${name},
    
    Thank you for contacting ZoneBrozStudios. We have received your message regarding "${subject}".
    
    Our team will review your inquiry and get back to you as soon as possible.
    
    Best regards,
    The ZoneBrozStudios Team
  `;
  
  const htmlContent = `
    <h2>Thank You for Contacting ZoneBrozStudios</h2>
    <p>Dear ${name},</p>
    <p>Thank you for reaching out to us. We have received your message regarding <strong>"${subject}"</strong>.</p>
    <p>Our team will review your inquiry and get back to you as soon as possible.</p>
    <p>Best regards,<br>The ZoneBrozStudios Team</p>
  `;
  
  return sendEmail({
    to: email,
    subject: emailSubject,
    text: textContent,
    html: htmlContent,
  });
}