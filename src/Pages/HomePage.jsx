import React, { Suspense, lazy } from "react";
import HomeBanner2 from "../Components/Homepage/Banner2/HomeBanner2"; // Normal import
import WhatWeDo from "../Components/Homepage/WhatWeDo/WhatWeDo";
import AdvisoryBoard from "../Components/Homepage/AdvisoryBoard/AdvisoryBoard";
import Projects from "../Components/Homepage/Projects/Projects";
import AsSeenOn from "../Components/Homepage/asSeenOn/AsSeenOn";
import Careers from "../Components/Homepage/Careers/Careers";
import OurPartners from "../Components/Homepage/OurPartners/OurPartners";
import ReachSection from "../Components/Homepage/Reach/ReachSection";
import Highlights from "../Components/Homepage/Highlights/Highlights";
import Newsletter from "../Components/Homepage/NewsLetter/NewsLetter";
import SDGBanner from "../Components/Homepage/SDGSection/SDGBanner";
import ActivityAndEvents from "../Components/Homepage/ActivityAndEvents";

// Lazy load other components
const Impact2 = lazy(() => import("../Components/Homepage/Impact2/Impact2"));
const SummitBanner = lazy(() =>
  import("../Components/Homepage/SummitBanner/SummitBanner")
);

const HomePage = () => {
  return (
    <div>
      <HomeBanner2 />

      <WhatWeDo />
      <SDGBanner />
      <AdvisoryBoard />
      <Projects />
      <SummitBanner />
      <AsSeenOn />
      <Impact2 />
      <OurPartners />
      <ReachSection />
      <Highlights />
      <Newsletter />
      <ActivityAndEvents />
      <Careers />
    </div>
  );
};

export default HomePage;
