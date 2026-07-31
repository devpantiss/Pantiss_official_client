import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const stories = [
  {
    id: "sambit",
    image: "/assets/sambit_barik.png",
    name: "Sambit Barik",
    location: "Sukinda, Odisha",
    category: "Skills & livelihoods",
    title: "Building confidence through industry-ready skills",
    description:
      "Hands-on vocational training helped Sambit develop the technical ability and confidence to pursue opportunities in the mining sector.",
    outcome: "Industry-ready technical skills",
    link: "/what-we-do/mine-steel-&-power-skill-park",
    imagePosition: "object-center",
  },
  {
    id: "laxmi",
    image: "/assets/laxmi_sahoo.jpg",
    name: "Laxmi Sahoo",
    location: "Odisha",
    category: "Women at work",
    title: "Learning new skills for a more independent future",
    description:
      "Job-focused facility management training equipped Laxmi with practical workplace knowledge, safety awareness and greater confidence.",
    outcome: "Job-focused workplace training",
    link: "/what-we-do/mine-steel-&-power-skill-park",
    imagePosition: "object-top",
  },
  {
    id: "youth",
    image: "/assets/homepage/Spotlight/tribal_Youth_dormitories.jpg",
    name: "Young people of Kalahandi",
    location: "Kalahandi, Odisha",
    category: "Youth empowerment",
    title: "A safe place to learn, belong and dream bigger",
    description:
      "Youth tribal dormitories create a supportive environment where young people can stay connected to education and build life skills.",
    outcome: "Safer access to learning",
    link: "/where-we-work/odisha/kalahandi",
    imagePosition: "object-center",
  },
  {
    id: "skill-on-wheels",
    image: "/assets/homepage/Spotlight/skill_on_wheels.jpeg",
    name: "Communities of the Eastern Ghats",
    location: "Eastern Ghats, Odisha",
    category: "Training access",
    title: "Taking technical learning closer to communities",
    description:
      "Mobile training brings relevant mining skills closer to rural youth, helping bridge the distance between talent and opportunity.",
    outcome: "Training delivered closer to home",
    link: "/what-we-do/mine-steel-&-power-skill-park",
    imagePosition: "object-center",
  },
];

// react-slick injects these props into its arrow components.
// eslint-disable-next-line react/prop-types
const CarouselArrow = ({ className, onClick, direction }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "previous" ? "Previous story" : "Next story"}
    className={`${className} !grid !h-12 !w-12 !place-items-center rounded-full border border-neutral-200 !bg-white !text-neutral-800 shadow-[0_8px_24px_-10px_rgba(0,0,0,0.35)] transition-all duration-300 hover:!border-red-200 hover:!bg-red-600 hover:!text-white focus:!outline-none focus-visible:!ring-2 focus-visible:!ring-red-600 focus-visible:!ring-offset-2 before:!content-none`}
  >
    {direction === "previous" ? (
      <ChevronLeft aria-hidden="true" className="h-5 w-5" />
    ) : (
      <ChevronRight aria-hidden="true" className="h-5 w-5" />
    )}
  </button>
);

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 550,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5500,
  pauseOnHover: true,
  pauseOnFocus: true,
  swipeToSlide: true,
  prevArrow: <CarouselArrow direction="previous" />,
  nextArrow: <CarouselArrow direction="next" />,
  appendDots: (dots) => (
    <div>
      <ul className="!m-0 flex items-center justify-center gap-2">{dots}</ul>
    </div>
  ),
  customPaging: (index) => (
    <button
      type="button"
      aria-label={`Go to story ${index + 1}`}
      className="story-pagination-button"
    >
      <span className="story-dot block h-1.5 rounded-full bg-neutral-300 transition-all duration-300" />
    </button>
  ),
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        arrows: false,
        autoplay: false,
      },
    },
  ],
};

const Stories = () => {
  return (
    <section
      className="stories-carousel relative overflow-hidden bg-neutral-50 py-16 sm:py-20 lg:py-24"
      aria-labelledby="stories-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-red-100/60 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-7 w-1 rounded-full bg-red-600" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                Stories of change
              </p>
            </div>
            <h2
              id="stories-heading"
              className="max-w-2xl text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl"
            >
              Real people.
              <span className="text-red-600"> Meaningful progress.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-neutral-600 lg:text-lg">
            Meet the people and communities turning opportunity into lasting
            change through skills, education and local action.
          </p>
        </div>

        <Slider {...sliderSettings}>
          {stories.map((story) => (
            <div key={story.id} className="h-full px-2.5 pb-12 pt-2">
              <article className="group flex h-full min-h-[570px] flex-col overflow-hidden rounded-[1.5rem] border-2 border-neutral-200 bg-white shadow-[0_14px_40px_-24px_rgba(23,23,23,0.35)] transition-all duration-500 hover:-translate-y-1.5 hover:border-red-300 hover:shadow-[0_24px_55px_-24px_rgba(220,38,38,0.28)]">
                <div className="relative h-64 shrink-0 overflow-hidden bg-neutral-100">
                  <img
                    src={story.image}
                    alt={`${story.name} — ${story.category}`}
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${story.imagePosition}`}
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-semibold text-red-600 shadow-sm backdrop-blur-md">
                    {story.category}
                  </span>

                  <div className="absolute inset-x-5 bottom-5 flex items-center gap-2 text-sm font-medium text-white">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    {story.location}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-red-600">
                      {story.name}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold leading-snug text-neutral-950 transition-colors group-hover:text-red-600 sm:text-[1.35rem]">
                      {story.title}
                    </h3>
                  </div>

                  <p className="line-clamp-3 text-sm leading-6 text-neutral-600">
                    {story.description}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="mb-5 border-l-2 border-red-500 bg-red-50/70 px-4 py-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-neutral-500">
                        Outcome
                      </p>
                      <p className="mt-1 text-sm font-medium text-neutral-800">
                        {story.outcome}
                      </p>
                    </div>

                    <Link
                      to={story.link}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-neutral-900 transition-all duration-300 hover:border-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
                      aria-label={`Explore the programme featured in ${story.name}'s story`}
                    >
                      Explore the programme
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .stories-carousel .slick-track {
          display: flex;
        }

        .stories-carousel .slick-slide {
          height: inherit;
        }

        .stories-carousel .slick-slide > div {
          height: 100%;
        }

        .stories-carousel .slick-prev {
          left: -14px;
          z-index: 10;
        }

        .stories-carousel .slick-next {
          right: -14px;
          z-index: 10;
        }

        .stories-carousel .slick-dots {
          bottom: 2px;
        }

        .stories-carousel .slick-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }

        .stories-carousel .slick-dots li button.story-pagination-button {
          width: auto;
          height: auto;
          padding: 8px 2px;
          background: transparent;
        }

        .stories-carousel
          .slick-dots
          li
          button.story-pagination-button::before {
          display: none;
          content: none;
        }

        .stories-carousel .slick-dots .story-dot {
          width: 7px;
        }

        .stories-carousel .slick-dots .slick-active .story-dot {
          width: 30px;
          background-color: rgb(220 38 38);
        }

        @media (min-width: 1280px) {
          .stories-carousel .slick-prev {
            left: -22px;
          }

          .stories-carousel .slick-next {
            right: -22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .stories-carousel *,
          .stories-carousel *::before,
          .stories-carousel *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Stories;
