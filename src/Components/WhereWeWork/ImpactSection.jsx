import React from "react";
import Heading from "../Common/Heading";

const ImpactSection = ({ impact }) => {
  return (
    <div className="mx-auto max-w-7xl">
      <Heading text="Impact" color="text-black" bgColor="bg-red-600" />
      <div className="p-8 bg-gray-100 rounded-lg shadow-lg mb-16">
        <p className="text-lg text-gray-700 mb-4">{impact?.description}</p>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-4">
          {impact?.stats.map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h4 className="text-xl font-bold text-red-600">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;