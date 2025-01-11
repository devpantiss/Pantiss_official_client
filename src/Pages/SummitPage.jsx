import React from "react";
import TabsSection from "../Components/Summit/TabsSection";
import Banner from "../Components/Summit/Banner";
import WhyTo from "../Components/Summit/WhyTo";
import FoundersQuote from "../Components/Summit/FoundersQuote";
import WhoShouldAttend from "../Components/Summit/WhoShouldAttend";
import Donors from "../Components/Summit/Donors";
import Impact from "../Components/Summit/Impact";
import Exhibitors from "../Components/Summit/Exhibitors";
import Speakers from "../Components/Summit/Speakers";
import EventSchedule from "../Components/Summit/EventSchedule";
import Highlights from "../Components/Summit/Highlights";
import Gallery from "../Components/Summit/Gallery";
// import SummitAbout from '../Components/Summit/SummitAbout'

const SummitPage = () => {
  return (
    <div>
      <Banner />
      <WhyTo />
      <FoundersQuote />
      <Donors />
      {/* <SummitAbout /> */}
      <WhoShouldAttend />
      <TabsSection />
      <Impact />
      <Exhibitors />
      <EventSchedule />
      <Speakers />
      <Highlights />
      <Gallery />
    </div>
  );
};

export default SummitPage;
