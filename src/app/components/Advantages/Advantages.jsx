"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  Laptop, 
  Target, 
  Lightbulb, 
  HandshakeIcon 
} from 'lucide-react';
import Script from 'next/script';

const AdvantageCard = ({ title, description, icon, index }) => (
  <motion.div
    className="group relative bg-gradient-to-r from-primary/15 via-primary/10 to-transparent backdrop-blur-sm rounded-2xl p-8 border border-primary/5 shadow-lg shadow-primary/5 hover:shadow-xl transition-all duration-300"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] transition-all duration-300 group-hover:bg-primary/10" />
    
    <div className="relative">
      <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const AdvantageOfVRITSolutions = () => {
  const advantages = [
    {
      title: 'Flexible Learning Modes',
      description: 'Select any mode of training. You can have online training, classroom training and we deliver trainings for your corporate needs too. Here you get Classroom Training and Online Training also.',
      icon: <Laptop className="h-6 w-6" />,
    },
    {
      title: '20+ Technology and Non Tech Courses',
      description: "Train your professional team from VR IT Solution's 20+ technology and Non Tech Courses. From Artificial Intelligence, Python to Data Science or from Soft skill to Digital Marketing Training.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'Hands-On Learning',
      description: "Learning can only be effective if there is a Hand-on learning knowledge available. We provide live projects and real time case studies by which it is easy to understand each and every concept practically.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: 'Get trained by Industry Experts',
      description: "Our professional trainers have real time industry experience in particular domain. We have the expert trainers with ample amount of training experience.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: 'Unique Method of Training',
      description: 'We follow some unique approach in each and every training by which we can achieve our outcome in less time. Also we focus on improving knowledge of students and professionals by easiest techniques.',
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: 'True Partnership',
      description: 'Our goal is to build an honest relationship with our valuable students, corporate team and provide them best training and business solutions with lifetime support and placements.',
      icon: <HandshakeIcon className="h-6 w-6" />,
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "VR IT Solutions",
    "description": "Industry-leading IT training institute combining expertise with innovative teaching methods",
    "url": "https://vr-it-solutions.vercel.app",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Training Advantages",
      "itemListElement": advantages.map((advantage, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": advantage.title,
          "description": advantage.description,
          "provider": {
            "@type": "EducationalOrganization",
            "name": "VR IT Solutions"
          }
        },
        "position": index + 1
      }))
    },
    "knowsAbout": advantages.map(advantage => advantage.title)
  };

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <Script
        id="advantages-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose VR IT Solutions?
          </h2>
          <p className="text-lg text-gray-600">
            We combine industry expertise with innovative teaching methods to ensure your success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              index={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageOfVRITSolutions;