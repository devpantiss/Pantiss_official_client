import React from "react";
import Heading from "../../../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ChallengesReclamation = () => {
  const challenges = [
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742227403/Agri_Land_India4-768x512_sx19fv.jpg",
      stat: "60%",
      description:
        "of farmers lack access to real-time data for farm competency assessment",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742227837/download_1_ajabxc.jpg",
      stat: "45%",
      description:
        "of rural farmers report insufficient training in modern farm business practices",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742227631/iStock-1313328141-min-min-min-min-min-2-1-1-scaled_kftr9q.jpg",
      stat: "70%",
      description:
        "of harvested produce faces losses due to poor market linkage and logistics",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742227742/smartfarming_qlwsmn.webp",
      stat: "55%",
      description:
        "of reclaimed farmland lacks smart farming technology integration",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742122479/Skill-development-and-entrepreneurship-promotion-in-the-agriculture-sector_bys2rt.jpg",
      stat: "65%",
      description:
        "of community agents lack resources for effective remote training",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742228015/images_2_vyldga.jpg",
      stat: "50%",
      description:
        "of farmers face delays in accessing cold storage and post-harvest solutions",
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
            Reclaiming agricultural potential and ensuring market success face significant obstacles. Inadequate data, limited training, and poor logistics hinder farmers’ ability to thrive in modern agricultural ecosystems.
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

export default ChallengesReclamation;