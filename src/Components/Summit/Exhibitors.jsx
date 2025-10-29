import React from "react";
import Marquee from "react-fast-marquee"; // We'll use this for the scrolling effect

const Exhibitors = () => {
  
  const multilateralPartners = [
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682066/adani_a61rst.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682094/TATA_Communication_xfp9ha.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682070/asci_n9mk9g.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682110/TATA_Power_ylzpdt.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682074/JINDAL_STEEL_enmfkd.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682114/TATA_STEEL_abtxt4.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682079/mcl_dxroe8.png",
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682088/NLC_mlmpb7.png",
  ];

  return (
    <div className="bg-white flex flex-col justify-center items-center container mx-auto py-6 px-12">
      <div className="relative my-12">
        {/* Section for Multilateral Partners */}
        <div className="relative flex justify-center items-center">
          {/* Solid Semicircle */}
          <div className="w-full relative z-10">
            <div className="flex flex-col items-center justify-center">
              <div className="absolute z-10 h-44 w-44 rounded-full bg-white -top-10 flex flex-col justify-center items-center">
                <div className="absolute top-0 left-0 w-full h-full border-r-4 border-red-600 rounded-full"></div>{" "}
                {/* Half ring */}
                <div className="absolute -top-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="absolute -bottom-[5px] h-3 w-3 rounded-full bg-red-600"></div>
                <div className="w-32 h-32 py-16 px-8 bg-red-600 rounded-full flex justify-center items-center">
                  <span className="text-xl text-white font-bold">
                    Exhibitors
                  </span>
                </div>
              </div>
            </div>
            <Marquee
              gradient={false}
              speed={50}
              className="overflow-hidden"
              loop={0} // Continuous scrolling without stopping
            >
              <div className="flex space-x-10">
                {multilateralPartners.map((logo, index) => (
                  <div key={index} className="mx-4 flex justify-center items-center">
                    <img
                      src={logo}
                      alt={`Market Partner ${index + 1}`}
                      className="h-20 w-48 object-contain"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitors;
