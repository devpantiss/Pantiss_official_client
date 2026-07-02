import React, { memo } from "react";
import Marquee from "react-fast-marquee";
import Heading from "../../Common/Heading";

// Memoized static partner data
const governmentPartners = [
  "/assets/homepage/Partners/Ministry_of_Mines_India.svg.png",
  "/assets/homepage/Partners/RCPSDC.png",
  "/assets/homepage/Partners/Ministry_of_Skill_Development_and_Entrepreneurship.svg.png",
  "/assets/homepage/Partners/NBCFDC.png",
  "/assets/homepage/Partners/Ministry_of_Coal_India.svg.png",
  "/assets/homepage/Partners/IISSSC.jpg",
  "/assets/homepage/Partners/GOVT_OF_INDIA.png",
  "/assets/homepage/Partners/SCMS.png",
  "/assets/homepage/Partners/Ministry_of_Heavy_Industries_India.svg.png",
  "/assets/homepage/Partners/NSDC.png",
];

const corporatePartners = [
  "/assets/homepage/Partners/adani.png",
  "/assets/homepage/Partners/TATA_Communication.png",
  "/assets/homepage/Partners/asci.png",
  "/assets/homepage/Partners/TATA_Power.png",
  "/assets/homepage/Partners/JINDAL_STEEL.png",
  "/assets/homepage/Partners/TATA_STEEL.png",
  "/assets/homepage/Partners/mcl.png",
  "/assets/homepage/Partners/NLC.png",
];

const multilateralPartners = [
  "/assets/homepage/Partners/undp-logo-blue.svg",
  "/assets/homepage/Partners/GIZ.png",
  "/assets/homepage/Partners/UNICEF.png",
  "/assets/homepage/Partners/ILO.png",
  "/assets/homepage/Partners/UNIDO_Logo.svg.png",
  "/assets/homepage/Partners/United_Nations_Environment_Programme_Logo.svg.png",
];

// Memoized PartnerSection component
const PartnerSection = memo(({ title, partners, direction, borderSide }) => (
  <div className="relative flex justify-center items-center py-24">
    <div className="w-full relative z-10">
      <div className="flex flex-col items-center justify-center">
        <div className="absolute z-20 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center">
          <div className={`absolute top-0 left-0 w-full h-full border-${borderSide}-4 border-red-600 rounded-full`}></div>
          <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-red-600"></div>
          <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-red-600"></div>
          <div className="w-32 h-32 py-16 px-8 bg-red-600 rounded-full flex justify-center items-center">
            <span className="text-xl text-white font-bold">{title}</span>
          </div>
        </div>
      </div>
      <Marquee
        gradient={false}
        speed={50}
        direction={direction}
        pauseOnHover // Add interactivity
      >
        {partners.map((logo, index) => (
          <div key={index} className="mx-6" style={{ width: "200px", height: "80px" }}>
            <img
              src={logo}
              alt={`${title} Partner ${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              loading="lazy"
              onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
            />
          </div>
        ))}
      </Marquee>
    </div>
  </div>
));
PartnerSection.displayName = "PartnerSection";

const OurPartners = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center">
      <div className="flex justify-center mb-6">
        <Heading text="OUR PARTNERS" color="text-black" bgColor="bg-red-600" />
      </div>

      <div className="relative my-12 w-full">
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[3px] h-[550px] border-l-[3px] border-dashed border-red-600 z-0"></div>

        <PartnerSection title="Government" partners={governmentPartners} direction="left" borderSide="r" />
        <PartnerSection title="Corporate" partners={corporatePartners} direction="right" borderSide="l" />
        <PartnerSection title="Multilaterals" partners={multilateralPartners} direction="left" borderSide="r" />
      </div>
    </div>
  );
};

export default memo(OurPartners);