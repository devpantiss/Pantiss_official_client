import React from "react";
import Marquee from "react-fast-marquee"; // We'll use this for the scrolling effect

const Exhibitors = () => {
  const multilateralPartners = [
    "https://indiacsrsummit.in/uploaded_files/35027bcc3624964f0c1387e6e031c4c2.jpg",
    "https://indiacsrsummit.in/uploaded_files/f15d935fdcd3f27ceda4d000070257eb.jpeg",
    "https://indiacsrsummit.in/uploaded_files/573e22af9ba527e5ed727676d73687af.png",
    "https://indiacsrsummit.in/uploaded_files/0334da765d56eee831c40d21a33a5cae.png",
    "https://indiacsrsummit.in/uploaded_files/bcb2c78c0665387959f378822254cf95.jpg",
    "https://indiacsrsummit.in/uploaded_files/ac2fd29688164f66e1c6bdee9154b269.png",
    "https://indiacsrsummit.in/uploaded_files/0bebb0d4cf8f18c095cab664b135d65c.png",
    "https://indiacsrsummit.in/uploaded_files/be3eed1f8970f4f2c531d77cb32a176c.png",
    "https://indiacsrsummit.in/uploaded_files/4af0c9921d09f3ffcfaaaf336d74169a.png",
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
              {multilateralPartners.map((logo, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center mx-2"
                >
                  <img
                    src={logo}
                    alt={`Market Partner ${index + 1}`}
                    className="h-20 w-48 object-contain"
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

export default Exhibitors;
