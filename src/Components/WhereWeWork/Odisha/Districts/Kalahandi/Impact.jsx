import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactKalahandi = () => {
  return (
    <div
      className="p-6 bg-[url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761815486/karl-callwood-kdIFXVmEA2I-unsplash_uc5yxr.jpg')] bg-cover bg-center bg-fixed relative"
      style={{ backgroundAttachment: "fixed" }} // Ensures parallax effect
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN KALAHANDI"
          color="text-white" // Changed to white for contrast against dark overlay
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">4.5K</h3>
            <p className="text-gray-100 text-sm mt-2">
              HEMM mechanics trained and certified
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">300</h3>
            <p className="text-gray-100 text-sm mt-2">
              ponds created for land reclamation
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">6K</h3>
            <p className="text-gray-100 text-sm mt-2">
              livelihoods supported through skilling and reclamation
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">8K</h3>
            <p className="text-gray-100 text-sm mt-2">
              community members benefited from water and economic opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactKalahandi;