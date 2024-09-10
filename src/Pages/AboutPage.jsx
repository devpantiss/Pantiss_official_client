import React from 'react'
import AboutPageBanner from '../Components/AboutPage/AboutBanner/AboutBanner'
import FoundersSection from '../Components/AboutPage/FoundersSection/FoundersSection'
import Careers from '../Components/Homepage/Careers/Careers'
import Goals from '../Components/AboutPage/Goals/Goals'
import TestimonialCarousel from '../Components/AboutPage/Testimonial/TestimonialCarousel'

const AboutPage = () => {
  return (
    <div>
        <AboutPageBanner />
        <FoundersSection />
        <Goals />
        <TestimonialCarousel />
        <Careers />
    </div>
  )
}

export default AboutPage