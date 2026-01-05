import React from "react";
import ImpactKalahandi from "../../../Components/WhereWeWork/Odisha/Districts/Kalahandi/Impact";
import DetailsKalahandi from "../../../Components/WhereWeWork/Odisha/Districts/Kalahandi/Details";
import DetailsKalahandi2 from "../../../Components/WhereWeWork/Odisha/Districts/Kalahandi/Details2";
import LeadershipKalahandi from "../../../Components/WhereWeWork/Odisha/Districts/Kalahandi/Leadership";
import HeroKalahandi from "../../../Components/WhereWeWork/Odisha/Districts/Kalahandi/HeroKalahandi";
import KalahandiReports from "../../../Components/WhereWeWork/Odisha/Districts/Kalahandi/KalahandiReports";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";

const Kalahandi = () => {
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
      <HeroKalahandi />
      <ImpactKalahandi />
      <DetailsKalahandi />
      <ClientsMarquee district="CLIENTS" clients={keonjharClients} speed={30} />
      <DetailsKalahandi2 />
      <KalahandiReports />
      <LeadershipKalahandi />
    </div>
  );
};

export default Kalahandi;
