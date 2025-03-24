import React from "react";
import Heading from "../../../Common/Heading";

const ProjectMapListingReclamation = () => {
  const projects = [
    {
      number: "ODI-001-24",
      name: "Pondy Fish: Sustainable Fisheries Development in Coastal Odisha",
      client: "Odisha Fisheries Department",
      totalImpact: "3,000",
    },
    {
      number: "ODI-002-24",
      name: "Tassar Fashion: Empowering Textile Communities in Koraput",
      client: "Odisha Handloom and Textiles Department",
      totalImpact: "1,000",
    },
    {
      number: "ODI-003-24",
      name: "Tribey Coffee: Agribusiness Expansion in Koraput Hills",
      client: "Odisha Agricultural Marketing Board",
      totalImpact: "1200",
    },
    {
      number: "ODI-004-24",
      name: "Digit Farm Bench Marking: Smart Farming Initiative in Western Odisha",
      client: "Odisha Department of Agriculture",
      totalImpact: "1,900",
    },
    {
      number: "ODI-005-24",
      name: "Farm Business School: Agricultural Entrepreneurship in Rural Odisha",
      client: "Odisha Skill Development Authority",
      totalImpact: "900",
    },
    {
      number: "ODI-006-24",
      name: "Harvest To Market: Linking Farmers to Markets in Eastern Odisha",
      client: "Odisha Rural Development Department",
      totalImpact: "1,500",
    },
  ];

  return (
    <section className="bg-red-600 py-4 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title and Description */}
        <div className="mb-8">
          <Heading text="PROJECTS" color="text-white" bgColor="bg-white" />

          <p className="text-white text-sm leading-relaxed">
            In 2024, Pantiss committed $5,230.75 million to sustainable
            agriculture and rural development in Odisha. Of this total,
            $3,150.20 million is expected to enhance farmer livelihoods and
            $2,080.55 million to improve market access and sustainability.
          </p>
        </div>

        {/* Navigation and Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Navigation Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="px-4 py-2 bg-red-600 ring-2 ring-white rounded-md text-white hover:underline text-sm font-medium"
            >
              Projects Map
            </a>
            <a
              href="#"
              className="px-4 py-2 bg-red-600 ring-2 ring-white rounded-md text-white hover:underline text-sm font-medium"
            >
              Projects List
            </a>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-x-8 lg:flex-row">
          {/* Table */}
          <div className="overflow-x-auto w-full lg:w-2/3">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-600">
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white uppercase">
                    Project Number
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white uppercase">
                    Project Name
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white uppercase">
                    Client
                  </th>
                  <th className="border-b border-gray-300 px-4 py-3 text-left text-sm font-semibold text-white uppercase">
                    Total Impact (Beneficiaries in Numbers)
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
                  >
                    <td className="border-b border-gray-300 px-4 py-3 text-sm text-black">
                      {project.number}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-3 text-sm text-black">
                      {project.name}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-3 text-sm text-black">
                      {project.client}
                    </td>
                    <td className="border-b border-gray-300 px-4 py-3 text-sm text-black">
                      {project.totalImpact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Search and Filters */}
          <div className="flex lg:w-1/3 mb-4 flex-col w-full md:w-auto">
            <input
              type="text"
              placeholder="Search by Keyword or Project Number"
              className="border border-gray-500 rounded-md mb-4 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              aria-label="Search by Keyword or Project Number"
            />
            <div className="flex flex-col gap-y-4">
              <select
                className="border border-gray-500 w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by Member Country"
              >
                <option>All</option>
                <option>Odisha</option>
              </select>
              <select
                className="border border-gray-500 w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by Sector"
              >
                <option>All</option>
                <option>Sustainable Agriculture</option>
                <option>Fisheries</option>
                <option>Textiles</option>
                <option>Agribusiness</option>
              </select>
            </div>
          </div>
        </div>

        {/* Source */}
        <div className="mt-6">
          <p className="text-white text-xs">
            Source: Pantiss Odisha Project Estimates (March 2025)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectMapListingReclamation;