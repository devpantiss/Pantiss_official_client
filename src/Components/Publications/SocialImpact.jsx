// SocialImpact.js
import React from "react";
import Heading from "../Common/Heading";

const reports = [
  {
    title: "Annual Report 2023",
    description: "A comprehensive overview of our achievements, initiatives, and impact throughout the year.",
    date: "December 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5udWFsJTIwcmVwb3J0fGVufDB8MHwwfHx8MA%3D%3D",
    downloadUrl: "#", // Replace with actual download link
  },
  {
    title: "Financial Report Q4 2023",
    description: "Detailed financial performance and allocation of resources for the last quarter.",
    date: "January 20, 2024",
    imageUrl: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2lhbCUyMHJlcG9ydHxlbnwwfDB8MHx8fDA%3D",
    downloadUrl: "#", // Replace with actual download link
  },
  {
    title: "Portfolio Report 2023",
    description: "Insights into our project portfolio, outcomes, and future directions.",
    date: "November 30, 2023",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydGZvbGlvJTIwcmVwb3J0fGVufDB8MHwwfHx8MA%3D%3D",
    downloadUrl: "#", // Replace with actual download link
  },
];

const SocialImpact = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8">
          <Heading text="RESEARCH & REPORTS" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={report.imageUrl}
                  alt={report.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {report.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {report.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{report.date}</span>
                  <a
                    href={report.downloadUrl}
                    className="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label={`Download ${report.title}`}
                  >
                    Download
                    <svg
                      className="ml-2 w-4 h-4"
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