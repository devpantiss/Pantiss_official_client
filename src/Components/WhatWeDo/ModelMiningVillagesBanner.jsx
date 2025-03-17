import React from "react";
import { Link } from "react-router-dom";

const ModelMiningVillagesBanner = () => {
  return (
    <section
      className="relative w-full py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738924847/jharsuguda_zlzcyq.avif')`,
      }}
    >
      {/* Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />

      {/* Content Container */}
      <div className="relative container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Left Section: Description and Button */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-white text-xl md:text-2xl font-medium leading-relaxed max-w-lg mb-8">
            Transforming mining communities into sustainable, thriving villages through innovation, education, and eco-friendly practices—paving the way for a resilient future aligned with the SDGs.
          </h1>
          <Link
            to="/what-we-do/model-mining-village-in-making"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            aria-label="Explore Model Mining Village in Making"
          >
            Explore Model Mining Villages →
          </Link>
        </div>

        {/* Right Section: Logo and Tagline */}
        <div className="md:w-1/2 flex flex-col items-center md:items-center text-center">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727680521/pantiss_logo_kuiof0.png"
            alt="Pantiss Logo"
            className="h-24 md:h-28 mb-6"
            loading="lazy"
          />
          <span className="text-white text-3xl md:text-5xl font-semibold tracking-tight">
            Model Mining Village in Making
          </span>
        </div>
      </div>
    </section>
  );
};

export default ModelMiningVillagesBanner;