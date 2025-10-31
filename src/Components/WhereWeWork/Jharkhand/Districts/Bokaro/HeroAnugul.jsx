import React from "react";

const HeroBokaro = () => {
  return (
    <div className="container mx-auto relative bg-white rounded-lg h-[750px] lg:h-[900px]">
      {/* Image Section */}
      <div className="w-full">
        <img
          src="https://pbs.twimg.com/media/DCr1SaFXsAAlVZf.jpg"
          alt="Bokaro Steel City"
          className="object-cover h-[400px] lg:h-[700px] w-full"
        />
      </div>

      {/* Text Section */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-t-2xl shadow-lg w-11/12 md:w-3/4 lg:max-w-[90%] z-10">
        {/* Highlighted Tag */}
        <div className="bg-red-600 text-white px-4 py-1 text-sm rounded-full w-max">
          BOKARO
        </div>

        <div className="flex flex-col lg:flex-row gap-x-5">
          {/* Main Description */}
          <div className="mt-4">
            <p className="text-gray-800 text-xl font-bold">
              Bokaro, Jharkhand, famously known as the "Steel City of India," is home to one of the largest steel plants in the country. The region plays a pivotal role in India's industrial landscape, making it a hub for training and workforce development initiatives.
            </p>
          </div>

          {/* Secondary Description */}
          <div className="mt-2">
            <p className="text-gray-700">
              Pantiss Foundation’s skilling programs in Bokaro focus on equipping local youth with specialized training in steel production, industrial operations, and allied trades. These initiatives are designed to bridge the skill gap and enhance employability in this industrially significant region. Through partnerships with industry leaders and community stakeholders, the foundation is contributing to sustainable development and inclusive growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBokaro;
