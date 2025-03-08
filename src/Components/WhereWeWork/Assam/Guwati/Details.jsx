import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Components/Common/Heading";

const tabs = [
  {
    name: "RPL Program",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">RPL Program</h2>
        <p className="text-gray-700 text-[18px]">
          Our Recognition of Prior Learning (RPL) Program in Guwahati is a dynamic initiative aimed at recognizing and validating the practical skills and knowledge individuals have accumulated through hands-on experience rather than formal education. This program features a robust assessment process that evaluates participants’ competencies across diverse sectors, followed by targeted upskilling sessions to refine their abilities and align them with industry standards. Participants engage in practical workshops led by experts, gaining access to modern tools and techniques that enhance their professional capabilities. Upon completion, they receive industry-recognized certifications that significantly boost their employability and pave the way for career advancement. By honoring experiential learning and fostering skill development, this initiative empowers individuals in Guwahati to thrive in competitive job markets while contributing to the region’s economic progress.
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
          Our Mining Land Reclamation initiative in Guwahati is a comprehensive effort to restore degraded mining areas, revitalizing them into natural or productive landscapes that serve both ecological and community needs. We employ sustainable practices, including reforestation with native species, soil restoration through organic enrichment, and advanced water management systems to prevent erosion and promote groundwater recharge. Collaborating with environmental specialists and local communities, we work to enhance biodiversity by reintroducing flora and fauna, creating habitats that support long-term ecological balance. This initiative also opens opportunities for community use, such as agroforestry projects or green spaces, fostering sustainable livelihoods and improving quality of life. By blending scientific expertise with local insights, we aim to transform mined-out lands in Guwahati into thriving ecosystems, exemplifying our dedication to environmental restoration and social upliftment.
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

const DetailsGuwahati = () => {
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

export default DetailsGuwahati;