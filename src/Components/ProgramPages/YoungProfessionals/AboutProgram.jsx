import React from "react";
import Slider from "react-slick";

const AboutProgram = () => {
  // Sample images for the slider
  const images = [
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325296/WhatsApp_Image_2025-01-08_at_12.58.23_PM_mukjdu.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325295/WhatsApp_Image_2025-01-08_at_12.57.12_PM_hhrj9h.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325291/WhatsApp_Image_2025-01-08_at_12.56.22_PM_opgycj.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325286/WhatsApp_Image_2025-01-08_at_1.05.17_PM_hgvk7u.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325281/WhatsApp_Image_2025-01-08_at_1.03.30_PM_fx0igb.jpg",
    "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736325283/WhatsApp_Image_2025-01-08_at_1.04.14_PM_nfgshn.jpg"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-6">THE <span className="text-red-600">PROGRAMME</span></h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
          The Young Professional Programme is crafted to develop Pantiss's next
          generation of leaders. Challenging and purposeful opportunities
          accelerate professionals’ readiness to take on diverse roles and
          demonstrate strong leadership capabilities with innovation and
          effectiveness while delivering key objectives. The programme provides
          hands-on experience through extensive on-the-job learning, classroom
          training, and mentoring.
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