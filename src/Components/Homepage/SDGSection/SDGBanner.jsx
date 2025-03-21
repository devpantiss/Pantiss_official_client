import React, { memo, useMemo } from "react";
import SDGSectionLogo from "./SDGSecction"; // Fixed typo in import

// Memoized SDG image URLs
const imageUrls = [
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725875000/Goal_1_ztbv1x.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874995/Goal_2_gzyhxw.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874995/Goal_3_orzwqd.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874989/Goal_4_kjq5if.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874989/Goal_5_e3jnf4.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874983/Goal_6_j3mbwk.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874976/Goal_7_enj3as.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874978/Goal_8_saoq0b.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874967/Goal_9_c0uud3.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874965/Goal_10_s6xraq.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874961/Goal_11_gw4ilj.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874966/Goal_12_jhbwva.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874960/Goal_13_bprlxz.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874953/Goal_14_dork5r.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874951/Goal_15_lfbqkj.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874944/Goal_16_feir8f.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_80/v1725874944/Goal_17_ngnox2.jpg",
];

const SDGBanner = () => {
  // Memoized image grid
  const imageGrid = useMemo(
    () =>
      imageUrls.map((url, index) => (
        <div
          key={index}
          className="w-20 h-20 bg-white p-1 rounded-md shadow-md"
        >
          <img
            src={url}
            alt={`Sustainable Development Goal ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
            loading="lazy"
          />
        </div>
      )),
    []
  );

  return (
    <div className="bg-red-600 py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-y-8 lg:gap-x-16 px-4">
        <SDGSectionLogo />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {imageGrid}
        </div>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_300/v1726063410/Screenshot_2024-09-11_193152-removebg-preview_gcwboe.png"
          alt="SDG Section Visual"
          className="max-w-full max-h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default memo(SDGBanner);