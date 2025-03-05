"use client";
import { useState, useEffect, use } from "react";
import { notFound, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { client } from "@/lib/sanity.client";

const CourseDetails = dynamic(
  () => import("@/app/components/CourseDetails/CourseDetails"),
  { ssr: false } // Changed to false since we're doing client-side data fetching
);

export default function Page({ params }) {
  const router = useRouter();
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use React.use to unwrap params if it's a Promise
  const resolvedParams = typeof params.then === 'function' ? use(params) : params;
  const category = resolvedParams.category;

  useEffect(() => {
    async function fetchCourse() {
      try {
        setIsLoading(true);
        // Query to find a course by its link
        const query = `*[_type == "courseImage" && link == $category][0]`;
        const result = await client.fetch(query, { category });
        
        if (!result) {
          // Course not found
          notFound();
          return;
        }
        console.log("Course data saibaba:", result);
        setCourse(result);
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Failed to load course data");
      } finally {
        setIsLoading(false);
      }
    }
    
    if (category) {
      fetchCourse();
    }
  }, [category]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-700">{error}</p>
          <button 
            onClick={() => router.refresh()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // If course was not found, Next.js notFound() will have redirected already

  return course ? <CourseDetails courseData={course} /> : null;
}