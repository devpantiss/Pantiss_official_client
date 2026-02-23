import React, { useState, useEffect } from "react";

const Hero = () => {
  const slides = [
    "https://res.cloudinary.com/dxzhnns58/image/upload/v1761737479/vision-magazin-lAdf6NFyh5c-unsplash_1_nejnze.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-black">

      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/40" />

      {/* Soft Glow Accent */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-red-600/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/20 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="max-w-2xl text-white">

            {/* Label */}
            <div className="mb-6">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-sm tracking-wide border border-white/20">
                Publications & Research
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Insights for a
              <span className="block bg-gradient-to-r from-red-500 to-red-300 bg-clip-text text-transparent">
                Changing World
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Discover Pantiss publications exploring workforce transformation,
              sustainability, and community development. Our research delivers
              practical insights for policymakers, industry leaders, and
              innovators.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">

              <button
                className="
                  px-7 py-3
                  bg-red-600
                  text-white
                  font-semibold
                  rounded-lg
                  shadow-lg
                  hover:bg-red-700
                  transition
                "
              >
                Browse Publications
              </button>

              <button
                className="
                  px-7 py-3
                  rounded-lg
                  border border-white/30
                  backdrop-blur-md
                  text-white
                  hover:bg-white/10
                  transition
                "
              >
                Latest Report →
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/20">
        <div
          className="h-full bg-red-600 transition-all duration-[6000ms] ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Navigation Dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 right-10 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-2.5 h-2.5 rounded-full transition-all
                ${
                  currentSlide === index
                    ? "bg-red-500 scale-125"
                    : "bg-white/40 hover:bg-white"
                }
              `}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hero;