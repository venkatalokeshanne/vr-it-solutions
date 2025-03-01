import emailjs from '@emailjs/browser';

export const protectEmail = (email) => {
    const [username, domain] = email.split('@');
    return `${username} [at] ${domain.replace('.', ' [dot] ')}`;
  };
  
  export const deobfuscateEmail = (element) => {
    const text = element.textContent;
    const email = text
      .replace(' [at] ', '@')
      .replace(' [dot] ', '.');
    return email;
  };



// EmailJS configuration constants
const SERVICE_ID = "service_vk9hhko";
const TEMPLATE_ID = "template_62znhua";
const PUBLIC_KEY = "rRzS4bf_NvOFsogXv";

// Initialize EmailJS
export const initEmailService = () => {
  emailjs.init(PUBLIC_KEY);
};

/**
 * Send an email using EmailJS form submission
 * @param {HTMLFormElement} formElement - The form element reference
 * @returns {Promise} - Promise resolving to EmailJS response
 */
export const sendFormEmail = async (formElement) => {
  if (!formElement) {
    throw new Error("Form element is required");
  }

  try {
    const result = await emailjs.sendForm(
      SERVICE_ID,
      TEMPLATE_ID,
      formElement
    );
    
    console.log("Email sent successfully:", result.text);
    return result;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};

/**
 * Send an email using direct parameters
 * @param {Object} templateParams - The parameters to send to the email template
 * @returns {Promise} - Promise resolving to EmailJS response
 */
export const sendParameterEmail = async (templateParams) => {
  if (!templateParams) {
    throw new Error("Template parameters are required");
  }

  try {
    const result = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    console.log("Email sent successfully:", result.text);
    return result;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
};

/**
 * Utility function to create course download request email parameters
 * @param {Object} formData - Form data with user contact info
 * @param {Object} courseData - Course information
 * @returns {Object} - Template parameters for EmailJS
 */
export const createCourseRequestParams = (formData, courseData) => {
  return {
    ...formData,
    course_name: courseData.title,
    message: `Requesting course content for: ${courseData.title}`,
    subject: `Course Content Request: ${courseData.title}`
  };
};