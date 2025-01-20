import React from "react";
import Heading from "../../Common/Heading";

const Details = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row w-full relative">
      {/* Left Content Section */}
      <div className="flex-1 bg-gray-100 overflow-y-auto px-10 py-16">
        <Heading text="WHY JHARKHAND?" color="text-black" bgColor="bg-red-600" />

        <p className="text-lg mb-8">
          Jharkhand, rich in mineral resources, is one of India's major contributors to mining. However, the mining activities have also brought challenges such as environmental degradation, displacement of communities, and a lack of sustainable livelihoods. The state has been focusing on addressing these issues through initiatives in skilling, waste recycling, and community development.
        </p>
        <p className="text-lg mb-8">
          Efforts are being made to establish waste recycling plants and introduce skilling programs tailored to the needs of mining-affected communities. These programs aim to reduce unemployment, empower local communities, and promote sustainable development.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Focus on Mining Skilling and Waste Recycling
        </h3>
        <p className="text-lg mb-8">
          Over 40% of mining-affected regions in Jharkhand require targeted skilling programs to enable alternative livelihoods. Programs in mining safety, equipment operation, and waste recycling have been introduced to train youth and women, empowering them to become self-reliant.
        </p>
        <p className="text-lg mb-8">
          In addition, waste recycling plants have been set up in key districts to manage industrial and domestic waste effectively. These plants are creating jobs while also reducing the environmental impact of mining activities.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Community Development and Environmental Restoration
        </h3>
        <p className="text-lg mb-8">
          Jharkhand's programs also emphasize environmental restoration by reclaiming mined lands and planting trees. Community-based initiatives have been launched to improve access to clean water, healthcare, and education. These efforts have already impacted thousands of families, but more work is needed to ensure long-term sustainability.
        </p>
      </div>

      {/* Right Fixed Map Section */}
      <div className="w-[400px] flex justify-center items-center lg:justify-start lg:items-start p-4">
        <div className="border border-gray-300 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737370115/Jharkhand_wth7my.png" 
            alt="Jharkhand Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
