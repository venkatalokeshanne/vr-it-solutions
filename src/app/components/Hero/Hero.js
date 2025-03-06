"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import { client } from "@/lib/sanity.client";

// Import icons individually to reduce bundle size
import { Mail, MapPin, Phone } from "lucide-react";

// Move JSON-LD structured data to the server component (page.js)
// This reduces client-side JavaScript significantly

export const Hero = () => {
  const router = useRouter();
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  
  // Define stats with minimal props
  const stats = [
    { value: "15K+", label: "Students Trained" },
    { value: "95%", label: "Placement Rate" },
    { value: "20+", label: "Expert Trainers" },
    { value: "50+", label: "Corporate Clients" },
  ];

  // State for headline data
  const [headlines, setHeadlines] = useState([]);
  const [subheadlines, setSubheadlines] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Pre-define fallback content to reduce code duplication
  const fallbackHeadlines = [
    "Transform Your Career with Expert-Led Training",
    "Accelerate Your Growth with Industry-Ready Skills"
  ];
  
  const fallbackSubheadlines = [
    "Gain in-demand skills with our industry-focused courses.",
    "Master cutting-edge technologies with hands-on training."
  ];
  
  // Fetch headlines from Sanity - optimized for performance
  useEffect(() => {
    // Use a more specific query to reduce data transfer
    const fetchHeroContent = async () => {
      try {
        // Create a cache key based on date (refresh daily)
        const cacheKey = 'hero_content_' + new Date().toISOString().split('T')[0];
        
        // Try to get from localStorage first to reduce API calls
        const cached = typeof window !== 'undefined' ? localStorage.getItem(cacheKey) : null;
        
        if (cached) {
          const parsedData = JSON.parse(cached);
          setHeadlines(parsedData.headlines);
          setSubheadlines(parsedData.subheadlines);
          setIsLoading(false);
          return;
        }
        
        // Only fetch needed fields
        const query = `*[_type == "heroContent"][0]{headlines, subheadlines}`;
        const result = await client.fetch(query);
        
        if (result && result.headlines && result.headlines.length > 0) {
          setHeadlines(result.headlines);
          setSubheadlines(result.subheadlines || fallbackSubheadlines);
          
          // Cache the result
          if (typeof window !== 'undefined') {
            localStorage.setItem(cacheKey, JSON.stringify({
              headlines: result.headlines,
              subheadlines: result.subheadlines || fallbackSubheadlines
            }));
          }
        } else {
          setHeadlines(fallbackHeadlines);
          setSubheadlines(fallbackSubheadlines);
        }
      } catch (err) {
        console.error("Error fetching hero content:", err);
        setHeadlines(fallbackHeadlines);
        setSubheadlines(fallbackSubheadlines);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchHeroContent();
  }, []);
  
  // Text rotation effect - with cancelation and performance optimizations
  useEffect(() => {
    if (isLoading || headlines.length <= 1) return;
    
    let isActive = true;
    let timeoutId = null;
    
    const rotateText = () => {
      if (!isActive) return;
      
      setIsAnimating(true);
      
      // After fade-out animation completes, update the text
      timeoutId = setTimeout(() => {
        if (isActive) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
          setIsAnimating(false);
        }
      }, 500); // Half a second for fade out
    };
    
    const intervalId = setInterval(rotateText, 5000);
    
    // Cleanup function to prevent memory leaks
    return () => {
      isActive = false;
      clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isLoading, headlines.length]);

  // Pre-calculate dimensions to avoid layout shifts
  useEffect(() => {
    if (isLoading || !headlines.length) return;
    
    // Set minimum height for headline container to prevent layout shifts
    if (headlineRef.current) {
      // Find the tallest headline
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.width = `${headlineRef.current.clientWidth}px`;
      tempDiv.className = headlineRef.current.className;
      
      let maxHeight = 0;
      
      headlines.forEach(headline => {
        tempDiv.textContent = headline;
        document.body.appendChild(tempDiv);
        maxHeight = Math.max(maxHeight, tempDiv.clientHeight);
        document.body.removeChild(tempDiv);
      });
      
      // Add extra padding to be safe
      headlineRef.current.style.minHeight = `${maxHeight + 10}px`;
    }
    
    // Same for subheadlines
    if (subheadlineRef.current) {
      const tempDiv = document.createElement('div');
      tempDiv.style.position = 'absolute';
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.width = `${subheadlineRef.current.clientWidth}px`;
      tempDiv.className = subheadlineRef.current.className;
      
      let maxHeight = 0;
      
      subheadlines.forEach(subhead => {
        tempDiv.textContent = subhead;
        document.body.appendChild(tempDiv);
        maxHeight = Math.max(maxHeight, tempDiv.clientHeight);
        document.body.removeChild(tempDiv);
      });
      
      // Add extra padding
      subheadlineRef.current.style.minHeight = `${maxHeight + 5}px`;
    }
  }, [headlines, subheadlines, isLoading]);

  // Function to split headline for styling "with" part - simplified
  const splitHeadline = (headline) => {
    if (!headline) return { first: '', second: '' };
    
    const withIndex = headline.indexOf(' with ');
    if (withIndex === -1) return { first: headline, second: '' };
    
    return {
      first: headline.substring(0, withIndex),
      second: headline.substring(withIndex)
    };
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-primary/90 min-h-[85vh] flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="animate-pulse w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-white text-sm">
                Live Online Training Available
              </span>
            </div>

            <div className="space-y-4">
              {/* Company Name with Enhanced Styling */}
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                    VR IT Solutions
                  </span>
                </h2>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 text-sm font-medium text-white bg-primary/30 rounded-lg border border-primary/40">
                    Since 2015
                  </span>
                </div>
              </div>

              {/* Main Heading with animation - height preset to avoid layout shift */}
              <div 
                ref={headlineRef}
                className="min-h-[120px] sm:min-h-[100px] md:min-h-[90px]"
              >
                {isLoading ? (
                  <div className="animate-pulse h-16 bg-white/10 rounded-lg w-full"></div>
                ) : headlines.length > 0 ? (
                  <h1 className={`text-4xl md:text-6xl font-bold text-white leading-tight transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {splitHeadline(headlines[currentIndex]).first}{" "}
                    {splitHeadline(headlines[currentIndex]).second && (
                      <span className="relative">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-hover">
                          {splitHeadline(headlines[currentIndex]).second}
                        </span>
                        <span className="absolute inset-x-0 bottom-0 h-3 bg-primary/10 -rotate-1"></span>
                      </span>
                    )}
                  </h1>
                ) : (
                  <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                    Transform Your Career with Training
                  </h1>
                )}
              </div>
            </div>

            {/* Subheadline with animation - height preset to avoid layout shift */}
            <div 
              ref={subheadlineRef}
              className="min-h-[60px] sm:min-h-[50px]"
            >
              {isLoading ? (
                <div className="animate-pulse h-10 bg-white/10 rounded-lg w-3/4"></div>
              ) : subheadlines.length > 0 ? (
                <p className={`text-lg md:text-xl text-gray-300 max-w-xl transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  {subheadlines[currentIndex]}
                </p>
              ) : (
                <p className="text-lg md:text-xl text-gray-300 max-w-xl">
                  Gain in-demand skills with our industry-focused courses. Join thousands of successful professionals.
                </p>
              )}
            </div>

            {/* CTA Buttons - Using Links instead of buttons with onClick for better performance */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/courses"
                className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
              >
                Start Learning
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
              </Link>
              <Link 
                href="/contactus"
                className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm transition-all duration-200 border border-white/20 flex items-center gap-2"
              >
                Schedule Consultation
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </Link>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
                {/* Phone */}
                <div className="flex items-center gap-3 group">
                  <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="truncate group-hover:text-white transition-colors">
                    +91-9032734343
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 group">
                  <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className=" group-hover:text-white transition-colors">
                    info@vritsol.com
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3 group">
                  <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="truncate group-hover:text-white transition-colors">
                    Hyderabad, India - 500016
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Stats - With pre-defined height to prevent layout shift */}
            <div className="lg:hidden pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                    style={{ height: '90px' }}
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Stats - With pre-defined height to prevent layout shift */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
                  style={{ height: '120px' }}
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;