import React from 'react';
import { Link } from "react-router-dom";


const SummitBanner = () => {
  return (
    <div className="relative w-full h-[400px]">
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover" 
        src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1726137056/niyamgiri_j8uqux.mp4" 
        autoPlay 
        muted 
        loop 
        playsInline
      />
      
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-20 p-4">
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6 text-lg sm:text-xl">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-bold mb-2">Mining Villages Summit</span>
              <p className="text-[14px] leading-1 lg:w-[500px] text-center">The Mining Villages Summit, India is a forum that brings together stakeholders to discuss sustainable development and upliftment of mining-affected communities. It focuses on improving livelihoods, environmental conservation, and social welfare through partnerships and innovative solutions.</p>
            </div>
           
            <div className="relative flex flex-col items-center">
              <span className="text-4xl font-bold">PANTISS MINING FELLOWSHIP</span>
              <img 
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726138831/Screenshot_2024-09-12_162917-removebg-preview_i4rukm.png"
                className="absolute -top-8 left-1 h-16 w-16"  
              />
              <Link className="mt-4 px-4 py-2 bg-transparent ring-2 ring-white text-white hover:text-red-600">
                Explore More
            </Link>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Dark overlay for the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
    </div>
  );
};

export default SummitBanner;
