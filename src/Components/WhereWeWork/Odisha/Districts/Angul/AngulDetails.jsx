import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import { Users, Briefcase, Home, HeartPulse } from "lucide-react";
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
      {
        title: "Nua Odisha Skill Development Program",
        logo: "https://digitall.skillodisha.gov.in/Application/uploadDocuments/Logo/LogoH20181206_110122.png",
      },
      {
        title: "Skill On Wheels",
        logo: "https://www.tpcentralodisha.com/images/group_company_logo1.jpg",
      },
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
      {
        title: "Village Rehabilitation Program",
        logo: "https://upload.wikimedia.org/wikipedia/en/3/3e/Mahanadi_Coalfields_Limited_logo.png",
      },
      {
        title: "Afforestation & Ecological Restoration",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/63/Tree_icon.png",
      },
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
      {
        title: "Maternal Health & Nutrition Program",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0b/UNICEF_Logo.png",
      },
      {
        title: "Safe Drinking Water Initiative",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Water_drop_icon.svg",
      },
    ],
    clients: [
      {
        name: "District Health Department",
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
  const [activeView, setActiveView] = useState("projects");

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
                <Tab.Panel key={tab.name} className="space-y-12">

                  {/* HERO */}
                  <img
                    src={tab.heroImage}
                    alt={tab.name}
                    className="w-full h-80 object-cover shadow"
                  />

                  {/* SUMMARY */}
                  <p className="text-gray-700 max-w-3xl text-lg">
                    {tab.shortDescription}
                  </p>

                  {/* PROJECT / CLIENT TOGGLE */}
                  <div className="flex gap-4">
                    <button
                      onClick={() => setActiveView("projects")}
                      className={`px-6 py-3 font-medium transition ${
                        activeView === "projects"
                          ? "bg-red-600 text-white shadow"
                          : "bg-white border hover:bg-gray-100"
                      }`}
                    >
                      Projects
                    </button>

                    {/* <button
                      onClick={() => setActiveView("clients")}
                      className={`px-6 py-3 font-medium transition ${
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
                      tab.projects.map((project, index) => (
                        <div
                          key={index}
                          className="bg-white p-8 border shadow-sm hover:shadow-xl
                                     hover:-translate-y-1 transition-all duration-300
                                     flex flex-col items-center text-center rounded-xl"
                        >
                          {project.logo && (
                            <img
                              src={project.logo}
                              alt={project.title}
                              className="h-14 mb-6 object-contain"
                            />
                          )}

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
                          className="bg-white p-8 border shadow-sm hover:shadow-xl
                                     hover:-translate-y-1 transition-all duration-300
                                     flex items-center justify-center rounded-xl"
                        >
                          <img
                            src={client.logo}
                            alt={client.name}
                            className="h-16 object-contain grayscale hover:grayscale-0 transition"
                          />
                        </div>
                      ))}
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
                            className="bg-white p-6 shadow border text-center rounded-xl"
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
