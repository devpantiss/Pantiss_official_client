import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom"; // ✅ For internal navigation
import Heading from "../../Components/Common/Heading";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    id: 1,
    title: "Planning, Policy & Governance (PPG)",
    tags: [
      { text: "GIS/Drone Survey" },
      { text: "Digital Dashboard" },
      { text: "Social Audit" },
    ],
    buttons: [{ text: "Explore", link: "https://users.mowash.in" }],
    buttonLink: "#",
    backgroundImage:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760708443/Adobe_Express_-_file_afc9wt.jpg",
  },
  {
    id: 2,
    title: "TVET (Technical, Vocational, Educational Training)",
    tags: [
      { text: "Skill on Wheels" },
      { text: "Center of Excellence" },
      { text: "Global Placements" },
    ],
    buttonText: "Explore",
    buttonLink: "/what-we-do/mine-steel-&-power-skill-park",
    backgroundImage:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760708752/GMC10092024_162547_pnvm7v.jpg",
  },
  {
    id: 3,
    title: "Livelihood & Entrepreneurship",
    tags: [
      { text: "Agricultural Revival" },
      { text: "Animal Husbandary" },
      { text: "Enterprise Incubation" },
    ],
    buttonText: "Explore",
    buttonLink: "/what-we-do/carp-rice-&-duck-livelihood-park",
    backgroundImage:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760708960/amol-sonar-1KntWz6Hpgc-unsplash_adnjcu.jpg",
  },
  {
    id: 4,
    title: "Health & Nutrition",
    tags: [
      { text: "Mobile Health Unit" },
      { text: "Health Screening" },
      { text: "Malnutrition Management" },
    ],
    buttonText: "Explore",
    buttonLink: "/what-we-do/nutrinest",
    backgroundImage:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760709193/health_c5sfne.jpg",
  },
  {
    id: 5,
    title: "Water & Sanitation",
    tags: [
      { text: "Safe Drinking Water" },
      { text: "Toilets" },
      { text: "Waste-Disposal" },
    ],
    buttonText: "Explore",
    buttonLink: "https://circular-economy.mowash.com",
    backgroundImage:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761732864/Sanitation_workers_fnmuqr.jpg",
  },
  {
    id: 6,
    title: "Environment & Ecology",
    tags: [
      { text: "Abandoned Mines Reclamation" },
      { text: "Mine Water Treatment" },
      { text: "Air Monitoring Stations" },
    ],
    buttonText: "Explore",
    buttonLink:
      "/what-we-do/land-acquisition-rehabilitation-&-resettlement-of-mines",
    backgroundImage:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760709502/Pngtree_forest_planet_earth_with_trees_15794029_aii5vc.jpg",
  },
];

const WhatWeDo = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate(); // ✅ For internal routing

  const handleButtonClick = (slide) => {
    if ([2, 3, 4, 6].includes(slide.id)) {
      // Internal navigation
      navigate(slide.buttonLink);
    } else {
      // External link
      window.open(slide.buttonLink, "_blank");
    }
  };

  return (
    <section className="bg-white py-8 px-10">
      <div className="mx-auto">
        <div className="flex justify-center items-center">
          <div className="text-center max-w-4xl flex flex-col justify-center items-center">
            <div className="flex mx-auto justify-center max-w-7xl">
              <Heading text="WHAT WE DO" color="text-black" bgColor="bg-red-600" />
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute bg-red-600/60 text-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 left-0 z-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full"
          >
            <FaChevronLeft className="text-[30px] lg:text-[60px]" />
          </button>
          <button
            ref={nextRef}
            className="absolute bg-red-600/60 text-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 right-0 z-10 top-1/2 transform -translate-y-1/2 p-3 rounded-full"
          >
            <FaChevronRight className="text-[30px] lg:text-[60px]" />
          </button>

          {/* Swiper */}
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={25}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="mySwiper"
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 3 },
            }}
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div
                  className="relative h-[400px] bg-cover bg-center rounded-lg shadow-lg cursor-pointer"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 p-4 bg-black bg-opacity-50 rounded-lg flex flex-col justify-center items-center text-center text-white px-4">
                    <h2 className="text-xl lg:text-4xl font-bold mb-2">
                      {slide.title}
                    </h2>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {slide.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-white text-green-600 text-xs px-3 py-1 rounded-full"
                        >
                          {tag.text}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => handleButtonClick(slide)}
                      className="bg-red-500 hover:bg-red-600 text-sm px-6 py-2 rounded-full transition-all"
                    >
                      {slide.buttonText || "Explore"}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
