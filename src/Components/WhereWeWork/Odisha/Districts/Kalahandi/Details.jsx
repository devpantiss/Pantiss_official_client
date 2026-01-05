import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Users, Briefcase, Home, HeartPulse, ChevronDown } from "lucide-react";
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
      { title: "HEMM Mechanic" },
      { title: "Industrial Welder" },
      { title: "Dumper Operator" },
      { title: "Excavator Operator" },
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
      { title: "Goat / Sheep Farmer" },
      { title: "Small Poultry Farmer" },
      { title: "Fresh Water Aquaculture" },
      { title: "Dairy Farming" },
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
      { title: "AWH Capacity Building" },
      { title: "ECCE Training" },
      { title: "Daycare Management" },
      { title: "Nutrition Awareness Programs" },
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
      { title: "Skill Assessment" },
      { title: "Fish Farmer Certification" },
      { title: "Sustainable Fishing Practices" },
      { title: "Aquaculture Training" },
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
  const [activeView, setActiveView] = useState("projects");
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
                  <Tab.Panel key={index} className="space-y-12">

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

                    {/* PROJECT / CLIENT SWITCH */}
                    <div className="flex gap-4">
                      <button
                        onClick={() => setActiveView("projects")}
                        className={`px-6 py-3 font-semibold transition ${
                          activeView === "projects"
                            ? "bg-red-600 text-white shadow"
                            : "bg-white border hover:bg-gray-100"
                        }`}
                      >
                        Projects
                      </button>

                      {/* <button
                        onClick={() => setActiveView("clients")}
                        className={`px-6 py-3 font-semibold transition ${
                          activeView === "clients"
                            ? "bg-red-600 text-white shadow"
                            : "bg-white border hover:bg-gray-100"
                        }`}
                      >
                        Clients
                      </button> */}
                    </div>

                    {/* CARD GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                      {/* PROJECT CARDS */}
                      {activeView === "projects" &&
                        tab.projects.map((project, i) => (
                          <div
                            key={i}
                            className="bg-white p-8 border rounded-xl shadow-sm
                                       hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-300
                                       flex flex-col items-center text-center"
                          >
                            <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded mb-5">
                              <Briefcase className="w-6 h-6 text-red-600" />
                            </div>

                            <h4 className="text-lg font-semibold text-gray-900 leading-snug">
                              {project.title}
                            </h4>
                          </div>
                        ))}

                      {/* CLIENT CARDS */}
                      {activeView === "clients" &&
                        tab.clients.map((client) => (
                          <div
                            key={client.name}
                            className="bg-white p-8 border rounded-xl shadow-sm
                                       hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-300
                                       flex items-center justify-center"
                          >
                            <img
                              src={client.logo}
                              alt={client.name}
                              className="h-16 object-contain grayscale hover:grayscale-0 transition"
                            />
                          </div>
                        ))}
                    </div>

                    {/* PROGRAM IMPACT */}
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