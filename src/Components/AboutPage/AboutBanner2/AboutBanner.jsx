import React from 'react';
import {Link} from 'react-router-dom';



const AboutBanner = () => {
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
        <source src="https://res.cloudinary.com/dxzhnns58/video/upload/v1761684857/WhatsApp_Video_2025-10-29_at_2.22.41_AM_pdhy39.mp4" />
      </video>

      {/* Translucent Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center">
        <div className="text-center text-white ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About us!</h1>
          <p className="text-xl md:text-2xl">Empowering <span className='text-green-400'>Innovation</span>, Transforming <span className='text-green-400'>Tomorrow</span>.</p>
        </div>

        <div className='flex gap-x-6 mt-8 justify-between items-center'>
          <Link className='bg-red-600 rounded-md text-white px-4 py-2 hover:bg-white hover:text-red-600 hover:ring-1 hover:ring-red-600'>Social Brochure</Link>  
          <Link className='bg-red-600 rounded-md text-white px-4 py-2 hover:bg-white hover:text-red-600 hover:ring-1 hover:ring-red-600'>Impact Presentation</Link>  
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
