import React from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChallengesEia = () => {
  const challenges = [
    {
      imageUrl:
        "https://www.adb.org/sites/default/files/page/752686/images/img-etm-challenge-01.jpg",
      stat: "over 50%",
      description: "of global greenhouse gas emissions originate in Asia and the Pacific",
    },
    {
      imageUrl:
        "https://www.adb.org/sites/default/files/page/752686/images/img-etm-challenge-02.jpg",
      stat: "25%",
      description: "of annual global emissions come from coal-fired power plants",
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
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // To center the slides with equal spacing
    centerPadding: "0", // No padding on sides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section className="bg-red-600 py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <Heading text="The Challenge" color="text-white" bgColor="bg-white" />
          <p className="text-white text-lg text-left leading-relaxed">
            The battle against climate change will be won or lost in Asia and the Pacific. If emissions from existing coal power plants are not addressed, the region will fail to meet the Paris Agreement targets.
          </p>
        </div>

        {/* Carousel */}
        <div className="grid grid-cols-3">
          {challenges.map((challenge, index) => (
            <div key={index} className="px-2">
              <div className="relative h-[450px] ring-2 ring-white overflow-hidden rounded-lg shadow-md">
                <img
                  src={challenge.imageUrl}
                  alt={`Challenge ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-0 w-full text-red-600 bg-white p-4">
                  <h4 className="text-3xl font-bold text-center">{challenge.stat}</h4>
                  <p className="text-base text-center leading-tight">{challenge.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesEia;