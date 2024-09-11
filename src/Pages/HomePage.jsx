import React from 'react'
import HomeBanner2 from '../Components/Homepage/Banner2/HomeBanner2'
import WhatWeDo from '../Components/Homepage/WhatWeDo/WhatWeDo';
import Founders from '../Components/Homepage/Founders/Founders';
import AdvisoryBoard from '../Components/Homepage/AdvisoryBoard/AdvisoryBoard';
import Projects from '../Components/Homepage/Projects/Projects';
import AsSeenOn from '../Components/Homepage/asSeenOn/AsSeenOn';
import Careers from '../Components/Homepage/Careers/Careers';
import OurPartners from '../Components/Homepage/OurPartners/OurPartners';
import ReachSection from '../Components/Homepage/Reach/ReachSection';
import Highlights from '../Components/Homepage/Highlights/Highlights';
import Impact2 from '../Components/Homepage/Impact2/Impact2';
import Newsletter from '../Components/Homepage/NewsLetter/NewsLetter';

const HomePage = () => {
  return (
    <div>
        <HomeBanner2 />
        <WhatWeDo />
        <Founders />
        <AdvisoryBoard />
        <Projects />
        <Impact2 />
        <ReachSection />
        {/* <SocialEnterprise /> */}
        <AsSeenOn />
        <Highlights />
        <Newsletter />
        <OurPartners />
        <Careers />
    </div>
  )
}

export default HomePage