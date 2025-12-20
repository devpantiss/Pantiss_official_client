import React, { memo } from "react";
import Marquee from "react-fast-marquee";
import Heading from "../../Common/Heading";

// Memoized static partner data
const governmentPartners = [
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681337/Ministry_of_Mines_India.svg_u1zqcn.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681341/RCPSDC_ag2fwu.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681333/Ministry_of_Skill_Development_and_Entrepreneurship.svg_umc1vh.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681346/NBCFDC_timjzi.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681328/Ministry_of_Coal_India.svg_ae47la.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681316/IISSSC_kpuz8u.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681324/GOVT_OF_INDIA_axryim.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681320/SCMS_ehl7t2.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681308/Ministry_of_Heavy_Industries_India.svg_qpply8.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761681310/NSDC_uhnrq9.png",
];

const corporatePartners = [
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682066/adani_a61rst.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682094/TATA_Communication_xfp9ha.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682070/asci_n9mk9g.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682110/TATA_Power_ylzpdt.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682074/JINDAL_STEEL_enmfkd.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682114/TATA_STEEL_abtxt4.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682079/mcl_dxroe8.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682088/NLC_mlmpb7.png",
];

const multilateralPartners = [
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682341/undp-logo-blue_tnhdpg.svg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682345/GIZ_fh9cts.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682350/UNICEF_ujpduu.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682357/ILO_w4mb5n.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682365/UNIDO_Logo.svg_vu7hvv.png",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682371/United_Nations_Environment_Programme_Logo.svg_bmaypr.png",
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