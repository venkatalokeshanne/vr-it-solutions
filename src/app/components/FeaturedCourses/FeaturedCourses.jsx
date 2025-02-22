"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Target } from "lucide-react";
import Script from "next/script";
import Link from "next/link";
import courses from "@/data/courses";

const FeaturedCourses = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const coursesPerSlide = 4;

  // Create structured data for course list
  const courseListStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": courses.map((course, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
          "@type": "Organization",
          "name": "VR IT Solutions",
          "sameAs": "https://vr-it-solutions.vercel.app"
        },
        "timeRequired": course.hoursContent,
        "educationalLevel": course.level,
        "url": `https://vr-it-solutions.vercel.app/${course.link}`,
        "image": `https://vr-it-solutions.vercel.app${course.image}`,
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
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
              >
                <Link href={`/${course.link}`}>
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {course.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {course.description}
                    </p>

                    <div className="flex-1 flex flex-col justify-end mt-auto">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>{course.hoursContent}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Target className="w-4 h-4" />
                          <span>{course.level}</span>
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
      </div>
    </section>
  );
};

export default FeaturedCourses;