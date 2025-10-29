import React from "react";

const FinancialBanner = () => {
  return (
    <section
      className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761730860/henrique-ferreira-VERqw7ouux4-unsplash_ctrxds.jpg')", // Replace with your image path
      }}
    >
      {/* Text Overlay */}
      <div className="bg-black bg-opacity-50 p-4 text-center rounded-lg">
        <h1 className="text-white text-3xl md:text-5xl font-bold">EXPENSES.</h1>
        <h2 className="text-white text-2xl md:text-4xl font-light mt-2">
          REPORTS & FINANCIALS
        </h2>
      </div>
    </section>
  );
};

export default FinancialBanner;
