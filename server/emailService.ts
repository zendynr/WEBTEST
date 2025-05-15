import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';

// Contact email address (where notifications will be sent)
const CONTACT_EMAIL = 'contact@zonebrozstudios.com';

// These will be populated from environment variables
let EMAIL_USER = '';
let EMAIL_APP_PASSWORD = '';

// Initialize email configuration
export function initEmailService(): boolean {
  EMAIL_USER = process.env.EMAIL_USER || '';
  EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD || '';
  
  // Validate email configuration
  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    console.warn('Email configuration is incomplete. Contact form emails will not be sent.');
    return false;
  }
  
  console.log('Email service configured with:');
  console.log(`- Username: ${EMAIL_USER}`);
  console.log(`- App Password length: ${EMAIL_APP_PASSWORD ? EMAIL_APP_PASSWORD.length : 0} characters`);
  return true;
}

// Send email using nodemailer and a Google Workspace account
export async function sendContactEmail(message: ContactMessage): Promise<boolean> {
  try {
    // Check if credentials are available
    if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
      console.error('Email credentials missing. Contact form email will not be sent.');
      return false;
    }
    
    // Create transporter with enhanced security settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Using service instead of host/port
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_APP_PASSWORD
      },
      logger: true, // Log SMTP traffic
      debug: true, // Log more detailed info
      tls: {
        rejectUnauthorized: false // Helps with SSL certificate issues
      }
    });
    
    // Create a nicely formatted HTML email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background-color: #f9f9f9;">
        <h2 style="color: #5f72be; border-bottom: 2px solid #5f72be; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0;">${message.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${message.email}" style="color: #5f72be;">${message.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0;">${message.subject}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Date:</td>
            <td style="padding: 8px 0;">${message.createdAt ? new Date(message.createdAt).toLocaleString() : new Date().toLocaleString()}</td>
          </tr>
        </table>
        
        <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #9b59b6;">
          <h3 style="margin-top: 0; color: #333;">Message:</h3>
          <p style="line-height: 1.6;">${message.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p style="font-size: 12px; color: #666; margin-top: 20px; text-align: center;">
          This email was sent from the ZoneBrozStudios website contact form.
        </p>
      </div>
    `;
    
    // Send email
    const info = await transporter.sendMail({
      from: `"ZoneBrozStudios Website" <${EMAIL_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: message.email,
      subject: `[Website Contact] ${message.subject} - from ${message.name}`,
      text: `Name: ${message.name}\nEmail: ${message.email}\nSubject: ${message.subject}\n\nMessage:\n${message.message}`,
      html: emailHtml
    });
    
    console.log('Contact form email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    return false;
  }
}