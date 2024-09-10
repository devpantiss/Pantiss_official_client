import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import OutTeamPage from './OutTeamPage';
import OurAdvisoryBoardPage from './OurAdvisoryBoardPage';

const AbiutPage = () => {
  return (
    <div>
      <Routes>
        <Route path="about" element={<AboutPage />}/>
        <Route path="team" element={<OutTeamPage />}/>
        <Route path="advisory-board" element={<OurAdvisoryBoardPage />}/>
      </Routes>
    </div>
  )
}

export default AbiutPage