// Programs.js
import React from "react";
import Heading from "../../../Common/Heading";

const Programs = () => {
  const funds = [
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/3df3643c-cf03-4323-8fce-d34d63d234ab_cymgyv.jpg",
      categories: ["Mining Skills", "Sustainability"],
      title: "Responsible Mining Operators",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1740387857/8082f70f-bce4-4bf8-8b44-002e235642d6_wtpyvv.jpg",
      categories: ["Mechatronics", "Heavy Equipment"],
      title: "Heavy Earth Moving Machinery Mechatronics Specialist",
    },
    {
      image: "https://songshunsteel.com/wp-content/uploads/2023/12/steel-foundry.webp",
      categories: ["Specialized Trades", "Manufacturing"],
      title: "Foundry & Aluminium Forging",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742126668/matthew-henry-yETqkLnhsUI-unsplash_ayeg4b.jpg",
      categories: ["Energy Sector", "Sustainability"],
      title: "Energy Transition Supervisors",
    },
    {
      image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1739283474/WhatsApp_Image_2025-02-11_at_7.45.14_PM_zual7i.jpg",
      categories: ["Education", "Mining & Shipping"],
      title: "Pantiss School For Mines & Shipping",
    },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6">
          <Heading text="PROGRAMS" color="text-black" bgColor="bg-red-500" />
        </div>

        {/* Grid Layout - All 5 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {funds.map((fund, index) => (
            <div
              key={index}
              className="relative bg-cover bg-center h-[450px] rounded-lg shadow-md overflow-hidden"
              style={{ backgroundImage: `url(${fund.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
              
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                {fund.categories.map((category, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 bg-red-600 bg-opacity-90 text-white text-[10px] font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <hr className="border-t border-white/80 mb-2 w-8" />
                <h3 className="text-start text-2xl font-semibold leading-tight">
                  {fund.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;