import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Common/Heading";

// Reusable Arrow Component
const CustomArrow = ({ className, style, onClick, direction }) => {
  const isPrev = direction === "prev";
  const ariaLabel = isPrev ? "Previous slide" : "Next slide";

  return (
    <button
      className={`${className} absolute top-1/2 ${isPrev ? "left-2" : "right-2"} transform -translate-y-1/2 h-12 w-12 bg-red-600 text-white rounded-full flex items-center justify-center cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-700`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      {isPrev ? (
        <span className="text-2xl">&lt;</span>
      ) : (
        <span className="text-2xl">&gt;</span>
      )}
    </button>
  );
};

// Slider settings
const settings = {
  dots: false,
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
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

// Updated slider data based on mining-related stories
const slides = [
  {
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1761126488/Screenshot_2025-10-22_150223_kq5qro.png",
    name: "Manoj Patra",
    description:
      "Manoj, a young man from Sukinda, joined our vocational training program and became a certified Mining Dumper Operator. Today, he proudly works in the mines, Getting a stable livelihood with skilled Work.",
    link: "#",
  },
  {
    "image": "https://grameenfoundation.org/images/_716x488_crop_center-center_none/Mandeepa-2.jpeg",
    "name": "Laxmi Sahoo",
    "description": 
      "Laxmi transformed an abandoned mine in Odisha into a flourishing aquaculture site with Pantiss’ guidance. Her inspiring journey highlights sustainable livelihoods, empowering her family and community with a steady income.",
    "link": "#"
  },
  {
    image: "https://res.cloudinary.com/djtzx6wo7/image/upload/v1761124239/Women-in-leadership-img_bhmw8w.jpg",
    name: "Priya Naik",
    description:
      "Priya, a self-help group (SHG) member from Jajpur, transformed her life through Pantiss’ training and support. She now manages a small-scale phenyl manufacturing unit with her group, earning a sustainable livelihood and inspiring other women in her community to become self-reliant.",
    link: "#",
  },
];

const Stories = () => {
  return (
    <section className="py-12 px-6">
      <div className="container px-4 mx-auto relative">
        {/* Header Text */}
        <Heading text="STORIES" color="text-black" bgColor="bg-red-500" />

        {/* Slider */}
        <Slider {...settings} className="flex justify-center items-center">
          {slides.map((slide, index) => (
            <div key={index} className="px-2 flex justify-center items-center">
              <div className="relative bg-white border border-gray-500 rounded-lg shadow-lg overflow-hidden h-[616px] w-[360px]">
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.name}
                  className="w-full h-64 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x400";
                  }}
                  loading="lazy"
                />
                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[calc(100%-256px)]">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-green-700 mb-2">
                      {slide.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                  <div className="text-center mt-4">
                    <a
                      href={slide.link}
                      className="text-blue-600 hover:underline text-base font-medium"
                    >
                      LEARN MORE
                    </a>
                  </div>
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
          .slick-slider {
            position: relative;
          }
        `}</style>
      </div>
    </section>
  );
};

// Optional: Basic Error Boundary
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong. Please try again later.</h2>;
    }
    return this.props.children;
  }
}

export default Stories;