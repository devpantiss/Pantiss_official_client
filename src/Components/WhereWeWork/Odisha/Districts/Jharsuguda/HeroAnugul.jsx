import React from "react";

const HeroJharsuguda = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761838629/jharsuguda_vrjz3g.jpg"
          alt="Empowering Women"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-green-600 text-white px-4 py-1 text-sm rounded-full w-max">
          JHARSUGUDA
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Jharsuguda, Odisha, is a rapidly growing industrial hub known for its power plants and aluminum smelting units. The region plays a vital role in the state's industrial landscape, making it a prime location for skill development programs focused on industrial operations and workforce empowerment.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s initiatives in Jharsuguda aim to equip local youth with specialized training in areas such as industrial maintenance, safety protocols, and green technologies. By fostering partnerships with key industry players, government agencies, and educational institutions, we are enhancing employability and promoting sustainable development.
            </p>
            <p className="text-gray-700 mt-2">
              Our efforts extend beyond skill training to include community development projects and environmental conservation initiatives. We strive to ensure that industrial progress in Jharsuguda aligns with sustainable practices while uplifting the socio-economic conditions of its residents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroJharsuguda;
