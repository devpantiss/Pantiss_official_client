import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "HEMM Mechanic Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">HEMM Mechanic Skilling</h2>
        <p className="text-gray-700">
          Our HEMM (Heavy Earth Moving Machinery) Mechanic Skilling program trains individuals in maintaining and repairing heavy machinery used in mining and construction. We provide hands-on training, technical knowledge, and certification to enhance employment opportunities and ensure operational efficiency in heavy equipment management.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740388951/a9a42559-8f73-4b9c-ab85-15a03168ded5_ws6p9s.jpg" // Replace with actual image URL
          alt="HEMM Mechanic Skilling"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Mining Land Reclamation by Making Ponds",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Mining Land Reclamation by Making Ponds</h2>
        <p className="text-gray-700">
          Our mining land reclamation initiative focuses on restoring degraded mining areas by creating ponds for water conservation and biodiversity. This program promotes sustainable land use, supports local ecosystems, and provides resources for communities through innovative reclamation techniques.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740389052/AdobeStock_574000874_Preview_y3iqiv.jpg" // Replace with actual image URL
          alt="Mining Land Reclamation by Making Ponds"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsKalahandi = () => {
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

export default DetailsKalahandi;