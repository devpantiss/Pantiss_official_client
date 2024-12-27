import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import "./testimonialCarousel.css";
import Heading from "../../Common/Heading";

const testimonials = [
  {
    id: 1,
    name: "Dr. Kirti Bhushan Pradhan",
    title: 'Senior Adviser(Healthcare Strategy & Mgt)',
    text: 
    "PANTISS have dared to dream about a truly empowered rural India. The Pantiss Foundation is their ambitious endeavour to actualise that dream by creating and executing a holistic and sustainable model of development of rural India. Their approach of connecting rural India with not just urban India but also the world is truly exciting.",
    avatar:
     "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735199410/keerti_bhusan_fhupvr.jpg",
    bgcolor: "bg-gradient-to-r from-blue-500 to-blue-900",
  },
  {
    id: 2,
    name: "Shabaz Khan",
    title: 'Climate Change Specialist, GIZ',
    text: 
    "My main responsibilities include contributing to the operational planning for the implementation of the CSC project, coordinating and managing partnerships with state and city level government authorities, stakeholders, and national and international implementation partners.",
    avatar: 
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735199413/Shabaz_khan_a3q0mi.jpg",
    bgcolor: "bg-gradient-to-r from-red-500 to-red-900",
  },
  {
    id: 3,
    name: "Omm Priyadarshi",
    title: 'National Convenor, Think India',
    text: 
    "I have known PANTISS on both a personal and professional level and over the years have come to understand the passion that drives them. To do what they do, with no regard for applause or reward is something you don’t see very often. I support them wholeheartedly and wish them every success.",
    avatar: 
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735199409/omm_nqvhsp.webp",
    bgcolor: "bg-gradient-to-r from-green-500 to-green-900",
  },
  {
    id: 6,
    name: "Mrs Aparajita Gocchikar",
    title: 'International Chess Player"',
    text: 
    "The work strategy they brought to the field or community is very much impressive. I am very delighted with PANTISS foundation’s continuous and a great focus on rural development or empowerment. I appreciate their selfless motivation and mission of transforming the lives of 1 million rural India in the next 5 years. I am inspiring their mission and wish them a great achievement.",
    avatar: 
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735199410/aprajita_gocchikar_zxrm3y.jpg",
    bgcolor: "bg-gradient-to-r from-yellow-500 to-yellow-900",
  },
];

const NextArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center right-[10px] top-[-30px] lg:top-4 lg:right-4 bg-red-600 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowRight />
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button
      className="absolute flex justify-center items-center top-[-30px] right-[60px] lg:top-4 lg:right-16 bg-red-600 text-white p-2 rounded-md shadow-lg hover:bg-gray-700 focus:outline-none z-10"
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </button>
  );
};

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <div className="relative container mx-auto py-10 px-10">
      <Heading text="OUR WELL-WISHERS" color="text-[black]" bgColor="bg-red-600" />
      <div className="flex justify-center items-center px-4">
        <Slider {...settings} className="py-12 w-[380px] md:w-[768px] lg:w-[1400px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`testimonial bg-gradient-to-r from-red-600 to-red-700 m-4 flex flex-col justify-center items-center p-4 rounded-tr-none rounded-bl-none rounded-br-[25px] rounded-tl-[25px]`}
            >
              <div className="review flex justify-center items-center h-full">
                <p className="text-white font-open">{testimonial.text}</p>
              </div>
              <div className="reviewer flex items-center gap-x-6 absolute bottom-2 left-40 lg:left-[230px]">
                <img
                  src={testimonial.avatar}
                  className="rounded-full h-[100px]"
                  alt={testimonial.name}
                />
                <div className="text-right leading-none">
                  <span className=" text-[18px] font-merri text-white">{testimonial.name}
                    <br />
                    <span className="text-[12px] font-merri text-white">{testimonial.title}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
