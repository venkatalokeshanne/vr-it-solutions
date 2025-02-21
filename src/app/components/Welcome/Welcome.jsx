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
import { redirect } from "next/navigation";

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
    <section className="py-10 relative overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            Best Software Training Institute in Hyderabad
            <span className="block text-2xl md:text-3xl text-primary mt-2">
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
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="text-primary font-semibold">Our Mission:</span>{" "}
                In this competitive world, nothing succeeds like knowledge - the
                true wealth that manifests and grows in leaps and bounds.We
                empower every student and professional with the weapons needed
                to emerge victorious in the fierce competitive world.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-2"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Our Training Programs
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
                    className="bg-white px-4 py-3 rounded-lg border border-gray-100 text-gray-600 hover:text-primary hover:border-primary/20 transition-colors"
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
            className="mb-8"
          >
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 rounded-2xl backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-medium text-gray-900 mb-2">
                Ready to Launch Your Career?
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Jump start your journey to dizzying heights – get the best out
                of your investment.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg transition-colors" onClick={()=> redirect("/contactus")}>
                Start Your Journey Today
              </button>
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-white rounded-xl border border-gray-100 shadow-lg hover:shadow-xl hover:border-primary/20 transition-all"
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-primary/10 to-transparent p-8 rounded-2xl backdrop-blur-sm"
        >
          <h2 className="text-2xl font-bold text-black mb-6">
            What makes us unique?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-black">
                <Target className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>
                  Comprehensive curriculum designed by industry experts
                </span>
              </li>
              <li className="flex items-start gap-3 text-black">
                <BookOpen className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>
                  Unique learning pedagogy with theory and practical sessions
                </span>
              </li>
              <li className="flex items-start gap-3 text-black">
                <Users className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>
                  Learn from anywhere, anytime with flexible schedules
                </span>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-black">
                <Trophy className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Live projects with latest industry trends</span>
              </li>
              <li className="flex items-start gap-3 text-black">
                <Building className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Placement assistance in reputed companies</span>
              </li>
              <li className="flex items-start gap-3 text-black">
                <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-1" />
                <span>Affordable fees with maximum value</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
