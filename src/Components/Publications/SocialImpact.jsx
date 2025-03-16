// SocialImpact.js
import React from "react";
import Heading from "../Common/Heading";

const reports = [
  {
    title: "Annual Report 2023",
    description:
      "A comprehensive overview of our achievements, initiatives, and impact throughout the year. This report highlights our key milestones, community outreach programs, sustainability efforts, and partnerships that have driven positive change across various sectors.",
    date: "December 15, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5udWFsJTIwcmVwb3J0fGVufDB8MHwwfHx8MA%3D%3D",
    downloadUrl: "#", // Replace with actual download link
  },
  {
    title: "Financial Report Q4 2023",
    description:
      "Detailed financial performance and allocation of resources for the last quarter. This document provides an in-depth analysis of revenue streams, expenditure breakdowns, investment strategies, and projections for the upcoming fiscal year, ensuring transparency for all stakeholders.",
    date: "January 20, 2024",
    imageUrl:
      "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2lhbCUyMHJlcG9ydHxlbnwwfDB8MHx8fDA%3D",
    downloadUrl: "#", // Replace with actual download link
  },
  {
    title: "Portfolio Report 2023",
    description:
      "Insights into our project portfolio, outcomes, and future directions. This report dives into the specifics of each project, including timelines, resource utilization, measurable impacts, and strategic goals that will shape our initiatives moving forward into the next year.",
    date: "November 30, 2023",
    imageUrl:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydGZvbGlvJTIwcmVwb3J0fGVufDB8MHwwfHx8MA%3D%3D",
    downloadUrl: "#", // Replace with actual download link
  },
];

const SocialImpact = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <Heading text="RESEARCH & REPORTS" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:ring-2 ring-red-600 hover:shadow-2xl hover:-translate-y-2 h-[650px] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={report.imageUrl}
                  alt={report.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                  {report.title}
                </h3>
                <p className="text-gray-700 text-base line-clamp-5 mt-2">
                  {report.description}
                </p>
                {/* Spacer to push the footer to the bottom */}
                <div className="flex-grow" />
                {/* Footer with Date and Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-500 text-sm font-medium">
                    {report.date}
                  </span>
                  <a
                    href={report.downloadUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300"
                    aria-label={`Download ${report.title}`}
                  >
                    Download
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;