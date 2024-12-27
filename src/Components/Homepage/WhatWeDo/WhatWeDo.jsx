import React, { useRef } from "react";
import Slider from "react-slick";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Dummy data for the cards with gradients
const cardData = [
  {
    title: "EIA/SIA for Land Acquisition@Mines",
    link: "/whatwedo/social-development",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195006/EIA_bpqcoy.jpg",
    gradient: "from-red-700 via-red-500 to-red-300",
  },
  {
    title: "Rehabilitation & Resettlement of Mines",
    link: "/whatwedo/social-enterprises",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195058/Rehabilitation_ejgaqn.webp",
    gradient: "from-blue-700 via-blue-500 to-blue-300",
  },
  {
    title: "Skill Training for Mining-Affected Youth",
    link: "/whatwedo/pantiss-mine-x-sim",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735278481/vocational_msprt8.jpg",
    gradient: "from-green-700 via-green-500 to-green-300",
  },
  {
    title: "Enterprise Growth in Mining Villages",
    link: "/whatwedo/health-initiatives",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735280030/SHG-cover_zx4b1p.jpg",
    gradient: "from-purple-700 via-purple-500 to-purple-300",
  },
  {
    title: "Reclamation in Abandoned Mines",
    link: "/whatwedo/education",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195281/WhatsApp_Image_2024-12-26_at_12.10.50_PM_nqiwwh.jpg",
    gradient: "from-yellow-700 via-yellow-500 to-yellow-300",
  },
  {
    title: "Just Transition for Mining Workers",
    link: "/whatwedo/environment",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195397/just_transition_wpoeik.jpg",
    gradient: "from-teal-700 via-teal-500 to-teal-300",
  },
  // Add more cards with unique gradients as needed
];

const NewsCardSection = () => {
  const sliderRef = useRef(null);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    dots: false, // Remove dots
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="container mx-auto py-8 px-10 mb-4">
      <Heading text="WHAT WE DO" color="text-[black]" bgColor="bg-red-600" />
      <div className="py-4 flex justify-center items-center relative">
        {/* Custom Previous Button */}
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="absolute flex justify-center items-center bg-white rounded-full lg:-left-[100px] left-0 z-10 text-7xl text-red-600 hover:text-red-800"
        >
          <FaChevronCircleLeft />
        </button>

        <Slider
          {...settings}
          ref={sliderRef}
          className="w-[400px] md:w-[800px] lg:w-[1590px]"
        >
          {cardData.map((card, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Link to={card.link}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute left-0 bg-black/70 px-[3px] bottom-0">
                    <span
                      className={`inline-block leading-[1.5] text-lg font-extrabold uppercase bg-clip-text text-transparent bg-gradient-to-r ${card.gradient} drop-shadow-lg animate-shine`}
                      style={{
                        backgroundSize: "200%",
                        backgroundPosition: "0%",
                        animation: "shine 3s infinite linear",
                      }}
                    >
                      {card.title}
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Next Button */}
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="absolute flex justify-center items-center bg-white rounded-full lg:-right-[100px] right-0 z-10 text-7xl text-red-600 hover:text-red-800"
        >
          <FaChevronCircleRight />
        </button>
      </div>
    </section>
  );
};

export default NewsCardSection;
