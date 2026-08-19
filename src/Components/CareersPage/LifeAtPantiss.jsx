/* eslint-disable react/prop-types */
import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";

// Memoized static card data
const cardData = [
  {
    image:
      "/assets/careers/life/optimized/diversity.jpg",
    text: "Valuing inclusiveness and diversity",
    path: "/life-at-pantiss/inclusiveness-and-diversity",
  },
  {
    image:
      "/assets/careers/life/optimized/workplace-respect.jpg",
    text: "Ensuring zero tolerance for harassment",
    path: "/life-at-pantiss/zero-tolerance-for-harassment",
  },
  {
    image:
      "/assets/careers/life/optimized/meet-the-leaders.jpg",
    text: "Meet the leaders",
    path: "/life-at-pantiss/meet-the-leaders",
  },
  {
    image:
      "/assets/careers/life/optimized/mental-health.jpg",
    text: "Investing in mental health",
    path: "/life-at-pantiss/investing-in-mental-health",
  },
];

// Memoized Card component
const Card = memo(({ image, text, path, isLarge = false }) => (
  <Link
    to={path}
    aria-label={`Explore ${text}`}
    className={`group relative isolate block overflow-hidden rounded-[1.75rem] bg-neutral-900 shadow-lg ring-1 ring-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4 ${isLarge ? "h-[550px]" : "h-64"}`}
  >
    <img
      src={image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    <div
      className={`absolute bottom-3 left-3 right-3 rounded-2xl bg-white/95 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 sm:right-auto ${isLarge ? "p-5 sm:bottom-5 sm:left-5 sm:max-w-[85%] sm:p-6" : "p-4 sm:max-w-[calc(100%-1.5rem)]"}`}
    >
      <h3
        className={`font-semibold leading-tight text-red-600 ${isLarge ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"}`}
      >
        {text}
      </h3>
    </div>
  </Link>
));
Card.displayName = "Card";

const LifeAtPantiss = () => {
  // Memoized large card data
  const largeCard = useMemo(
    () => ({
      image: "/assets/careers/life/team.jpeg",
      text: "People at Pantiss",
      path: "/life-at-pantiss/people-at-pantiss",
    }),
    []
  );

  return (
    <section
      aria-labelledby="life-at-pantiss-heading"
      className="bg-white px-4 py-12 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-12">
          <div id="life-at-pantiss-heading">
            <Heading
              text="LIFE AT PANTISS"
              color="text-black"
              bgColor="bg-red-600"
            />
          </div>
          <p className="max-w-3xl text-left text-lg leading-8 text-gray-600">
            We are inclusive, empowering, and gender-transformative. We are a
            value-driven organisation - our four values (inclusiveness,
            innovation, integrity, and effectiveness) shape how we work. Learn
            more about our people, values, and culture.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 px-0 sm:px-4 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Card {...largeCard} isLarge />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2">
            {cardData.map((card) => (
              <Card key={card.path} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(LifeAtPantiss);
