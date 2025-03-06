"use client";
import { motion } from "framer-motion";
import {
  BookOpen,
  Users,
  Trophy,
  Target,
  Building,
  Laptop,
  GraduationCap,
  Brain,
} from "lucide-react";
import Link from "next/link"; // Changed from redirect to Link

export const Welcome = () => {
  const highlights = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Expert Curriculum",
      description: "Designed by IIT & NIT professionals",
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: "Flexible Learning",
      description: "Online & classroom training options",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "Live Projects",
      description: "Work on real industry projects",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Placement Support",
      description: "Direct corporate connections",
    },
  ];

  return (
    <section className="py-6 md:py-10 relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center mb-6 md:mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-8"
          >
            Best Software Training Institute in Hyderabad
            <span className="block text-xl md:text-3xl text-primary mt-2">
              for best brains!
            </span>
          </motion.h1>
          
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 space-y-3"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 md:p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed text-left md:text-center">
                <span className="text-primary font-semibold block mb-2 md:inline md:mb-0">That's what we would precisely define ourselves:</span>{" "}
                In this competitive world, nothing succeeds like knowledge and knowledge is true wealth, which manifests and grows in leaps and bounds. We earnestly believe that every student or a professional, who acquires software training with us should be equipped with the necessary weapons to face the fierce competitive world and emerge victorious. For this, we leverage the best platforms and impart the latest courses in software – be it Hadoop Training, Python Training, Data Science Training, Informatica Training, Servicenow Training, SAP HANA Training, SAP MDM Training, Google Cloud Training, Azure Training or Pega Training etc., to transform you into a full fledged professional, where your success is only measured by your knowledge. So, it's time to tighten your belts to jump start your career to dizzying heights – get the best out of your investment.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-4 md:mb-2"
          >
            <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-2 text-left md:text-center">
                Our Training Programs
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                {[
                  "Hadoop",
                  "Python",
                  "Data Science",
                  "Informatica",
                  "ServiceNow",
                  "SAP HANA",
                  "SAP MDM",
                  "Google Cloud",
                  "Azure",
                  "Pega",
                ].map((course, index) => (
                  <div
                    key={index}
                    className="bg-white px-3 py-2 md:px-4 md:py-3 rounded-lg border border-gray-100 text-gray-600 hover:text-primary hover:border-primary/20 transition-colors text-sm md:text-base text-center"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-6 md:mb-8"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 md:p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-lg md:text-2xl font-medium text-gray-900 mb-2 text-left md:text-center">
                Ready to Launch Your Career?
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-left md:text-center">
                Jump start your journey to dizzying heights – get the best out
                of your investment.
              </p>
              <div className="flex justify-center">
                {/* Changed from button with redirect to Link */}
                <Link 
                  href="/contactus"
                  className="bg-primary hover:bg-primary-dark text-white px-6 md:px-8 py-2 md:py-3 rounded-lg transition-colors w-full md:w-auto text-center"
                >
                  Start Your Journey Today
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-6 md:mb-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-md md:shadow-lg hover:shadow-xl hover:border-primary/20 transition-all"
            >
              <div className="text-primary mb-3 md:mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-transparent p-4 md:p-8 rounded-2xl backdrop-blur-sm"
        >
          <h2 className="text-xl md:text-2xl font-bold text-black mb-4 md:mb-6">
            What makes us unique?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-2 md:gap-3 text-black">
                <Target className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-1" />
                <span className="text-sm md:text-base">
                A comprehensive curriculum for various courses, designed by Industry experts and academicians from IITs and NITs.
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-black">
                <BookOpen className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-1" />
                <span className="text-sm md:text-base">
                A unique learning pedagogy, where training is mostly imparted through vigorous theory sessions, supplemented by state-of-the art practical sessions
                </span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-black">
                <Users className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-1" />
                <span className="text-sm md:text-base">
                Choose either of the modes: classroom or online training – as per your convenience
                </span>
              </li>
            </ul>
            <ul className="space-y-4 mt-4 md:mt-0">
              <li className="flex items-start gap-2 md:gap-3 text-black">
                <Trophy className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-1" />
                <span className="text-sm md:text-base">No defined frontiers – learn from anywhere, anytime.</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-black">
                <Building className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-1" />
                <span className="text-sm md:text-base">Affordable fees – worth it considering the huge value you would derive once you put your theory into practice</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3 text-black">
                <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-1" />
                <span className="text-sm md:text-base">Live projects to help you understand the latest industry trends, project execution methodology and more to make you a seasoned IT professional. Placement assistance to deserving candidates in reputed companies. And much more…</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};