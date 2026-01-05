import React, { useEffect, useRef, useState } from "react";

const galleryImages = [
  {
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761819875/WhatsApp_Image_2025-10-30_at_3.34.59_PM_tiduhn.jpg",
    alt: "Fellows during field training",
  },
  {
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761840260/odisha-2368219_1280_hspude.jpg",
    alt: "Community engagement session",
  },
  {
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761840689/elderly-1213193_1280_enovzu.jpg",
    alt: "Indigenous livelihood interaction",
  },
  {
    src: "https://res.cloudinary.com/dxzhnns58/image/upload/v1761843805/pexels-cottonbro-4430323_mbxpdx.jpg",
    alt: "Livelihood training workshop",
  },
];

const FellowshipGallery = ({ onApplyClick }) => {
  const sectionRef = useRef(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCard(true);
        } else {
          setShowCard(false); // remove this line if you want animate-once
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* MOVING IMAGE STRIP */}
      <div className="absolute inset-0 flex animate-gallery-scroll">
        {[...galleryImages, ...galleryImages].map((img, index) => (
          <div
            key={index}
            className="min-w-[80vw] md:min-w-[50vw] lg:min-w-[33.33vw] h-full"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />

      {/* RIGHT SIDE CARD */}
      <div className="absolute top-0 -right-12 h-full flex items-center z-20 pointer-events-none">
        <div
          className={`
            pointer-events-auto
            mr-6 md:mr-12
            max-w-md
            bg-white/95 backdrop-blur-sm
            p-8 md:p-12
            shadow-2xl
            transform transition-all duration-700 ease-out
            ${
              showCard
                ? "translate-x-0 opacity-100"
                : "translate-x-24 opacity-0"
            }
          `}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Life as a Fellow
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Experience immersive field exposure, community leadership, and
            real-world problem solving across some of India’s most critical
            development landscapes.
          </p>

          <button
            onClick={onApplyClick}
            className="px-8 py-3 bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FellowshipGallery;