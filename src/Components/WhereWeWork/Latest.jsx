import React from "react";
import Heading from "../Common/Heading";

const Latest = () => {
  const articles = [
    {
      date: "December 15, 2024",
      title: "Development risks need urgent reimagining: Asif Saleh",
      image:
        "https://blog.brac.net/wp-content/uploads/2024/12/urgent-reimagining-fet-600x400.jpg",
    },
    {
      date: "December 02, 2024",
      title: "Fighting the white curse: Growing crops in salty soil",
      image:
        "https://blog.brac.net/wp-content/uploads/2024/11/white-curse-fet-600x400.jpg",
    },
    {
      date: "November 23, 2024",
      title:
        "Heat poverty: Field notes from a slum during the hottest year on record",
      image:
        "https://blog.brac.net/wp-content/uploads/2024/11/heatwave-fet-600x400.jpg",
    },
    {
      date: "November 20, 2024",
      title:
        "How are people adapting to survive at the climate frontlines? On the ground with Asif Saleh",
      image: "https://brac.net/images/news/2023/climate-frontlines.jpg",
    },
    {
      date: "November 6, 2024",
      title: "Story of Monowara Begum",
      image: "https://brac.net/images/news/2023/monowara-business.jpg",
    },
    {
      date: "October 12, 2023",
      title: "BRAC SDG Contribution Voluntary Review 2023",
      image: "https://brac.net/images/news/2023/brac-sdg.jpg",
    },
    {
      date: "December 18, 2024",
      title:
        "Youth festival to celebrate youth empowerment and collective action",
      image: "https://brac.net/images/news/2024/RHRN-youth-festival-home.jpg",
    },
    {
      date: "December 15, 2024",
      title: "16 journalists honoured with 9th Migration Media Award",
      image:
        "https://brac.net/images/news/2024/Migration-Media-Award-Winners-home.jpg",
    },
    {
      date: "December 14, 2024",
      title: "National dialogue: Reform pathways for health sector",
      image: "https://brac.net/images/news/2024/UHC-Day-2024-home.jpg",
    },
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
