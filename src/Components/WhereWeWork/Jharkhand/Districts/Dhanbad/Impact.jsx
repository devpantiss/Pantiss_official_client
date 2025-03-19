import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactDhanbad = () => {
  return (
    <div
      className="pb-6 bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122359/a-woman-farmer-with-digital-tablet-on-a-potato-field-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo_w5f8tt.jpg')] bg-cover bg-center bg-fixed relative"
      style={{ backgroundAttachment: "fixed" }} // Ensures parallax effect
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN DHANBAD"
          color="text-white" // Changed to white for contrast against dark overlay
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">9K</h3>
            <p className="text-gray-100 text-sm mt-2">
              workers certified through RPL Program
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">600</h3>
            <p className="text-gray-100 text-sm mt-2">
              hectares of mining land reclaimed
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">7K</h3>
            <p className="text-gray-100 text-sm mt-2">
              individuals employed or upskilled
            </p>
          </div>

          {/* Stat 4 */}
          <div className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg">
            <h3 className="text-white font-bold text-4xl">12K</h3>
            <p className="text-gray-100 text-sm mt-2">
              community members benefited from reclamation and workforce development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDhanbad;