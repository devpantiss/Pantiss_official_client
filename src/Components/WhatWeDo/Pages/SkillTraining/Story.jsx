import React, { useState, useCallback } from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Story = () => {
  const stories = [
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/3df3643c-cf03-4323-8fce-d34d63d234ab_cymgyv.jpg",
      text: "For years, my family struggled to find steady work in Odisha’s mining belt, but the Responsible Mining Operators program changed everything. Through hands-on training, I gained skills that landed me a job at a local mine. Now, I earn a stable income to support my wife and three children, and our village has access to better resources. This program gave me pride and a purpose—I’m no longer just a laborer but a skilled worker contributing to my community’s growth.",
      name: "Raghunath Majhi",
      occupation: "Mining Operator",
      bgColor: "bg-orange-500",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742316784/freepik__the-style-is-candid-image-photography-with-natural__18031_exrhs0.jpg",
      text: "The Skill Candor program brought a counseling van to our doorstep in a small tribal village in Odisha, something I never imagined. They assessed my abilities and guided me toward a career in mechatronics for heavy machinery. With their support, I trained to become a specialist and now work on massive excavators, earning respect and a wage that helps my family build a better home. This program showed me that even a woman from a remote village can dream big.",
      name: "Sunita Pradhan",
      occupation: "Mechatronics Specialist",
      bgColor: "bg-blue-500",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg",
      text: "As a tribal farmer from Odisha’s industrial corridor, the Skill Cafe turned my life around by offering workshops at a Center of Excellence near my village. I learned advanced techniques in foundry work using simulators and real equipment like Volvo haulpacks. After completing the training, I joined a local manufacturing unit, tripling my income and teaching my brothers what I learned, lifting our whole family. This solution didn’t just give me a job—it gave us hope for a sustainable future.",
      name: "Laxman Kisku",
      occupation: "Foundry Worker",
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
            font-family: Georgia, serif; /* A serif font for classic quote styling */
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
            font-size: 1.125rem; /* 18px */
            color: #ffffff;
          }

          .story-attribution span {
            display: block;
            font-weight: normal;
            font-size: 1rem; /* 16px */
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
                {/* <a
                  href="#"
                  className="bg-white text-orange-500 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 mt-4"
                  aria-label="Join Us"
                >
                  Join Us
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