import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Heading from "../../Common/Heading";

const OurPartners = () => {
  const governmentPartners = [
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042390/Ministry_of_Heavy_Industries_India.svg_fhp1cc.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042392/ombadc_rmdidp.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042389/Ministry_of_Coal_India.svg_fyx0tc.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735041145/NSDC_luqbyd.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042390/Ministry_of_Mines_India.svg_hpnvzl.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042395/IISSSc_zizo9i.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042391/Ministry_of_Skill_Development_and_Entrepreneurship.svg_sbogu0.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042394/logo_1_gmmcfc.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042396/scms_arwl5f.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042585/Screenshot_2024-12-24_at_5.37.59_PM_eyqoun.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042586/Screenshot_2024-12-24_at_5.35.44_PM_c0akgs.png",
  ];

  const corporatePartners = [
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735042701/asci_xexfdv.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735041141/JINDAL_STEEL_wpau1m.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735041151/TATA_STEEL_hoirtn.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735041150/TATA_POWER_uayv1g.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735043985/Coal_India_Logo.svg_wwns1e.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735043985/Adani_2012_logo_tt0z21.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735044118/mcl_kjvbs7.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735044295/NLC_India_Limited.svg_ks2rjp.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735044515/Tata_Chemicals_Limited_-_Logo.svg_s5e9qn.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735044527/pngwing.com_bt3ngg.png",
  ];

  const multilateralPartners = [
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735041153/UNICEF_bgidzk.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735041138/GIZ_bsb7es.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735045063/United_Nations_Environment_Programme_Logo.svg_rp7oev.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735045063/UNIDO_Logo.svg_khx62n.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735045063/International_Labour_Organization_Logo.svg_fukuuq.png",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735045062/undp-logo-blue_wrebhi.svg",
  ];


  return (
    <div className="bg-white flex flex-col justify-center items-center container mx-auto py-14 px-12">
      <Heading text="OUR PARTNERS" color="text-black" bgColor="bg-red-600" />

      <div className="relative my-12 w-full">
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[3px] h-[480px] border-l-[3px] border-dashed border-red-600 z-0"></div>

        {/* Government Partners */}
        <div className="relative flex justify-center items-center pb-24">
          <div className="w-full relative">
            <div className="flex flex-col items-center justify-center">
              <div className="absolute z-20 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full border-r-4 border-red-600 rounded-full"></div>
                <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="w-32 h-32 z-30 py-16 px-8 bg-red-600 rounded-full flex justify-center items-center">
                  <span className="text-xl text-white font-bold">Government</span>
                </div>
              </div>
            </div>
            <Marquee
              gradient={false}
              speed={50}
              direction="left"
            >
              {governmentPartners.map((logo, index) => (
                <div key={index} className="mx-6" style={{ width: "200px", height: "80px" }}>
                  <img
                    src={logo}
                    alt={`Government Partner ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Corporate Partners */}
        <div className="relative flex justify-center items-center py-24">
          <div className="w-full relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="absolute z-20 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full border-l-4 border-red-600 rounded-full"></div>
                <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="w-32 h-32 py-16 px-8 bg-red-600 rounded-full flex justify-center items-center">
                  <span className="text-xl text-white font-bold">Corporate</span>
                </div>
              </div>
            </div>
            <Marquee
              gradient={false}
              speed={50}
              direction="right"
            >
              {corporatePartners.map((logo, index) => (
                <div key={index} className="mx-6" style={{ width: "200px", height: "80px" }}>
                  <img
                    src={logo}
                    alt={`Corporate Partner ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        {/* Multilateral Partners */}
        <div className="relative flex justify-center items-center pt-24">
          <div className="w-full relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="absolute z-20 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full border-r-4 border-red-600 rounded-full"></div>
                <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="w-32 h-32 py-16 px-8 bg-red-600 rounded-full flex justify-center items-center">
                  <span className="text-xl text-white font-bold">Multilaterals</span>
                </div>
              </div>
            </div>
            <Marquee
              gradient={false}
              speed={50}
              direction="left"
            >
              {multilateralPartners.map((logo, index) => (
                <div key={index} className="mx-6" style={{ width: "200px", height: "80px" }}>
                  <img
                    src={logo}
                    alt={`Multilateral Partner ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;