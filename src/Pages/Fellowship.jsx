import React from "react";
import Hero from "../Components/Fellowship/Hero";
import ProgrammesSection from "../Components/Fellowship/ProgrammesSection";
import FoundersSection from "../Components/Fellowship/FoundersSection";
import VideoSection from "../Components/Fellowship/VideoSection";
import ReachSection from "../Components/Fellowship/reach/ReachSection";
import Understand from "../Components/Fellowship/Understand";
import Stats from "../Components/Fellowship/Stats";

const Fellowship = () => {
  return (
    <div>
      <Hero />
      <Understand />
      <FoundersSection />
      <VideoSection />
      <ReachSection />
      <Stats />
      <ProgrammesSection />
    </div>
  );
};

export default Fellowship;
