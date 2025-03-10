import React from 'react'
import BannerTransition from '../../Components/WhatWeDo/Pages/JustTransition/BannerEia'
import ChallengesTransition from '../../Components/WhatWeDo/Pages/JustTransition/ChallengesEia'
import SolutionsTransition from '../../Components/WhatWeDo/Pages/JustTransition/Solutions'
import ProgramsTransition from '../../Components/WhatWeDo/Pages/JustTransition/Programs'
import StoryTransition from '../../Components/WhatWeDo/Pages/JustTransition/Story'
import PartnersTransition from '../../Components/WhatWeDo/Pages/JustTransition/Partners'
import ChallengesResponseTransition from '../../Components/WhatWeDo/Pages/JustTransition/ChallengesResponse'
import ProjectMapListingTransition from '../../Components/WhatWeDo/Pages/JustTransition/ProjectMapListing'
import VideoSectionTransition from '../../Components/WhatWeDo/Pages/JustTransition/VideoSection'
import ImpactTransition from '../../Components/WhatWeDo/Pages/JustTransition/Impact'

const JustTransitionForMiningWorkers = () => {
  return (
    <div>
      <BannerTransition />
      <ChallengesTransition />
      <ChallengesResponseTransition />
      <SolutionsTransition />
      <ProgramsTransition />
      <ProjectMapListingTransition />
      <VideoSectionTransition />
      <ImpactTransition />
      <StoryTransition />
      <PartnersTransition />
    </div>
  )
}

export default JustTransitionForMiningWorkers