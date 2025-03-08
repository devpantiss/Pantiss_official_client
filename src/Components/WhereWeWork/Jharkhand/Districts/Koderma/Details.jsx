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
          Our skilling program in facility management in Koderma is a thorough training initiative designed to prepare individuals for managing the maintenance, operations, and safety of diverse facilities. The curriculum encompasses a wide range of topics, including building maintenance, HVAC system operations, electrical and plumbing repairs, and compliance with rigorous safety standards. Participants engage in practical, hands-on sessions and simulations that mirror real-world scenarios, enabling them to develop the technical and managerial skills needed to ensure operational efficiency. The program also focuses on fostering a safe and comfortable environment for occupants, covering aspects like waste management and emergency preparedness. By equipping trainees with these comprehensive abilities, we empower them to excel in roles across industrial, commercial, and residential settings, contributing to Koderma’s infrastructure development and community well-being.
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
          The Agricultural Recognition of Prior Learning (RPL) program in Koderma is an innovative effort to acknowledge and enhance the expertise of farmers and agricultural workers, building on their existing knowledge gained through years of hands-on experience. This initiative offers a blend of practical training, expert-led workshops, and modern agricultural techniques, such as sustainable farming practices, crop rotation, and integrated pest management. We assess participants’ prior skills and provide customized upskilling opportunities to improve productivity, adopt eco-friendly methods, and increase income potential. Upon completion, individuals receive certifications that validate their capabilities, enhancing their credibility and access to markets or financial support. By promoting sustainable agriculture and empowering rural communities, this program strengthens Koderma’s agrarian economy and supports long-term food security and environmental health.
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

const DetailsKoderma = () => {
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

export default DetailsKoderma;