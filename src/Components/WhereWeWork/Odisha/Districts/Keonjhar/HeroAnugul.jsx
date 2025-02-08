import React from "react";

const HeroKeonjhar = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738935983/dry-hill-sunny-day_hgnuof.jpg"
          alt="Empowering Women"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-green-600 text-white px-4 py-1 text-sm rounded-full w-max">
          KEONJHAR
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Keonjhar, Odisha, is a prominent mining district known for its rich mineral resources, including iron ore and manganese. Its strategic importance in the state's economy makes it a critical hub for skill development and employment generation.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s initiatives in Keonjhar focus on providing specialized training in mining operations, environmental management, and sustainable livelihood practices. By empowering the local youth and workforce, we aim to bridge the skill gap and promote inclusive growth.
            </p>
            <p className="text-gray-700 mt-2">
              Our programs are designed to foster collaborations between industries, government bodies, and community stakeholders. Through these efforts, we strive to create an ecosystem that balances industrial development with environmental sustainability and socio-economic upliftment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKeonjhar;
