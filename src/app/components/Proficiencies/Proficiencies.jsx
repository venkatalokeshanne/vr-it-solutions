"use client";
import React from "react";
import { Award, CheckCircle, Book, BadgeCheck, Lightbulb, Users, Trophy, FileCheck } from "lucide-react";

export const Proficiencies = () => {
  const proficiencyItems = [
    {
      text: "VR IT the software trainings we provide will give no trouble for your IT career which transforms every one of those ladders, giving instructors and trainers more control and suppleness to get their trainings across.",
      icon: <BadgeCheck className="h-6 w-6 text-primary" />
    },
    {
      text: "We define our Curriculum at VR IT with the special care so that students and trainers establish their views into a more effective way students can, inculcation on the subject by the trainers structure, but it's more important how the students are getting benefited by the very construction of the curriculum can guide students on a conventional line over the books.",
      icon: <Book className="h-6 w-6 text-primary" />
    },
    {
      text: "VR IT is summary oriented where the lectures are going to be very useful for shaping your knowledge and skills, but we will build the presentation resources for the class which gives the students better understanding.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    },
    {
      text: "VR IT is will update and work on the latest courses and the update the presentations and curriculum accordingly keeping the students' success as primary motive.",
      icon: <CheckCircle className="h-6 w-6 text-primary" />
    },
    {
      text: "VR IT had a dedicated digital media team who work continuous improvements of photos, audio recordings, PowerPoint presentations, movie clips.",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      text: "Our instructors provide additional information that is not included in the curriculum, through emails and the other sources linked with the course.",
      icon: <FileCheck className="h-6 w-6 text-primary" />
    },
    {
      text: "VR IT follows different methods in educating the students keeping them engaged in the real time activities through mock interviews and quizzes and also each student is rewarded for his/her outstanding performance.",
      icon: <Trophy className="h-6 w-6 text-primary" />
    },
    {
      text: "Instructors at VR IT will help the students in providing the right information about the certification programs and providing the extra practice material.",
      icon: <BadgeCheck className="h-6 w-6 text-primary" />
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            VR IT Training Institute Proficiencies
          </h2>
          <div className="w-24 h-1.5 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {proficiencyItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex">
                <div className="mr-4 p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-gray-700">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl shadow-md border border-gray-100/80 p-8">
          <div className="flex items-start">
            <div className="mr-5 p-4 bg-yellow-50 rounded-full border border-yellow-100 flex-shrink-0">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Special Note</h3>
              <p className="text-gray-800 leading-relaxed">
                <span className="font-medium">Note:</span> Any aspirants who is looking for help on the real time scenarios, on job support, help on the certifications, we have team of experienced and talented working consultants who can assist you on the key points to concentrate and get succeed in their tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};