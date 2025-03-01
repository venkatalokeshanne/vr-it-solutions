"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "next-sanity";
import { CalendarIcon, ArrowRight } from "lucide-react";

// Initialize the Sanity client
const client = createClient({
  projectId: "lkk4d792",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: true,
});

// Format date for blog posts
const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const FeaturedBlogs = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    // Fetch all blog posts
    async function fetchFeaturedBlogs() {
      try {
        // GROQ query to get all blog posts
        const query = `*[_type == "post"] | order(publishedAt desc)[0...9]{
          _id,
          title,
          slug,
          excerpt,
          publishedAt,
          mainImage {
            asset-> {
              _id,
              url
            },
            alt
          },
          "categories": *[_type == "category" && _id in ^.categories[]._ref]{
            title,
            slug,
            color
          }
        }`;

        const blogs = await client.fetch(query);
        setFeaturedBlogs(blogs);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFeaturedBlogs();
  }, []);

  // Setup auto-scroll functionality
  useEffect(() => {
    if (featuredBlogs.length <= 3) return;

    const numberOfSlides = Math.ceil(featuredBlogs.length / 3);
    
    const autoScroll = () => {
      const nextSlide = (currentSlide + 1) % numberOfSlides;
      setCurrentSlide(nextSlide);
      if (sliderRef.current) {
        sliderRef.current.scrollTo({
          left: sliderRef.current.offsetWidth * nextSlide,
          behavior: 'smooth',
        });
      }
    };
    
    // Auto-scroll every 5 seconds
    autoPlayRef.current = setInterval(autoScroll, 5000);
    
    // Clean up interval on unmount
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, featuredBlogs.length]);

  // Handle manual scroll
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const slideWidth = sliderRef.current.offsetWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      if (newSlide !== currentSlide) {
        setCurrentSlide(newSlide);
        
        // Reset auto-scroll timer when manually scrolled
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
          autoPlayRef.current = setInterval(() => {
            const numberOfSlides = Math.ceil(featuredBlogs.length / 3);
            const nextSlide = (currentSlide + 1) % numberOfSlides;
            setCurrentSlide(nextSlide);
            sliderRef.current.scrollTo({
              left: sliderRef.current.offsetWidth * nextSlide,
              behavior: 'smooth',
            });
          }, 5000);
        }
      }
    }
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest From Our Blog
            </h2>
            <div className="mt-4 w-24 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest articles, tutorials, and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden animate-pulse">
                <div className="h-40 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (featuredBlogs.length === 0) {
    return null;
  }

  // Calculate the number of slides
  const numberOfSlides = Math.ceil(featuredBlogs.length / 3);

  return (
    <section className=" bg-gray-50 mt-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Latest From Our Blog
          </h2>
          <div className="mt-4 w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our latest articles, tutorials, and insights
          </p>
        </div>

        <div className="relative">
          {/* Blog slider */}
          <div 
            ref={sliderRef} 
            onScroll={handleScroll} 
            className="overflow-x-scroll no-scrollbar snap-x snap-mandatory" 
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="flex w-[100%] md:w-full">
              {Array.from({ length: numberOfSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="min-w-full grid grid-cols-1 md:grid-cols-3 gap-6 snap-start"
                >
                  {featuredBlogs.slice(slideIndex * 3, slideIndex * 3 + 3).map((blog) => (
                    <Link
                      key={blog._id}
                      href={`/blogs/${blog.slug.current}`}
                      className="group bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={blog.mainImage?.asset?.url || "/images/placeholder-blog.jpg"}
                          alt={blog.mainImage?.alt || blog.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        {blog.categories && blog.categories.length > 0 && (
                          <span className="absolute top-2 left-2 px-2 py-1 bg-primary/90 text-white text-xs font-medium rounded-sm">
                            {blog.categories[0].title}
                          </span>
                        )}
                      </div>

                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {blog.title}
                        </h3>
                        
                        {/* Added excerpt */}
                        <p className="text-sm text-gray-600 mb-3 line-clamp-3 flex-grow">
                          {blog.excerpt || "Read the latest insights from our blog on this topic..."}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm mt-auto">
                          <div className="flex items-center text-gray-500">
                            <CalendarIcon size={14} className="mr-1" />
                            <span>{formatDate(blog.publishedAt)}</span>
                          </div>
                          
                          <span className="text-primary font-medium flex items-center text-xs">
                            Read more
                            <ArrowRight size={12} className="ml-1" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          {numberOfSlides > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: numberOfSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Reset auto-scroll timer when manually changing slides
                    if (autoPlayRef.current) {
                      clearInterval(autoPlayRef.current);
                    }
                    
                    setCurrentSlide(index);
                    sliderRef.current.scrollTo({
                      left: sliderRef.current.offsetWidth * index,
                      behavior: 'smooth',
                    });
                    
                    // Restart auto-scroll
                    autoPlayRef.current = setInterval(() => {
                      const nextSlide = (index + 1) % numberOfSlides;
                      setCurrentSlide(nextSlide);
                      sliderRef.current.scrollTo({
                        left: sliderRef.current.offsetWidth * nextSlide,
                        behavior: 'smooth',
                      });
                    }, 5000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-primary w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center text-primary font-medium hover:underline"
          >
            View all articles
            <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>

      {/* Remove scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default FeaturedBlogs;