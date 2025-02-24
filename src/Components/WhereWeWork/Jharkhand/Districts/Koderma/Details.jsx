import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  // {
  //   name: "Skilling in Security Guard",
  //   content: (
  //     <>
  //       <h2 className="text-3xl font-bold mb-2">Skilling in Security Guard</h2>
  //       <p className="text-gray-700">
  //         Our programs focus on training individuals in security guard skills, including safety protocols, surveillance techniques, and emergency response. We provide hands-on training and certification to ensure participants are well-prepared for roles in security management, enhancing community safety and employment opportunities.
  //       </p>
  //       <img
  //         src="https://example.com/skilling-security-guard.jpg" // Replace with actual image URL
  //         alt="Skilling in Security Guard"
  //         className="mt-4 rounded-lg shadow-lg"
  //       />
  //     </>
  //   ),
  // },
  {
    name: "Skilling in Facility Management",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling in Facility Management</h2>
        <p className="text-gray-700">
          We offer comprehensive training in facility management, covering maintenance, operations, and safety standards for various facilities. This program equips participants with the skills to manage buildings, ensure operational efficiency, and maintain a safe environment for occupants.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740388680/81fb4af3-7318-4950-81fb-78cd982cf86f_v00f1u.jpg" // Replace with actual image URL
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
        <p className="text-gray-700">
          Our Agricultural Recognition of Prior Learning (RPL) program recognizes and enhances the skills of farmers and agricultural workers. We provide training, certification, and support to improve productivity, sustainability, and income generation in the agricultural sector.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739292358/crops-growing-in-thailand_uc3ttv.jpg" // Replace with actual image URL
          alt="Agricultural RPL Program"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsKoderma = () => {
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

export default DetailsKoderma;
