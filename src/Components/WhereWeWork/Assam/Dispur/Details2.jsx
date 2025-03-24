import React, { memo, useMemo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../Common/Heading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Memoized Arrow components
const PrevArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="z-10 absolute top-1/2 left-0 lg:-left-12 transform -translate-y-1/2 text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronLeft />
  </button>
));
PrevArrow.displayName = "PrevArrow";

const NextArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="z-10 absolute top-1/2 right-0 lg:-right-12 transform -translate-y-1/2 text-4xl lg:text-5xl text-white ring-2 ring-white hover:bg-white hover:text-red-600 hover:ring-2 hover:ring-red-600 rounded-full p-2 transition-all duration-300 ease-in-out"
  >
    <FaChevronRight />
  </button>
));
NextArrow.displayName = "NextArrow";

// Memoized gallery images
const galleryImages = [
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742815930/4709ba1b-21c9-409f-b35c-081a79ef3dd7_rpxlla.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742815929/3660d04b-d71d-42a5-8d60-482a9c63d2b1_nrtjal.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742815929/419f4c73-8f56-4a6f-801e-a966a345a3fc_hraxim.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742815930/1275adc9-e1a6-4f1d-88f9-d6a58d04822a_mlywjp.jpg",
  "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742815930/2d91ccb0-6b3a-41da-92c2-daaa93bcaea5_vlv5q9.jpg",
];

// Memoized GalleryImage component
const GalleryImage = memo(({ image, index }) => (
  <div className="px-2">
    <img
      src={image}
      alt={`Gallery ${index + 1}`}
      className="rounded-lg w-full h-64 object-cover"
      loading="lazy"
    />
  </div>
));
GalleryImage.displayName = "GalleryImage";

const Details2 = () => {
  // Memoized slider settings
  const sliderSettings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Adjusted for smoother transitions
      pauseOnHover: true,
      arrows: true,
      prevArrow: <PrevArrow />,
      nextArrow: <NextArrow />,
      lazyLoad: "ondemand", // Load images on demand
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    }),
    []
  );

  return (
    <div>
      {/* Photo Gallery with Slider */}
      <section className="bg-red-600 p-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex mb-6">
            <Heading text="PHOTO GALLERY" color="text-white" bgColor="bg-white" />
          </div>
          <div className="relative">
            <Slider {...sliderSettings} className="mt-6">
              {galleryImages.map((image, index) => (
                <GalleryImage key={index} image={image} index={index} />
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Donors & Partners */}
      <section className="p-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex mb-6">
            <Heading
              text="DONORS & PARTNERS"
              color="text-black"
              bgColor="bg-red-600"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              "https://bracinternational.org/wp-content/uploads/2024/09/GAC-Logo.webp",
              "https://bracinternational.org/wp-content/uploads/2024/09/UNDP-logo-orignal.webp",
              "https://bracinternational.org/wp-content/uploads/2024/09/UNWOMEN-logo.webp",
              "https://bracinternational.org/wp-content/uploads/2025/01/usaid-logo.webp",
              "https://bracinternational.org/wp-content/uploads/2025/01/WDIO-logo.webp",
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Donor ${index + 1}`}
                className="w-full h-22 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(Details2);