"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AllCourses from "@/app/components/AllCourses/AllCourses";
import { Search, BookOpen, Users, Target } from "lucide-react";
import courses from "@/data/courses";
import Link from "next/link";

export default function Page() {
  // Get unique categories from courses
  const categories = ["All", ...new Set(courses.map(course => course.category))];
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const stats = [
    { icon: <BookOpen className="w-5 h-5" />, label: "20+ Courses", description: "Comprehensive curriculum" },
    { icon: <Users className="w-5 h-5" />, label: "Expert Trainers", description: "Industry professionals" },
    { icon: <Target className="w-5 h-5" />, label: "Job Ready", description: "Practical skills" },
  ];

  // Filter courses based on search query and selected category
  useEffect(() => {
    console.log("@saibaba", selectedCategory)
    let result = courses;
    
    if (selectedCategory !== "All") {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(course => 
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query)
      );
    }
    console.log("@saibaba", selectedCategory, result.length)
    setFilteredCourses(result);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-primary/30 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
        
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-20 -right-20 w-60 h-60 bg-primary/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Transform Your Career
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Master the latest technologies with our industry-focused training programs
            </p>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for courses..."
                className="w-full px-5 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search className="absolute right-4 top-3 text-gray-400 w-5 h-5" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20"
                >
                  <div className="flex items-center justify-center mb-2 text-primary">
                    {stat.icon}
                  </div>
                  <h3 className="text-base font-semibold">{stat.label}</h3>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={`${category}-${index}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 
                ${selectedCategory === category 
                  ? 'bg-primary text-white border-primary' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-primary hover:text-white hover:border-primary'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* All Courses Section */}
      <AllCourses courses={filteredCourses} />
    </div>
  );
}