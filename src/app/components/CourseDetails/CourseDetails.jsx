"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Star,
  Play,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  PencilRuler,
  FileText,
  Smartphone,
  Check,
  Share2,
  Award,
  Book,
  Info,
  Lightbulb,
} from "lucide-react";
import WhyJoinThisCourse from "../WhyJoinThisCourse/WhyJoinThisCourse";
import KeyDifferentiators from "../KeyDifferentiators/KeyDifferentiators";
import { redirect } from "next/navigation";
import SocialShare from "../SocialShare/SocialShare";
import Script from "next/script";

export const courseFiles = [
  {
    name: "AWS & DevOps",
    syllabus: "/pdfs/Azure-Devops-AWS-Cloud-Syllabus.pdf",
  },
  {
    name: "Clinical SAS",
    syllabus: "/pdfs/clinical-sas-training-content.pdf",
  },
  {
    name: "Data Science",
    syllabus: "/pdfs/datascience.pdf",
  },
  {
    name: "DevOps",
    syllabus: "/pdfs/devops.pdf",
  },
  {
    name: "EDI & SI",
    syllabus: "/pdfs/edi-si-course-content.pdf",
  },
  {
    name: "Google Cloud",
    syllabus: "/pdfs/google-cloud.pdf",
  },
  {
    name: "Hadoop",
    syllabus: "/pdfs/hadoop-online-training.pdf",
  },
  {
    name: "Informatica MDM",
    syllabus: "/pdfs/informatica-mdm-training.pdf",
  },
  {
    name: "Java Full Stack",
    syllabus: "/pdfs/Java-full-stack-development-Syllabus.pdf",
  },
  {
    name: "MuleSoft",
    syllabus: "/pdfs/mulesoft-course-content.pdf",
  },
  {
    name: "Pega",
    syllabus: "/pdfs/pega.pdf",
  },
  {
    name: "Python with AWS",
    syllabus: "/pdfs/python-with-AWS.pdf",
  },
  {
    name: "Python with Django",
    syllabus: "/pdfs/python-with-django.pdf",
  },
  {
    name: "Python with Machine Learning",
    syllabus: "/pdfs/python-with-machine-learning.pdf",
  },
  {
    name: "Salesforce",
    syllabus: "/pdfs/salesforce-course-content.pdf",
  },
  {
    name: "SAP Basis",
    syllabus: "/pdfs/sap-basis-online-training.pdf",
  },
  {
    name: "SAP EWM",
    syllabus: "/pdfs/sap-ewm.pdf",
  },
  {
    name: "SAP FICO",
    syllabus: "/pdfs/sap-fico-online-training-in-hyderabad.pdf",
  },
  {
    name: "SAP HANA Administration",
    syllabus: "/pdfs/sap-hana-administration.pdf",
  },
  {
    name: "SAP Leonardo",
    syllabus: "/pdfs/sap-leonardo-training-hyderabad.pdf",
  },
  {
    name: "SAP MM",
    syllabus: "/pdfs/sap-mm-online-training.pdf",
  },
  {
    name: "SAP S/4HANA Logistics",
    syllabus: "/pdfs/sap-s4Hana-simple-logistics-training.pdf",
  },
  {
    name: "SAP SD",
    syllabus: "/pdfs/sap-sd-online-training-in-hyderabad.pdf",
  },
  {
    name: "SAP Security & GRC",
    syllabus: "/pdfs/SAP-Security-and-SAP-GRC-Training-Course.pdf",
  },
  {
    name: "ServiceNow",
    syllabus: "/pdfs/servicenow.pdf",
  },
  {
    name: "SAP S/4HANA Finance",
    syllabus: "/pdfs/simple-finance-training-in-hyderabad.pdf",
  },
  {
    name: "Snowflake",
    syllabus: "/pdfs/snowflake-training-in-hyderabad.pdf",
  },
  {
    name: "Workday",
    syllabus: "/pdfs/workday.pdf",
  },
];

