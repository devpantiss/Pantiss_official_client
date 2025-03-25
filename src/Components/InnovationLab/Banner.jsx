import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[600px] sm:h-[700px] md:h-[800px] text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/portal-games_1268-28265.jpg?t=st=1742898702~exp=1742902302~hmac=e4fb28f6b6ac6fd288adb82292dfedd99f8f37de9ce461b255c238c604ea3694&w=900')`,
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Slightly darker overlay for better contrast
      }}
      role="banner"
      aria-label="Innovation in Mining Skills Hero Section"
    >
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Headline with Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-down">
          <span className="text-red-600">DARE MIGHTY THINGS</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            INNOVATING MINING SKILLS
          </span>
        </h1>

        {/* Subheading Links with Hover Effects */}
        <div className="hidden md:flex justify-center space-x-6 mb-10">
          {[
            "Advanced Training Solutions",
            "Immersive AR/VR Simulators",
            "Real-Time Workforce Analytics",
            "Sustainable Mining Practices",
            "Industry-Driven Partnerships",
          ].map((link, index) => (
            <Link
              key={index}
              to="#"
              className="text-sm uppercase text-gray-300 hover:text-red-600 hover:scale-105 transform transition-all duration-300"
              aria-label={link}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Stats Grid with Hover Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full px-4">
          {/* Training Programs */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30">
            <h2 className="text-4xl font-bold text-red-600 mb-2">12</h2>
            <p className="text-lg font-semibold uppercase text-gray-100">
              Training Programs
            </p>
            <p className="text-sm text-gray-300">Currently Active</p>
          </div>

          {/* Training Duration */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30">
            <h2 className="text-4xl font-bold text-red-600 mb-2">03: 06: 15</h2>
            <p className="text-lg font-semibold uppercase text-gray-100">
              Training Duration
            </p>
            <p className="text-sm text-gray-300">YRS : MOS : DAYS</p>
          </div>

          {/* Skill Cafe Network */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30">
            <h2 className="text-4xl font-bold text-red-600 mb-2">
              Currently Active
            </h2>
            <p className="text-lg font-semibold uppercase text-gray-100">
              Skill Cafe Network
            </p>
            <p className="text-sm text-gray-300">Koraput Center</p>
          </div>

          {/* Next Cohort */}
          <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30">
            <h2 className="text-4xl font-bold text-red-600 mb-2">
              Next Cohort Apr 2025
            </h2>
            <p className="text-lg font-semibold uppercase text-gray-100">
              Mining Skills Cohort
            </p>
            <p className="text-sm text-gray-300 flex items-center">
              Heavy Machinery • 500 Slots
              <Link
                to="#"
                className="ml-2 text-red-600 hover:text-red-400 inline-flex items-center transform transition-all duration-300 hover:scale-110"
                aria-label="View more mining skills cohort details"
              >
                <span className="mr-1">→</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;