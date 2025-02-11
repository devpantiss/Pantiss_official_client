import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling - Excavator Operator",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling - Excavator Operator</h2>
        <p className="text-gray-700">
          In Korba, we provide specialized training for Excavator Operators. This program aims to equip individuals with the necessary technical skills and safety knowledge required for efficient operations in the mining and construction sectors.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325281/WhatsApp_Image_2025-01-08_at_1.03.30_PM_fx0igb.jpg"
          alt="Skilling - Excavator Operator"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "RPL Program",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Recognition of Prior Learning (RPL) Program</h2>
        <p className="text-gray-700">
          The RPL program in Korba is designed to assess and certify the skills of experienced workers in the mining and industrial sectors. This initiative provides formal recognition, improves job opportunities, and enhances career progression for skilled laborers.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325286/WhatsApp_Image_2025-01-08_at_1.05.17_PM_hgvk7u.jpg"
          alt="RPL Program"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsKorba = () => {
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

export default DetailsKorba;
