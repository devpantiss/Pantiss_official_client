import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const DashHeader = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: "results", label: "Results", path: "/dashboard/results" },
    {
      id: "partnerships",
      label: "Partnerships",
      path: "/dashboard/partnerships",
    },
    {
      id: "keyStories",
      label: "Key result stories",
      path: "/dashboard/key-result-stories",
    },
    // { id: "genebanks", label: "Genebanks", path: "/dashboard/genebanks" },
    // {
    //   id: "glossary",
    //   label: "Glossary and Results Framework",
    //   path: "/dashboard/frameworks",
    // },
  ];

  // Update active tab based on the current location
  useEffect(() => {
    const activeTab = tabs.find((tab) => tab.path === location.pathname);
    setActiveTab(activeTab?.id || "");
  }, [location.pathname]);

  const handleTabClick = (id, path) => {
    setActiveTab(id); // Set active tab manually when clicked
    navigate(path); // Navigate to the tab's path
  };

  const getHeaderContent = () => {
    switch (activeTab) {
      case "results":
        return "Results Dashboard";
      case "partnerships":
        return "Partnerships";
      case "keyStories":
        return "Key Result Stories";
    //   case "genebanks":
    //     return "Genebanks";
    //   case "glossary":
    //     return "Glossary and Results Framework";
      default:
        return "Results Dashboard";
    }
  };

  return (
    <div className="bg-black border-b-2 border-red-600 p-4">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="mb-4 w-[200px]">
          <img src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727680521/pantiss_logo_kuiof0.png" alt="Logo" />
        </div>
        <div className="py-6 px-0 lg:px-4">
          <h1 className="text-3xl text-white">{getHeaderContent()}</h1>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap border-t-2 border-red-600 pt-6 gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, tab.path)}
            className={`px-4 py-2 font-semibold ${
              activeTab === tab.id
                ? "bg-white text-red-600 rounded-md shadow-md"
                : "bg-gray-100 text-black hover:bg-gray-200 rounded-md"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters Section */}
      <div className="bg-black text-white p-6 mt-4 rounded-md shadow-md">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <label className="block text-sm font-medium text-white">Year</label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All years</option>
              <option>2023</option>
              <option>2024</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Geographic location
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Partner name
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Partner type
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              CGIAR Center
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Impact Area
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
        </div>

        {/* Additional Filters Row */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium text-white">
              Initiatives, Platforms, and SDGs
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Gender equality tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Climate change tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Nutrition tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Environment/Biodiversity tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">
              Poverty reduction tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
        </div>

        {/* Clear Filters Button */}
        <div className="mt-4 text-right">
          <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
