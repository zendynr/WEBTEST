import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';

// These will be populated from environment variables
let EMAIL_USER: string | undefined;
let EMAIL_PASSWORD: string | undefined;
let EMAIL_RECIPIENT: string | undefined;

// Initialize email configuration from environment variables
export function initEmailConfig() {
  EMAIL_USER = process.env.EMAIL_USER;
  EMAIL_PASSWORD = process.env.EMAIL_APP_PASSWORD;
  EMAIL_RECIPIENT = process.env.EMAIL_RECIPIENT;
  
  // Validate email configuration
  if (!EMAIL_USER || !EMAIL_PASSWORD || !EMAIL_RECIPIENT) {
    console.warn('Email configuration is incomplete. Contact form emails will not be sent.');
    return false;
  }
  return true;
}

export async function sendContactEmail(message: ContactMessage): Promise<boolean> {
  // Check if email is properly configured
  if (!EMAIL_USER || !EMAIL_PASSWORD || !EMAIL_RECIPIENT) {
    console.error('Email configuration missing. Cannot send email.');
    return false;
  }
  
  try {
    // Create a transporter object using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
      }
    });
    
    // Format email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${message.name}</p>
      <p><strong>Email:</strong> ${message.email}</p>
      <p><strong>Subject:</strong> ${message.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.message.replace(/\n/g, '<br>')}</p>
      <p><strong>Submitted on:</strong> ${message.createdAt ? new Date(message.createdAt).toLocaleString() : new Date().toLocaleString()}</p>
    `;
    
    // Send email
    const info = await transporter.sendMail({
      from: `"ZoneBrozStudios Website" <${EMAIL_USER}>`,
      to: EMAIL_RECIPIENT,
      replyTo: message.email,
      subject: `[Website Contact] ${message.subject} - from ${message.name}`,
      html: emailContent
    });
    
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
}