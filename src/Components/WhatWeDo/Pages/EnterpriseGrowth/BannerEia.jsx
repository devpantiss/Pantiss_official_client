// BannerEnterprise.js
import React from 'react';

const BannerEnterprise = () => {
  return (
    <section className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735280030/SHG-cover_zx4b1p.jpg')" }}>
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      {/* Hero Content */}
      <div className="relative z-10 lg:ml-12 flex flex-col items-start justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide">Enterprise Growth</h1>
        <h2 className="text-2xl md:text-3xl font-normal mb-4">in Mining Villages</h2>
      </div>
    </section>
  );
};

export default BannerEnterprise;