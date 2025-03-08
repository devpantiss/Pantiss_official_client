// SolutionsRestoration.js
import React from "react";
import Heading from "../../../Common/Heading";

// Placeholder for the mobile icon (similar to the one in the image)
const IconMobile = () => (
  <svg
    className="w-16 h-20 text-red-600 mx-auto mb-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 15v-3m0 0l-3 3m3-3l3 3"
    />
  </svg>
);

// Placeholder image import (replace with the actual image path)

const SolutionsRestoration = () => {
  const initiatives = [
    {
      challenge: "Data",
      icon: <IconMobile />, // Reusing the mobile icon for consistency
      title: "Establishing Comprehensive Baseline Surveys",
      description:
        "Conduct thorough multi-seasonal environmental and social baseline surveys to address the lack of comprehensive data, enabling accurate EIA/SIA for mining land acquisition despite time constraints.",
      focus:
        "Focus on remote mining regions with limited historical data, expandable to other sites.",
    },
    {
      challenge: "Compliance",
      icon: <IconMobile />,
      title: "Harmonizing Local and International Standards",
      description:
        "Develop a framework to align government-led land acquisition with international standards (e.g., IFC Performance Standards), ensuring compliance and reducing displacement conflicts in mining projects.",
      focus:
        "Applicable to regions with varying regulatory frameworks, scalable globally.",
    },
    {
      challenge: "Engagement",
      icon: <IconMobile />,
      title: "Enhancing Community Consultation Processes",
      description:
        "Implement robust consultation mechanisms to engage Indigenous and local communities, addressing resettlement, livelihood loss, and cultural impacts from mining land acquisition.",
      focus:
        "Targeted at mining areas with Indigenous populations, expandable to affected communities.",
    },
    {
      challenge: "Monitoring",
      icon: <IconMobile />,
      title: "Implementing Long-Term Environmental Monitoring",
      description:
        "Establish a sustainable monitoring system with standardized indicators to track environmental degradation (e.g., water contamination, deforestation) from mining land acquisition over time.",
      focus:
        "Focused on remote mining sites with weak governance, expandable to all operations.",
    },
  ];

  // Use the first initiative for the main display (as per the image)
  const mainSolution = initiatives[0];

  return (
    <section className="py-6 border-t-3 border-red-600 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title and Icon */}
        <Heading text="DATA SOLUTIONS" color="text-black" bgColor="bg-red-500" />

        {/* <div className="flex justify-center">
          <IconMobile />
        </div> */}

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 border border-red-600 rounded-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRhdGElMjBzb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D" 
              alt="Mining consultation"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 text-left">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              {mainSolution.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {mainSolution.description}
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              {mainSolution.focus}
            </p>
            <div className="mt-4">
              <span className="text-red-600 font-bold">FarmGrow</span> - A
              digital tool for mining impact assessment.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Title and Icon */}
        <Heading text="COMPLIANCE SOLUTIONS" color="text-black" bgColor="bg-red-500" />

        {/* <div className="flex justify-center">
          <IconMobile />
        </div> */}

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-8 border border-red-600 rounded-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1627634771521-9754fe2bc49b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbXBsaWFuY2UlMjBzb2x1dGlvbnN8ZW58MHwwfDB8fHww"
              alt="Mining consultation"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pr-6 text-left">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              {mainSolution.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {mainSolution.description}
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              {mainSolution.focus}
            </p>
            <div className="mt-4">
              <span className="text-red-600 font-bold">FarmGrow</span> - A
              digital tool for mining impact assessment.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Title and Icon */}
        <Heading text="ENGAGEMENT SOLUTIONS" color="text-black" bgColor="bg-red-500" />

        {/* <div className="flex justify-center">
          <IconMobile />
        </div> */}

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 border border-red-600 rounded-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1705317716028-ceaa9f2d1786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVibGljJTIwZW5nYWdlbWVudCUyMHNvbHV0aW9uc3xlbnwwfDB8MHx8fDA%3D" // Replace with the actual image path
              alt="Mining consultation"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-6 text-left">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              {mainSolution.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {mainSolution.description}
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              {mainSolution.focus}
            </p>
            <div className="mt-4">
              <span className="text-red-600 font-bold">FarmGrow</span> - A
              digital tool for mining impact assessment.
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* Title and Icon */}
        <Heading text="MONITORING SOLUTIONS" color="text-black" bgColor="bg-red-500" />

        {/* <div className="flex justify-center">
          <IconMobile />
        </div> */}

        {/* Image and Description */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between mt-8 border border-red-600 rounded-lg p-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcmluZyUyMHNvbHV0aW9uc3xlbnwwfDB8MHx8fDA%3D" // Replace with the actual image path
              alt="Mining consultation"
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pr-6 text-left">
            <h3 className="text-xl font-semibold text-red-600 mb-2">
              {mainSolution.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {mainSolution.description}
            </p>
            <p className="text-sm text-gray-500 italic mt-2">
              {mainSolution.focus}
            </p>
            <div className="mt-4">
              <span className="text-red-600 font-bold">FarmGrow</span> - A
              digital tool for mining impact assessment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsRestoration;