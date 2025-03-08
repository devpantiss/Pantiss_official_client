// ProgramsIndegenous.js
import React from "react";
import Heading from "../../../Common/Heading";

const ProgramsIndegenous = () => {
  const funds = [
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Landbanking-Group_2500%C3%97704.jpg",
      categories: ["Forestry", "Africa"],
      title: "The Landbanking Group",
    },
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Growth-Next-Generation-Agriculture_2500%C3%97704.jpg",
      categories: ["Sustainable Agriculture", "Latin America"],
      title: "Growth Next-Generation Agriculture (GAN)",
    },
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/03/InvestHER_2500x1200.jpg",
      categories: ["Sustainable Agriculture", "Africa", "Latin America"],
      title: "InvestHer Climate Resilience Bond",
    },
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/03/SPV-for-Silvopasture-Scaling_2500x704.jpg",
      categories: ["Sustainable Agriculture", "Latin America"],
      title: "SPV for Silvopasture Scaling",
    },
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Sustana-Cooling-Impact-Fund_2500x704.jpg",
      categories: ["Energy Efficiency", "South Asia"],
      title: "CoolPac Capital India Fund",
    },
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/07/Tana-Market-2_2500x1200.jpg",
      categories: ["Climate Resilience", "Africa", "Latin America"],
      title: "Resilient Municipal Market Fund (ReMark)",
    },
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Regenera-Ventures-Fund_2500x704_v2.jpg",
      categories: ["Climate Resilience", "Latin America"],
      title: "Regenera Ventures Fund",
    },
    {
      image: "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Clean-Utilities-for-Affordable-Housing_2500x704-1.jpg",
      categories: ["Buildings", "Africa"],
      title: "Clean Utilities for Affordable Housing",
    },
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Clear All Filters */}
        <div className="text-center mb-6">
        <Heading text="PROGRAMS" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {funds.map((fund, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-[450px] rounded-lg shadow-md overflow-hidden"
              style={{ backgroundImage: `url(${fund.image})` }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

              {/* Categories */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {fund.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 bg-red-600 bg-opacity-90 text-white text-[10px] font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Title and Line */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <hr className="border-t border-white/80 mb-2 w-8" />
                <h3 className="text-base font-semibold leading-tight">
                  {fund.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsIndegenous;