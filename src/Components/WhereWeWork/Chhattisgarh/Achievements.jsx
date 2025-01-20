import React from "react";
import Heading from "../../Common/Heading";

const Achievements = () => {
  const achievements = [
    {
      number: "1",
      title: "Cash transfers",
      description:
        "In 2023, Concern provided cash transfers to over 950 families, allowing them to meet their nutritional needs during both bouts of displacement and the lean season between harvests.",
    },
    {
      number: "2",
      title: "Healthcare",
      description:
        "As part of a new project aimed at managing malnutrition in two districts, we’ve trained over 250 healthcare workers on managing acute malnutrition and feeding for infants and young children. These new skills are being put to use in over 50 healthcare facilities.",
    },
    {
      number: "3",
      title: "Emergency response",
      description:
        "Concern responded to three complex emergencies in Burkina Faso in 2023, reaching over 133,600 people with essential supplies, healthcare and financial support, and activities centred on water, sanitation, and hygiene (WASH) needs.",
    },
  ];

  return (
    <div className="bg-gray-100 container mx-auto py-12 px-6">
      <Heading text="LATEST ACHIEVEMENTS" color="text-black" bgColor="bg-red-600" />
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
