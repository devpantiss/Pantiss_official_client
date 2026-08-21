import { memo } from "react";
import Heading from "../../../Common/Heading";

const Programs = memo(() => {
  const programs = [
    {
      image: "/assets/what-we-do/rehabilitation-resettlement/gis-land-planning.jpg",
      categories: ["GIS Mapping", "Land Records"],
      title: "Participatory Land & Asset Mapping",
    },
    {
      image: "/assets/what-we-do/rehabilitation-resettlement/community-consultation.jpg",
      categories: ["Gram Sabha", "Community Consent"],
      title: "Inclusive Resettlement Planning",
    },
    {
      image: "/assets/what-we-do/rehabilitation-resettlement/rehabilitation-hero.jpg",
      categories: ["Housing", "Essential Services"],
      title: "Settlement & Infrastructure Development",
    },
    {
      image: "/assets/what-we-do/rehabilitation-resettlement/livelihood-restoration.jpg",
      categories: ["Livelihoods", "Enterprise"],
      title: "Income & Livelihood Restoration",
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
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative h-[450px] rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:ring-2 hover:ring-red-600 will-change-transform"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform"
                loading="lazy"
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                onError={(event) => {
                  event.currentTarget.src =
                    "/assets/what-we-do/rehabilitation-resettlement/rehabilitation-hero.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 pointer-events-none" />

              {/* Categories */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 pointer-events-none">
                {program.categories.map((category, idx) => (
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
                  {program.title}
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
