import React from "react";
import Heading from "../../../Common/Heading";

const ImpactSkills = () => {
  const impacts = [
    {
      stat: "5,000",
      description: "Skilled workers mobilized and connected to opportunities",
      footnote: "*Estimated impact across platforms like Skill Mobilizers Connect",
    },
    {
      stat: "3000+",
      description: "Individuals trained in specialized trades and technologies",
    },
    {
      stat: "4000 JOBS",
      description: "Created through industry partnerships and programs",
    },
  ];

  return (
    <section className="relative bg-red-600 py-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739294514/cls-open-pit-mining_pbeseo.jpg')`, // Updated to a relevant image from Solutions
          // opacity: 0.6, // Subtle overlay effect
        }}
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative container mx-auto max-w-7xl px-6 text-center">
        {/* Title and Description */}
        <Heading text="OUR IMPACT" color="text-white" bgColor="bg-red-600" />

        <p className="text-lg text-left text-white mb-10">
          Results delivered in 2024 from Pantiss solutions and programs.
        </p>

        {/* Impact Stats */}
        <div className="flex flex-col md:flex-row p-5 rounded-md justify-center items-center gap-8 mb-6">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="flex-1 max-w-sm text-center bg-red-600 p-5 h-[200px] flex flex-col justify-center items-center rounded-md"
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
            Source: Pantiss 2024 Impact Report
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSkills;