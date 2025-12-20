import React from "react";
import Heading from "../../../../Common/Heading";

const AngulImpact = () => {
  return (
    <div
      className="p-6 bg-red-600 bg-[url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761815486/karl-callwood-kdIFXVmEA2I-unsplash_uc5yxr.jpg')] bg-cover bg-center bg-fixed relative"
      style={{ backgroundAttachment: "fixed" }} // Ensures parallax effect
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN ANGUL"
          color="text-white"
          bgColor="bg-white"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">6K</h3>
            <p className="text-gray-100 text-sm mt-2">
              individuals trained as excavator and HEMM operators
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">8K</h3>
            <p className="text-gray-100 text-sm mt-2">
              community members rehabilitated and resettled
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">12K</h3>
            <p className="text-gray-100 text-sm mt-2">
              people benefited from nutrition and well-being programs
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">15K</h3>
            <p className="text-gray-100 text-sm mt-2">
              livelihoods supported through skilling and community initiatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngulImpact;