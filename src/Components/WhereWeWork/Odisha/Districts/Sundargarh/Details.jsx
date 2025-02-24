import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling of Electricians",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling of Electricians</h2>
        <p className="text-gray-700">
          Our skilling program for electricians focuses on hands-on training,
          safety protocols, and modern electrical techniques. Participants gain
          certifications and job placements in industrial and residential
          sectors.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387858/cdf465e2-d939-4b28-9d85-e43c30043ff3_paitjs.jpg"
          alt="Skilling of Electricians"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Skilling of Mining Vehicle Operators",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling of Mining Vehicle Operators</h2>
        <p className="text-gray-700">
          This program provides specialized training in operating heavy mining
          vehicles, ensuring safety and efficiency. It includes simulator-based
          learning and on-site practical training.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg"
          alt="Skilling of Mining Vehicle Operators"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Reclamation of Mining Land (Mango Orchard Plantation)",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Reclamation of Mining Land (Mango Orchard Plantation)</h2>
        <p className="text-gray-700">
          Our initiative focuses on transforming degraded mining lands into
          productive mango orchards. This supports environmental restoration,
          biodiversity, and sustainable livelihoods for local communities.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740388190/AdobeStock_333360278_Preview_dlimzr.jpg"
          alt="Reclamation of Mining Land"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsSundargarh = () => {
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

export default DetailsSundargarh;
