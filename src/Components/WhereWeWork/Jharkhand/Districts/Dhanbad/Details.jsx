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
        <p className="text-gray-700 text-[18px]">
          Our Recognition of Prior Learning (RPL) Program in Dhanbad is a transformative effort designed to validate and enhance the skills and knowledge individuals have acquired through practical experience rather than traditional classroom education. This initiative offers a structured assessment process that evaluates participants’ existing competencies across various trades and industries, followed by tailored upskilling sessions to bridge any gaps. Participants benefit from expert guidance, practical workshops, and access to modern tools, ensuring they are equipped to meet current market demands. Upon completion, individuals receive industry-recognized certifications that significantly boost their employability and open pathways to career advancement. By acknowledging informal learning and fostering professional growth, this program supports a wide range of sectors in Dhanbad, contributing to both individual success and regional economic development.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/56cff1ce-3f2c-477a-98b9-74fd979e24fc_j3m2x6.jpg"
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
        <p className="text-gray-700 text-[18px]">
          Our Mining Land Reclamation initiative in Dhanbad is a comprehensive approach to restoring degraded mining areas, transforming them into productive or natural landscapes that benefit both the environment and local communities. This program employs sustainable practices such as reforestation, soil stabilization, and advanced water management techniques to rehabilitate land affected by mining activities. We work closely with environmental experts and local stakeholders to replenish biodiversity, prevent erosion, and improve soil fertility, ensuring long-term ecological recovery. Beyond restoration, the initiative creates opportunities for community use, such as agroforestry or recreational spaces, fostering sustainable livelihoods and enhancing quality of life. By integrating scientific methods with community needs, this effort underscores our commitment to environmental stewardship and supports Dhanbad’s transition toward a greener, more resilient future.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740391342/reclamation_lufvxk.jpg"
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

export default DetailsDhanbad;