// BannerRehab.js
import React from 'react';

const BannerRehab = () => {
  return (
    <section className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://www.undp.org/sites/g/files/zskgke326/files/styles/full_hero_1392x940/public/2024-06/undp-lebanon-2017-nor_funded_08.jpg?h=c36979ac&itok=v5yrabuI')" }}>
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-20 z-0"></div>
      {/* Hero Content */}
      <div className="relative z-10 lg:ml-12 flex flex-col items-start justify-center h-full text-white text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide">EIA/SIA</h1>
        <h2 className="text-2xl md:text-3xl font-normal mb-4">For Land Acquisition@Mines</h2>
      </div>
    </section>
  );
};

export default BannerRehab;