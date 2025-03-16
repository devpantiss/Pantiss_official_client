import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";

const Programs = () => {
  const programs = [
    {
      title: "Rehabilitation & Resettlement for Mines",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195058/Rehabilitation_ejgaqn.webp",
      categories: ["Community Development", "Mining"],
      link: "/what-we-do/rehabilitation-&-resettlement-of-mines",
    },
    {
      title: "TVET for Mining Affected Youth",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735278481/vocational_msprt8.jpg",
      categories: ["Education", "Youth Empowerment"],
      link: "/what-we-do/skill-training-for-mining-affected-youth",
    },
    {
      title: "Reclamation of Abandoned Mines, Green Enterprises & Eco Tourism",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195281/WhatsApp_Image_2024-12-26_at_12.10.50_PM_nqiwwh.jpg",
      categories: ["Environment", "Eco Tourism"],
      link: "/what-we-do/reclamation-in-abandoned-mines",
    },
    {
      title: "Just Transition for Mining Workers, Net Zero & Carbon Emission",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195397/just_transition_wpoeik.jpg",
      categories: ["Sustainability", "Workers"],
      link: "/what-we-do/just-transition-for-mining-workers",
    },
    {
      title: "Nutrition & Wellbeing in Mining Villages",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195440/nutrition_jnxshz.jpg",
      categories: ["Health", "Community"],
      link: "/what-we-do/nutrition-and-wellbeing-in-mining-villages",
    },
    {
      title: "Indigenous Community Empowerment",
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196099/indegenous_tribals_u4lgnd.jpg",
      categories: ["Indigenous Rights", "Empowerment"],
      link: "/what-we-do/indegenous-community-empowerment",
    },
  ];

  return (
    <section className="py-12 bg-red-600">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <Heading text="WHAT WE DO" color="text-white" bgColor="bg-white" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Link
              key={index}
              to={program.link}
              className="relative bg-cover bg-center h-[400px] ring-2 ring-white rounded-lg shadow-lg overflow-hidden group"
              style={{
                backgroundImage: `url(${program.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-transparent transition-all duration-300 ease-in-out"></div>

              {/* Categories */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                {program.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-red-600 bg-opacity-90 text-white text-xs font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Title and Line */}
              <div className="absolute bottom-6 left-6 right-6 text-white group-hover:text-red-600 transition-colors duration-300 ease-in-out z-10">
                <hr className="border-t border-4 border-white/80 mb-3 w-12 group-hover:border-red-600 transition-colors duration-300 ease-in-out" />
                <h3 className="text-start text-2xl md:text-3xl font-semibold leading-tight">
                  {program.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;