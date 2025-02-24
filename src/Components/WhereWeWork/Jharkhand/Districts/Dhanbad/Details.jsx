import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "RPL Program",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">RPL Program</h2>
        <p className="text-gray-700">
          Our Recognition of Prior Learning (RPL) Program recognizes and validates the skills and knowledge individuals have gained through experience, rather than formal education. We provide assessment, certification, and upskilling opportunities to enhance employability and support career advancement across various sectors.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/56cff1ce-3f2c-477a-98b9-74fd979e24fc_j3m2x6.jpg" // Replace with actual image URL
          alt="RPL Program"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Mining Land Reclamation",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Mining Land Reclamation</h2>
        <p className="text-gray-700">
          Our Mining Land Reclamation initiative focuses on restoring degraded mining areas to their natural or productive state. We employ sustainable practices, such as reforestation, soil restoration, and water management, to rehabilitate land, support biodiversity, and benefit local communities.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740391342/reclamation_lufvxk.jpg" // Replace with actual image URL
          alt="Mining Land Reclamation"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsDhanbad = () => {
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

export default DetailsDhanbad;
