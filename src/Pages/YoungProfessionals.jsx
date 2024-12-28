import React from 'react'
import YoungProfessionalAccordion from '../Components/ProgramPages/YoungProfessionals/YoungProfessionalAccordian'
import Hero from '../Components/ProgramPages/YoungProfessionals/Hero'
import TestimonialSlider from '../Components/ProgramPages/YoungProfessionals/Testimonials'

const YoungProfessionals = () => {
  return (
    <div>
        <Hero />
        <TestimonialSlider />
        <YoungProfessionalAccordion />
    </div>
  )
}

export default YoungProfessionals