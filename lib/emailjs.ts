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
  } catch (error: any) {
    console.error('EmailJS error details:', error);
    
    if (error && typeof error === 'object') {
      if ('status' in error && 'text' in error) {
        return { 
          success: false, 
          error: `EmailJS Error ${error.status}: ${error.text}` 
        };
      }
      if ('message' in error) {
        return { 
          success: false, 
          error: `EmailJS Error: ${error.message}` 
        };
      }
    }
    
    return { 
      success: false, 
      error: 'Unknown error occurred while sending email' 
    };
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
  } catch (error: any) {
    console.error('EmailJS confirmation error details:', error);
    
    if (error && typeof error === 'object') {
      if ('status' in error && 'text' in error) {
        const status = error.status;
        const text = error.text;
        
        let userFriendlyMessage = text;
        switch (status) {
          case 422:
            if (text.includes('recipients address is empty')) {
              userFriendlyMessage = 'Email template configuration error - recipient field is empty.';
            }
            break;
          case 400:
            userFriendlyMessage = 'Invalid email parameters. Please check your EmailJS configuration.';
            break;
        }
        
        return { 
          success: false, 
          error: userFriendlyMessage
        };
      }
      
      if ('message' in error) {
        return { 
          success: false, 
          error: `Confirmation failed: ${error.message}` 
        };
      }
    }
    
    return { 
      success: false, 
      error: 'Unknown error occurred while sending confirmation email' 
    };
  }
};