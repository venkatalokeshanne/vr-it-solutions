"use client";
import React from "react";
import AdvantageOfVRITSolutions from "@/app/components/Advantages/Advantages";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import TopCategories from "@/app/components/Topcategories/Topcategories";
import FeaturedCourses from "@/app/components/FeaturedCourses/FeaturedCourses";
import { Features } from "@/app/components/Features/Features";
import { Welcome } from "@/app/components/Welcome/Welcome";
import { Hero } from "@/app/components/Hero/Hero";
import { Map } from "@/app/components/Map/Map";

const VRITSolutions = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />
      {/* Trusted Companies */}
      <Welcome />
      {/* Top Categories */}
      <TopCategories />
      {/* Advantages */}
      <AdvantageOfVRITSolutions />
      {/* Featured Courses */}
      <FeaturedCourses />
      {/* Features Section */}
      <Features />
      {/* Testimonials */}
      <Testimonials />
      <Map />
      {/* Footer */}
    </div>
  );
};

export default VRITSolutions;
