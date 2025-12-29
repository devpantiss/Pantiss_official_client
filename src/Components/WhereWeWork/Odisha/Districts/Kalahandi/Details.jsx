import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Users, Briefcase, Home, HeartPulse } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

/* --------------------------------
   DATA
-------------------------------- */

const tabs = [
  {
    tab_name: "Skilling",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819854/images_5_w5lly4.jpg",
    description:
      "The District Mineral Foundation (DMF) in partnership with the Skill Council for Mining Sector (SCMS) focuses on enhancing employability and technical skills of local youth through job-oriented skilling programs aligned with industry standards.",
    projects: [
      "HEMM Mechanic",
      "Industrial Welder",
      "Dumper Operator",
      "Excavator Operator",
    ],
    clients: [
      {
        name: "DMF Kalahandi",
        logo: "https://dummyimage.com/200x100/000/fff&text=DMF+Kalahandi",
      },
      {
        name: "SCMS",
        logo: "https://dummyimage.com/200x100/000/fff&text=SCMS",
      },
    ],
    impacts: [
      { value: "1,800+", label: "Youth Trained", icon: Users },
      { value: "75%", label: "Placement Rate", icon: Briefcase },
      { value: "4", label: "Trades Offered", icon: Home },
    ],
  },

  {
    tab_name: "Livelihood",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761843805/pexels-cottonbro-4430323_mbxpdx.jpg",
    description:
      "Supported by the District Mineral Foundation (DMF) and Agriculture Skill Council of India (ASCI), livelihood initiatives focus on building sustainable income models for rural and tribal communities through skill training and enterprise development.",
    projects: [
      "Goat / Sheep Farmer",
      "Small Poultry Farmer",
      "Fresh Water Aquaculture",
      "Dairy Farming",
    ],
    clients: [
      {
        name: "DMF Kalahandi",
        logo: "https://dummyimage.com/200x100/000/fff&text=DMF+Kalahandi",
      },
      {
        name: "ASCI",
        logo: "https://dummyimage.com/200x100/000/fff&text=ASCI",
      },
    ],
    impacts: [
      { value: "2,400+", label: "Beneficiaries", icon: Users },
      { value: "120+", label: "Villages Covered", icon: Home },
      { value: "65%", label: "Income Improvement", icon: Briefcase },
    ],
  },

  {
    tab_name: "Nutrition",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761736217/nutrition_h3iv8m.jpg",
    description:
      "Nutrition and Early Childhood Development initiatives focus on strengthening Anganwadi Workers (AWH) capacity through ECCE and daycare management training, improving service delivery for children and mothers across the district.",
    projects: [
      "AWH Capacity Building",
      "ECCE Training",
      "Daycare Management",
      "Nutrition Awareness Programs",
    ],
    clients: [
      {
        name: "Women & Child Development Dept",
        logo: "https://dummyimage.com/200x100/000/fff&text=WCD+Dept",
      },
    ],
    impacts: [
      { value: "2,600+", label: "AWHs Trained", icon: HeartPulse },
      { value: "35,000+", label: "Children Reached", icon: Users },
      { value: "100%", label: "Centers Covered", icon: Home },
    ],
  },

  {
    tab_name: "RPL for Fisheries",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761815054/AdobeStock_574000874_Preview_md91z2.jpg",
    description:
      "Recognition of Prior Learning (RPL) under the National Fisheries Development Board (NEFDB) certifies existing skills of fish farmers and fisheries workers, promoting sustainable practices and livelihood security.",
    projects: [
      "Skill Assessment",
      "Fish Farmer Certification",
      "Sustainable Fishing Practices",
      "Aquaculture Training",
    ],
    clients: [
      {
        name: "NEFDB",
        logo: "https://dummyimage.com/200x100/000/fff&text=NEFDB",
      },
    ],
    impacts: [
      { value: "1,100+", label: "Workers Certified", icon: Users },
      { value: "90%", label: "Skill Validation Rate", icon: Briefcase },
      { value: "18+", label: "Clusters Covered", icon: Home },
    ],
  },
];

/* --------------------------------
   COMPONENT
-------------------------------- */

