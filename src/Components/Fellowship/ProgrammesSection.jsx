import React from "react";

const ProgrammesSection = () => {
  const items = [
    { title: "Curriculum", image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736159003/tim-mossholder-WE_Kv_ZB1l0-unsplash_uhebrn.jpg" },
    { title: "Structure", image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736159003/scott-graham-5fNmWej4tAA-unsplash_tiqwpn.jpg" },
    { title: "Academic Calendar", image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1736159002/estee-janssens-zni0zgb3bkQ-unsplash_dhxfnq.jpg" },
    { title: "Faculty", image: "https://res.cloudinary.com/dgtc2fvgu/image/upload/v1735915960/WhatsApp_Image_2025-01-03_at_7.09.25_PM_1_pmya7b.jpg" },
  ];

  return (
    <section className="py-12 px-8 bg-white">
      <div className="mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">OUR PROGRAMME</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg rounded-lg overflow-hidden"
            >
              {/* Image */}
              <div
                className="h-[300px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              {/* Title with arrow animation */}
              <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-3 px-4 flex items-center justify-between transition-all duration-300 group-hover:pl-6">
                <span className="font-medium text-[22px]">{item.title}</span>
                <span className="opacity-0 text-[22px] group-hover:opacity-100 transform translate-x-5 group-hover:translate-x-0 transition-all duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;
