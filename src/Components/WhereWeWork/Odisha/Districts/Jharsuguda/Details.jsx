import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling - Dumper Operator",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling</h2>
        <p className="text-gray-700">
          In Jharsuguda, we provide specialized training programs for Dumper
          Operators. This skilling initiative aims to equip individuals with
          essential skills required for employment in the mining and logistics
          sectors, ensuring sustainable livelihoods.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735301666/IMG_9085_tkrncl.jpg"
          alt="Skilling - Dumper Operator"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Indigenous Community Empowerment",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Indigenous Community Empowerment</h2>
        <p className="text-gray-700">
          Our initiatives focus on empowering indigenous communities in
          Jharsuguda by preserving cultural heritage, providing access to
          education, and promoting sustainable economic opportunities. We work
          towards social inclusion and self-sufficiency through various
          community-driven programs.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737442574/Chhattisgarh_j4drsy.jpg"
          alt="Indigenous Community Empowerment"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsJharsuguda = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <Heading text="OUR WORK" color="text-black" bgColor="bg-red-600" />
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

export default DetailsJharsuguda;