import React from "react";

const Tenders = () => {
  const tenders = [
    {
      id: 1,
      title: "Construction of Plastic Waste Recycling Unit",
      location: "Bokaro, Jharkhand",
      startDate: "23rd December 2024",
      deadline: "31st December 2024",
      link: "https://drive.google.com/file/d/1kDnAKkV-q2fIO3d-QmSxKPEd6Nr4QYnO/view?usp=sharing", // Add Google Drive link here
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Tender List</h1>
        <p className="text-gray-600 mt-2">
          Explore the latest tenders available for bidding.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex justify-between items-center bg-white shadow rounded-lg p-4 mb-6">
        <input
          type="text"
          placeholder="Search tenders..."
          className="w-full max-w-lg p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-red-200"
        />
        <button className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
          Search
        </button>
      </div>

      {/* Tender List */}
      <div className="space-y-4">
        {tenders.map((tender) => (
          <div
            key={tender.id}
            className="bg-white shadow rounded-lg p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center"
          >
            <div className="space-y-1">
              <h2 className="text-lg font-semibold text-gray-800">
                {tender.title}
              </h2>
              <p className="text-sm text-gray-600">
                Start Date: <span className="font-medium">{tender.startDate}</span>
              </p>
              <p className="text-sm text-gray-600">
                Deadline: <span className="font-medium">{tender.deadline}</span>
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-col sm:items-end">
              <p className="text-sm text-gray-600">
                Location:{" "}
                <span className="font-semibold text-green-600">
                  {tender.location}
                </span>
              </p>
              <a
                href={tender.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
              >
                View Tender
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tenders;
