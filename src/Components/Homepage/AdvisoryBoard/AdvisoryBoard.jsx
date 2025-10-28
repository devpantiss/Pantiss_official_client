import React, { useRef, memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Common/Heading";

// Memoized static data
const advisoryData = [
  {
    id: "1",
    name: "Prof. Dr. Narayan Chandra Nayak",
    designation: "HoD, School of Humanities & Social Sciences",
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761662555/Dr.Narayan_Nayak_ud6a2q.png",
    org: "IIT, Kharagpur",
  },
  {
    id: "4",
    name: "Prof. Bipin Jojo",
    designation: "Dean, School of Social Sciences",
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761662535/Bipin_jojo_ubk4th.png",
    org: "TISS-Mumbai",
  },
  {
    id: "5",
    name: "Braja Kishore Nayak",
    designation: "Director (Financial Inclusion)",
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761662541/Braja_Kishore_nayak_pvse2q.jpg",
    org: "State Bank of India",
  },
  {
    id: "6",
    name: "Prof. Dr. S. Sivaraju",
    designation: "Chairperson, Center of Excellence, CSR",
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761662574/S.Sivaraju_jpyath.png",
    org: "TISS-Mumbai",
  },
  {
    id: "7",
    name: "Prof. Dr. Ashutosh Pradhan",
    designation: "HoD, School of Social Work",
    img: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761662531/Ashutosh_Pradhan_cnm6ni.png",
    org: "Central University, Himachal Pradesh",
  },
];

// Memoized Slider Card component
const SliderCard = memo(({ ad }) => (
  <div className="flex items-center justify-center p-5">
    <div className="h-[300px] w-[600px] rounded-lg shadow-lg bg-transparent ring-1 ring-white">
      <div className="flex justify-center pt-5">
        <img
          className="w-32 h-32 rounded-full border-2 border-gray-300 object-cover"
          src={ad.img}
          alt={ad.name}
          loading="lazy"
        />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-white text-xl mb-2">{ad.name}</div>
        <p className="mt-2 text-white text-sm">{ad.designation}</p>
        <p className="mt-1 text-white text-sm">{ad.org}</p>
      </div>
    </div>
  </div>
));
SliderCard.displayName = "SliderCard";

const EventsSlider = () => {
  const sliderRef = useRef(null);

  // Optimized slider settings
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slightly slower for smoother transitions
    pauseOnHover: true, // Pause on hover for better UX
    lazyLoad: "ondemand", // Load images on demand
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative py-12 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dxzhnns58/image/upload/v1761661267/sebastian-pichler-ly2T4vul_SE-unsplash_2_kyhc7n.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center px-4">
        <div className="mb-6">
          <Heading text="OUR ADVISORY BOARD" color="text-white" bgColor="bg-red-600" />
        </div>

        {/* Slider */}
        <div className="w-full max-w-5xl">
          <Slider
            ref={sliderRef}
            {...settings}
            className="lg:py-8 w-full bg-transparent"
          >
            {advisoryData.map((ad) => (
              <SliderCard key={ad.id} ad={ad} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default memo(EventsSlider);