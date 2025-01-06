import React from 'react'
import YoungProfessionalAccordion from '../Components/ProgramPages/YoungProfessionals/YoungProfessionalAccordian'
import Hero from '../Components/ProgramPages/YoungProfessionals/Hero'
import TestimonialSlider from '../Components/ProgramPages/YoungProfessionals/Testimonials'
import AboutProgram from '../Components/ProgramPages/YoungProfessionals/AboutProgram'

const YoungProfessionals = () => {
  return (
    <div>
        <Hero />
        <TestimonialSlider />
        <AboutProgram />
        <YoungProfessionalAccordion />
    </div>
  )
}

export default YoungProfessionals