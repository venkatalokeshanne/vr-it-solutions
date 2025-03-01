"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import coursesData from '@/data/courses';

export const RelatedCourses = () => {
  const pathname = usePathname();
  const [courses, setCourses] = useState([]);
  const scrollContainerRef = useRef(null);
  
  // Extract current course slug/id from the URL if we're on a course page
  const getCurrentCourseSlug = () => {
    // Assuming course URLs are in format /courses/[slug]
    const match = pathname.match(/\/courses\/([a-z0-9-]+)/i);
    return match ? match[1] : null;
  };
  
  useEffect(() => {
    // Filter out the current course if we're on a course page
    const currentSlug = getCurrentCourseSlug();
    
    // Get courses, excluding the current one
    let availableCourses = currentSlug 
      ? coursesData.filter(course => course.slug !== currentSlug)
      : coursesData;
      
    // Make sure we have enough items for a continuous scroll
    if (availableCourses.length < 6) {
      const multiplier = Math.ceil(6 / availableCourses.length);
      let extendedCourses = [];
      for (let i = 0; i < multiplier; i++) {
        extendedCourses = [...extendedCourses, ...availableCourses];
      }
      availableCourses = extendedCourses;
    } else {
      // Just duplicate once for smooth looping
      availableCourses = [...availableCourses, ...availableCourses];
    }
    
    setCourses(availableCourses);
  }, [pathname]);

  // Auto-scrolling effect
  useEffect(() => {
    if (!scrollContainerRef.current || courses.length === 0) return;
    
    const scrollContainer = scrollContainerRef.current;
    let animationFrameId;
    let startTime;
    
    // Speed of scrolling - increase for faster movement
    const speed = 60;
    
    const scroll = (timestamp) => {
      if (!startTime) startTime = timestamp;
      
      // Calculate how far to scroll
      const elapsed = timestamp - startTime;
      const pixelsToScroll = (elapsed * speed) / 1000;
      
      // Reset startTime to create a smooth animation
      startTime = timestamp;
      
      // Scroll horizontally
      scrollContainer.scrollLeft += pixelsToScroll;
      
      // If we've scrolled past half the duplicated content, reset the scroll position
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 1; // Small offset to prevent flickers
      }
      
      // Continue the animation
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    // Ensure animation starts immediately
    startTime = performance.now();
    animationFrameId = requestAnimationFrame(scroll);
    
    // Pause scrolling when user hovers over the container
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId);
    };
    
    const handleMouseLeave = () => {
      startTime = performance.now();
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    // Touch device handling
    const handleTouchStart = () => {
      cancelAnimationFrame(animationFrameId);
    };
    
    const handleTouchEnd = () => {
      startTime = performance.now();
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    
    // Force initial scroll position
    scrollContainer.scrollLeft = 1;
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [courses]);
  
  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Popular Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Enhance your career with our industry-focused training programs
          </p>
        </div>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-hidden gap-5 pb-2 no-scrollbar"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {courses.map((course, index) => (
            <div 
              key={`${course.id}-${index}`} 
              className="flex-shrink-0 w-[260px] md:w-[300px] bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-36">
                <Image 
                  src={course.image || '/images/courses/default-course.jpg'} 
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-1 text-gray-900 line-clamp-1">{course.title}</h3>
                <p className="text-gray-600 mb-3 text-sm line-clamp-1">{course.description}</p>
                
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center">
                    <Check size={14} className="text-primary mr-1 flex-shrink-0" />
                    <span className="text-gray-700">{course.hoursContent}</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={14} className="text-primary mr-1 flex-shrink-0" />
                    <span className="text-gray-700">{course.level}</span>
                  </div>
                </div>
                
                <Link 
                  href={`/${course.link}`} 
                  className="block text-center bg-primary text-white py-1.5 px-4 rounded-md hover:bg-primary-hover transition-colors text-sm font-medium"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};