import React from 'react'
import BannerRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/BannerEia'
import ChallengesRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/ChallengesEia'
import PartnersRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/Partners'
// import ChallengesResponseRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/ChallengesResponse'
import Solutions from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/Solutions'
import Programs from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/Programs'
import ProjectMapListingRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/ProjectMapListing'
import VideoSectionRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/VideoSection';
import ImpactRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/Impact';
import StoryRehab from '../../Components/WhatWeDo/Pages/RehabilitationAndResettlement/Story';

const RehabilitationResettlementOfMines = () => {
  return (
    <div>
      <BannerRehab />
      <ChallengesRehab />
      {/* <ChallengesResponseRehab /> */}
      <Solutions />
      <Programs />
      <ProjectMapListingRehab />
      <VideoSectionRehab />
      <ImpactRehab />
      <StoryRehab />
      <PartnersRehab />
    </div>
  )
}

export default RehabilitationResettlementOfMines