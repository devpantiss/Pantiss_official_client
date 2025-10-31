import React from "react";

const HeroJajapur = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://jajpurbusiness.com/wp-content/uploads/2025/05/image-3-1536x864.png"
          alt="Empowering Women"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-green-600 text-white px-4 py-1 text-sm rounded-full w-max">
          JAJAPUR
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Jajapur, Odisha, is an emerging center for industrial and agricultural activities, making it a significant hub for skill development initiatives. With its rapidly expanding manufacturing sector and rich cultural heritage, the region presents vast opportunities for workforce training and empowerment.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s initiatives in Jajapur aim to equip local youth and workers with specialized skills in areas such as manufacturing operations, sustainable agriculture, and green technologies. By collaborating with industry leaders, educational institutions, and government bodies, we are fostering sustainable livelihoods and promoting inclusive growth for the region.
            </p>
            <p className="text-gray-700 mt-2">
              Our efforts also focus on promoting environmental stewardship and encouraging eco-friendly practices, ensuring that the development of Jajapur aligns with sustainable principles while uplifting the local community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroJajapur;
