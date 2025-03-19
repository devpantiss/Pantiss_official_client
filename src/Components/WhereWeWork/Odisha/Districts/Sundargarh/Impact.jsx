import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactSundargarh = () => {
  return (
    <div
      className="p-6 bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122359/a-woman-farmer-with-digital-tablet-on-a-potato-field-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo_w5f8tt.jpg')] bg-cover bg-center bg-fixed relative"
      style={{ backgroundAttachment: "fixed" }} // Ensures parallax effect
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN SUNDARGARH"
          color="text-white" // Changed to white for contrast against dark overlay
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">5K</h3>
            <p className="text-gray-100 text-sm mt-2">
              electricians trained and certified
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">4K</h3>
            <p className="text-gray-100 text-sm mt-2">
              mining vehicle operators trained and certified
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">400</h3>
            <p className="text-gray-100 text-sm mt-2">
              hectares of mining land reclaimed with mango orchards
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">10K</h3>
            <p className="text-gray-100 text-sm mt-2">
              livelihoods supported through skilling and reclamation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSundargarh;