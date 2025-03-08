// BannerReclamation.js
import React from 'react';

const BannerReclamation = () => {
  return (
    <section className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739283475/WhatsApp_Image_2025-02-11_at_7.45.05_PM_zd4iay.jpg')" }}>
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      {/* Hero Content */}
      <div className="relative z-10 lg:ml-12 flex flex-col items-start justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide">Reclamation</h1>
        <h2 className="text-2xl md:text-3xl font-normal mb-4">in Abandoned Mines</h2>
      </div>
    </section>
  );
};

export default BannerReclamation;