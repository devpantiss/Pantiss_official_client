import React from "react";

const HeroKoderma = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://www.samco.in/knowledge-center/wp-content/uploads/cache/2025/03/Power-Mech-Share-Price-Rises-6_-After-Securing-%E2%82%B9579-Crore-BHEL-Order/850566405.webp"
          alt="Koderma Landscape"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          KODERMA
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Koderma, Jharkhand, is renowned as the "Mica Capital of India" due to its abundant mica reserves. The district holds significant importance for both mining and industrial activities, offering great potential for workforce development and skill enhancement programs.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              The Pantiss Foundation focuses on skilling initiatives in Koderma, providing training programs in sustainable mining practices, vocational skills, and livelihood generation. By collaborating with industry leaders and government agencies, we aim to empower the local community with the necessary skills to foster economic growth while promoting environmental conservation and responsible resource management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKoderma;
