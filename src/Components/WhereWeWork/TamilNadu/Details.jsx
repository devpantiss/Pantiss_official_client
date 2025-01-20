import React from "react";
import Heading from "../../Common/Heading";

const Details = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row w-full relative">
      {/* Left Content Section */}
      <div className="flex-1 bg-gray-100 overflow-y-auto px-10 py-16">
        <Heading text="TRAINING PROJECT WITH NEYVELI LIGNITE CORPORATION" color="text-black" bgColor="bg-red-600" />

        <p className="text-lg mb-8">
          Neyveli Lignite Corporation (NLC), a leading mining and power generation company, has been pivotal in the development of mining and energy sectors in India. With a focus on sustainable growth, NLC has launched several training initiatives to address the skill gap and empower the workforce.
        </p>
        <p className="text-lg mb-8">
          As part of a collaboration with NLC, training programs have been designed to cater to various skill sets, especially for those in and around mining areas. These training initiatives aim to provide workers with the necessary skills in areas such as mining operations, equipment handling, and safety management.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Empowering Communities Through Skill Development
        </h3>
        <p className="text-lg mb-8">
          Over the past few years, NLC has trained over 8,500 individuals in various skill sets, including mining industry operations, dumper operation, plumbing, security guard duties, and facility management. This initiative has been crucial in addressing the skill shortage and providing new livelihood opportunities.
        </p>
        <p className="text-lg mb-8">
          The training programs also focus on ensuring safety, health, and environmental standards in mining operations. The collaboration with NLC aims to further the goal of providing high-quality, practical training to help workers integrate into the modern workforce.
        </p>
      </div>

      {/* Right Fixed Map Section */}
      <div className="w-[400px] flex justify-center items-center lg:justify-start lg:items-start p-4">
        <div className="border border-gray-300 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737370117/Tamilnadu_z62jov.png" // Change this image if needed for a relevant one of NLC or the region
            alt="Neyveli Lignite Corporation Project Location"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
