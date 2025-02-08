import React, { useState } from "react";

const HomeBanner2 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden pt-32">
      {/* Video Background */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto" // Preload video for better performance
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735208301/banner_video_efhq8v.mp4"
          type="video/mp4"
        />
      </video>

      {/* Translucent Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
        {/* Fallback Loader */}
        {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <p className="text-white text-sm animate-pulse">Loading video...</p>
          </div>
        )}

        {/* Content */}
        <div className="text-center text-white">
          <h1 className="relative text-4xl md:text-6xl font-bold mb-4">
            Welcome to <br />{" "}
            <span className="text-red-600">Pantiss Responsible Mining!</span>{" "}
            <img
              className="absolute top-5 lg:top-10 w-10 lg:left-32 left-20"
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726395483/leaf_n7rkfr.png"
              alt="leaf"
              loading="lazy" // Lazy loading for performance
            />
          </h1>
          <p className="text-xl md:text-2xl">
            Empowering Communities around{" "}
            <span className="text-green-400">Mines</span> Across{" "}
            <span className="text-green-400">Globe</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner2;