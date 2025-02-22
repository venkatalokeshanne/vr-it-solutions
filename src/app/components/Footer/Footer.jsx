"use client";
import Link from "next/link";
import Script from "next/script";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Youtube,
} from "lucide-react";
import courses from "@/data/courses";
import { protectEmail } from "@/app/util";

const Footer = () => {
  const topCategories = courses
    .filter((course) => course.trending)
    .sort((a, b) => a.trending - b.trending)
    .slice(0, 5)
    .map((course) => ({
      name: course.course,
      students: course.students || "10K+",
      ranking: course.trending,
      image: course.image ||
        "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=500&q=80",
      link: course.link,
    }));

  // Organization structured data
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "VR IT Solutions",
    "description": "A premier software training institute in Hyderabad offering comprehensive online and classroom training programs.",
    "url": "https://vr-it-solutions.vercel.app",
    "logo": "https://vr-it-solutions.vercel.app/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet",
      "addressLocality": "Hyderabad",
      "postalCode": "500016",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9032734343",
      "contactType": "customer service",
      "email": "info@vritsol.com"
    },
    "sameAs": [
      "https://www.facebook.com/vritsolutions/",
      "https://twitter.com/vritsolutions",
      "https://www.youtube.com/channel/UCNbaPhgRjVUDcJSh70X-ZtA"
    ],
    "makesOffer": topCategories.map(course => ({
      "@type": "Course",
      "name": course.name,
      "url": `https://vr-it-solutions.vercel.app/${course.link}`,
      "provider": {
        "@type": "EducationalOrganization",
        "name": "VR IT Solutions"
      }
    }))
  };

  // Local business structured data
  const localBusinessStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "VR IT Solutions",
    "image": "https://vr-it-solutions.vercel.app/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet",
      "addressLocality": "Hyderabad",
      "postalCode": "500016",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4374",
      "longitude": "78.4487"
    },
    "url": "https://vr-it-solutions.vercel.app",
    "telephone": "+91-9032734343",
    "openingHours": "Mo-Sa 09:00-18:00"
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-950 text-gray-300 overflow-hidden">
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      <Script
        id="local-business-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />{/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-bold">VR IT Solutions</h3>
            <p className="text-gray-400 leading-relaxed">
              A premier software training institute in Hyderabad offering
              comprehensive online and classroom training programs. We've
              successfully trained and placed thousands of professionals in
              leading MNCs including Infosys, Wipro, Accenture, Deloitte,
              Cognizant, and Capgemini, launching countless successful careers
              in IT.
            </p>
            <div className="flex space-x-5">
              {[
                {
                  icon: <Facebook />,
                  href: "https://www.facebook.com/vritsolutions/",
                },
                {
                  icon: <Twitter />,
                  href: "https://twitter.com/vritsolutions",
                },
                { icon: <Linkedin />, href: "#" },
                {
                  icon: <Youtube />,
                  href: "https://www.youtube.com/channel/UCNbaPhgRjVUDcJSh70X-ZtA",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="transform hover:scale-110 hover:text-primary transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { text: "Courses", href: "/courses" },
                { text: "Corporate Training", href: "/corporate-training" },
                { text: "Placements", href: "/placements" },
                { text: "About Us", href: "/aboutus" },
                { text: "Contact", href: "/contactus" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{link.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">
              Popular Courses
            </h3>
            <ul className="space-y-3">
              {topCategories.map((course, index) => (
                <li key={index}>
                  <Link
                    href={course.link}
                    className="group flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span>{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-lg font-semibold">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 mt-1 text-primary" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  506/A, Aditya Enclave, Nilagiri Block, 5th Floor, Ameerpet,
                  Hyderabad - 500016
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +91-9032734343
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                info@vritsol.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} VR IT Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
