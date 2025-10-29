import React from "react";
import Heading from "../Common/Heading";

const ProgrammesSection = () => {
  const items = [
    {
      title: "Curriculum",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761739107/tim-mossholder-WE_Kv_ZB1l0-unsplash_xqoxjt.jpg",
      link: "https://drive.google.com/file/d/1xyzCurriculum/view",
    },
    {
      title: "Structure",
      image:
        "https://res.cloudinary.com/dxzhnns58/image/upload/v1761739127/scott-graham-5fNmWej4tAA-unsplash_xg4nus.jpg",
      link: "https://drive.google.com/file/d/1xyzStructure/view",
    },
    {
      title: "Academic Calendar",
      image:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761739136/estee-janssens-zni0zgb3bkQ-unsplash_fsenxr.jpg",
      link: "https://drive.google.com/file/d/1xyzAcademicCalendar/view",
    },
    // {
    //   title: "Faculty",
    //   image:
    //     "https://res.cloudinary.com/dxzhnns58/image/upload/v1761739136/estee-janssens-zni0zgb3bkQ-unsplash_fsenxr.jpg",
    //   link: "https://drive.google.com/file/d/1xyzFaculty/view",
    // },
  ];

  return (
    <section className="py-12 px-8 bg-white">
      <div className="mx-auto px-6">
        <Heading text="OUR PROGRAMME" color="text-black" bgColor="bg-red-500" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => window.open(item.link, "_blank")}
            >
              {/* Lazy-loaded Image */}
              <img
                src={item.image}
                alt={item.title}
                className="h-[300px] w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Title with arrow animation */}
              <div className="absolute bottom-0 left-0 right-0 bg-red-600 text-white py-3 px-4 flex items-center justify-between transition-all duration-300">
                <span className="font-medium text-[22px]">{item.title}</span>
                <span className="opacity-0 text-3xl translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transform transition-transform duration-300 ease-in-out">
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