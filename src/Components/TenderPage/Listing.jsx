import React, { useState } from "react";

const TendersListing = () => {
  const tenders = [
    {
      id: 1,
      title: "Construction of Plastic Waste Recycling Unit",
      location: "Koderma, Jharkhand",
      startDate: "23rd December 2024",
      deadline: "31st December 2024",
      link: "https://drive.google.com/file/d/1kDnAKkV-q2fIO3d-QmSxKPEd6Nr4QYnO/view?usp=sharing",
      isClosed: true,
    },
    {
      id: 2,
      title: "Social Media & Digital Marketing",
      location: "Bhubaneswar, Odisha",
      startDate: "17th February 2025",
      deadline: "21st February 2025",
      link: "https://drive.google.com/file/d/1U2HOPDyqTk3IA01QjUByTpuCii17MN5P/view?usp=sharing",
      isClosed: false,
    },
  ];

  return (
    <div className="bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white ring-1 ring-red-600 shadow-lg flex flex-col md:flex-row justify-between items-center rounded-lg p-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Tender List</h1>
          <p className="text-gray-600 mt-2">Explore the latest tenders available for bidding.</p>
        </div>

        {/* Search and Filter */}
        <div className="flex w-full md:w-auto mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search tenders..."
            className="flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-red-200"
          />
          <button className="px-6 py-3 bg-red-500 text-white rounded-r-lg shadow hover:bg-red-600">Search</button>
        </div>
      </div>

      {/* Tender List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenders.map((tender) => (
          <div key={tender.id} className="bg-white ring-1 ring-red-600 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{tender.title}</h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Start Date:</strong> {tender.startDate}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Deadline:</strong> {tender.deadline}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Location:</strong> <span className="font-semibold text-green-600">{tender.location}</span>
              </p>
              <div className="mt-auto">
                {tender.isClosed ? (
                  <p className="text-center text-red-500 font-bold">Tender Closed</p>
                ) : (
                  <a
                    href={tender.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                  >
                    View Tender
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TendersListing;