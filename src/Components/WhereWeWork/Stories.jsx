import React, { memo, useState, useCallback } from "react";
import Heading from "../../Components/Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Memoized static stories data relevant to "Where We Work" in Odisha
const stories = [
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/v1740387857/3df3643c-cf03-4323-8fce-d34d63d234ab_cymgyv.jpg",
    text: "Transforming lives in Keonjhar by training local youth in sustainable mining practices, creating employment opportunities in Odisha’s iron ore heartland.",
    bgColor: "bg-red-600",
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/v1742126668/matthew-henry-yETqkLnhsUI-unsplash_ayeg4b.jpg",
    text: "Restoring degraded lands in Sundargarh with renewable energy projects, empowering mining villages with solar-powered livelihoods.",
    bgColor: "bg-green-600",
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/v1739283474/WhatsApp_Image_2025-02-11_at_7.45.14_PM_zual7i.jpg",
    text: "Upskilling women and tribal communities in Sukinda’s chromite belt, fostering economic resilience through vocational education.",
    bgColor: "bg-blue-600",
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/v1740389052/AdobeStock_574000874_Preview_y3iqiv.jpg",
    text: "Reviving water resources in Jharsuguda’s coal mining areas with community-led watershed management, ensuring sustainable agriculture.",
    bgColor: "bg-yellow-600",
  },
];

// Memoized Stories component
const Stories = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoized slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: useCallback((_, newIndex) => setCurrentIndex(newIndex), []),
    afterChange: useCallback(
      (newIndex) => setCurrentIndex(newIndex % stories.length),
      [stories.length]
    ),
    customPaging: (i) => (
      <button
        className="w-3 h-3 mx-1 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots custom-dots",
    pauseOnHover: false,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    lazyLoad: "ondemand", // Optimize image loading
  };

  const fallbackImage = "https://via.placeholder.com/800x600?text=Fallback+Image";

  return (
    <section className="story-section relative overflow-hidden w-full">
      <style>
        {`
          .story-section {
            height: 900px;
            width: 100%;
            position: relative;
          }

          .slick-slider {
            height: 100%;
            width: 100%;
          }

          .slick-list, .slick-track, .slick-slide > div {
            height: 100%;
          }

          .custom-dots {
            position: absolute;
            bottom: 20px;
            display: flex !important;
            justify-content: center;
            width: 100%;
            z-index: 10;
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .custom-dots li.slick-active button {
            background-color: white !important;
            opacity: 1 !important;
          }

          .slide-container {
            height: 900px;
            width: 100%;
            display: flex;
            flex-direction: column;
            outline: none;
          }

          .image-section {
            width: 100%;
            height: 450px;
            background-size: cover;
            background-position: center;
            will-change: transform;
            transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
          }

          .text-section {
            width: 100%;
            height: 450px;
            will-change: transform;
            transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
          }

          .slide-container .image-section {
            transform: translateY(-100%);
          }

          .slide-container .text-section {
            transform: translateY(100%);
          }

          .slide-container.active-slide .image-section {
            transform: translateY(0);
          }

          .slide-container.active-slide .text-section {
            transform: translateY(0);
          }

          @media (min-width: 768px) {
            .story-section {
              height: 600px;
            }

            .slide-container {
              height: 600px;
              flex-direction: row;
            }

            .image-section {
              width: 50%;
              height: 600px;
            }

            .text-section {
              width: 50%;
              height: 600px;
            }
          }
        `}
      </style>

      <Slider {...settings}>
        {stories.map((story, index) => (
          <div key={index}>
            <div
              className={`slide-container ${
                index === currentIndex ? "active-slide" : ""
              }`}
            >
              <div
                className="image-section"
                style={{
                  backgroundImage: `url(${story.image || fallbackImage})`,
                }}
              >
                {/* <img
                  src={story.image}
                  alt={`Story ${index + 1}`}
                  className="hidden"
                  onError={(e) => {
                    e.target.src = fallbackImage;
                    e.target.parentElement.style.backgroundImage = `url(${fallbackImage})`;
                  }}
                  loading="lazy"
                /> */}
              </div>

              <div
                className={`text-section flex flex-col justify-center items-start p-6 md:p-12 text-white ${story.bgColor}`}
              >
                <Heading
                  text="WHERE WE WORK"
                  color="text-white"
                  bgColor="bg-red-600"
                />
                <p className="text-base md:text-lg mb-6 leading-relaxed max-w-prose">
                  {story.text}
                </p>
                <a
                  href="#"
                  className="bg-white text-red-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                  aria-label="Learn More About Our Work"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
});

Stories.displayName = "Stories";

export default Stories;