import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gray-50">
      {/* Background Image Section */}
      <div
        className="relative w-full h-[40vh] lg:h-[700px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761772567/WhatsApp_Image_2025-10-24_at_1.13.48_PM_1_wbtjtc.jpg')",
        }}
      >
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="absolute bottom-2 left-0 w-full">
          <div className="container mx-auto px-6 lg:px-16 py-6 rounded-tr-lg bg-red-600 rounded-bl-lg text-white">
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                   INTERNSHIP PROGRAMME
                </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