const DetailsKalahandi = () => {
  const [accordion, setAccordion] = useState("projects");
  const [activeMobile, setActiveMobile] = useState(-1);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Heading text="OUR WORK" color="text-black" bgColor="bg-red-600" />

        {/* DESKTOP */}
        <div className="hidden md:block">
          <Tab.Group>
            <div className="mt-12 grid grid-cols-[1fr_auto_3fr] gap-10">

              {/* LEFT NAV */}
              <Tab.List className="space-y-3">
                {tabs.map((tab, index) => (
                  <Tab
                    key={index}
                    className={({ selected }) =>
                      `w-full text-left px-5 py-4 font-medium rounded-lg transition ${
                        selected
                          ? "bg-red-600 text-white shadow"
                          : "bg-white hover:bg-gray-100"
                      }`
                    }
                  >
                    {tab.tab_name}
                  </Tab>
                ))}
              </Tab.List>

              {/* DIVIDER */}
              <div className="flex justify-center">
                <div className="w-[2px] bg-red-600/80 rounded-full h-full" />
              </div>

              {/* RIGHT CONTENT */}
              <Tab.Panels>
                {tabs.map((tab, index) => (
                  <Tab.Panel key={index} className="space-y-10">

                    {/* HERO */}
                    <img
                      src={tab.heroImage}
                      alt={tab.tab_name}
                      className="w-full h-80 object-cover rounded-xl shadow"
                    />

                    {/* DESCRIPTION */}
                    <p className="text-lg text-gray-700 max-w-3xl">
                      {tab.description}
                    </p>

                    {/* PROJECTS / CLIENTS */}
                    <div className="bg-white border rounded-lg shadow">

                      {/* SWITCH */}
                      <div className="flex">
                        <button
                          onClick={() => setAccordion("projects")}
                          className={`flex-1 py-4 font-semibold ${
                            accordion === "projects"
                              ? "bg-red-600 text-white"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          Projects
                        </button>
                        <button
                          onClick={() => setAccordion("clients")}
                          className={`flex-1 py-4 font-semibold border-l ${
                            accordion === "clients"
                              ? "bg-red-600 text-white"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          Clients
                        </button>
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        {accordion === "projects" && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {tab.projects.map((project, i) => (
                              <div
                                key={i}
                                className="relative bg-white border rounded-lg p-6 shadow-sm hover:shadow-md transition"
                              >
                                <span className="absolute top-0 left-0 h-full w-1 bg-red-600 rounded-l-lg" />
                                <div className="w-10 h-10 bg-red-50 flex items-center justify-center rounded mb-4">
                                  <Briefcase className="w-5 h-5 text-red-600" />
                                </div>
                                <h4 className="font-semibold mb-2">
                                  {project}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  Structured training initiative designed to
                                  enhance employability and income security.
                                </p>
                                <div className="mt-4 text-sm text-red-600 font-medium">
                                  View details →
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {accordion === "clients" && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                            {tab.clients.map((client) => (
                              <div
                                key={client.name}
                                className="flex items-center justify-center bg-gray-50 border rounded-lg p-6 hover:shadow transition"
                              >
                                <img
                                  src={client.logo}
                                  alt={client.name}
                                  className="h-14 object-contain grayscale hover:grayscale-0 transition"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* IMPACT */}
                    <div>
                      <h3 className="text-2xl font-semibold mb-6">
                        Program Impact
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {tab.impacts.map((impact, i) => {
                          const Icon = impact.icon;
                          return (
                            <div
                              key={i}
                              className="bg-white border rounded-xl p-6 text-center shadow"
                            >
                              <Icon className="w-6 h-6 text-red-600 mx-auto mb-3" />
                              <div className="text-3xl font-bold">
                                {impact.value}
                              </div>
                              <div className="text-sm text-gray-600 mt-1">
                                {impact.label}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                  </Tab.Panel>
                ))}
              </Tab.Panels>

            </div>
          </Tab.Group>
        </div>

        {/* MOBILE */}
        <div className="md:hidden mt-10">
          {tabs.map((tab, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() =>
                  setActiveMobile(activeMobile === index ? -1 : index)
                }
                className="w-full flex justify-between items-center py-4 font-medium"
              >
                {tab.tab_name}
                <ChevronDown
                  className={`transition-transform ${
                    activeMobile === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {activeMobile === index && (
                <div className="space-y-6 pb-6">
                  <img
                    src={tab.heroImage}
                    alt={tab.tab_name}
                    className="rounded-xl shadow"
                  />
                  <p className="text-gray-700">{tab.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DetailsKalahandi;