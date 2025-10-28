import React, { memo, useMemo } from "react";
import Heading from "../../Common/Heading";
import {
  MdEventAvailable,
  MdCampaign,
} from "react-icons/md";
import { FaMicrophoneAlt, FaBlog, FaAward } from "react-icons/fa";
import { SiStorybook } from "react-icons/si";
import { HiNewspaper } from "react-icons/hi2";
import { BiSolidReport } from "react-icons/bi";

// Memoized category icons
const categoryIcons = {
  Events: <MdEventAvailable className="inline-block mr-2 text-xl" />,
  Stories: <SiStorybook className="inline-block mr-2 text-xl" />,
  Campaigns: <MdCampaign className="inline-block mr-2 text-xl" />,
  Podcasts: <FaMicrophoneAlt className="inline-block mr-2 text-xl" />,
  News: <HiNewspaper className="inline-block mr-2 text-xl" />,
  Reports: <BiSolidReport className="inline-block mr-2 text-xl" />,
  Awards: <FaAward className="inline-block mr-2 text-xl" />,
  Blogs: <FaBlog className="inline-block mr-2 text-xl" />,
};

// Memoized news items
const newsItems = [
  {
    category: "Events",
    title: "Pantiss Representation at COP 29: Just Transition for Abandoned Mines in Baku",
    description:
      "Pantiss proudly participated in COP 29 in Baku, Azerbaijan, presenting innovative strategies for a just transition in communities impacted by abandoned mines.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682532/events_2_ffil28.jpg",
    linkText: "View More",
  },
  {
    category: "Stories",
    title: "Empowering Futures: Youth Tribal Dormitories Initiative",
    description:
      "Providing a safe and nurturing environment, the Youth Tribal Dormitories initiative supports education and skill development for tribal youth.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682551/tribal_Youth_dormitories_my8hdo.jpg",
    linkText: "View More",
  },
  {
    category: "News",
    title: "Inauguration of Mining Skill Development Program in T. Rampur",
    description:
      "The Mining Skill Development Program was successfully inaugurated in T. Rampur, empowering local youth with industry-relevant skills.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682541/news_kbx9xy.jpg",
    linkText: "View More",
  },
  {
    category: "Awards",
    title: "Listed on India Book of Records for Largest Hand Washing at one Place",
    description:
      "Recognized by the India Book of Records for organizing the largest handwashing event at a single location, promoting hygiene awareness.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682521/Awards_stpf2y.jpg",
    linkText: "View More",
  },
  {
    category: "Blogs",
    title: "Breaking Barriers: Empowering Tribal Women Miners in Sukinda",
    description:
      "In the heart of the Sukinda Chromite region, tribal women are redefining the mining industry through skill-building and empowerment.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682527/blogs_ykinl0.jpg",
    linkText: "View More",
  },
  {
    category: "Campaigns",
    title: "Skill on Wheels: Driving Hi-Tech Mining in the Eastern Ghats",
    description:
      "The 'Skill on Wheels' campaign empowers rural communities with mobile training units, bridging technology and opportunity in the Eastern Ghats.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761683113/WhatsApp_Image_2024-12-26_at_11.39.49_AM_rxsswk.jpg",
    linkText: "View More",
  },
  {
    category: "Podcasts",
    title: "Just Transition: A Conversation with Shipra Saxena",
    description:
      "An insightful podcast with Shipra Saxena, exploring just transition and sustainable practices for climate resilience and environmental justice.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761682546/podcast_orimnz.jpg",
    linkText: "View More",
  },
  {
    category: "Reports",
    title: "Bridging the Gap: Skill Gap Study of Project-Affected Beneficiaries",
    description:
      "A study exploring skill gaps in mining-affected communities of Odisha, Jharkhand, and Chhattisgarh, identifying opportunities for growth.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761683001/billy-albert-5lNKe_pE3oA-unsplash_efftes.jpg",
    linkText: "View More",
  },
];

// Memoized NewsCard component
const NewsCard = memo(({ item }) => (
  <div className="group ring-1 ring-red-600 flex flex-col justify-between rounded-lg overflow-hidden shadow-2xl hover:ring-white bg-white hover:bg-red-600 transition-all duration-300">
    <div className="p-6 transition-all duration-300 group-hover:bg-red-600">
      <p className="text-2xl font-bold flex justify-start items-center uppercase text-red-600 group-hover:text-white mb-2 transition-all duration-300">
        {categoryIcons[item.category]}
        {item.category}
      </p>
      <h2 className="text-lg font-semibold mb-4 text-red-600 group-hover:text-white transition-all duration-300">
        {item.title}
      </h2>
      <p className="text-gray-700 group-hover:text-white mb-6 line-clamp-3 transition-all duration-300">
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
));
NewsCard.displayName = "NewsCard";

const Highlights = () => {
  // Memoized news items array
  const newsList = useMemo(() => newsItems, []);

  return (
    <div className="bg-red-600 px-4 sm:px-10">
      <section className="container mx-auto py-10">
        <div className="flex justify-center mb-8">
          <Heading text="SPOTLIGHT" color="text-white" bgColor="bg-white" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8">
          {newsList.map((item, index) => (
            <NewsCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Highlights);