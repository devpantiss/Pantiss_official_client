import React from "react";
import Heading from "../../../Common/Heading";

const Solutions = () => {
  const solutions = [
    {
      imageUrl:
        "https://grameenfoundation.org/images/_918x706_crop_center-center_none/MG_8679_Selasse_RGB_b.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Custom FDP",
      description:
        "Grameen collaborates with Cacao, Inc. and Rainforest Alliance to develop the FDP for cacao. Through the FarmGrow mobile application, field officers collect farm-level data analyzed using smart logic for personalized plans.",
    },
    {
      imageUrl:
        "https://grameenfoundation.org/images/_918x706_crop_center-center_none/JURL2960_200129_031525.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "FarmerLink Alliance",
      description:
        "Grameen’s strategic alliance with the Philippine Coconut Authority and private-sector buyers, including Franklin Baker, develops mobile tools to strengthen farmer businesses and resilience against climate change.",
    },
  ];

  return (
    <section className="bg-red-600 py-12 px-6 mt-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-10">
          <Heading
            text="PANTISS SOLUTIONS"
            color="text-white"
            bgColor="bg-white"
          />
        </div>

        <p className="text-white text-lg text-left leading-relaxed">Our in-house solutions are designed to empower businesses with innovative, tailored tools that streamline operations and drive growth. Developed by our expert team, these solutions integrate seamlessly with your existing systems, offering customized features like advanced data analytics, automated workflows, and user-friendly interfaces. By leveraging cutting-edge technologies, we ensure scalability and efficiency, enabling you to address unique challenges without relying on third-party vendors. With our in-house expertise, we deliver reliable, secure, and cost-effective solutions that evolve with your needs, giving you a competitive edge in an ever-changing market.</p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          {solutions.map((solution, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[450px] ring-2 ring-white overflow-hidden rounded-lg shadow-md">
                <img
                  src={solution.imageUrl}
                  alt={`Solution ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = solution.fallbackImage; // Fallback image
                  }}
                />
                <div className="absolute bottom-0 w-full text-red-700 bg-white p-4">
                  <h4 className="text-3xl font-bold text-center">{solution.stat}</h4>
                  <p className="text-base text-center leading-tight">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;