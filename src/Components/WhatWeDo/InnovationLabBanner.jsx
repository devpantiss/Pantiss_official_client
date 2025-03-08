import React from "react";
import { Link } from "react-router-dom"; // If you want the button to be a link (optional)

const InnovationLabBanner = () => {
  return (
    <section
      className="w-full py-12 flex"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1741175253/ramon-salinero-vEE00Hx5d0Q-unsplash_tpvfkz.jpg')`, // Your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Half - Content Area */}
      <div className="w-1/2 h-full flex items-center justify-center px-8">
        <div className="flex flex-col items-center gap-y-8 text-center">
          {/* UNIDO Logo (Placeholder - replace with actual logo URL) */}
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727680521/pantiss_logo_kuiof0.png" // Your logo URL
            alt="UNIDO Logo"
            className="h-32"
          />
          {/* Innovation Lab Text */}
          <span className="text-white text-5xl font-semibold">Innovation Lab</span>

          {/* Main Text */}
          <h1 className="text-white text-2xl font-bold mb-10">
            We co-create human-centred innovations to help attain the SDGs
          </h1>

          {/* Button */}
          <Link
            to="/innovation-lab" // Replace with your desired link
            className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition-colors"
          >
            VISIT THE INNOVATION LAB →
          </Link>
        </div>
      </div>

      {/* Right Half - Empty Space (optional, can be removed if not needed) */}
      <div className="w-1/2 h-full"></div>
    </section>
  );
};

export default InnovationLabBanner;