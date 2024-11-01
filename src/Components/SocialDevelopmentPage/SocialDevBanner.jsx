import React from "react";

const SocialDevBanner = () => {
  return (
    <section className="relative">
      <img
        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729513838/PIC-13_ghirsr.jpg"
        alt="Life at Lords"
        className="w-full h-[400px] lg:h-[800px] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
        <div className="text-center text-white px-6">
          <h1 className=" text-4xl md:text-6xl border-b-4 border-t-4 border-red-600 font-bold mb-4">
            Social Development Around Mines
          </h1>
          <p className="text-xl md:text-2xl">
            Solutions for Social Challenges & Surplus for Greater Impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialDevBanner;
