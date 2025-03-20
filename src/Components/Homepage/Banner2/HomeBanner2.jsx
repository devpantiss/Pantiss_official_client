import React, { useState, useEffect, useMemo, memo } from "react";
import { TypeAnimation } from "react-type-animation";

const HomeBanner2 = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Memoized animation sequences
  const titleSequence = useMemo(
    () => [
      "Responsible Mining",
      3000,
      "Steelium",
      3000,
      "Aluminium",
      3000,
      "Energy Transition",
      3000,
    ],
    []
  );

  const subtitleSequence = useMemo(
    () => [
      "Mines",
      3000,
      "Steel & Aluminium",
      6000,
      "Energy",
      3000,
    ],
    []
  );

  // Video load handler
  useEffect(() => {
    const video = document.createElement("video");
    video.src = "https://res.cloudinary.com/dgtc2fvgu/video/upload/c_scale,w_1280,q_auto:good/v1735208301/banner_video_efhq8v.mp4";
    video.onloadeddata = () => setVideoLoaded(true);
    video.onerror = () => setVideoLoaded(true); // Fallback in case of error
    return () => {
      video.onloadeddata = null;
      video.onerror = null;
    };
  }, []);

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
        preload="auto"
      >
        <source
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/c_scale,w_1280,q_auto:good/v1735208301/banner_video_efhq8v.mp4"
          type="video/mp4"
        />
      </video>

      {/* Translucent Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
        {/* Fallback Loader */}
        {/* {!videoLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <p className="text-white text-sm animate-pulse">Loading video...</p>
          </div>
        )} */}

        {/* Content */}
        <div className="text-center text-white px-4">
          <h1 className="relative text-4xl md:text-6xl font-bold mb-4">
            Welcome to <br />
            <span className="text-red-600">
              Pantiss{" "}
              <TypeAnimation
                sequence={titleSequence}
                wrapper="span"
                speed={75}
                repeat={Infinity}
                className="inline-block"
              />
            </span>
            <img
              className="absolute top-5 lg:top-10 w-10 lg:left-32 left-20"
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_40/v1726395483/leaf_n7rkfr.png"
              alt="leaf"
              loading="lazy"
            />
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Empowering Communities around{" "}
            <span className="text-green-400">
              <TypeAnimation
                sequence={subtitleSequence}
                wrapper="span"
                speed={75}
                repeat={Infinity}
                className="inline-block"
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