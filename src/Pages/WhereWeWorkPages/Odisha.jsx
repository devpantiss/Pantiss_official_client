import React from 'react'
import Hero from '../../Components/WhereWeWork/Odisha/Hero'
import DetailsSection from '../../Components/WhereWeWork/Odisha/detailsSection'
import Achievements from '../../Components/WhereWeWork/Odisha/Achievements'
// import CardsSection from '../../Components/WhereWeWork/Odisha/CardsSection'
import HelpingSection from '../../Components/WhereWeWork/Odisha/HelpingSection'
import Locations from '../../Components/WhereWeWork/Odisha/Locations'

const Odisha = () => {
  return (
    <div>
        <Hero />
        <DetailsSection />
        <Achievements />
        <Locations />
        {/* <CardsSection /> */}
        <HelpingSection />
    </div>
  )
}

export default Odisha