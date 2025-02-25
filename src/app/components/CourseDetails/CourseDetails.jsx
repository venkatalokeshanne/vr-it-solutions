"use client";
import Script from "next/script";
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

const CourseDetails = ({ courseData }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseData.title,
    description: courseData.description,
    provider: {
      "@type": "Organization",
      name: "VR IT Solutions",
      sameAs: "https://vr-it-solutions.vercel.app",
    },
    courseCode: courseData.course,
    timeRequired: courseData.hoursContent,
    educationalLevel: courseData.level,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "onsite"],
    },
  };

  // Add structured data for course content
  const courseContentStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courseData.sections?.map((section, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: section.title,
      item: {
        "@type": "Course",
        name: section.title,
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: ["online", "onsite"],
        },
      },
    })),
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

  return (
    <main className="min-h-screen bg-white">
      <article itemScope itemType="https://schema.org/Course">
        <CourseSEO courseData={courseData} />
        {structuredData && (
          <Script
            id="course-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        )}
        {courseContentStructuredData && (
          <Script
            id="course-content-structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(courseContentStructuredData),
            }}
          />
        )}
        <header>
          {/* Header is mandatory as it contains essential course info */}
          <CourseHero courseData={courseData} handleDownload={handleDownload} />
        </header>
        <div itemScope itemProp="hasCourseInstance">
          {courseData.learningPoints?.length > 0 && (
            <LearningSection courseData={courseData} />
          )}

          {courseData.coursePrerequisites?.length > 0 && (
            <Prerequisites courseData={courseData} />
          )}

          {courseData.aboutTheCourse?.length > 0 && (
            <AboutCourse courseData={courseData} />
          )}

          {courseData.courseIncludes && (
            <CourseIncludes courseData={courseData} />
          )}

          {courseData.sections?.length > 0 && (
            <CourseContent courseData={courseData} />
          )}

          {courseData.whyJoin && (
            <WhyJoinThisCourse data={courseData.whyJoin} />
          )}

          {courseData.courseHighlights?.length > 0 && (
            <CourseHighlights data={courseData.courseHighlights} />
          )}

          {courseData.practicalExecution?.length > 0 && (
            <PracticalExecution data={courseData.practicalExecution} />
          )}

          {courseData.careerOpportunities?.length > 0 && (
            <CareerOpportunities data={courseData.careerOpportunities} />
          )}

          {courseData.whoShouldAttend?.length > 0 && (
            <WhoShouldAttend data={courseData.whoShouldAttend} />
          )}

          <KeyDifferentiators data={courseData} />
        </div>
      </article>
    </main>
  );
};

export default CourseDetails;
