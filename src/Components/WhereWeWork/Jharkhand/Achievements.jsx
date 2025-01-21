import React from "react";
import Heading from "../../Common/Heading";

const Achievements = () => {
  const achievements = [
    {
      number: "1",
      title: "Skilling in Iron & Steel and Mining Industries",
      description:
        "In Bokaro, we successfully trained 1,000 workers in the iron & steel and mining industries, equipping them with the skills required for equipment operation, safety protocols, and sustainable practices, in partnership with DMFT and TATA Steel mining.",
    },
    {
      number: "2",
      title: "Waste Segregation Plant and Training",
      description:
        "In Koderma, a waste segregation plant was set up, catering to five blocks. Additionally, 500 workers were trained in waste segregation techniques, contributing to environmental sustainability and employment generation, in partnership with DMFT.",
    },
    {
      number: "3",
      title: "Mining Workforce Development",
      description:
        "Over 3,000 workers were trained in advanced mining techniques and safety measures, empowering them to secure employment and improve productivity in mining-affected regions across Jharkhand, in partnership with NSDC and Ministry of Mines.",
    },
  ];

  return (
    <div className="bg-gray-100 container mx-auto py-12 px-6">
      <Heading
        text="LATEST ACHIEVEMENTS"
        color="text-black"
        bgColor="bg-red-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <div
            key={achievement.number}
            className="relative bg-white border border-gray-300 rounded-lg shadow-sm p-6"
          >
            <div className="absolute -top-4 -left-4 bg-red-600 text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full border-4 border-white">
              {achievement.number}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {achievement.title}
            </h3>
            <p className="text-sm text-gray-600">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;