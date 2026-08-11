import { useState } from "react";
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
      "/assets/where/district-work/technical-skills-training.jpg",
    description:
      "In collaboration with the Skill Council for Mining Sector (SCMS) and District Mineral Foundation Trust (DMFT), structured skilling programs are conducted to develop industry-ready manpower for mining and allied sectors in Keonjhar.",
    projects: [
      { title: "Dumper Operator" },
      { title: "Excavator Operator" },
      { title: "HEMM Mechanic" },
      { title: "Industrial Welder" },
      { title: "Industrial Electrician" },
    ],
    clients: [
      {
        name: "DMFT Keonjhar",
        logo: "/assets/where/client-logos/dmf-odisha.png",
      },
      {
        name: "SCMS",
        logo: "/assets/where/client-logos/scms.png",
      },
    ],
    impacts: [
      { value: "2,100+", label: "Youth Trained", icon: Users },
      { value: "74%", label: "Placement Rate", icon: Briefcase },
      { value: "5", label: "Trades Offered", icon: Home },
    ],
  },

  {
    tab_name: "RPL",
    heroImage:
      "/assets/where/district-work/fisheries-rpl.jpg",
    description:
      "The Recognition of Prior Learning (RPL) program with the National Fisheries Development Board (NFDB) certifies existing skills of fish farmers and fisheries workers, promoting sustainable aquaculture and livelihood security.",
    projects: [
      { title: "Skill Assessment" },
      { title: "Fish Farmer Certification" },
      { title: "Aquaculture Best Practices" },
      { title: "Sustainable Fisheries Training" },
    ],
    clients: [
      {
        name: "NFDB",
        logo: "/assets/where/client-logos/nfdb.svg",
      },
    ],
    impacts: [
      { value: "950+", label: "Workers Certified", icon: Users },
      { value: "90%", label: "Skill Validation Rate", icon: Briefcase },
      { value: "15+", label: "Fishing Clusters Covered", icon: Home },
    ],
  },

  {
    tab_name: "Livelihood",
    heroImage:
      "/assets/where/district-work/agriculture-livelihood.jpg",
    description:
      "The DMF & ASCI livelihood programs aim to strengthen rural economies by promoting sustainable agriculture, aquaculture, and agri-enterprises through skill training and entrepreneurship development.",
    projects: [
      { title: "Fresh Water Fish Farming" },
      { title: "Organic Grower" },
      { title: "Custom Hiring Services" },
    ],
    clients: [
      {
        name: "DMF Keonjhar",
        logo: "/assets/where/client-logos/dmf-odisha.png",
      },
      {
        name: "ASCI",
        logo: "/assets/where/client-logos/asci.png",
      },
    ],
    impacts: [
      { value: "1,600+", label: "Livelihood Beneficiaries", icon: Users },
      { value: "85+", label: "Villages Covered", icon: Home },
      { value: "62%", label: "Income Enhancement", icon: Briefcase },
    ],
  },
];

/* --------------------------------
   COMPONENT
-------------------------------- */

const DetailsKeonjhar = () => {
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

                      <button
                        onClick={() => setActiveView("clients")}
                        className={`px-6 py-3 font-semibold transition ${
                          activeView === "clients"
                            ? "bg-red-600 text-white shadow"
                            : "bg-white border hover:bg-gray-100"
                        }`}
                      >
                        Clients
                      </button>
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
                            className="group min-h-32 bg-white p-8 border rounded-xl shadow-sm
                                       hover:shadow-xl hover:-translate-y-1
                                       transition-all duration-300
                                       flex flex-col gap-4 items-center justify-center"
                          >
                            <img
                              src={client.logo}
                              alt={client.name}
                              loading="lazy"
                              decoding="async"
                              className="h-16 w-full max-w-[220px] object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                            <span className="text-sm font-medium text-gray-700">
                              {client.name}
                            </span>
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
                  <div>
                    <p className="mb-3 text-sm font-semibold text-gray-900">
                      Clients
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {tab.clients.map((client) => (
                        <div
                          key={client.name}
                          className="flex min-h-28 flex-col items-center justify-center gap-3 rounded-xl border bg-white p-4 text-center"
                        >
                          <img
                            src={client.logo}
                            alt={client.name}
                            loading="lazy"
                            decoding="async"
                            className="h-12 w-full object-contain"
                          />
                          <span className="text-xs font-medium text-gray-700">
                            {client.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DetailsKeonjhar;
