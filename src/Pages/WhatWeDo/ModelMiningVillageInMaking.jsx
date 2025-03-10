import React from 'react'
import BannerModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/BannerEia'
import ChallengesModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/ChallengesEia'
import SolutionsModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/Solutions'
import ProgramsModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/Programs'
import StoryModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/Story'
import PartnersModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/Partners'
import ChallengesResponseModelVillages from '../../Components/WhatWeDo/Pages/ModelMiningVillages/ChallengesResponse'
import ProjectMapListingModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/ProjectMapListing'
import VideoSectionModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/VideoSection'
import ImpactModelVillage from '../../Components/WhatWeDo/Pages/ModelMiningVillages/Impact'

const ModelMiningVillageInMaking = () => {
  return (
    <div>
      <BannerModelVillage />
      <ChallengesModelVillage />
      <ChallengesResponseModelVillages />
      <SolutionsModelVillage />
      <ProgramsModelVillage />
      <ProjectMapListingModelVillage />
      <VideoSectionModelVillage />
      <ImpactModelVillage />
      <StoryModelVillage />
      <PartnersModelVillage />
    </div>
  )
}

export default ModelMiningVillageInMaking