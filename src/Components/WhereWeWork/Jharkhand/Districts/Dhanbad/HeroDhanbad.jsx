import React from "react";

const HeroDhanbad = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761912985/pexels-vikashkr50-17971796_p3mknd.jpg"
          alt="Dhanbad Mining City"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          DHANBAD
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Dhanbad, located in the state of Jharkhand, is renowned as the "Coal Capital of India." The city plays a crucial role in India's industrial landscape with its extensive coal mines and mining operations, contributing significantly to the nation's energy needs.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation's skilling initiatives in Dhanbad aim to empower the local youth by offering specialized training in mining technologies, safety practices, and industrial skills. By collaborating with leading industries and government bodies, the foundation focuses on creating sustainable livelihoods while fostering responsible resource management in the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDhanbad;
