import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../Common/Heading";

// Sample awards data
const awardsData = [
  {
    year: "2021",
    title: "Star Performer Award",
    description: "#Beat_Plastic_Polution Initiative",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
      orgLogo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723963/c1e1380ffdd93941850639161032c834_do4ghj.png",
  },
  {
    year: "2022",
    title: "Wes Innovation Award",
    description:
      "Youth Wes Leadership Award",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
      orgLogo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723956/pngegg_3_bcfxvx.png"
  },
  {
    year: "2023",
    title: "Kutumb Migrants Savior Award",
    description:
      "Hrlping and safeguarding Migrants.",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
      orgLogo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723948/kutumb_rrini4.jpg"
  },
  {
    year: "2023",
    title: "Best Performer Award",
    description:
      "Striving Towards Making a Difference in Rural Odisha, Odisha Livlihood Mission",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761725434/GIU_AMA_199-06_ohmupk.png",
      orgLogo: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761724428/olm_1_ow2qdb.png"
  },
];

// Custom navigation arrows
const PreviousArrow = ({ onClick }) => (
  <div
    className="custom-arrow absolute -left-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft className="text-white text-2xl hover:text-gray-300" />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow absolute -right-5 top-1/2 transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight className="text-white text-2xl hover:text-gray-300" />
  </div>
);

const AwardsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
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

  return (
    <div className="relative px-10 bg-black">
      <div className="flex flex-col mx-auto max-w-7xl">
        <Heading text="AWARDS" color="text-white" bgColor="bg-red-600" />
        <p className="text-left text-white text-lg mb-12 max-w-3xl">
        Our commitment to quality and reliability has brought us many awards and
        accolades. We see these awards as the manifestation of the strong
        reputation we have worked so hard to build.
      </p>
      </div>
      
      <Slider {...settings} className="h-[450px]">
        {awardsData.map((award, index) => (
          <div key={index} className="pb-16 pt-0">
            <div
              className="relative flex flex-col justify-center items-center text-center py-10 w-full h-[300px] px-12"
              // style={{
              //   backgroundImage: `url(${award.imageUrl})`,
              //   backgroundRepeat: "no-repeat",
              //   backgroundSize: "contain",
              //   backgroundPosition: "center",
              // }}
            >
                <img className="h-[350px] top-10 absolute z-50 mt-6" src={award.imageUrl}/>
                {/* <img
                src={award.imageUrl}
                alt={award.title}
                className="absolute -top-32 lg:right-[50px] right-[38px] mx-auto w-[350px] lg:w-[450px] h-[450px] my-4 object-contain"
              /> */}
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-white text-xl font-semibold">
                  {award.year} - {award.title}
                </h3>
                <p className="text-gray-300 mt-2 w-[200px]">
                  {award.description}
                </p>
                <img className="h-28 mt-6" src={award.orgLogo}/>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AwardsSlider;
