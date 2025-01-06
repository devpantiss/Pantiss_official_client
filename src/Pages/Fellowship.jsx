import React from "react";
import Hero from "../Components/Fellowship/Hero";
import ProgrammesSection from "../Components/Fellowship/ProgrammesSection";
import FoundersSection from "../Components/Fellowship/FoundersSection";
import VideoSection from "../Components/Fellowship/VideoSection";

const Fellowship = () => {
  return (
    <div>
      <Hero />
      <FoundersSection />
      <ProgrammesSection />
      <VideoSection />
    </div>
  );
};

export default Fellowship;
