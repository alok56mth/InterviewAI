import emailjs from '@emailjs/browser';

// EmailJS configuration
export const emailConfig = {
  serviceId: 'service_your_id', // Replace with your EmailJS service ID
  templateId: 'template_your_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
};

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    from_name: formData.fullName,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'hello@company.com', // Replace with your email
  };

  try {
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );
  } catch (error) {
    console.error('Email send error:', error);
    throw new Error('Failed to send email');
  }
};

// Initialize EmailJS (call this once in your app)
export const initEmailJS = () => {
  emailjs.init(emailConfig.publicKey);
};