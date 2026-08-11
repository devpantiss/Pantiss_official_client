/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Heading from "../Common/Heading";

const GalleryArrow = ({ direction, onClick }) => {
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? ChevronLeft : ChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${isPrevious ? "Previous" : "Next"} gallery image`}
      className={`absolute top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/55 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
        isPrevious ? "left-3 lg:-left-5" : "right-3 lg:-right-5"
      }`}
    >
      <Icon aria-hidden="true" size={22} />
    </button>
  );
};

const sliderSettings = {
  dots: true,
  arrows: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4200,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "ease-out",
  prevArrow: <GalleryArrow direction="previous" />,
  nextArrow: <GalleryArrow direction="next" />,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1, dots: false },
    },
  ],
};

const DistrictPhotoGallery = ({ district, images }) => (
  <section className="overflow-hidden bg-neutral-950 py-14 sm:py-16">
    <div className="mx-auto max-w-7xl px-6">
      <div className="mb-8 flex items-end justify-between gap-6">
        <Heading
          text={`${district} GALLERY`}
          color="text-white"
          bgColor="bg-red-600"
        />
        <p className="hidden max-w-sm text-right text-sm leading-6 text-neutral-400 md:block">
          A closer look at our programmes, people and community-led work across
          the district.
        </p>
      </div>

      <div className="relative pb-7">
        <Slider
          {...sliderSettings}
          infinite={images.length > 3}
          className="district-photo-gallery -mx-2"
        >
          {images.map((image) => (
            <figure key={image.src} className="px-2">
              <div className="group relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl sm:h-80">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-5 pb-5 pt-16">
                  <figcaption className="text-sm font-medium leading-5 text-white sm:text-base">
                    {image.caption}
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </Slider>
        <style>{`
          .district-photo-gallery .slick-dots li button::before {
            color: white;
            opacity: 0.35;
          }
          .district-photo-gallery .slick-dots li.slick-active button::before {
            color: #dc2626;
            opacity: 1;
          }
        `}</style>
      </div>
    </div>
  </section>
);

export default DistrictPhotoGallery;
