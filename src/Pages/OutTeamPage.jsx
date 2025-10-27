import React from "react";
import TeamBanner1 from "../Components/TeamPage/TeamBanner1/TeamBanner1";
// import TeamBanner2 from '../Components/TeamPage/TeamBanner2/TeamBanner2'
import TeamTabs from "../Components/TeamPage/TeamTabs/TeamTabs";
import ImpactBanner from "../Components/TeamPage/ImpactBanner";

const OutTeamPage = () => {
  return (
    <div>
      <TeamBanner1 />
      <ImpactBanner
        backgroundVideo="https://res.cloudinary.com/djtzx6wo7/video/upload/v1761574973/3129785-uhd_3840_2160_25fps_ggzbsq.mp4"
        headline="Empowering Change"
        subHeadline="Building impact through innovation and community action."
        cta={{ text: "Explore More", onClick: () => alert("CTA clicked!") }}
      />
      {/* <TeamBanner2 /> */}
      <TeamTabs />
    </div>
  );
};

export default OutTeamPage;
