import React, { useState } from "react";

const Row1 = () => {
  const [activeTab, setActiveTab] = useState("summary");

  const tabs = [
    { id: "summary", label: "Summary" },
    { id: "outputs", label: "Outputs" },
    { id: "capacity", label: "Capacity sharing for development" },
    { id: "innovationDev", label: "Innovation development" },
    { id: "knowledge", label: "Knowledge products" },
    { id: "outcomes", label: "Outcomes" },
    { id: "policyChange", label: "Policy change" },
    { id: "capacityChange", label: "Capacity change" },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const statistics = [
    { label: "Results", value: "10,820", icon: "📊" },
    { label: "SDGs", value: "17", icon: "🌍" },
    { label: "Knowledge products", value: "5,910", icon: "📚" },
    { label: "Capacity sharing for development", value: "2,012", icon: "🤝" },
    { label: "Innovation development", value: "1,005", icon: "💡" },
    { label: "Other outputs", value: "1,375", icon: "🛠️" },
    { label: "Innovation use", value: "235", icon: "🚀" },
    { label: "Policy change", value: "140", icon: "📜" },
    { label: "Other outcomes", value: "117", icon: "🔄" },
  ];

  return (
    <div className="bg-white p-6">
      {/* Tabs Section */}
      <div className="flex flex-wrap gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-4 py-2 text-black font-semibold ${
              activeTab === tab.id
                ? "bg-red-600 text-white rounded-md shadow-md"
                : "bg-gray-100 hover:bg-gray-200 rounded-md"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Filter Section */}
      <div className="flex flex-wrap gap-4 items-center mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Result level
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm">
            <option>All</option>
            <option>Level 1</option>
            <option>Level 2</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Indicator category
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-600 focus:ring-red-600 sm:text-sm">
            <option>All</option>
            <option>Category 1</option>
            <option>Category 2</option>
          </select>
        </div>
        <button className="ml-auto px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-600">
          Feedback form
        </button>
      </div>

      {/* Summary Heading */}
      <h2 className="text-lg font-bold mb-4">Summary</h2>
      <p className="text-gray-600 mb-6">
        This overview encompasses both the results reported by the initiative
        itself and its contributions to other results reported by different
        initiatives.
      </p>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statistics.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-md shadow-md"
          >
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row1;
