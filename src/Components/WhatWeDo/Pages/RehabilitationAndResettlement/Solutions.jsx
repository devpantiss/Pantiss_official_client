import React from "react";
import Heading from "../../../Common/Heading";
import { FaMapMarkedAlt, FaGlobe, FaDesktop, FaCamera } from "react-icons/fa"; // GIS Hamlies
import { FaUsers, FaHandshake, FaChartBar } from "react-icons/fa"; // Resettlement Gram Sabha
import { FaGavel, FaBuilding, FaCheckCircle, FaMoneyBillWave } from "react-icons/fa"; // R & R Governance

const Solutions = () => {
  const solutions = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122359/a-woman-farmer-with-digital-tablet-on-a-potato-field-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo_w5f8tt.jpg",
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
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122479/Skill-development-and-entrepreneurship-promotion-in-the-agriculture-sector_bys2rt.jpg",
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
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122851/Pngtree_portfolio_displays_and_mobile_apps_8471028_m9g1ah.jpg",
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

        <p className="text-white text-lg text-left leading-relaxed mb-10">
          Our in-house solutions are designed to empower rehabilitation and resettlement efforts with innovative, tailored tools that streamline operations and ensure compliance. Developed by our expert team, these solutions integrate advanced GIS technology, community engagement platforms, and governance frameworks, offering scalability and efficiency to address the unique challenges of mining-affected communities.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-y-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-stretch bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg ${
                index === 2 ? "md:col-span-2 md:max-w-3xl md:mx-auto" : ""
              }`}
            >
              {/* Odd Card (or first card): Image Left, Text Right */}
              {index % 2 === 0 && index !== 2 ? (
                <>
                  <div className="md:w-1/2 relative">
                    <img
                      src={solution.imageUrl}
                      alt={`${solution.stat} illustration`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = solution.fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10" />
                  </div>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-red-700 mb-3 bg-red-100 inline-block px-3 py-1 rounded-md">
                        {solution.stat}
                      </h4>
                      <p className="text-gray-700 text-base leading-relaxed mb-4">
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
                </>
              ) : (
                /* Even Card (or third card): Text Left, Image Right */
                <>
                  <div className="md:w-1/2 p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-red-700 mb-3 bg-red-100 inline-block px-3 py-1 rounded-md">
                        {solution.stat}
                      </h4>
                      <p className="text-gray-700 text-base leading-relaxed mb-4">
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
                  <div className="md:w-1/2 relative">
                    <img
                      src={solution.imageUrl}
                      alt={`${solution.stat} illustration`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = solution.fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;