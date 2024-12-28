import React from "react";
import Slider from "react-slick";
import { FaHandshake, FaLeaf, FaGem, FaCogs, FaTools } from "react-icons/fa";
import Heading from "../../Common/Heading";

const PurposeSlider = () => {
  const slides = [
    {
      title: "Relationships",
      description:
        "Sustainable solutions that create a unique degree of value for our stakeholders. Establishing strong networks in place to ensure smooth business operations.",
      image:
        "https://www.trivenigroup.com/storage/3/images/se-strong-relationships.webp",
      icon: <FaHandshake size={30} />,
    },
    {
      title: "Sustainability",
      description:
        "Leadership in all our business lines with sustainability at the core. Enabling environmentally responsible operations.",
      image:
        "https://www.trivenigroup.com/storage/3/images/se-sustainability.webp",
      icon: <FaLeaf size={30} />,
    },
    {
      title: "Ethics",
      description:
        "Professional and transparent business practices with a strong focus on governance, health, and safety.",
      image:
        "https://www.trivenigroup.com/storage/3/images/Product-Quality.webp",
      icon: <FaGem size={30} />,
    },
    {
      title: "Product Quality",
      description:
        "Commitment to delivering the highest quality products through rigorous standards and innovation.",
      image: "https://www.trivenigroup.com/storage/3/images/Technology.webp",
      icon: <FaCogs size={30} />,
    },
    {
      title: "Technology",
      description:
        "Leveraging cutting-edge technology to create sustainable solutions and drive operational excellence.",
      image: "https://www.trivenigroup.com/storage/3/images/se-technology.webp",
      icon: <FaTools size={30} />,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10%",
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    customPaging: (i) => (
      <div className="h-1 rounded-full transition-colors duration-300"></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`h-1 border transition-all ${
                dot.props.className.includes("slick-active")
                  ? "bg-red-500"
                  : "bg-gray-300"
              }`}
            >
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-white py-8">
      <Heading
        text="Purpose and Priorities"
        color="text-black"
        bgColor="bg-red-600"
      />
      <div className="w-full max-w-8xl mx-auto">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative h-[400px] md:h-[500px] flex items-center px-2"
            >
              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-y-0 right-0 w-[300px] lg:w-[500px] bg-black bg-opacity-50 flex items-center justify-start">
                <div className="w-full md:w-1/2 h-full flex flex-col justify-center p-6 md:pl-12 text-white">
                  <div className="flex items-center mb-4">
                    <div className="text-white">{slide.icon}</div>
                    <h3 className="text-xl font-semibold ml-3">
                      {slide.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed">
                    {slide.description}
                  </p>
                  <hr className="w-16 mt-4 border-t-2 border-white" />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PurposeSlider;
