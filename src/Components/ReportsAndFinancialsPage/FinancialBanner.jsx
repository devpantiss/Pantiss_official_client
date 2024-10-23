import React from "react";

const FinancialBanner = () => {
  return (
    <section
      className="w-full h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729514711/Progetto-senza-titolo-100_dsw4y3.png')", // Replace with your image path
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
