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

const CourseDetails = ({ courseData }) => {
  const [selectedSection, setSelectedSection] = useState(0);

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
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Share2 className="h-5 w-5" />
                <span className="text-sm">Share</span>
              </button>
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
                  <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-hover mb-4 transition-colors duration-200">
                    Enroll now
                  </button>
                  <button className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-hover mb-4 transition-colors duration-200">
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
      <KeyDifferentiators data={courseData}/>
    </div>
  );
};

export default CourseDetails;
