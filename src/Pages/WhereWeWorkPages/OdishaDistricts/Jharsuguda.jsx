import React from "react";
import ImpactJharsuguda from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Impact";
import DetailsJharsuguda from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Details";
import DetailsJharsuguda2 from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Details2";
import LeadershipJharsuguda from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/Leadership";
import JharsugudaHero from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/JharsugudaHero";
import JharsugudaReports from "../../../Components/WhereWeWork/Odisha/Districts/Jharsuguda/JharsugudaReports";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";

const Jharsuguda = () => {
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
      <JharsugudaHero />
      <ImpactJharsuguda />
      <DetailsJharsuguda />
      <ClientsMarquee district="CLIENTS" clients={keonjharClients} speed={30} />
      <DetailsJharsuguda2 />
      <JharsugudaReports />
      <LeadershipJharsuguda />
    </div>
  );
};

export default Jharsuguda;
