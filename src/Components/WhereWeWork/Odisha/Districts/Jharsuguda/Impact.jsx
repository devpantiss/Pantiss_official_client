import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactJharsuguda = () => {
  return (
    <div className="pb-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN JHARSUGUDA"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-black font-bold text-4xl">17M</h3>
            <p className="text-gray-600 text-sm mt-2">people reached</p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-black font-bold text-4xl">29.3K</h3>
            <p className="text-gray-600 text-sm mt-2">
              learners accessed community-based education
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-black font-bold text-4xl">7.5K</h3>
            <p className="text-gray-600 text-sm mt-2">
              MSMEs received technical and financial support
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-black font-bold text-4xl">3.4K</h3>
            <p className="text-gray-600 text-sm mt-2">
              solar panels provided to health facilities, mosques, MSMEs and
              households
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactJharsuguda;
