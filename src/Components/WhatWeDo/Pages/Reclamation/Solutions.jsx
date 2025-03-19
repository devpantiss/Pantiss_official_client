import React from "react";
import Heading from "../../../Common/Heading";
import { FaNetworkWired, FaMicrochip, FaChartLine } from "react-icons/fa"; // Digit Farm Bench Marking
import { FaChalkboardTeacher, FaLaptop, FaBook, FaLink } from "react-icons/fa"; // Farm Business School
import { FaShoppingCart, FaTruck, FaSnowflake, FaSatellite, FaGlobe } from "react-icons/fa"; // Harvest To Market

const Solutions = () => {
  const solutions = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122359/a-woman-farmer-with-digital-tablet-on-a-potato-field-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo_w5f8tt.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Digit Farm Bench Marking",
      description:
        "Smart Logic enabled - A Platform for Farm & Farmers Competency Check",
      details: [
        {
          text: "Farm Estate Analyst Network.",
          icon: <FaNetworkWired className="w-6 h-6" />,
        },
        {
          text: "Smart Farming & Data Insights.",
          icon: <FaMicrochip className="w-6 h-6" />,
        },
        {
          text: "Future Farm & Metrics Analytics.",
          icon: <FaChartLine className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122479/Skill-development-and-entrepreneurship-promotion-in-the-agriculture-sector_bys2rt.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Farm Business School",
      description:
        "A Business School Enabled with Learning Management System",
      details: [
        {
          text: "Farm Technology Coach Network.",
          icon: <FaChalkboardTeacher className="w-6 h-6" />,
        },
        {
          text: "Learning Platforms Supporting Remote Training of Community Agents.",
          icon: <FaLaptop className="w-6 h-6" />,
        },
        {
          text: "Community Agent Trainers Manual, Farm Record, Farmers Handbook, Farm Analytics Dashboard.",
          icon: <FaBook className="w-6 h-6" />,
        },
        {
          text: "Dashboard Analytics for Farmers Linkage.",
          icon: <FaLink className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122851/Pngtree_portfolio_displays_and_mobile_apps_8471028_m9g1ah.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Harvest To Market",
      description:
        "A Single Window platform for marketing of Products",
      details: [
        {
          text: "Online & Realtime Store for SALE of PRODUCTS.",
          icon: <FaShoppingCart className="w-6 h-6" />,
        },
        {
          text: "Farm Logistics Park.",
          icon: <FaTruck className="w-6 h-6" />,
        },
        {
          text: "Post Harvest Solution & Cold Storage Chain.",
          icon: <FaSnowflake className="w-6 h-6" />,
        },
        {
          text: "Cluster Info Center (CIC) & Satellite Center (SC).",
          icon: <FaSatellite className="w-6 h-6" />,
        },
        {
          text: "Remote Linkage for Farmers & Market.",
          icon: <FaGlobe className="w-6 h-6" />,
        },
      ],
    },
  ];

  return (
    <section className="bg-red-600 py-12 px-6 mt-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div className="text-center mb-10">
          <Heading
            text="PANTISS SOLUTIONS"
            color="text-white"
            bgColor="bg-white"
          />
        </div>

        {/* Introductory Paragraph */}
        <p className="text-white text-lg text-left leading-relaxed mb-12">
          Our in-house solutions are designed to empower businesses with innovative, tailored tools that streamline operations and drive growth. Developed by our expert team, these solutions integrate seamlessly with your existing systems, offering customized features like advanced data analytics, automated workflows, and user-friendly interfaces. By leveraging cutting-edge technologies, we ensure scalability and efficiency, enabling you to address unique challenges without relying on third-party vendors.
        </p>

        {/* Single Row with Alternating Layout */}
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-md md:flex-row items-center gap-8 transition-all duration-300 hover:shadow-xl"
              >
                {/* Image Section */}
                <div
                  className={`w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-md ${
                    isEven ? "order-1" : "order-2"
                  }`}
                >
                  <img
                    src={solution.imageUrl}
                    alt={solution.stat}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = solution.fallbackImage; // Fallback image
                    }}
                  />
                </div>

                {/* Text Section */}
                <div
                  className={`w-full md:w-1/2 p-6 ${
                    isEven ? "order-2" : "order-1"
                  }`}
                >
                  <h4 className="text-3xl font-bold text-red-600 mb-3">
                    {solution.stat}
                  </h4>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 pl-0">
                    {solution.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 mr-3 bg-red-500 text-white rounded-full flex-shrink-0">
                          {detail.icon}
                        </span>
                        <span className="text-gray-700 text-base leading-relaxed">
                          {detail.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;