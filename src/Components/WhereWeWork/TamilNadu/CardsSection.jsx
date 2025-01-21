import React from "react";

const CardsSection = () => {
  const cards = [
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737445286/dhanbad_wbmxrl.jpg",
      title: "Mining Skill Development",
      description:
        "Training 1,000 individuals in mining operations, safety protocols, and equipment handling, empowering the workforce and enhancing job readiness.",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325299/WhatsApp_Image_2025-01-08_at_12.59.45_PM_y05oqs.jpg",
      title: "Renewable Energy Projects",
      description:
        "Supporting the development of solar power plants in Neyveli to promote sustainable energy solutions and reduce carbon footprints.",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325281/WhatsApp_Image_2025-01-08_at_1.03.30_PM_fx0igb.jpg",
      title: "Waste Management Initiatives",
      description:
        "Implementing advanced waste recycling and management techniques, contributing to environmental sustainability and job creation.",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325290/WhatsApp_Image_2025-01-08_at_12.55.09_PM_wh2wtb.jpg",
      title: "Community-Based Projects",
      description:
        "Improving access to healthcare, education, and clean drinking water for communities in and around Neyveli.",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325280/WhatsApp_Image_2025-01-08_at_1.03.09_PM_e0bqin.jpg",
      title: "Infrastructure Development",
      description:
        "Building essential infrastructure for better transportation, housing, and utilities for workers and their families.",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center text-black mb-8">
          Tamil Nadu NLC Initiatives
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                index === 2 ? "md:col-span-2" : ""
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
