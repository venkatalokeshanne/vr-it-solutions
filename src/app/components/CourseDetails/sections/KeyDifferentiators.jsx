"use client";
import { useState } from 'react';
import Script from 'next/script';
import { TerminalSquare, Users, Clock, BarChart2, Briefcase, CheckCircle, X } from 'lucide-react';
import Link from 'next/link'; // Import Link component
import { createCourseRequestParams, initEmailService, sendParameterEmail } from "@/app/util";
import { useEffect } from 'react';

export default function KeyDifferentiators({data, handleDownload}) {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  
  // Initialize EmailJS
  useEffect(() => {
    initEmailService();
  }, []);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSubmitError(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Use the utility functions to create params and send email
      const templateParams = createCourseRequestParams(formData, data);
      await sendParameterEmail(templateParams);
      
      setIsSubmitting(false);
      handlePopupClose();
      
      // Call the original download function after form submission
      handleDownload();
    } catch (err) {
      console.error("Failed to send email:", err);
      setSubmitError("There was a problem submitting your information. Please try again.");
      setIsSubmitting(false);
    }
  };
  
  const differentiators = [
    {
      id: 1,
      icon: <TerminalSquare className="h-8 w-8" />,
      title: "Comprehensive Practical Sessions",
      description: `Every theory session includes hands-on practice with real ${data.course} interview questions, allowing you to master concepts at your own pace.`
    },
    {
      id: 2,
      icon: <Briefcase className="h-8 w-8" />,
      title: "Live Project Experience",
      description: "Apply your skills to real-world projects that mirror actual business scenarios, building the practical experience employers value."
    },
    {
      id: 3,
      icon: <Users className="h-8 w-8" />,
      title: "Industry Expert Instructors",
      description: `Learn from active professionals including mid-level managers and technical specialists with real-world ${data.course} expertise.`
    },
    {
      id: 4,
      icon: <Clock className="h-8 w-8" />,
      title: "40-Hour Mastery Program",
      description: "Our accelerated curriculum gets you job-ready in just 40 hours, with flexible weekend or weekday scheduling options."
    },
    {
      id: 5,
      icon: <BarChart2 className="h-8 w-8" />,
      title: "Always Current Curriculum",
      description: `Course content updated every 6 months to align with the latest ${data.course} technologies and industry best practices.`
    },
    {
      id: 6,
      icon: <CheckCircle className="h-8 w-8" />,
      title: "100% Placement Guarantee",
      description: "VRIT Solutions stands behind qualified graduates with our placement guarantee program for deserving students."
    }
  ];

  const differentiatorSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": differentiators.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": item.title,
        "description": item.description
      }
    }))
  };

  // Course offering structured data
  const courseOfferingSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${data.course} Training Program`,
    "description": `Professional ${data.course} training with industry expert instructors`,
    "provider": {
      "@type": "Organization",
      "name": "VR IT Solutions",
      "sameAs": "https://vr-it-solutions.vercel.app"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["online", "onsite"],
      "duration": data.hoursContent,
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock"
      }
    },
    "coursePrerequisites": "Basic understanding of programming concepts",
    "educationalLevel": "Professional",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500",
      "bestRating": "5"
    }
  };

  // Stats structured data
  const statsSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": `${data.course} Training Statistics`,
    "description": "Key performance metrics for our training program",
    "variableMeasured": [
      {
        "@type": "PropertyValue",
        "name": "Placement Rate",
        "value": "98%"
      },
      {
        "@type": "PropertyValue",
        "name": "Training Duration",
        "value": data.hoursContent
      },
      {
        "@type": "PropertyValue",
        "name": "Support Access",
        "value": "24/7"
      },
      {
        "@type": "PropertyValue",
        "name": "Practical Focus",
        "value": "100%"
      }
    ]
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 overflow-hidden bg-gradient-to-b from-white to-primary-light/20 relative">
      <Script
        id="differentiators-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(differentiatorSchema) }}
      />
      <Script
        id="course-offering-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseOfferingSchema) }}
      />
      <Script
        id="stats-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(statsSchema) }}
      />{/* Background decorative elements */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute -top-64 -right-64 w-96 h-96 bg-primary-light rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-96 -left-64 w-96 h-96 bg-primary-light rounded-full opacity-50 blur-3xl"></div>
    </div>

    <div className="container mx-auto px-4 relative z-10">
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-8">
        <div className="inline-block py-1 px-3 rounded-full bg-primary-light text-primary font-medium text-sm mb-4">
          Why Choose Our Training
        </div>
        <h2 className="text-4xl font-bold mb-5 leading-tight">
          Our Key <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">Differentiators</span>
        </h2>
        <p className="text-lg text-gray-600">
          What makes our {data.course} training the preferred choice for aspiring professionals
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {differentiators.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm hover:shadow-xl relative overflow-hidden"
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div 
              className={`absolute inset-0 bg-gradient-to-tr from-primary-light to-primary-light/50 opacity-0 transition-opacity duration-300 ${
                hoveredCard === item.id ? 'opacity-100' : ''
              }`}
            ></div>
            
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-primary-light text-primary transition-transform duration-300 ${
                hoveredCard === item.id ? 'scale-110' : ''
              }`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-primary-light to-primary-light/50 rounded-full opacity-30"></div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-primary to-primary-hover rounded-2xl overflow-hidden relative shadow-xl">
          {/* ...existing decorative shapes... */}
          
          <div className="p-10 md:p-12 text-center relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Advance Your {data.course} Career?</h3>
            <p className="text-lg text-primary-light mb-8 max-w-2xl mx-auto">
              Join our comprehensive training program designed for real-world success.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Changed from redirect to Link component */}
              <Link href="/contactus" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 shadow-lg hover:shadow-xl inline-block text-center">
                Enroll Now
              </Link>
              <button className="bg-transparent text-white border-2 border-white border-opacity-30 px-8 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300" onClick={handlePopupOpen}>
                View Curriculum
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { value: "98%", label: "Placement Rate" },
          { value: data.hoursContent, label: "Training Duration" },
          { value: "24/7", label: "Support Access" },
          { value: "100%", label: "Practical Focus" }
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent mb-2">
              {stat.value}
            </div>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
    
    {/* Contact Form Popup */}
    {showPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
          <button 
            onClick={handlePopupClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Download Course Curriculum</h2>
            <p className="text-gray-600 mb-6">
              Please fill this form to download the complete course curriculum for {data.title || data.course}
            </p>
            
            {submitError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <p className="text-red-700">{submitError}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmitForm} className="space-y-4">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="from_phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="from_phone"
                  name="from_phone"
                  value={formData.from_phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 rounded-md text-white font-medium ${
                  isSubmitting ? "bg-primary/70" : "bg-primary hover:bg-primary-hover"
                } transition-colors duration-200`}
              >
                {isSubmitting ? "Please wait..." : "Download Curriculum"}
              </button>
            </form>
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              By submitting this form, you agree to receive information about our courses and services.
            </p>
          </div>
        </div>
      </div>
    )}
  </section>
  );
}