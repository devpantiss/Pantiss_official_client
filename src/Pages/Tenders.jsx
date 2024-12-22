import React from "react";

const Tenders = () => {
  const tenders = [
    {
      id: 1,
      title: "Construction of School Building",
      location: "Bhubaneswar, Odisha",
      deadline: "31st December 2024",
      budget: "₹50,00,000",
      link: "https://drive.google.com/file/d/12345/view", // Add Google Drive link here
    },
    {
      id: 2,
      title: "Road Widening Project",
      location: "Cuttack, Odisha",
      deadline: "15th January 2025",
      budget: "₹1,20,00,000",
      link: "https://drive.google.com/file/d/67890/view", // Add Google Drive link here
    },
    {
      id: 3,
      title: "Water Supply Installation",
      location: "Rourkela, Odisha",
      deadline: "10th February 2025",
      budget: "₹35,00,000",
      link: "https://drive.google.com/file/d/11223/view", // Add Google Drive link here
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
                Location: <span className="font-medium">{tender.location}</span>
              </p>
              <p className="text-sm text-gray-600">
                Deadline: <span className="font-medium">{tender.deadline}</span>
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex flex-col sm:items-end">
              <p className="text-sm text-gray-600">
                Budget:{" "}
                <span className="font-semibold text-green-600">
                  {tender.budget}
                </span>
              </p>
              <a
                href={tender.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
              >
                View PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tenders;
