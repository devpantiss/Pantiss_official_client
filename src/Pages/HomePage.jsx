import React from 'react'
import Header from '../Components/Common/Header'
import HomeBanner from '../Components/Homepage/Banner/HomeBanner'
import HomeBanner2 from '../Components/Homepage/Banner2/HomeBanner2'
import WhatWeDo from '../Components/Homepage/WhatWeDo/WhatWeDo';
import Founders from '../Components/Homepage/Founders/Founders';
import AdvisoryBoard from '../Components/Homepage/AdvisoryBoard/AdvisoryBoard';
import SocialEnterprise from '../Components/Homepage/SocialEnterprise/SocialEnterprise';
import Projects from '../Components/Homepage/Projects/Projects';
import AsSeenOn from '../Components/Homepage/asSeenOn/AsSeenOn';
import Careers from '../Components/Homepage/Careers/Careers';
import OurPartners from '../Components/Homepage/OurPartners/OurPartners';
import Footer from '../Components/Common/Footer';
import ReachSection from '../Components/Homepage/Reach/ReachSection';
import Impact from '../Components/Homepage/Impact/Impact';
import Highlights from '../Components/Homepage/Highlights/Highlights';


const HomePage = () => {
  return (
    <div>
        <Header />
        <HomeBanner2 />
        <WhatWeDo />
        <Founders />
        <AdvisoryBoard />
        <Projects />
        <Impact />
        <ReachSection />
        <SocialEnterprise />
        <AsSeenOn />
        <Highlights />
        <Careers />
        <OurPartners />
        <Footer />
    </div>
  )
}

export default HomePage