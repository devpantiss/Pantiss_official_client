import React from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChallengesReclamation = () => {
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
    arrows: true, // Enable arrows for better navigation
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false, // Disable centerMode for a cleaner grid-like layout
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
    customPaging: () => (
      <button className="w-2 h-2 bg-gray-400 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-red-500" />
    ), // Custom dots for better styling
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
            <div key={index} className="px-4">
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
      </div>
    </section>
  );
};

export default ChallengesReclamation;
