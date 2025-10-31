import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling - Excavator Operator",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Skilling - Excavator Operator</h2>
        <p className="text-gray-700 text-[18px]">
          In Korba, our specialized training program for Excavator Operators is meticulously designed to empower individuals with the advanced technical skills and safety knowledge essential for thriving in the mining and construction sectors. This initiative provides hands-on experience operating heavy machinery, focusing on precision excavation techniques, equipment maintenance, and adherence to rigorous safety protocols. Participants undergo practical training in real-world scenarios, learning to navigate challenging terrains and optimize machine performance while minimizing risks. The program also includes modules on environmental considerations and operational efficiency, ensuring operators contribute to sustainable practices. Upon completion, trainees receive certifications that enhance their employability, opening doors to rewarding careers and supporting Korba’s industrial landscape by fostering a skilled workforce capable of driving productivity and safety.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg"
          alt="Skilling - Excavator Operator"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "RPL Program",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Recognition of Prior Learning (RPL) Program</h2>
        <p className="text-gray-700 text-[18px]">
          The Recognition of Prior Learning (RPL) program in Korba is a forward-thinking initiative tailored to assess, validate, and certify the skills of experienced workers in the mining and industrial sectors, recognizing their expertise gained through years of practical work rather than formal education. This program offers a structured evaluation process, followed by customized upskilling opportunities that address specific gaps and introduce modern techniques relevant to today’s industries. Participants benefit from expert-led assessments, hands-on workshops, and access to updated tools and methodologies, ensuring their skills align with current standards. Upon successful completion, individuals receive formal certifications that significantly improve their job prospects, facilitate career progression, and enhance their professional credibility. By bridging the gap between experience and recognition, this initiative strengthens Korba’s workforce, promoting economic growth and individual empowerment.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761914537/workers_rjwzq5.jpg"
          alt="RPL Program"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsKorba = () => {
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

export default DetailsKorba;