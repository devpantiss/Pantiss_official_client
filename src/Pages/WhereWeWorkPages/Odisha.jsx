import React from 'react'
import Hero from '../../Components/WhereWeWork/Odisha/Hero'
import Achievements from '../../Components/WhereWeWork/Odisha/Achievements'
// import CardsSection from '../../Components/WhereWeWork/Odisha/CardsSection'
import HelpingSection from '../../Components/WhereWeWork/Odisha/HelpingSection'
import Locations from '../../Components/WhereWeWork/Odisha/Locations'
import Details from '../../Components/WhereWeWork/Odisha/Details'
import ImpactSection from '../../Components/WhereWeWork/Odisha/Impact'

const Odisha = () => {
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

export default Odisha