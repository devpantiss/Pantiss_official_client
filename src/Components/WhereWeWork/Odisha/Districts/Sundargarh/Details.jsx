import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Education",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Education</h2>
        <p className="text-gray-700">
          We prioritise joyful learning and engage participatory approaches for
          social-emotional learning, play, and character development. Our
          community-driven network of programmes includes pre-primary, primary,
          as well as accelerated learning for adolescents, especially girls who
          have dropped out of or never attended school. We mobilise communities
          in favour of girls’ education.
        </p>
        <img
          src="https://bracinternational.org/wp-content/uploads/2024/09/Education-AGE-pic.webp"
          alt="Education"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Humanitarian-Development Nexus",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">
          Humanitarian-Development Nexus
        </h2>
        <p className="text-gray-700">
          Content about the Humanitarian-Development Nexus goes here.
        </p>
        <img
          src="https://bracinternational.org/wp-content/uploads/2024/11/humanitarian-development-nexus.webp"
          alt="Education"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Ultra-Poor Graduation",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Ultra-Poor Graduation</h2>
        <p className="text-gray-700">
          Our flagship Ultra-Poor Graduation approach is a globally recognised
          solution that offers holistic support to enable people to chart a
          pathway out of extreme poverty. We implement community-based
          protection systems targeting returnees and displaced people, as well
          as host communities. We create conducive conditions for sustainable
          reintegration and stronger resilience.
        </p>
        <img
          src="https://bracinternational.org/wp-content/uploads/2024/09/UPG-Participant.webp"
          alt="Ultra-Poor Graduation"
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

export default DetailsSundargarh;
