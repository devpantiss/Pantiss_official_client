import React from "react";
import Heading from "../Common/Heading";

const ImpactSection = ({ impact }) => {
  return (
    <div
      className="pb-6 bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122359/a-woman-farmer-with-digital-tablet-on-a-potato-field-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo_w5f8tt.jpg')] bg-cover bg-center bg-fixed relative"
      style={{ backgroundAttachment: "fixed" }} // Ensures parallax effect
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 p-8">
          <Heading text="IMPACT" color="text-white" bgColor="bg-red-600" />
          <div className="bg-transparent rounded-lg mb-16">
            <p className="text-lg text-gray-100 mb-4">{impact?.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
              {impact?.stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-white bg-opacity-20 rounded-lg ring-2 ring-white shadow-lg"
                >
                  <h4 className="text-xl font-bold text-white">{stat.value}</h4>
                  <p className="text-gray-100 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;