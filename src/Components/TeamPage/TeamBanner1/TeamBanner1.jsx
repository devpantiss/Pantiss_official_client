import React from 'react';

const TeamBanner1 = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center" 
      style={{ backgroundImage: 'url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726385840/banner1_jgrrje.webp)' }}> {/* Add the URL to your background image */}
      
      <div className="absolute left-[10%] flex items-center max-w-5xl mx-auto space-x-8">
        {/* Left Section: Profile Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mr. Dhruv M. Sawhney</h2>
          <h3 className="text-xl font-medium mb-2">Chairman & Managing Director</h3>
          <p className="text-gray-700 mb-6">
            Sawhney is Chairman of Triveni Turbine Ltd. and Triveni Engineering and Industries Ltd. with a market capitalisation of US$ 2.0 Billion and US$ 0.8 billion respectively (as on March 31, 2024).
          </p>
          {/* <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
            View Full Profile
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default TeamBanner1;
