import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Common/Heading";


const OurPartners = () => {
  // Slick slider settings
  const settings = {
    dots: false, // Set to true if you want pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 7, // Show 4 logos at a time
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
    <div className="bg-white py-10 px-12 flex flex-col justify-center items-center">
      <Heading text="OUR PARTNERS" color="text-black" bgColor="bg-[#2A675C]" />

      <div className="container w-full pt-4">
        <Slider {...settings} className="gap-x-2"> {/* Added gap using Tailwind */}
          <div className="px-4"> {/* Added padding to create space between slides */}
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/CYSD_LOGO-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/Dev-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__21_-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/giz-standard-logo_0-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__29_-removebg-preview-1-1.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__17_-removebg-preview-removebg-preview.png"
              alt="https://pantiss.com/wp-content/uploads/2023/07/download__17_-removebg-preview-removebg-preview.png"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__28_-removebg-preview-1-1.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/images__1_-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__27_-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__26_-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__25_-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__24_-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/WhatsApp_Image_2023-02-16_at_10.29.11_AM-removebg-preview.png"
              alt="Thomson Reuters"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__23_-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/WhatsApp_Image_2023-01-13_at_1.02.59_PM-removebg-preview-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__20_-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
          <div className="px-4">
            <img
              src="https://pantiss.com/wp-content/uploads/2023/07/download__18_-removebg-preview.png"
              alt="j"
              className="h-16 mx-auto"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OurPartners;
