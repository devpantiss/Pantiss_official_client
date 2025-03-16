import React from "react";
import Heading from "../../../Common/Heading";

const Solutions = () => {
  const solutions = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/56cff1ce-3f2c-477a-98b9-74fd979e24fc_j3m2x6.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Sectoral Skill Gap Assessment (Mine, Steel & Power)",
      description:
        "In-depth evaluation of skill deficits in mining, steel, and power sectors to design targeted workforce development strategies.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739283474/WhatsApp_Image_2025-02-11_at_7.45.16_PM_wlhbfn.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Career Counselling (High End Manufacturing)",
      description:
        "Tailored guidance to align individual skills with opportunities in advanced manufacturing industries.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Hands on Training (Company owned 37 Fleet)",
      description:
        "Practical training on a company-owned fleet of 37 vehicles and machinery for hands-on skill mastery.",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1741953744/WhatsApp_Image_2025-03-03_at_10.47.43_PM_3_kqjs2j.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "AI Enabled AR/VR & Simulation",
      description:
        "Advanced training using AI-powered augmented/virtual reality and simulations for immersive learning experiences.",
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

        <p className="text-white text-lg text-left leading-relaxed mb-10">
          Our in-house solutions are designed to empower businesses with innovative, tailored tools that streamline operations and drive growth. Developed by our expert team, these solutions integrate seamlessly with your existing systems, offering customized features like advanced data analytics, automated workflows, and user-friendly interfaces. By leveraging cutting-edge technologies, we ensure scalability and efficiency, enabling you to address unique challenges without relying on third-party vendors.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group relative h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* Background Image */}
              <img
                src={solution.imageUrl}
                alt={solution.stat}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  e.target.src = solution.fallbackImage; // Fallback image
                }}
              />

              {/* Initial Overlay with Stat */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-0">
                <h4 className="text-white text-xl md:text-2xl font-bold text-center px-4 leading-tight transition-opacity duration-300 group-hover:opacity-0">
                  {solution.stat}
                </h4>
              </div>

              {/* Hover Overlay with Description */}
              <div className="absolute bottom-0 left-0 right-0 bg-white text-red-700 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h4 className="text-lg font-bold text-center mb-2">{solution.stat}</h4>
                <p className="text-sm text-center leading-tight">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;