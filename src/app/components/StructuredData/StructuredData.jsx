"use client";

import Script from "next/script";

export default function StructuredData({ course, category }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "VR IT Solutions",
      sameAs: "https://vrit-solutions.vercel.app",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-XXX-XXX-XXXX",
        contactType: "customer service"
      }
    },
    courseCode: category,
    courseWorkload: `${course.hoursContent} hours`,
    teaches: course.learningPoints?.join(", ") || course.title,
    educationalCredentialAwarded: "Course Completion Certificate",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "onsite"],
      courseWorkload: `${course.hoursContent} hours`,
      location: {
        "@type": "Place",
        name: "VR IT Solutions Training Center",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN"
        }
      }
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      validFrom: new Date().toISOString()
    }
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}