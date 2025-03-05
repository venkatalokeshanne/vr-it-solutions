"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { client } from "@/lib/sanity.client";
import { urlForImage } from '../urlForImage';

export const RelatedCourses = ({ currentCourseId }) => {
  const pathname = usePathname();
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollContainerRef = useRef(null);
  
  // Get the current course link from pathname
  const getCurrentCourseLink = () => {
    // For paths like "/course-name", extract "course-name"
    return pathname.substring(1);
  };
  
  useEffect(() => {
    async function fetchCourses() {
      try {
        setIsLoading(true);
        const currentLink = getCurrentCourseLink();
        
        // Fetch all courses except the current one
        const query = `*[_type == "courseImage" && link != $currentLink] | order(title asc)`;
        const result = await client.fetch(query, { currentLink });
        
        if (result && result.length > 0) {
          // Make sure we have enough items for a continuous scroll
          let availableCourses = [...result];
          
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
        }
      } catch (err) {
        console.error("Error fetching related courses:", err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchCourses();
  }, [pathname]);

  // Auto-scrolling effect (keeping your existing implementation)
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
  
  if (isLoading) {
    return (
      <section className="bg-gray-50 overflow-hidden py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Popular Courses</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Enhance your career with our industry-focused training programs
            </p>
          </div>
          
          <div className="flex gap-5 pb-2 overflow-hidden">
            {[1, 2, 3, 4, 5].map((item) => (
              <div 
                key={item} 
                className="flex-shrink-0 w-[260px] md:w-[300px] bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="h-36 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/3"></div>
                  </div>
                  <div className="h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  if (courses.length === 0) {
    return null; // Don't show the section if there are no courses
  }
  
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
              key={`${course._id}-${index}`} 
              className="flex-shrink-0 w-[260px] md:w-[300px] bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Make image clickable */}
              <Link 
                href={`/${course.link}`}
                className="relative block h-36 overflow-hidden group"
              >
                {course.image ? (
                  <Image 
                    src={urlForImage(course.image).url()} 
                    alt={course.title}
                    fill
                    className="mx-auto h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">No image available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </Link>
              
              <div className="p-4">
                {/* Make title clickable */}
                <Link href={`/${course.link}`} className="block">
                  <h3 className="font-bold text-lg mb-1 text-gray-900 line-clamp-1 hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-3 text-sm line-clamp-1">
                  {Array.isArray(course.description) && course.description.length > 0
                    ? course.description[0]
                    : "No description available"}
                </p>
                
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center">
                    <Check size={14} className="text-primary mr-1 flex-shrink-0" />
                    <span className="text-gray-700">{course.hoursContent || "N/A"}</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={14} className="text-primary mr-1 flex-shrink-0" />
                    <span className="text-gray-700">{course.level || "All Levels"}</span>
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