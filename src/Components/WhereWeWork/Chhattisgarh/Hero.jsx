import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[100vh] w-full">
      {/* Background Image */}
      <img
        src="https://admin.concern.net/sites/default/files/styles/hero_tablet/public/media/images/2024-06/concern-rs58168-burkina-faso-idp-distribution.jpg?changed=2024-06-24T14:32:32+00:00"
        alt="Banner Background"
        className="h-full w-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="absolute container mx-auto bottom-10 left-44 text-white z-10">
        {/* Breadcrumb */}
        <p className="text-sm font-light mb-2">
          <Link to="/" className="text-gray-100 hover:underline underline-red-600">Home</Link> / <Link to="/where-we-work" className="text-gray-100 hover:underline">Where we work</Link> /
        </p>
        
        {/* Title */}
        <h1 className="text-4xl lg:text-7xl font-bold mb-4">Odisha</h1>
        
        {/* Time Spent */}
        <div className="flex items-center gap-2 bg-red-600 bg-opacity-80 py-2 px-4 rounded-md w-fit">
          <span className="text-lg font-bold">04</span>
          <span className="text-sm font-light uppercase">Years</span>
        </div>
      </div>

      {/* Share Section */}
      <div className="absolute top-10 left-10 z-10">
        <div className="flex flex-col items-center gap-3 bg-white bg-opacity-70 p-2 rounded-md shadow">
          <button className="text-red-600 hover:text-red-600">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="text-red-600 hover:text-red-600">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="text-red-600 hover:text-red-600">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
