"use client";
import React, { useEffect, useState } from "react";
import Script from "next/script";

const Testimonial = ({ testimonial, isActive }) => (
  <div
    className={`absolute top-0 left-0 w-full transition-all duration-500 transform ${
      isActive ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
    }`}
  >
    <div className="bg-gradient-to-r from-primary-light to-primary-light/50 rounded-2xl p-8 relative">
      <div className="absolute top-4 left-4 text-primary opacity-20">
        {/* ... existing quote SVG ... */}
      </div>
      <div className="relative z-10">
        <p className="italic text-gray-700 mb-4">{testimonial.quote}</p>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-hover rounded-full flex items-center justify-center text-white font-bold">
            {testimonial.author[0]}
          </div>
          <div className="ml-3">
            <div className="font-medium text-gray-900">{testimonial.author}</div>
            <div className="text-sm text-gray-600">{testimonial.role}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialCarousel = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Structured data for testimonials
  const testimonialStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VR IT Solutions",
    "review": testimonials.map((testimonial, index) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": testimonial.author
      },
      "reviewBody": testimonial.quote,
      "position": index + 1,
      "datePublished": new Date().toISOString().split('T')[0],
      "publisher": {
        "@type": "Organization",
        "name": "VR IT Solutions",
        "sameAs": "https://vr-it-solutions.vercel.app"
      }
    })),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": testimonials.length.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="mt-16 relative h-[225px]">
      <Script
        id="testimonials-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialStructuredData) }}
      />
      
      {testimonials.map((testimonial, index) => (
        <Testimonial
          key={index}
          testimonial={testimonial}
          isActive={index === activeIndex}
        />
      ))}
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-primary" : "bg-gray-300"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;