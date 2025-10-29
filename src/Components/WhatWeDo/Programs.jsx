import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";

// Memoized static programs data
const programs = [
  {
    title: "Planning, Policy & Governance (PPG)",
    image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760708443/Adobe_Express_-_file_afc9wt.jpg",
    categories: ["GIS/Drone Survey", "Digital Dashboard", "Social Audit"],
    link: "#",
  },
  {
    title: "TVET (Technical, Vocational, Educational Training)",
    image:
    "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760708752/GMC10092024_162547_pnvm7v.jpg",
    categories: ["Skill on Wheels", "Center of Excellence", "Global Placements"],
    link: "/what-we-do/mine-steel-&-power-skill-park",
  },
  {
    title: "Livelihood & Entrepreneurship",
    image:
    "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760708960/amol-sonar-1KntWz6Hpgc-unsplash_adnjcu.jpg",
    categories: ["Agricultural Revival", "Animal Husbandary", "Enterprise Incubation"],
    link: "/what-we-do/carp-rice-&-duck-livelihood-park",
  },
  {
    title: "Health & Nutrition",
    image:
    "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760709193/health_c5sfne.jpg",
    categories: ["Mobile Health Unit", "Health Screening", "Malnutrition Management"],
    link: "/what-we-do/nutrinest",
  },
  {
    title: "Water & Sanitation",
    image:
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761732864/Sanitation_workers_fnmuqr.jpg",
    categories: ["Safe Drinking Water", "Toilets", "Waste-Disposal"],
    link: "#",
  },
  {
    title: "Environment & Ecology",
    image:
    "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760709502/Pngtree_forest_planet_earth_with_trees_15794029_aii5vc.jpg",
    categories: ["Safe Drinking Water", "Toilets", "Waste-Disposal"],
    link: "/what-we-do/land-acquisition-rehabilitation-&-resettlement-of-mines",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {programList.map((program) => (
            <ProgramCard key={program.link} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Programs);
