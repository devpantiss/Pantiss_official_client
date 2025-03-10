// ChallengesResponseSkills.js
import React from "react";
import Heading from "../../../Common/Heading";

// Placeholder for icons (you can replace these with actual SVGs or image imports)
const IconData = () => (
  <svg
    className="w-8 h-8 text-red-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 17v-6h6v6m-3-6v6m-6 0h12m-9-9h6m-9 0h6m-9 0v12m12-12v12"
    />
  </svg>
);

const IconCompliance = () => (
  <svg
    className="w-8 h-8 text-red-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 8v4m0 4h.01M4 4h16v16H4V4z"
    />
  </svg>
);

const IconCommunity = () => (
  <svg
    className="w-8 h-8 text-red-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 4.5c2.67 0 5.33 1.67 8 5s4 7 4 10.5H0c0-3.5 1.33-7 4-10.5S9.33 4.5 12 4.5z"
    />
  </svg>
);

const IconMonitoring = () => (
  <svg
    className="w-8 h-8 text-red-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 18v-6h6v6m6-6h6v6m-9-9v6m-6-6h12m-9-9h6m-9 0h6m-9 0v12m12-12v12"
    />
  </svg>
);

const ChallengesResponseSkills = () => {
  const initiatives = [
    {
      challenge: "Data",
      icon: <IconData />,
      title: "Establishing Comprehensive Baseline Surveys",
      description:
        "Conduct thorough multi-seasonal environmental and social baseline surveys to address the lack of comprehensive data, enabling accurate EIA/SIA for mining land acquisition despite time constraints.",
      focus:
        "Focus on remote mining regions with limited historical data, expandable to other sites.",
    },
    {
      challenge: "Compliance",
      icon: <IconCompliance />,
      title: "Harmonizing Local and International Standards",
      description:
        "Develop a framework to align government-led land acquisition with international standards (e.g., IFC Performance Standards), ensuring compliance and reducing displacement conflicts in mining projects.",
      focus:
        "Applicable to regions with varying regulatory frameworks, scalable globally.",
    },
    {
      challenge: "Engagement",
      icon: <IconCommunity />,
      title: "Enhancing Community Consultation Processes",
      description:
        "Implement robust consultation mechanisms to engage Indigenous and local communities, addressing resettlement, livelihood loss, and cultural impacts from mining land acquisition.",
      focus:
        "Targeted at mining areas with Indigenous populations, expandable to affected communities.",
    },
    {
      challenge: "Monitoring",
      icon: <IconMonitoring />,
      title: "Implementing Long-Term Environmental Monitoring",
      description:
        "Establish a sustainable monitoring system with standardized indicators to track environmental degradation (e.g., water contamination, deforestation) from mining land acquisition over time.",
      focus:
        "Focused on remote mining sites with weak governance, expandable to all operations.",
    },
  ];

  return (
    <section className="bg-white text-white">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <Heading text="CHALLENGES RESPONSE" color="text-black" bgColor="bg-red-500" />

        <p className="text-lg md:text-xl text-black text-center lg:text-left mb-12">
          Key challenges and solutions in EIA/SIA for land acquisition in mining
          projects.
        </p>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="bg-white border-4 border-red-600 text-black p-6 rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-x-3">
                  <div className="mb-2 p-3 border-4 flex justify-center items-center rounded-md border-red-600">
                    {initiative.icon}
                  </div>
                  <div className="mb-2 p-3 text-xl flex justify-center items-center font-bold rounded-md w-full text-white bg-red-600">
                    {initiative.challenge}
                  </div>
                </div>
                <hr className="border-red-600"/>
                <h3 className="text-xl font-semibold my-2">{initiative.title}</h3>
                <p className="text-gray-700 mb-4">{initiative.description}</p>
              </div>
              <hr className="border-red-600"/>
              <p className="text-gray-600 italic my-2">{initiative.focus}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesResponseSkills;