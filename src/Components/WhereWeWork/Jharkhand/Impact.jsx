import React from "react";
import Heading from "../../Common/Heading";

const ImpactSection = () => {
  const impactData = [
    { label: "Skilled Personnel", value: 12000 },
    { label: "Villages Reformed", value: 150 },
    { label: "Collaborations", value: 50 },
    { label: "Sectors", value: 10 },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Heading text="IMPACT" color="text-black" bgColor="bg-red-600" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="bg-white ring-2 ring-red-600 hover:bg-red-600 text-red-600 hover:text-white rounded-lg shadow-md p-6 text-center"
            >
              <h3 className="text-5xl font-extrabold mb-4">
                {item.value.toLocaleString()}
              </h3>
              <p className="text-xl font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;