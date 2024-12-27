import React from "react";
// import JobsListing from "../Components/CareersPage/JobsListing";
import LifeAtPantiss from "../Components/CareersPage/LifeAtPantiss";
import CareersCategory from "../Components/CareersPage/CareersCategory";
import ProgrammeSection from "../Components/CareersPage/ProgrammeSection";
import Hero from "../Components/CareersPage/Hero";
import TestimonialSlider from "../Components/CareersPage/Testimonials";

const CareersPage = () => {
  return (
    <div>
      <Hero />
      <LifeAtPantiss />
      <CareersCategory />
      <ProgrammeSection />
      <TestimonialSlider />
      {/* <JobsListing /> */}
    </div>
  );
};

export default CareersPage;
