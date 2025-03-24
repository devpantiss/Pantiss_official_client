import React, { memo } from "react";
import Heading from "../../../Common/Heading";

const Programs = memo(() => {
  const funds = [
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740389052/AdobeStock_574000874_Preview_y3iqiv.jpg",
      categories: ["Sustainable Fisheries", "South Asia"],
      title: "Pondy Fish",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742121303/anisa-wulan-asri-dSb8R7QAeLM-unsplash_izeerw.jpg",
      categories: ["Sustainable Agriculture", "Latin America"],
      title: "Guavas AcreRise",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742121408/469140771_122180940212172871_9167009505736437214_n_swg9us.jpg",
      categories: ["Sustainable Textiles", "South Asia"],
      title: "Tassar Fashion",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742121490/Koraput-Coffee-9-1024x680_rokvtn.jpg",
      categories: ["Agribusiness", "Africa"],
      title: "Tribey Coffee",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <Heading text="PROGRAMS" color="text-black" bgColor="bg-red-600" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {funds.map((fund, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:ring-2 hover:ring-red-600 will-change-transform"
            >
              <img
                src={fund.image}
                alt={fund.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                loading="lazy"
                decoding="async"
                fetchpriority={index === 0 ? "high" : "low"}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/600x450?text=Image+Not+Found")
                }
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none" />

              {/* Categories */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                {fund.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 bg-red-600 bg-opacity-90 text-white text-[10px] font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <hr className="border-t border-white/80 mb-2 w-8" />
                <h3 className="text-start text-xl md:text-2xl font-semibold leading-tight">
                  {fund.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Programs.displayName = "Programs";

export default Programs;