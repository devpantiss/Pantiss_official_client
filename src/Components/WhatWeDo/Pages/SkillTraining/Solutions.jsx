import React from "react";
import Heading from "../../../Common/Heading";
import { FaNetworkWired, FaBus, FaDatabase, FaMapMarkedAlt } from "react-icons/fa"; // Skill Mobilizers Connect
import { FaUserCheck, FaShuttleVan, FaChartBar } from "react-icons/fa"; // Skill Candor (Fixed FaVanShuttle -> FaShuttleVan)
import { FaBuilding, FaVrCardboard, FaTruck, FaChartLine } from "react-icons/fa"; // Skill Cafe
import { FaMobileAlt, FaIndustry, FaUsers } from "react-icons/fa"; // Blue Collars Foundry

const Solutions = () => {
  const solutions = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/56cff1ce-3f2c-477a-98b9-74fd979e24fc_j3m2x6.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Skill Mobilizers Connect",
      description:
        "A platform linking skilled workers with industry opportunities, fostering workforce mobility and collaboration.",
      details: [
        {
          text: "Skill Mobilization Executive Network",
          icon: <FaNetworkWired className="w-6 h-6" />,
        },
        {
          text: "Futuristic Skill on Wheels for Program Out Reach",
          icon: <FaBus className="w-6 h-6" />,
        },
        {
          text: "Field Force Management & Offline Data Collection Platform",
          icon: <FaDatabase className="w-6 h-6" />,
        },
        {
          text: "Candidates Spatial Atlas",
          icon: <FaMapMarkedAlt className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739283474/WhatsApp_Image_2025-02-11_at_7.45.16_PM_wlhbfn.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Skill Candor",
      description:
        "Transparent skill assessment and development programs to empower individuals with clear career pathways.",
      details: [
        {
          text: "Indias First Certified Skill Counsellor Network",
          icon: <FaUserCheck className="w-6 h-6" />,
        },
        {
          text: "Real time Counselling Vans",
          icon: <FaShuttleVan className="w-6 h-6" />, // Corrected icon
        },
        {
          text: "Psychometric Assessment Dashboard",
          icon: <FaChartBar className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Skill Cafe",
      description:
        "Interactive workshops and networking hubs to brew skills and innovation for industrial professionals.",
      details: [
        {
          text:
            "State of the art, fully residential Center of Excellence at mining & Industrial Corridors.",
          icon: <FaBuilding className="w-6 h-6" />,
        },
        {
          text:
            "Futuristic Japanese A/R, V/R & Australian Simulators Customised as per Coal & Chromite Mines.",
          icon: <FaVrCardboard className="w-6 h-6" />,
        },
        {
          text:
            "Hands on Training in Company owned Volvo & Caterpillar Haulpacks & Excavators.",
          icon: <FaTruck className="w-6 h-6" />,
        },
        {
          text: "Learning & Performance Metrics & Analytics",
          icon: <FaChartLine className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp",
      fallbackImage: "https://via.placeholder.com/600x400",
      stat: "Blue Collars Foundry",
      description:
        "Specialized training and support for blue-collar workers in foundry operations and manufacturing trades.",
      details: [
        {
          text:
            "Mobile App based Job Search Engine, Exclusive for Operators in Mining, Steel & Power Industry.",
          icon: <FaMobileAlt className="w-6 h-6" />,
        },
        {
          text:
            "The Largest Repository of Manufacturing Industries & Nano Contractors.",
          icon: <FaIndustry className="w-6 h-6" />,
        },
        {
          text: "A Web Portal for Alumni Engagement & Support",
          icon: <FaUsers className="w-6 h-6" />,
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
          Our in-house solutions are designed to empower businesses with
          innovative, tailored tools that streamline operations and drive
          growth. Developed by our expert team, these solutions integrate
          seamlessly with your existing systems, offering customized features
          like advanced data analytics, automated workflows, and user-friendly
          interfaces. By leveraging cutting-edge technologies, we ensure
          scalability and efficiency, enabling you to address unique challenges
          without relying on third-party vendors.
        </p>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch bg-white rounded-xl shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Odd Card: Image Left, Text Right */}
              {index % 2 === 0 ? (
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
                /* Even Card: Text Left, Image Right */
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