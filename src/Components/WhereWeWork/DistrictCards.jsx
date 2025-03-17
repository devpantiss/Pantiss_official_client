import React from "react";
import { Link } from "react-router-dom";

const DistrictCards = ({ districts }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 mb-8">
        {districts?.map((district) => (
          <div
            key={district.name}
            className="border relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            <Link to={district.path}>
              <img
                src={district.image}
                alt={district.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 absolute bg-white/60 bottom-0">
                <h3 className="text-lg lg:text-2xl text-red-600 font-bold">
                  {district.name}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DistrictCards;
