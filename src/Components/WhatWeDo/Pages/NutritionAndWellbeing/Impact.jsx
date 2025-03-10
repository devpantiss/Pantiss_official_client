import React from "react";
import Heading from "../../../Common/Heading";

const ImpactNutrition = () => {
  const impacts = [
    {
      stat: "27.2 MILLION TCO₂E/YEAR",
      description: "Total annual GHG reduction",
      footnote: "*TCO₂E = tonnes of carbon dioxide equivalent",
    },
    {
      stat: "3.7 MILLION",
      description: "People with strengthened climate and disaster resilience",
    },
    {
      stat: "88,000 HECTARES",
      description: "Area with reduced flood risk",
    },
  ];

  return (
    <section className="relative bg-red-600 py-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195006/EIA_bpqcoy.jpg')`, // Replace with actual image URL
          opacity: 0.6, // Blue overlay effect
        }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative container mx-auto max-w-7xl px-6 text-center">
        {/* Title and Description */}
        <div className="flex justify-center items-center">
        <Heading text="OUR IMPACT" color="text-white" bgColor="bg-red-600" />
        </div>

        <p className="text-lg text-white mb-10">
          Results delivered in 2023 from ADB projects.
        </p>

        {/* Impact Stats */}
        <div className="flex flex-col md:flex-row bg-red-600 p-5 rounded-md justify-center items-center gap-8 mb-6">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="flex-1 max-w-sm text-center"
            >
              <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                {impact.stat}
              </h3>
              <p className="text-base text-white leading-relaxed">
                {impact.description}
              </p>
              {impact.footnote && (
                <p className="text-sm text-white mt-1">
                  {impact.footnote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Source */}
        <div className="text-left">
          <p className="text-sm text-white">
            Source: 2023 Development Effectiveness Review
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactNutrition;