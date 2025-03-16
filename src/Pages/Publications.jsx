import React from "react";
import Hero from "../Components/Publications/Hero";
// import Cards from '../Components/Publications/Cards'
import SocialImpact from "../Components/Publications/SocialImpact";
import ArticleSection1 from "../Components/Publications/ArticleSection1";
import CommunicationDevelopment from "../Components/Publications/CommunicationDevelopment";
import ArticleSection2 from "../Components/Publications/ArticleSection2";
import CapacityDevelopment from "../Components/Publications/CapacityDevelopment";
import StoryBanner from "../Components/Publications/StoryBanner";
import FeaturedPublicationBanner from "../Components/Publications/FeaturedPublicationBanner";
import FeaturedPublicationBanner2 from "../Components/Publications/FeaturedPublicationBanner2";
// import PopularSection from '../Components/Publications/Populars'

const Publications = () => {
  return (
    <div>
      <Hero />
      <CommunicationDevelopment />
      <ArticleSection1 />
      <FeaturedPublicationBanner2 />
      <SocialImpact />
      <ArticleSection2 />
      <FeaturedPublicationBanner />
      <CapacityDevelopment />
      <StoryBanner />
      {/* <PopularSection /> */}
      {/* <Cards /> */}
    </div>
  );
};

export default Publications;
