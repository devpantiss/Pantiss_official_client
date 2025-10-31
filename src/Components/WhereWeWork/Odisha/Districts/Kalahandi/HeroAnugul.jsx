import React from "react";

const HeroKalahandi = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761844548/jp-sheard-K6Ud3t3uJTc-unsplash_ht0rkw.jpg"
          alt="Empowering Women"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-green-600 text-white px-4 py-1 text-sm rounded-full w-max">
          KALAHANDI
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Kalahandi, Odisha, is known for its vibrant agricultural heritage and natural resources. Despite historical challenges, the district is emerging as a focal point for development and skilling initiatives aimed at empowering local communities.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s programs in Kalahandi focus on enhancing agricultural practices, promoting value-added production, and fostering entrepreneurship. Special attention is given to training in sustainable farming techniques, small-scale business development, and livelihood generation.
            </p>
            <p className="text-gray-700 mt-2">
              By collaborating with government agencies, NGOs, and community leaders, we aim to build a resilient local economy that balances traditional practices with modern innovations. These efforts strive to uplift the socio-economic conditions of the region while preserving its cultural identity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKalahandi;
