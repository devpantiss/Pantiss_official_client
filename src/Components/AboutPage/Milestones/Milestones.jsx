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
        <span className="text-red-600">Rehabilitation</span> &{" "}
        <span className="text-red-600">Resettlement in Joda Manganese Region</span>
      </>
    ),
    description:
      "We conducted an extensive Need Assessment Survey, Spatial Planning, and GIA Survey to facilitate the Rehabilitation and Resettlement (R&R) of 7,000 households across seven mines in the Chotanagpur Plateau. This initiative focused on understanding the unique needs of displaced families, planning sustainable resettlement strategies, and ensuring equitable access to resources and opportunities. Our efforts aimed to create holistic, inclusive solutions that address the social, economic, and infrastructural challenges faced by the affected communities, paving the way for a better quality of life and sustainable development in the region.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721743/2021_1_uwndfp.jpg",
  },
  {
    year: "2022",
    title: (
      <>
        <span className="text-red-600">Mining Skill</span>{" "}
        <span className="text-red-600">Development Program</span> {" "}in Talcher Coal Region
      </>
    ),
    description:
      "We successfully mobilized, trained, and assessed 150 candidates as part of the Mining Skill Development Program in Jajpur, equipping them with essential skills to thrive in the mining sector. Additionally, we conducted Recognition of Prior Learning (RPL) sessions for 1,000 individuals in the mining industry, validating and enhancing their existing knowledge and expertise. These initiatives aim to uplift the workforce by creating opportunities for skill enhancement, certification, and improved employability in the mining sector, fostering both individual growth and regional development.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721734/2022_stq3rx.jpg",
  },
  {
    year: "2023",
    title: (
      <>
        <span className="text-red-600">Fisheries</span> Cluster in{" "}
        <span className="text-red-600">Mining Pits.</span>
      </>
    ),
    description:
      "We proudly celebrate the establishment of fisheries clusters within mining pits, a pioneering initiative transforming livelihoods for 300 families. By repurposing mining pits into sustainable aquaculture hubs, we’ve empowered communities with tools, training, and market access to enhance productivity and ensure environmental regeneration. This initiative not only promotes economic independence but also fosters long-term socio-economic development, turning ecological challenges into opportunities. Together, we’re building a resilient and self-reliant future for these families.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721751/2023_new_wgvhrv.jpg",
  },
  {
    year: "2024",
    title: (
      <>
        <span className="text-red-600">Guava Plantation</span>
        {" "} in Abandoned Mining land in {" "}
        <span className="text-red-600">Sukinda Chromite Region.</span>
      </>
    ),
    description:
      "We take pride in transforming 350 acres of abandoned mining land in the Sukinda Chromite Region into thriving guava plantations. This initiative not only replenishes degraded land but also empowers local communities with sustainable livelihoods. By combining ecological restoration with economic growth, we are turning barren landscapes into green, productive ecosystems that promise a brighter, self-reliant future.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761721731/2024_zakmqr.jpg",
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
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => (
      <button>{milestonesData[i].year}</button> // Simple button with year
    ),
    dotsClass: "slick-dots custom-dots", // Apply custom class
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="flex flex-col container pb-12 mb-6 mx-auto">
      <Heading text="MILESTONES" color="text-black" bgColor="bg-red-600" />
      <div className="flex justify-center items-center">
        <Slider {...settings} className="w-[380px] lg:w-[1200px]">
          {milestonesData.map((milestone, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[400px] lg:w-[1000px] mx-auto"
            >
              <div className="flex flex-col lg:flex-row justify-center gap-x-10 items-center">
                <div className="w-full lg:w-2/3 lg:mb-4">
                  <img
                    src={milestone.imageUrl}
                    alt={milestone.year}
                    className="w-full lg:h-[450px] h-44 object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/3 mt-5">
                  <h3 className="text-lg font-bold">{milestone.year}</h3>
                  <p className="text-2xl lg:text-5xl font-bold text-gray-700">
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