import React from "react";

const cardData = [
  {
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735392592/pexels-lalesh-167964_fgtnus.jpg",
    text: "Tution Assistance",
  },
  {
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735392306/pexels-william-fortunato-6392819_speall.jpg",
    text: "Parenting Benefits",
  },
  {
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727161748/Screenshot_2024-09-24_at_12.38.38_PM_kybqfh.png",
    text: "Health Insurance",
  },
  {
    image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1727161475/Screenshot_2024-09-24_at_12.33.55_PM_nbmxej.png",
    text: "Retirement Programmes",
  },
];

const BenefitsPantiss = () => {
  return (
    <div className="bg-gray-100 py-12 px-8">
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-4">
        {/* Large Card on the Left */}
        <div className="lg:col-span-2 relative shadow-lg rounded-lg overflow-hidden group">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/e_improve/v1735392458/WhatsApp_Image_2024-12-28_at_6.56.50_PM_r6gleo.jpg"
            alt="Career Development"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-4 py-2 rounded">
            <p className="text-white text-lg font-semibold">
              Career Development{" "}
            </p>
          </div>
        </div>

        {/* Small Cards Grid on the Right */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative shadow-lg rounded-lg overflow-hidden group"
            >
              <img
                src={card.image}
                alt={card.text}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-3 py-2 rounded">
                <p className="text-white text-sm font-medium">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsPantiss;
