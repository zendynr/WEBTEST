import nodemailer from 'nodemailer';
import { ContactMessage } from '@shared/schema';

// These will be populated from environment variables
const CONTACT_EMAIL = 'contact@zonebrozstudios.com';
let EMAIL_USER: string | undefined;
let EMAIL_PASSWORD: string | undefined;

// Initialize email configuration from environment variables
export function initEmailConfig() {
  EMAIL_USER = process.env.EMAIL_USER;
  EMAIL_PASSWORD = process.env.EMAIL_APP_PASSWORD;
  
  // Validate email configuration
  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    console.warn('Email configuration is incomplete. Contact form emails will not be sent.');
    return false;
  }
  console.log(`Email service configured for Google Group: ${CONTACT_EMAIL}`);
  return true;
}

export async function sendContactEmail(message: ContactMessage): Promise<boolean> {
  // Check if email is properly configured
  if (!EMAIL_USER || !EMAIL_PASSWORD) {
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
    
    // Format email content with improved styling
    const emailContent = `
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
    
    // Send email to the Google Group
    const info = await transporter.sendMail({
      from: `"ZoneBrozStudios Website" <${EMAIL_USER}>`,
      to: CONTACT_EMAIL,
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