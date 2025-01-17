import React from "react";

const ArticleSection2 = () => {
  const articles = [
    {
      title: "Working at 4th Wheel: story of an internship in Covid-19 times",
      description:
        "I arrived in Mumbai in February, ready for a 6-month internship at 4th Wheel and...",
      image:
        "https://the4thwheel.com/wp-content/uploads/2021/06/Working-at-4th-Wheel-story-of-an-internship-in-Covid-19-times-1024x576.jpg.webp",
    },
    {
      title: "Tracing the real value of education – Field work with 4th Wheel",
      description:
        "Participating in fieldwork was very exciting for me. Not only because I got to...",
      image:
        "https://the4thwheel.com/wp-content/uploads/2021/06/Tracing-the-real-value-of-education-%E2%80%93-Field-work-with-4th-Wheel-1024x576.jpg.webp",
    },
    {
      title: "5 Things to Consider when using SROI",
      description:
        "Research considerations while implementing an SROI study in the Indian context...",
      image:
        "https://the4thwheel.com/wp-content/uploads/2021/06/The-4th-Wheel-Experience-%E2%80%93-From-our-intern-1024x576.jpg.webp",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        {/* Articles Section */}
        <div className="flex-1 space-y-6 overflow-auto h-screen">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={article.image}
                alt={article.title}
                className="lg:w-2/4 object-cover"
              />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-gray-600 text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscription Section */}
        <div className="flex-shrink-0 w-full h-full lg:w-1/3 bg-white shadow-md p-6 rounded-lg sticky top-8">
          <h3 className="text-xl font-bold mb-4">Never Miss An Update!</h3>
          <p className="text-gray-600 mb-4">
            Subscribe for regular information on social impact management,
            communication for development, and capacity building.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticleSection2;
