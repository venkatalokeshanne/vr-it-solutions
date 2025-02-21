import Script from "next/script";
import { notFound } from "next/navigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import courses from "@/data/courses";

export async function generateStaticParams() {
  return courses.map((course) => ({
    category: course.link,
  }));
}

export async function generateMetadata({ params }) {
  // Wait for params to be available
  const category = await params.category;
  const course = courses.find(course => course.link === category);

  if (!course) {
    notFound();
  }

  const fullUrl = `https://vr-it-solutions.vercel.app/${category}`;
const imageUrl = `https://vr-it-solutions.vercel.app${course.image}`

  return {
    title: course.title,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      type: "article",
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: course.title,
          type: "image/png",
        },
      ],
      siteName: "VR IT Solutions",
    },
    twitter: {
      card: "summary_large_image",
      title: course.title,
      description: course.description,
      images: [course.image],
    },
    authors: [{ name: "VR IT Solutions" }],
    keywords: [
      `${category} Training`,
      `${category} Development`,
      "IT Training",
      "Hyderabad IT Training",
      course.title,
    ],
    alternates: {
      canonical: fullUrl,
    },
  };
}

export default async function Page({ params }) {
  // Wait for params to be available
  const category = await params.category;
  const course = courses.find(course => course.link === category);

  if (!course) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "VR IT Solutions",
      sameAs: "https://vrit-solutions.vercel.app",
    },
    courseWorkload: `${course.hoursContent} hours`,
    teaches: course.learningPoints.join(", "),
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetails courseData={course} />
    </>
  );
}
