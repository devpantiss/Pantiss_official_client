import React from "react";

const HeroNeyveli = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1737443051/Chennai_vkkosd.jpg"
          alt="Empowering Communities in Neyveli"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-green-600 text-white px-4 py-1 text-sm rounded-full w-max">
          NEYVELI
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Neyveli, located in Tamil Nadu, is renowned for its vast lignite mines and thermal power plants, making it a significant contributor to India’s energy production. The town's industrial landscape offers extensive opportunities for workforce development and sustainable innovations.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s skilling initiatives in Neyveli aim to equip the local workforce with specialized training in lignite mining operations, power plant maintenance, and emerging green technologies. These programs are designed to bridge the skill gap and foster employment opportunities within the region.
            </p>
            <p className="text-gray-700 mt-2">
              Collaborations with industry leaders, government bodies, and educational institutions are integral to promoting sustainable development in Neyveli. By fostering innovative and responsible practices, we aim to support the region’s growth while preserving its ecological balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroNeyveli;
