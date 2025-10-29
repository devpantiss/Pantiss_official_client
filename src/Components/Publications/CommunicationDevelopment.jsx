// CommunicationDevelopment.js
import React from "react";
import Heading from "../Common/Heading";

const dashboards = [
  {
    title: "Results Dashboard",
    description:
      "Track and analyze the outcomes of our initiatives in real-time. This dashboard provides detailed metrics, visualizations, and performance indicators to help stakeholders understand the impact of our programs across various regions and sectors.",
    date: "Updated: March 1, 2025",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761737339/Screenshot_2025-10-29_at_4.57.11_PM_a8cizg.png",
    exploreUrl: "/dashboard/results", // Replace with actual dashboard URL
  },
  {
    title: "Partnerships Dashboard",
    description:
      "Explore our network of collaborators and their contributions. This tool offers insights into partnership dynamics, joint projects, resource sharing, and the collective impact of our alliances on community development and innovation.",
    date: "Updated: February 15, 2025",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761737339/Screenshot_2025-10-29_at_4.57.59_PM_rnrt2m.png",
    exploreUrl: "/dashboard/partnerships", // Replace with actual dashboard URL
  },
  {
    title: "Key Result Stories Dashboard",
    description:
      "Dive into impactful stories showcasing our key achievements. This dashboard highlights success narratives, beneficiary testimonials, and data-driven outcomes that illustrate the transformative effects of our work over the past year.",
    date: "Updated: January 10, 2025",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761737343/Screenshot_2025-10-29_at_4.58.19_PM_y4b55n.png",
    exploreUrl: "/dashboard/key-result-stories", // Replace with actual dashboard URL
  },
];

const CommunicationDevelopment = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <Heading text="DASHBOARDS & DATA ANALYTICS" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:ring-2 ring-red-600 hover:shadow-2xl hover:-translate-y-2 h-[650px] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dashboard.imageUrl}
                  alt={dashboard.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                  {dashboard.title}
                </h3>
                <p className="text-gray-700 text-base line-clamp-5 mt-2">
                  {dashboard.description}
                </p>
                {/* Spacer to push the footer to the bottom */}
                <div className="flex-grow" />
                {/* Footer with Date and Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-500 text-sm font-medium">
                    {dashboard.date}
                  </span>
                  <a
                    href={dashboard.exploreUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300"
                    aria-label={`Explore ${dashboard.title}`}
                  >
                    Explore
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