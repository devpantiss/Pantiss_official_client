import React from "react";
import ImpactSundargarh from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Impact";
import DetailsSundargarh from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Details";
import DetailsSundargarh2 from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Details2";
import LeadershipSundargarh from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/Leadership";
import SundargarhHero from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/SundargarhHero";
import SundargarhReports from "../../../Components/WhereWeWork/Odisha/Districts/Sundargarh/SundargarhReports";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";

const Sundargarh = () => {
  const keonjharClients = [
    {
      name: "NSDC",
      logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681310/NSDC_uhnrq9.png",
    },
    {
      name: "SCMS",
      logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681320/SCMS_ehl7t2.png",
    },
    { name: "IMFA", logo: "/assets/partners/imfa.png" },
    {
      name: "JINDAL STEEL",
      logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682074/JINDAL_STEEL_enmfkd.png",
    },
    { name: "Vedanta", logo: "/assets/partners/vedanta.png" },
    {
      name: "Adani Enterprises",
      logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682066/adani_a61rst.png",
    },
  ];
  return (
    <div>
      <SundargarhHero />
      <ImpactSundargarh />
      <DetailsSundargarh />
      <ClientsMarquee district="CLIENTS" clients={keonjharClients} speed={30} />
      <DetailsSundargarh2 />
      <SundargarhReports />
      <LeadershipSundargarh />
    </div>
  );
};

export default Sundargarh;
