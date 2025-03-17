import React from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChallengesSkills = () => {
  const challenges = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742218505/specific_job_tw4j14.avif",
      stat: "65%",
      description:
        "of skilled workers lack access to industry-specific job opportunities",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742219056/pngwing.com_1_nfx5r9.png",
      stat: "50%",
      description:
        "of candidates struggle with unclear career pathways due to limited counseling",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742219212/training-center_cjbxgn.avif",
      stat: "80%",
      description:
        "of mining regions lack advanced training facilities for industrial skills",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126787/E-FvYHdVIAYEXa9_efneu2.webp",
      stat: "45%",
      description:
        "of blue-collar workers report inadequate support for job placement",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/56cff1ce-3f2c-477a-98b9-74fd979e24fc_j3m2x6.jpg",
      stat: "70%",
      description:
        "of rural trainees face mobility barriers to skill development programs",
    },
    // {
    //   imageUrl:
    //     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/7cf81b40-cb85-47b0-bc17-5ed47fa210ed_viwshh.jpg",
    //   stat: "60%",
    //   description:
    //     "of employers cite a shortage of data-driven skill assessment tools",
    // },
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
    customPaging: () => (
      <button className="w-2 h-2 bg-gray-400 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-red-500" />
    ),
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
            Empowering the workforce in mining and industrial sectors faces significant hurdles. Limited access to opportunities, inadequate training infrastructure, and gaps in career guidance threaten skill development and economic growth.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings} className="relative">
          {challenges.map((challenge, index) => (
            <div key={index} className="px-4">
              <div className="group relative h-[350px] hover:ring-2 hover:ring-red-600 bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
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

export default ChallengesSkills;