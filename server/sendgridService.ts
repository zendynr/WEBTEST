import sgMail from '@sendgrid/mail';
import { ContactMessage } from '@shared/schema';

// Constant for the recipient email address
const CONTACT_EMAIL = 'contact@zonebrozstudios.com';

// Check if SendGrid API key exists and initialize the service
export function initSendGrid(): boolean {
  const apiKey = process.env.SENDGRID_API_KEY;
  
  if (!apiKey) {
    console.warn('SendGrid API key is missing. Contact form emails will not be sent.');
    return false;
  }
  
  sgMail.setApiKey(apiKey);
  console.log('SendGrid service initialized successfully');
  return true;
}

// Send contact form submission via SendGrid
export async function sendContactEmail(message: ContactMessage): Promise<boolean> {
  try {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('SendGrid API key is missing. Cannot send email.');
      return false;
    }
    
    // Create a formatted HTML email body
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
    
    // Configure email message
    const msg = {
      to: CONTACT_EMAIL,
      from: {
        email: 'noreply@zonebrozstudios.com',
        name: 'ZoneBrozStudios Website'
      },
      replyTo: message.email,
      subject: `[Website Contact] ${message.subject} - from ${message.name}`,
      text: `Name: ${message.name}\nEmail: ${message.email}\nSubject: ${message.subject}\n\nMessage:\n${message.message}`,
      html: emailHtml,
    };
    
    // Send email via SendGrid
    await sgMail.send(msg);
    console.log('Contact form email sent successfully via SendGrid');
    return true;
  } catch (error) {
    console.error('Failed to send email via SendGrid:', error);
    return false;
  }
}