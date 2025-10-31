import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">Skilling Initiatives in Jharsuguda</h2>
        <p className="text-gray-700 text-[18px] mb-6">
          Under the <b>District Mineral Foundation (DMF)</b> and <b>Skill Council for Mining Sector (SCMS)</b>,
          our skilling initiatives in Jharsuguda focus on developing a technically competent workforce
          through job-oriented training programs. The training integrates theory, practical exposure,
          and hands-on sessions conducted in collaboration with industry experts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Industrial Electrician (Hirma)",
              desc: "Focused on electrical installation, troubleshooting, and maintenance for industrial systems at Hirma. Participants gain hands-on skills to meet modern industrial demands.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819854/images_5_w5lly4.jpg",
            },
            {
              title: "Dumper Operator (Malda)",
              desc: "Comprehensive training in the operation, safety, and maintenance of dump trucks used in mining and material handling at Malda.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819881/WhatsApp_Image_2025-10-30_at_3.38.18_PM_avyast.jpg",
            },
            {
              title: "Excavator Operator (Malda)",
              desc: "Practical and simulation-based training in handling and maintaining excavators for mining and construction operations at Malda.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-[16px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    name: "Indigenous Community Empowerment",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">Indigenous Community Empowerment</h2>
        <p className="text-gray-700 text-[18px]">
          Our initiatives in Jharsuguda are deeply committed to empowering indigenous communities
          through cultural preservation and sustainable development. We promote access to education,
          skill development, and livelihood generation while respecting traditional knowledge and
          social inclusion. This holistic approach ensures communities grow economically while
          retaining their unique identity.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761840260/odisha-2368219_1280_hspude.jpg"
          alt="Indigenous Community Empowerment"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsJharsuguda = () => {
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
                    `block w-full py-3 px-4 text-left font-medium text-[18px] text-gray-700 hover:bg-gray-100 focus:outline-none ${
                      selected ? "bg-red-600 text-white" : ""
                    }`
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="w-3/4 p-6">
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
              className="w-full flex justify-between items-center py-3 px-4 text-left font-medium text-[18px] text-gray-700 focus:outline-none"
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

export default DetailsJharsuguda;
