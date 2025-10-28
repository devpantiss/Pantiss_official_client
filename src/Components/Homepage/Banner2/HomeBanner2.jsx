import React, { useState, useEffect, memo } from "react";
import { TypeAnimation } from "react-type-animation";

const syncedPairs = [
  ["Responsible Mining", "Mines"],
  ["Steel & Aluminium", "Steel & Aluminium"],
  ["Energy & Power", "Power"],
];

const HomeBanner2 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [pairIndex, setPairIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  // Preload video
  useEffect(() => {
    const video = document.createElement("video");
    video.src =
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761651868/banner_video_rmhjdl.mp4";
    video.onloadeddata = () => setVideoLoaded(true);
    video.onerror = () => setVideoLoaded(true);
    return () => {
      video.onloadeddata = null;
      video.onerror = null;
    };
  }, []);

  // Cycle through animations
  useEffect(() => {
    const timer = setInterval(() => {
      setPairIndex((prev) => (prev + 1) % syncedPairs.length);
      setAnimationKey((prev) => prev + 1); // Forces TypeAnimation to restart in sync
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const [titleText, subtitleText] = syncedPairs[pairIndex];

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
          src="https://res.cloudinary.com/dxzhnns58/video/upload/v1761651868/banner_video_rmhjdl.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="relative text-4xl md:text-6xl font-bold mb-4">
            Welcome to <br />
            <span className="text-red-600">
              Pantiss{" "}
              <TypeAnimation
                key={animationKey}
                sequence={[titleText]}
                wrapper="span"
                speed={75}
                cursor={false}
              />
            </span>
            <img
              className="absolute top-5 lg:top-12 w-6 lg:left-[134px] left-24"
              src="https://res.cloudinary.com/dxzhnns58/image/upload/v1761652633/leaf_akt5fn.png"
              alt="leaf"
              loading="lazy"
            />
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Empowering Communities around{" "}
            <span className="text-green-400">
              <TypeAnimation
                key={animationKey + "-subtitle"}
                sequence={[subtitleText]}
                wrapper="span"
                speed={75}
                cursor={false}
              />
            </span>{" "}
            Across <span className="text-green-400">Globe</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(HomeBanner2);