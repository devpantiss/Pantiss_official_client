import React from "react";
import DashHeader from "../Components/Dashboard/DashHeader";
import Results from "./DashPages/Results";
import { Route, Routes } from "react-router-dom";
import Partnerships from "./DashPages/Partnerships";
import KeyStories from "./DashPages/KeyStories";

const Dashboard = () => {
  return (
    <div className="bg-black py-6 px-3">
      <div className="container mx-auto ring-2 ring-red-600 rounded-md">
        <DashHeader />
        <Routes>
        <Route path="results" element={<Results />} />
        <Route path="partnerships" element={<Partnerships />} />
        <Route path="key-result-stories" element={<KeyStories />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
