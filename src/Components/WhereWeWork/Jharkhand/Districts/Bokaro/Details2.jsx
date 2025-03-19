import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../../Common/Heading";

const Details2 = () => {
  const galleryImages = [
    "https://bracinternational.org/wp-content/uploads/2024/09/IMG_0705-400x400.webp",
    "https://bracinternational.org/wp-content/uploads/2024/09/IMG_0682-400x400.webp",
    "https://bracinternational.org/wp-content/uploads/2024/09/Kandahar-Myankoh-Check-Dam-after-construction-1-400x400.webp",
    "https://bracinternational.org/wp-content/uploads/2024/09/MSME-ABADEI-1-400x400.webp",
    "https://bracinternational.org/wp-content/uploads/2024/09/DSC00496-400x400.webp",
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
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
  };

  return (
    <div className="">
      {/* Latest From Us */}
      {/* <section>
        <Heading text="LATEST FROM US" color="text-black" bgColor="bg-red-600" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "Is education only reserved for boys?",
              category: "Afghanistan, Blogs and Stories",
              date: "January 24, 2025",
              image:
                "https://bracinternational.org/wp-content/uploads/2025/01/Stories-of-Resilience-Afghanistan-v2-768x432.webp",
            },
            {
              id: 2,
              title: "Afghan women and their stories of overcoming great odds",
              category: "Afghanistan, Blogs and Stories, See the Latest",
              date: "January 2, 2025",
              image:
                "https://bracinternational.org/wp-content/uploads/2025/01/Stories-of-Resilience-Afghanistan-v2-768x432.webp",
            },
            {
              id: 3,
              title:
                "Disability shouldn’t hinder a child’s education, yet it does. How do we tackle this?",
              category: "Afghanistan, See the Latest",
              date: "January 24, 2024",
              image:
                "https://bracinternational.org/wp-content/uploads/2024/09/DSC08481-768x513.webp",
            },
          ].map((article) => (
            <div
              key={article.id}
              className="border rounded-lg overflow-hidden shadow"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-gray-600">{article.category}</p>
                <p className="text-sm text-gray-500">{article.date}</p>
                <h3 className="font-semibold text-lg mt-2">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700">
            Read More
          </button>
        </div>
      </section> */}

      {/* Photo Gallery with Slider */}
      <section className="bg-red-600 p-6">
        <div className="mx-auto max-w-7xl">
          <Heading text="PHOTO GALLERY" color="text-white" bgColor="bg-white" />
          <Slider {...sliderSettings} className="mt-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="px-2">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Donors & Partners */}
      <section className="p-6">
        <div className="mx-auto max-w-7xl">
          <Heading
            text="DONORS & PARTNERS"
            color="text-black"
            bgColor="bg-red-600"
          />
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
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Details2;
