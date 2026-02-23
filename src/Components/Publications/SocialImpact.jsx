// SocialImpact.jsx
import React from "react";
import Heading from "../Common/Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const reports = [
  {
    title: "Industry 4.0 Readiness of Vocational Training",
    cover: "/Reports/Industry_4.jpg",
  },
  {
    title: "Future Workforce Needs in Mining Sector",
    cover: "/Reports/Future_workforce_needs.jpg",
  },
  {
    title: "Women Participation in Industrial Skilling Programs",
    cover: "/Reports/Women_participation.jpg",
  },
  {
    title: "Livelihood Conditions in Mining Affected Communities",
    cover:
      "/Reports/livelihood_conditions_in_mining_affected_community.jpg",
  },
  {
    title: "Renewable Energy Workforce Opportunities for Rural Youth",
    cover: "/Reports/renewable_energy.jpg",
  },
  {
    title: "Climate Resilient Livelihood Models",
    cover: "/Reports/Climate_resilient.jpg",
  },
];

const SocialImpact = () => {
  return (
    <section className="bg-red-600 py-8 px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">

        {/* LEFT SECTION */}
        <div className="text-white lg:w-1/2 w-full">

          <Heading
            text="RESEARCH & REPORTS"
            color="text-white"
            bgColor="bg-white"
          />

          <p className="mt-6 text-white/90 leading-relaxed max-w-md">
            Explore Pantiss research publications covering workforce
            development, industrial transformation, climate resilience,
            and community impact. Our reports provide insights into
            emerging opportunities and future-ready skills.
          </p>

          <button
            className="
              mt-8
              px-6 py-3
              bg-white
              text-red-600
              rounded-lg
              font-semibold
              shadow-lg
              hover:bg-black
              hover:text-white
              transition
            "
          >
            View All Reports →
          </button>

        </div>

        {/* RIGHT SECTION */}
        <div className="relative lg:w-1/2 w-full">

          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            grabCursor={true}
            slidesPerView={"auto"}
            loop={true}
            speed={900}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 320,
              modifier: 2.4,
              slideShadows: false,
            }}
            pagination={{ el: ".custom-pagination", clickable: true }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          >
            {reports.map((report, index) => (
              <SwiperSlide key={index} style={{ width: "320px" }}>
                <div className="group relative rounded-2xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.45)]">

                  <img
                    src={report.cover}
                    alt={report.title}
                    className="
                      w-full
                      h-[460px]
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-white text-[16px] font-semibold leading-snug">
                      {report.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className="
                      absolute inset-0
                      bg-black/55
                      backdrop-blur-sm
                      opacity-0
                      group-hover:opacity-100
                      transition duration-300
                      flex items-center justify-center
                    "
                  >
                    <button
                      className="
                        flex items-center gap-2
                        px-5 py-2.5
                        rounded-full
                        bg-white
                        text-red-600
                        font-semibold
                        shadow-lg
                        hover:scale-105
                        transition
                      "
                    >
                      👁 View Report
                    </button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-10 mt-10">

            <div className="custom-prev group cursor-pointer">
              <div className="
                w-14 h-14
                rounded-full
                border border-white/40
                flex items-center justify-center
                bg-white/10
                backdrop-blur-md
                shadow-lg
                transition
                group-hover:scale-110
                group-hover:bg-white
              ">
                <span className="text-white group-hover:text-red-600 text-lg">
                  ‹
                </span>
              </div>
            </div>

            <div className="custom-pagination flex gap-2"></div>

            <div className="custom-next group cursor-pointer">
              <div className="
                w-14 h-14
                rounded-full
                border border-white/40
                flex items-center justify-center
                bg-white/10
                backdrop-blur-md
                shadow-lg
                transition
                group-hover:scale-110
                group-hover:bg-white
              ">
                <span className="text-white group-hover:text-red-600 text-lg">
                  ›
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Pagination Style */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.6);
          opacity: 1;
          border-radius: 999px;
          transition: all 0.3s ease;
        }

        .custom-pagination .swiper-pagination-bullet-active {
          width: 26px;
          background: white;
        }
      `}</style>

    </section>
  );
};

export default SocialImpact;