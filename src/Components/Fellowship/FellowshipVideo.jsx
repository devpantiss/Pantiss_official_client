import React, { useEffect, useRef, useState } from "react";

const FellowshipVideo = ({ src, onApplyClick }) => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setShowCard(true); // trigger slide-in
        } else {
          video.pause();
          setShowCard(false); // optional: reset when out of view
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
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* RIGHT SIDE CARD CONTAINER */}
      <div className="absolute top-0 -right-12 h-full flex items-center z-10 pointer-events-none">
        <div
          className={`
            pointer-events-auto
            mr-6 md:mr-12
            max-w-md
            bg-white/95
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            The Fellowship Journey
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            A structured pathway that nurtures purpose-driven leaders through
            real-world exposure, mentorship, and community impact.
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

export default FellowshipVideo;