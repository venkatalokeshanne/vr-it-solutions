import React from "react";
import AdvantageOfVRITSolutions from "@/app/components/Advantages/Advantages";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import TopCategories from "@/app/components/Topcategories/Topcategories";
import FeaturedCourses from "@/app/components/FeaturedCourses/FeaturedCourses";
import { Features } from "@/app/components/Features/Features";
import { Welcome } from "@/app/components/Welcome/Welcome";
import { Hero } from "@/app/components/Hero/Hero";
import { Map } from "@/app/components/Map/Map";
import { Proficiencies } from "@/app/components/Proficiencies/Proficiencies";
import { PlacementAssistance } from "@/app/components/PlacementAssistance/PlacementAssistance";
import FeaturedBlogs from "@/app/components/FeaturedBlogs/FeaturedBlogs";
import { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Helmet } from "react-helmet"; // You might need to install this

// Define metadata for home page
export const metadata = {
  title: "VR IT Solutions | Best IT Training Institute Online & Offline in Hyderabad",
  description: "VR IT Solutions offers premier IT training courses both online and offline. Expert-led software training with placement assistance and job support in Hyderabad.",
  keywords: [
    "IT training institute", 
    "online IT courses", 
    "offline IT training", 
    "software training in Hyderabad", 
    "best IT training", 
    "software courses", 
    "IT certification", 
    "placement assistance", 
    "job support", 
    "VR IT Solutions"
  ].join(", "),
  alternates: {
    canonical: "https://vr-it-solutions.vercel.app/",
  },
  openGraph: {
    title: "VR IT Solutions | Premier IT Training Institute in Hyderabad",
    description: "Expert-led online & offline software training with placement assistance. Start your IT career with the best courses in Hyderabad.",
    url: "https://vr-it-solutions.vercel.app/",
    siteName: "VR IT Solutions",
    images: [
      {
        url: "https://vr-it-solutions.vercel.app/og-image.jpg", // Create this image for social sharing
        width: 1200,
        height: 630,
        alt: "VR IT Solutions - Best IT Training Institute",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VR IT Solutions | Best IT Training Institute Online & Offline",
    description: "Expert-led software training with placement assistance. Start your IT career journey today!",
    images: ["https://vr-it-solutions.vercel.app/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD structured data for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "VR IT Solutions",
  alternateName: "VRIT Solutions",
  url: "https://vr-it-solutions.vercel.app/",
  logo: "https://vr-it-solutions.vercel.app/logo.png",
  sameAs: [
    "https://www.facebook.com/vritsolutions",
    "https://twitter.com/vritsolutions",
    "https://www.linkedin.com/company/vr-it-solutions",
    "https://www.instagram.com/vritsolutions"
  ],
  description: "VR IT Solutions is a premier IT training institute offering both online and offline courses with expert instructors and placement assistance in Hyderabad.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Park",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.4437",
    longitude: "78.3819"
  },
  telephone: "+91-9876543210",
  email: "info@vritsolutions.com"
};

// JSON-LD structured data for local business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VR IT Solutions",
  image: "https://vr-it-solutions.vercel.app/logo.png",
  "@id": "https://vr-it-solutions.vercel.app/",
  url: "https://vr-it-solutions.vercel.app/",
  telephone: "+91-9876543210",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Tech Park",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.4437",
    longitude: "78.3819"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "18:00"
    }
  ],
  priceRange: "₹₹",
  servesCuisine: "IT Training"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does VR IT Solutions offer online training?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, VR IT Solutions offers comprehensive online training programs with live instructor-led sessions, recorded lessons, and hands-on projects. Our online courses provide the same quality education as our offline programs."
      }
    },
    {
      "@type": "Question",
      name: "What IT courses are available at VR IT Solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer a wide range of IT courses including Full Stack Development, Data Science, Cloud Computing, DevOps, Cybersecurity, AI & Machine Learning, SAP modules, and many more specialized technical programs."
      }
    },
    {
      "@type": "Question",
      name: "Does VR IT Solutions provide placement assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide comprehensive placement assistance including resume building, interview preparation, mock interviews, and direct connections with our 500+ hiring partners. Our placement rate is over 95% for students who complete our courses."
      }
    },
    {
      "@type": "Question",
      name: "Where is VR IT Solutions located in Hyderabad?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VR IT Solutions is located at 123 Tech Park in Hyderabad. We are easily accessible by public transport and have state-of-the-art classrooms for our offline training programs."
      }
    },
    {
      "@type": "Question",
      name: "Does VR IT Solutions offer job support after placement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide job support services to help recently placed students tackle real-world challenges in their new roles. Our experts offer guidance on technical problems, career advancement, and professional development."
      }
    }
  ]
};

const VRITSolutions = () => {
  return (
    <>
      {/* Structured Data for SEO */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Semantic Header with Primary Keywords */}
        <header className="sr-only">
          <h1>VR IT Solutions - Best IT Training Institute Online & Offline in Hyderabad</h1>
          <p>Expert-led software training with placement assistance and job support. Start your IT career with the best institute in Hyderabad.</p>
        </header>
        
        {/* Hero Section */}
        <Hero />
        
        {/* Welcome Section with Enhanced SEO Content */}
        <Welcome />
        
        {/* Course Categories Section */}
        <TopCategories />
        
        {/* Technical Proficiencies */}
        <Proficiencies />
        
        {/* Advantages Section */}
        <AdvantageOfVRITSolutions />
        
        {/* Placement Assistance */}
        <PlacementAssistance />
        
        {/* Featured Courses */}
        <FeaturedCourses />
        
        {/* Features */}
        <Features />
        
        {/* Testimonials for Social Proof */}
        <Testimonials />
        
        {/* Featured Blogs - Content Marketing */}
        <FeaturedBlogs />
        
        {/* Location Map */}
        <Map />

        {/* FAQ Section for SEO */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg text-gray-900">Does VR IT Solutions offer online training?</h3>
                <p className="mt-2 text-gray-600">Yes, VR IT Solutions offers comprehensive online training programs with live instructor-led sessions, recorded lessons, and hands-on projects. Our online courses provide the same quality education as our offline programs.</p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg text-gray-900">What IT courses are available at VR IT Solutions?</h3>
                <p className="mt-2 text-gray-600">We offer a wide range of IT courses including Full Stack Development, Data Science, Cloud Computing, DevOps, Cybersecurity, AI & Machine Learning, SAP modules, and many more specialized technical programs.</p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg text-gray-900">Does VR IT Solutions provide placement assistance?</h3>
                <p className="mt-2 text-gray-600">Yes, we provide comprehensive placement assistance including resume building, interview preparation, mock interviews, and direct connections with our 500+ hiring partners. Our placement rate is over 95% for students who complete our courses.</p>
              </div>
              
              {/* More FAQs that match your JSON-LD data */}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your IT Career Journey Today</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Join the best IT training institute in Hyderabad for expert-led online and offline courses with placement assistance.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/courses" 
                className="bg-primary text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-primary-hover transition-colors"
              >
                Explore Courses
              </Link>
              <Link 
                href="/contactus" 
                className="bg-white text-primary border border-primary px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Request Free Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VRITSolutions;