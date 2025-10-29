import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761737479/vision-magazin-lAdf6NFyh5c-unsplash_1_nejnze.jpg",
    // Add more slides here if desired, e.g.:
    // "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740389052/AdobeStock_574000874_Preview_y3iqiv.jpg",
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
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          aria-hidden={index !== currentSlide}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30 flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 drop-shadow-lg">
          Our Publications
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 drop-shadow-md">
          Discover insights and research driving sustainable agriculture and community empowerment.
        </p>
        <button
          className="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          onClick={() => console.log("Browse clicked")} // Replace with actual navigation
        >
          Browse Publications
        </button>
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-red-600 scale-125"
                  : "bg-gray-400 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;