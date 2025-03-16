import React, { useEffect, useRef } from "react";

const FeaturedPublicationBanner2 = () => {
  const bannerRef = useRef(null);

  return (
    <div
      ref={bannerRef}
      className="relative bg-cover bg-center h-[320px] flex justify-center items-center text-white overflow-hidden shadow-lg"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1599658880436-c61792e70672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGFzaGJvYXJkfGVufDB8MHwwfHx8Mg%3D%3D)`, // Replace with analytics-themed image if available
        backgroundAttachment: "fixed", // Fixed background
        backgroundRepeat: "no-repeat", // No repetition
        backgroundSize: "cover", // Full coverage
        backgroundPosition: "center", // Initial centering
        backgroundColor: "#1a202c", // Fallback color (gray-900)
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl justify-between w-full p-6">
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-6xl font-semibold mb-2">
            Data Analytics & Dashboard
          </h2>
          <p className="text-md md:text-lg text-gray-200 mb-4">
            Empowering decisions with real-time insights on farming trends and community impact.
          </p>
        </div>
        <button className="px-6 py-2 bg-red-600 rounded-md text-white font-medium hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 md:ml-4">
          Explore Dashboard
        </button>
      </div>
    </div>
  );
};

export default FeaturedPublicationBanner2;