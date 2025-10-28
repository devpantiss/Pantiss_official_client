import React, { memo, useMemo } from "react";
import SDGSectionLogo from "./SDGSecction"; // Fixed typo in import

// Memoized SDG image URLs
const imageUrls = [
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656284/SDG_01_rxwvon.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656275/SDG_02_l8bt0n.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656299/SDG_03_kr8gwk.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656291/SDG_04_slrhvg.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656275/SDG_05_msbd9c.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656280/SDG_06_cmitwh.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656282/SDG_07_wbgukq.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656307/SDG_08_pvmxfh.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656273/SDG_09_rcwqkn.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656274/SDG_10_cybbhy.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656281/SDG_11_axpzxi.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656322/SDG_12_fawheu.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656288/SDG_13_qiv6hs.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656275/SDG_14_apixtw.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656274/SDG_15_fqppcu.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656294/SDG_16_a4nifb.jpg",
  "https://res.cloudinary.com/dxzhnns58/image/upload/v1761656303/SDG_17_lfrele.jpg",
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
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761657381/sdg_white_upqy1s.svg"
          alt="SDG Section Visual"
          className="w-[300px] h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default memo(SDGBanner);