import React from 'react';

const HomeBanner2 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-32">
      {/* Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="https://res.cloudinary.com/du3i8e0se/video/upload/v1725774824/New_Project_-_Made_with_Clipchamp_kmplxn.mp4" type="video/mp4" />
      </video>

      {/* Translucent Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
        <div className="text-center text-white ">
          <h1 className="relative text-4xl md:text-6xl font-bold mb-4">Welcome to Pantiss Group! <img className='absolute -top-3 w-10 right-[32%]' src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726395483/leaf_n7rkfr.png" alt='leaf'/></h1>
          <p className="text-xl md:text-2xl">Empowering Communities around <span className='text-green-400'>Mines</span> Across <span className='text-green-400'>Globe</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner2;
