import React, { useRef, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Memoized static card data
const cardData = [
  {
    title: "Land Acquisition, Rehabilitation & Resettlement of Mines",
    link: "/what-we-do/land-acquisition-rehabilitation-&-resettlement-of-mines",
    img: "/assets/homepage/whatwedo/EIA.jpg",
    gradient: "from-red-700 via-red-500 to-red-300",
  },
  {
    title: "Mines, Steel & Power Skill Park",
    link: "/what-we-do/mine-steel-&-power-skill-park",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_600/v1735278481/vocational_msprt8.jpg",
    gradient: "from-blue-700 via-blue-500 to-blue-300",
  },
  {
    title: "Carp, Rice & Duck Livelihood Park",
    link: "/what-we-do/carp-rice-&-duck-livelihood-park",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_600/v1735195281/WhatsApp_Image_2024-12-26_at_12.10.50_PM_nqiwwh.jpg",
    gradient: "from-green-700 via-green-500 to-green-300",
  },
  {
    title: "NutriNest",
    link: "/what-we-do/nutrinest",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_600/v1735195440/nutrition_jnxshz.jpg",
    gradient: "from-orange-700 via-orange-500 to-orange-300",
  },
];

// Memoized NewsCard component
const NewsCard = memo(({ card }) => (
  <div className="px-2">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <Link to={card.link}>
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-[500px] object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 bg-black/70 px-1 py-2 w-full">
          <span
            className={`inline-block leading-tight text-lg lg:text-2xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r ${card.gradient} drop-shadow-lg animate-shine`}
          >
            {card.title}
          </span>
        </div>
      </Link>
    </div>
  </div>
));
NewsCard.displayName = "NewsCard";

// NewsCardSection Component
const NewsCardSection = () => {
  const sliderRef = useRef(null);

  // Optimized slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 cards by default for better spacing
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    lazyLoad: "ondemand", // Load images on demand
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8 px-4 sm:px-10 mb-4">
      <div className="flex mb-6 mx-auto justify-center max-w-7xl">
        <Heading text="WHAT WE DO" color="text-black" bgColor="bg-red-600" />
      </div>
      <div className="relative flex justify-center items-center">
        {/* Custom Previous Button */}
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 lg:-left-12 z-10 bg-white rounded-full text-4xl lg:text-5xl text-red-600 hover:text-red-800 transition-colors"
        >
          <FaChevronCircleLeft />
        </button>

        {/* Slider */}
        <Slider
          {...settings}
          ref={sliderRef}
          className="w-full max-w-8xl"
        >
          {cardData.map((card) => (
            <NewsCard key={card.title} card={card} />
          ))}
        </Slider>

        {/* Custom Next Button */}
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 lg:-right-12 z-10 bg-white rounded-full text-4xl lg:text-5xl text-red-600 hover:text-red-800 transition-colors"
        >
          <FaChevronCircleRight />
        </button>
      </div>
    </section>
  );
};

export default memo(NewsCardSection);