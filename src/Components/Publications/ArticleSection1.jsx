import React, { useState, useEffect } from "react";
import Heading from "../Common/Heading";
import { motion, AnimatePresence } from "framer-motion";

const articles = [
  {
    title:
      "What is the difference between Theory of Change and Logical Framework?",
    description:
      "Learn about the difference between the two most commonly used Monitoring and Evaluation frameworks.",
    imageUrl: "/News/logic.jpg",
    date: "March 2026",
  },
  {
    title:
      "Using visual tools and data analytics to track progress and undertake course corrective actions",
    imageUrl: "/News/analytics.jpg",
    date: "Feb 2026",
  },
  {
    title:
      "Community-based research for participatory and inclusive program implementation",
    imageUrl: "/News/inclusivity.jpg",
    date: "Jan 2026",
  },
  {
    title: "5 Things to Consider when using SROI",
    imageUrl: "/News/sroi.jpg",
    date: "Dec 2025",
  },
];

const ArticleSection1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeArticle = articles[activeIndex];

  return (
    <section className="bg-red-600 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-12">
          <Heading text="NEWS" color="text-white" bgColor="bg-white" />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* LEFT — ACTIVE ARTICLE */}
          <div className="lg:w-1/2 relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={activeArticle.imageUrl}
                  alt={activeArticle.title}
                  className="w-full h-[440px] object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white">

                  <span className="text-xs uppercase tracking-wide text-white/70">
                    Featured Insight • {activeArticle.date}
                  </span>

                  <h2 className="text-2xl md:text-3xl font-bold mt-2 leading-snug">
                    {activeArticle.title}
                  </h2>

                  {activeArticle.description && (
                    <p className="text-white/80 mt-3 text-sm md:text-base">
                      {activeArticle.description}
                    </p>
                  )}
                </div>

                {/* Progress bar */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-red-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />

              </motion.div>
            </AnimatePresence>

          </div>

          {/* RIGHT — VERTICAL LIST */}
          <div className="lg:w-1/2 flex flex-col gap-5">

            {articles.map((article, index) => {

              const isActive = index === activeIndex;

              if (isActive) return null;

              return (
                <motion.div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`
                    flex gap-4
                    rounded-xl
                    overflow-hidden
                    cursor-pointer
                    backdrop-blur-md
                    bg-white/95
                    shadow-lg
                    transition
                  `}
                >
                  {/* Image */}
                  <div className="w-[170px] h-[120px] overflow-hidden">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col justify-center">

                    <span className="text-xs text-red-600 font-semibold uppercase tracking-wide">
                      Insight • {article.date}
                    </span>

                    <h3 className="text-sm font-semibold text-gray-900 mt-1 leading-snug">
                      {article.title}
                    </h3>

                  </div>
                </motion.div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default ArticleSection1;