import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
}

// Initialize EmailJS
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey)
  }
}

// Send email using EmailJS
export const sendEmail = async (formData: {
  name: string
  email: string
  company: string
  phone?: string
  projectType: string
  budget: string
  message: string
}) => {
  try {
    // Initialize EmailJS if not already done
    initEmailJS()

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      company: formData.company,
      phone: formData.phone || 'Not provided',
      project_type: formData.projectType,
      budget: formData.budget,
      message: formData.message,
      to_name: 'Amir Valizadeh', // Your name
      reply_to: formData.email
    }

    // Send email
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    )

    return response
  } catch (error) {
    console.error('EmailJS Error:', error)
    throw error
  }
}

// Validation function for EmailJS configuration
export const validateEmailJSConfig = () => {
  const missing = []
  
  if (!EMAILJS_CONFIG.serviceId) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
  if (!EMAILJS_CONFIG.templateId) missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
  if (!EMAILJS_CONFIG.publicKey) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
  
  if (missing.length > 0) {
    console.error('Missing EmailJS environment variables:', missing)
    return false
  }
  
  return true
}