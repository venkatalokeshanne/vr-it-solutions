"use client";
import { motion } from "framer-motion";
import { Clock, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const AllCourses = ({courses}) => {
    console.log("@saibaba", courses)
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="group bg-gradient-to-r from-primary/15 via-primary/10 to-transparent backdrop-blur-sm rounded-2xl border border-primary/5 shadow-lg shadow-primary/5 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors mb-2">
                  {course.title}
                </h3>
                
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {course.description}
                </p>
                
                <div className="flex-1 flex flex-col justify-end mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{course.hoursContent}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Target className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>

                  <Link
                    href={`/${course.link}`}
                    className="group/btn flex items-center justify-center gap-2 w-full py-3 px-4 bg-primary/10 text-primary font-medium rounded-lg 
                      transition-all duration-300 
                      hover:bg-primary hover:text-white"
                  >
                    <span>View Course Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;