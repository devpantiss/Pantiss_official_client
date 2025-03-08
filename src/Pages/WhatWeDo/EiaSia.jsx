import React from "react";
import BannerEia from "../../Components/WhatWeDo/Pages/EiaSia/BannerEia";
import Solutions from "../../Components/WhatWeDo/Pages/EiaSia/Solutions";
import Programs from "../../Components/WhatWeDo/Pages/EiaSia/Programs";
import Story from "../../Components/WhatWeDo/Pages/EiaSia/Story";
import Partners from "../../Components/WhatWeDo/Pages/EiaSia/Partners";
import ChallengesResponseEia from "../../Components/WhatWeDo/Pages/EiaSia/ChallengesResponse";
import ChallengesEia from "../../Components/WhatWeDo/Pages/EiaSia/ChallengesEia";
import ProjectMapListing from "../../Components/WhatWeDo/Pages/EiaSia/ProjectMapListing";
import ImpactEia from "../../Components/WhatWeDo/Pages/EiaSia/Impact";
import VideoSection from "../../Components/WhatWeDo/Pages/EiaSia/VideoSection";

const EiaSia = () => {
  return (
    <div>
      <BannerEia />
      <ChallengesEia />
      <ChallengesResponseEia />
      <Solutions />
      <Programs />
      <ProjectMapListing />
      <VideoSection />
      <ImpactEia />
      <Story />
      <Partners />
    </div>
  );
};

export default EiaSia;
