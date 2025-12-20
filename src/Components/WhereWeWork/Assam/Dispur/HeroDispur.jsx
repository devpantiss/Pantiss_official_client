import React from "react";

const HeroDispur = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738941457/dispur_bzqcez.webp"
          alt="Empowering Communities in Dispur"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          DISPUR
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Dispur, the administrative capital of Assam, is the political and governmental heart of Northeast India, nestled within the greater Guwahati metropolitan area. Strategically located along the Brahmaputra River, it serves as a hub for governance, education, and regional development, driving Assam’s economic and cultural progress.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s skilling initiatives in Dispur focus on empowering youth and local communities with vocational training in sectors such as public administration, IT, and sustainable urban development. These programs aim to enhance employability, foster entrepreneurship, and address the unique needs of Dispur’s growing urban population.
            </p>
            <p className="text-gray-700 mt-2">
              By collaborating with government bodies, educational institutions, and local businesses, we are building a platform for inclusive growth while preserving Dispur’s cultural heritage and supporting its role as Assam’s administrative center.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDispur;