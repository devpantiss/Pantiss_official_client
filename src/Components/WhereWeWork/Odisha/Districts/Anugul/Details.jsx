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
          In Anugul District, we are committed to empowering individuals through our comprehensive and specialized training programs tailored to meet the demands of the modern workforce. Our initiatives include Excavator and HEMM (Heavy Earth Moving Machinery) Operator Training, designed to provide hands-on experience and technical expertise. These programs are meticulously crafted to equip participants with industry-relevant skills, ensuring they are well-prepared for employment opportunities in the thriving mining and construction sectors. By bridging the gap between local talent and industry needs, we aim to foster economic growth, enhance employability, and contribute to the sustainable development of the region.
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
          Our efforts in Anugul District extend to the rehabilitation and resettlement of communities impacted by mining activities, reflecting our deep commitment to social responsibility. We strive to ensure that affected families are provided with not just basic necessities but also opportunities for a dignified and sustainable future. This includes access to well-planned housing, robust livelihood support through skill development and employment opportunities, and essential social services such as education and healthcare. Our holistic approach emphasizes active community engagement, participatory decision-making, and long-term sustainability, ensuring that displaced populations can rebuild their lives with resilience and hope while maintaining their cultural and social fabric.
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
  //         Anugul District has witnessed significant mining activity over the years, leaving behind landscapes that require careful restoration. Our mine reclamation initiatives are dedicated to transforming these mined-out areas into thriving ecosystems once again. Through a combination of afforestation efforts, where we plant native species to restore biodiversity, and advanced soil restoration techniques to revive the land's fertility, we work tirelessly to heal the environment. Additionally, we involve local communities in these ecological rehabilitation efforts, fostering a sense of ownership and creating opportunities for sustainable livelihoods while ensuring the land is returned to a state that benefits both nature and people.
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
          In the mining villages of Anugul District, we recognize that health and well-being are foundational to thriving communities, which is why we have launched extensive programs to combat malnutrition and elevate living standards. Our initiatives focus on ensuring consistent access to nutritious food through community kitchens and agricultural support, clean and safe drinking water through infrastructure improvements, and comprehensive healthcare services tailored to the needs of rural populations. We place special emphasis on maternal health programs, providing prenatal and postnatal care to support healthy pregnancies, alongside school nutrition schemes that ensure children receive balanced meals to aid their physical and cognitive development. By addressing these critical areas, we aim to build healthier, stronger communities capable of overcoming the challenges posed by their environment.
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

const DetailsAnugul = () => {
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

export default DetailsAnugul;