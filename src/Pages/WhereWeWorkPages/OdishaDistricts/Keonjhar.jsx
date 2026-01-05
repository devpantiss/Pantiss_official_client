import React from "react";
import ImpactKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Impact";
import DetailsKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Details";
import DetailsKeonjhar2 from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Details2";
import LeadershipKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/Leadership";
import HeroKeonjhar from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/HeroKeonjhar";
import KeonjharReports from "../../../Components/WhereWeWork/Odisha/Districts/Keonjhar/KeonjharReports";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";

const Keonjhar = () => {
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
      <HeroKeonjhar />
      <ImpactKeonjhar />
      <DetailsKeonjhar />
      <ClientsMarquee district="CLIENTS" clients={keonjharClients} speed={30} />
      <DetailsKeonjhar2 />
      <KeonjharReports />
      <LeadershipKeonjhar />
    </div>
  );
};

export default Keonjhar;
