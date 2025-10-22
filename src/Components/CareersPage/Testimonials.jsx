import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/c_auto,h_550,w_400/dc6111f1-1097-47e1-bafc-e24ccc2d9098_dmckxl.jpg",
      quote:
        "As the Lead for Water, Sanitation, and Hygiene at Pantiss Foundation, I am committed to ensuring that every community we serve has access to safe water, proper sanitation, and hygienic living conditions. Our work goes beyond infrastructure — it’s about restoring dignity, promoting health, and empowering people to build cleaner, safer futures. Each project is a step toward a healthier, more equitable society.",
      name: "Mr. Dwarka Prasad Bisoyi",
      title: "Lead, Water, Sanitation, and Hygiene",
      location: "Bhubaneswar, Odisha",
    },
    {
      image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760097567/rahul_2_bct1yz.jpg",
      quote:
        "As the Lead for Education, Skills Development, and Migration at Pantiss Foundation, I’ve witnessed how targeted skilling and education can transform lives and communities. Our mission is to empower youth and migrant workers with the right opportunities, bridging the gap between potential and employment. At Pantiss, every initiative we take moves us closer to an inclusive and self-reliant Odisha.",
      name: "Mr. Rahul Nayak",
      title: "Lead, Education, Skills Development, and Migration",
      location: "Bhubaneswar, Odisha",
    },
    {
      image:"https://res.cloudinary.com/djtzx6wo7/image/upload/v1760620118/Padmini_2_d1jkc5.jpg",
      quote:
        "As the Co-Lead for Placements and Industry Engagement at Pantiss Foundation, I’ve had the opportunity to bridge the gap between skilled talent and meaningful employment. By fostering strong partnerships with industries, we’re not only enhancing livelihood opportunities but also strengthening community resilience. At Pantiss, we believe in creating pathways where every skill leads to a sustainable future.",
        name: "Ms. Padmini Kumari Bisoyi",
        title: "Co-Lead, Placements & Industry Engagement",
        location: "Bhubaneswar, Odisha",
    },
    {
      image:
      "https://res.cloudinary.com/djtzx6wo7/image/upload/v1760005985/57d13a34-2e55-4da8-8a33-ed03e9943eb6_l6djf9.png",
      quote:
        "As an Associate in Social Compliance and Safeguarding at Pantiss Foundation, I take pride in ensuring that our programs uphold the highest standards of ethics, safety, and inclusivity. Every initiative we undertake is guided by the principles of dignity and protection for all. It’s inspiring to work in an environment that not only drives social impact but also prioritizes the well-being and rights of every individual we serve.",
      name: "Manasi Behera",
      title: "Associate, Social Compliance and Safeguarding",
      location: "Bhubaneswar, Odisha",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // Enable auto-scroll
    autoplaySpeed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-full transition-colors duration-300"></div>
    ),
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">
          {dots.map((dot, index) => (
            <li
              key={index}
              className={`w-4 h-4 rounded-full border transition-all ${
                dot.props.className.includes("slick-active")
                  ? "bg-red-500"
                  : "bg-white border-red-500"
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
    <div className="max-w-7xl mx-auto px-12 p-8">
      <div className="relative">
        <button
          className="absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2 text-red-500 text-[48px] rounded-full p-2 shadow-lg z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft />
        </button>

        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-row px-6 items-center">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/3 flex rounded-md justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-md object-cover w-[400px] h-[500px] shadow-lg"
                    />
                </div>

                {/* Quote Section */}
                <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-12 text-gray-800">
                  <svg
                    className="w-44 h-44 text-gray-300 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 107 96"
                  >
                    <path
                      d="M48 96V47.888H23.887C24.488 32.525 32.526 24.58 48 24.056V0C16 3.672 0 19.635 0 47.888V96h48zm59 0V47.888H82.887C83.488 32.525 91.526 24.58 107 24.056V0C75 3.672 59 19.635 59 47.888V96h48z"
                      fill="#E3E3E3"
                      fillRule="nonzero"
                    />
                  </svg>
                  <p className="text-lg md:text-2xl italic font-light text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <h3 className="mt-4 font-bold text-xl text-red-500">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {testimonial.title} <br /> {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button
          className="absolute right-0 lg:-right-16 top-1/2 transform -translate-y-1/2 text-red-500 text-[48px] rounded-full p-2 shadow-lg z-10"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
