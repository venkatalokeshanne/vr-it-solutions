import React from "react";
import AdvantageOfVRITSolutions from "@/app/components/Advantages/Advantages";
import Testimonials from "@/app/components/Testimonials/Testimonials";
import TopCategories from "@/app/components/Topcategories/Topcategories";
import FeaturedCourses from "@/app/components/FeaturedCourses/FeaturedCourses";
import { Features } from "@/app/components/Features/Features";
import { Welcome } from "@/app/components/Welcome/Welcome";
import { Hero } from "@/app/components/Hero/Hero";
import { Map } from "@/app/components/Map/Map";
import { Proficiencies } from "@/app/components/Proficiencies/Proficiencies";
import { PlacementAssistance } from "@/app/components/PlacementAssistance/PlacementAssistance";
import FeaturedBlogs from "@/app/components/FeaturedBlogs/FeaturedBlogs";

const VRITSolutions = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <Hero />
      {/* Rest of your component */}
      <Welcome />
      <TopCategories />
      <Proficiencies />
      <AdvantageOfVRITSolutions />
      <PlacementAssistance />
      <FeaturedCourses />
      <Features />
      <Testimonials />
      <FeaturedBlogs />
      <Map />
    </div>
  );
};

export default VRITSolutions;