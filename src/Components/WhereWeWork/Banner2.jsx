import React from "react";

const Banner2 = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4 lg:flex lg:items-center">
        {/* Left Image Section */}
        <div className="lg:w-1/2">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737008646/WhatsApp_Image_2025-01-16_at_11.52.30_AM_fnv3iz.jpg"
            alt="Mining affected village"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content Section */}
        <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
          {/* Tag */}
          <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block">
            MINING-AFFECTED VILLAGES
          </span>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            Transforming Lives in Mining-Affected Villages
          </h2>

          {/* Story */}
          <p className="text-gray-600 mt-4 leading-relaxed">
            The journey to uplift mining-affected villages began with a simple
            yet powerful mission: to restore hope and provide sustainable
            solutions for communities severely impacted by years of mining
            activities. By collaborating with local organizations, we have been
            addressing critical challenges such as unemployment, poor
            sanitation, and inadequate living conditions.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Through livelihood programs, residents are now equipped with
            skills in agriculture, small-scale businesses, and sustainable
            farming practices. Sanitation facilities have been installed,
            improving public health and reducing waterborne diseases. Housing
            projects have provided families with safe and comfortable living
            spaces, bringing a sense of dignity and security back to their
            lives.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Our efforts also focus on empowering women and youth through
            educational initiatives, ensuring long-term community development.
            Together, we are building a resilient and thriving environment
            where every individual has the opportunity to reach their full
            potential.
          </p>
        </div>
      </div>

      {/* Buttons */}
      {/* <div className="mt-8 text-center">
        <div className="inline-flex space-x-4">
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
            OUR WORK
          </button>
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
            OUR STORY
          </button>
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
            LATEST FROM US
          </button>
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors">
            LEADERSHIP
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Banner2;
