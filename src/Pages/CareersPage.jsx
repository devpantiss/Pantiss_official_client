import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
// import JobsListing from "../Components/CareersPage/JobsListing";
import LifeAtPantiss from "../Components/CareersPage/LifeAtPantiss";
import ProgrammeSection from "../Components/CareersPage/ProgrammeSection";
import Hero from "../Components/CareersPage/Hero";
import TestimonialSlider from "../Components/CareersPage/Testimonials";
import CareersCategory from "../Components/CareersPage/CareersCategory";
import BenefitsPantiss from "../Components/CareersPage/Benefits";

const CareersPage = () => {
  const lifeAtPantissRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToLifeAtPantiss) {
      if (lifeAtPantissRef.current) {
        lifeAtPantissRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.state]);

  return (
    <div className="pb-8">
      <Hero />
      <div ref={lifeAtPantissRef}>
        <LifeAtPantiss />
      </div>
      <CareersCategory />
      <ProgrammeSection />
      <BenefitsPantiss />
      <TestimonialSlider />
      {/* <JobsListing /> */}
    </div>
  );
};

export default CareersPage;
