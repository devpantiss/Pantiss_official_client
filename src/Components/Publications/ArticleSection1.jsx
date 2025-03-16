import React from "react";
import Heading from "../Common/Heading";

const featuredArticle = {
  title:
    "What is the difference between Theory of Change and Logical Framework?",
  description:
    "Learn about the difference between the two most commonly used Monitoring and Evaluation frameworks.",
  imageUrl:
    "https://the4thwheel.com/wp-content/uploads/2021/06/What-is-the-difference-between-Theory-of-Change-and-Logical-Framework-2.jpg.webp", // Replace with actual image URL
};

const sideArticles = [
  {
    title:
      "Using visual tools and data analytics to track progress and undertake course corrective actions",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2021/06/Using-visual-tools-and-data-analytics-to-track-progress-and-undertake-course-corrective-actions-1024x576.jpg.webp", // Replace with actual image URL
  },
  {
    title:
      "Community-based research for participatory and inclusive program implementation",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2021/06/Community-based-research-for-participatory-and-inclusive-program-implementation-1024x576.jpg.webp", // Replace with actual image URL
  },
  {
    title: "5 Things to Consider when using SROI",
    imageUrl:
      "https://the4thwheel.com/wp-content/uploads/2021/06/5-Things-to-Consider-when-using-SROI-1024x576.jpg.webp", // Replace with actual image URL
  },
];

const ArticleSection1 = () => {
  return (
    <section className="bg-red-600 py-8 px-6">
      <div className="container mx-auto">
        <Heading text="NEWS" color="text-white" bgColor="bg-white" />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Featured Article */}
          <div className="lg:w-1/2 flex flex-col ring-2 ring-white bg-white rounded-md">
            <img
              src={featuredArticle.imageUrl}
              alt={featuredArticle.title}
              className="w-full h-full object-cover rounded-md"
            />
            <div className="mt-4 p-4">
              <h2 className="text-xl text-red-600 font-semibold">{featuredArticle.title}</h2>
              <p className="text-gray-800 mt-2">
                {featuredArticle.description}
              </p>
            </div>
          </div>

          {/* Side Articles */}
          <div className="lg:w-1/2 flex flex-col gap-4 ">
            {sideArticles.map((article, index) => (
              <div
                key={index}
                className="flex lg:flex-row flex-col gap-4 ring-2 bg-white ring-white rounded-md items-start"
              >
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="h-full w-full lg:w-[300px] object-cover rounded-md"
                />
                <div className="p-2">
                <h3 className="text-md text-red-600 font-semibold">{article.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection1;
