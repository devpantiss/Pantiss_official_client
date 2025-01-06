import React, { useState, useRef } from "react";

const InternshipAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const steps = [
    {
      title: "Online Application",
      description:
        "Look through our job openings and submit an online application, including a CV which details your academic background and professional experience.",
    },
    {
      title: "Written Exam",
      description: "Complete a written exam to showcase your skills and knowledge.",
    },
    {
      title: "Preliminary Interview",
      description: "Participate in an initial interview to discuss your background and aspirations.",
    },
    {
      title: "Assessment Center",
      description: "Engage in group exercises and tasks to demonstrate your capabilities.",
    },
    {
      title: "Field Exposure",
      description: "Gain real-world exposure to our work environment and culture.",
    },
    {
      title: "Presentation and Final Interview",
      description: "Deliver a presentation and participate in the final interview stage.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-8 py-12 lg:py-16">
      <h2 className="text-4xl font-bold text-center mb-8">APPLICATION PROCESS</h2>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-100 transition-all duration-200"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center gap-x-4">
                <span
                  className={`text-white w-6 h-6 flex items-center justify-center rounded-full bg-red-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45 bg-red-400" : ""
                  }`}
                >
                  +
                </span>
                {step.title}
              </div>
            </button>
            <div
              ref={(el) => (contentRefs.current[index] = el)}
              className="transition-all duration-500 ease-in-out"
              style={{
                maxHeight:
                  activeIndex === index
                    ? contentRefs.current[index]?.scrollHeight + "px"
                    : "0px",
                overflow: "hidden",
              }}
            >
              <div className="px-6 py-4 text-gray-600 bg-gray-50">
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InternshipAccordion;
