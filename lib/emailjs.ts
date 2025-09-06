// FIXED EmailJS implementation with correct variable names
import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string);
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }
};

export interface EmailParams {
  from_name: string;
  from_email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message: string;
  to_email?: string;
}

// Send booking email function
export const sendBookingEmail = async (params: EmailParams): Promise<{ success: boolean; error?: string }> => {
  try {
    const emailParams = {
      ...params,
      to_email: params.to_email || 'chukingroup@gmail.com',
    };

    console.log('Sending booking email with params:', emailParams);

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      emailParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return { 
        success: false, 
        error: `Failed to send email: Status ${response.status} - ${response.text}` 
      };
    }
  } catch (error: unknown) {
    console.error('EmailJS error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
};

// FIXED Send confirmation email to customer
export const sendConfirmationEmail = async (customerEmail: string, customerName: string, bookingDetails?: {
  service: string;
  date: string;
  time: string;
  phone?: string;
  message?: string;
}): Promise<{ success: boolean; error?: string }> => {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!customerEmail || !emailRegex.test(customerEmail)) {
      return { 
        success: false, 
        error: 'Invalid customer email address provided' 
      };
    }

    // CRITICAL FIX: Match these variable names exactly with your EmailJS template
    const templateParams = {
      // Customer details
      from_name: customerName,           // {{from_name}} in template
      customer_name: customerName,       // {{customer_name}} in template  
      from_email: customerEmail,         // {{from_email}} in template
      
      // Booking details - EXACT MATCH with your HTML template variables
      service: bookingDetails?.service || 'Plumbing Service',     // {{service}}
      date: bookingDetails?.date || 'Not specified',             // {{date}} - matches your template
      time: bookingDetails?.time || 'Not specified',             // {{time}} - matches your template
      phone: bookingDetails?.phone || 'Not provided',            // {{phone}} if you add it later
      message: bookingDetails?.message || 'None',                // {{message}} if you add it later
      
      // Business details
      company_name: 'Birmingham Plumbing Pro',    // {{company_name}}
      business_phone: '0121 234 5678',           // {{business_phone}}
      
      // Current date/time
      confirmation_date: new Date().toLocaleDateString('en-GB'), // {{confirmation_date}}
      confirmation_time: new Date().toLocaleTimeString('en-GB'), // {{confirmation_time}}
    };

    console.log('Sending confirmation email with params:', templateParams);

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return { 
        success: false, 
        error: `Failed to send confirmation email: Status ${response.status} - ${response.text}` 
      };
    }
  } catch (error: unknown) {
    console.error('EmailJS confirmation error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
};