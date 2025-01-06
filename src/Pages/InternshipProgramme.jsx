import React from 'react'
import Hero from '../Components/ProgramPages/InternshipProgram/Hero'
import TestimonialSlider from '../Components/ProgramPages/InternshipProgram/Testimonials'
import AboutProgram from '../Components/ProgramPages/InternshipProgram/AboutProgram'
import InternshipAccordion from '../Components/ProgramPages/InternshipProgram/InternshipAccordian'

const InternshipProgramme = () => {
  return (
    <div>
      <Hero />
      <TestimonialSlider />
      <AboutProgram />
      <InternshipAccordion />
    </div>
  )
}

export default InternshipProgramme