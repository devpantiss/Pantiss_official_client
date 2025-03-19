import React from "react";
import Slider from "react-slick";
import Heading from "../../Common/Heading";
import "./certifications.css";

// Sample data for certifications
const certificationsData = [
  {
    title: "ISO 9000-2",
    description: "Quality Assured",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735376311/wp3715556-quality-control-wallpapers_ybhqe5.jpg",
  },
  {
    title: "NSDC (National Skill Development Council)",
    description: "Industry Engagement Partner",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735377105/construction_1_k63jtq.jpg",
  },
  {
    title:
      "MEPS (Management, Entrepreneurship and Professional Sector Skill Council)",
    description: "Industry Engagement Partner",
    imageUrl:
      "https://www.ualberta.ca/en/folio/media-library/2023/11/231109-women-entrepreneurs-main-16x9-3000px.jpg",
  },
  {
    title: "SCMS (Skill Council for Mining Sector)",
    description: "Authorized Training Partner)",
    imageUrl:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735376736/vladimir-patkachakov-Mx6Xmf_nbRk-unsplash_ej5umt.jpg",
  },
  {
    title: "Indian Iron and Steel Sector Skill Council",
    description: "Authorized Training Partner",
    imageUrl:
      "https://www.man-es.com/images/default-source/default-album/iron-and-steel-applications-process-industry.jpg?sfvrsn=9667eca1_4",
  },
  {
    title: "Indian Iron and Steel Sector Skill Council",
    description: "Authorized Training Partner",
    imageUrl:
      "https://www.trivenigroup.com/performence_image/ptb-certifications-img-1.webp",
  },
];

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
  arrows: true,
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

const Certifications = () => {
  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="flex ">
          <Heading
            text="Certifications"
            color="text-black"
            bgColor="bg-red-600"
          />
        </div>
        <p className="text-left text-lg text-gray-500 mb-4 max-w-3xl">
          Our certifications and accreditations are a testament to our
          commitment to meet international standards of quality.
        </p>

        {/* Slider Section */}
        <Slider {...settings} className="certifications-slider w-full">
          {certificationsData.map((cert, index) => (
            <div key={index} className="flex-none">
              {/* Alternate layout for odd and even items */}
              <div className="border mx-2 rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
                {index % 2 === 0 ? (
                  <>
                    {/* Image at the top for even index */}
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="p-6 bg-red-600 h-[200px] text-white">
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="mt-2">{cert.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text at the top for odd index */}
                    <div className="p-6 bg-red-600 h-[200px] text-white">
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <p className="mt-2">{cert.description}</p>
                    </div>
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certifications;
