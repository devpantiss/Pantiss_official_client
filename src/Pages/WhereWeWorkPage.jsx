import React from 'react'
import Banner from '../Components/WhereWeWork/Banner'
// import WhoWeAre from '../Components/WhereWeWork/WhoWeAre'
import Latest from '../Components/WhereWeWork/Latest'
import Banner2 from '../Components/WhereWeWork/Banner2'
import LocationCards from '../Components/WhereWeWork/LocationCards'
import ProjectsOverview from '../Components/WhereWeWork/ProjectsOverview'

const WhereWeWorkPage = () => {
  return (
    <div>
      <Banner />
      <Banner2 />
      <LocationCards />
      {/* <WhoWeAre /> */}
      <ProjectsOverview />
      <Latest />
    </div>
  )
}

export default WhereWeWorkPage