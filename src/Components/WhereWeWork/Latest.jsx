import React from "react";
import Heading from "../Common/Heading";

const Latest = () => {
  const articles = [
    {
      date: "January 25, 2025",
      title: "Empowering Youth: Skilling Initiatives in Mining Regions",
      image:
        "https://example.com/images/skilling-mining-youth.jpg",
    },
    {
      date: "January 10, 2025",
      title: "Women in Mining: Training for Sustainable Livelihoods",
      image:
        "https://example.com/images/women-skilling-mining.jpg",
    },
    {
      date: "December 20, 2024",
      title: "Alternative Livelihoods: Upskilling for a Greener Future",
      image:
        "https://example.com/images/alternative-livelihoods.jpg",
    },
    {
      date: "December 15, 2024",
      title: "Technical Training for Miners: A Pathway to Safer Jobs",
      image:
        "https://example.com/images/miner-technical-training.jpg",
    },
    {
      date: "December 5, 2024",
      title: "Digital Literacy for Mining-Affected Communities",
      image: "https://example.com/images/digital-literacy.jpg",
    },
    {
      date: "November 28, 2024",
      title: "Skill Development Centres: Bridging the Employment Gap",
      image: "https://example.com/images/skill-centre.jpg",
    },
    {
      date: "November 18, 2024",
      title: "Entrepreneurship Training for Mining-Affected Families",
      image: "https://example.com/images/entrepreneurship-training.jpg",
    },
    {
      date: "November 10, 2024",
      title: "Green Jobs Training: Shifting Away from Mining Dependence",
      image:
        "https://example.com/images/green-jobs-training.jpg",
    },
    {
      date: "February 5, 2025",
      title: "Mining Skilling Initiatives in Kandhamal: A Path to Economic Growth",
      image: "https://example.com/images/kandhamal-skilling.jpg",
    },
    {
      date: "February 10, 2025",
      title: "Rehabilitation and Resettlement Efforts in T Rampur",
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738994534/diverse-people-refugee-camps_uuu6by.jpg",
    }
  ];

  return (
    <div className="bg-white py-10 px-6">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center">
          <Heading text="Latest" color="text-black" bgColor="bg-red-500" />{" "}
          {/* <h2 className="text-2xl font-bold text-gray-800">LATEST</h2>
        <div className="h-1 w-16 bg-pink-500 mx-auto mt-2"></div> */}
        </div>

        {/* Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-16">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border shadow-md rounded-lg overflow-hidden group hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-4xl">▶</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="text-base font-semibold text-gray-800 mt-2">
                  {article.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-pink-600 transition-colors">
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Latest;
