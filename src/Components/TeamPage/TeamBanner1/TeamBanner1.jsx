import React from "react";

const TeamBanner1 = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center
    lg:bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735217111/STALIN_SIR_S_PIC_2_j0cepz.jpg')] 
    bg-[url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735398605/New_SIr_Pic01_cwi3po.jpg')]"
    >
      {" "}
      {/* Add the URL to your background image */}
      <div className="absolute -bottom-6 lg:left-[10%] flex items-center max-w-5xl mx-auto space-x-8">
        {/* Left Section: Profile Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Mr. Stalin Nayak
          </h2>
          <h3 className="text-xl font-medium mb-2">Founder & CEO</h3>
          <p className="text-gray-700 mb-6">
            Stalin Nayak, a principal advisor to CSR of Tata Sons, Odisha, has 3
            years of experience working with tribal Naxalites. He holds degrees
            in Engineering, Robotics, Social Work, and Tribal Development from
            top institutions. Specializing in right-wing social sciences, his
            expertise includes Panchayati Raj, advocacy, and grassroots
            policymaking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamBanner1;
