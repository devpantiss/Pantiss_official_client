import React from "react";
import { Link } from "react-router-dom";

const CareersCategory = () => {
  const careerAreas = [
    {
      title: "Professional Support",
      count: 0,
      img: "https://careers.brac.net/category/1.png", // Replace with the actual image URL
    },
    {
      title: "Development Programmes",
      count: 4,
      img: "https://careers.brac.net/category/2.png", // Replace with the actual image URL
    },
    {
      title: "Social Enterprise",
      count: 2,
      img: "https://careers.brac.net/category/3.png", // Replace with the actual image URL
    },
  ];

  return (
    <section className="text-center py-12">
      <h2 className="text-3xl font-bold">WHAT CAREER AREA INTERESTS YOU?</h2>
      <p className="mt-4 text-gray-600">
        Whoever you are, wherever you are, doing good is everyone’s business.
        Discover how you can be a part of that change by choosing a career path
        that interests you the most.
      </p>

      <div className="flex justify-center mt-8 space-x-8">
        {careerAreas.map((area, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center"
          >
            <Link to="#">
              <div className="relative w-64 h-64 overflow-hidden">
                <img
                  src={area.img}
                  alt={area.title}
                  className="w-full h-full shadow-lg rounded-full object-cover"
                />
                <span className="absolute top-4 right-2 bg-red-500 text-white w-10 h-10 flex items-center justify-center z-50 text-sm font-bold rounded-full">
                  {area.count}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{area.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <Link
        to="/careers/jobs"
        className="inline-block mt-8 px-6 py-3 bg-red-500 text-white font-bold rounded-full hover:bg-pink-700"
      >
        VIEW ALL JOBS
      </Link>
    </section>
  );
};

export default CareersCategory;
