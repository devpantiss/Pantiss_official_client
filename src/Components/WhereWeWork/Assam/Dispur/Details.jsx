import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Components/Common/Heading";

const tabs = [
  {
    name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling</h2>
        <p className="text-gray-700 text-[18px]">
          In Dispur District, our specialized skilling programs, such as Excavator and HEMM (Heavy Earth Moving Machinery) Operator Training, are meticulously crafted to equip individuals with industry-relevant technical skills critical for success in the mining and construction sectors. These programs offer hands-on training with advanced machinery, focusing on operational proficiency, safety protocols, and maintenance techniques to ensure participants can handle equipment like excavators and loaders with precision and care. The curriculum also incorporates environmental awareness and efficiency optimization, preparing trainees to contribute to sustainable practices. By providing certifications upon completion, we enhance employability, enabling participants to secure stable livelihoods while meeting the workforce demands of Dispur’s industrial landscape. This initiative reflects our commitment to fostering skill development and economic empowerment in the region.
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
        <p className="text-gray-700 text-[18px]">
          Our efforts in Dispur focus on the rehabilitation and resettlement of communities displaced or affected by mining activities, ensuring they thrive through inclusive and sustainable development. We provide comprehensive support, including access to modern housing equipped with essential amenities, tailored livelihood programs such as vocational training and micro-enterprise opportunities, and robust social services like education and healthcare. Our approach emphasizes deep community engagement, working closely with local leaders and residents to address their unique needs and aspirations. By fostering self-reliance and preserving cultural identities, we aim to create resilient communities that benefit from long-term stability and growth. This initiative underscores our dedication to balancing industrial progress with social responsibility in Dispur’s mining villages.
        </p>
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736152387/sebastian-pichler-ly2T4vul_SE-unsplash_hdi8yl.jpg"
          alt="Mining Village Rehabilitation"
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
        <p className="text-gray-700 text-[18px]">
          In Dispur’s mining villages, we tackle malnutrition and health challenges by implementing targeted initiatives that promote access to nutritious food, clean water, and quality healthcare services. Our programs include establishing community kitchens and nutrition education campaigns to ensure families understand balanced diets, alongside infrastructure improvements like water purification systems to combat waterborne diseases. We also prioritize maternal health through prenatal and postnatal care programs, providing supplements and medical support to expectant and new mothers. For children, our school nutrition schemes supply meals fortified with essential vitamins, enhancing physical and cognitive development. By collaborating with local health workers and organizations, we foster a holistic approach to well-being, aiming to uplift living standards and build healthier, more resilient communities in Dispur’s mining-affected areas.
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

const DetailsDispur = () => {
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

export default DetailsDispur;