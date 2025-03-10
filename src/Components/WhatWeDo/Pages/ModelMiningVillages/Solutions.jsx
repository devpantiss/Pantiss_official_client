import React from "react";
import Heading from "../../../Common/Heading";

const Solutions = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <Heading
          text="PANTISS SOLUTIONS"
          color="text-gray-800"
          bgColor="bg-red-600"
        />

        {/* Two-Column Layout */}
        <div className="flex flex-col gap-8">
          {/* Left Column: FarmGrow Plans */}
          <div className="w-full flex flex-row gap-x-6 mb-6">
            {/* Image */}
            <div className="mb-4 w-1/2">
              <img
                src="https://grameenfoundation.org/images/_918x706_crop_center-center_none/MG_8679_Selasse_RGB_b.jpg"
                alt="Farmers working with cocoa beans"
                className="w-full h-[450px] object-cover rounded-md"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400"; // Fallback image
                }}
              />
            </div>

            <div className="w-1/2">
              {/* Logo */}
              <div className="mb-2 flex justify-center items-center">
                <img
                  src="https://grameenfoundation.org/images/_AUTOx68_crop_center-center_none/FarmGrow_logo.svg"
                  alt="FarmGrow Plans (FDP) Logo"
                  className="h-24 mb-8"
                />
              </div>

              {/* Text Block */}
              <div>
                <h3 className="text-3xl font-bold text-green-700 mb-2">
                  Digital Farm Development Plans (FDP)
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Grameen collaborates with Cacao, Inc. and Rainforest Alliance
                  to develop the FDP for cacao. Through the FarmGrow mobile
                  application, field officers of cacao traders collect
                  farm-level data that is analyzed using “smart logic” to allow
                  for personalized FDPs that guide farming households to plan
                  ahead and better manage the cost and financing of their
                  farming operations. Most importantly, the “business” plan
                  profiles a snapshot of the potential income (or loss) over the
                  long-term that can be generated from following recommended
                  practices.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Farmer Link */}
          <div className="w-full flex flex-row-reverse gap-x-6">
            {/* Image */}
            <div className="mb-4 w-1/2">
              <img
                src="https://grameenfoundation.org/images/_918x706_crop_center-center_none/JURL2960_200129_031525.jpg"
                alt="People discussing with Farmer Link shirt"
                className="w-full h-[450px] object-cover rounded-md"
                loading="lazy"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/600x400"; // Fallback image
                }}
              />
            </div>

            <div className="w-1/2">
              {/* Logo */}
              <div className="mb-2 flex justify-center items-center">
                <img
                  src="https://grameenfoundation.org/images/_AUTOx68_crop_center-center_none/Partner-logo-FarmerLink_Pilot_Program_Synopsis.svg"
                  alt="Farmer Link Logo"
                  className="h-24 mb-8"
                />
              </div>

              {/* Text Block */}
              <div>
                <h3 className="text-3xl font-bold text-green-700 mb-2">
                  Digital Farm Management Plans
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Under FarmerLink, Grameen developed a strategic alliance that
                  includes the Philippine Coconut Authority and private-sector
                  coconut buyers, including Franklin Baker and Nutiva, as well
                  as Planet Labs, Sitching Progreso, a financial service
                  providers, food companies, and agronomists. Grameen developed
                  a suite of mobile extension tools that feed in an integrated
                  fashion to help farmers strengthen their businesses, build
                  resilience, and mitigate losses due to climate change and
                  extreme weather while serving profit-making, policy, and other
                  interests of the partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
