import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import OutTeamPage from './OutTeamPage';
import OurAdvisoryBoardPage from './OurAdvisoryBoardPage';
import ReportsAndFinancials from './ReportsAndFinancials';

const AbiutPage = () => {
  return (
    <div>
      <Routes>
        <Route path="about" element={<AboutPage />}/>
        <Route path="team" element={<OutTeamPage />}/>
        <Route path="advisory-board" element={<OurAdvisoryBoardPage />}/>
        <Route path="reports-and-financials" element={<ReportsAndFinancials />}/>
      </Routes>
    </div>
  )
}

export default AbiutPage