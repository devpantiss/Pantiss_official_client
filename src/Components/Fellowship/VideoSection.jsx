import React, { Suspense, useState } from "react";

// Placeholder Component for Lazy Image Loading
const ImageLoader = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-[450px]">
      {/* Placeholder while the image is loading */}
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <span className="text-gray-500">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

// Top Section Component
const TopSection = () => (
  <div className="flex max-w-6xl flex-col lg:flex-row items-center lg:items-start text-center lg:text-left py-10 bg-gray-50 px-6 lg:px-20 gap-10">
    {/* Left Column - Title */}
    <div className="lg:w-1/3">
      <h2 className="text-4xl font-bold text-red-600 mb-4">
        WHY PANTISS MINING FELLOWSHIP?
      </h2>
    </div>

    {/* Right Column - Icon and Description */}
    <div className="lg:w-2/3 flex flex-col items-start justify-start">
      <div className="flex justify-start">
        <svg
          className="w-44 h-44 text-gray-300 mb-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 107 96"
        >
          <path
            d="M48 96V47.888H23.887C24.488 32.525 32.526 24.58 48 24.056V0C16 3.672 0 19.635 0 47.888V96h48zm59 0V47.888H82.887C83.488 32.525 91.526 24.58 107 24.056V0C75 3.672 59 19.635 59 47.888V96h48z"
            fill="#E3E3E3"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">
        Empower yourself with a fellowship that provides the skills and vision
        to transform the mining sector while promoting sustainable practices
        for a better tomorrow. The Pantiss Mining Fellowship is a unique
        initiative designed to empower aspiring leaders with the skills and
        knowledge to address challenges in the mining sector. Through hands-on
        training, mentorship, and exposure to real-world projects, fellows
        develop innovative solutions that drive sustainable growth and social
        transformation. Joining this fellowship means becoming a catalyst for
        change in one of the most critical industries of our time.
      </p>
    </div>
  </div>
);

// Bottom Section Component
const BottomSection = () => (
  <div className="relative w-full">
    {/* Lazy-loaded Image */}
    <Suspense
      fallback={
        <div className="w-full h-[450px] bg-gray-300 flex items-center justify-center">
          <span className="text-gray-500">Loading Image...</span>
        </div>
      }
    >
      <ImageLoader
        src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736152387/sebastian-pichler-ly2T4vul_SE-unsplash_hdi8yl.jpg"
        alt="Pantiss Fellows Group Photo"
      />
    </Suspense>

    {/* Overlay Content */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
      <h3 className="text-2xl font-bold">TO BECOME THE LEADERS OF TOMORROW</h3>
      <button className="mt-4 px-6 py-2 bg-red-600 rounded-lg hover:bg-red-700 transition">
        JOIN US
      </button>
    </div>
  </div>
);

// Main VideoSection Component
const VideoSection = () => (
  <section className="flex flex-col justify-center items-center">
    {/* Top Section */}
    <TopSection />
    {/* Bottom Section */}
    <BottomSection />
  </section>
);

export default VideoSection;