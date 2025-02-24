import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Components/Common/Heading";

const tabs = [
  {
    name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling</h2>
        <p className="text-gray-700">
          In Anugul District, we provide specialized training programs such as
          Excavator and HEMM (Heavy Earth Moving Machinery) Operator Training.
          These programs equip individuals with industry-relevant skills to
          enhance employability in the mining and construction sectors.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192753/blogs_copltg.jpg"
          alt="Skilling"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Mining Village Rehabilitation & Resettlement",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">
          Mining Village Rehabilitation & Resettlement
        </h2>
        <p className="text-gray-700">
          We work on rehabilitating and resettling mining-affected communities
          in Anugul by ensuring access to housing, livelihood support, and
          social services. Our approach focuses on inclusive development and
          community engagement for long-term sustainability.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736152387/sebastian-pichler-ly2T4vul_SE-unsplash_hdi8yl.jpg"
          alt="Mining Village Rehabilitation"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  // {
  //   name: "Mine Reclamation",
  //   content: (
  //     <>
  //       <h2 className="text-3xl font-bold mb-2">Mine Reclamation</h2>
  //       <p className="text-gray-700">
  //         Anugul District has seen extensive mining activity, and we focus on
  //         reclaiming mined-out lands through afforestation, soil restoration,
  //         and community-based ecological rehabilitation efforts.
  //       </p>
  //       <img
  //         src="https://bracinternational.org/wp-content/uploads/2024/mine-reclamation.jpg"
  //         alt="Mine Reclamation"
  //         className="mt-4 rounded-lg shadow-lg"
  //       />
  //     </>
  //   ),
  // },
  {
    name: "Nutrition & Well-being in Mining Villages",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">
          Nutrition & Well-being in Mining Villages
        </h2>
        <p className="text-gray-700">
          We address malnutrition and health concerns in mining villages by
          promoting access to nutritious food, clean water, and healthcare
          services. Our initiatives include maternal health programs and school
          nutrition schemes.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195440/nutrition_jnxshz.jpg"
          alt="Nutrition & Well-being"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsDispur = () => {
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

export default DetailsDispur;
