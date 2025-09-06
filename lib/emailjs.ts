import emailjs from '@emailjs/browser';

export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string);
      console.log('EmailJS initialized successfully with key:', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'Present' : 'Missing');
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

export const sendBookingEmail = async (params: EmailParams): Promise<{ success: boolean; error?: string }> => {
  try {
    const emailParams = {
      ...params,
      to_email: params.to_email || 'chukingroup@gmail.com',
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      emailParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
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

    const templateParams = {
      email: customerEmail,
      from_name: customerName,
      customer_name: customerName,
      service: bookingDetails?.service || 'Plumbing Service',
      date: bookingDetails?.date || 'Not specified',
      time: bookingDetails?.time || 'Not specified',
      phone: bookingDetails?.phone || 'Not provided',
      message: bookingDetails?.message || 'None',
      company_name: 'Birmingham Plumbing Pro',
      business_phone: '0121 234 5678',
      confirmation_date: new Date().toLocaleDateString('en-GB'),
      confirmation_time: new Date().toLocaleTimeString('en-GB'),
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID as string,
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
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
      if ('status' in error && 'text' in error) {
        errorMsg = `EmailJS Error ${error.status}: ${error.text}`;
      } else {
        errorMsg = JSON.stringify(error);
      }
    }
    console.error('EmailJS confirmation error:', errorMsg);
    return { success: false, error: errorMsg };
  }
};