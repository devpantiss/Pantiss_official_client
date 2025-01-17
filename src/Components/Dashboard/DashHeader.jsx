import React, { useState } from "react";

const DashHeader = () => {
  const [activeTab, setActiveTab] = useState("results");

  const tabs = [
    { id: "results", label: "Results" },
    { id: "partnerships", label: "Partnerships" },
    { id: "keyStories", label: "Key result stories" },
    { id: "genebanks", label: "Genebanks" },
    { id: "glossary", label: "Glossary and Results Framework" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="bg-red-600 p-4">
      {/* Tabs Section */}
      <div className="flex justify-between items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2  font-semibold ${
              activeTab === tab.id
                ? "bg-white text-red-600 rounded-md shadow-md"
                : "bg-transparent text-white hover:bg-red-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filters Section */}
      <div className="bg-white p-6 mt-4 rounded-md shadow-md">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All years</option>
              <option>2023</option>
              <option>2024</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Geographic location
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Partner name
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Partner type
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              CGIAR Center
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
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
            <label className="block text-sm font-medium text-gray-700">
              Initiatives, Platforms, and SDGs
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender equality tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Climate change tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nutrition tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Environment/Biodiversity tag
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm">
              <option>All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
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
