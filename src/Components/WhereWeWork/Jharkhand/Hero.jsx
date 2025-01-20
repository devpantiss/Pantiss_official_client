import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-[100vh] w-full">
      {/* Background Image */}
      <img
        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737387184/Tata_Steel_TV-TataSteel_IJM-by-night_HO6-7_bn5taz.jpg"
        alt="Banner Background"
        className="h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="absolute container mx-auto bottom-10 left-44 text-white z-10">
        {/* Breadcrumb */}
        <p className="text-sm font-light mb-2">
          <Link
            to="/"
            className="text-gray-100 hover:underline underline-red-600"
          >
            Home
          </Link>{" "}
          /{" "}
          <Link to="/where-we-work" className="text-gray-100 hover:underline">
            Where we work
          </Link>{" "}
          /
        </p>

        {/* Title */}
        <h1 className="text-4xl lg:text-7xl font-bold mb-4">Jharkhand</h1>

        {/* Time Spent */}
        <div className="flex items-center gap-2 bg-red-600 bg-opacity-80 py-2 px-4 rounded-md w-fit">
          <span className="text-lg font-bold">01</span>
          <span className="text-sm font-light uppercase">Year</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
