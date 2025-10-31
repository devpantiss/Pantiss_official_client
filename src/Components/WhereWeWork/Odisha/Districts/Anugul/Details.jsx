import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

const tabs = [
  {
    name: "Skilling",
    content: (
      <>
        <h2 className="text-3xl font-bold mb-4">Skilling</h2>
        <p className="text-gray-700 mb-6">
          In Anugul District, we are committed to empowering individuals through
          comprehensive and specialized training programs tailored to meet the
          demands of the modern workforce. Our initiatives include a range of
          technical and vocational programs designed to provide hands-on
          experience and industry-relevant skills. These programs are conducted
          in collaboration with reputed partners like <b>SCMS, MCL,</b> and{" "}
          <b>Nitcon</b>, ensuring strong industry linkages and placement
          opportunities. Through these initiatives, we aim to foster economic
          growth, enhance employability, and contribute to the sustainable
          development of the region.
        </p>

        {/* Training Programs List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "HEMM Mechanic Training",
              subtitle: "Under Nua Odisha (with SCMS)",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819875/WhatsApp_Image_2025-10-30_at_3.34.59_PM_tiduhn.jpg",
            },
            {
              title: "Industrial Welder Training",
              subtitle: "Under Saksham (with MCL & Nitcon)",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819859/WhatsApp_Image_2025-10-30_at_3.30.06_PM_mhnoko.jpg",
            },
            {
              title: "Industrial Electrician Training",
              subtitle: "Under Saksham (with MCL & Nitcon)",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819854/images_5_w5lly4.jpg",
            },
            {
              title: "Dumper Operator Training",
              subtitle: "Under Saksham (with MCL & Nitcon)",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819881/WhatsApp_Image_2025-10-30_at_3.38.18_PM_avyast.jpg",
            },
            {
              title: "Excavator Operator Training",
              subtitle: "Under Saksham (with MCL & Nitcon)",
              img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-red-600 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-medium">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
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
          Our efforts in Anugul District extend to the rehabilitation and
          resettlement of communities impacted by mining activities, reflecting
          our deep commitment to social responsibility. We strive to ensure that
          affected families are provided with not just basic necessities but
          also opportunities for a dignified and sustainable future. This
          includes access to well-planned housing, robust livelihood support
          through skill development and employment opportunities, and essential
          social services such as education and healthcare. Our holistic
          approach emphasizes active community engagement, participatory
          decision-making, and long-term sustainability, ensuring that displaced
          populations can rebuild their lives with resilience and hope while
          maintaining their cultural and social fabric.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761813824/aditya-shrivastava-yYPcqVU6IEI-unsplash_rja5sb.jpg"
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
        <p className="text-gray-700">
          In the mining villages of Anugul District, we recognize that health
          and well-being are foundational to thriving communities. Our
          initiatives focus on ensuring access to nutritious food, clean
          drinking water, and healthcare services. We prioritize maternal health
          programs, prenatal and postnatal care, and school nutrition schemes
          that ensure children receive balanced meals. Through these integrated
          interventions, we aim to build healthier, stronger communities capable
          of overcoming the challenges posed by their environment.
        </p>
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761813698/PIC-13_fdngmf.jpg"
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
