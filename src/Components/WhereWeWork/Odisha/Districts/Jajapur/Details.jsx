import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling with DMF & SCMS",
    tab_name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">Skilling with DMF & SCMS</h2>
        <p className="text-gray-700 text-[18px] mb-6">
          Under the partnership between the{" "}
          <b>District Mineral Foundation (DMF)</b> and the{" "}
          <b>Skill Council for Mining Sector (SCMS)</b>, structured skill
          development initiatives have been launched in Jajpur district to
          empower local youth for mining and allied industries. The program
          focuses on hands-on, industry-relevant training to enhance
          employability and sustainable livelihoods.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "HEMM Mechanic",
              desc: "Comprehensive training on maintenance and repair of Heavy Earth Moving Machinery used in mines and construction.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819875/WhatsApp_Image_2025-10-30_at_3.34.59_PM_tiduhn.jpg",
            },
            {
              title: "Industrial Welder",
              desc: "Advanced welding techniques and fabrication for industrial equipment, mining infrastructure, and heavy machinery.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819859/WhatsApp_Image_2025-10-30_at_3.30.06_PM_mhnoko.jpg",
            },
            {
              title: "Industrial Electrician",
              desc: "Training in installation, maintenance, and troubleshooting of electrical systems in industrial and mining environments.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819854/images_5_w5lly4.jpg",
            },
            {
              title: "Excavator Operator",
              desc: "Hands-on training for operating excavators efficiently and safely in mining and construction operations.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
            },
            {
              title: "Dumper Operator",
              desc: "Skill development for operating dump trucks safely and effectively in mining and infrastructure sectors.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819881/WhatsApp_Image_2025-10-30_at_3.38.18_PM_avyast.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-xl mb-3 w-full h-40 object-cover"
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
    name: "GIS Survey in Jajapur",
    tab_name: "GIS Survey",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">
          GIS-Based Household Survey in Jajpur
        </h2>
        <p className="text-gray-700 text-[18px] mb-4">
          A large-scale <b>GIS-enabled household survey</b> was conducted across
          two blocks of
          <b> Jajpur District</b>, covering more than <b>45,000 households</b>.
          The initiative aims to create a data-driven framework for social and
          economic planning.
        </p>

        <p className="text-gray-700 text-[18px] mb-4">
          Using advanced geospatial mapping technology, the survey gathered data
          on demographics, livelihoods, health, education, sanitation, and
          resource availability. This initiative supports evidence-based
          decision-making for local governance and resource allocation.
        </p>

        <p className="text-gray-700 text-[18px] mb-4">
          The GIS survey outcomes are being used to identify developmental
          priorities, monitor program implementation, and enhance transparency
          through data visualization.
        </p>

        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761837250/sourajit-hazra-b-O15p8xTns-unsplash_2_hu2xiu.jpg"
          alt="GIS Survey Jajpur"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "RPL on Fisheries with NEFDB",
    tab_name: "RPL",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">RPL on Fisheries with NEFDB</h2>
        <p className="text-gray-700 text-[18px]">
          In partnership with the{" "}
          <b>National Fisheries Development Board (NEFDB)</b>, the Recognition
          of Prior Learning (RPL) program identifies and certifies the existing
          skills of fish farmers and workers involved in aquaculture and inland
          fisheries.
        </p>
        <p className="text-gray-700 text-[18px] mt-4">
          It focuses on best aquaculture practices, water quality management,
          feed formulation, and sustainable fish breeding, ensuring skill
          validation and empowerment of fishery workers.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761815054/AdobeStock_574000874_Preview_md91z2.jpg"
          alt="RPL on Fisheries NEFDB"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
];

const DetailsJajapur = () => {
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
                    `block w-full py-3 px-4 text-left font-medium text-gray-700 hover:bg-gray-100 focus:outline-none ${
                      selected ? "bg-red-600 text-white" : ""
                    }`
                  }
                >
                  <p className="text-[18px]">{tab.tab_name}</p>
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
              className="w-full flex justify-between items-center py-3 px-4 text-left font-medium text-gray-700 focus:outline-none"
            >
              {tab.tab_name}
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

export default DetailsJajapur;
