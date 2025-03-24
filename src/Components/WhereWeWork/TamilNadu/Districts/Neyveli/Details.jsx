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
          In Neyveli, we are dedicated to empowering the local workforce through specialized training programs tailored to the lignite mining and power generation industries. Our initiatives include Lignite Mining Operator Training and Power Plant Technician Courses, offering practical skills and technical knowledge. These programs are designed to prepare participants for careers in Neyveli’s thriving energy sector, fostering employability and economic growth. By aligning training with the needs of NLC India Limited and related industries, we aim to bridge the skill gap, uplift the community, and contribute to the region’s sustainable industrial development.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192753/blogs_copltg.jpg"
          alt="Skilling in Neyveli"
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
          Our rehabilitation and resettlement efforts in Neyveli focus on supporting communities affected by lignite mining expansion, reflecting our commitment to social equity. We provide displaced families with modern housing, sustainable livelihood options through vocational training and micro-enterprise support, and access to essential services like education and healthcare. Working closely with local stakeholders, we ensure participatory planning and cultural preservation, helping families transition smoothly to new settlements. Our goal is to create resilient communities around Neyveli that thrive beyond mining, with a focus on long-term well-being and economic stability.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736152387/sebastian-pichler-ly2T4vul_SE-unsplash_hdi8yl.jpg"
          alt="Mining Village Rehabilitation in Neyveli"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Nutrition & Well-being in Mining Villages",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">
          Nutrition & Well-being in Mining Villages
        </h2>
        <p className="text-gray-700">
          In Neyveli’s mining villages, we prioritize health and well-being to build stronger, more resilient communities impacted by industrial activities. Our programs ensure access to nutritious meals through community nutrition centers, safe drinking water via advanced purification systems, and comprehensive healthcare services tailored to rural needs. We emphasize maternal and child health with targeted nutrition schemes and regular health camps, alongside school feeding programs to support student growth and learning. By addressing these foundational needs, we aim to enhance the quality of life for Neyveli’s residents, fostering a healthier future for generations to come.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195440/nutrition_jnxshz.jpg"
          alt="Nutrition & Well-being in Neyveli"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsNeyveli = () => {
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

export default DetailsNeyveli;