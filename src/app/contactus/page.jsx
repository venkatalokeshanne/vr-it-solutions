"use client";
import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import { initEmailService, sendFormEmail } from '../util';
import Script from 'next/script';
// Remove Head import - it's not compatible with App Router in client components
// import Head from 'next/head';

// Remove the ContactMeta component since we can't use Head in client components
// with the App Router. We'll move metadata to a separate metadata.js file

// JSON-LD structured data for local business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "VR IT Solutions",
  "alternateName": "VRIT Solutions",
  "url": "https://vr-it-solutions.vercel.app/",
  "logo": "https://vr-it-solutions.vercel.app/logo.png",
  "sameAs": [
    "https://www.facebook.com/vritsolutions",
    "https://twitter.com/vritsolutions",
    "https://www.linkedin.com/company/vr-it-solutions",
    "https://www.instagram.com/vritsolutions"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9032734343",
    "contactType": "customer service",
    "email": "info@vritsol.com",
    "availableLanguage": ["English", "Hindi", "Telugu"]
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet",
    "addressLocality": "Hyderabad",
    "addressRegion": "Telangana",
    "postalCode": "500016",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "17.437443",
    "longitude": "78.445591"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ]
};

// FAQ Schema for contact page
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can I contact VR IT Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact VR IT Solutions by phone at +91-9032734343, by email at info@vritsol.com, or by visiting our office at 506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad."
      }
    },
    {
      "@type": "Question",
      "name": "What are the working hours of VR IT Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VR IT Solutions is open Monday through Saturday from 9 AM to 6 PM."
      }
    },
    {
      "@type": "Question",
      "name": "How do I inquire about a specific course at VR IT Solutions?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can inquire about specific courses by filling out the contact form on our website, calling us at +91-9032734343, or sending an email to info@vritsol.com with details of the course you're interested in."
      }
    }
  ]
};

const ContactPage = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();
  
  // Initialize EmailJS once the component mounts
  useEffect(() => {
    initEmailService();
    
    // Track page view when component mounts
    if (typeof window !== 'undefined' && window.VRIT) {
      window.VRIT.trackPageView?.();
    }
  }, []);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if tracking function is available
    if (typeof window !== 'undefined' && window.VRIT) {
      window.VRIT.trackFormSubmission?.({
        formId: 'contact_form',
        formName: 'Contact Page Form',
      });
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Use the utility function to send the email
      const result = await sendFormEmail(formRef.current);
      
      // Show success message
      setIsSubmitted(true);
      
      // Reset form
      setFormState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (err) {
      console.error('Failed to send email:', err);
      setError(`Failed to send your message. Please try again later. (Error: ${err.text || "Unknown error"})`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: "+91-9032734343",
      link: "tel:+91-9032734343",
      ariaLabel: "Call our phone number"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@vritsol.com",
      link: "mailto:info@vritsol.com",
      ariaLabel: "Send us an email"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      content: "506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad, Telangana - 500016",
      link: "https://maps.google.com/?q=Aditya+Enclave+Ameerpet+Hyderabad",
      ariaLabel: "View our location on Google Maps"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      content: "Mon - Sat: 9AM - 6PM",
    }
  ];

  return (
    <>
      {/* Remove ContactMeta component */}
      
      {/* Structured Data */}
      <Script
        id="contact-page-schema-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      
      <Script
        id="contact-page-schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary/10 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
              <p className="mt-4 text-lg text-gray-600">
                Get in touch with us for any questions about our IT courses or corporate training
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">Thank you!</h2>
                  <p className="text-gray-600 mb-6">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700" role="alert">
                      {error}
                    </div>
                  )}
                  <form className="space-y-6" ref={formRef} onSubmit={handleSubmit} aria-label="Contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="from_name">
                          First Name
                        </label>
                        <input
                          id="from_name"
                          name="from_name" 
                          type="text"
                          value={formState.firstName}
                          onChange={(e) => setFormState({...formState, firstName: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          required
                          aria-required="true"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="last_name">
                          Last Name
                        </label>
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          value={formState.lastName}
                          onChange={(e) => setFormState({...formState, lastName: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="from_email">
                        Email
                      </label>
                      <input
                        id="from_email"
                        name="from_email"
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        required
                        aria-required="true"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="from_phone">
                        Phone Number
                      </label>
                      <input
                        id="from_phone"
                        name="from_phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        required
                        aria-required="true"
                        autoComplete="tel"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        required
                        aria-required="true"
                      ></textarea>
                    </div>
                    {/* Hidden fields for recipient */}
                    <input type="hidden" name="to_email" value="info@vritsol.com" />
                    <input type="hidden" name="subject" value={`Contact Form: ${formState.firstName} ${formState.lastName}`} />
                    
                    <button
                      type="submit"
                      className={`w-full text-white py-3 px-6 rounded-md transition-colors duration-200 ${
                        isSubmitting 
                          ? "bg-primary/70 cursor-not-allowed" 
                          : "bg-primary hover:bg-primary-dark"
                      }`}
                      disabled={isSubmitting}
                      aria-disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    itemScope
                    itemType="https://schema.org/ContactPoint"
                  >
                    <div className="text-primary mb-4">{item.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-gray-600 hover:text-primary"
                        aria-label={item.ariaLabel}
                        itemProp={item.title === "Phone" ? "telephone" : item.title === "Email" ? "email" : "url"}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600" itemProp="hoursAvailable">{item.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Map with semantic properties */}
              <section aria-labelledby="location-map">
                <h2 id="location-map" className="sr-only">Our Location</h2>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8977827432514!2d78.44559147507726!3d17.43744298391675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c8121771ef%3A0x3f1ea367e096a91b!2sAmeerpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1708670144949!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="VR IT Solutions office location in Ameerpet, Hyderabad"
                    aria-label="Interactive map showing our office location"
                  ></iframe>
                </div>
              </section>
            </div>
          </div>
          
          {/* FAQ Section (visible on the page for users) */}
          <section className="mt-16" aria-labelledby="contact-faqs">
            <h2 id="contact-faqs" className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm divide-y">
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">How can I contact VR IT Solutions?</h3>
                <p className="mt-2 text-gray-600">You can contact VR IT Solutions by phone at +91-9032734343, by email at info@vritsol.com, or by visiting our office at 506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet, Hyderabad.</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">What are the working hours of VR IT Solutions?</h3>
                <p className="mt-2 text-gray-600">VR IT Solutions is open Monday through Saturday from 9 AM to 6 PM.</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">How do I inquire about a specific course at VR IT Solutions?</h3>
                <p className="mt-2 text-gray-600">You can inquire about specific courses by filling out the contact form on our website, calling us at +91-9032734343, or sending an email to info@vritsol.com with details of the course you're interested in.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ContactPage;