const CourseDetails = ({ courseData }) => {
  const [selectedSection, setSelectedSection] = useState(0);

  // Create structured data for the course
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.title,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": "VR IT Solutions",
      "sameAs": "https://vr-it-solutions.vercel.app"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "100",
      "bestRating": "5",
      "worstRating": "1"
    },
    "coursePrerequisites": courseData.coursePrerequisites.join(", "),
    "educationalLevel": courseData.level,
    "timeRequired": courseData.hoursContent,
    "teaches": courseData.learningPoints.join(", "),
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": ["online", "onsite"],
      "location": {
        "@type": "Place",
        "name": "VR IT Solutions Training Center",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hyderabad",
          "addressRegion": "Telangana",
          "addressCountry": "IN"
        }
      }
    }
  };



  // Course content structured data
  const courseContentStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courseData.sections.map((section, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": section.title,
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": ["online", "onsite"],
          "teaches": section.lectures.map(lecture => lecture.title).join(", ")
        }
      }
    }))
  };

  const handleDownload = () => {
    const courseFile = courseFiles.find(
      (course) => course.name.toLowerCase() === courseData.course.toLowerCase()
    );

    if (courseFile) {
      window.open(courseFile.syllabus, "_blank");
    } else {
      console.error("Course syllabus not found");
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: courseData.title,
          text: courseData.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Script
        id="course-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="course-content-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseContentStructuredData) }}
      />
      {/* Course Header */}
      <div className="bg-gray-900 text-white mt-14 md:mt-0">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
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
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"/>
                    </svg>
                    {courseData.hoursContent}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
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

            {/* Course Card */}
            <div className="lg:max-w-md">
              <div className="bg-white rounded-lg shadow-lg p-3">
                <div className="relative mb-4">
                  <div className="relative aspect-video rounded overflow-hidden">
                    <Image
                      src={courseData.image} // Path to your image in the public folder
                      alt="Site Logo"
                      fill
                    />
                  </div>
                </div>
                <div>
                  <button
                    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-hover mb-4 transition-colors duration-200"
                    onClick={() => redirect("/contactus")}
                  >
                    Enroll now
                  </button>
                  <button
                    onClick={handleDownload}
                    className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-hover mb-4 transition-colors duration-200"
                  >
                    Download Course Content
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-xl font-bold mb-4">What you'll learn</h2>
        <div className="border border-gray-200 rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {courseData.learningPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 shadow-sm">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Pre-requisites</h2>
          </div>

          <div className="space-y-6">
            <div className="grid">
              {courseData.coursePrerequisites.map((point, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {point}
                </p>
              ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/80 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Looking for {courseData.title} training?
                  </h3>
                  <p className="text-gray-600">
                    If you are looking for{" "}
                    <span className="text-primary font-medium">
                      {courseData.title}
                    </span>
                    , VR IT Solutions is the right institute for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="font-bold mb-4">This course includes:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:block space-y-0 md:space-y-3">
            <div className="flex items-center mb-3 md:mb-0">
              <Play className="h-5 w-5 text-gray-600 mr-3" />
              <span>{courseData.hoursContent}</span>
            </div>
            <div className="flex items-center mb-3 md:mb-0">
              <ClipboardCheck className="h-5 w-5 text-gray-600 mr-3" />
              <span>1 practice test</span>
            </div>
            <div className="flex items-center mb-3 md:mb-0">
              <PencilRuler className="h-5 w-5 text-gray-600 mr-3" />
              <span>Assignments</span>
            </div>
            <div className="flex items-center">
              <FileText className="h-5 w-5 text-gray-600 mr-3" />
              <span>Articles</span>
            </div>
          </div>
          <div className="flex flex-col md:block space-y-0 md:space-y-3">
            <div className="flex items-center mb-3 md:mb-0">
              <Smartphone className="h-5 w-5 text-gray-600 mr-3" />
              <span>Online & Offline</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-gray-600 mr-3" />
              <span>Certificate of completion</span>
            </div>
          </div>
        </div>
      </div>
      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Course content</h2>
        <div className="mb-4">
          <span className="text-sm text-gray-600">
            {courseData.sections.length} sections •{" "}
            {courseData.sections.reduce(
              (acc, section) => acc + section.lectures.length,
              0
            )}{" "}
            lectures • {courseData.hoursContent} total length
          </span>
        </div>
        <div className="border rounded-lg">
          {courseData.sections.map((section, index) => (
            <div key={index} className="border-b last:border-b-0">
              <button
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50"
                onClick={() =>
                  setSelectedSection(selectedSection === index ? -1 : index)
                }
              >
                <div className="flex items-center">
                  {selectedSection === index ? (
                    <ChevronUp className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  )}
                  <span className="font-medium">{section.title}</span>
                </div>
                <span className="text-sm text-gray-600">
                  {section.lectures.length} lectures
                </span>
              </button>
              {selectedSection === index && (
                <div className="bg-gray-50 px-6 py-2">
                  {section.lectures.map((lecture, lectureIndex) => (
                    <div
                      key={lectureIndex}
                      className="flex items-center justify-between py-3 text-sm"
                    >
                      <div className="flex items-center">
                        <Play className="h-4 w-4 mr-2" />
                        <span>{lecture.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <WhyJoinThisCourse data={courseData.whyJoin} />
      <KeyDifferentiators data={courseData} />
    </div>
  );
};

export default CourseDetails;
