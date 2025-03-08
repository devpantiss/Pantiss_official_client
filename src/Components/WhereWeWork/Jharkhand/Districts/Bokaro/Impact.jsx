import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactBokaro = () => {
  return (
    <div className="pb-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN BOKARO"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-black font-bold text-4xl">6K</h3>
            <p className="text-gray-600 text-sm mt-2">
              mining vehicle operators trained and certified
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-black font-bold text-4xl">3</h3>
            <p className="text-gray-600 text-sm mt-2">
              plastic waste recycling plants constructed
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-black font-bold text-4xl">5K</h3>
            <p className="text-gray-600 text-sm mt-2">
              jobs created through training and recycling initiatives
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-black font-bold text-4xl">10K</h3>
            <p className="text-gray-600 text-sm mt-2">
              tons of plastic waste recycled annually
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactBokaro;