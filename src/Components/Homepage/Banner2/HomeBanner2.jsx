import React, { useState, useEffect, memo } from "react";

const HomeBanner2 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Preload video
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/assets/homepage/Hero_banner_video.mp4";
    video.onloadeddata = () => setVideoLoaded(true);
    video.onerror = () => setVideoLoaded(true);
    return () => {
      video.onloadeddata = null;
      video.onerror = null;
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden pt-32"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1738924847/jharsuguda_zlzcyq.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Video Background */}
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="/assets/homepage/Hero_banner_video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="relative text-4xl md:text-6xl font-bold mb-4">
            Welcome to <br />
            <span className="text-red-600">Pantiss Responsible Mining</span>
            <img
              className="absolute top-5 lg:top-12 w-6 lg:left-[134px] left-24"
              src="/assets/homepage/leaf.png"
              alt="leaf"
              loading="lazy"
            />
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Empowering Communities around{" "}
            <span className="text-green-400">
              Eastern Ghats & Chhotanahgpur Plateau
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(HomeBanner2);