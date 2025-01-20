import React, { useState, useRef, useEffect } from "react";
import Heading from "../../Common/Heading";

const HelpingSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const items = [
    {
      title: "Mining Skilling Programs",
      description:
        "In Jharkhand, we have launched skilling programs aimed at equipping individuals with the necessary expertise in mining operations, safety protocols, and alternative livelihood options. Over 1,000 youths have been trained to increase employment opportunities and foster community resilience.",
    },
    {
      title: "Waste Recycling Initiatives",
      description:
        "Our waste recycling initiatives in Jharkhand focus on setting up efficient recycling plants to manage industrial and domestic waste. These plants not only promote environmental sustainability but also provide jobs for over 500 local residents, contributing to the region's economic growth.",
    },
    {
      title: "Community-Based Development",
      description:
        "Community-based projects in Jharkhand emphasize access to clean drinking water, healthcare, and education. With our initiatives, over 3,500 households have been provided with improved water sources, while health and education programs are empowering families to achieve long-term self-sufficiency.",
    },
  ];


  const contentRefs = useRef([]);

  useEffect(() => {
    const calculatedHeights = contentRefs.current.map(
      (ref) => (ref ? ref.scrollHeight : 0)
    );
    setHeights(calculatedHeights);
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-red-600 text-black py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start px-6">
        {/* Left Section */}
        <div className="md:w-1/2">
          <Heading text="HOW WE’RE WORKING IN ODISHA" color="text-white" bgColor="bg-white" />
          <p className="text-lg text-white">
            Our response in Odisha focuses on tackling the structural causes of extreme conditions in mining-affected areas through health, nutrition, and livelihood support.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="border-b border-white pb-4">
                {/* Accordion Header */}
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center">
                    {/* Plus/Minus Icon */}
                    <div className="flex-shrink-0 w-12 h-12 border-[4px] border-white rounded-full flex items-center justify-center transition-colors duration-300">
                      <span className="text-white text-xl font-bold">
                        {activeIndex === index ? "-" : "+"}
                      </span>
                    </div>

                    {/* Title */}
                    <p className="ml-4 text-lg text-white">{item.title}</p>
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  style={{
                    height: activeIndex === index ? `${heights[index]}px` : "0px",
                  }}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                >
                  <div className="mt-2 pl-12 text-white text-sm">
                    {item.description}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HelpingSection;