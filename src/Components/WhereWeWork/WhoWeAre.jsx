import React from "react";
import Heading from "../Common/Heading";

const WhoWeAre = () => {
  return (
    <div className="bg-white px-6">
      {/* Who We Are Section */}
      <div className="text-center py-10">
        <div className="flex justify-center items-center">
          <Heading text="WHO WE ARE" color="text-black" bgColor="bg-red-500" />{" "}
        </div>
        <p className="text-gray-600 mt-4 mx-auto max-w-3xl">
          Pantiss Foundation is an development organisation founded in
          Bhubaneswar in 2020 that partners with people living with inequality
          and poverty in Mining affected villages to create opportunities to
          realise human potential.
        </p>
        <button className="mt-4 text-red-500 underline">Learn more</button>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded">
            RECOGNITION
          </button>
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded">
            VISION, MISSION AND VALUES
          </button>
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded">
            OUR DNA
          </button>
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded">
            BRAC GLOBAL STRATEGY 2030
          </button>
          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded">
            BRAC INTERNATIONAL
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-1 bg-red-500 w-full"></div>

      {/* What We Do Section */}
      <div className="text-center py-10">
        <div className="container mx-auto">
          <Heading text="WHAT WE DO" color="text-black" bgColor="bg-red-500" />{" "}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
            {/* Card 1 */}
            <div className="relative group">
              <img
                src="https://www.brac.net/templates/saga/home-template/img/social-development.jpg"
                alt="Social Development"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-md">
                Social development
              </div>
            </div>
            {/* Card 2 */}
            <div className="relative group">
              <img
                src="https://www.brac.net/templates/saga/home-template/img/aarong.jpg"
                alt="Social Enterprises"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-md">
                Social enterprises
              </div>
            </div>
            {/* Card 3 */}
            <div className="relative group">
              <img
                src="https://www.brac.net/templates/saga/home-template/img/investments.jpg"
                alt="Investments"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-md">
                Investments
              </div>
            </div>
            {/* Card 4 */}
            <div className="relative group">
              <img
                src="https://www.brac.net/templates/saga/home-template/img/brac-uni.jpg"
                alt="University"
                className="w-full h-full object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 rounded-b-md">
                University
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
