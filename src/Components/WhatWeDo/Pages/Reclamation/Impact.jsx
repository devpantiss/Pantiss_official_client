import React from "react";
import Heading from "../../../Common/Heading";

const ImpactSkills = () => {
  const impacts = [
    {
      stat: "1,500+",
      description: "Farmers empowered through digital tools and training",
      footnote: "*Includes beneficiaries of Digit Farm Bench Marking and Farm Business School",
    },
    {
      stat: "2+",
      description: "Tons of sustainable produce marketed annually",
    },
    {
      stat: "600 ACRES",
      description: "Farmland optimized with smart farming solutions",
    },
  ];

  return (
    <section className="relative py-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122359/a-woman-farmer-with-digital-tablet-on-a-potato-field-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo_w5f8tt.jpg')`, // Updated to a relevant image from Solutions
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