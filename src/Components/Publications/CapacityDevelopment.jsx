// CapacityDevelopment.js
import React from "react";
import Heading from "../Common/Heading";

const toolkitItems = [
  {
    title: "Webinar Series",
    description: "Access recordings and resources from our expert-led webinars on social impact.",
    date: "Last Updated: February 20, 2025",
    imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnN8ZW58MHwwfDB8fHwy",
    exploreUrl: "#", // Replace with actual webinar URL
  },
  {
    title: "Resource Collections",
    description: "Curated tools and insights for effective program development.",
    date: "Last Updated: January 15, 2025",
    imageUrl: "https://images.unsplash.com/photo-1631651587645-e417d2b68735?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3VyY2UlMjBjb2xsZWN0aW9uc3xlbnwwfDB8MHx8fDI%3D",
    exploreUrl: "#", // Replace with actual collections URL
  },
  {
    title: "Training Manuals",
    description: "Comprehensive guides for implementing our methodologies.",
    date: "Last Updated: March 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SVQlMjB0cmFpbmluZyUyMG1hbnVhbHN8ZW58MHwwfDB8fHwy",
    exploreUrl: "#", // Replace with actual manuals URL
  },
];

const CapacityDevelopment = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-8">
          <Heading text="TOOLKIT" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Toolkit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {toolkitItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">{item.date}</span>
                  <a
                    href={item.exploreUrl}
                    className="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    aria-label={`Explore ${item.title}`}
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

export default CapacityDevelopment;