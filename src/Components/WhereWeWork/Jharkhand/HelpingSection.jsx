import React, { useState, useRef, useEffect } from "react";
import Heading from "../../Common/Heading";

const HelpingSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const items = [
    {
      title: "Skilling in Iron & Steel and Mining Industries",
      description:
        "In Bokaro, we have successfully trained over 1,000 workers in the iron & steel and mining industries. These programs focus on equipment operation, safety protocols, and sustainable practices, empowering youth and addressing unemployment in mining-affected areas.",
    },
    {
      title: "Waste Segregation Plant and Training",
      description:
        "In Koderma, we established a waste segregation plant catering to five blocks and trained 500 workers in waste segregation techniques. This initiative not only promotes environmental sustainability but also generates employment opportunities for the local population.",
    },
    {
      title: "Advanced Mining Workforce Development",
      description:
        "Across Jharkhand, we trained over 3,000 workers in advanced mining techniques and safety measures. This effort has significantly improved employability, enhanced productivity, and empowered communities in mining-affected regions.",
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
          <Heading text="HOW WE’RE WORKING IN JHARKHAND" color="text-white" bgColor="bg-white" />
          <p className="text-lg text-white">
            In Jharkhand, our focus is on addressing challenges faced by mining-affected regions. We are actively working on skilling, waste management, and community empowerment to ensure sustainable development.
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
