import React from "react";

const HeroAnugul = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://odishatourism.gov.in/content/dam/tourism/home/discover/major-cities/angul/banner_angul.jpg"
          alt="Empowering Women"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          ANUGUL
        </div>

        <div className=" flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Angul, Odisha, is a strategic hub for mining and industrial activities, making it an ideal location for skilling initiatives. The region hosts major mining and steel industries, providing ample opportunities for workforce development and sustainable livelihood creation. Pantiss Foundation’s skilling programs in Angul focus on equipping local youth and workers with specialized training in mining operations, safety protocols, and allied trades to enhance employability and bridge the skill gap.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Our interventions extend beyond mining to include sustainable development projects, addressing environmental concerns and promoting responsible resource management. Through collaborations with industry leaders, government bodies, and community stakeholders, Pantiss Foundation is fostering an ecosystem of inclusive growth, ensuring that the local population benefits from industrial advancements while preserving their cultural and ecological heritage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnugul;
