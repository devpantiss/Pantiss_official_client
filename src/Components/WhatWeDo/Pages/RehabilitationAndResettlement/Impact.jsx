import React from "react";
import Heading from "../../../Common/Heading";

const ImpactRehab = () => {
  const impacts = [
    {
      stat: "1,900+ FAMILIES",
      description: "Resettled with sustainable livelihoods through GIS-powered planning",
      footnote: "*Data reflects efforts across mining villages in 2023",
    },
    {
      stat: "25,000 HECTARES",
      description: "Land mapped and rehabilitated using integrated GIS platforms",
    },
    {
      stat: "120+ GRAM SABHAS",
      description: "Community meetings held for participatory resettlement decisions",
    },
  ];

  return (
    <section className="relative bg-red-600 py-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_600/v1735195006/EIA_bpqcoy.jpg')`, // Updated to GIS-related image
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
          Results delivered in 2023 from Pantiss Solutions in rehabilitation and resettlement.
        </p>

        {/* Impact Stats */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="flex max-w-sm flex-col justify-center items-center bg-red-600 p-5 rounded-md h-[250px]"
            >
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-4xl font-bold text-yellow-400 mb-2">
                  {impact.stat}
                </h3>
                <p className="text-base text-white leading-relaxed">
                  {impact.description}
                </p>
                {impact.footnote && (
                  <p className="text-sm text-white mt-1">{impact.footnote}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Source */}
        <div className="text-left">
          <p className="text-sm text-white">
            Source: Pantiss 2023 Impact Report
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactRehab;