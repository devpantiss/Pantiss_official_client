import React from "react";
import Heading from "../Common/Heading";

const PopularSection = () => {
  const items = [
    {
      title: "Local Crowdsourcing Campaigns is the future",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/1-1.png.webp", // Replace with actual image URL
    },
    {
      title: "Capacity Development for Improved Service Delivery",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/2-1.png.webp", // Replace with actual image URL
    },
    {
      title: "How Anthropology Can Contribute to M&E",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/3-1.png.webp", // Replace with actual image URL
    },
    {
      title: "Process Documentation – The How and Why!",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/4.png.webp", // Replace with actual image URL
    },
    {
      title: "Outlining the future of monitoring and evaluation",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/5.png.webp", // Replace with actual image URL
    },
    {
      title: "Tracing the impact of life skills programs on youth",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/6.png.webp", // Replace with actual image URL
    },
    {
      title: "Increased social spending and strong M&E systems",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/7.png.webp", // Replace with actual image URL
    },
    {
      title: "Multi-disciplinary approach to solve big development problems",
      image: "https://the4thwheel.com/wp-content/uploads/2021/06/9.png.webp", // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-white py-8 px-6">
      <div className="container mx-auto">
      <Heading text="IMPACT" color="text-black" bgColor="bg-red-500" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 ring-2 ring-red-600 bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-22 h-22 object-cover rounded-full"
              />
              <p className="text-gray-700 text-center text-xl lg:2xl font-bold">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
