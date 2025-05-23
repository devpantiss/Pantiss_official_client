import React, { memo, useMemo } from "react";

const BannerSkills = memo(() => {
  // Memoize static video attributes to avoid re-computation
  const videoAttributes = useMemo(
    () => ({
      src: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735223596/Rehab_1_kvwix1.mp4",
      poster: "https://via.placeholder.com/1920x1080?text=Video+Loading",
    }),
    []
  );

  return (
    <section
      className="relative w-full h-[70vh] md:h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300"
      aria-label="Skill Training Banner"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <video
          src={videoAttributes.src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-70 will-change-transform"
          poster={videoAttributes.poster}
          preload="metadata"
          aria-hidden="true"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6 md:space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-tight">
            <span className="block text-red-500">Skill Training</span>
            <span className="block mt-2">for Mining Affected Youth</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            We empower mining-affected youth with skill training programs,
            equipping them with vocational expertise, job-ready skills, and
            opportunities for sustainable livelihoods to build a brighter
            future.
          </p>
          <a
            href="#learn-more"
            className="inline-flex items-center px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-600 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
            aria-label="Explore Our Programs"
          >
            Explore Our Programs
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className="w-6 h-10 border-2 border-white/80 rounded-full flex items-start justify-center p-2 animate-bounce"
          aria-hidden="true"
        >
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
});

// Add display name for better debugging
BannerSkills.displayName = "BannerSkills";

export default BannerSkills;