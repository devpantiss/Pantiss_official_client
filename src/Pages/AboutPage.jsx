import React from 'react'
import FoundersSection from '../Components/AboutPage/Founders/Founders';
import Careers from '../Components/Homepage/Careers/Careers'
import Goals from '../Components/AboutPage/Goals/Goals'
import TestimonialCarousel from '../Components/AboutPage/Testimonial/TestimonialCarousel'
import AboutBanner from '../Components/AboutPage/AboutBanner2/AboutBanner'
import Missions from '../Components/AboutPage/Missions/Missions';
import Milestones from '../Components/AboutPage/Milestones/Milestones';
import AwardsSlider from '../Components/AboutPage/Awards/AwardsSlider';
import Certifications from '../Components/AboutPage/Certifications/Certifications';
import PurposeSlider from '../Components/AboutPage/Purpose&Priorities/PurposeAndPriorities';
import PolicyAndInitiative from "../Components/AboutPage/PolicyAndInitiative";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <Missions />
      <FoundersSection />
      <Goals />
      <PurposeSlider />
      <PolicyAndInitiative />
      <Milestones />
      <AwardsSlider />
      <Certifications />
      <TestimonialCarousel />
      <Careers />
    </div>
  )
}

export default AboutPage