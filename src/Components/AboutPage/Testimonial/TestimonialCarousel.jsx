import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Heading from "../../Common/Heading";

const TestimonialSlider = () => {
  const sliderRef = useRef(null);

  const testimonials = [
    {
      image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729715/keerti_bhusan_stdb2i.jpg",
      quote:
      "PANTISS have dared to dream about a truly empowered rural India. The Pantiss Foundation is their ambitious endeavour to actualise that dream by creating and executing a holistic and sustainable model of development of rural India. Their approach of connecting rural India with not just urban India but also the world is truly exciting.",
      name: "Dr. Kirti Bhushan Pradhan",
      title: "Senior Adviser(Healthcare Strategy & Mgt)",
      location: "-",
    },
    {
      image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729745/Shabaz_khan_la7sfc.jpg",
      quote:
      "My main responsibilities include contributing to the operational planning for the implementation of the CSC project, coordinating and managing partnerships with state and city level government authorities, stakeholders, and national and international implementation partners.",
      name: "Shabaz Khan",
        title: 'Climate Change Specialist, GIZ',
        location: "-",
    },
    {
      image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729684/omm_zfw3fg.webp",
      quote:
      "I have known PANTISS on both a personal and professional level and over the years have come to understand the passion that drives them. To do what they do, with no regard for applause or reward is something you don’t see very often. I support them wholeheartedly and wish them every success.",
      name: "Omm Priyadarshi",
        title: 'National Convenor, Think India',
        location: "-",
    },
    {
      image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761729694/aprajita_gocchikar_n3piin.jpg",
      quote:
      "The work strategy they brought to the field or community is very much impressive. I am very delighted with PANTISS foundation’s continuous and a great focus on rural development or empowerment. I appreciate their selfless motivation and mission of transforming the lives of 1 million rural India in the next 5 years. I am inspiring their mission and wish them a great achievement.",
      name: "Mrs Aparajita Gocchikar",
        title: 'International Chess Player"',
        location: "-",
    },
    // {
    //   image:
    //     "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009143827.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=e58e4c4d217fc2cf9cfbe21320a0f7068358483030ebb90a2566e4ce0e44fb94e3c0945427bc7ecb105521b6683af799aff075a85569301cfbfaffbd5584dfb650489460412fc908557f8c5ac48849e94f9aee16a9adaaa493d4d416712ef73b59131e44e4560fb0a4fb21a7b4cfdaa86fbc52366eb612d13a8167cfcc1f494aa52c194489c021d2dfeb406e77be3b842ee3fd7bb288ca6608a4a4af1e6bba4a08bfa9e593cf51a124f11917d3bdf7890a28aaa2c4c310628ce390a9ef442a9b4bf551d31eabb682a182e0a0c7edef73c47e99cb4d63430bd2cca324a0d39a79696aef609ce6f427df18046c8656e52169b0b28bd341b5ab9ad731e7759a6081", // Replace with another image URL
    //   quote:
    //     "Being part of this team has been a transformative experience. The values of integrity and compassion resonate deeply, making it more than just a workplace.",
    //   name: "John Doe",
    //   title: "Team Leader, BRAC USA",
    //   location: "BRAC New York",
    // },
    // {
    //   image:
    //     "https://storage.googleapis.com/prod-erp-hrms/documents/administrator_20211009145053.png?X-Goog-Algorithm=GOOG4-RSA-SHA256&X-Goog-Credential=prod-erp-hrms%40brac-main.iam.gserviceaccount.com%2F20241227%2Fauto%2Fstorage%2Fgoog4_request&X-Goog-Date=20241227T093453Z&X-Goog-Expires=86400&X-Goog-SignedHeaders=host&X-Goog-Signature=99ad9f5a213962d5484284eb63ced55c7ed5ddd88cc9a2d86c8639ea16c7f7d6c4643d3b1d74f02be42b2fbb29533b67f50f51a1e560efa1ceec33ad484f80bb6265def439b35c59ad4888fce8bd410c504d0d6a563280b9e6dd16211dbdee2571bb31d94c444aeddfed12ad3890c9ade56e0584cdad7e9547b275aad542db308463857edce5c635c9f49134cfbb1f3d72aa4b445c2333debe44bd728622cfcdde54aa10e7dcf46f896d5d85cf490dbd32a79ec4c49e318a7d6db0634f3d86de307cbad4af49fc4a181204b6ec0249cbc8523858054095c8323c4c6c93c3e9f260fe2f05951a5e4892ae04dd2b274a5a85280971fd3394f09fc8ee6477e53e0a", // Replace with another image URL
    //   quote:
    //     "Being part of this team has been a transformative experience. The values of integrity and compassion resonate deeply, making it more than just a workplace.",
    //   name: "John Doe",
    //   title: "Team Leader, BRAC USA",
    //   location: "BRAC New York",
    // },
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
    <div className="max-w-7xl mx-auto mt-16 p-8">
      <div className="relative">
        <button
          className="absolute left-0 lg:-left-16 top-1/2 transform -translate-y-1/2 text-red-500 text-[48px] rounded-full p-2 shadow-lg z-10"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaChevronLeft />
        </button>

        <div>
        <Heading text="TESTIMONIES" color="text-black" bgColor="bg-red-600" />
        </div>

        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-row items-center">
              <div className="flex flex-col lg:flex-row">
                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="rounded-lg shadow-lg w-full h-full object-cover"
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
