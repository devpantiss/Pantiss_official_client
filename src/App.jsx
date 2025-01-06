import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import PantissSdgPage from "./Pages/PantissSdgPage";
import Header from "./Components/Common/Header";
import WhoWeAre from "./Pages/WhoWeAre";
import Footer2 from "./Components/Common/Footer2";
import CareersPage from "./Pages/CareersPage";
import WhatWeDo from "./Pages/WhatWeDo";
import Tenders from "./Pages/Tenders";
import { use } from "react";
import Loader from "./Components/Common/Loader/Loader";
import JobsPage from "./Pages/JobsPage";
import YoungProfessionals from "./Pages/YoungProfessionals";
import InternshipProgramme from "./Pages/InternshipProgramme";
import ContactPage from "./Pages/ContactPage";
import Fellowship from "./Pages/Fellowship";
import SummitPage from "./Pages/SummitPage";


function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const hideHeaderFooter = location.pathname === "/sdg-pantiss";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname]);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="overflow-hidden">
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sdg-pantiss" element={<PantissSdgPage />} />
        <Route path="/whoweare/*" element={<WhoWeAre />} />
        <Route path="/whatwedo/*" element={<WhatWeDo />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/careers/jobs" element={<JobsPage />} /> {/* Nested Route */}
        <Route path="/tenders" element={<Tenders />} />
        <Route path="/programmes/young-professionals" element={<YoungProfessionals />} />
        <Route path="/programmes/internships" element={<InternshipProgramme />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route path="/summit" element={<SummitPage />} />
      </Routes>
      {!hideHeaderFooter && <Footer2 />}
    </div>
  );
}

export default App;
