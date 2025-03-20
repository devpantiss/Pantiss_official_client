import React, { useState, useCallback } from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoryRehab = () => {
  const stories = [
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742216965/GIS-companies-in-Bangalore_mqw2sl.jpg",
      text: "Our village in Odisha was displaced by mining, but the GIS Hamlies platform gave us a new start. Using maps and drones, they planned a resettlement site that suits our needs. Now, I live in a home with clean water and a school nearby, all thanks to their spatial analysis.",
      name: "Jagan Sethi",
      occupation: "Resettled Farmer",
      bgColor: "bg-orange-500",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742315554/people-gathered-together-village-meeting-society-work-society-meeting-village-206808403_pbrdkv.webp",
      text: "The Resettlement Gram Sabha brought our community together after years of uncertainty. Through village meetings and a dashboard, we chose our new land and got support for building homes. I now have a house and a small shop, giving my family stability.",
      name: "Lalita Majhi",
      occupation: "Shopkeeper",
      bgColor: "bg-blue-500",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742217298/5878303_ru2f7m.jpg",
      text: "Mining took our land, but the R & R Governance framework ensured fairness. With audits and committees, they rebuilt our lives with proper compensation and a new village. I work as a community overseer now, making sure everyone benefits.",
      name: "Mohan Kisan",
      occupation: "Community Overseer",
      bgColor: "bg-green-500",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: useCallback((oldIndex, newIndex) => {
      setCurrentIndex(newIndex);
    }, []),
    afterChange: useCallback((newIndex) => {
      setCurrentIndex(newIndex % stories.length);
    }, [stories.length]),
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

          /* Quote and attribution styling */
          .story-quote {
            position: relative;
            padding: 0 1rem;
          }

          .story-quote::before,
          .story-quote::after {
            content: '"';
            font-size: 2rem;
            font-family: Georgia, serif;
            color: #ffffff;
            position: absolute;
            line-height: 1;
          }

          .story-quote::before {
            top: -0.5rem;
            left: 0;
          }

          .story-quote::after {
            bottom: -1rem;
            right: 0;
          }

          .story-attribution {
            margin-top: 1.5rem;
            font-weight: bold;
            font-size: 1.125rem;
            color: #ffffff;
          }

          .story-attribution span {
            display: block;
            font-weight: normal;
            font-size: 1rem;
            opacity: 0.9;
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
                <p className="story-quote text-base md:text-lg mb-6 leading-relaxed max-w-prose">
                  {story.text}
                </p>
                <div className="story-attribution">
                  {story.name}
                  <span>{story.occupation}</span>
                </div>
                <a
                  href="#"
                  className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 mt-4"
                  aria-label="Join Us"
                >
                  Join Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default StoryRehab;