import React from 'react';
import './sdgSection.css'; // For custom CSS

const SDGSectionLogo = () => {
  return (
    <div className="relative w-60 h-60 flex justify-center items-center bg-transparent">
      {/* Rotating colorful circle logo */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726057557/sdg-wheel_vqb3ar.svg" // Replace with actual image path
          alt="Rotating Logo"
          className="w-60 h-60 animate-rotate"
        />
      </div>

      {/* White semicircle overlay */}
      <div className="absolute top-30 bottom-0 left-0 right-0 flex justify-center items-center">
        <div className="relative w-60 h-32 bg-white rounded-b-full overflow-hidden z-10">
          {/* Company logo inside the white semicircle */}
          <img
            src="https://i.postimg.cc/7hhdCGBj/Untitled-design-2-removebg-preview.png" // Replace with actual image path
            alt="Company Logo"
            className="absolute -top-10 inset-0 mx-auto my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SDGSectionLogo;
