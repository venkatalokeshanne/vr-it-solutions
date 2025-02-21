"use client";
import React from "react";
import AdvantageOfVRITSolutions from "@/app/components/Advantages/Advantages";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import TopCategories from "@/app/components/Topcategories/Topcategories";
import FeaturedCourses from "@/app/components/FeaturedCourses/FeaturedCourses";
import { Fearures } from "@/app/components/Features/Features";
import { TrustedCompanies } from "@/app/components/TrustedCompanies/TrustedCompanies";
import { Hero } from "@/app/components/Hero/Hero";

const VRITSolutions = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      {/* Trusted Companies */}
      <TrustedCompanies />
      {/* Top Categories */}
      <TopCategories />
      {/* Advantages */}
      <AdvantageOfVRITSolutions />
      {/* Featured Courses */}
      <FeaturedCourses />
      {/* Features Section */}
      <Fearures />
      {/* Testimonials */}
      <Testimonials />
      {/* Footer */}
    </div>
  );
};

export default VRITSolutions;
