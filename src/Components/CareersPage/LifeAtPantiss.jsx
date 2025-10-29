import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import Heading from "../Common/Heading";

// Memoized static card data
const cardData = [
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740136/blogs_oulxwa.jpg",
    text: "Valuing inclusiveness and diversity",
    path: "/life-at-pantiss/inclusiveness-and-diversity",
  },
  {
    image:
      "https://ohsguide.workplacenl.ca/topic/violence_harassment/161.png?c_scale,w_400",
    text: "Ensuring zero tolerance for harassment",
    path: "/life-at-pantiss/zero-tolerance-for-harassment",
  },
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740271/smartworks-coworking-Uz8THWPXwhI-unsplash_cb6pab.jpg",
    text: "Meet the leaders",
    path: "/life-at-pantiss/meet-the-leaders",
  },
  {
    image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740478/marcel-strauss-fzqxoFJytiE-unsplash_ftv7eh.jpg",
    text: "Investing in mental health",
    path: "/life-at-pantiss/investing-in-mental-health",
  },
];

// Memoized Card component
const Card = memo(({ image, text, path, isLarge = false }) => (
  <div
    className={`relative shadow-lg rounded-lg overflow-hidden group ${
      isLarge ? "h-[550px]" : "h-64"
    }`}
  >
    <Link to={path}>
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 bg-white px-3 py-2 rounded">
        <p
          className={`text-red-600 font-semibold ${
            isLarge ? "lg:text-3xl text-xl" : "text-xl"
          }`}
        >
          {text}
        </p>
      </div>
    </Link>
  </div>
));
Card.displayName = "Card";

const LifeAtPantiss = () => {
  // Memoized large card data
  const largeCard = useMemo(
    () => ({
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761740582/WhatsApp_Image_2024-12-28_at_6.28.04_PM_swufs2.jpg",
      text: "People at Pantiss",
      path: "/life-at-pantiss/people-at-pantiss",
    }),
    []
  );

  return (
    <div className="bg-white py-12 px-4 sm:px-8">
      {/* Header Section */}
      <section className="mb-12 max-w-7xl mx-auto">
        <Heading
          text="LIFE AT PANTISS"
          color="text-black"
          bgColor="bg-red-600"
        />

        {/* <h1 className="text-4xl font-bold mb-4">
          Life at <span className="text-red-500">Pantiss</span>
        </h1> */}
        <p className="text-lg text-left text-gray-600 max-w-3xl">
          We are inclusive, empowering, and gender-transformative. We are a
          value-driven organisation - our four values (inclusiveness,
          innovation, integrity, and effectiveness) shape how we work. Learn
          more about our people, values, and culture.
        </p>
      </section>

      <div className="flex justify-center items-center">
        {/* Cards Layout */}
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-4 gap-6 px-4">
          {/* Large Card on the Left */}
          <div className="lg:col-span-2">
            <Card {...largeCard} isLarge={true} />
          </div>

          {/* Small Cards Grid on the Right */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cardData.map((card) => (
              <Card
                key={card.path}
                image={card.image}
                text={card.text}
                path={card.path}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(LifeAtPantiss);
