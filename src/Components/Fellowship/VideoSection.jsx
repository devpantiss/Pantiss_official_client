import React from "react";
import { RiLightbulbFlashFill, RiCommunityFill } from "react-icons/ri";
import { BiChalkboard, BiBook, BiUserCheck } from "react-icons/bi";
import { MdHandshake, MdOutlineWorkspacePremium, MdPublic, MdTrendingUp } from "react-icons/md";

const VideoSection = () => {
  const reasons = [
    {
      id: 1,
      title: "Gain Industry Expertise",
      description:
        "Develop a deep understanding of the mining sector and its challenges through expert-led sessions.",
      icon: <RiLightbulbFlashFill className="text-white text-4xl" />,
    },
    {
      id: 2,
      title: "Hands-On Training",
      description:
        "Participate in real-world projects and practical workshops to gain actionable skills.",
      icon: <BiChalkboard className="text-white text-4xl" />,
    },
    {
      id: 3,
      title: "Connect with Leaders",
      description:
        "Network with industry pioneers, policymakers, and sustainability experts shaping the future of mining.",
      icon: <MdHandshake className="text-white text-4xl" />,
    },
    {
      id: 4,
      title: "Foster Sustainable Solutions",
      description:
        "Learn how to integrate sustainable practices into mining operations for long-term impact.",
      icon: <MdPublic className="text-white text-4xl" />,
    },
    {
      id: 5,
      title: "Mentorship from Experts",
      description:
        "Get personalized mentorship from experienced professionals guiding you in your career growth.",
      icon: <MdOutlineWorkspacePremium className="text-white text-4xl" />,
    },
    {
      id: 6,
      title: "Access Exclusive Resources",
      description:
        "Benefit from research papers, case studies, and tools curated for mining and sustainability.",
      icon: <BiBook className="text-white text-4xl" />,
    },
    {
      id: 7,
      title: "Develop Leadership Skills",
      description:
        "Enhance your ability to lead and drive positive changes within the mining industry.",
      icon: <BiUserCheck className="text-white text-4xl" />,
    },
    {
      id: 8,
      title: "Drive Social Impact",
      description:
        "Contribute to mining-affected communities and create meaningful change in livelihoods.",
      icon: <RiCommunityFill className="text-white text-4xl" />,
    },
    {
      id: 9,
      title: "Be a Catalyst for Change",
      description:
        "Join a network of like-minded professionals striving to transform the mining sector.",
      icon: <MdTrendingUp className="text-white text-4xl" />,
    },
  ];

  return (
    <section className="bg-red-500 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Why Join the Pantiss Mining Fellowship?
        </h2>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Empower yourself with a fellowship that provides the skills and vision
          to transform the mining sector while promoting sustainable practices
          for a better tomorrow.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-transparent ring-white ring-2 text-red-600 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white text-red-600 rounded-full font-bold text-lg mb-4">
              {reason.id}
            </div>
            {reason.icon}
            <h3 className="font-semibold text-white text-lg mt-3">{reason.title}</h3>
            <p className="mt-2 text-gray-100">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoSection;
