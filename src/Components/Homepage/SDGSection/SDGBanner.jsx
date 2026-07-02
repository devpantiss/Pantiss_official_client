import React, { memo, useMemo } from "react";
import SDGSectionLogo from "./SDGSecction"; // Fixed typo in import

// Memoized SDG image URLs
const imageUrls = [
  "/assets/homepage/SDG/Goals/SDG_01.jpg",
  "/assets/homepage/SDG/Goals/SDG_02.jpg",
  "/assets/homepage/SDG/Goals/SDG_03.jpg",
  "/assets/homepage/SDG/Goals/SDG_04.jpg",
  "/assets/homepage/SDG/Goals/SDG_05.jpg",
  "/assets/homepage/SDG/Goals/SDG_06.jpg",
  "/assets/homepage/SDG/Goals/SDG_07.jpg",
  "/assets/homepage/SDG/Goals/SDG_08.jpg",
  "/assets/homepage/SDG/Goals/SDG_09.jpg",
  "/assets/homepage/SDG/Goals/SDG_10.jpg",
  "/assets/homepage/SDG/Goals/SDG_11.jpg",
  "/assets/homepage/SDG/Goals/SDG_12.jpg",
  "/assets/homepage/SDG/Goals/SDG_13.jpg",
  "/assets/homepage/SDG/Goals/SDG_14.jpg",
  "/assets/homepage/SDG/Goals/SDG_15.jpg",
  "/assets/homepage/SDG/Goals/SDG_16.jpg",
  "/assets/homepage/SDG/Goals/SDG_17.jpg",
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
          src="/assets/homepage/SDG/sdg_white.svg"
          alt="SDG Section Visual"
          className="w-[300px] h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default memo(SDGBanner);