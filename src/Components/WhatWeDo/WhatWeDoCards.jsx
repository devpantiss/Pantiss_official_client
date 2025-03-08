import React from "react";
import Heading from "../../Components/Common/Heading";
import {
  FaIndustry,
  FaHandsHelping,
  FaTools,
  FaStore,
  FaLeaf,
  FaUserTie,
  FaAppleAlt,
  FaTree,
  FaHome,
  FaUsers,
  FaWater,
  FaRoad,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatWeDoCards = () => {
  const categoryIcons = {
    "EIA/SIA for Land Acquisition@Mines": (
      <FaIndustry className="inline-block mr-2 text-4xl" />
    ),
    "Rehabilitation & Resettlement of Mines": (
      <FaHandsHelping className="inline-block mr-2 text-4xl" />
    ),
    "Skill Training for Mining-Affected Youth": (
      <FaTools className="inline-block mr-2 text-4xl" />
    ),
    "Enterprise Growth in Mining Villages": (
      <FaStore className="inline-block mr-2 text-4xl" />
    ),
    "Reclamation in Abandoned Mines": (
      <FaLeaf className="inline-block mr-2 text-4xl" />
    ),
    "Just Transition for Mining Workers": (
      <FaUserTie className="inline-block mr-2 text-4xl" />
    ),
    "Nutrition and Wellbeing in Mining Villages": (
      <FaAppleAlt className="inline-block mr-2 text-4xl" />
    ),
    "Eco-Mine Tourism": <FaTree className="inline-block mr-2 text-4xl" />,
    "Model Mining Village in Making": (
      <FaHome className="inline-block mr-2 text-4xl" />
    ),
    "Indigenous Community Empowerment": (
      <FaUsers className="inline-block mr-2 text-4xl" />
    ),
    "Waterbody Restoration in Mines": (
      <FaWater className="inline-block mr-2 text-4xl" />
    ),
    "Connecting Remote Mining Habitations": (
      <FaRoad className="inline-block mr-2 text-4xl" />
    ),
  };

  const newsItems = [
    {
      category: "EIA/SIA for Land Acquisition@Mines",
      title: "EIA/SIA for Land Acquisition@Mines",
      description:
        "Our latest Environmental and Social Impact Assessment (EIA/SIA) ensures sustainable land acquisition for mining projects, balancing ecological preservation with community needs. This initiative supports transparent planning and minimizes adverse effects on local ecosystems and populations.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195006/EIA_bpqcoy.jpg",
      linkText: "View More",
      link: "/what-we-do/EIA-SIA-for-land-acquisition",
    },
    {
      category: "Rehabilitation & Resettlement of Mines",
      title: "Rehabilitation & Resettlement of Mines",
      description:
        "This program focuses on rehabilitating mining-affected areas and resettling displaced communities with dignity. Through innovative housing and livelihood support, we aim to restore livelihoods and foster resilient communities in post-mining landscapes.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195058/Rehabilitation_ejgaqn.webp",
      linkText: "View More",
      link: "/what-we-do/rehabilitation-&-resettlement-of-mines",
    },
    {
      category: "Skill Training for Mining-Affected Youth",
      title: "Skill Training for Mining-Affected Youth",
      description:
        "Empowering the next generation, this skill training initiative equips mining-affected youth with vocational skills, from machinery operation to digital literacy, ensuring sustainable employment opportunities and economic independence.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735278481/vocational_msprt8.jpg",
      linkText: "View More",
      link: "/what-we-do/skill-training-for-mining-affected-youth",
    },
    {
      category: "Enterprise Growth in Mining Villages",
      title: "Enterprise Growth in Mining Villages",
      description:
        "Boosting local economies, this project supports the growth of small enterprises in mining villages through microfinance and business training, empowering women-led self-help groups to thrive and sustain their communities.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735280030/SHG-cover_zx4b1p.jpg",
      linkText: "View More",
      link: "/what-we-do/enterprise-growth-in-mining-villages",
    },
    {
      category: "Reclamation in Abandoned Mines",
      title: "Reclamation in Abandoned Mines",
      description:
        "Transforming abandoned mines into green spaces, this reclamation effort restores biodiversity and land usability, turning environmental challenges into opportunities for ecological recovery and community benefit.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195281/WhatsApp_Image_2024-12-26_at_12.10.50_PM_nqiwwh.jpg",
      linkText: "View More",
      link: "/what-we-do/reclamation-in-abandoned-mines",
    },
    {
      category: "Just Transition for Mining Workers",
      title: "Just Transition for Mining Workers",
      description:
        "Supporting miners through a just transition, this initiative provides retraining and alternative livelihood options, ensuring fair and sustainable career paths as the industry evolves toward greener practices.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195397/just_transition_wpoeik.jpg",
      linkText: "View More",
      link: "/what-we-do/just-transition-for-mining-workers",
    },
    {
      category: "Nutrition and Wellbeing in Mining Villages",
      title: "Nutrition and Wellbeing in Mining Villages",
      description:
        "Enhancing health outcomes, this program delivers nutrition education and access to balanced meals, improving the wellbeing of mining village residents and addressing malnutrition challenges in remote areas.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195440/nutrition_jnxshz.jpg",
      linkText: "View More",
      link: "/what-we-do/nutrition-and-wellbeing-in-mining-villages",
    },
    {
      category: "Eco-Mine Tourism",
      title: "Eco-Mine Tourism",
      description:
        "Promoting sustainable tourism, this initiative transforms former mining sites into eco-friendly attractions, offering educational tours and boosting local economies while preserving natural heritage.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195893/eco-mine_dvtcgq.avif",
      linkText: "View More",
      link: "/what-we-do/eco-mine-tourism",
    },
    {
      category: "Model Mining Village in Making",
      title: "Model Mining Village in Making",
      description:
        "Developing a blueprint for sustainable living, this project creates a model mining village with modern infrastructure, healthcare, and education, setting a standard for community development in mining regions.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196020/model_village_dz36fg.jpg",
      linkText: "View More",
      link: "/what-we-do/model-mining-village-in-making",
    },
    {
      category: "Indigenous Community Empowerment",
      title: "Indigenous Community Empowerment",
      description:
        "Strengthening indigenous voices, this initiative provides training and resources to empower tribal communities, preserving cultural heritage while fostering economic and social resilience in mining areas.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196099/indegenous_tribals_u4lgnd.jpg",
      linkText: "View More",
      link: "/what-we-do/indegenous-community-empowerment",
    },
    {
      category: "Waterbody Restoration in Mines",
      title: "Waterbody Restoration in Mines",
      description:
        "Restoring vital water resources, this project revitalizes waterbodies in mining areas, ensuring clean water access and supporting agriculture and biodiversity in affected regions.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196479/aditya-shrivastava-yYPcqVU6IEI-unsplash_adkc8e.jpg",
      linkText: "View More",
      link: "/what-we-do/waterbody-restoration-in-mines",
    },
    {
      category: "Connecting Remote Mining Habitations",
      title: "Connecting Remote Mining Habitations",
      description:
        "Bridging isolation, this initiative improves road and communication networks in remote mining areas, enhancing access to markets, healthcare, and education for underserved populations.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735278741/diego-jimenez-A-NVHPka9Rk-unsplash_dzcoco.jpg",
      linkText: "View More",
      link: "/what-we-do/connecting-remote-mining-habitations",
    },
  ];

  return (
    <div className="bg-red-600 px-10">
      <section className="container mx-auto py-10">
        <Heading text="WHAT WE DO" color="text-white" bgColor="bg-[white]" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
          {newsItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group ring-1 ring-red-600 flex flex-col justify-between rounded-lg overflow-hidden shadow-2xl hover:ring-white bg-white hover:bg-red-600 transition-all duration-300"
            >
              <div className="p-6 transition-all duration-300 group-hover:bg-red-600">
                <p className="text-4xl font-bold flex justify-start items-center uppercase text-red-600 group-hover:text-white mb-2 transition-all duration-300">
                  {categoryIcons[item.category]}
                  {/* {item.category} */}
                </p>
                <h2 className="text-lg font-semibold mb-4 text-red-600 group-hover:text-white transition-all duration-300">
                  {item.title}
                </h2>
                <p className="text-gray-700 group-hover:text-white mb-6 transition-all duration-300">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-gray-900 group-hover:text-white hover:underline transition-all duration-300"
                >
                  {item.linkText} →
                </a>
              </div>

              {/* Image Section */}
              {item.imageUrl && (
                <div
                  className="h-48 relative bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                >
                  <div className="absolute top-0 left-[10%] w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-t-[25px] border-t-white group-hover:border-t-red-600 transition-all duration-300"></div>
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoCards;
