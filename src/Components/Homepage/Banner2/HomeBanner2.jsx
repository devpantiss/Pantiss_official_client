import React from "react";
import "./homeBanner2.css"; // Custom styles for zoom effect and fade transition

const HomeBanner2 = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Translucent black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-5xl font-bold">Welcome to Pantiss Group!</h1>
      </div>
    </div>
  );
};

export default HomeBanner2;
