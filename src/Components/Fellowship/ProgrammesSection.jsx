import React, { useMemo, useRef, useEffect, useState } from "react";
import Heading from "../Common/Heading";

const ProgrammesSection = () => {
  const sectionRef = useRef(null);
  const [showCards, setShowCards] = useState(false);

  const items = useMemo(
    () => [
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
    ],
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCards(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">
        <Heading
          text="OUR PROGRAMME"
          color="text-black"
          bgColor="bg-red-500"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ transitionDelay: `${index * 120}ms` }}
              className={`
                group relative bg-white rounded-lg overflow-hidden shadow-lg
                focus:outline-none focus:ring-2 focus:ring-red-500
                transform transition-all duration-700 ease-out
                ${
                  showCards
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }
              `}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-[300px] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />

              {/* Footer */}
              <div className="absolute inset-x-0 bottom-0 bg-red-600 text-white py-3 px-4 flex items-center justify-between">
                <span className="font-medium text-[22px]">
                  {item.title}
                </span>

                <span className="text-3xl opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgrammesSection;