import React from 'react'
import Hero from '../../Components/WhereWeWork/Jharkhand/Hero'
import Details from '../../Components/WhereWeWork/Jharkhand/Details'
import Achievements from '../../Components/WhereWeWork/Jharkhand/Achievements'
// import CardsSection from '../../Components/WhereWeWork/Jharkhand/CardsSection'
import HelpingSection from '../../Components/WhereWeWork/Jharkhand/HelpingSection'
import ImpactSection from '../../Components/WhereWeWork/Jharkhand/Impact'
import Locations from '../../Components/WhereWeWork/Jharkhand/Locations'

const Jharkhand = () => {
  return (
    <div>
        <Hero />
        <Details />
        <Achievements />
        <Locations />
        {/* <CardsSection /> */}
        <HelpingSection />
        <ImpactSection />
    </div>
  )
}

export default Jharkhand