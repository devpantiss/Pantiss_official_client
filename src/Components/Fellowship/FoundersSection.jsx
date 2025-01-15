import React from "react";

const FoundersSection = () => {
  return (
    <section className="bg-red-600 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between container gap-x-12 p-10">
        {/* Left Section */}
        <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
          <h2 className="text-2xl font-bold text-white mb-4">
            MEET THE FOUNDERS
          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            The Pantiss Mining Fellowship, inspired by the struggles of the
            region, has been co-founded by Mr. Sanjay Pradhan and Mr. Stalin
            Nayak.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[5px] bg-white h-[350px] mx-8"></div>

        {/* Right Section */}
        <div className="lg:w-2/3 w-full flex flex-col justify-center items-center lg:flex-row gap-y-4 gap-x-6">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040843/stalin_sir_wbrcxh.jpg"
            alt="Mr. Stalin Nayak"
            className="h-[500px] w-full rounded-lg object-cover"
          />
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735040837/Sanjay_sir_b5cld1.jpg"
            alt="Mr. Sanjay Pradhan"
            className="h-[500px] w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;
