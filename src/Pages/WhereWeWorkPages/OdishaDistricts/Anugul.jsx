import React from "react";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import HeroAngul from "../../../Components/WhereWeWork/Odisha/Districts/Angul/HeroAngul";
import AngulImpact from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulImpact";
import AngulDetails from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulDetails";
import AngulDetails2 from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulDetails2";
import AngulReports from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulReports";
import AngulLeadership from "../../../Components/WhereWeWork/Odisha/Districts/Angul/AngulLeadership";

const Anugul = () => {
  const keonjharClients = [
    { name: "NSDC", logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681310/NSDC_uhnrq9.png" },
    { name: "SCMS", logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681320/SCMS_ehl7t2.png" },
    { name: "IMFA", logo: "/assets/partners/imfa.png" },
    { name: "JINDAL STEEL", logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682074/JINDAL_STEEL_enmfkd.png" },
    { name: "Vedanta", logo: "/assets/partners/vedanta.png" },
    { name: "Adani Enterprises", logo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682066/adani_a61rst.png" },
  ];

  return (
    <div>
      <HeroAngul />
      <AngulImpact />
      <AngulDetails />
      <ClientsMarquee
        district="CLIENTS"
        clients={keonjharClients}
        speed={30}
      />
      <AngulDetails2 />
      <AngulReports />
      <AngulLeadership />
    </div>
  );
};

export default Anugul;