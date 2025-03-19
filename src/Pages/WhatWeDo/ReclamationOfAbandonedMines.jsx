import React from 'react'
import BannerReclamation from '../../Components/WhatWeDo/Pages/Reclamation/BannerEia'
import ChallengesReclamation from '../../Components/WhatWeDo/Pages/Reclamation/ChallengesEia'
import SolutionsReclamation from '../../Components/WhatWeDo/Pages/Reclamation/Solutions'
import ProgramsReclamation from '../../Components/WhatWeDo/Pages/Reclamation/Programs'
import StoryReclamation from '../../Components/WhatWeDo/Pages/Reclamation/Story'
import PartnersReclamation from '../../Components/WhatWeDo/Pages/Reclamation/Partners'
// import ChallengesResponseReclamation from '../../Components/WhatWeDo/Pages/Reclamation/ChallengesResponse'
import ProjectMapListingReclamation from '../../Components/WhatWeDo/Pages/Reclamation/ProjectMapListing'
import ImpactReclamation from '../../Components/WhatWeDo/Pages/Reclamation/Impact'
import VideoSectionReclamation from '../../Components/WhatWeDo/Pages/Reclamation/VideoSection'

const ReclamationOfAbandonedMines = () => {
  return (
    <div>
      <BannerReclamation />
      <ChallengesReclamation />
      {/* <ChallengesResponseReclamation /> */}
      <SolutionsReclamation />
      <ProgramsReclamation />
      <ProjectMapListingReclamation />
      <ImpactReclamation />
      <VideoSectionReclamation />
      <StoryReclamation />
      <PartnersReclamation />
    </div>
  )
}

export default ReclamationOfAbandonedMines