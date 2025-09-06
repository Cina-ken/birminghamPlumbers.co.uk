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

// FIXED: Send confirmation email to customer with correct template variables
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

    // CRITICAL FIX: Match EXACTLY with your EmailJS template variables
    // Your template uses {{email}} for recipient, not {{from_email}}
    const templateParams = {
      // Recipient address - MUST be 'email' to match your template {{email}}
      email: customerEmail,                // {{email}} in template - FIXED
      
      // Customer details
      from_name: customerName,             // {{from_name}} in template
      customer_name: customerName,         // {{customer_name}} in template  
      
      // Booking details
      service: bookingDetails?.service || 'Plumbing Service',     // {{service}}
      date: bookingDetails?.date || 'Not specified',             // {{date}}
      time: bookingDetails?.time || 'Not specified',             // {{time}}
      phone: bookingDetails?.phone || 'Not provided',            // {{phone}}
      message: bookingDetails?.message || 'None',                // {{message}}
      
      // Business details
      company_name: 'Birmingham Plumbing Pro',    // {{company_name}}
      business_phone: '0121 234 5678',           // {{business_phone}}
      
      // Current date/time
      confirmation_date: new Date().toLocaleDateString('en-GB'), // {{confirmation_date}}
      confirmation_time: new Date().toLocaleTimeString('en-GB'), // {{confirmation_time}}
      
      // Additional parameters that might be needed for reply-to
      reply_to: customerEmail,                 // For reply-to functionality
      customer_email: customerEmail            // Alternative parameter name
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
    let errorMsg = 'Unknown error occurred';
    if (error instanceof Error) {
      errorMsg = error.message;
    } else if (typeof error === 'object' && error !== null) {
      // Handle EmailJS specific error format with status and text
      if ('status' in error && 'text' in error) {
        errorMsg = `EmailJS Error ${error.status}: ${error.text}`;
      } else {
        try {
          errorMsg = JSON.stringify(error);
        } catch {
          errorMsg = String(error);
        }
      }
    } else if (typeof error === 'string') {
      errorMsg = error;
    }
    console.error('EmailJS confirmation error:', error);
    return { success: false, error: errorMsg };
  }
};