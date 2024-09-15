import React from 'react';

const TeamBanner2 = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen flex items-center justify-center" 
      style={{ backgroundImage: 'url(https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726385840/Tarun-bg_kvctdb.webp)' }}> {/* Add the background image URL here */}
      
      <div className="absolute right-[10%] flex items-center max-w-5xl mx-auto space-x-8">
        {/* Right Section: Profile Info */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 w-full md:max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Mr. Tarun Sawhney</h2>
          <h3 className="text-xl font-medium mb-2">Vice Chairman & Managing Director</h3>
          <p className="text-gray-700 mb-6">
            Mr. Tarun Sawhney is the Vice Chairman and Managing Director of (TEIL) Triveni Engineering and Industries Ltd.
          </p>
          {/* <button className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
            View Full Profile
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default TeamBanner2;
