import React from 'react';
import BannerWhatWeDo from '../Components/WhatWeDo/Banner';
import WhatWeDoCards from '../Components/WhatWeDo/WhatWeDoCards';
import Expertise from '../Components/WhatWeDo/Expertise';
import InnovationLabBanner from '../Components/WhatWeDo/InnovationLabBanner';
import Programs from '../Components/WhatWeDo/Programs';
import Stories from '../Components/WhatWeDo/Stories';


const WhatWeDo = () => {
  return (
    <div className=''>
      <BannerWhatWeDo />
      <Expertise />
      <Programs />
      <InnovationLabBanner />
      <WhatWeDoCards />
      <Stories/>
    </div>
  )
}

export default WhatWeDo;