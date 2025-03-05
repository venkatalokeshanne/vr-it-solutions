import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import CourseDetails from "@/app/components/CourseDetails/CourseDetails";
import { urlForImage } from "@/app/components/urlForImage";
import { Metadata, ResolvingMetadata } from 'next';

// 1. Generate static paths for all courses
export async function generateStaticParams() {
  const courses = await client.fetch(`*[_type == "courseImage"] { link }`);
  return courses.map((course) => ({
    category: course.link,
  }));
}

// 2. Generate metadata for SEO
export async function generateMetadata({ params }, parent) {
  const { category } = params;
  
  // Fetch course data
  const course = await client.fetch(
    `*[_type == "courseImage" && link == $category][0]`,
    { category }
  );
  
  if (!course) {
    return {
      title: 'Course Not Found',
      description: 'The requested course could not be found',
    };
  }

  // Base metadata from parent
  const previousImages = (await parent).openGraph?.images || [];

  // Calculate reading time
  const description = Array.isArray(course.description) 
    ? course.description.join(' ')
    : course.description || '';
  
  // Extract main skills (for keywords)
  const skills = course.skills?.map(skill => skill.trim()) || [];
  
  return {
    title: `${course.title} Course | VR IT Solutions`,
    description: description.substring(0, 160) + (description.length > 160 ? '...' : ''),
    keywords: [
      course.title,
      'IT training',
      'software course',
      'technology education',
      'online learning',
      'VR IT Solutions',
      'Hyderabad',
      'India',
      'skills training',
      'banglore',
      'mumbai',
      'pune',
      'chennai',
      'delhi',
      'kolkata',
      course.description,
      ...skills
    ].join(', '),
    openGraph: {
      title: `${course.title} - Learn from Industry Experts | VR IT Solutions`,
      description: description.substring(0, 160) + (description.length > 160 ? '...' : ''),
      url: `https://vr-it-solutions.vercel.app/${course.link}`,
      siteName: 'VR IT Solutions',
      images: course.image 
        ? [{
            url: urlForImage(course.image).url(),
            width: 1200,
            height: 630,
            alt: course.title,
          }, ...previousImages]
        : previousImages,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: description.substring(0, 160) + (description.length > 160 ? '...' : ''),
      images: course.image ? [urlForImage(course.image).url()] : [],
    },
    alternates: {
      canonical: `https://vr-it-solutions.vercel.app/${course.link}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    // Add structured data for courses
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: course.title,
        description: description,
        provider: {
          '@type': 'Organization',
          name: 'VR IT Solutions',
          sameAs: 'https://vr-it-solutions.vercel.app'
        },
        educationalLevel: course.level || 'Beginner to Advanced',
        ...(course.image && {
          image: urlForImage(course.image).url()
        }),
      }),
    },
  };
}

// 3. Page component with static rendering
export default async function Page({ params }) {
  const { category } = params;
  
  try {
    // Fetch course data with ISR caching
    const course = await client.fetch(
      `*[_type == "courseImage" && link == $category][0]`,
      { category },
      { next: { revalidate: 3600 } } // Revalidate once per hour
    );
    
    if (!course) {
      notFound();
    }
    
    return <CourseDetails courseData={course} />;
  } catch (error) {
    console.error("Error fetching course:", error);
    throw new Error('Failed to load course data');
  }
}