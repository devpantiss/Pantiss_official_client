import React from "react";
import Heading from "../Common/Heading";

const articles = [
  {
    title: "Our rationale on developing communication collateral",
    date: "April 29, 2020",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2020/05/Our-rationale-on-developing-communication-collateral.jpg.webp", // Replace with actual image URL
  },
  {
    title: "How to make your annual reports more interesting",
    date: "April 16, 2018",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2020/05/How-to-make-your-annual-reports-more-interesting.jpg.webp", // Replace with actual image URL
  },
  {
    title: "3 ways to make your research more participatory",
    date: "February 21, 2018",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2020/05/3-ways-to-make-your-research-more-participatory.jpg.webp", // Replace with actual image URL
  },
];

const CommunicationDevelopment = () => {
  return (
    <section className="bg-white py-8 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-6">
          <Heading
            text="COMMUNICATION FOR DEVELOPMENT"
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

export default CommunicationDevelopment;
