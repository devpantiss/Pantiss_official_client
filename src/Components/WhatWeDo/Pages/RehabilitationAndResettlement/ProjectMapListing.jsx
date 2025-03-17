import React from "react";
import Heading from "../../../Common/Heading";

const ProjectMapListingRehab = () => {
  const projects = [
    {
      number: "38272-045",
      name: "Uttarakhand Integrated and Resilient Urban Development Project—Additional Financing",
      client: "Government of Uttarakhand",
      totalImpact: "150,000",
    },
    {
      number: "40540-016",
      name: "Dhaka-Northwest Corridor Road Project, Phase 2",
      client: "Roads and Highways Department, Bangladesh",
      totalImpact: "200,000",
    },
    {
      number: "40540-019",
      name: "South Asia Subregional Economic Cooperation Dhaka-Northwest Corridor Road Project, Phase 2 (Tranche 3)",
      client: "Roads and Highways Department, Bangladesh",
      totalImpact: "180,000",
    },
    {
      number: "42007-021",
      name: "Small and Medium-Sized Enterprises Development Program (Subprogram 2)",
      client: "Ministry of Finance",
      totalImpact: "50,000",
    },
    {
      number: "42687-032",
      name: "Promoting Smart and Integrated Urban Planning for Livability and Cultural Economy in Rajasthan",
      client: "Government of Rajasthan",
      totalImpact: "75,000",
    },
    {
      number: "42527-034",
      name: "Rajasthan Secondary Towns Development Sector Project Additional Financing",
      client: "Government of Rajasthan",
      totalImpact: "120,000",
    },
  ];

  return (
    <section className="bg-red-600 py-4 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title and Description */}
        <div className="mb-8">
          <Heading text="PROJECTS" color="text-white" bgColor="bg-white" />

          <p className="text-white text-sm leading-relaxed">
            In 2023, ADB committed $10,746.56 million in climate finance. Of
            this total, $6,168.50 million is expected to contribute to climate
            change mitigation and $4,578.06 million to climate change
            adaptation.
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
            Source: Asian Development Bank estimates (March 2024)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectMapListingRehab;