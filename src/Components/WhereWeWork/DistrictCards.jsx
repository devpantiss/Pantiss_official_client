import React from "react";
import { useNavigate } from "react-router-dom";

const DistrictCards = ({ districts }) => {
  const navigate = useNavigate();

  const handleNavigation = (district) => {
    navigate(district.path);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {districts?.map((district) => (
            <div
              key={district.name}
              onClick={() => handleNavigation(district)}
              className="relative h-[380px] bg-cover bg-center rounded-2xl shadow-lg cursor-pointer overflow-hidden group"
              style={{ backgroundImage: `url(${district.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-center items-center text-center px-4">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 drop-shadow-lg">
                  {district.name}
                </h3>

                {/* Tags (use district.tags if available, or static sample) */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {district.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-700 font-medium text-sm px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  )) || (
                    <>
                      <span className="bg-green-100 text-green-700 font-medium text-sm px-3 py-1 rounded-full">
                        Skill on Wheels
                      </span>
                      <span className="bg-green-100 text-green-700 font-medium text-sm px-3 py-1 rounded-full">
                        Center of Excellence
                      </span>
                      <span className="bg-green-100 text-green-700 font-medium text-sm px-3 py-1 rounded-full">
                        Global Placements
                      </span>
                    </>
                  )}
                </div>

                {/* Explore Button */}
                <button className="bg-red-600 hover:bg-white hover:text-red-600 transition-all duration-300 font-semibold text-white px-6 py-2 rounded-full shadow-md">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DistrictCards;
