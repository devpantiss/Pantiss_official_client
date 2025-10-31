import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">
          Skilling Initiatives under DMF & SCMS
        </h2>
        <p className="text-gray-700 text-[18px] mb-6">
          The <b>District Mineral Foundation (DMF)</b> in partnership with the{" "}
          <b>Skill Council for Mining Sector (SCMS)</b> focuses on enhancing employability 
          and technical skills of local youth through job-oriented skilling programs. 
          The training modules are designed to meet industry standards with strong 
          emphasis on practical and field-based learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "HEMM Mechanic",
              desc: "Comprehensive training in maintenance and repair of heavy earth-moving machinery used in mining and construction operations.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819854/images_5_w5lly4.jpg",
            },
            {
              title: "Industrial Welder",
              desc: "Hands-on training in various welding techniques, safety practices, and fabrication processes for industrial applications.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
            },
            {
              title: "Dumper Operator",
              desc: "Skill-based training on operation, safety, and routine maintenance of dump trucks used in mining transport systems.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819881/WhatsApp_Image_2025-10-30_at_3.38.18_PM_avyast.jpg",
            },
            {
              title: "Excavator Operator",
              desc: "Training focused on efficient operation, maintenance, and safety practices for excavators used in mining and construction.",
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
    name: "Livelihood",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">
          Livelihood Development under DMF & ASCI
        </h2>
        <p className="text-gray-700 text-[18px] mb-6">
          Supported by the <b>District Mineral Foundation (DMF)</b> and{" "}
          <b>Agriculture Skill Council of India (ASCI)</b>, the livelihood 
          initiatives aim to build sustainable income generation models 
          in rural and tribal communities through skill training and enterprise promotion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Goat / Sheep Farmer",
              desc: "Training in small ruminant management, breeding, and health care to promote livestock-based livelihoods.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761843805/pexels-cottonbro-4430323_mbxpdx.jpg",
            },
            {
              title: "Small Poultry Farmer",
              desc: "Capacity building on poultry rearing, feed management, and disease prevention for sustainable income.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761843804/pexels-cottonbro-4911793_aixu6m.jpg",
            },
            {
              title: "Fresh Water Aquaculture",
              desc: "Skill training in pond management, seed stocking, feeding, and harvesting for fish farmers.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761843807/pexels-tomfisk-5786581_brkvgg.jpg",
            },
            {
              title: "Dairy Farming",
              desc: "Hands-on training in dairy management, milking hygiene, and value chain development for dairy farmers.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761843808/pexels-quy-hoang-251118521-34448689_sl19f0.jpg",
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
    name: "Nutrition",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">
          Nutrition & Early Childhood Development
        </h2>
        <p className="text-gray-700 text-[18px] mb-6">
          Focused on strengthening community-based childcare through{" "}
          <b>AWH (Anganwadi Worker)</b> capacity building and training on{" "}
          <b>Early Childhood Care & Education (ECCE)</b> and daycare management.
          These programs enhance service delivery for children and mothers, 
          targeting over <b>2600 AWHs</b> across the district.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761736217/nutrition_h3iv8m.jpg"
          alt="Nutrition and AWH Training"
          className="rounded-lg shadow-lg w-full max-h-[450px] object-cover"
        />
      </>
    ),
  },
  {
    name: "RPL for Fisheries",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">
          RPL on Fisheries with NEFDB
        </h2>
        <p className="text-gray-700 text-[18px] mb-6">
          The <b>Recognition of Prior Learning (RPL)</b> program under the{" "}
          <b>National Fisheries Development Board (NEFDB)</b> recognizes and 
          certifies existing skills of fish farmers and workers involved in 
          aquaculture and fisheries operations. The initiative enhances 
          technical know-how, promotes sustainable fishing practices, 
          and uplifts livelihoods within the fisheries sector.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761815054/AdobeStock_574000874_Preview_md91z2.jpg"
          alt="RPL Fisheries Training"
          className="rounded-lg shadow-lg w-full max-h-[450px] object-cover"
        />
      </>
    ),
  },
];

const DetailsKalahandi = () => {
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

export default DetailsKalahandi;