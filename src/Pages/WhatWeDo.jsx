import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SocialDevelopmentPage from './SocialDevelopmentPage';
import SocialEnterprisePage from './SocialEnterprisePage';
import PantissMinexSimPage from './PantissMinexSimPage';

const WhatWeDo = () => {
  return (
    <div>
      <Routes>
        <Route path="social-development" element={<SocialDevelopmentPage />}/>
        <Route path="social-enterprises" element={<SocialEnterprisePage />}/>
        <Route path="pantiss-mine-x-sim" element={<PantissMinexSimPage />}/>
      </Routes>
    </div>
  )
}

export default WhatWeDo;