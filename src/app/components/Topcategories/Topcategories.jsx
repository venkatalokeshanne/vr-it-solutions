"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import courses from '@/data/courses';

const CategoryCard = ({ name, students, image, ranking, link }) => (
  <Link href={link}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300"
    >
      {/* Ranking Badge */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-primary text-sm font-medium">
          <TrendingUp className="w-4 h-4" />
          <span>Trending {ranking}</span>
        </div>
      </div>

      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-50 transition-opacity" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span className="text-sm">{students} Students</span>
          </div>
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">4.8</span>
          </div>
        </div>

        {/* Hover Action */}
        <div className="absolute right-6 bottom-6 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
          <div className="p-2 rounded-full bg-primary text-white">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  </Link>
);

const TopCategories = () => {
  // Filter and sort courses by trending property
  const topCategories = courses
    .filter(course => course.trending)
    .sort((a, b) => a.trending - b.trending)
    .slice(0, 4)
    .map(course => ({
      name: course.course,
      students: course.students || "10K+",
      ranking: course.trending,
      image: course.image || "https://images.unsplash.com/photo-1649180556628-9ba704115795?w=500&q=80",
      link: course.link
    }));

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Courses</h2>
            <p className="mt-2 text-gray-600">Master the most in-demand technologies</p>
          </div>
          <Link 
            href="/courses" 
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {topCategories.map((category) => (
            <CategoryCard key={category.name} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;