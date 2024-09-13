import React from 'react'
import FoundersSection from '../Components/AboutPage/Founders/Founders';
import Careers from '../Components/Homepage/Careers/Careers'
import Goals from '../Components/AboutPage/Goals/Goals'
import TestimonialCarousel from '../Components/AboutPage/Testimonial/TestimonialCarousel'
import AboutBanner from '../Components/AboutPage/AboutBanner2/AboutBanner'
import Missions from '../Components/AboutPage/Missions/Missions';
import Milestones from '../Components/AboutPage/Milestones/Milestones';

const AboutPage = () => {
  return (
    <div>
        <AboutBanner />
        <FoundersSection />
        <Goals />
        <Missions />
        <Milestones />
        <TestimonialCarousel />
        <Careers />
    </div>
  )
}

export default AboutPage