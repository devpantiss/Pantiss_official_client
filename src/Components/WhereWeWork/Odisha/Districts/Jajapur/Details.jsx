import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling</h2>
        <p className="text-gray-700">
          In Jajapur District, we offer training programs for Electricians and
          Security Guards. These skilling initiatives provide opportunities for
          employment in industrial and mining areas, ensuring financial
          stability for local youth.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_2000/v1739283474/WhatsApp_Image_2025-02-11_at_7.45.14_PM_zual7i.jpg"
          alt="Skilling"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Reclamation of Mining Land",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Reclamation of Mining Land</h2>
        <p className="text-gray-700">
          The mining-affected lands in Jajapur are being reclaimed through
          sustainable practices such as guava plantation. This initiative helps
          restore soil fertility, promotes biodiversity, and provides economic
          benefits to local farmers.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739283475/WhatsApp_Image_2025-02-11_at_7.45.05_PM_zd4iay.jpg"
          alt="Reclamation of Mining Land"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsJajapur = () => {
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

export default DetailsJajapur;
