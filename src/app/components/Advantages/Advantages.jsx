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
      description: 'Choose from online, classroom, or corporate training tailored to your needs.',
      icon: <Laptop className="h-6 w-6" />,
    },
    {
      title: 'Industry Expert Trainers',
      description: 'Learn directly from professionals with extensive real-world experience.',
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: 'Hands-on Experience',
      description: 'Master skills through practical projects and real-world applications.',
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: 'Career-Focused Training',
      description: 'Curriculum designed to meet current industry requirements.',
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: 'Innovative Methodology',
      description: 'Accelerated learning through proven teaching techniques.',
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: 'Lifetime Support',
      description: 'Ongoing assistance and placement support for career growth.',
      icon: <HandshakeIcon className="h-6 w-6" />,
    },
  ];

  return (
    <section className="py-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
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