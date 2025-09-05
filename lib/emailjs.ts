import emailjs from '@emailjs/browser';


// Initialize EmailJS with your public key
export const initEmailJS = () => {
  if (typeof window !== 'undefined') {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string);
  }
};

// EmailJS service interface
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
    // Set default recipient if not provided
    const emailParams = {
      ...params,
      to_email: params.to_email || 'your-email@example.com', // Replace with your email
    };

    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      emailParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: 'Failed to send email' };
    }
  } catch (error) {
    console.error('EmailJS error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
};

// Send confirmation email to customer
export const sendConfirmationEmail = async (customerEmail: string, customerName: string): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID as string, // You'll need to create a confirmation template
      {
        to_email: customerEmail,
        to_name: customerName,
        company_name: 'Birmingham Plumbing Pro',
      }
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      return { success: false, error: 'Failed to send confirmation email' };
    }
  } catch (error) {
    console.error('EmailJS confirmation error:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error occurred' };
  }
};