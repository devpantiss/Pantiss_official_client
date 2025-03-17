import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Components/Common/Heading";

const NewsSlider = ({ news }) => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="bg-red-600 p-6">
      <div className="mx-auto max-w-7xl">
        <Heading text="Latest" color="text-white" bgColor="bg-white" />
        <Slider {...sliderSettings} className="w-full px-8">
          {news?.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white h-[550px] shadow rounded-lg overflow-hidden flex flex-col">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-2 flex-grow">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsSlider;