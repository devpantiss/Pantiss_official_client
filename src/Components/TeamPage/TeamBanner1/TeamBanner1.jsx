import React from "react";

const TeamBanner1 = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center
    lg:bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726385840/banner1_jgrrje.webp')] 
    bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729677655/dhruv_mobile_img_ootz2j.webp')]"
    >
      {" "}
      {/* Add the URL to your background image */}
      <div className="absolute bottom-10 lg:left-[10%] flex items-center max-w-5xl mx-auto space-x-8">
        {/* Left Section: Profile Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Mr. Stalin Nayak
          </h2>
          <h3 className="text-xl font-medium mb-2">
            Founder & Chairperson
          </h3>
          <p className="text-gray-700 mb-6">
            Sawhney is Chairman of Triveni Turbine Ltd. and Triveni Engineering
            and Industries Ltd. with a market capitalisation of US$ 2.0 Billion
            and US$ 0.8 billion respectively (as on March 31, 2024).
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner1;
