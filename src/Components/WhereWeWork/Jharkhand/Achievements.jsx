import React from "react";
import Heading from "../../Common/Heading";

const Achievements = () => {
  const achievements = [
    {
      number: "1",
      title: "Mining Skilling Programs",
      description:
        "In 2023, over 1,200 individuals in Jharkhand were trained in mining safety, equipment operation, and alternative livelihoods under skilling programs aimed at empowering youth and reducing unemployment in mining-affected areas.",
    },
    {
      number: "2",
      title: "Waste Recycling Plants",
      description:
        "Two waste recycling plants were established in key districts of Jharkhand, providing employment to over 500 locals while effectively managing industrial and domestic waste to promote environmental sustainability.",
    },
    {
      number: "3",
      title: "Community Development",
      description:
        "Through targeted community initiatives, over 3,000 households gained access to clean drinking water and healthcare services. Educational programs were launched to improve literacy rates in rural mining-affected regions.",
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
