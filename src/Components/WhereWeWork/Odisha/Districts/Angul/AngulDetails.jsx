import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import {
  Users,
  Briefcase,
  Home,
  HeartPulse,
} from "lucide-react";
import Heading from "../../../../Common/Heading";

/* --------------------------------
   DATA
-------------------------------- */

const tabs = [
  {
    name: "TVET",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819875/WhatsApp_Image_2025-10-30_at_3.34.59_PM_tiduhn.jpg",
    shortDescription:
      "Industry-aligned technical and vocational education programs designed to improve employability and income stability among youth.",
    projects: [
      "Nua Odisha Skill Development Program",
      "Skill On Wheels",
    ],
    clients: [
      {
        name: "OSDA",
        logo: "https://digitall.skillodisha.gov.in/Application/uploadDocuments/Logo/LogoH20181206_110122.png",
      },
      {
        name: "TPCODL",
        logo: "https://www.tpcentralodisha.com/images/group_company_logo1.jpg",
      },
    ],
    impacts: [
      { value: "1,200+", label: "Youth Trained", icon: Users },
      { value: "78%", label: "Placement Rate", icon: Briefcase },
      { value: "₹3.2 LPA", label: "Average Package", icon: Briefcase },
      { value: "60%", label: "Local Employment", icon: Home },
    ],
  },
  {
    name: "Environment & Ecology",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813824/aditya-shrivastava-yYPcqVU6IEI-unsplash_rja5sb.jpg",
    shortDescription:
      "Rehabilitation, resettlement, and ecological restoration programs for mining-affected communities.",
    projects: [
      "Village Rehabilitation",
      "Resettlement Colonies",
      "Afforestation Drives",
      "Water Resource Management",
    ],
    clients: [
      {
        name: "MCL",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Mahanadi_Coalfields_Limited_logo.png",
      },
    ],
    impacts: [
      { value: "18+", label: "Villages Rehabilitated", icon: Home },
      { value: "2,500+", label: "Families Resettled", icon: Users },
      { value: "120+ Ha", label: "Green Cover Created", icon: Home },
    ],
  },
  {
    name: "Health & Nutrition",
    heroImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761813698/PIC-13_fdngmf.jpg",
    shortDescription:
      "Community health, nutrition, and well-being initiatives for women, children, and vulnerable populations.",
    projects: [
      "Maternal Health Program",
      "School Nutrition Support",
      "Health Camps",
      "Safe Drinking Water",
    ],
    clients: [
      {
        name: "District Health Dept",
        logo: "https://dummyimage.com/200x100/000/fff&text=Health+Dept",
      },
    ],
    impacts: [
      { value: "9,000+", label: "Beneficiaries Reached", icon: Users },
      { value: "3,200+", label: "Women & Children Supported", icon: HeartPulse },
      { value: "150+", label: "Health Camps Conducted", icon: HeartPulse },
    ],
  },
];

/* --------------------------------
   COMPONENT
-------------------------------- */

const AngulDetails = () => {
  const [accordion, setAccordion] = useState("projects");

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <Heading text="OUR WORK" color="text-black" bgColor="bg-red-600" />

        <Tab.Group>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_3fr] gap-10">

            {/* LEFT NAV */}
            <Tab.List className="space-y-3">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    `w-full text-left px-5 py-4 font-medium transition ${
                      selected
                        ? "bg-red-600 text-white shadow"
                        : "bg-white hover:bg-gray-100"
                    }`
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>

            {/* DIVIDER */}
            <div className="hidden lg:flex justify-center">
              <div className="w-[2px] bg-red-600/80 rounded-full h-full" />
            </div>

            {/* RIGHT CONTENT */}
            <Tab.Panels>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-10">

                  {/* Hero */}
                  <img
                    src={tab.heroImage}
                    alt={tab.name}
                    className="w-full h-80 object-cover shadow"
                  />

                  {/* Summary */}
                  <p className="text-gray-700 max-w-3xl text-lg">
                    {tab.shortDescription}
                  </p>

                  {/* Accordion */}
                  <div className="bg-white shadow border">
                    <div className="flex border-b">
                      <button
                        onClick={() => setAccordion("projects")}
                        className={`flex-1 py-4 font-medium ${
                          accordion === "projects"
                            ? "bg-red-600 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        Projects
                      </button>
                      <button
                        onClick={() => setAccordion("clients")}
                        className={`flex-1 py-4 font-medium ${
                          accordion === "clients"
                            ? "bg-red-600 text-white"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        Clients
                      </button>
                    </div>

                    <div className="p-6">
                      {/* PROJECTS */}
                      {accordion === "projects" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {tab.projects.map((project, index) => (
                            <div
                              key={index}
                              className="group relative bg-gradient-to-br from-white to-gray-50
                                         border p-6 shadow-sm hover:shadow-lg
                                         transition-all duration-300"
                            >
                              <span className="absolute top-0 left-0 h-full w-1 bg-red-600 opacity-0 group-hover:opacity-100 transition" />

                              <div className="w-12 h-12 flex items-center justify-center bg-red-50 mb-4">
                                <Briefcase className="w-6 h-6 text-red-600" />
                              </div>

                              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                {project}
                              </h4>

                              <p className="text-sm text-gray-600 leading-relaxed">
                                A focused initiative delivering measurable outcomes
                                through structured execution and community participation.
                              </p>

                              <div className="mt-4 text-sm font-medium text-red-600 opacity-0 group-hover:opacity-100 transition">
                                View details →
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* CLIENTS */}
                      {accordion === "clients" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                          {tab.clients.map((client) => (
                            <div
                              key={client.name}
                              className="flex items-center justify-center bg-gray-50 p-4 border hover:shadow transition"
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                      {tab.impacts.map((impact, i) => {
                        const Icon = impact.icon;
                        return (
                          <div
                            key={i}
                            className="bg-white p-6 shadow border text-center"
                          >
                            <Icon className="w-6 h-6 text-red-600 mx-auto mb-3" />
                            <div className="text-3xl font-bold text-gray-900">
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
    </section>
  );
};

export default AngulDetails;
