import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling with SCMS & DMFT",
    tab_name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">Skilling with SCMS & DMFT</h2>
        <p className="text-gray-700 text-[18px] mb-6">
          In collaboration with the <b>Skill Council for Mining Sector (SCMS)</b> and the
          <b> District Mineral Foundation Trust (DMFT)</b>, structured training programs
          are conducted to develop skilled manpower for mining and allied industries in Odisha.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Dumper Operator",
              desc: "Operation, safety, and maintenance of dump trucks used in mining environments.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819881/WhatsApp_Image_2025-10-30_at_3.38.18_PM_avyast.jpg",
            },
            {
              title: "Excavator Operator",
              desc: "Hands-on skills for managing heavy excavation machinery efficiently and safely.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
            },
            {
              title: "HEMM Mechanic",
              desc: "Training in maintenance and repair of Heavy Earth Moving Machinery.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819875/WhatsApp_Image_2025-10-30_at_3.34.59_PM_tiduhn.jpg",
            },
            {
              title: "Industrial Welder",
              desc: "Advanced welding techniques for industrial and mining structures.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819859/WhatsApp_Image_2025-10-30_at_3.30.06_PM_mhnoko.jpg",
            },
            {
              title: "Industrial Electrician",
              desc: "Electrical installation, troubleshooting, and maintenance for industry systems.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819854/images_5_w5lly4.jpg",
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
    name: "RPL on Fisheries with NEFDB",
    tab_name: "RPL",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">RPL on Fisheries with NEFDB</h2>
        <p className="text-gray-700 text-[18px]">
          In partnership with the <b>National Fisheries Development Board (NEFDB)</b>,
          the Recognition of Prior Learning (RPL) program identifies and certifies the
          existing skills of fish farmers and workers involved in aquaculture and inland fisheries.
        </p>
        <p className="text-gray-700 text-[18px] mt-4">
          It focuses on best aquaculture practices, water quality management, feed formulation,
          and sustainable fish breeding, ensuring skill validation and empowerment of fishery workers.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761815054/AdobeStock_574000874_Preview_md91z2.jpg"
          alt="RPL on Fisheries NEFDB"
          className="mt-4 rounded-lg shadow-lg"
        />
      </>
    ),
  },
  {
    name: "DMF & ASCI Program",
    tab_name: "Livelihood",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-6">DMF & ASCI Program</h2>
        <p className="text-gray-700 text-[18px] mb-6">
          The <b>District Mineral Foundation (DMF)</b> in collaboration with the
          <b> Agriculture Skill Council of India (ASCI)</b> has introduced agricultural
          skill development programs focused on strengthening rural livelihoods and promoting
          sustainable farming practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {[
            {
              title: "Fresh Water Fish Farming",
              desc: "Scientific training in pond preparation, fish breeding, and feed management.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761834809/collab-media-syktLyfonaI-unsplash_h2kvz7.jpg",
            },
            {
              title: "Organic Grower",
              desc: "Training on chemical-free farming practices and organic certification processes.",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761835148/so-many-vegetables-this-field_bnlhyv.jpg",
            },
            {
              title: "Custom Hiring Services",
              desc: "Entrepreneurial skills for managing agricultural machinery and service centers.",
              img: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlyaW5nfGVufDB8fDB8fHww&fm=jpg&q=60&w=3000",
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
];

const DetailsKeonjhar = () => {
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

export default DetailsKeonjhar;
