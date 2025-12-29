import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Users, Briefcase, Home } from "lucide-react";
import { ChevronDown } from "lucide-react";
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
      "Industrial Electrician – Hirma",
      "Dumper Operator – Malda",
      "Excavator Operator – Malda",
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
      "Community Skill Development",
      "Traditional Livelihood Support",
      "Education & Awareness Programs",
      "Women Self-Help Group Strengthening",
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
                        {/* PROJECT CARDS */}
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
                                  A structured initiative designed for sustainable
                                  skill development and community upliftment.
                                </p>
                                <div className="mt-4 text-sm text-red-600 font-medium">
                                  View details →
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* CLIENT LOGOS */}
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
