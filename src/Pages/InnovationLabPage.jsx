import React from 'react'
import BannerInnovation from '../Components/InnovationLab/Banner'
import LatestSection from '../Components/InnovationLab/LatestSection'
import ProgrammesSection from '../Components/InnovationLab/ProgrammesSection'
import PrinciplesSection from '../Components/InnovationLab/PrinciplesSection'
import CallToActionSection from '../Components/InnovationLab/CallToActionSection'

const InnovationLabPage = () => {
  return (
    <div>
      <BannerInnovation />
      <LatestSection />
      <PrinciplesSection />
      <ProgrammesSection />
      <CallToActionSection />
    </div>
  )
}

export default InnovationLabPage