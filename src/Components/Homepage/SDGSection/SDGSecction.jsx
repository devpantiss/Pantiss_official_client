import React, { memo } from "react";
import "./sdgSection.css"; // Ensure this path matches your project structure

const SDGSectionLogo = () => {
  return (
    <div className="relative w-60 h-60 flex justify-center items-center">
      {/* Rotating colorful circle logo */}
      <img
        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_240/v1726057557/sdg-wheel_vqb3ar.svg"
        alt="SDG Rotating Wheel"
        className="w-60 h-60 animate-rotate"
        loading="lazy"
      />

      {/* White semicircle overlay */}
      <div className="absolute bottom-0 w-60 h-32 bg-white rounded-b-full flex justify-center items-center">
        <img
          src="https://i.postimg.cc/7hhdCGBj/Untitled-design-2-removebg-preview.png"
          alt="Company Logo"
          className="w-56"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default memo(SDGSectionLogo);