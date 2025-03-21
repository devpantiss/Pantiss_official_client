import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";

// Memoized static programs data
const programs = [
  {
    title: "Land Acquisition, Rehabilitation & Resettlement of Mines",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1735195058/Rehabilitation_ejgaqn.webp",
    categories: ["Community Development", "Mining"],
    link: "/what-we-do/land-acquisition-rehabilitation-&-resettlement-of-mines",
  },
  {
    title: "Mine, Steel & Power Skill Park",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1735278481/vocational_msprt8.jpg",
    categories: ["Education", "Youth Empowerment"],
    link: "/what-we-do/mine-steel-&-power-skill-park",
  },
  {
    title: "Carp, Rice & Duck Livelihoods Park",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1735195281/WhatsApp_Image_2024-12-26_at_12.10.50_PM_nqiwwh.jpg",
    categories: ["Environment", "Eco Tourism"],
    link: "/what-we-do/carp-rice-&-duck-livelihood-park",
  },
  {
    title: "NutriNest",
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1735195440/nutrition_jnxshz.jpg",
    categories: ["Health", "Community"],
    link: "/what-we-do/nutrinest",
  },
];

// Memoized ProgramCard component
const ProgramCard = memo(({ program }) => (
  <Link
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
    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300 ease-in-out"></div>

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
));
ProgramCard.displayName = "ProgramCard";

const Programs = () => {
  // Memoized programs array (though static here, ensures consistency if dynamic later)
  const programList = useMemo(() => programs, []);

  return (
    <section className="py-12 bg-red-600">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <Heading text="WHAT WE DO" color="text-white" bgColor="bg-white" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {programList.map((program) => (
            <ProgramCard key={program.link} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Programs);