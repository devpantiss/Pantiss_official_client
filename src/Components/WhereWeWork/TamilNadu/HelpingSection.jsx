import React, { useState, useRef, useEffect } from "react";
import Heading from "../../Common/Heading";

const HelpingSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const items = [
    {
      title: "Emergency response",
      description:
        "During times of crisis, our emergency response initiatives provide immediate relief to those affected. This includes distributing essential supplies like food, water, and medical aid to communities facing natural disasters, conflicts, or other emergencies. By acting swiftly, we aim to save lives and reduce suffering while setting the stage for longer-term recovery efforts.",
    },
    {
      title: "Healthcare",
      description:
        "Our healthcare initiatives focus on improving access to essential medical services for underprivileged communities. From maternal and child health programs to combating malnutrition and diseases, we work with local healthcare providers to strengthen systems and deliver quality care. Education and awareness campaigns also play a vital role in promoting better health practices.",
    },
    {
      title: "Livelihoods & food security",
      description:
        "Sustainable livelihoods and food security are at the heart of our development efforts. We support vulnerable communities by providing agricultural training, access to resources, and livelihood programs to ensure long-term resilience. These initiatives empower individuals and families to break the cycle of poverty and achieve self-sufficiency.",
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