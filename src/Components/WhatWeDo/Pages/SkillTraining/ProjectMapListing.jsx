import React from "react";
import Heading from "../../../Common/Heading";

const ProjectMapListingSkills = () => {
  const projects = [
    {
      number: "SKL-001-2024",
      name: "Skilling in Bokaro Steel Plant",
      client: "Steel Authority of India Limited (SAIL)",
      totalImpact: "1,000",
    },
    {
      number: "DMFT-KJR-002-2025",
      name: "DMFT Keonjhar Skilling Initiative",
      client: "District Mineral Foundation Trust, Keonjhar",
      totalImpact: "2,500",
    },
    {
      number: "NLCIL-003-2025",
      name: "NLCIL Mining Skills Development Program",
      client: "NLC India Limited",
      totalImpact: "2,500",
    },
    {
      number: "DAKSH-004-2024",
      name: "Daksh Phase 2: Vocational Training for Youth",
      client: "Government of India (MSDE)",
      totalImpact: "3,000",
    },
    {
      number: "DMFT-KLD-005-2024",
      name: "DMFT Kalahandi Skill Development Project",
      client: "District Mineral Foundation Trust, Kalahandi",
      totalImpact: "300",
    },
    {
      number: "NUA-ANG-006-2025",
      name: "Nua Odisha Anugul Skilling Project",
      client: "Government of Odisha",
      totalImpact: "1,200",
    },
  ];

  return (
    <section className="bg-red-600 py-4 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title and Description */}
        <div className="mb-8">
          <Heading text="PROJECTS" color="text-white" bgColor="bg-white" />

          <p className="text-white text-sm leading-relaxed">
            In 2024, various skilling initiatives in India’s mining and industrial sectors aimed to empower communities with sustainable livelihoods. These programs collectively target thousands of beneficiaries, enhancing skills and employability.
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
              </select>
              <select
                className="border border-gray-500 w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Filter by Sector"
              >
                <option>All</option>
              </select>
            </div>
          </div>
        </div>

        {/* Source */}
        <div className="mt-6">
          <p className="text-white text-xs">
            Source: Estimates based on skilling initiatives data (March 2025)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectMapListingSkills;