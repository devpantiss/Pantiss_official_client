import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DistrictCards = ({ districts }) => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleNavigation = (district) => {
    navigate(district.path);
  };

  return (
    <section className="relative py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Left Button */}
        <button
          ref={prevRef}
          className="absolute left-44 z-10 top-1/2 transform -translate-y-1/2 bg-red-600 text-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 p-3 rounded-full"
        >
          <FaChevronLeft className="text-[30px] lg:text-[50px]" />
        </button>

        {/* Right Button */}
        <button
          ref={nextRef}
          className="absolute right-44 z-10 top-1/2 transform -translate-y-1/2 bg-red-600 text-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 p-3 rounded-full"
        >
          <FaChevronRight className="text-[30px] lg:text-[50px]" />
        </button>

        {/* ✅ Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {districts?.map((district, i) => (
            <SwiperSlide key={district.name}>
              <div
                onClick={() => handleNavigation(district)}
                className="relative h-[380px] bg-cover bg-center rounded-xl shadow-lg cursor-pointer overflow-hidden group"
                style={{ backgroundImage: `url(${district.image})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-500 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold text-green-400 drop-shadow-lg">
                    {district.name}
                  </h3>

                  <div className="h-[2px] w-14 bg-green-500 my-2 group-hover:w-24 transition-all duration-500" />

                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    Discover training, initiatives, and industrial programs in{" "}
                    {district.name}.
                  </p>
                </div>

                {/* Accent border */}
                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-green-500/60 transition-all duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default DistrictCards;
