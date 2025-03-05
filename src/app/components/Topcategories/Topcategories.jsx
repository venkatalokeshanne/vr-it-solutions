"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // Added Next.js Image import
import { client } from "@/lib/sanity.client";
import { urlForImage } from '../urlForImage';

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

      {/* Image Container - Changed to Next.js Image */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={image} 
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
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
  const [topCategories, setTopCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrendingCourses() {
      try {
        setIsLoading(true);
        // Query trending courses from Sanity
        const query = `*[_type == "courseImage" && trending != null] | order(trending asc)[0...4]`;
        const result = await client.fetch(query);
        
        if (result && result.length > 0) {
          const formattedCategories = result.map(course => ({
            name: course.courseName || course.title,
            students: "10K+", // Default value since Sanity doesn't have this field
            ranking: course.trending,
            image: course.image ? urlForImage(course.image).url() : "https://via.placeholder.com/400x300?text=No+Image", // Add () to call the url method
            link: `/${course.link}`
          }));
          
          setTopCategories(formattedCategories);
        }
      } catch (err) {
        console.error("Error fetching trending courses:", err);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchTrendingCourses();
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trending Software Training Courses</h2>
            <p className="mt-2 text-gray-600">Are you looking to start a new learning journey? If yes, one should surely take Best Software Training Courses in Hyderabad at VR IT solutions to get the best job support & placement in reputed companies.</p>
          </div>
          <Link 
            href="/courses" 
            className="hidden sm:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {isLoading ? (
          // Loading skeleton
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl bg-white border border-gray-100 shadow-md animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="flex items-center justify-between">
                    <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topCategories.map((category) => (
              <CategoryCard key={category.name + category.ranking} {...category} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TopCategories;