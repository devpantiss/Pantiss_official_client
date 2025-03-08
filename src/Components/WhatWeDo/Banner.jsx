import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 overflow-hidden relative h-[800px]">
      {/* Video Background */}
      <div className="w-full h-full">
        <video
          src="https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735208301/banner_video_efhq8v.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section Centered */}
      <div className="absolute top-1/2 left-1/2 bg-white/60 p-8 rounded-md transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex items-center justify-center mb-4">
          <span className="text-red-600 text-6xl font-bold mr-2">What We Do</span>
        </div>
        <p className="text-black text-xl font-medium">
          We are dedicated to transforming lives in mining-affected regions by
          engaging in multiple sectors, including sustainable development, skill
          training, environmental restoration, and community empowerment. Our
          initiatives aim to uplift and empower individuals and communities
          impacted by mining, fostering resilience and ensuring a brighter, more
          sustainable future for all.{" "}
        </p>
      </div>
    </div>
  );
};

export default Banner;
