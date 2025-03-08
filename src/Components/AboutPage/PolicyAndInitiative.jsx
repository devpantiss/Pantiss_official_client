import React from "react";
import Heading from "../Common/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Arrow Component
const CustomArrow = ({ className, style, onClick, direction }) => {
  const isPrev = direction === "prev";
  const ariaLabel = isPrev ? "Previous slide" : "Next slide";
  const icon = isPrev ? "<" : ">";

  return (
    <button
      className={`${className} absolute top-1/2 ${
        isPrev ? "left-2" : "right-2"
      } transform -translate-y-1/2 h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      <span className="text-2xl">{icon}</span>
    </button>
  );
};

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <CustomArrow direction="prev" />,
  nextArrow: <CustomArrow direction="next" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const PoliciesAndInitiative = () => {
  const initiatives = [
    {
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9saWN5fGVufDB8MHwwfHx8Mg%3D%3D",
      heading: "Energy Policy",
      description:
        "ADB has approved a new energy policy to support universal access to reliable and affordable energy services, while promoting the low-carbon transition in Asia and the Pacific.",
      linkText: "Energy Policy Guiding Principles",
      linkUrl: "#",
      hasPlayIcon: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533073526757-2c8ca1df9f1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saWN5fGVufDB8MHwwfHx8Mg%3D%3D",
      heading: "Energy Transition Mechanism (ETM)",
      description:
        "A market-based, equitable, and scalable way of accelerating the retirement of coal-fired power plants, while also jumpstarting the growth of renewable energy capacity.",
      linkText: "ETM for Southeast Asia Partnership Launch",
      linkUrl: "#",
      hasPlayIcon: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9saWN5fGVufDB8MHwwfHx8Mg%3D%3D",
      heading: "Healthy Oceans and Sustainable Blue Economies",
      description:
        "ADB recognizes that investments in ocean health and blue economies are critical to strengthen resilience, improve food security, protect cultural heritage, and catalyze economic transformation in Asia and the Pacific.",
      linkText: "ADB Issues First Blue Bond for Ocean Investments",
      linkUrl: "#",
      hasPlayIcon: false,
    },
  ];

  return (
    <section className="bg-gray-200 py-12 px-6">
      <div className="container mx-auto">
        {/* Title */}
        <Heading
          text="Policies and Initiatives"
          color="text-gray-800"
          bgColor="bg-red-600"
        />

        {/* Slider */}
        <Slider {...settings}>
          {initiatives.map((initiative, index) => (
            <div key={index} className="px-3">
              <div className="flex flex-col h-[600px] bg-white">
                {/* Image */}
                <div className="mb-4">
                  <img
                    src={initiative.image}
                    alt={initiative.heading}
                    className="w-full h-64 object-cover rounded-md"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/600x400"; // Fallback image
                    }}
                  />
                </div>

                <div className="p-4">
                  {/* Heading */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {initiative.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {initiative.description}
                  </p>

                  {/* Link */}
                  <a
                    href={initiative.linkUrl}
                    className="text-blue-600 underline hover:text-blue-800 text-sm font-medium flex items-center"
                  >
                    {initiative.hasPlayIcon && (
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                    {initiative.linkText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* CSS to hide default arrows */}
        <style jsx>{`
          .slick-arrow.slick-prev,
          .slick-arrow.slick-next {
            display: none !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default PoliciesAndInitiative;
