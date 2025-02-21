"use client";
import React from 'react';
import { FaUserGraduate, FaChalkboardTeacher, FaHands } from 'react-icons/fa';
import { BsCardList } from 'react-icons/bs';

const AdvantageCard = ({ title, description, icon }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105">
    <div className="bg-pink-500 text-white p-4 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AdvantageOfVRITSolutions = () => {
    const advantages = [
        {
          title: 'Flexible Modes',
          description: 'Select any mode of training - online, classroom, or delivered for your corporate needs.',
          icon: <FaUserGraduate className="h-8 w-8" />,
        },
        {
          title: 'Expert Instructors',
          description: 'Learn from industry experts with years of practical experience.',
          icon: <FaChalkboardTeacher className="h-8 w-8" />,
        },
        {
          title: 'Hands-on Training',
          description: 'Get practical experience with real-world projects and exercises.',
          icon: <FaHands className="h-8 w-8" />,
        },
        {
            title: 'Industry Experts',
            description: 'Learn from trainers with real-world experience in your domain.',
            icon: <BsCardList className="h-8 w-8" />,
          },
          {
            title: 'Unique Approach',
            description: 'Our training methods help you achieve outcomes in less time.',
            icon: <BsCardList className="h-8 w-8" />,
          },
          {
            title: 'True Partnership',
            description: 'We build honest relationships and provide lifetime support and placements.',
            icon: <BsCardList className="h-8 w-8" />,
          },
        // ...existing code...
      ];

  return (
    <div className="bg-gray-50 mb-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Advantage of VRIT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvantageOfVRITSolutions;