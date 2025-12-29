// CapacityDevelopment.js
import React from "react";
import Heading from "../Common/Heading";

const toolkitItems = [
  {
    title: "Webinar Series",
    description:
      "Access recordings and resources from our expert-led webinars on social impact. This series covers topics such as community engagement strategies, impact measurement techniques, and innovative approaches to sustainable development, designed for professionals and organizations alike.",
    date: "Last Updated: February 20, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnN8ZW58MHwwfDB8fHwy",
    exploreUrl: "#", // Replace with actual webinar URL
  },
  {
    title: "Resource Collections",
    description:
      "Curated tools and insights for effective program development. This collection includes templates, case studies, best practices, and research papers to support teams in designing, implementing, and evaluating impactful programs across diverse contexts.",
    date: "Last Updated: January 15, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1631651587645-e417d2b68735?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3VyY2UlMjBjb2xsZWN0aW9uc3xlbnwwfDB8MHx8fDI%3D",
    exploreUrl: "#", // Replace with actual collections URL
  },
  {
    title: "Training Manuals",
    description:
      "Comprehensive guides for implementing our methodologies. These manuals offer step-by-step instructions, practical examples, troubleshooting tips, and advanced techniques to ensure successful adoption of our proven frameworks in real-world scenarios.",
    date: "Last Updated: March 5, 2025",
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SVQlMjB0cmFpbmluZyUyMG1hbnVhbHN8ZW58MHwwfDB8fHwy",
    exploreUrl: "#", // Replace with actual manuals URL
  },
];

const CapacityDevelopment = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-12">
          <Heading text="TOOLKIT" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Toolkit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {toolkitItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:ring-2 ring-red-600 hover:shadow-2xl hover:-translate-y-2 h-[650px] flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-red-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base line-clamp-5 mt-2">
                  {item.description}
                </p>
                {/* Spacer to push the footer to the bottom */}
                <div className="flex-grow" />
                {/* Footer with Date and Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-gray-500 text-sm font-medium">
                    {item.date}
                  </span>
                  <a
                    href={item.exploreUrl}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-full shadow-md hover:from-red-600 hover:to-red-700 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300"
                    aria-label={`Explore ${item.title}`}
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

        <div className="flex justify-center items-center mt-8">
          <button
            className="
              px-6 py-3
              bg-red-600
              border border-white/30
              rounded-lg
              text-white font-medium
              hover:bg-white/20
              hover:text-red-600
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-red-600
            "
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default CapacityDevelopment;
