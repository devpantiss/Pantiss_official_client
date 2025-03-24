import React from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChallengesTransition = () => {
  const challenges = [
    {
      imageUrl:
        "https://www.adb.org/sites/default/files/page/752686/images/img-etm-challenge-01.jpg",
      stat: "Over 50%",
      description:
        "of global greenhouse gas emissions originate in Asia and the Pacific",
    },
    {
      imageUrl:
        "https://www.adb.org/sites/default/files/page/752686/images/img-etm-challenge-02.jpg",
      stat: "25%",
      description:
        "of annual global emissions come from coal-fired power plants",
    },
    {
      imageUrl:
        "https://www.adb.org/sites/default/files/page/752686/images/img-etm-challenge-03.jpg",
      stat: "90%",
      description: "of young (<20 years) coal-fired power plants are in Asia",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i) => (
      <button
        className="w-4 h-4 bg-red-600 rounded-full mx-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-700"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <section className="bg-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <Heading
            text="The Challenge"
            color="text-black"
            bgColor="bg-red-600"
          />
          <p className="text-gray-700 text-lg leading-relaxed text-center lg:text-left mt-4">
            The battle against climate change will be won or lost in Asia and
            the Pacific. If emissions from existing coal power plants are not
            addressed, the region will fail to meet the Paris Agreement targets.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings} className="relative">
          {challenges.map((challenge, index) => (
            <div key={index} className="p-4">
              <div className="group relative h-[350px] bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
                {/* Image */}
                <div className="h-[250px] w-full">
                  <img
                    src={challenge.imageUrl}
                    alt={`${challenge.stat} - ${challenge.description}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300 group-hover:bg-opacity-20" />
                </div>

                {/* Text Content */}
                <div className="absolute bottom-0 w-full bg-white p-4 text-center">
                  <h4 className="text-3xl font-bold text-red-600 mb-2">
                    {challenge.stat}
                  </h4>
                  <p className="text-gray-600 text-sm leading-tight">
                    {challenge.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Scoped CSS for Dots */}
        <style>{`
          .custom-dots {
            background-color: transparent;
            position: absolute;
            bottom: -50px !important;
            display: flex !important;
            justify-content: center;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .custom-dots li {
            margin: 0 4px;
          }

          .custom-dots li button {
            width: 16px; /* Larger size: 4rem = 16px */
            height: 16px;
            background-color: #dc2626; /* bg-red-600 for inactive dots */
            border-radius: 50%;
            opacity: 0.8;
            transition: all 0.3s ease;
          }

          .custom-dots li button:hover {
            background-color: #ef4444; /* bg-red-500 on hover */
            opacity: 1;
          }

          .custom-dots li.slick-active button {
            background-color: #ffffff; /* bg-white for active dot */
            box-shadow: 0 0 0 2px #dc2626; /* ring-2 ring-red-600 */
            opacity: 1;
            transform: scale(1.1); /* Slightly larger for emphasis */
          }
        `}</style>
      </div>
    </section>
  );
};

export default ChallengesTransition;
