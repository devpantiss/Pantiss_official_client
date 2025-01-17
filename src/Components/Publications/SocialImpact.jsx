import React from "react";
import Heading from "../Common/Heading";

const articles = [
  {
    title: "Theory of Change: From Design to Strategy - Virtual Training",
    date: "August 9, 2022",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2022/08/4-1536x768.jpg.webp", // Replace with actual image URL
  },
  {
    title: "What is Social Impact Management?",
    date: "March 19, 2021",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2021/06/What-is-Social-Impact-Management-1024x576-1.jpg.webp", // Replace with actual image URL
  },
  {
    title: "Why is Social Impact Assessment Important in India?",
    date: "March 29, 2021",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2021/06/Why-is-Social-Impact-Assessment-Important-in-India-1024x576-1.jpg.webp", // Replace with actual image URL
  },
];

const SocialImpact = () => {
  return (
    <section className="bg-white py-8 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
        <Heading text="SOCIAL IMPACT MANAGEMENT" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white border rounded-md shadow-md overflow-hidden"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 lg:h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-500 text-sm">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
