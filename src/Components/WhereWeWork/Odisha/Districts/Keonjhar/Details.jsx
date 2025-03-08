import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling in Facility Management",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling in Facility Management</h2>
        <p className="text-gray-700 text-[18px]">
          Our skilling program in facility management in Keonjhar provides an extensive training framework designed to prepare individuals for overseeing the maintenance, operations, and safety of diverse facilities. Participants engage in a detailed curriculum that covers essential topics such as building upkeep, HVAC system management, electrical and plumbing maintenance, and adherence to stringent safety standards. Through hands-on workshops and real-world simulations, trainees develop practical skills to ensure operational efficiency and create secure environments for occupants. The program also emphasizes leadership and resource management, equipping participants to handle the complexities of facility oversight. Upon completion, individuals are well-prepared to take on roles in industrial, commercial, or residential settings, contributing to improved infrastructure and community well-being in the region.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740388680/81fb4af3-7318-4950-81fb-78cd982cf86f_v00f1u.jpg"
          alt="Skilling in Facility Management"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Agricultural RPL Program",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Agricultural RPL Program</h2>
        <p className="text-gray-700 text-[18px]">
          The Agricultural Recognition of Prior Learning (RPL) program in Keonjhar is a transformative initiative aimed at acknowledging and enhancing the existing skills of farmers and agricultural workers. This program offers tailored training that builds on participants' prior experience, introducing modern farming techniques, sustainable practices, and resource management strategies to boost productivity. Through a combination of field-based learning, workshops, and expert guidance, we empower individuals to adopt innovative approaches like crop diversification, soil health management, and water conservation. Upon completion, participants receive certifications that validate their expertise, opening pathways to improved income generation and market opportunities. By fostering agricultural resilience and sustainability, this initiative supports rural livelihoods and strengthens the agrarian economy of Keonjhar.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739292358/crops-growing-in-thailand_uc3ttv.jpg"
          alt="Agricultural RPL Program"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsKeonjhar = () => {
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
                    `block w-full py-2 px-4 text-left font-medium text-[18px] text-gray-700 hover:bg-gray-100 focus:outline-none ${
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
              className="w-full flex justify-between items-center py-2 px-4 text-left font-medium text-[18px] text-gray-700 focus:outline-none"
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

export default DetailsKeonjhar;