import React from "react";
import Heading from "../Common/Heading";

const Expertise = () => {
  const expertiseItems = [
    {
      number: 1,
      title: "Sustainable, tech-driven solutions to poverty delivered by front-line workers.",
    },
    {
      number: 2,
      title: "Strategic partnerships to bring about sustainable change.",
    },
    {
      number: 3,
      title: "Collaborative design considering the preferences of poor, rural women and their households.",
    },
    {
      number: 4,
      title: "The business case for serving poor and hard-to-reach populations.",
    },
    {
      number: 5,
      title: "Research to deliver evidence-based results and impact.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        {/* Title */}
        <Heading text="OUR EXPERTISE" color="text-black" bgColor="bg-red-600" />

        {/* Expertise Items */}
        <div className="grid grid-cols-2 lg:grid-cols-5 justify-center gap-12">
          {expertiseItems.map((item) => (
            <div key={item.number} className="flex flex-col items-center max-w-xs">
              {/* Numbered Circle */}
              <div className="bg-red-600 rounded-full w-32 h-32 flex items-center justify-center mb-4">
                <span className="text-white text-6xl font-bold">{item.number}</span>
              </div>
              {/* Description */}
              <p className="text-black text-xl leading-relaxed text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;