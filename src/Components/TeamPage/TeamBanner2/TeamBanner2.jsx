import React from "react";

const TeamBanner2 = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center
                 lg:bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729679164/Tarun-bg_wtjrn3.webp')] 
                 bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729676764/Tarun-bg-mbl_yzihdl.webp')]"
    >
      <div className="absolute bottom-10 p-4 lg:right-[10%] flex items-center max-w-5xl mx-auto space-x-8">
        {/* Right Section: Profile Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Mr. Tarun Sawhney
          </h2>
          <h3 className="text-xl font-medium mb-2">
            Vice Chairman & Managing Director
          </h3>
          <p className="text-gray-700 mb-6">
            Mr. Tarun Sawhney is the Vice Chairman and Managing Director of
            (TEIL) Triveni Engineering and Industries Ltd.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner2;
