"use client";
import { useState, useEffect, useRef } from "react";
import { Star, X, Play, Youtube } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import SocialShare from "./SocialShare";
import {
  createCourseRequestParams,
  initEmailService,
  sendParameterEmail,
} from "@/app/util";
import { urlForImage } from "../../urlForImage";

const CourseHero = ({ courseData, handleDownload }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const previewTimeoutRef = useRef(null);
  const previewVideoRef = useRef(null);

  // Demo video URL - you can make this dynamic by adding a videoUrl field to your courseData
  const demoVideoUrl =
    courseData.demoVideo || "https://www.youtube.com/embed/b4_e29tnMAo"; // Default video or use course-specific URL

  // Get YouTube URL with autoplay parameter for preview
  const getPreviewVideoUrl = () => {
    let previewUrl = demoVideoUrl;
    
    // Add autoplay parameter if not present
    if (previewUrl.includes('?')) {
      if (!previewUrl.includes('autoplay=1')) {
        previewUrl += '&autoplay=1&mute=1';
      }
    } else {
      previewUrl += '?autoplay=1&mute=1';
    }
    
    // Add muted parameter for Chrome's autoplay policy
    if (!previewUrl.includes('mute=1')) {
      previewUrl += '&mute=1';
    }
    
    return previewUrl;
  };

  // Initialize EmailJS
  useEffect(() => {
    initEmailService();
  }, []);

  // Handle cleanup when preview is hidden
  useEffect(() => {
    if (!showPreview && previewVideoRef.current) {
      // Stop video when preview is hidden
      previewVideoRef.current.src = "";
    }
  }, [showPreview]);

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    setSubmitError(null);
  };

  const handleVideoPopupOpen = () => {
    setShowVideoPopup(true);
  };

  const handleVideoPopupClose = () => {
    setShowVideoPopup(false);
  };

  const handleVideoPreviewEnter = () => {
    // Delay showing the preview to avoid it flickering during casual mouseovers
    previewTimeoutRef.current = setTimeout(() => {
      setShowPreview(true);
    }, 300); // 300ms delay before showing preview
  };
  
  const handleVideoPreviewLeave = () => {
    if (previewTimeoutRef.current) {
      clearTimeout(previewTimeoutRef.current);
    }
    setShowPreview(false);
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
      setSubmitError(
        "There was a problem submitting your information. Please try again."
      );
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
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" />
                </svg>
                {courseData.hoursContent}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {courseData.level}
              </span>
            </div>

            <div className="mb-8">
              <SocialShare
                url={`https://vr-it-solutions.vercel.app/${courseData.link}`}
                title={courseData.title}
                description={courseData.description}
              />
            </div>

            {/* Right side Course Card for Mobile MOVED HERE (after social media shares) */}
            <div className="lg:hidden mt-8">
              <div className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
  <div className="relative h-[200px] w-full"> {/* Standardized height */}
    <Image
      src={urlForImage(courseData.image).url()} 
      alt="Course Image"
      width={400}
      height={200}
      className="mx-auto h-full w-auto object-contain"
      priority
    />
  </div>
</div>
                <div className="p-4">
                  <div className="flex flex-col gap-3">
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
                      Download Syllabus
                    </button>
                    
                    {/* Watch Demo button with hover video preview */}
                    <div className="relative">
                      <button
                        onClick={handleVideoPopupOpen}
                        onMouseEnter={handleVideoPreviewEnter}
                        onMouseLeave={handleVideoPreviewLeave}
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                        Watch Demo
                      </button>
                      
                      {/* Video Preview on Hover (Mobile) */}
                      {showPreview && (
                        <div className="absolute bottom-full left-0 right-0 mb-2 z-50 shadow-xl rounded-lg overflow-hidden">
                          <div className="relative aspect-video">
                            <iframe
                              ref={previewVideoRef}
                              src={getPreviewVideoUrl()}
                              className="w-full h-full absolute inset-0"
                              title="Video Preview"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                            <div className="absolute bottom-2 left-2 right-2 text-white font-medium text-sm bg-black bg-opacity-60 p-1 rounded">
                              Click to watch full video
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Course Card for Desktop */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="bg-white text-gray-900 rounded-lg shadow-lg p-6">
            <div className="relative mb-4">
  <div className="relative h-[240px] w-full rounded overflow-hidden"> {/* Standardized height */}
    <Image
      src={urlForImage(courseData.image).url()} 
      alt="Course Image"
      width={480}
      height={240}
      className="mx-auto h-full w-auto object-contain"
      priority
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
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={handlePopupOpen}
                    className="w-full bg-white text-primary border-2 border-primary py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors duration-200"
                  >
                    Download Syllabus
                  </button>
                  
                  {/* Watch Demo button with hover video preview */}
                  <div className="relative">
                    <button
                      onClick={handleVideoPopupOpen}
                      onMouseEnter={handleVideoPreviewEnter}
                      onMouseLeave={handleVideoPreviewLeave}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                      Watch Demo
                    </button>
                    
                    {/* Video Preview on Hover (Desktop) */}
                    {showPreview && (
                      <div className="absolute bottom-full left-0 right-0 mb-2 z-50 shadow-xl rounded-lg overflow-hidden" style={{width: "280px"}}>
                        <div className="relative aspect-video">
                          <iframe
                            ref={previewVideoRef}
                            src={getPreviewVideoUrl()}
                            className="w-full h-full absolute inset-0"
                            title="Video Preview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                          <div className="absolute bottom-2 left-2 right-2 text-white font-medium text-sm bg-black bg-opacity-60 p-1 rounded">
                            Click to watch full video
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-1">
                Download Course Content
              </h2>
              <p className="text-gray-600 mb-6">
                Please fill this form to download the complete course syllabus
                for {courseData.title}
              </p>

              {submitError && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                  <p className="text-red-700">{submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <label
                    htmlFor="from_name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                  <label
                    htmlFor="from_email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                  <label
                    htmlFor="from_phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
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
                    isSubmitting
                      ? "bg-primary/70"
                      : "bg-primary hover:bg-primary-hover"
                  } transition-colors duration-200`}
                >
                  {isSubmitting ? "Please wait..." : "Download Now"}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                By submitting this form, you agree to receive information about
                our courses and services.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Video Demo Popup */}
      {showVideoPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-lg shadow-xl max-w-4xl w-full relative">
            <button
              onClick={handleVideoPopupClose}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={demoVideoUrl}
                title={`${courseData.title} - Demo Video`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseHero;