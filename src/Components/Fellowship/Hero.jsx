import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  // Videos for the slider
  const videos = [
    {
      video:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1726137056/niyamgiri_j8uqux.mp4",
      title: "TRANSFORMING LIVES IN KALAHANDI",
      subtitle:
        "Promoting sustainable mining practices and empowering tribal communities with livelihood opportunities.",
      buttonText: "Explore Initiatives",
    },
    {
      video:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1726137056/niyamgiri_j8uqux.mp4",
      title: "BUILDING FUTURES IN BASTAR",
      subtitle:
        "Fostering skill development and education to uplift the socio-economic status of mining-affected communities.",
      buttonText: "Learn More",
    },
    {
      video:
        "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1726137056/niyamgiri_j8uqux.mp4",
      title: "CULTIVATING HERITAGE IN KODERMA",
      subtitle:
        "Preserving cultural traditions while advancing development initiatives in resource-rich regions.",
      buttonText: "Discover More",
    },
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    fade: true,
  };

  return (
    <section className="relative">
      {/* Slider */}
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div key={index} className="relative h-screen">
            {/* Background Video */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={video.video}
              autoPlay
              loop
              muted
            ></video>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            {/* Content */}
            <div className="relative z-10 flex flex-col h-full justify-center text-white px-6">
              <div className="flex flex-col items-center md:items-start md:ml-10 max-w-3xl space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-center md:text-left">
                  {video.title}
                </h1>
                <p className="text-lg md:text-xl text-center md:text-left">
                  {video.subtitle}
                </p>
                <button className="bg-white text-black font-medium px-6 py-2 rounded hover:bg-gray-200 transition">
                  {video.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
