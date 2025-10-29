import React, { memo, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../Common/Heading";

// Memoized static career areas data
const careerAreas = [
  {
    title: "M&E",
    count: 0,
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761744325/glenn-carstens-peters-npxXWgQ33ZQ-unsplash_whomtc.jpg",
  },
  {
    title: "Project Management & Implementation",
    count: 6,
    img: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1761119059/octavian-dan-craciun-b21Ty33CqVs-unsplash_isrzcv.jpg",
  },
  {
    title: "Finance, Grants & Procurement",
    count: 0,
    img: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1761119222/towfiqu-barbhuiya-nApaSgkzaxg-unsplash_mnkkge.jpg",
  },
  {
    title: "Human Resources & Administration",
    count: 0,
    img: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1761119331/cytonn-photography-n95VMLxqM2I-unsplash_zx5zfg.jpg",
  },
  {
    title: "Business Development & Partnerships",
    count: 1,
    img: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1761119393/kaleidico-26MJGnCM0Wc-unsplash_klnlaa.jpg",
  },
  {
    title: "Social Enterprise",
    count: 2,
    img: "https://careers.brac.net/category/3.png?c_scale,w_300",
  },
  {
    title: "Technical, Vocational Education and Training",
    count: 2,
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745242/IMG_9085_tkrncl_1_1_cc29gu.jpg",
  },
  {
    title: "ICT Development",
    count: 4,
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745281/nick-morrison-FHnnjk1Yj7Y-unsplash_nso1rp.jpg",
  },
  {
    title: "Civil Engineering",
    count: 2,
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745317/vocational_x4fu5b.jpg",
  },
  {
    title: "Research and Advocacy",
    count: 2,
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745351/nima-van-ghavim-Q9C0SMrg4gU-unsplash_euuspx.jpg",
  },
  {
    title: "Development Compliance",
    count: 2,
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761745402/How-to-Build-Trust-in-Controls-With-Centralized-Compliance_lsa3jk.jpg",
  },
];

// Memoized Arrow components
const PrevArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="z-10 absolute top-1/2 left-0 sm:-left-8 lg:-left-12 transform -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronLeft />
  </button>
));
PrevArrow.displayName = "PrevArrow";

const NextArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="z-10 absolute top-1/2 right-0 sm:-right-8 lg:-right-12 transform -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronRight />
  </button>
));
NextArrow.displayName = "NextArrow";

// Memoized CareerCard component
const CareerCard = memo(({ area, onClick }) => (
  <div className="px-2 sm:px-4">
    <div onClick={() => onClick(area.title)} className="cursor-pointer">
      <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto overflow-hidden">
        <img
          src={area.img}
          alt={area.title}
          className="w-full h-full shadow-lg rounded-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-2 sm:top-4 right-1 sm:right-2 bg-red-500 ring-2 ring-white text-white w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center text-xs sm:text-sm font-bold rounded-full">
          {area.count}
        </span>
      </div>
      <h3 className="mt-2 sm:mt-4 text-base sm:text-lg text-white font-semibold text-center">
        {area.title}
      </h3>
    </div>
  </div>
));
CareerCard.displayName = "CareerCard";

const CareersCategory = () => {
  const navigate = useNavigate();

  // Memoized slider settings
  const settings = useMemo(
    () => ({
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      lazyLoad: "ondemand",
      responsive: [
        {
          breakpoint: 1280, // xl screens
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1024, // lg screens
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640, // sm screens
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true, // Keep arrows for mobile usability
          },
        },
      ],
    }),
    []
  );

  const handleCardClick = (category) => {
    navigate(`/careers/jobs?category=${encodeURIComponent(category)}`);
  };

  return (
    <section className="bg-red-600 px-4 sm:px-8 py-12 flex flex-col">
      <div className="mx-auto lg:max-w-7xl max-w-3xl w-full">
        <Heading
          text="WHAT CAREER AREA INTERESTS YOU?"
          color="text-white"
          bgColor="bg-white"
        />
        <p className="mt-4 text-gray-100 text-sm sm:text-base text-center sm:text-left">
          Discover how you can be a part of that change by choosing a career path
          that interests you the most.
        </p>

        <div className="mt-8 relative">
          <Slider {...settings}>
            {careerAreas.map((area) => (
              <CareerCard
                key={area.title}
                area={area}
                onClick={handleCardClick}
              />
            ))}
          </Slider>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-4 py-2 rounded-md bg-white text-red-600 hover:bg-red-700 hover:text-white transition-colors duration-300 ease-in-out">
            <Link to="/careers/jobs">View All Jobs</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(CareersCategory);