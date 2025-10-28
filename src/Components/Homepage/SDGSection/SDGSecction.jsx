import React, { memo } from "react";
import "./sdgSection.css"; // Ensure this path matches your project structure

const SDGSectionLogo = () => {
  return (
    <div className="relative w-60 h-60 flex justify-center items-center">
      {/* Rotating colorful circle logo */}
      <img
        src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761654139/sdg-wheel_vyp9zv.svg"
        alt="SDG Rotating Wheel"
        className="w-60 h-60 animate-rotate"
        loading="lazy"
      />

      {/* White semicircle overlay */}
      <div className="absolute bottom-0 w-60 h-32 bg-white rounded-b-full flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761656837/Pantiss_SDG_rbjfkx.png"
          alt="Company Logo"
          className="w-56"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default memo(SDGSectionLogo);