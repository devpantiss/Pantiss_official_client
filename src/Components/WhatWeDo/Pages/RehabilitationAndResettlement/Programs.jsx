import React, { memo } from "react";
import Heading from "../../../Common/Heading";

const Programs = memo(() => {
  const funds = [
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Landbanking-Group_2500%C3%97704.jpg",
      categories: ["Forestry", "Africa"],
      title: "The Landbanking Group",
    },
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Growth-Next-Generation-Agriculture_2500%C3%97704.jpg",
      categories: ["Sustainable Agriculture", "Latin America"],
      title: "Growth Next-Generation Agriculture (GAN)",
    },
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/03/InvestHER_2500x1200.jpg",
      categories: ["Sustainable Agriculture", "Africa", "Latin America"],
      title: "InvestHer Climate Resilience Bond",
    },
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/03/SPV-for-Silvopasture-Scaling_2500x704.jpg",
      categories: ["Sustainable Agriculture", "Latin America"],
      title: "SPV for Silvopasture Scaling",
    },
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Sustana-Cooling-Impact-Fund_2500x704.jpg",
      categories: ["Energy Efficiency", "South Asia"],
      title: "CoolPac Capital India Fund",
    },
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/07/Tana-Market-2_2500x1200.jpg",
      categories: ["Climate Resilience", "Africa", "Latin America"],
      title: "Resilient Municipal Market Fund (ReMark)",
    },
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Regenera-Ventures-Fund_2500x704_v2.jpg",
      categories: ["Climate Resilience", "Latin America"],
      title: "Regenera Ventures Fund",
    },
    {
      image:
        "https://www.climatefinancelab.org/wp-content/uploads/2024/03/Clean-Utilities-for-Affordable-Housing_2500x704-1.jpg",
      categories: ["Buildings", "Africa"],
      title: "Clean Utilities for Affordable Housing",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <Heading text="PROGRAMS" color="text-black" bgColor="bg-red-600" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {funds.map((fund, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:ring-2 hover:ring-red-600 will-change-transform"
            >
              <img
                src={fund.image}
                alt={fund.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                loading="lazy"
                decoding="async"
                fetchpriority={index === 0 ? "high" : "low"}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/600x450?text=Image+Not+Found")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none" />

              {/* Categories */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                {fund.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 bg-red-600 bg-opacity-90 text-white text-[10px] font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <hr className="border-t border-white/80 mb-2 w-8" />
                <h3 className="text-start text-xl md:text-2xl font-semibold leading-tight">
                  {fund.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Programs.displayName = "Programs";

export default Programs;