"use client";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useState, useEffect } from 'react';
import { client } from "@/lib/sanity.client";

export const Hero = () => {
  const router = useRouter();
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
  
  // Fetch headlines and subheadlines from Sanity
  useEffect(() => {
    async function fetchHeroContent() {
      try {
        // Fetch hero content from Sanity
        const query = `*[_type == "heroContent"]`;
        const result = await client.fetch(query);
        
        if (result) {
          const headlinesList = result[0].headlines;
          const subheadlinesList = result[0].subheadlines;
          console.log("Hero content saibaba:", result[0], headlinesList, subheadlinesList);
          setHeadlines(headlinesList);
          setSubheadlines(subheadlinesList);
        } else {
          // Fallback data if no content is found in Sanity
          setHeadlines([
            "Transform Your Career with Expert-Led Training",
            "Accelerate Your Growth with Industry-Ready Skills"
          ]);
          setSubheadlines([
            "Gain in-demand skills with our industry-focused courses.",
            "Master cutting-edge technologies with hands-on training."
          ]);
        }
      } catch (err) {
        console.error("Error fetching hero content:", err);
        // Fallback data in case of error
        setHeadlines([
          "Transform Your Career with Expert-Led Training",
          "Accelerate Your Growth with Industry-Ready Skills"
        ]);
        setSubheadlines([
          "Gain in-demand skills with our industry-focused courses.",
          "Master cutting-edge technologies with hands-on training."
        ]);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchHeroContent();
  }, []);
  
  // Text rotation effect - only start once content is loaded
  useEffect(() => {
    if (isLoading || headlines.length === 0) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // After fade-out animation completes, update the text
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length);
        setIsAnimating(false);
      }, 500); // Half a second for fade out
      
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, [isLoading, headlines.length]);

  // Organization structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "VR IT Solutions",
    "foundingDate": "2015",
    "description": "Transform Your Career with Expert-Led Training at VR IT Solutions. Industry-focused courses with proven placement success.",
    "url": "https://vr-it-solutions.vercel.app",
    "telephone": "+91-9032734343",
    "email": "info@vritsol.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "postalCode": "500016",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "15000",
      "bestRating": "5"
    },
    "knowsAbout": [
      "IT Training",
      "Software Development",
      "Professional Development",
      "Career Transformation"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Training Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Expert-Led Training Programs",
            "description": "Industry-focused courses with placement assistance"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/vritsolutions",
      "https://twitter.com/vritsolutions",
      "https://www.linkedin.com/company/vr-it-solutions"
    ]
  };

  // Statistics structured data
  const statsSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "VR IT Solutions Statistics",
    "description": "Key performance metrics of VR IT Solutions",
    "variableMeasured": stats.map(stat => ({
      "@type": "PropertyValue",
      "name": stat.label,
      "value": stat.value
    }))
  };

  // Function to split headline for styling "with" part
  const splitHeadline = (headline) => {
    if (!headline) return { first: '', second: '' };
    if (!headline.includes(' with ')) return { first: headline, second: '' };
    
    const parts = headline.split(' with ');
    return {
      first: parts[0],
      second: `with ${parts[1]}`
    };
  };

  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-primary/90 min-h-[85vh] flex items-center">
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="stats-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(statsSchema) }}
      />
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

              {/* Main Heading with animation */}
              <div className="min-h-[80px]">
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

            {/* Subheadline with animation */}
            <div className="min-h-[80px]">
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

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg font-medium transition-all duration-200" onClick={()=> router.push("/courses")}>
                <div className="flex items-center gap-2">
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
                </div>
              </button>
              <button className="group bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-medium backdrop-blur-sm transition-all duration-200 border border-white/20" onClick={() => router.push("/contactus")}>
                <div className="flex items-center gap-2">
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
                </div>
              </button>
            </div>

            {/* Contact Details */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-gray-300">
                {/* Phone */}
                <div className="flex items-center gap-3 group">
                  <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <PhoneIcon className="h-5 w-5" />
                  </div>
                  <span className="truncate group-hover:text-white transition-colors">
                    +91-9032734343
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 group">
                  <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <MailIcon className="h-5 w-5" />
                  </div>
                  <span className=" group-hover:text-white transition-colors">
                    info@vritsol.com
                  </span>
                </div>

                {/* Address */}
                <div className="flex items-center gap-3 group">
                  <div className="shrink-0 p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    <MapPinIcon className="h-5 w-5" />
                  </div>
                  <span className="truncate group-hover:text-white transition-colors">
                    Hyderabad, India - 500016
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Stats */}
            <div className="lg:hidden pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
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

          {/* Desktop Stats */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
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
    </div>
  );
};