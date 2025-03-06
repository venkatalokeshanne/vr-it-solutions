import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { urlForImage } from "../components/urlForImage";
import CourseDetailsWrapper from "../components/CourseDetailsWrapper/CourseDetailsWrapper";
// Import CourseDetailsWrapper instead of the direct component

// 1. Generate static paths for all courses
export async function generateStaticParams() {
  const courses = await client.fetch(`*[_type == "courseImage"] { link }`);
  return courses.map((course) => ({
    category: course.link,
  }));
}

// 2. Generate metadata for SEO
export async function generateMetadata({ params }) {
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
      'bangalore',
      'mumbai',
      'pune',
      'chennai',
      'delhi',
      'kolkata',
      ...skills
    ].filter(Boolean).join(', '),
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
          }]
        : [],
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
    }
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

    // Prepare course schema for script tag
    const courseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: Array.isArray(course.description) 
        ? course.description.join(' ')
        : course.description || '',
      provider: {
        '@type': 'Organization',
        name: 'VR IT Solutions',
        sameAs: 'https://vr-it-solutions.vercel.app'
      },
      educationalLevel: course.level || 'Beginner to Advanced',
      ...(course.image && {
        image: urlForImage(course.image).url()
      }),
    };
    
    // Prepare breadcrumb schema
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://vr-it-solutions.vercel.app/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Courses',
          'item': 'https://vr-it-solutions.vercel.app/courses'
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': course.title,
          'item': `https://vr-it-solutions.vercel.app/${course.link}`
        }
      ]
    };

    // Create enhanced FAQs schema
    const faqsSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `What are the prerequisites for ${course.title}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: course.coursePrerequisites?.join(", ") || "Basic knowledge in the field and fundamental computer skills."
          }
        },
        {
          '@type': 'Question',
          name: `What will I learn in the ${course.title} course?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: course.learningPoints?.join(". ") || `Comprehensive skills and knowledge in ${course.title} including practical implementation.`
          }
        },
        {
          '@type': 'Question',
          name: `Is the ${course.title} course available online?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Yes, ${course.title} is available in both online and classroom training formats with expert instructors.`
          }
        }
      ]
    };
    
    return (
      <>
        {/* Move structured data scripts to page level to avoid client-component issues */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }}
        />
        
        {/* Use the wrapper component instead of direct client component */}
        <CourseDetailsWrapper courseData={course} />
      </>
    );
  } catch (error) {
    console.error("Error fetching course:", error);
    throw new Error('Failed to load course data');
  }
}