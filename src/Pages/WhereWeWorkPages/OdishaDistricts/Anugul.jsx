import React from "react";
import Heroanugul from "../../../Components/WhereWeWork/Odisha/Districts/anugul/Heroanugul";
import Impact from "../../../Components/WhereWeWork/Odisha/Districts/anugul/Impact";
import Detailsanugul from "../../../Components/WhereWeWork/Odisha/Districts/anugul/Details";
import Details2 from "../../../Components/WhereWeWork/Odisha/Districts/anugul/Details2";
import Leadership from "../../../Components/WhereWeWork/Odisha/Districts/anugul/Leadership";
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import AngulReports from "../../../Components/WhereWeWork/Odisha/Districts/Anugul/AngulReports";

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
      <Heroanugul />
      <Impact />
      <Detailsanugul />
      <ClientsMarquee
        district="CLIENTS"
        clients={keonjharClients}
        speed={30}
      />
      <Details2 />
      <AngulReports />
      <Leadership />
    </div>
  );
};

export default Anugul;