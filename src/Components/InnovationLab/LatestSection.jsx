import React, { useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; // Import icons

// Ensure slick-carousel styles are imported in your project
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Common/Heading";

// Slider settings for react-slick
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false, // Disable default arrows
  appendDots: (dots) => (
    <div className="mt-4">
      <ul className="flex justify-end space-x-2">{dots}</ul>
    </div>
  ),
  customPaging: (i) => (
    <button
      className="w-3 h-3 bg-gray-300 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
      aria-label={`Go to slide ${i + 1}`}
    />
  ),
  responsive: [
    {
      breakpoint: 1024, // Tablets and below
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const LatestSection = () => {
  const sliderRef = useRef(null); // Add useRef to control the slider

  const newsItems = [
    {
      category: "Mining Skills",
      headline: "Skill Cafe Wins Innovation Award 2024",
      description: "Recognized for Excellence in AR/VR Training",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg",
    },
    {
      category: "Workforce",
      headline: "Skill Mobilizers Update: New Features",
      description: "Enhanced Analytics for Mining Workforce",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316572/freepik__make-a-image-showing-an-mobile-phone-inside-which-__18030_xe1ihz.jpg",
    },
    {
      category: "Sustainability",
      headline: "Responsible Mining Practices Gain Traction",
      description: "New Program Impacts 500+ Miners",
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/3df3643c-cf03-4323-8fce-d34d63d234ab_cymgyv.jpg",
    },
  ];

  return (
    <section className="py-16 moving-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex Container for Heading and Slider */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Heading (Aligned Left with Animation) */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 animate-fade-in-left">
            <Heading
              text="OUR INNOVATIONS"
              color="text-white"
              bgColor="bg-white"
            />
            <p className="mt-2 text-base text-gray-200">
              Stay updated with the latest advancements in mining skills
              innovation.
            </p>
            <Link
              to="/news"
              className="mt-4 inline-block text-white hover:text-red-200 font-semibold text-sm uppercase transition-colors duration-300"
              aria-label="View all news"
            >
              View All News
            </Link>
          </div>

          {/* Slider (Aligned Right with Animation) */}
          <div className="lg:w-1/2 animate-fade-in-right relative">
            {/* Previous Button */}
            <button
              className="absolute left-0 lg:-left-16 top-1/2 ring-2 ring-white transform -translate-y-1/2 text-white text-[48px] rounded-full p-2 shadow-lg z-10"
              onClick={() => sliderRef.current.slickPrev()}
              aria-label="Previous slide"
            >
              <FaChevronLeft />
            </button>

            <Slider {...sliderSettings} ref={sliderRef}>
              {newsItems.map((item, index) => (
                <div key={index} className="px-3">
                  <div className="relative bg-white rounded-3xl shadow-lg overflow-hidden h-[360px]">
                    {/* Background Image with Overlay */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.imageUrl})` }}
                    >
                      <div className="absolute inset-0 bg-black bg-opacity-40" />
                    </div>
                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-3">
                          {item.headline}
                        </h3>
                        <p className="text-sm text-gray-200 line-clamp-3">
                          {item.description}
                        </p>
                      </div>
                      <Link
                        to="#"
                        className="inline-flex items-center text-white hover:text-gray-300 font-medium text-sm transition-colors duration-300"
                        aria-label={`Read more about ${item.headline}`}
                      >
                        Read More
                        <svg
                          className="ml-2 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Next Button */}
            <button
              className="absolute right-0 lg:-right-16 top-1/2 ring-2 ring-white transform -translate-y-1/2 text-white text-[48px] rounded-full p-2 shadow-lg z-10"
              onClick={() => sliderRef.current.slickNext()}
              aria-label="Next slide"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Scoped CSS for Dots, Animations, and Moving Gradient */}
        <style>{`
          /* Moving Gradient Background with Smoother Mixing (Red Shades) */
          .moving-gradient {
            background: linear-gradient(
              90deg,
              #f87171 0%, /* red-400 (lighter red) */
              #dc2626 25%, /* red-600 (base red) */
              #991b1b 50%, /* red-800 (darker red) */
              #dc2626 75%, /* red-600 (base red) */
              #f87171 100% /* red-400 (lighter red) */
            );
            background-size: 300% 300%;
            animation: gradientMove 15s ease-in-out infinite;
          }

          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }

          /* Animations */
          @keyframes fadeInLeft {
            0% {
              opacity: 0;
              transform: translateX(-20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes fadeInRight {
            0% {
              opacity: 0;
              transform: translateX(20px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in-left {
            animation: fadeInLeft 1s ease-out forwards;
          }

          .animate-fade-in-right {
            animation: fadeInRight 1s ease-out forwards;
          }

          /* Custom Dots Styling */
          .slick-dots {
            display: flex !important;
            justify-content: flex-end;
            margin-top: 16px;
          }

          .slick-dots li {
            margin: 0 4px;
          }

          /* Hide Default Dots */
          .slick-dots li button:before {
            content: none !important;
            display: none !important;
          }

          .slick-dots li button {
            width: 12px;
            height: 12px;
            background-color: #d1d5db; /* bg-gray-300 */
            border-radius: 50%;
            opacity: 0.8;
            transition: all 0.3s ease;
            text-indent: -9999px; /* Hide any default text */
          }

          .slick-dots li button:hover {
            background-color: #9ca3af; /* bg-gray-400 */
            opacity: 1;
          }

          .slick-dots li.slick-active button {
            background-color: #1f2937; /* bg-gray-800 */
            opacity: 1;
            transform: scale(1.2);
          }
        `}</style>
      </div>
    </section>
  );
};

export default LatestSection;