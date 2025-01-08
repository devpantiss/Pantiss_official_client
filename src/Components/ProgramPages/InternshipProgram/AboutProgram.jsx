import React from "react";
import Slider from "react-slick";

const AboutProgram = () => {
  // Sample images for the slider
  const images = [
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325299/WhatsApp_Image_2025-01-08_at_12.59.45_PM_y05oqs.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325280/WhatsApp_Image_2025-01-08_at_1.00.28_PM_ppgoyr.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325290/WhatsApp_Image_2025-01-08_at_12.55.09_PM_wh2wtb.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325288/WhatsApp_Image_2025-01-08_at_12.54.38_PM_zbm1xo.jpg",
    // "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325280/WhatsApp_Image_2025-01-08_at_1.03.09_PM_e0bqin.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325296/WhatsApp_Image_2025-01-08_at_12.57.41_PM_kkfzkb.jpg"
  ];

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        {/* Heading and Description */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          THE <span className="text-red-600">PROGRAMME</span>
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          The Regular Internship Programme offers a wide range of opportunities
          for graduate and post-graduate students. Interns benefit from exposure
          to an array of projects and initiatives in social development over a
          period of three months. Complete with hands-on learning, the programme
          opens up opportunities in fields related to poverty reduction,
          humanitarian response, social enterprises, and much more. BRIDGE
          Internship programme offers a meaningful opportunity for young talents
          to bridge their learning with practical experience. Jumpstart your
          career through direct mentorship from seasoned leaders in the
          industry. This six-month internship is for newly graduates or students
          currently studying in their last semester. The programme can open
          opportunities to pursue a full-time career at Pantiss.
        </p>

        {/* Image Slider */}
        <div className="max-w-4xl mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutProgram;
