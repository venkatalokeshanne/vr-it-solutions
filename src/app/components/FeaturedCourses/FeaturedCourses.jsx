"use client";
import React, { useState } from 'react';
import CourseCard from '../CourseCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { courses } from '@/app/utils/courses';

const FeaturedCourses = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const coursesPerSlide = 5; // Number of courses to show per slide
  
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
        <div className="bg-gray-50 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Featured courses</h2>
              <p className="text-gray-600">Learn from industry experts</p>
            </div>
            <div className="flex space-x-2">
              <button
                className={`p-2 rounded-full border ${
                  currentSlide === 0 ? "text-gray-400" : "hover:bg-white"
                }`}
                onClick={handlePrevSlide}
                disabled={currentSlide === 0}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className={`p-2 rounded-full border ${
                  currentSlide >=
                  Math.ceil(courses.length / coursesPerSlide) - 1
                    ? "text-gray-400"
                    : "hover:bg-white"
                }`}
                onClick={handleNextSlide}
                disabled={
                  currentSlide >=
                  Math.ceil(courses.length / coursesPerSlide) - 1
                }
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default FeaturedCourses;