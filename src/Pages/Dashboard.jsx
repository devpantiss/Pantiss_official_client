import React from "react";
import DashHeader from "../Components/Dashboard/DashHeader";
import Row1 from "../Components/Dashboard/Results/Row1";
import Row2 from "../Components/Dashboard/Results/Row2";
import Row3 from "../Components/Dashboard/Results/Row3";
import Row4 from "../Components/Dashboard/Results/Row4";
import Row5 from "../Components/Dashboard/Results/Row5";
import Row6 from "../Components/Dashboard/Results/Row6";
import Results from "./DashPages/Results";
import { Route, Routes } from "react-router-dom";
import Partnerships from "./DashPages/Partnerships";
import KeyStories from "./DashPages/KeyStories";
import GeneBanks from "./DashPages/GeneBanks";
import Frameworks from "./DashPages/Frameworks";

const Dashboard = () => {
  return (
    <div className="bg-black py-6 px-3">
      <div className="container mx-auto ring-2 ring-red-600 rounded-md">
        <DashHeader />
        <Routes>
        <Route path="results" element={<Results />} />
        <Route path="partnerships" element={<Partnerships />} />
        <Route path="key-result-stories" element={<KeyStories />} />
        <Route path="genebanks" element={<GeneBanks />} />
        <Route path="frameworks" element={<Frameworks />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
