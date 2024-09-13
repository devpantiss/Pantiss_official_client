import React from "react";
import Slider from "react-slick";
import Heading from "../../Common/Heading";
import './certifications.css';

// Sample data for certifications
const certificationsData = [
  {
    title: "Sugar",
    description: "FSSC 22000 certified sugar plants",
    imageUrl: "https://www.trivenigroup.com/performence_image/ptb-certifications-img-4.webp",
  },
  {
    title: "Sugar",
    description: "International EEC II grades",
    imageUrl: "https://www.trivenigroup.com/performence_image/ptb-certifications-img-6.webp",
  },
  {
    title: "Sugar",
    description: "Pharmaceutical Grade Sugar Quality",
    imageUrl: "https://www.trivenigroup.com/performence_image/ptb-certifications-img-2.webp",
  },
  {
    title: "Alcohol",
    description: "Food Safety and Standards Authority of India (FSSAI)",
    imageUrl: "https://www.trivenigroup.com/performence_image/ptb-certifications-img-1.webp",
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
        <div className="flex justify-center items-center">
          <Heading text="Certifications" color="text-black" bgColor="bg-red-600" />
        </div>
        <p className="text-center text-lg text-gray-500 mb-4 max-w-3xl mx-auto">
          Our certifications and accreditations are a testament to our commitment to meet international standards of quality.
        </p>

        {/* Slider Section */}
        <Slider {...settings} className="certifications-slider w-full">
          {certificationsData.map((cert, index) => (
            <div key={index} className="flex-none">
              {/* Alternate layout for odd and even items */}
              <div className="border rounded-lg shadow-lg h-full overflow-hidden flex flex-col">
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