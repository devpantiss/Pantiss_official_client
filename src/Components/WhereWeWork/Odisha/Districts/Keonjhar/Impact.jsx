import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactKeonjhar = () => {
  return (
    <div
      className="p-6 bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122479/Skill-development-and-entrepreneurship-promotion-in-the-agriculture-sector_bys2rt.jpg')] bg-cover bg-center bg-fixed relative"
      style={{ backgroundAttachment: "fixed" }} // Ensures parallax effect
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN KEONJHAR"
          color="text-white" // Changed to white for contrast against dark overlay
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">5K</h3>
            <p className="text-gray-100 text-sm mt-2">
              individuals trained in facility management
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">7K</h3>
            <p className="text-gray-100 text-sm mt-2">
              farmers certified through Agricultural RPL Program
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">9K</h3>
            <p className="text-gray-100 text-sm mt-2">
              livelihoods improved through skilling and certification
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">12K</h3>
            <p className="text-gray-100 text-sm mt-2">
              community members benefited from enhanced infrastructure and agriculture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactKeonjhar;