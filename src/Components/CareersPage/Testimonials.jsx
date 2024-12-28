import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735389221/dwarka_kfaln7.png", // Replace with actual image URLs
      quote:
        "As the General Manager (Operations) at Pantiss Foundation, I am proud to be part of an organization that is transforming lives through its impactful initiatives. Our commitment to innovation, excellence, and community empowerment drives everything we do. At Pantiss Foundation, every day presents an opportunity to make a meaningful difference, and I am honored to lead a team of passionate individuals dedicated to creating sustainable change.",
      name: "Dwarka Prasad Bisoyi",
      title: "General Manager (Operations)",
      location: "Bhubaneswar, Odisha",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735389222/rahul_sir_rpw5o7.png",
      quote:
        "Being the Associate Vice President of Operations at Pantiss Foundation has been an incredibly fulfilling experience. Here, we work with passionate individuals to create meaningful impact and drive sustainable change. The collaborative culture empowers growth, innovation, and a shared purpose. If you're looking to make a difference, Pantiss Foundation is the place to be.",
      name: "Rahul Nayak",
      title: "Associate Vice President (Operations)",
      location: "Bhubaneswar, Odisha",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735389221/padmini_rue0ch.png", // Replace with another image URL
      quote:
        "Being a part of Pantiss Foundation has been an incredible journey of driving impactful change. As the General Manager (Industry Engagement), I’ve had the privilege to collaborate with diverse industries, creating meaningful partnerships that empower communities and promote sustainable development. At Pantiss, we are not just building careers; we are shaping futures and transforming lives. It’s truly fulfilling to be part of an organization that aligns business with purpose.",
      name: "Padmini Kumari Bisoyi",
      title: "General Manager (Industry Engagement)",
      location: "Bhubaneswar, Odisha",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735390293/IMG_20241107_151423707_HDR_rj7i83.jpg", // Replace with another image URL
      quote:
        "As an Assistant Manager in Human Resources at Pantiss Foundation, I’ve had the privilege of working alongside a passionate and dedicated team committed to making a difference in the community. The foundation's inclusive culture, emphasis on growth, and dedication to sustainability provide a rewarding environment for personal and professional development. Every day presents new opportunities to contribute to meaningful change, and I’m proud to be part of an organization that genuinely cares about its people and the communities we serve.",
      name: "Manasi Behera",
      title: "Assistant Manager (Human Resource) ",
      location: "Bhubaneswar, Odisha",
    },
    {
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735390293/IMG_20241107_131503164_HDR_g0slxs.jpg", // Replace with another image URL
      quote:
        "As an Assistant Manager in Knowledge Management at Pantiss Foundation, I am proud to be part of an organization that is truly committed to creating lasting social impact. The foundation's dynamic approach to development and its focus on empowering communities through sustainable initiatives have been incredibly inspiring. Here, I have had the opportunity to work alongside passionate individuals who are dedicated to fostering growth and innovation. It’s a place where my skills are valued, and I’m continuously encouraged to learn and grow, both personally and professionally. Joining Pantiss has been a rewarding experience, and I’m excited about the future we are building together.",
      name: "Monalisha Nayak",
      title: "Assistant Manager (Knowledge Management)",
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
                    className="rounded-md w-full h-full object-contain"
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
