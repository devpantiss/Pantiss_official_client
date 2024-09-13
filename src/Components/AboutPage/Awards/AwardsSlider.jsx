import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Common/Heading";

// Sample awards data
const awardsData = [
  {
    year: "2010",
    title: "Growth Excellence Award",
    description: "CAGR in excess of 70% over the last five years",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726221454/aw-p_jtm73o.webp",
  },
  {
    year: "2010",
    title: "Best WTP Industrial",
    description: "Recycle & Reuse Project of 108 MW Power Plant for NDPL, Delhi",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726221454/aw-p_jtm73o.webp",
  },
  {
    year: "2010",
    title: "Best WTP Industrial",
    description: "Recycle & Reuse Project of 108 MW Power Plant for NDPL, Delhi",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726221454/aw-p_jtm73o.webp",
  },
  {
    year: "2010",
    title: "Best WTP Industrial",
    description: "Recycle & Reuse Project of 108 MW Power Plant for NDPL, Delhi",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726221454/aw-p_jtm73o.webp",
  },
  {
    year: "2010",
    title: "Best WTP Industrial",
    description: "Recycle & Reuse Project of 108 MW Power Plant for NDPL, Delhi",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726221454/aw-p_jtm73o.webp",
  },
  {
    year: "2010",
    title: "Best WTP Industrial",
    description: "Recycle & Reuse Project of 108 MW Power Plant for NDPL, Delhi",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726221454/aw-p_jtm73o.webp",
  },
  {
    year: "2010",
    title: "Best WTP Industrial",
    description: "Recycle & Reuse Project of 108 MW Power Plant for NDPL, Delhi",
    imageUrl: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726221454/aw-p_jtm73o.webp",
  },
];

// Custom navigation arrows
const PreviousArrow = ({ onClick }) => (
  <div
    className="custom-arrow absolute -left-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft className="text-white text-2xl hover:text-gray-300" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow absolute -right-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight className="text-white text-2xl hover:text-gray-300" />
  </div>
);

const AwardsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative bg-black p-10">
      <div className="flex justify-center items-center">
        <Heading text="Awards" color="text-white" bgColor="bg-red-600" />
      </div>
      <p className="text-center text-white text-lg mb-12 max-w-3xl mx-auto">
        Our commitment to quality and reliability has brought us many awards and accolades. We see these awards as the manifestation of the strong reputation we have worked so hard to build.
      </p>
      <Slider {...settings} className="h-[350px] pt-12">
        {awardsData.map((award, index) => (
          <div key={index} className="relative flex flex-col justify-center items-center text-center py-10 h-[350px] px-12">
            <img
              src={award.imageUrl}
              alt={award.title}
              className="absolute -top-32 left-2 mx-auto w-[450px] h-[450px] mb-4 object-contain"
            />
            <h3 className="text-white text-xl font-semibold">{award.year} - {award.title}</h3>
            <p className="text-gray-300 mt-2">{award.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AwardsSlider;
