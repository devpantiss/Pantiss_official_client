import React from "react";
import Heading from "../../../Common/Heading";
import { FaMapMarkedAlt, FaGlobe, FaDesktop, FaCamera } from "react-icons/fa"; // GIS Hamlies
import { FaUsers, FaHandshake, FaChartBar } from "react-icons/fa"; // Resettlement Gram Sabha
import { FaGavel, FaBuilding, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa"; // R & R Governance

const Solutions = () => {
  const solutions = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742216965/GIS-companies-in-Bangalore_mqw2sl.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "GIS Hamlies",
      description:
        "A GIS-powered platform for spatial analysis and rehabilitation planning",
      details: [
        {
          text: "GIS Estate Analyst Network",
          icon: <FaMapMarkedAlt className="w-6 h-6" />,
        },
        {
          text: "An Integrated platform depicting GIS based spatial map with drone integration",
          icon: <FaGlobe className="w-6 h-6" />,
        },
        {
          text: "Web portal for EIA/SIA",
          icon: <FaDesktop className="w-6 h-6" />,
        },
        {
          text: "Orthomosaic realtime simulation based R&R model",
          icon: <FaCamera className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742315554/people-gathered-together-village-meeting-society-work-society-meeting-village-206808403_pbrdkv.webp",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Resettlement Gram Sabha",
      description:
        "Community-driven resettlement solutions with integrated dashboards",
      details: [
        {
          text: "Resettlement Integrator Network",
          icon: <FaUsers className="w-6 h-6" />,
        },
        {
          text: "Gram Sabha meetings for community approval",
          icon: <FaHandshake className="w-6 h-6" />,
        },
        {
          text: "An integrated dashboard based platform for entitlement transfer (land, House building & Livelihoods)",
          icon: <FaChartBar className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742217298/5878303_ru2f7m.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "R & R Governance",
      description:
        "Governance framework for rehabilitation and resettlement compliance",
      details: [
        {
          text: "Parliamentary Committee, Social Compliances",
          icon: <FaGavel className="w-6 h-6" />,
        },
        {
          text: "Rehabilitation & Peripheral Development Action Committee (RPDAC)",
          icon: <FaBuilding className="w-6 h-6" />,
        },
        {
          text: "Social Audit",
          icon: <FaCheckCircle className="w-6 h-6" />,
        },
        {
          text: "Multilateral Funders Compliances",
          icon: <FaMoneyBillWave className="w-6 h-6" />,
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
          Our in-house solutions are designed to empower rehabilitation and resettlement efforts with innovative, tailored tools that streamline operations and ensure compliance. Developed by our expert team, these solutions integrate advanced GIS technology, community engagement platforms, and governance frameworks, offering scalability and efficiency to address the unique challenges of mining-affected communities.
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