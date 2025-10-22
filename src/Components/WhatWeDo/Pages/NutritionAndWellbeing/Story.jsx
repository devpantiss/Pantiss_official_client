// Story.js
import React, { useState, useCallback } from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Story = () => {
  const stories = [
    {
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
      text: "Children need champions. Get involved, speak out, volunteer, or become a donor and give every child a fair chance to succeed.",
      bgColor: "bg-orange-500",
    },
    {
      image: "https://images.unsplash.com/photo-1627634771521-9754fe2bc49b",
      text: "Communities thrive with education. Support initiatives that provide schools and resources.",
      bgColor: "bg-blue-500",
    },
    {
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcmluZyUyMHNvbHV0aW9uc3xlbnwwfDB8MHx8fDA%3D",
      text: "Health for all begins with you. Donate to ensure children receive vaccines and clean water.",
      bgColor: "bg-green-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true, // Ensures the slider loops indefinitely
    speed: 1000, // Transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enables automatic sliding
    autoplaySpeed: 5000, // 5 seconds per slide
    beforeChange: useCallback((oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    }, []),
    afterChange: useCallback((newIndex) => {
      // Optional: Ensures state stays in sync after looping
      setCurrentIndex(newIndex % stories.length);
    }, [stories.length]),
    customPaging: (i) => (
      <button
        className="w-3 h-3 mx-1 rounded-full bg-white opacity-50 hover:opacity-100 transition-opacity duration-300"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots custom-dots",
    pauseOnHover: false, // Ensures loop continues even on hover
    pauseOnDotsHover: false, // Ensures loop continues when hovering dots
    pauseOnFocus: false, // Ensures loop continues when focused
  };

  const fallbackImage = "https://via.placeholder.com/800x600?text=Fallback+Image";

  return (
    <section className="story-section relative overflow-hidden w-full">
      <style>
        {`
          /* Base styles */
          .story-section {
            height: 900px; /* Mobile height */
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
            height: 900px; /* Mobile height */
            width: 100%;
            display: flex;
            flex-direction: column;
            outline: none;
          }

          .image-section {
            width: 100%;
            height: 450px; /* Half of mobile height */
            background-size: cover;
            background-position: center;
            will-change: transform;
            transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
          }

          .text-section {
            width: 100%;
            height: 450px; /* Half of mobile height */
            will-change: transform;
            transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1);
          }

          /* Animation states */
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

          /* Desktop styles */
          @media (min-width: 768px) {
            .story-section {
              height: 600px; /* Desktop height */
            }

            .slide-container {
              height: 600px; /* Desktop height */
              flex-direction: row;
            }

            .image-section {
              width: 50%;
              height: 600px; /* Full desktop height */
            }

            .text-section {
              width: 50%;
              height: 600px; /* Full desktop height */
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
                <img
                  src={story.image}
                  alt={`Story ${index + 1}`}
                  className="hidden"
                  onError={(e) => {
                    e.target.src = fallbackImage;
                    e.target.parentElement.style.backgroundImage = `url(${fallbackImage})`;
                  }}
                  loading="lazy"
                />
              </div>

              <div
                className={`text-section flex flex-col justify-center items-start p-6 md:p-12 text-white ${story.bgColor}`}
              >
                <Heading
                  text="STORIES"
                  color="text-white"
                  bgColor="bg-red-500"
                />
                <p className="text-base md:text-lg mb-6 leading-relaxed max-w-prose">
                  {story.text}
                </p>
                {/* <a
                  href="#"
                  className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="Join Pantiss"
                >
                  Join Pantiss
                </a> */}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Story;