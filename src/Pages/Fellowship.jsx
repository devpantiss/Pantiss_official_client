import React from "react";
import Hero from "../Components/Fellowship/Hero";
import ProgrammesSection from "../Components/Fellowship/ProgrammesSection";
import FoundersSection from "../Components/Fellowship/FoundersSection";
import VideoSection from "../Components/Fellowship/VideoSection";
import ReachSection from "../Components/Fellowship/reach/ReachSection";
import Understand from "../Components/Fellowship/Understand";
import Stats from "../Components/Fellowship/Stats";
import FellowshipVideo from "../Components/Fellowship/FellowshipVideo";
import FellowshipGallery from "../Components/Fellowship/FellowshipGallery";

const Fellowship = () => {
  return (
    <div>
      <Hero />
      <Understand />
      <FoundersSection />
      <Stats />
      <VideoSection />
      <FellowshipVideo
        src="/assets/fellowship/fellowship_hero.mp4"
        onApplyClick={() => navigate("/apply")}
      />
      <ReachSection />
      <FellowshipGallery />
      <ProgrammesSection />
    </div>
  );
};

export default Fellowship;
