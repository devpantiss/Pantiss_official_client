import React, { useRef } from "react";
import Slider from "react-slick";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";



// Dummy data for the cards
const cardData = [
  {
    title: "EIA/SIA for Land Acquisition@Mines",
    link: "/whatwedo/social-development",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195006/EIA_bpqcoy.jpg",
  },
  {
    title: "Rehabilitation & Resettlement of Mines",
    link: "/whatwedo/social-enterprises",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195058/Rehabilitation_ejgaqn.webp",
  },
  {
    title: "Skill Training for Mining-Affected Youth",
    link: "/whatwedo/pantiss-mine-x-sim",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195121/vocational_acvsf1.jpg",
  },
  {
    title: "Enterprise Growth in Mining Villages",
    link: "/whatwedo/health-initiatives",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1730099088/PIC-1_discao.jpg",
  },
  {
    title: "Reclamation in Abandoned Mines",
    link: "/whatwedo/education",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195281/WhatsApp_Image_2024-12-26_at_12.10.50_PM_nqiwwh.jpg",
  },
  {
    title: "Just Transition for Mining Workers",
    link: "/whatwedo/environment",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195397/just_transition_wpoeik.jpg",
  },
  {
    title: "Nutrition and Wellbeing in Mining Villages",
    link: "/whatwedo/women-empowerment",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195440/nutrition_jnxshz.jpg",
  },
  {
    title: "Eco-Mine Tourism",
    link: "/whatwedo/child-welfare",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735195893/eco-mine_dvtcgq.avif",
  },
  {
    title: "Model Mining Village in Making",
    link: "/whatwedo/rural-development",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196020/model_village_dz36fg.jpg",
  },
  {
    title: "Indigenous Community Empowerment",
    link: "/whatwedo/disaster-relief",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196099/indegenous_tribals_u4lgnd.jpg",
  },
  {
    title: "Waterbody Restoration in Mines",
    link: "/whatwedo/food-security",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196479/aditya-shrivastava-yYPcqVU6IEI-unsplash_adkc8e.jpg",
  },
  {
    title: "Connecting Remote Mining Habitations",
    link: "/whatwedo/wash",
    img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735196669/inaccessible_hne73u.avif",
  },
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
          className="absolute flex justify-center items-center bg-white rounded-full -left-[100px] z-10 text-7xl text-red-600 hover:text-red-800"
        >
          <FaChevronCircleLeft />
        </button>

        <Slider {...settings} ref={sliderRef} className="w-[400px] md:w-[800px] lg:w-[1590px]">
          {cardData.map((card, index) => (
            <div key={index} className="px-2">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Link to={card.link}>
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute left-0 bottom-0">
                    <span
                      className={`inline-block bg-white hover:text-[red] px-2 py-1 leading-[1.5] font-bold text-2xl`}
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
          className="absolute flex justify-center items-center bg-white rounded-full -right-[100px] z-10 text-7xl text-red-600 hover:text-red-800"
        >
          <FaChevronCircleRight />
        </button>
      </div>
    </section>
  );
};

export default NewsCardSection;
