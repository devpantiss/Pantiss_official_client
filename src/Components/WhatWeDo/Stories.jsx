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
      style={{ ...style, display: "block" }} // Ensure display is block
      onClick={onClick}
      aria-label={ariaLabel}
      type="button"
    >
      {isPrev ? (
        <span className="text-2xl">&lt;</span> // Using HTML entity with proper styling
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
  arrows: true, // Keep arrows enabled for custom arrows
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

// Slider data
const slides = [
  {
    image: "https://grameenfoundation.org/images/_716x488_crop_center-center_none/Hemlata-Alone.jpg",
    name: "Hemitla",
    description:
      "Meet Hemitla Kushwaha. Hemitla shares her story of working with FPCs and FPOs to increase financial resilience and access to part time work. Grameen Foundation partners with Farmer Produced Organizations (FPOs) and increases access to microloans, less expensive agricultural products, and to create opportunities for women to enter their local economies.",
    link: "#",
  },
  {
    image: "https://grameenfoundation.org/images/_716x488_crop_center-center_none/Mandeepa-2.jpeg",
    name: "Mandeepa",
    description:
      "Meet Mandeepa Patel, a farmer who is leading the way in sustainable agriculture practices and inspiring change in her community while boosting productivity and income. Grameen Foundation partners with local organizations to ensure women like Mandeepa can access their full potential and power.",
    link: "#",
  },
  {
    name: "Ayisha and Fuseini",
    image: "https://grameenfoundation.org/images/_716x488_crop_center-center_none/ayisha2.png",
    description:
      "Fuseini used to rely on a male agent to conduct mobile money transactions. But now, she can turn to new Grameen Agent Ayisha, a trusted woman and neighbor, for advice and counsel in addition to digital financial services.",
    link: "#",
  },
];

const Stories = () => {
  return (
    <section className="py-12 px-6">
      <div className="container  px-4 mx-auto relative">
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
                    e.target.src = "https://via.placeholder.com/300x400"; // Fallback image
                  }}
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

        {/* CSS to hide default arrows if they persist */}
        <style jsx>{`
          .slick-arrow.slick-prev,
          .slick-arrow.slick-next {
            display: none !important;
          }
          /* Ensure custom arrows are not hidden by slider content */
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