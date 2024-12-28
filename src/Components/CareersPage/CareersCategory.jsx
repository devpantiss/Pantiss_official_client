import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CareersCategory = () => {
  const navigate = useNavigate();
  const careerAreas = [
    {
      title: "MIS",
      count: 0,
      img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735309951/glenn-carstens-peters-npxXWgQ33ZQ-unsplash_svzntu.jpg", // Replace with the actual image URL
    },
    {
      title: "Social Enterprise",
      count: 2,
      img: "https://careers.brac.net/category/3.png", // Replace with the actual image URL
    },
    {
      title: "Technical, Vocational Education and Training",
      count: 2,
      img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735301666/IMG_9085_tkrncl.jpg", // Replace with the actual image URL
    },
    {
      title: "ICT Development",
      count: 4,
      img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735309804/nick-morrison-FHnnjk1Yj7Y-unsplash_hwknl4.jpg", // Replace with the actual image URL
    },
    {
      title: "Civil Engineering",
      count: 2,
      img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735278481/vocational_msprt8.jpg", // Replace with the actual image URL
    },
    {
      title: "Research and Advocacy",
      count: 2,
      img: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735309955/nima-van-ghavim-Q9C0SMrg4gU-unsplash_hrvtzq.jpg", // Replace with the actual image URL
    },
    {
      title: "Development Compliance",
      count: 2,
      img: "https://careers.brac.net/category/3.png", // Replace with the actual image URL
    },
  ];

  // Custom navigation buttons
  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="z-50 absolute top-1/2 lg:-left-20 left-0 transform -translate-y-1/2 text-[100px] text-red-600 p-2 rounded-full hover:bg-white hover:ring-2 hover:ring-red-600 transition-all duration-300 ease-in-out"
    >
      <FaChevronLeft />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="z-50 absolute top-1/2 right-0 lg:-right-20 transform -translate-y-1/2 text-[100px] text-red-600 p-2 rounded-full hover:bg-white hover:ring-2 hover:ring-red-600 transition-all duration-300 ease-in-out"
    >
      <FaChevronRight />
    </button>
  );

  const handleCardClick = (category) => {
    navigate(`/careers/jobs?category=${encodeURIComponent(category)}`);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplayspeed: 1500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="text-center px-8 py-12 flex flex-col justify-center items-center relative">
      <h2 className="text-3xl font-bold">WHAT CAREER AREA INTERESTS YOU?</h2>
      <p className="mt-4 text-gray-600">
        Discover how you can be a part of that change by choosing a career path
        that interests you the most.
      </p>

      <div className="max-w-7xl mt-8 relative">
        <Slider {...settings}>
          {careerAreas.map((area, index) => (
            <div key={index} className="px-4">
              <div
                onClick={() => handleCardClick(area.title)}
                className="cursor-pointer"
              >
                <div className="relative w-64 h-64 mx-auto overflow-hidden">
                  <img
                    src={area.img}
                    alt={area.title}
                    className="w-full h-full shadow-lg rounded-full object-cover"
                  />
                  <span className="absolute top-4 right-2 bg-red-500 text-white w-10 h-10 flex items-center justify-center z-50 text-sm font-bold rounded-full">
                    {area.count}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{area.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className="px-3 py-2 rounded-md bg-red-600 text-white">
        <Link to="/careers/jobs">View All Jobs</Link>
      </button>
    </section>
  );
};

export default CareersCategory;
