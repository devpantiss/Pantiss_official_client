import React from "react";
import Heading from "../Common/Heading";

const articles = [
  {
    title: "Proceedings of design-thinking workshop on SDG 17",
    date: "March 31, 2017",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2020/05/Proceedings-of-design-thinking-workshop-on-SDG-17.jpg.webp", // Replace with actual image URL
  },
  {
    title: "Proceedings of Storytelling for Evaluation Workshop",
    date: "September 29, 2017",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2020/05/Proceedings-of-Storytelling-for-Evaluation-Workshop.jpg.webp", // Replace with actual image URL
  },
  {
    title: "SROI Webinar Resources",
    date: "June 30, 2020",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2020/06/SROI-Webinar-Resources-1024x576-1.jpg.webp", // Replace with actual image URL
  },
];

const CapacityDevelopment = () => {
  return (
    <section className="bg-white py-8 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <Heading
            text="CAPACITY DEVELOPMENT"
            color="text-black"
            bgColor="bg-red-500"
          />
        </div>

        {/* Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 lg:h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium">{article.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{article.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapacityDevelopment;
