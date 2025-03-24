import React from "react";
import Heading from "../../../Common/Heading";
import { FaNetworkWired, FaBus, FaDatabase, FaMapMarkedAlt } from "react-icons/fa"; // Skill Mobilizers Connect
import { FaUserCheck, FaShuttleVan, FaChartBar } from "react-icons/fa"; // Skill Candor
import { FaBuilding, FaVrCardboard, FaTruck, FaChartLine } from "react-icons/fa"; // Skill Cafe
import { FaMobileAlt, FaIndustry, FaUsers } from "react-icons/fa"; // Blue Collars Foundry

const Solutions = () => {
  const solutions = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316572/freepik__make-a-image-showing-an-mobile-phone-inside-which-__18030_xe1ihz.jpg",
      fallbackImage: "https://via.placeholder.com/600x400?text=Image+Not+Found",
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
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316784/freepik__the-style-is-candid-image-photography-with-natural__18031_exrhs0.jpg",
      fallbackImage: "https://via.placeholder.com/600x400?text=Image+Not+Found",
      stat: "Skill Candor",
      description:
        "Transparent skill assessment and development programs to empower individuals with clear career pathways.",
      details: [
        {
          text: "India’s First Certified Skill Counsellor Network",
          icon: <FaUserCheck className="w-6 h-6" />,
        },
        {
          text: "Real-time Counselling Vans",
          icon: <FaShuttleVan className="w-6 h-6" />,
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
      fallbackImage: "https://via.placeholder.com/600x400?text=Image+Not+Found",
      stat: "Skill Cafe",
      description:
        "Interactive workshops and networking hubs to brew skills and innovation for industrial professionals.",
      details: [
        {
          text:
            "State-of-the-art, fully residential Center of Excellence at mining & industrial corridors",
          icon: <FaBuilding className="w-6 h-6" />,
        },
        {
          text:
            "Futuristic Japanese A/R, V/R & Australian simulators customized as per coal & chromite mines",
          icon: <FaVrCardboard className="w-6 h-6" />,
        },
        {
          text:
            "Hands-on training in company-owned Volvo & Caterpillar haulpacks & excavators",
          icon: <FaTruck className="w-6 h-6" />,
        },
        {
          text: "Learning & performance metrics & analytics",
          icon: <FaChartLine className="w-6 h-6" />,
        },
      ],
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp",
      fallbackImage: "https://via.placeholder.com/600x400?text=Image+Not+Found",
      stat: "Blue Collars Foundry",
      description:
        "Specialized training and support for blue-collar workers in foundry operations and manufacturing trades.",
      details: [
        {
          text:
            "Mobile app-based job search engine, exclusive for operators in mining, steel & power industry",
          icon: <FaMobileAlt className="w-6 h-6" />,
        },
        {
          text:
            "The largest repository of manufacturing industries & nano contractors",
          icon: <FaIndustry className="w-6 h-6" />,
        },
        {
          text: "A web portal for alumni engagement & support",
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

        {/* Introductory Paragraph */}
        <p className="text-white text-lg text-left leading-relaxed mb-12">
          Our in-house solutions are designed to empower businesses with
          innovative, tailored tools that streamline operations and drive
          growth. Developed by our expert team, these solutions integrate
          seamlessly with your existing systems, offering customized features
          like advanced data analytics, automated workflows, and user-friendly
          interfaces. By leveraging cutting-edge technologies, we ensure
          scalability and efficiency, enabling you to address unique challenges
          without relying on third-party vendors.
        </p>

        {/* Single Row with Alternating Layout */}
        <div className="space-y-12">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="group flex flex-col md:flex-row items-center gap-8 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-red-600"
              >
                {/* Image Section */}
                <div
                  className={`w-full md:w-1/2 h-[400px] rounded-t-xl md:rounded-t-none md:rounded-l-xl overflow-hidden shadow-md ${
                    isEven ? "order-1" : "order-2 md:rounded-r-xl"
                  }`}
                >
                  <img
                    src={solution.imageUrl}
                    alt={solution.stat}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                    onError={(e) => (e.target.src = solution.fallbackImage)}
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;