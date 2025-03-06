"use client";
import React, { useEffect } from "react";
import LearningSection from "./sections/LearningSection";
import Prerequisites from "./sections/Prerequisites";
import AboutCourse from "./sections/AboutCourse";
import CourseIncludes from "./sections/CourseIncludes";
import CourseContent from "./sections/CourseContent";
import WhyJoinThisCourse from "./sections/WhyJoinThisCourse";
import KeyDifferentiators from "./sections/KeyDifferentiators";
import WhoShouldAttend from "./sections/WhoShouldAttend";
import CourseHero from "./sections/CourseHero";
import PracticalExecution from "./sections/PracticalExecution";
import CourseHighlights from "./sections/CourseHighlights";
import CareerOpportunities from "./sections/CareerOpportunities";
import CourseSEO from "./CourseSEO";
import Link from "next/link";

// Keep the static files as fallback
// Keep the static files as fallback
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
  useEffect(() => {
    // Only track on client-side
    if (typeof window !== 'undefined' && window.VRIT) {
      // Track course view for analytics
      window.VRIT.trackCourseView?.({
        id: courseData.link,
        title: courseData.title,
        price: courseData.price || 0,
        category: courseData.category || "IT Training",
        mode: courseData.trainingMode?.[0] || "online",
      });
    }

    // Add semantic anchor tags for deep linking and improved indexing
    const sections = document.querySelectorAll('h2, h3');
    sections.forEach(section => {
      if (section.id) return; // Skip if already has ID
      const id = section.textContent
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      section.id = id;
    });
  }, [courseData]);

  const handleDownload = () => {
    // Track download event only on client-side
    if (typeof window !== 'undefined' && window.VRIT) {
      window.VRIT.trackBrochureDownload?.({
        title: courseData.title,
        id: courseData.link,
      });
    }
    
    const courseFile = courseFiles.find(
      (course) => course.name.toLowerCase() === courseData.course.toLowerCase()
    );

    if (courseFile) {
      window.open(courseFile.syllabus, "_blank");
    } else {
      console.error("Course syllabus not found");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <article itemScope itemType="https://schema.org/Course">
        <CourseSEO courseData={courseData} />
        
        {/* IMPORTANT: Removed Script components, they're now in the page component */}
        
        <header>
          {/* Breadcrumb remains unchanged */}
          <nav
            aria-label="Breadcrumb"
            className="pt-16 mb-3 overflow-hidden bg-gray-50 border-b border-gray-100 md:pt-3 md:mb-3"
          >
            <div className="container mx-auto px-4">
              <ol 
                className="flex items-center text-sm overflow-x-auto whitespace-nowrap scrollbar-hide"
                itemScope 
                itemType="https://schema.org/BreadcrumbList"
              >
                <li 
                  className="flex items-center shrink-0"
                  itemProp="itemListElement" 
                  itemScope 
                  itemType="https://schema.org/ListItem"
                >
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-primary transition-colors flex items-center"
                    itemProp="item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="hidden sm:inline ml-1" itemProp="name">Home</span>
                    <meta itemProp="position" content="1" />
                  </Link>
                </li>
                <li className="flex items-center mx-2" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li 
                  className="flex items-center shrink-0"
                  itemProp="itemListElement" 
                  itemScope 
                  itemType="https://schema.org/ListItem"
                >
                  <Link
                    href="/courses"
                    className="text-gray-600 hover:text-primary transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">Courses</span>
                    <meta itemProp="position" content="2" />
                  </Link>
                </li>
                <li className="flex items-center mx-2 shrink-0" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </li>
                <li
                  className="text-primary font-medium truncate shrink-0 flex-1 min-w-0"
                  title={courseData.title}
                  itemProp="itemListElement" 
                  itemScope 
                  itemType="https://schema.org/ListItem"
                >
                  <span itemProp="name">{courseData.title}</span>
                  <meta itemProp="position" content="3" />
                </li>
              </ol>
            </div>
          </nav>
          <CourseHero courseData={courseData} handleDownload={handleDownload} />
        </header>
        
        <div itemScope itemProp="hasCourseInstance">
          {/* Meta description for better crawling */}
          <meta itemProp="description" content={
            Array.isArray(courseData.description) 
              ? courseData.description.join(" ") 
              : courseData.description || `${courseData.title} training by VR IT Solutions`
          } />
          
          {/* Course provider metadata */}
          <meta itemProp="provider" content="VR IT Solutions" />
          
          {/* Course sections with semantic markup */}
          {courseData.learningPoints?.length > 0 && (
            <section id="learning-objectives" aria-labelledby="learning-objectives-heading">
              <LearningSection courseData={courseData} />
            </section>
          )}

          {courseData.coursePrerequisites?.length > 0 && (
            <section id="prerequisites" aria-labelledby="prerequisites-heading">
              <Prerequisites courseData={courseData} />
            </section>
          )}

          {courseData.aboutTheCourse?.length > 0 && (
            <section id="about-course" aria-labelledby="about-course-heading">
              <AboutCourse courseData={courseData} />
            </section>
          )}

          {courseData.courseIncludes && (
            <section id="course-includes" aria-labelledby="course-includes-heading">
              <CourseIncludes courseData={courseData} />
            </section>
          )}

          {courseData.whyJoin && (
            <section id="why-join" aria-labelledby="why-join-heading">
              <WhyJoinThisCourse data={courseData.whyJoin} />
            </section>
          )}

          {courseData.courseHighlights?.length > 0 && (
            <section id="course-highlights" aria-labelledby="course-highlights-heading">
              <CourseHighlights data={courseData.courseHighlights} />
            </section>
          )}

          {courseData.practicalExecution?.length > 0 && (
            <section id="practical-execution" aria-labelledby="practical-execution-heading">
              <PracticalExecution data={courseData.practicalExecution} />
            </section>
          )}

          {courseData.careerOpportunities?.length > 0 && (
            <section id="career-opportunities" aria-labelledby="career-opportunities-heading">
              <CareerOpportunities data={courseData.careerOpportunities} />
            </section>
          )}

          {courseData.whoShouldAttend?.length > 0 && (
            <section id="who-should-attend" aria-labelledby="who-should-attend-heading">
              <WhoShouldAttend data={courseData.whoShouldAttend} />
            </section>
          )}

          <section id="key-differentiators" aria-labelledby="key-differentiators-heading">
            <KeyDifferentiators
              data={courseData}
              handleDownload={handleDownload}
            />
          </section>

          {courseData.sections?.length > 0 && (
            <section id="course-content" aria-labelledby="course-content-heading">
              <CourseContent courseData={courseData} />
            </section>
          )}
        </div>
      </article>
    </main>
  );
};

export default CourseDetails;