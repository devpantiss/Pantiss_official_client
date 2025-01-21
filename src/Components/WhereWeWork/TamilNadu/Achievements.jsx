import React from "react";
import Heading from "../../Common/Heading";

const Achievements = () => {
  const achievement = {
    number: "1",
    title: "Mining Training Success",
    description:
      "In collaboration with NLCIL, we have successfully trained 1,000 workers in mining operations, safety protocols, and equipment handling. This initiative has empowered local communities and enhanced workforce readiness in the mining sector.",
  };

  return (
    <div className="bg-gray-100 container mx-auto py-12 px-6">
      <Heading text="LATEST ACHIEVEMENT" color="text-black" bgColor="bg-red-600" />
      <div className="grid grid-cols-1 gap-6">
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
      </div>
    </div>
  );
};

export default Achievements;
