"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Target } from "lucide-react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image"; // Added Next.js Image component import
import { client } from "@/lib/sanity.client";
import { urlForImage } from "../urlForImage";

const FeaturedCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const coursesPerSlide = 4;

  // Fetch courses from Sanity
  useEffect(() => {
    async function fetchCourses() {
      try {
        setIsLoading(true);
        // Query featured and trending courses
        const query = `*[_type == "courseImage"]`;
        const result = await client.fetch(query);
        
        if (result && result.length > 0) {
          setCourses(result);
        }
      } catch (err) {
        console.error("Error fetching featured courses:", err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchCourses();
  }, []);

  // Generate structured data only when courses are loaded
  const courseListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": Array.isArray(course.description) 
          ? course.description.join(" ") 
          : course.description || "",
        "provider": {
          "@type": "Organization",
          "name": "VR IT Solutions",
          "sameAs": "https://vr-it-solutions.vercel.app"
        },
        "timeRequired": course.hoursContent,
        "educationalLevel": course.level,
        "url": `https://vr-it-solutions.vercel.app/${course.link}`,
        "image": course.image ? urlForImage(course.image).url() : "",
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "0",
          "priceCurrency": "INR"
        }
      }
    }))
  };

  // Create carousel structured data
  const carouselStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "mainContentOfPage": {
      "@type": "ItemList",
      "numberOfItems": courses.length,
      "itemListElement": courses.map((course, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://vr-it-solutions.vercel.app/${course.link}`
      }))
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      Math.min(Math.ceil(courses.length / coursesPerSlide) - 1, prev + 1)
    );
  };

  const visibleCourses = courses.slice(
    currentSlide * coursesPerSlide,
    (currentSlide + 1) * coursesPerSlide
  );

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white">
      <Script
        id="featured-courses-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseListStructuredData) }}
      />
      <Script
        id="carousel-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carouselStructuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Featured Courses
            </h2>
            <p className="text-gray-600">
              Master the most in-demand technologies
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className={`p-3 rounded-full border border-gray-200 hover:bg-primary/5 transition-colors ${
                currentSlide === 0 ? "text-gray-300" : "text-gray-600"
              }`}
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              className={`p-3 rounded-full border border-gray-200 hover:bg-primary/5 transition-colors ${
                currentSlide >= Math.ceil(courses.length / coursesPerSlide) - 1
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
              onClick={handleNextSlide}
              disabled={
                currentSlide >= Math.ceil(courses.length / coursesPerSlide) - 1
              }
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {isLoading ? (
          // Loading state
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div 
                key={item} 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden animate-pulse h-[400px]"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                  <div className="mt-auto pt-8">
                    <div className="flex justify-between mb-4">
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    <div className="h-12 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Loaded courses
          <AnimatePresence mode="wait">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {visibleCourses.map((course, index) => (
                <motion.div
                  key={course._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  <Link href={`/${course.link}`}>
                    {/* Image Section - Changed to Next.js Image component */}
                    <div className="relative h-48 overflow-hidden">
                      {course.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={urlForImage(course.image).url()}
                            alt={course.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                            priority={index < 2} // Only prioritize loading the first couple of images
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">No image</span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-2">
                        {course.title}
                      </h3>

                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {Array.isArray(course.description) && course.description.length > 0
                          ? course.description[0]
                          : "No description available"}
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

                        <span
                          className="w-full py-3 px-4 bg-primary/10 text-primary font-medium rounded-lg 
                            transition-all duration-300 
                            hover:bg-primary hover:text-white 
                            group-hover:bg-primary group-hover:text-white
                            text-center"
                        >
                          Explore Course
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;