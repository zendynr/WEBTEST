import { ContactMessage } from '@shared/schema';

// Simple log function to record contact form submissions
export function initEmailConfig() {
  console.log('Contact form submissions will be stored in the database only.');
  return true;
}

// Instead of sending emails, we'll just log the information to the console
export async function sendContactEmail(message: ContactMessage): Promise<boolean> {
  try {
    console.log('Contact form submission recorded:');
    console.log(`Name: ${message.name}`);
    console.log(`Email: ${message.email}`);
    console.log(`Subject: ${message.subject}`);
    console.log(`Message: ${message.message.substring(0, 50)}...`);
    
    // Successfully recorded the submission
    return true;
  } catch (error) {
    console.error('Error logging contact form submission:', error);
    return false;
  }
}