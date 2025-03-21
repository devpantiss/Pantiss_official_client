import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";

// Memoized static card data
const cardData = [
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1735392592/pexels-lalesh-167964_fgtnus.jpg",
    text: "Tution Assistance",
    path: "/benefits-at-pantiss/tution-assistance",
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1735392306/pexels-william-fortunato-6392819_speall.jpg",
    text: "Parenting Benefits",
    path: "/benefits-at-pantiss/parenting-benefits",
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1736148776/Screenshot_2025-01-06_at_1.02.25_PM_dzgfly.png",
    text: "Health Insurance",
    path: "/benefits-at-pantiss/health-insurance",
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_400/v1736151874/Screenshot_2025-01-06_at_1.54.11_PM_mdvxxy.png",
    text: "Retirement Programmes",
    path: "/benefits-at-pantiss/retirement-programmes",
  },
];

// Memoized Card component
const Card = memo(({ image, text, path, isLarge = false }) => (
  <div className={`relative shadow-lg rounded-lg overflow-hidden group ${isLarge ? "h-[500px]" : "h-64"}`}>
    <Link to={path}>
      <img
        src={image}
        alt={text}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        loading="lazy"
      />
      <div className="absolute bottom-0 left-0 bg-white px-3 py-2 rounded">
        <p className={`text-red-600 font-semibold ${isLarge ? "lg:text-3xl text-xl" : "text-xl"}`}>
          {text}
        </p>
      </div>
    </Link>
  </div>
));
Card.displayName = "Card";

const BenefitsPantiss = () => {
  // Memoized large card data
  const largeCard = useMemo(
    () => ({
      image:
        "https://res.cloudinary.com/dgtc2fvgu/image/upload/c_scale,w_800/e_improve/v1735392458/WhatsApp_Image_2024-12-28_at_6.56.50_PM_r6gleo.jpg",
      text: "Career Development",
      path: "/benefits-at-pantiss/career-development",
    }),
    []
  );

  return (
    <div className="bg-white py-12 px-4 sm:px-8">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Benefits at <span className="text-red-500">Pantiss</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Pantiss’s staff are supported to pursue a rewarding career, with our
          benefits serving the unique needs of everyone in the Pantiss family.
        </p>
      </section>

      {/* Cards Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-4">
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
  );
};

export default memo(BenefitsPantiss);