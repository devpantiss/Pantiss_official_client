import React, { useState, useCallback } from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Story = () => {
  const stories = [
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122359/a-woman-farmer-with-digital-tablet-on-a-potato-field-smart-farming-and-precision-agriculture-4-0-modern-agricultural-technology-and-data-management-to-industry-farm-photo_w5f8tt.jpg",
      text: "My family relied on unpredictable farming in Odisha until the Digit Farm Bench Marking program brought smart tools to our village. With their farm analytics and network support, I learned to optimize our crops using data insights. Now, our yields have doubled, and I can sell directly to buyers, ensuring a steady income for my children’s education.",
      name: "Sarita Behera",
      occupation: "Smart Farmer",
      bgColor: "bg-orange-500",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742121303/anisa-wulan-asri-dSb8R7QAeLM-unsplash_izeerw.jpg",
      text: "Growing guavas was just a dream until the Guavas AcreRise program came to our tribal community in Odisha. They trained me through the Farm Business School’s online platform to manage my orchard and connect with markets. Today, I run a thriving guava farm that supports my family and inspires other women in my village.",
      name: "Manjula Naik",
      occupation: "Guava Farmer",
      bgColor: "bg-blue-500",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122851/Pngtree_portfolio_displays_and_mobile_apps_8471028_m9g1ah.jpg",
      text: "Selling our fish was a struggle until the Harvest To Market solution linked us to buyers through their online store. As part of the Pondy Fish program, I learned to manage fisheries sustainably with cold storage support. Now, my income is stable, and my sons can focus on their studies instead of labor.",
      name: "Biren Munda",
      occupation: "Fisherman",
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
    afterChange: useCallback(
      (newIndex) => {
        setCurrentIndex(newIndex % stories.length);
      },
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
  };

  const fallbackImage =
    "https://via.placeholder.com/800x600?text=Fallback+Image";

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
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Story;
