import React, { memo } from "react";
import { Link } from "react-router-dom";

// Memoized Content component
const BannerContent = memo(() => (
  <div className="flex flex-col items-center gap-y-8 text-center">
    {/* UNIDO Logo */}
    <img
      src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_200/v1727680521/pantiss_logo_kuiof0.png"
      alt="UNIDO Logo"
      className="h-32"
      loading="lazy"
    />
    {/* Innovation Lab Text */}
    <span className="text-white text-5xl font-semibold">Innovation Lab</span>

    {/* Main Text */}
    <h1 className="text-white text-2xl font-bold mb-10 max-w-lg">
      We co-create human-centred innovations to help attain the SDGs
    </h1>

    {/* Button */}
    <Link
      to="/innovation-lab"
      className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition-colors duration-300 ease-in-out"
    >
      VISIT THE INNOVATION LAB →
    </Link>
  </div>
));
BannerContent.displayName = "BannerContent";

const InnovationLabBanner = () => {
  return (
    <section
      className="w-full py-12 flex"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_1200,q_auto:good/v1741175253/ramon-salinero-vEE00Hx5d0Q-unsplash_tpvfkz.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Left Half - Content Area */}
      <div className="w-1/2 h-full flex items-center justify-center px-4 sm:px-8">
        <BannerContent />
      </div>

      {/* Right Half - Empty Space */}
      <div className="w-1/2 h-full"></div>
    </section>
  );
};

export default memo(InnovationLabBanner);