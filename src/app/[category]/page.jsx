"use client";
import { notFound } from "next/navigation";
import courses from "@/data/courses";
import dynamic from "next/dynamic";
import { use } from 'react';

const CourseDetails = dynamic(
  () => import("@/app/components/CourseDetails/CourseDetails"),
  { ssr: true }
);

export default function Page({ params }) {
  // Use React.use to unwrap the params Promise
  const resolvedParams = use(params);
  const category = resolvedParams.category;
  const course = courses.find((course) => course.link === category);
  
  if (!course) {
    notFound();
  }

  return <CourseDetails courseData={course} />;
}