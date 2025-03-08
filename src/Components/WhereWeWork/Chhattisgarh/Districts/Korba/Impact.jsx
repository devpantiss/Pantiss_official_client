import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactKorba = () => {
  return (
    <div className="pb-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN KORBA"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-black font-bold text-4xl">5K</h3>
            <p className="text-gray-600 text-sm mt-2">
              excavator operators trained and certified
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-black font-bold text-4xl">7K</h3>
            <p className="text-gray-600 text-sm mt-2">
              workers certified through RPL Program
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-black font-bold text-4xl">10K</h3>
            <p className="text-gray-600 text-sm mt-2">
              individuals employed in mining and industrial sectors
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-black font-bold text-4xl">15K</h3>
            <p className="text-gray-600 text-sm mt-2">
              community members impacted through workforce development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactKorba;