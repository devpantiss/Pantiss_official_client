import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761739709/derrick-treadwell-xgYOInZU7wg-unsplash_jyoimb.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          JOIN THE BIGGEST NON-PROFIT FAMILY
        </h1>
        <p className="mt-4 text-lg md:text-xl">Pantiss Careers</p>
        <div className="mt-8 flex">
          <input
            type="text"
            placeholder="Enter keyword(s) or location"
            className="px-4 py-2 rounded-l-md focus:outline-none w-80"
          />
          <button className="bg-red-500 px-6 py-2 rounded-r-md text-white font-bold hover:bg-red-600">
            Search Jobs
          </button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
