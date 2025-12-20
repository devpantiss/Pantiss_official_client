import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Common/Heading";

// Custom Arrow
const Arrow = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    className={`absolute top-1/2 z-20 -translate-y-1/2 
      ${direction === "prev" ? "-left-6" : "-right-6"}
      h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center
      hover:bg-gray-100 transition`}
  >
    <span className="text-xl text-gray-700">
      {direction === "prev" ? "←" : "→"}
    </span>
  </button>
);

// Slider settings
const settings = {
  dots: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false, // more editorial, less promo
  arrows: true,
  prevArrow: <Arrow direction="prev" />,
  nextArrow: <Arrow direction="next" />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

const slides = [
  {
    image:
      "/assets/sambit_barik.png",
    name: "Manoj Patra",
    description:
      "Manoj, a young man from Sukinda, joined our vocational training programme and is now a skilled HMM mechanic. Today, he maintains and repairs heavy mining machinery, earning a stable livelihood through certified technical expertise.",
    link: "#",
  },
  {
    image:
      "https://grameenfoundation.org/images/_716x488_crop_center-center_none/Mandeepa-2.jpeg",
    name: "Laxmi Sahoo",
    description:
      "Laxmi transformed an abandoned mine in Odisha into a flourishing aquaculture site with Pantiss’ guidance, creating a sustainable income for her family.",
    link: "#",
  },
  {
    image:
      "/assets/laxmi_sahoo.jpg",
    name: "Priya Naik",
    description:
      "An SHG member from Jajpur, Priya was trained as an electrician through Pantiss’ skilling programme. Today, she works confidently in her trade, earning a stable livelihood and inspiring other young women in her community to step into non-traditional roles.",
    link: "#",
  },
];

const Stories = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Heading */}
        <div className="mb-12 text-center">
          <Heading text="STORIES" color="text-black" bgColor="bg-red-500" />
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Real stories of transformation from communities we work with
          </p>
        </div>

        {/* Slider */}
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4 py-4">
              <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden h-full flex flex-col">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {slide.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {slide.description}
                  </p>

                  <a
                    href={slide.link}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:underline"
                  >
                    Read full story
                    <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Stories;
