import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactSundargarh = () => {
  return (
    <div className="pb-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN SUNDARGARH"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-black font-bold text-4xl">5K</h3>
            <p className="text-gray-600 text-sm mt-2">
              electricians trained and certified
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-black font-bold text-4xl">4K</h3>
            <p className="text-gray-600 text-sm mt-2">
              mining vehicle operators trained and certified
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-black font-bold text-4xl">400</h3>
            <p className="text-gray-600 text-sm mt-2">
              hectares of mining land reclaimed with mango orchards
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-black font-bold text-4xl">10K</h3>
            <p className="text-gray-600 text-sm mt-2">
              livelihoods supported through skilling and reclamation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactSundargarh;