import React, { useRef } from "react";
import Slider from "react-slick";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Updated card data with only four specific cards
const cardData = [
  {
    title: "Land Acquisition, Rehabilitation & Resettlement of Mines",
    link: "/whatwedo/social-development",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195006/EIA_bpqcoy.jpg", // Updated to reflect land acquisition/rehabilitation
    gradient: "from-red-700 via-red-500 to-red-300",
  },
  {
    title: "Mines, Steel & Power Skill Park",
    link: "/whatwedo/pantiss-mine-x-sim",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735278481/vocational_msprt8.jpg", // Vocational training image fits skill park
    gradient: "from-blue-700 via-blue-500 to-blue-300",
  },
  {
    title: "Carp, Rice & Duck Livelihood Park",
    link: "/whatwedo/rural-development",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195281/WhatsApp_Image_2024-12-26_at_12.10.50_PM_nqiwwh.jpg", // Model village image as a placeholder; replace with specific livelihood park image if available
    gradient: "from-green-700 via-green-500 to-green-300",
  },
  {
    title: "NutriNest",
    link: "/whatwedo/health-initiatives",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195440/nutrition_jnxshz.jpg", // Nutrition-related image fits NutriNest
    gradient: "from-orange-700 via-orange-500 to-orange-300",
  },
];

const NewsCard = React.memo(({ card }) => (
  <div className="px-2">
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <Link to={card.link}>
        <img
          src={card.img}
          alt={card.title}
          className="w-full h-[500px] object-cover"
          loading="lazy" // Lazy load images
        />
        <div className="absolute left-0 bg-black/70 px-[3px] bottom-0">
          <span
            className={`inline-block leading-[1.5] text-lg lg:text-2xl font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r ${card.gradient} drop-shadow-lg animate-shine`}
          >
            {card.title}
          </span>
        </div>
      </Link>
    </div>
  </div>
));

// NewsCardSection Component
const NewsCardSection = () => {
  const sliderRef = useRef(null);

  // Slider settings updated to show all 4 cards at once on larger screens
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show all 4 cards
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slightly longer duration
    pauseOnHover: true, // Pause autoplay on hover
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024, // Medium screens (e.g., tablets)
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
      {
        breakpoint: 768, // Small screens (e.g., mobile)
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };

  return (
    <section className="mx-auto max-w-8xl py-8 px-10 mb-4">
      <Heading text="WHAT WE DO" color="text-[black]" bgColor="bg-red-600" />
      <div className="py-4 flex justify-center items-center relative">
        {/* Custom Previous Button */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute flex justify-center items-center bg-white rounded-full lg:-left-[0px] left-0 z-10 text-7xl text-red-600 hover:text-red-800"
        >
          <FaChevronCircleLeft />
        </button>

        <Slider {...settings} ref={sliderRef} className="w-full max-w-[1800px]">
          {cardData.map((card, index) => (
            <div key={index} className="w-full max-w-[1400px]">
              <NewsCard card={card} />
            </div>
          ))}
        </Slider>

        {/* Custom Next Button */}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute flex justify-center items-center bg-white rounded-full lg:-right-[0px] right-0 z-10 text-7xl text-red-600 hover:text-red-800"
        >
          <FaChevronCircleRight />
        </button>
      </div>
    </section>
  );
};

export default NewsCardSection;