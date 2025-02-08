import React from "react";

const HeroDispur = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738941457/dispur_bzqcez.webp"
          alt="Empowering Communities in Guwahati"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          GUWAHATI
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Guwahati, the largest city in Assam and the gateway to Northeast India, is a vital hub for trade, education, and cultural activities. Its strategic location along the Brahmaputra River positions it as a center for regional development and economic growth.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s skilling initiatives in Guwahati focus on empowering youth and local communities with vocational training in sectors such as tourism, renewable energy, and sustainable agricultural practices. These programs aim to foster entrepreneurship, enhance employability, and address regional development needs.
            </p>
            <p className="text-gray-700 mt-2">
              By collaborating with local industries, educational institutions, and government agencies, we are building a platform for inclusive growth while preserving the cultural and environmental richness of the region.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDispur;
