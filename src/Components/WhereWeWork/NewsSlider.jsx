import React, { memo, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Components/Common/Heading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Memoized Arrow components
const PrevArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="z-10 absolute top-1/2 left-0 lg:-left-12 transform -translate-y-1/2 text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronLeft />
  </button>
));
PrevArrow.displayName = "PrevArrow";

const NextArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="z-10 absolute top-1/2 right-0 lg:-right-12 transform -translate-y-1/2 text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronRight />
  </button>
));
NextArrow.displayName = "NextArrow";

// Memoized NewsCard component
const NewsCard = memo(({ item }) => (
  <div className="p-4">
    <div className="bg-white h-[550px] shadow rounded-lg overflow-hidden flex flex-col">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">{item.date}</p>
        <h3 className="font-semibold text-lg mt-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mt-2 flex-grow">
          {item.description}
        </p>
      </div>
    </div>
  </div>
));
NewsCard.displayName = "NewsCard";

const NewsSlider = ({ news }) => {
  // Memoized slider settings
  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      lazyLoad: "ondemand", // Load images on demand
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <div className="bg-red-600 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-start mb-6 px-10">
          <Heading text="LATEST" color="text-white" bgColor="bg-white" />
        </div>
        <div className="relative">
          <Slider {...sliderSettings} className="w-full px-8">
            {news?.map((item) => (
              <NewsCard key={item.id || item.title} item={item} />
            ))}
          </Slider>

          <style>
            {`
            .custom-dots {
display:none;
            }
            `}
          </style>
        </div>
      </div>
    </div>
  );
};

export default memo(NewsSlider);
