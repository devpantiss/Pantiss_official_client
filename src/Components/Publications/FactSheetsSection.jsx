// FactSheetsSection.js
import React from "react";
import Heading from "../Common/Heading";

const factSheetItems = [
  {
    title: "Mining-Affected Communities – Odisha",
    description:
      "A data-driven overview of socio-economic, livelihood, and environmental conditions in mining-affected regions of Odisha. Covers displacement trends, employment patterns, and community well-being indicators.",
    date: "Releasing Soon",
    imageUrl:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=800&auto=format&fit=crop&q=60",
    exploreUrl: "#",
    comingSoon: true,
  },
  {
    title: "Skill Development & Employability Snapshot",
    description:
      "Key statistics and insights on skilling outcomes, workforce readiness, and placement trends across industrial and infrastructure sectors, with a focus on youth and tribal communities.",
    date: "Releasing Soon",
    imageUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
    exploreUrl: "#",
    comingSoon: true,
  },
  {
    title: "Just Transition Indicators Framework",
    description:
      "A concise factsheet outlining core indicators for monitoring just transition outcomes, including livelihoods, social protection, gender inclusion, and local economic resilience.",
    date: "Releasing Soon",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    exploreUrl: "#",
    comingSoon: true,
  },
];

const FactSheetsSection = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <Heading
            text="FACT SHEETS"
            color="text-black"
            bgColor="bg-red-500"
          />
          {/* <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Concise, evidence-based insights designed to support policy makers,
            practitioners, and development professionals in informed
            decision-making.
          </p> */}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {factSheetItems.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:ring-2 ring-red-600 hover:shadow-2xl hover:-translate-y-2 h-[620px] flex flex-col"
            >
              {/* Coming Soon Badge */}
              {item.comingSoon && (
                <span className="absolute top-4 right-4 z-10 inline-flex items-center px-3 py-1 text-xs font-semibold uppercase rounded-full bg-red-600 text-white shadow-lg">
                  Coming Soon
                </span>
              )}

              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-base mt-3 line-clamp-4">
                  {item.description}
                </p>

                <div className="flex-grow" />

                {/* Footer */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-500 text-sm font-medium">
                    {item.date}
                  </span>

                  <a
                    href={item.comingSoon ? undefined : item.exploreUrl}
                    aria-disabled={item.comingSoon}
                    className={`inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full shadow-md transition-all
                      ${
                        item.comingSoon
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
                      }`}
                  >
                    {item.comingSoon ? "Launching Soon" : "View Fact Sheet"}
                    {!item.comingSoon && (
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="flex justify-center items-center mt-10">
          <button
            className="
              px-6 py-3
              bg-red-600
              rounded-lg
              text-white font-medium
              hover:bg-red-700
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-red-600
            "
          >
            View All Fact Sheets
          </button>
        </div>
      </div>
    </section>
  );
};

export default FactSheetsSection;
