import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Common/Heading";


const AsSeenOn = () => {
  // Slick slider settings
  const settings = {
    dots: false, // Set to true if you want pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 logos at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2 seconds delay
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
    <div className="bg-[#71dfcb]/30 flex py-10 px-12 justify-center gap-x-16 items-center">
      <Heading text="AS SEEN ON" color="text-black" bgColor="bg-[#2A675C]" />

      <div className="container w-[800px] ">
        <Slider {...settings} className="gap-x-8"> {/* Added gap using Tailwind */}
          <div className="px-4"> {/* Added padding to create space between slides */}
            <img
              src="https://i.postimg.cc/Wz1vNkPX/DTE.png"
              alt="Down To Earth"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/wTb6B0MJ/iforest-removebg-preview.png"
              alt="CBC"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/qvP4sq8v/Orissapost-removebg-preview.png"
              alt="The Telegraph"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/hjq4Bvj5/tele-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/Y9k7PPDc/Thetimesofindia-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/wvVzYkn1/thomson-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/43pZBG5b/unicef-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://i.postimg.cc/C1gs3CVn/cbc-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default AsSeenOn;
