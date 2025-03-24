import React, { memo } from "react";
import { Link } from "react-router-dom";

// Memoized LeftContent component
const LeftContent = memo(() => (
  <div className="relative flex flex-col items-center">
    <span className="text-4xl font-bold mb-2 z-50">
      Mining Villages Summit-'24
    </span>
    <p>Niyamgiri</p>
    <img
      src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1726143053/Screenshot_2024-09-12_174007-removebg-preview_d7s8vj.png"
      alt="Summit Logo"
      className="absolute -top-5 -left-[50px] z-10 lg:-top-6 lg:left-1 h-20 w-40"
      loading="lazy"
    />
    <p className="text-[14px] leading-tight lg:w-[500px] text-center">
      The Mining Villages Summit, India is a forum that brings together stakeholders to discuss sustainable development and upliftment of mining-affected communities.
    </p>
    <Link
      to="/summit"
      className="mt-4 px-4 py-2 bg-transparent ring-2 ring-white text-white hover:text-red-600 hover:bg-white transition-all duration-300 ease-in-out"
    >
      Explore More
    </Link>
  </div>
));
LeftContent.displayName = "LeftContent";

// Memoized RightContent component
const RightContent = memo(() => (
  <div className="relative flex flex-col items-center">
    <span className="text-4xl font-bold">
      PANTISS MINING FELLOWSHIP-'24
    </span>
    <img
      src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_50/v1726138831/Screenshot_2024-09-12_162917-removebg-preview_i4rukm.png"
      alt="Fellowship Logo"
      className="absolute -top-6 left-14 z-10 lg:-top-6 lg:-left-6 h-12 w-12"
      loading="lazy"
    />
    <div className="flex gap-x-4">
      <p>Kalahandi</p>
      <div className="lg:h-[30px] lg:w-[2px] lg:rotate-0 rotate-90 bg-white opacity-70"></div>
      <p>Bastar</p>
      <div className="lg:h-[30px] lg:w-[2px] lg:rotate-0 rotate-90 bg-white opacity-70"></div>
      <p>Kodarma</p>
    </div>
    <Link
      to="/fellowship"
      className="mt-4 px-4 py-2 bg-transparent ring-2 ring-white text-white hover:text-red-600 hover:bg-white transition-all duration-300 ease-in-out"
    >
      Explore More
    </Link>
  </div>
));
RightContent.displayName = "RightContent";

const SummitBanner = () => {
  return (
    <div className="relative w-full lg:h-[600px] h-[700px]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://res.cloudinary.com/dgtc2fvgu/video/upload/c_scale,w_1200,q_auto:good/v1726137056/niyamgiri_j8uqux.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata" // Optimize video loading
      />

      {/* Dark overlay for the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-5 p-4">
        <div className="text-center">
          <div className="relative flex flex-col lg:flex-row justify-between items-center gap-x-28 gap-y-6 text-lg sm:text-xl">
            <LeftContent />
            <div className="lg:h-[150px] lg:w-[2px] lg:rotate-0 rotate-90 bg-white opacity-70"></div>
            <RightContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(SummitBanner);