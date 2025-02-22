import Script from "next/script";
import { notFound } from "next/navigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import courses from "@/data/courses";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

export async function generateStaticParams() {
  return courses.map((course) => ({
    category: course.link,
  }));
}

export async function generateMetadata({ params }) {
  const category = await params.category;
  const course = courses.find(course => course.link === category);

  if (!course) {
    notFound();
  }

  const fullUrl = `https://vr-it-solutions.vercel.app/${category}`;
  const imageUrl = `https://vr-it-solutions.vercel.app${course.image}`;

  return {
    title: `${course.title} Training in Hyderabad | Best ${category} Course`,
    description: `${course.description.slice(0, 150)}... ✓ Live Projects ✓ Placement Assistance ✓ Industry Expert Training ✓ 24/7 Support`,
    openGraph: {
      title: `${course.title} | VR IT Solutions Hyderabad`,
      description: course.description,
      type: "article",
      url: fullUrl,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${course.title} Training at VR IT Solutions Hyderabad`,
        },
      ],
      siteName: "VR IT Solutions",
      locale: "en_US",
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: `${course.title} | VR IT Solutions`,
      description: course.description,
      images: [imageUrl],
      creator: "@vrit_solutions",
      site: "@vrit_solutions",
    },
    authors: [{ name: "VR IT Solutions", url: "https://vr-it-solutions.vercel.app" }],
    keywords: [
      `${category} Training in Hyderabad`,
      `${category} Course`,
      `${category} Certification`,
      `${course.title} Training`,
      `${course.title} Course in Hyderabad`,
      "IT Training Institute",
      "Software Training",
      "Corporate Training",
      "Online Training",
      "Placement Assistance",
      "Live Projects",
      course.title,
    ],
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function Page({ params }) {
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
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN"
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-XXX-XXX-XXXX",
        contactType: "customer service"
      }
    },
    courseCode: category,
    courseWorkload: `${course.hoursContent} hours`,
    teaches: course.learningPoints.join(", "),
    educationalCredentialAwarded: "Course Completion Certificate",
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["online", "onsite"],
      courseWorkload: `${course.hoursContent} hours`,
      location: {
        "@type": "Place",
        name: "VR IT Solutions Training Center",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hyderabad",
          addressRegion: "Telangana",
          addressCountry: "IN"
        }
      }
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "INR",
      validFrom: new Date().toISOString()
    }
  };

  return (
    <ErrorBoundary>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetails courseData={course} />
    </ErrorBoundary>
  );
}