import React from "react";
import Heading from "../Common/Heading";

const programs = [
  {
    title: "Youth For Skills: Connecting local youth with global minds",
    points: ["Skills development", "Decent Living"],
  },
  {
    title: "Vistaar: Alternative Livelihoods & Enterprises",
    points: [
      "Ultra Poor Graduation",
      "Sustainable Enterprises",
      "Financial Inclusion",
    ],
  },
  {
    title: "WASH & Climate Change",
    points: [
      "WASH",
      "Climate Change & Natural Resource Management",
      "Disaster Risk Management",
    ],
  },
  {
    title: "Mining & Public Health",
    points: ["Health and population", "Nutrition"],
  },
  {
    title: "Mining Affected Community Institution",
    points: [
      "Rehabilitation & Resettlement",
      "Legal entitlements for mining affected",
    ],
  },
];

const SocialDevPrograms = () => {
  return (
    <div className="flex flex-col items-center py-10 px-10 bg-gradient-to-b from-white to-gray-100">
      <div className="text-center flex justify-start items-center mb-2">
        <Heading
          text="SOCIAL DEVELOPMENT for Mining Affected Community
"
          colors="text-white"
          bgColor="bg-red-600"
        />
      </div>

 
      {/* Grid for Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4 lg:px-0">
        {programs.map((program, index) => (
          <div
            key={index}
            className="relative bg-white text-gray-800 rounded-lg shadow-lg max-w-sm w-full transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl"
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-500 rounded-lg z-0"></div>

            {/* Title Section */}
            <h3 className="text-2xl p-2 h-[80px] text-center text-white font-semibold mb-4 relative z-10">
              {program.title}
            </h3>

            {/* Points Section */}
            <ul className="bg-white ring-2 h-[160px] ring-red-600 p-4 rounded-md relative z-10 space-y-2">
              {program.points.map((point, idx) => (
                <li key={idx} className="flex text-[16px] items-center">
                  <span className="mr-2 text-red-500">★</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialDevPrograms;
