"use client";
import { useState, useEffect } from "react";
import { Star, X } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import SocialShare from "./SocialShare";
import { createCourseRequestParams, initEmailService, sendParameterEmail } from "@/app/util";

const CourseHero = ({ courseData, handleDownload }) => {
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
      const templateParams = createCourseRequestParams(formData, courseData);
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

  return (
    <div className="bg-gray-900 text-white mt-14 md:mt-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Course Header */}
          <div className="lg:col-span-7">
            <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-lg mb-4">{courseData.description}</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-6">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
                {courseData.hoursContent}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {courseData.level}
              </span>
            </div>
            <div>
              <SocialShare
                url={`https://vr-it-solutions.vercel.app/${courseData.link}`}
                title={courseData.title}
                description={courseData.description}
              />
            </div>
          </div>

          {/* Right side - Course Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
              <div className="relative mb-4">
                <div className="relative aspect-video rounded overflow-hidden">
                  <Image
                    src={courseData.image}
                    alt="Course Image"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <button
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-200"
                  onClick={() => redirect("/contactus")}
                >
                  Enroll now
                </button>
                <button
                  onClick={handlePopupOpen}
                  className="w-full bg-white text-primary border-2 border-primary py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
                >
                  Download Course Content
                </button>
              </div>
            </div>
          </div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-1">Download Course Content</h2>
              <p className="text-gray-600 mb-6">Please fill this form to download the complete course syllabus for {courseData.title}</p>
              
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
                  {isSubmitting ? "Please wait..." : "Download Now"}
                </button>
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to receive information about our courses and services.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseHero;