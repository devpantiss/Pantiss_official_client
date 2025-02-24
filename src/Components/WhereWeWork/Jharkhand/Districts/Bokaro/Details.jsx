import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Mining Vehicles Operator",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Mining Vehicles Operator</h2>
        <p className="text-gray-700">
          Our Mining Vehicles Operator program trains individuals to operate heavy machinery used in mining operations, such as dump trucks, excavators, and bulldozers. We provide hands-on training, safety protocols, and certification to ensure efficient and safe operations in mining environments, enhancing employment opportunities and productivity.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737450493/TNIE_import_2023_3_6_original_Illegalcoalmining_cthtx2.avif" // Replace with actual image URL
          alt="Mining Vehicles Operator"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Plastic Waste Recycling Plant Construction",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Plastic Waste Recycling Plant Construction</h2>
        <p className="text-gray-700">
          Our Plastic Waste Recycling Plant Construction initiative focuses on building sustainable facilities to recycle plastic waste, reducing environmental pollution and promoting a circular economy. We provide technical expertise, community engagement, and infrastructure development to create efficient recycling plants that benefit local economies and ecosystems.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740389668/plastic_waste_anmisu.jpg" // Replace with actual image URL
          alt="Plastic Waste Recycling Plant Construction"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsBokaro = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading
        text="OUR WORK"
        color="text-black"
        bgColor="bg-red-600"
      />
      {/* Desktop View */}
      <div className="hidden md:block">
        <Tab.Group>
          <div className="flex">
            <Tab.List className="w-1/4 border-r border-gray-200">
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    `block w-full py-2 px-4 text-left font-medium text-gray-700 hover:bg-gray-100 focus:outline-none ${
                      selected ? "bg-red-600 text-white" : ""
                    }`
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="w-3/4 p-4">
              {tabs.map((tab, index) => (
                <Tab.Panel key={index}>{tab.content}</Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        {tabs.map((tab, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => setActiveTab(activeTab === index ? -1 : index)}
              className="w-full flex justify-between items-center py-2 px-4 text-left font-medium text-gray-700 focus:outline-none"
            >
              {tab.name}
              <ChevronDown
                className={`transform transition-transform duration-200 ${
                  activeTab === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {activeTab === index && (
              <div className="p-4 text-gray-700">{tab.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsBokaro;