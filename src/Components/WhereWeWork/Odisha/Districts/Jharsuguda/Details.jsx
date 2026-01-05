import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Users, Briefcase, Home, ChevronDown } from "lucide-react";
import Heading from "../../../../Common/Heading";

/* --------------------------------
   DATA
-------------------------------- */

const tabs = [
  {
    tab_name: "Skilling",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819867/WhatsApp_Image_2025-10-30_at_3.30.36_PM_viv2to.jpg",
    description:
      "Under the District Mineral Foundation (DMF) and Skill Council for Mining Sector (SCMS), skilling initiatives in Jharsuguda focus on building a technically competent workforce through job-oriented, industry-aligned training programs.",
    projects: [
      { title: "Industrial Electrician – Hirma" },
      { title: "Dumper Operator – Malda" },
      { title: "Excavator Operator – Malda" },
    ],
    clients: [
      {
        name: "DMF Jharsuguda",
        logo: "https://dummyimage.com/200x100/000/fff&text=DMF+Jharsuguda",
      },
      {
        name: "SCMS",
        logo: "https://dummyimage.com/200x100/000/fff&text=SCMS",
      },
    ],
    impacts: [
      { value: "900+", label: "Youth Trained", icon: Users },
      { value: "70%", label: "Placement Rate", icon: Briefcase },
      { value: "3", label: "Trades Implemented", icon: Home },
    ],
  },

  {
    tab_name: "Indigenous Community",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761840260/odisha-2368219_1280_hspude.jpg",
    description:
      "Jharsuguda-based initiatives focus on empowering indigenous communities through livelihood enhancement, cultural preservation, and inclusive development while respecting traditional knowledge systems.",
    projects: [
      { title: "Community Skill Development" },
      { title: "Traditional Livelihood Support" },
      { title: "Education & Awareness Programs" },
      { title: "Women Self-Help Group Strengthening" },
    ],
    clients: [
      {
        name: "District Administration, Jharsuguda",
        logo: "https://dummyimage.com/200x100/000/fff&text=District+Admin",
      },
    ],
    impacts: [
      { value: "3,500+", label: "Community Members Impacted", icon: Users },
      { value: "40+", label: "Villages Covered", icon: Home },
      { value: "120+", label: "SHGs Strengthened", icon: Briefcase },
    ],
  },
];

/* --------------------------------
   COMPONENT
-------------------------------- */

const DetailsJharsuguda = () => {
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

export default DetailsJharsuguda;
