import React from 'react'
import Hero from '../Components/Publications/Hero'
// import Cards from '../Components/Publications/Cards'
import SocialImpact from '../Components/Publications/SocialImpact'
import ArticleSection1 from '../Components/Publications/ArticleSection1'
import CommunicationDevelopment from '../Components/Publications/CommunicationDevelopment'
import ArticleSection2 from '../Components/Publications/ArticleSection2'
import CapacityDevelopment from '../Components/Publications/CapacityDevelopment'
import PopularSection from '../Components/Publications/Populars'

const Publications = () => {
  return (
    <div>
        <Hero />
        <SocialImpact />
        <ArticleSection1 />
        <CommunicationDevelopment />
        <ArticleSection2 />
        <CapacityDevelopment />
        <PopularSection />
        {/* <Cards /> */}
    </div>
  )
}

export default Publications