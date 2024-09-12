import React, { Suspense, lazy } from 'react';
import WhatWeDo from '../Components/Homepage/WhatWeDo/WhatWeDo';
import Founders from '../Components/Homepage/Founders/Founders';
import AdvisoryBoard from '../Components/Homepage/AdvisoryBoard/AdvisoryBoard';
import Projects from '../Components/Homepage/Projects/Projects';
import AsSeenOn from '../Components/Homepage/asSeenOn/AsSeenOn';
import Careers from '../Components/Homepage/Careers/Careers';
import OurPartners from '../Components/Homepage/OurPartners/OurPartners';
import ReachSection from '../Components/Homepage/Reach/ReachSection';
import Highlights from '../Components/Homepage/Highlights/Highlights';
import Newsletter from '../Components/Homepage/NewsLetter/NewsLetter';
import SDGBanner from '../Components/Homepage/SDGSection/SDGBanner';

// Lazy load components
const Impact2 = lazy(() => import('../Components/Homepage/Impact2/Impact2'));
const HomeBanner2 = lazy(() => import('../Components/Homepage/Banner2/HomeBanner2'));
const SummitBanner = lazy(() => import('../Components/Homepage/SummitBanner/SummitBanner'));

const HomePage = () => {
  return (
    <div>
      {/* Suspense wraps around the lazy-loaded components */}
      <Suspense fallback={<div>Loading...</div>}>
        <HomeBanner2 />
      </Suspense>
      
      <WhatWeDo />
      <SDGBanner />
      <Founders />
      <AdvisoryBoard />
      <Projects />

      <Suspense fallback={<div>Loading...</div>}>
        <SummitBanner />
      </Suspense>
      <AsSeenOn />

      {/* Uncomment when you need Impact2 */}
      <Suspense fallback={<div>Loading...</div>}>
        <Impact2 />
      </Suspense>

      <OurPartners />
      <ReachSection />
      <Highlights />
      <Newsletter />
      <Careers />
    </div>
  );
};

export default HomePage;
