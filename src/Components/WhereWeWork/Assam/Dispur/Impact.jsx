import React from "react";
import Heading from "../../../../Components/Common/Heading";

const ImpactDispur = () => {
  return (
    <div className="pb-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN DISPUR DISTRICT"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-black font-bold text-4xl">12K</h3>
            <p className="text-gray-600 text-sm mt-2">
              individuals trained through skilling programs
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-black font-bold text-4xl">8.5K</h3>
            <p className="text-gray-600 text-sm mt-2">
              community members rehabilitated and resettled
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-black font-bold text-4xl">15K</h3>
            <p className="text-gray-600 text-sm mt-2">
              people benefited from nutrition and well-being initiatives
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-black font-bold text-4xl">2.1K</h3>
            <p className="text-gray-600 text-sm mt-2">
              households provided with clean water and healthcare access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactDispur;