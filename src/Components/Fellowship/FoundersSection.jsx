import React from "react";

const FoundersSection = () => {
  return (
    <section className="bg-gradient-to-br from-red-700 via-red-600 to-red-500 flex justify-center items-center py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between container mx-auto gap-x-12 px-6 lg:px-16">
        {/* Left Section */}
        <div className="lg:w-1/3 w-full mb-10 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-6">
            MEET THE FOUNDERS
          </h2>
          <p className="text-gray-100 text-lg leading-relaxed">
            The Pantiss Mining Fellowship, inspired by the struggles of the
            region, has been co-founded by Mr. Sanjay Pradhan and Mr. Stalin
            Nayak.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[3px] bg-gradient-to-b from-white via-gray-300 to-white h-[350px] mx-8 rounded-lg"></div>

        {/* Right Section */}
        <div className="lg:w-2/3 w-full flex flex-col lg:flex-row gap-y-8 gap-x-6">
          <img
            src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761685978/stalinsir_l53ura.jpg"
            alt="Mr. Stalin Nayak"
            className="h-auto max-h-[550px] w-full lg:w-[68%] rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
          <img
            src="https://res.cloudinary.com/djtzx6wo7/image/upload/v1760619304/sanjay_sir_2_bulab3.jpg"
            alt="Dr. Sanjay Pradhan"
            className="h-auto max-h-[550px] w-full lg:w-[68%] rounded-lg object-cover shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
