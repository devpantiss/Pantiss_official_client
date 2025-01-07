import React, { useState } from "react";

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("MINING_VILLAGES");

  // Session plans and Resource book data
  const sessionPlans = [2024, 2023, 2021, 2020, 2019, 2017, 2016, 2015, 2011];
  const resourceBooks = [
    {
      year: 2024,
      image:
        "https://livelihoods-india.org/wp-content/uploads/2024/12/111-1.jpg",
    },
    {
      year: 2023,
      image:
        "https://livelihoods-india.org/wp-content/uploads/2024/03/soil03.png",
    },
    {
      year: 2017,
      image:
        "https://livelihoods-india.org/wp-content/uploads/2022/08/bk29.png",
    },
    {
      year: 2016,
      image:
        "https://livelihoods-india.org/wp-content/uploads/2022/08/bk30.png",
    },
  ];

  return (
    <div className="flex container mx-auto flex-col lg:flex-row p-8 bg-gray-50">
      {/* Left Section - Dynamic Content */}
      <div className="lg:w-2/3">
        <h1 className="text-3xl font-bold text-red-600 mb-6">
          MINING VILLAGES SUMMIT 2024
        </h1>
        {/* Render content based on the active tab */}
        {activeTab === "SESSION_PLAN" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessionPlans.map((year) => (
              <div
                key={year}
                className="p-4 border border-gray-200 shadow-md text-center hover:shadow-lg hover:border-brown-700"
              >
                <h2 className="text-2xl font-bold text-brown-700">{year}</h2>
                <p className="text-green-600 font-medium">SESSION PLAN</p>
                <button className="text-red-600 font-semibold underline mt-2">
                  Read More
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "RESOURCE_BOOK" && (
          <div>
            <p className="text-gray-700 mb-4">
              Each year Livelihoods Asia brings out Resource books/directories
              as part of the summit literature, which outlines the details of
              program schedules, guest speakers, resource persons, associated
              publications, and sponsors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {resourceBooks.map((book) => (
                <div key={book.year} className="text-center">
                  <img
                    src={book.image}
                    alt={`Resource Book ${book.year}`}
                    className="w-full h-64 object-cover"
                  />
                  <button className="text-red-600 font-semibold underline mt-2">
                    RESOURCE BOOK {book.year}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "SUMMIT_REPORTS" && (
          <div>
            <h2 className="text-xl font-bold text-brown-700 mb-4">
              Summit Reports
            </h2>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736229671/excavator-3908_256_wdazr5.gif"
                alt="exca"
              />
              <p className="text-red-700 font-bold text-2xl text-center">
                Coming Soon
              </p>
            </div>
          </div>
        )}

        {activeTab === "SOIL_REPORTS" && (
          <div>
            <h2 className="text-xl font-bold text-brown-700 mb-4">
              Soil Reports
            </h2>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736229671/excavator-3908_256_wdazr5.gif"
                alt="exca"
              />
              <p className="text-red-700 font-bold text-2xl text-center">
                Coming Soon
              </p>
            </div>{" "}
          </div>
        )}

        {activeTab === "MINING_VILLAGES" && (
          <div>
            <h2 className="text-xl font-bold text-brown-700 mb-4">
              Mining Villages Summit
            </h2>
            <p className="text-gray-700">
              The Mining Villages Summit aims to address the socio-economic
              challenges faced by communities in mining regions. The summit
              brings together policymakers, industry leaders, and community
              representatives to explore sustainable development strategies,
              enhance livelihood opportunities, and ensure environmental
              preservation in these areas.
            </p>
            <p className="text-gray-700 mt-4">
              Participants will discuss themes like skill development,
              alternative livelihoods, environmental restoration, and community
              engagement to create a holistic framework for empowering mining
              villages.
            </p>
          </div>
        )}
      </div>

      {/* Right Section - Tabs */}
      <div className="lg:w-1/3 mt-8 lg:mt-0 lg:ml-8 bg-white shadow-md border border-gray-200">
        <div className="bg-brown-700 text-red-600 text-lg font-bold p-4">
          MINING VILLAGES SUMMIT
        </div>
        <div>
          {[
            "MINING_VILLAGES",
            "SESSION_PLAN",
            "RESOURCE_BOOK",
            "SUMMIT_REPORTS",
            "SOIL_REPORTS",
          ].map((tab) => (
            <button
              key={tab}
              className={`w-full text-left px-4 py-3 ${
                activeTab === tab
                  ? "bg-red-600 text-white font-semibold"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.replace("_", " & ")}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
