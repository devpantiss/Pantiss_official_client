import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Common/Heading";

const AsSeenOn = () => {
  // Slick slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // Speed increased for smoother effect
    slidesToShow: 4, // Show 4 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // This will keep the slider moving continuously
    cssEase: "linear", // For smooth continuous scrolling
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-red-400/30 flex flex-col lg:flex-row py-10 px-12 justify-center gap-x-16 items-center">
      {/* Image positioned at the top-left corner and rotated */}
      <div className="relative">
        <img
          src="https://i.postimg.cc/bw5S3YQ7/newspaper.png" // Sample image URL
          alt="Top Left Icon"
          className="absolute top-5 left-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 transform rotate-[-60deg]" // Rotate the image by -30 degrees
        />
        <Heading text="AS SEEN ON" color="text-black" bgColor="bg-[#2A675C]" />
      </div>

      <div className="container w-[400px] lg:w-[800px]">
        {/* Slider with Marquee Effect */}
        <Slider {...settings} className="gap-x-2"> {/* Added gap using Tailwind */}
          <div className="px-2">
            <img
              src="https://i.postimg.cc/Wz1vNkPX/DTE.png"
              alt="Down To Earth"
              className="h-24 w-full"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/wTb6B0MJ/iforest-removebg-preview.png"
              alt="CBC"
              className="h-24 w-full"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/qvP4sq8v/Orissapost-removebg-preview.png"
              alt="The Telegraph"
              className="h-24 w-full"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/hjq4Bvj5/tele-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-24 w-full"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/Y9k7PPDc/Thetimesofindia-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-24 w-full"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/wvVzYkn1/thomson-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-24 w-full"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/43pZBG5b/unicef-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-24 w-full"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/C1gs3CVn/cbc-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-24 w-full"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AsSeenOn;
