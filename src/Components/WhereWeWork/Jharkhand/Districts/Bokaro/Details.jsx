import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Mining Vehicles Operator",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Mining Vehicles Operator</h2>
        <p className="text-gray-700 text-[18px]">
          Our Mining Vehicles Operator program in Bokaro is a comprehensive training initiative designed to equip individuals with the skills needed to operate heavy machinery essential to mining operations, such as dump trucks, excavators, and bulldozers. The program offers an immersive learning experience that includes hands-on training with real equipment, in-depth instruction on safety protocols, and operational techniques tailored to the demanding conditions of mining environments. Participants learn to navigate complex terrains, perform routine maintenance checks, and adhere to industry-standard safety measures to minimize risks. Upon completion, trainees receive certifications that enhance their employability, opening doors to lucrative careers in the mining sector. This initiative not only boosts individual productivity but also supports Bokaro’s industrial growth by producing a skilled workforce capable of driving efficient and safe mining operations.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737450493/TNIE_import_2023_3_6_original_Illegalcoalmining_cthtx2.avif"
          alt="Mining Vehicles Operator"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "Plastic Waste Recycling Plant Construction",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Plastic Waste Recycling Plant Construction</h2>
        <p className="text-gray-700 text-[18px]">
          Our Plastic Waste Recycling Plant Construction initiative in Bokaro is a forward-thinking project aimed at addressing environmental challenges by establishing sustainable facilities to recycle plastic waste. This program focuses on reducing pollution and promoting a circular economy through the development of advanced recycling infrastructure. We bring together technical expertise, innovative design, and community engagement to construct plants that efficiently process plastic waste into reusable materials. The initiative includes training local workers in recycling technologies, fostering environmental awareness, and collaborating with stakeholders to ensure long-term success. By transforming waste into valuable resources, these plants benefit local ecosystems, reduce landfill dependency, and create economic opportunities through job creation and material markets. This effort reflects our commitment to sustainability and enhancing the quality of life in Bokaro.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740389668/plastic_waste_anmisu.jpg"
          alt="Plastic Waste Recycling Plant Construction"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsBokaro = () => {
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

export default DetailsBokaro;