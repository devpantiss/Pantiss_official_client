import React from "react";

const CallToActionSection = () => {
  return (
    <section
      className="relative py-32 bg-black/20 overflow-hidden"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/cosmic-environment-with-colorful-neon-laser-lights_181624-24490.jpg?ga=GA1.1.1865900309.1727187746&semt=ais_hybrid')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay for Readability */}
      <div className="absolute inset-0 bg-overlay z-0"></div>

      {/* Holographic Overlay */}
      <div className="absolute inset-0 holographic-overlay z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Headline and Description */}
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0 animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white glow-red mb-4">
              Shape the Future with Us
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Join our Innovation Lab to collaborate on groundbreaking projects that redefine what’s possible.
            </p>
          </div>

          {/* Right Side: Floating CTA Card */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="cta-card bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border-2 border-red-600 shadow-lg animate-float-in">
              <h3 className="text-2xl font-semibold text-white glow-red mb-4">
                Ready to Innovate?
              </h3>
              <a
                href="#get-involved"
                className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-br from-red-600 to-red-600-dark rounded-lg hover:scale-105 transition-transform glow-red focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-black"
              >
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scoped CSS for Immersive Design */}
      <style>{`
        /* Color Definitions */
        :root {
          --red-600: #dc2626;
          --red-600-dark: #b91c1c;
        }

        /* Background Overlay for Readability */
        .bg-overlay {
          background: rgba(0, 0, 0, 0.7);
        }

        /* Holographic Overlay */
        .holographic-overlay {
          background: linear-gradient(
            45deg,
            rgba(220, 38, 38, 0.1) 0%,
            transparent 50%,
            rgba(220, 38, 38, 0.1) 100%
          );
          opacity: 0.3;
          animation: holographic-shift 10s ease-in-out infinite;
        }

        @keyframes holographic-shift {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }

        /* Red-600 Glow Effect */
        .glow-red {
          text-shadow: 0 0 10px var(--red-600), 0 0 20px var(--red-600);
        }

        /* Floating CTA Card */
        .cta-card {
          max-width: 400px;
          backdrop-filter: blur(10px);
          box-shadow: 0 0 30px rgba(220, 38, 38, 0.3);
        }

        /* Slide-In Animation for Left Side */
        .animate-slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          animation: slide-in-left 1s ease-out forwards;
        }

        @keyframes slide-in-left {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Float-In Animation for CTA Card */
        .animate-float-in {
          opacity: 0;
          transform: translateY(50px);
          animation: float-in 1s ease-out forwards;
          animation-delay: 0.3s;
        }

        @keyframes float-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .cta-card {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default CallToActionSection;