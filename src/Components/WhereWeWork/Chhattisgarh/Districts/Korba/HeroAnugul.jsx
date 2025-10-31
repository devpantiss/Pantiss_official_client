import React from "react";

const HeroKorba = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761914370/korba_cmy2er.jpg"
          alt="Empowering Communities in Korba"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          KORBA
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Korba, located in Chhattisgarh, is often referred to as the "Power Capital of India" due to its extensive coal-based thermal power plants and industrial operations. The region plays a significant role in India's energy sector and offers vast opportunities for workforce development.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              The Pantiss Foundation’s skilling initiatives in Korba aim to empower local communities with technical and vocational training, focusing on clean energy technologies and sustainable industrial practices. Collaborations with industry partners and local authorities ensure holistic development while addressing environmental concerns and creating pathways for green jobs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKorba;
