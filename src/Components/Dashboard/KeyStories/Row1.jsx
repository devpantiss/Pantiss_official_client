import React from "react";

const Row1 = () => {
  const data = [
    { value: 61, label: "Key result stories" },
    { value: 121, label: "Results" },
    { value: 332, label: "Institutions" },
    { value: 47, label: "Countries" },
  ];

  return (
    <div className="bg-transparent shadow-md rounded-md p-6 mx-auto">
      {/* Section Heading */}
      <h2 className="text-3xl font-semibold text-white border-b-2 border-red-600 mb-4">
        Key result stories
      </h2>

      {/* Subheading */}
      <p className="text-sm text-center text-gray-200 mb-6">
        This dashboard provides an overview of the key results from CGIAR's
        Initiatives, Platforms, and SFPs.
      </p>
      <div className="flex justify-center items-center">
        {/* Stats Row */}
        <div className=" grid lg:grid-cols-4 grid-cols-2 gap-4 max-w-3xl">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-transparent ring-2 ring-red-600 rounded-md p-4 shadow-sm"
            >
              <span className="text-3xl font-bold text-white">
                {item.value}
              </span>
              <span className="text-sm text-center text-gray-100">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row1;
