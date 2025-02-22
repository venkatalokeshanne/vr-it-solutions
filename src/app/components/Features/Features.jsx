"use client";
import { motion } from "framer-motion";
import Script from "next/script";
import {
    Book,
    Building2,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Code,
    Globe,
    Heart,
    Monitor,
    Play,
} from "lucide-react";

export const Features = () => {
  // Define features array outside JSX for reuse in structured data
  const features = [
    {
      icon: <Play className="h-12 w-12" />,
      title: "Learn at your own pace",
      description: "Access courses on your schedule"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Access anywhere",
      description: "Learn on any device, anytime"
    },
    {
      icon: <Book className="h-12 w-12" />,
      title: "Expert instruction",
      description: "Find the right instructor for you"
    }
  ];

  // Create structured data for features
  const featuresStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": features.map((feature, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Thing",
        "name": feature.title,
        "description": feature.description
      }
    })),
    "numberOfItems": features.length,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://vr-it-solutions.vercel.app/#features"
    }
  };

  // Create organization structured data with features as offerings
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "VR IT Solutions",
    "url": "https://vr-it-solutions.vercel.app",
    "sameAs": "https://vr-it-solutions.vercel.app",
    "offers": features.map(feature => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": feature.title,
        "description": feature.description
      }
    }))
  };

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <Script
        id="features-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresStructuredData) }}
      />
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
      />
      
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group text-center p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};