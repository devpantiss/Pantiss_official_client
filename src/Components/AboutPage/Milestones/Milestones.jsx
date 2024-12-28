import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Heading from "../../Common/Heading";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./milestones.css";

const milestonesData = [
  {
    year: "2021",
    title: (
      <>
        Mining Programme-<span className="text-red-600">150</span>
      </>
    ),
    description:
      "In our first milestone, we successfully mobilized, trained, and assessed 150 candidates as part of the Mining Skill Development Program in Jajpur. These candidates were equipped with specialized skills and knowledge, leading to their successful placement in the mining industry. This achievement marks a significant step toward enhancing livelihoods and fostering sustainable development in the region.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735385555/2021_oikylf.jpg",
  },
  {
    year: "2022",
    title: (
      <>
        RPL Programme-<span className="text-red-600">1000</span>
      </>
    ),
    description:
      "In a significant achievement, we successfully conducted Recognition of Prior Learning (RPL) sessions in the mining sector for 1,000 individuals in Jajpur. This initiative aimed to validate their skills, enhance their employability, and provide them with certifications that recognize their expertise, paving the way for better opportunities and professional growth.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735385555/01_2022_odywzq.jpg",
  },
  {
    year: "2023",
    title: (
      <>
        Plastic Waste Segregation-<span className="text-red-600">2500</span>
      </>
    ),
    description:
      "We successfully mobilized, trained, and assessed over 3,000 candidates for the role of sanitation workers in Anugul. Through dedicated efforts, these individuals were equipped with the skills and resources needed for sustainable employment, contributing to improved sanitation and community development in the region.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735385555/2023_aiamda.jpg",
  },
  {
    year: "2024",
    title: (
      <>
        FCP-<span className="text-red-600">3000</span>
      </>
    ),
    description:
      "We proudly celebrate the establishment of 3,000 Fishing Producer Companies, transforming livelihoods and fostering sustainable growth. Through this initiative, we’ve empowered fishing communities with the tools, resources, and organizational support needed to enhance productivity, ensure fair market access, and promote long-term socio-economic development. Together, we’re building a stronger, self-reliant future for thousands of fishing families.",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735385555/02024_atudg3.jpg",
  },
];

// Custom arrows for navigation
const PreviousArrow = ({ onClick }) => (
  <div
    className="custom-arrow absolute -bottom-[70px] lg:-bottom-12 cursor-pointer left-[33%]"
    onClick={onClick}
  >
    <FaChevronLeft className="text-red-600 hover:text-red-700 text-[30px] transition-all duration-300" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow absolute -bottom-[70px] lg:-bottom-12 cursor-pointer right-[32%]"
    onClick={onClick}
  >
    <FaChevronRight className="text-red-600 hover:text-red-700 text-[30px] transition-all duration-300 z-50" />
  </div>
);

const Milestones = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <button className="text-lg -mx-3 text-gray-600 hover:text-red-600 transition-all duration-300 z-50">
        {milestonesData[i].year}
      </button>
    ),
    dotsClass: "slick-dots custom-dots", // custom layout for dots
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="flex flex-col justify-center items-center container pb-12 mx-auto">
      <Heading text="Milestones" color="text-black" bgColor="bg-red-600" />
      <div className="flex py-12 justify-center items-center ">
        <Slider
          {...settings}
          className="py-12 w-[380px] md:w-[768px] lg:w-[1200px]"
        >
          {milestonesData.map((milestone, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[400px] lg:w-[900px] mx-auto"
            >
              <div className="flex flex-col lg:flex-row justify-center gap-x-10 items-center">
                <div className="w-full lg:w-1/2 lg:mb-4">
                  <img
                    src={milestone.imageUrl}
                    alt={milestone.year}
                    className="w-full lg:h-[450px] h-44 object-contain"
                  />
                </div>
                <div className="w-full lg:w-1/2 mt-5">
                  <h3 className="text-2xl font-bold">{milestone.year}</h3>
                  <p className="text-3xl lg:text-6xl font-bold text-gray-700">
                    {milestone.title}
                  </p>
                  <p className="text-md text-gray-500 mt-2">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Milestones;
