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
import ZeroToleranceToHarassment from "./Pages/life-at-pantiss/ZeroToleranceToHarassment";
import PeopleAtPantiss from "./Pages/life-at-pantiss/PeopleAtPantiss";
import InclusivenessAndDiversity from "./Pages/life-at-pantiss/InclusivenessAndDiversity";
import MeetTheLeaders from "./Pages/life-at-pantiss/MeetTheLeaders";
import InvestingInMentalHealth from "./Pages/life-at-pantiss/InvestingInMentalHealth";
import CareerDevelopment from "./Pages/benefits-at-pantiss/CareerDevelopment";
import TutionAssistance from "./Pages/benefits-at-pantiss/TutionAssistance";
import ParentingBenefits from "./Pages/benefits-at-pantiss/ParentingBenefits";
import HealthInsurance from "./Pages/benefits-at-pantiss/HealthInsurance";
import RetirementProgrammes from "./Pages/benefits-at-pantiss/RetirementProgrammes";


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

        {/* Life-at-pantiss */}
        <Route path="/life-at-pantiss/people-at-pantiss" element={<PeopleAtPantiss />} />
        <Route path="/life-at-pantiss/inclusiveness-and-diversity" element={<InclusivenessAndDiversity />} />
        <Route path="/life-at-pantiss/zero-tolerance-for-harassment" element={<ZeroToleranceToHarassment />} />
        <Route path="/life-at-pantiss/meet-the-leaders" element={<MeetTheLeaders />} />
        <Route path="/life-at-pantiss/investing-in-mental-health" element={<InvestingInMentalHealth />} />


        {/* Benefits */}
        <Route path="/benefits-at-pantiss/career-development" element={<CareerDevelopment />} />
        <Route path="/benefits-at-pantiss/tution-assistance" element={<TutionAssistance />} />
        <Route path="/benefits-at-pantiss/parenting-benefits" element={<ParentingBenefits />} />
        <Route path="/benefits-at-pantiss/health-insurance" element={<HealthInsurance />} />
        <Route path="/benefits-at-pantiss/retirement-programmes" element={<RetirementProgrammes />} />
      </Routes>
      {!hideHeaderFooter && <Footer2 />}
    </div>
  );
}

export default App;
