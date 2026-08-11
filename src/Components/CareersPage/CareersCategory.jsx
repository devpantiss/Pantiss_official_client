/* eslint-disable react/prop-types */
import { memo, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../Common/Heading";

const careerAreas = [
  {
    title: "BD & Partnership",
    count: 2,
    img: "/assets/careers/business_development.jpg",
  },
  {
    title: "Project Management",
    count: 7,
    img: "/assets/careers/project_management.jpg",
  },
  {
    title: "HR & Admin",
    count: 0,
    img: "/assets/careers/hr.jpg",
  },
  {
    title: "ICT Development",
    count: 2,
    img: "/assets/careers/ICT.jpg",
  },
  {
    title: "Branding & Communication",
    count: 0,
    img: "/assets/careers/M&E.jpg",
  },
  {
    title: "Civil Engineering",
    count: 2,
    img: "/assets/careers/vocational.JPG",
  },
  {
    title: "Research & Advocacy",
    count: 2,
    img: "/assets/careers/research&advocacy.jpg",
  },
];

// Memoized Arrow components
const PrevArrow = memo(({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Previous career area"
    className="z-10 absolute top-1/2 left-0 sm:-left-8 lg:-left-12 transform -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronLeft />
  </button>
));
PrevArrow.displayName = "PrevArrow";

const NextArrow = memo(({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Next career area"
    className="z-10 absolute top-1/2 right-0 sm:-right-8 lg:-right-12 transform -translate-y-1/2 text-3xl sm:text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronRight />
  </button>
));
NextArrow.displayName = "NextArrow";

// Memoized CareerCard component
const CareerCard = memo(({ area, onClick }) => (
  <div className="px-2 sm:px-4">
    <button
      type="button"
      onClick={() => onClick(area.title)}
      className="group block w-full cursor-pointer rounded-2xl p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
      aria-label={`View ${area.count} open ${area.title} jobs`}
    >
      <div className="relative w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 mx-auto overflow-hidden">
        <img
          src={area.img}
          alt={area.title}
          className="w-full h-full rounded-full object-cover shadow-xl ring-1 ring-white/30 transition duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
        <span className="absolute top-2 sm:top-4 right-1 sm:right-2 bg-white ring-2 ring-red-600 text-red-600 min-w-10 h-10 px-2 flex items-center justify-center text-sm font-bold rounded-full shadow-lg">
          {area.count}
        </span>
      </div>
      <h3 className="mt-3 sm:mt-4 text-base sm:text-lg text-white font-semibold text-center transition group-hover:text-red-100">
        {area.title}
      </h3>
      <p className="mt-1 text-center text-xs text-red-100">
        {area.count === 1 ? "1 open position" : `${area.count} open positions`}
      </p>
    </button>
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

        <div className="flex justify-center mt-8">
          <Link
            to="/careers/jobs"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-2.5 font-semibold text-red-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-950 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default memo(CareersCategory);
