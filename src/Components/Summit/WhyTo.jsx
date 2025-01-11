import React from "react";

const WhyTo = () => {
  const reasons = [
    {
      title: "Understand the Challenges of Mining-Affected Communities",
      description:
        "The summit provides insights into the socio-economic and environmental challenges faced by mining-affected villages. Learn from real-world case studies.",
    },
    {
      title: "Discover Sustainable Solutions",
      description:
        "Explore innovative strategies and solutions for sustainable development in mining-affected regions, presented by experts and community leaders.",
    },
    {
      title: "Network with Change Makers",
      description:
        "Meet policymakers, NGOs, and industry leaders working towards positive change in mining-affected areas and build valuable connections.",
    },
    {
      title: "Learn About Community-Led Initiatives",
      description:
        "Discover successful community-led projects that address challenges like displacement, health issues, and environmental degradation.",
    },
    {
      title: "Participate in Interactive Workshops",
      description:
        "Engage in workshops designed to provide actionable insights and practical knowledge on supporting mining-affected communities effectively.",
    },
    {
      title: "Recognize and Celebrate Resilience",
      description:
        "Celebrate the resilience and achievements of mining-affected communities and individuals who have driven impactful changes.",
    },
    {
      title: "Stay Updated on Policy Changes",
      description:
        "Gain insights into recent policy developments and regulations affecting mining-affected villages and their implications.",
    },
    {
      title: "Empower Your Efforts with Knowledge",
      description:
        "Equip yourself with the knowledge and tools to contribute effectively to the welfare and development of mining-affected villages.",
    },
  ];

  return (
    <section className="bg-red-600 text-white py-16 px-8">
      <div className="container mx-auto">
        {/* Title Section */}
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-10">
          Why You Should Attend - Mining Villages Summit 2024
        </h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-red-600 ring-2 ring-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                {/* Icon or Number */}
                <div className="bg-white text-red-600 rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>
                <h2 className="ml-4 text-lg lg:text-xl font-semibold">
                  {reason.title}
                </h2>
              </div>
              <p className="text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTo;
