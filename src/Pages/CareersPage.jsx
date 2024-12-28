import React from "react";
// import JobsListing from "../Components/CareersPage/JobsListing";
import LifeAtPantiss from "../Components/CareersPage/LifeAtPantiss";
import ProgrammeSection from "../Components/CareersPage/ProgrammeSection";
import Hero from "../Components/CareersPage/Hero";
import TestimonialSlider from "../Components/CareersPage/Testimonials";
import CareersCategory from "../Components/CareersPage/CareersCategory";
import BenefitsPantiss from "../Components/CareersPage/Benefits";

const CareersPage = () => {
  return (
    <div className="pb-8">
      <Hero />
      <LifeAtPantiss />
      <CareersCategory />
      <ProgrammeSection />
      <BenefitsPantiss />
      <TestimonialSlider />
      {/* <JobsListing /> */}
    </div>
  );
};

export default CareersPage;
