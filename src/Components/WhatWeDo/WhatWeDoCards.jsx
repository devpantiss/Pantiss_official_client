import React from "react";
import Heading from "../../Components/Common/Heading";
import { MdEventAvailable, MdCampaign } from "react-icons/md";
import { SiStorybook,  } from "react-icons/si";
import { HiNewspaper } from "react-icons/hi2";

const WhatWeDoCards = () => {
  const categoryIcons = {
    Events: <MdEventAvailable className="inline-block mr-2 text-xl" />,
    Stories: <SiStorybook className="inline-block mr-2 text-xl" />,
    Campaigns: <MdCampaign className="inline-block mr-2 text-xl" />,
    // Podcasts: <SiGooglepodcasts className="inline-block mr-2 text-xl" />,
    News: <HiNewspaper className="inline-block mr-2 text-xl" />,
    // Reports: <HiDocumentReport className="inline-block mr-2 text-xl" />,
    // Awards: <FaAward className="inline-block mr-2 text-xl" />,
    // Blogs: <FaBlog className="inline-block mr-2 text-xl" />,
  };

  const newsItems = [
    {
      category: "Events",
      title:
        "Pantiss Representation at COP 29: Just Transition for Abandoned Mines in Baku",
      description:
        "Pantiss proudly participated in COP 29 in Baku, Azerbaijan, presenting innovative strategies for a just transition in communities impacted by abandoned mines. The event highlighted sustainable solutions to rehabilitate mining-affected areas while fostering economic opportunities and environmental restoration.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192166/events_2_e7pyqc.jpg",
      linkText: "View More",
    },
    {
      category: "Stories",
      title: "Empowering Futures: Youth Tribal Dormitories Initiative",
      description:
        "Providing a safe and nurturing environment, the Youth Tribal Dormitories initiative supports education and skill development for tribal youth. These dormitories serve as a foundation for holistic growth, bridging opportunities and empowering the next generation to thrive.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192516/tribal_Youth_dormitories_radqjp.jpg",
      linkText: "View More",
    },
    {
      category: "News",
      title: "Inauguration of Mining Skill Development Program in T. Rampur",
      description:
        "The Mining Skill Development Program was successfully inaugurated in T. Rampur, empowering local youth with industry-relevant skills. This initiative aims to create sustainable livelihoods while fostering growth and self-reliance in mining-affected communities.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_crop,w_700/v1735192305/news_vftigf.jpg",
      linkText: "View More",
    },
    // {
    //   category: "Awards",
    //   title:
    //     "Listed on India Book of Records for Largest Hand Washing at one Place",
    //   description:
    //     "Recognized by the India Book of Records for organizing the largest handwashing event at a single location, promoting hygiene awareness and emphasizing the importance of handwashing as a cornerstone of public health",
    //   imageUrl:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735191971/Awards_bbpnu5.jpg",
    //   linkText: "View More",
    // },
    // {
    //   category: "Blogs",
    //   title: "Breaking Barriers: Empowering Tribal Women Miners in Sukinda",
    //   description:
    //     "In the heart of the Sukinda Chromite region, tribal women are redefining the mining industry. This initiative focuses on skill-building, inclusion, and empowerment, enabling women to take on roles as miners and leaders, fostering economic independence and social transformation.",
    //   imageUrl:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192753/blogs_copltg.jpg",
    //   linkText: "View More",
    // },
    {
      category: "Campaigns",
      title: "Skill on Wheels: Driving Hi-Tech Mining in the Eastern Ghats",
      description:
        "Bringing cutting-edge mining skills to the hinterlands of the Eastern Ghats, the 'Skill on Wheels' campaign empowers rural communities with mobile training units. This initiative bridges the gap between technology and opportunity, paving the way for a skilled and sustainable mining workforce.",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735193450/WhatsApp_Image_2024-12-26_at_11.39.49_AM_hzpigw.jpg",
      linkText: "View More",
    },
    // {
    //   category: "Podcasts",
    //   title: "Just Transition: A Conversation with Shipra Saxena",
    //   description:
    //     "Join us in this insightful podcast with Shipra Saxena, WASH and CCES Specialist at UNICEF, as we explore the concept of just transition. Discover how sustainable practices and community-centered approaches can drive equitable solutions for climate resilience and environmental justice.",
    //   imageUrl:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192862/podcast_qpq54k.jpg",
    //   linkText: "View More",
    // },

    // {
    //   category: "Reports",
    //   title:
    //     "Bridging the Gap: Skill Gap Study of Project-Affected Beneficiaries in Mining Regions",
    //   description:
    //     "This comprehensive study explores the skill gaps among project-affected communities in the mining sectors of Odisha, Jharkhand, and Chhattisgarh. It identifies challenges and opportunities to equip beneficiaries with the skills needed for sustainable livelihoods and economic growth.",
    //   imageUrl:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735193655/billy-albert-5lNKe_pE3oA-unsplash_xcpi6h.jpg",
    //   linkText: "View More",
    // },
  ];

  return (
    <div className="bg-red-600 px-10">
      <section className="container mx-auto py-10">
        <Heading text="SPOTLIGHT" color="text-white" bgColor="bg-[white]" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="group ring-1 ring-red-600 flex flex-col justify-between rounded-lg overflow-hidden shadow-2xl hover:ring-white bg-white hover:bg-red-600 transition-all duration-300"
            >
              <div className="p-6 transition-all duration-300 group-hover:bg-red-600">
                <p className="text-2xl font-bold flex justify-start items-center uppercase text-red-600 group-hover:text-white mb-2 transition-all duration-300">
                  {categoryIcons[item.category]}
                  {item.category}
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoCards;
