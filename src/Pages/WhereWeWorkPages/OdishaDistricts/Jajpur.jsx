import React from 'react'
import ClientsMarquee from "../../../Components/Common/ClientsMarquee";
import JajpurHero from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurHero'
import JajpurImpact from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurImpact'
import JajpurDetails from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurDetails'
import JajpurDetails2 from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurDetails2'
import JajpurLeadership from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurLeadership'
import JajpurReports from '../../../Components/WhereWeWork/Odisha/Districts/Jajpur/JajpurReports'

const Jajpur = () => {
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
      <JajpurHero />
      <JajpurImpact />
      <JajpurDetails />
      <ClientsMarquee
        district="CLIENTS"
        clients={keonjharClients}
        speed={30}
      />
      <JajpurDetails2 />
      <JajpurReports />
      <JajpurLeadership />
    </div>
  )
}

export default Jajpur