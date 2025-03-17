// Programs.js
import React from "react";
import Heading from "../../../Common/Heading";

const Programs = () => {
  const funds = [
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740389052/AdobeStock_574000874_Preview_y3iqiv.jpg",
      categories: ["Sustainable Fisheries", "South Asia"],
      title: "Pondy Fish",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742121303/anisa-wulan-asri-dSb8R7QAeLM-unsplash_izeerw.jpg",
      categories: ["Sustainable Agriculture", "Latin America"],
      title: "Guavas AcreRise",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742121408/469140771_122180940212172871_9167009505736437214_n_swg9us.jpg",
      categories: ["Sustainable Textiles", "South Asia"],
      title: "Tassar Fashion",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742121490/Koraput-Coffee-9-1024x680_rokvtn.jpg",
      categories: ["Agribusiness", "Africa"],
      title: "Tribey Coffee",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6">
          <Heading text="PROGRAMS" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {funds.map((fund, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-[450px] rounded-lg shadow-md overflow-hidden"
              style={{ backgroundImage: `url(${fund.image})` }}
            >
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

              {/* Categories */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {fund.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 bg-red-600 bg-opacity-90 text-white text-[10px] font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Title and Line */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <hr className="border-t border-white/80 mb-2 w-8" />
                <h3 className="text-start text-4xl font-semibold leading-tight">
                  {fund.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;