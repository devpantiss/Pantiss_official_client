import React from "react";
import Map from "./Map";

const Row1 = () => {
  const partnersData = [
    { name: "UNICEF", value: 355 },
    { name: "NSDC", value: 224 },
    { name: "Tata Power", value: 189 },
    { name: "ASCI", value: 171 },
    { name: "RCPSDC", value: 158 },
    { name: "SCMS", value: 150 },
    { name: "Tata Steel", value: 142 },
    { name: "Adani", value: 111 },
    { name: "MCL", value: 111 },
    { name: "UNIDO", value: 102 },
    { name: "Ministry of Coal", value: 102 },
    { name: "Ministry of Mines", value: 102 },
  ];

  return (
    <div className="px-6 mt-4 bg-transparent text-white">
      {/* Header Section */}
      <h1 className="text-3xl font-semibold mb-4 border-b-2 border-red-600">
        Partnerships
      </h1>
      <p className="text-gray-300 mb-6">
        This dashboard provides information on partners CGIAR has worked with to deliver results.
      </p>

      {/* Filters Section */}
      <div className="flex flex-wrap items-center gap-6 mb-8">
        <div>
          <span className="text-4xl font-bold">3,153</span>
          <p className="text-red-600 text-xl font-bold">Partners</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <select className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500">
            <option>Indicator category</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
          <select className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500">
            <option>Partner country</option>
            <option>Country 1</option>
            <option>Country 2</option>
          </select>
          <input
            type="text"
            placeholder="Search a partner"
            className="px-4 py-2 w-64 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {/* Bar Chart Section */}
        <div className="ring-2 ring-red-600 p-4 rounded-md">
          <h2 className="text-xl font-semibold border-b-2 border-red-600 mb-4">
            Number of results by contributing partner
          </h2>
          <div className="bg-transparent p-4 rounded-lg shadow-md">
            {partnersData.map((partner, index) => (
              <div key={index} className="flex items-center mb-4">
                <div className="w-2/3">
                  <p className="text-sm truncate">{partner.name}</p>
                </div>
                <div className="w-1/3 flex items-center">
                  <div
                    className="bg-yellow-500 h-4 rounded-md"
                    style={{
                      width: `${(partner.value / 355) * 100}%`,
                    }}
                  ></div>
                  <span className="ml-2 text-sm">{partner.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="ring-2 ring-red-600 p-4 rounded-md">
          <h2 className="text-xl font-semibold border-b-2 border-red-600 mb-4">Partners by country</h2>
          <div className="bg-transparent rounded-lg shadow-md h-[400px]">
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row1;
