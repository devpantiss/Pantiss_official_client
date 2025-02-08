import React from "react";

const HeroSundargarh = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738925316/Sarafgarh-Dam-Sundargarh_dskqf9.webp"
          alt="Empowering Women"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-green-600 text-white px-4 py-1 text-sm rounded-full w-max">
          SUNDARGARH
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Sundargarh, Odisha, is a region known for its picturesque landscapes and thriving industrial sector, including mining and steel production. It plays a pivotal role in the state's economic development, making it a strategic location for workforce training and skill development.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s initiatives in Sundargarh focus on empowering local communities by providing specialized training in industrial operations, sustainable agriculture, and environmental conservation. Our programs aim to enhance employability and promote responsible resource management.
            </p>
            <p className="text-gray-700 mt-2">
              By collaborating with industry leaders, educational institutions, and government bodies, we are fostering a culture of inclusive growth that benefits both the economy and the environment. Sundargarh’s development is being guided by sustainable practices and a commitment to preserving its rich natural heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSundargarh;
