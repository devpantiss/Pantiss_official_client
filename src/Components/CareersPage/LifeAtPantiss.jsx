import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735192753/blogs_copltg.jpg",
    text: "Valuing inclusiveness and diversity",
    path: "/life-at-pantiss/inclusiveness-and-diversity"
  },
  {
    image: "https://ohsguide.workplacenl.ca/topic/violence_harassment/161.png",
    text: "Ensuring zero tolerance for harassment",
    path: "/life-at-pantiss/zero-tolerance-for-harassment"
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1729517840/smartworks-coworking-Uz8THWPXwhI-unsplash_j8ospq.jpg",
    text: "Meet the leaders",
    path: "/life-at-pantiss/meet-the-leaders"
  },
  {
    image:
      "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726530883/WhatsApp_Image_2024-09-08_at_18.49.58_a572e0ed_gstqo0.jpg",
    text: "Investing in mental health",
    path: "/life-at-pantiss/investing-in-mental-health"
  },
];

const LifeAtBRAC = () => {
  return (
    <div className="bg-gray-100 py-12 px-8">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Life at <span className="text-red-500">Pantiss</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We are inclusive, empowering, and gender-transformative. We are a
          value-driven organisation - our four values (inclusiveness,
          innovation, integrity, and effectiveness) shape how we work. Learn
          more about our people, values, and culture.
        </p>
      </section>

      {/* Cards Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 px-4">
        {/* Large Card on the Left */}
        <div className="lg:col-span-2 relative shadow-lg rounded-lg overflow-hidden group">
          <Link to="/life-at-pantiss/people-at-pantiss">
            <img
              src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735390737/WhatsApp_Image_2024-12-28_at_6.28.04_PM_rscd9s.jpg"
              alt="Zero Tolerance for Harassment"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-4 py-2 rounded">
              <p className="text-white text-lg font-semibold">
                People at Pantiss{" "}
              </p>
            </div>
          </Link>
        </div>

        {/* Small Cards Grid on the Right */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="relative shadow-lg rounded-lg overflow-hidden group"
            >
              <Link to={card.path}>
                <img
                  src={card.image}
                  alt={card.text}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-3 py-2 rounded">
                  <p className="text-white text-sm font-medium">{card.text}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LifeAtBRAC;
