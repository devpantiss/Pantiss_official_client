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
        <p className="text-gray-700 text-[18px]">
          Our skilling program for electricians in Sundargarh is a robust initiative aimed at equipping individuals with the expertise needed to excel in electrical work across industrial and residential sectors. The program offers extensive hands-on training, focusing on modern electrical techniques, wiring systems, and troubleshooting methods. Safety protocols are a cornerstone of the curriculum, ensuring participants are well-versed in handling high-risk scenarios with confidence and precision. Trainees benefit from practical workshops, mentorship from industry experts, and access to cutting-edge tools. Upon completion, participants receive recognized certifications that enhance their employability, along with support for job placements. This initiative not only fosters individual career growth but also contributes to the region's infrastructure development by producing skilled professionals.
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
        <p className="text-gray-700 text-[18px]">
          This specialized training program in Sundargarh is designed to develop proficient mining vehicle operators capable of managing heavy machinery with safety and efficiency. Participants undergo an immersive learning experience that combines advanced simulator-based training with on-site practical sessions, replicating real-world mining conditions. The curriculum covers vehicle operation techniques, maintenance basics, and strict adherence to safety standards, ensuring operators can handle complex equipment like excavators, loaders, and dumpers. By integrating theoretical knowledge with hands-on practice, we prepare individuals to meet the demands of the mining industry. The program also emphasizes environmental awareness and operational best practices, aiming to produce skilled operators who contribute to both productivity and sustainability in Sundargarh's mining sector.
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
        <p className="text-gray-700 text-[18px]">
          Our reclamation initiative in Sundargarh transforms degraded mining lands into productive mango orchards, blending environmental restoration with community development. This program begins with the careful rehabilitation of mined-out areas, addressing soil degradation and erosion through sustainable land management techniques. By planting mango orchards, we not only restore biodiversity but also create a renewable resource that supports local ecosystems and wildlife. The initiative provides economic benefits by generating sustainable livelihoods for local communities through orchard maintenance, harvesting, and market opportunities. Collaborating with agricultural experts and residents, we ensure the orchards thrive, fostering a model of ecological recovery that balances nature and human needs. This effort stands as a testament to our commitment to long-term environmental stewardship and regional prosperity.
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

export default DetailsSundargarh;