import React from "react";
import Heading from "../../Common/Heading";

const DetailsTN = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row w-full relative">
      {/* Left Content Section */}
      <div className="flex-1 bg-gray-100 overflow-y-auto px-10 py-16">
        <Heading text="WHY TAMIL NADU?" color="text-black" bgColor="bg-red-600" />

        <p className="text-lg mb-8">
          Tamil Nadu has emerged as a critical hub for energy and mining industries, driven by the contributions of Neyveli Lignite Corporation India Limited (NLCIL). As a Navratna company, NLCIL plays a vital role in mining lignite and generating power, contributing to India's energy security and economic growth.
        </p>
        <p className="text-lg mb-8">
          The state's rich lignite reserves and advanced mining infrastructure provide a strategic advantage. With its extensive operations in Neyveli, NLCIL has made Tamil Nadu a benchmark for sustainable mining practices and workforce development.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Collaboration with NLCIL for Skill Development
        </h3>
        <p className="text-lg mb-8">
          In collaboration with NLCIL, skill development initiatives in Tamil Nadu focus on creating a robust and skilled workforce in mining, power generation, and allied sectors. The training programs aim to address the evolving industry demands and provide employment opportunities for local communities.
        </p>
        <p className="text-lg mb-8">
          Over 9,000 individuals have been trained in various trades such as lignite mining, power plant operations, heavy machinery handling, dumper and crane operation, and safety protocols. These initiatives have significantly reduced unemployment in the region while ensuring adherence to environmental and safety standards.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Key Projects in Tamil Nadu
        </h3>
        <p className="text-lg mb-8">
          The collaboration has also led to the establishment of multiple projects focusing on renewable energy, waste management, and modernizing mining practices. Projects such as solar power plants and eco-friendly mining operations have further enhanced the region's industrial landscape. 
        </p>
        <p className="text-lg mb-8">
          Through these programs, Tamil Nadu is becoming a role model for sustainable industrial development while empowering communities with knowledge and livelihood opportunities.
        </p>
      </div>

      {/* Right Fixed Map Section */}
      <div className="w-[400px] flex justify-center items-center lg:justify-start lg:items-start p-4">
        <div className="border border-gray-300 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737370117/Tamilnadu_z62jov.png" 
            alt="Neyveli Lignite Corporation Project Location"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsTN;