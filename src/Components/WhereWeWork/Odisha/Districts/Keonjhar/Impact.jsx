import React from "react";
import Heading from "../../../../Common/Heading";

const ImpactKeonjhar = () => {
  return (
    <div className="pb-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN KEONJHAR"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-black font-bold text-4xl">5K</h3>
            <p className="text-gray-600 text-sm mt-2">
              individuals trained in facility management
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-black font-bold text-4xl">7K</h3>
            <p className="text-gray-600 text-sm mt-2">
              farmers certified through Agricultural RPL Program
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-black font-bold text-4xl">9K</h3>
            <p className="text-gray-600 text-sm mt-2">
              livelihoods improved through skilling and certification
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-black font-bold text-4xl">12K</h3>
            <p className="text-gray-600 text-sm mt-2">
              community members benefited from enhanced infrastructure and agriculture
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactKeonjhar;