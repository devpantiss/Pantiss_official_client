import React, { useState, useRef, useEffect } from "react";
import Heading from "../../Common/Heading";

const HelpingSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const items = [
    {
      title: "Skilling",
      description:
        "We have successfully trained over 8,500 candidates in various streams, including the mining industry, dumper operators, plumbers, security guards, and facility management, among others. These skill development initiatives have empowered individuals in Madhya Pradesh to secure sustainable livelihoods, diversify their skills, and contribute meaningfully to their communities, particularly in mining-affected areas.",
    },
    {
      title: "Reclamation",
      description:
        "In our reclamation efforts, we have reclaimed over 300 acres of mining waste land by establishing a Guava plantation. This initiative not only restores ecological balance but also creates new economic opportunities for local communities. The plantation provides a sustainable source of income while mitigating environmental degradation caused by mining activities.",
    },
    {
      title: "Waste Management",
      description:
        "Our waste management initiatives have successfully handled waste management across 15 blocks in 3 districts, improving sanitation and environmental conditions. Additionally, we have trained professionals in facility management, equipping them with the skills needed to maintain and manage waste disposal systems efficiently, ensuring long-term sustainability in waste management practices.",
    },
  ];

  const contentRefs = useRef([]);

  useEffect(() => {
    const calculatedHeights = contentRefs.current.map((ref) =>
      ref ? ref.scrollHeight : 0
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
          <Heading
            text="HOW WE’RE WORKING IN ODISHA"
            color="text-white"
            bgColor="bg-white"
          />
          <p className="text-lg text-white">
            Our response in Odisha focuses on tackling the structural causes of
            extreme conditions in mining-affected areas through health,
            nutrition, and livelihood support.
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
                    height:
                      activeIndex === index ? `${heights[index]}px` : "0px",
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
