import React from 'react';

const AboutPageBanner = () => {
  return (
    <div className="relative bg-red-600 text-white py-10 h-[70vh]">
      {/* Banner Image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{
        backgroundImage: 'url("https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725882258/laurentiu-morariu-NKdX-c5z080-unsplash_pg9zmf.jpg")'  // Replace with your image URL
      }}></div>

      {/* Overlay */}
      <div className="relative z-10 px-6 bg-black/30 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center">
          ABOUT US        
        </h1>


        {/* Image Grid */}
        <div className="mt-8 grid grid-cols-3 gap-4 justify-center">
          <img
            src="https://pantiss.com/wp-content/uploads/2022/08/pic-6.jpg"
            alt="Participant 1"
            className="rounded-full w-24 h-24 object-cover"
          />
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725877913/viktor-kiryanov-lAcYPEiau0U-unsplash_h8zwz9.jpg"
            alt="Participant 2"
            className="rounded-full w-24 h-24 object-cover"
          />
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1725882100/jay-bhadreshwara-lux0psvZGLU-unsplash_vc3yje.jpg"
            alt="Participant 3"
            className="rounded-full w-24 h-24 object-cover"
          />
          {/* Add more participants as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutPageBanner;
