// CommunicationDevelopment.js
import React from "react";
import Heading from "../Common/Heading";

const dashboards = [
  {
    title: "Results Dashboard",
    description: "Track and analyze the outcomes of our initiatives in real-time.",
    date: "Updated: March 1, 2025",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1741338479/Screenshot_2025-03-07_at_2.36.21_PM_x5eoxx.png",
    exploreUrl: "/dashboard/results", // Replace with actual dashboard URL
  },
  {
    title: "Partnerships Dashboard",
    description: "Explore our network of collaborators and their contributions.",
    date: "Updated: February 15, 2025",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1741338479/Screenshot_2025-03-07_at_2.36.47_PM_ymp42g.png",
    exploreUrl: "/dashboard/partnerships", // Replace with actual dashboard URL
  },
  {
    title: "Key Result Stories Dashboard",
    description: "Dive into impactful stories showcasing our key achievements.",
    date: "Updated: January 10, 2025",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1741338479/Screenshot_2025-03-07_at_2.35.54_PM_kziq55.png",
    exploreUrl: "/dashboard/key-result-stories", // Replace with actual dashboard URL
  },
];

const CommunicationDevelopment = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8">
          <Heading text="DASHBOARDS" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={dashboard.imageUrl}
                  alt={dashboard.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {dashboard.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {dashboard.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{dashboard.date}</span>
                  <a
                    href={dashboard.exploreUrl}
                    className="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label={`Explore ${dashboard.title}`}
                  >
                    Explore
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
                        d="M9 5l7 7-7 7"
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

export default CommunicationDevelopment;