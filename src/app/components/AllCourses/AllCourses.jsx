"use client";
import { motion } from "framer-motion";
import { Clock, Target, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { urlForImage } from "../urlForImage";

const AllCourses = ({ courses }) => {
  const router = useRouter();
  
  const courseListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: courses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: Array.isArray(course.description) 
          ? course.description.join(' ') 
          : course.description || '',
        provider: {
          "@type": "Organization",
          name: "VR IT Solutions",
          sameAs: "https://vr-it-solutions.vercel.app",
        },
        timeRequired: course.hoursContent,
        educationalLevel: course.level,
        url: `https://vr-it-solutions.vercel.app/${course.link}`,
      },
    })),
  };
  
  // Handle course navigation with proper history management
  const handleCourseClick = (courseLink) => {
    router.push(`/${courseLink}`);
  };
  
  return (
    <section className="py-16">
      <Script
        id="courses-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-r from-primary/15 via-primary/10 to-transparent backdrop-blur-sm rounded-2xl border border-primary/5 shadow-lg shadow-primary/5 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div 
                className="relative h-48 overflow-hidden cursor-pointer" 
                onClick={() => handleCourseClick(course.link)}
              >
                {course.image ? (
                  <Image
                    src={urlForImage(course.image).url()} 
                    alt={course.title || "Course Image"}
                    fill
                    className="mx-auto h-full w-auto object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400">No image available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              <div 
                className="p-6 flex flex-col flex-1 cursor-pointer" 
                onClick={() => handleCourseClick(course.link)}
              >
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-2">
                  {course.title}
                </h3>

                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {Array.isArray(course.description) && course.description.length > 0
                    ? course.description[0]
                    : course.description || "No description available"}
                </p>

                <div className="flex-1 flex flex-col justify-end mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{course.hoursContent || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>{course.level || "All Levels"}</span>
                    </div>
                  </div>

                  <Link
                    href={`/${course.link}`}
                    className="group/btn flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary/10 text-primary font-medium rounded-lg 
                      transition-all duration-300 
                      hover:bg-primary hover:text-white"
                  >
                    <span>View Course Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;