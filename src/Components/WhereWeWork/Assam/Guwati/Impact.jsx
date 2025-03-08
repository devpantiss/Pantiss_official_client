import React from "react";
import Heading from "../../../../Components/Common/Heading";

const ImpactGuwahati = () => {
  return (
    <div className="pb-6">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <Heading
          text="OUR IMPACT IN GUWAHATI"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 text-center">
          {/* Stat 1 */}
          <div>
            <h3 className="text-black font-bold text-4xl">10K</h3>
            <p className="text-gray-600 text-sm mt-2">
              individuals certified through RPL Program
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h3 className="text-black font-bold text-4xl">500</h3>
            <p className="text-gray-600 text-sm mt-2">
              hectares of mining land reclaimed
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h3 className="text-black font-bold text-4xl">3.2K</h3>
            <p className="text-gray-600 text-sm mt-2">
              community members benefited from reclamation projects
            </p>
          </div>

          {/* Stat 4 */}
          <div>
            <h3 className="text-black font-bold text-4xl">1.8K</h3>
            <p className="text-gray-600 text-sm mt-2">
              livelihoods supported through agroforestry and green spaces
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactGuwahati;