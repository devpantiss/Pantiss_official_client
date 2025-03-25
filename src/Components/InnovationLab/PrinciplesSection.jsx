import React, { useState } from "react";
import { FaLightbulb, FaRocket, FaUsers, FaGlobe } from "react-icons/fa";
import Heading from "../Common/Heading";

// Principles data (4 cards) with detailed descriptions and image placeholders
const principles = [
  {
    icon: <FaLightbulb className="text-5xl text-white glow-red" />,
    title: "Creativity First",
    description:
      "We champion out-of-the-box thinking to drive innovation in a futuristic world. By encouraging bold ideas, we challenge the status quo and spark transformative solutions. For example, our team developed a holographic brainstorming platform that uses AI to generate 3D idea maps, leading to a 35% increase in creative output. This principle ensures that creativity powers our journey into the future, fostering an environment where visionary ideas can thrive and shape tomorrow.",
    color: "text-white glow-red",
    gradient: "from-red-600 to-red-600-dark",
    image: "https://via.placeholder.com/300x200.png?text=Creativity+First",
    imageAlt: "A holographic lightbulb glowing with vibrant red hues, surrounded by futuristic digital sparks, symbolizing creativity and innovation.",
  },
  {
    icon: <FaRocket className="text-5xl text-white glow-red" />,
    title: "Rapid Prototyping",
    description:
      "We build fast, test often, and iterate quickly to bring ideas to life with hyper-speed efficiency. This approach allows us to validate concepts in real-time using advanced simulations. For instance, we created a virtual reality prototype for a space exploration app in just 10 days, tested it in a simulated environment, and launched it 50% faster than traditional methods. Rapid prototyping ensures we stay ahead in the race to innovate, delivering cutting-edge solutions at light speed.",
    color: "text-white glow-red",
    gradient: "from-red-600 to-red-600-dark",
    image: "https://via.placeholder.com/300x200.png?text=Rapid+Prototyping",
    imageAlt: "A vibrant red rocket soaring through a digital galaxy, leaving a trail of glowing particles, representing speed and futuristic prototyping.",
  },
  {
    icon: <FaUsers className="text-5xl text-white glow-red" />,
    title: "Collaboration",
    description:
      "Innovation thrives in interconnected teams, and we foster a culture where diverse minds unite in a digital ecosystem. By leveraging augmented reality for virtual collaboration, we create solutions that are more inclusive and impactful. For example, our team used AR to co-design a sustainable city model, achieving a 98% approval rating from global stakeholders. Collaboration ensures that every perspective shapes the future, leading to solutions that resonate on a galactic scale.",
    color: "text-white glow-red",
    gradient: "from-red-600 to-red-600-dark",
    image: "https://via.placeholder.com/300x200.png?text=Collaboration",
    imageAlt: "A group of holographic avatars collaborating in a virtual space, glowing with vibrant red lights, symbolizing futuristic teamwork.",
  },
  {
    icon: <FaGlobe className="text-5xl text-white glow-red" />,
    title: "Global Impact",
    description:
      "Our innovations aim to create a positive impact on a universal scale, addressing challenges that shape the future of humanity. We focus on solutions that are sustainable and accessible across galaxies. For example, we developed a solar-powered AI drone that has delivered medical supplies to over 15,000 remote communities, improving lives worldwide. This principle drives us to think beyond Earth, creating solutions that make a difference for the universe as a whole.",
    color: "text-white glow-red",
    gradient: "from-red-600 to-red-600-dark",
    image: "https://via.placeholder.com/300x200.png?text=Global+Impact",
    imageAlt: "A glowing holographic globe with vibrant red accents, surrounded by orbiting satellites, symbolizing global impact in a futuristic context.",
  },
];

const PrinciplesSection = () => {
  const [flipped, setFlipped] = useState(Array(principles.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
    <section
      className="relative py-20 bg-black overflow-hidden"
      style={{
        // backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916188/211589208_272cfb0a-9d68-41e5-84f4-dbb8243f3d91_vai2rd.jpg')`,
        backgroundImage: `url('https://res.cloudinary.com/dgtc2fvgu/image/upload/v1742916455/abstract-background-with-colorful-glowing-neon-lights_dzvjgy.jpg')`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay for Readability */}
      <div className="absolute inset-0 bg-overlay z-0"></div>

      {/* Neon Glow Overlay and Particle Animation */}
      <div className="absolute inset-0 neon-glow z-0"></div>
      <div className="absolute inset-0 particle-animation z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <Heading text="OUR PRINCIPLES" color="text-white" bgColor="bg-white" />
        </div>

        {/* Flip Card Grid (2x2) */}
        <div className="flip-card-grid">
          {principles.map((principle, index) => (
            <div
              key={index}
              className={`flip-card-container ${flipped[index] ? "flipped" : ""}`}
              onClick={() => handleFlip(index)}
              role="button"
              aria-label={`Toggle principle: ${principle.title}`}
              tabIndex={0}
              onKeyPress={(e) => e.key === "Enter" && handleFlip(index)}
              style={{ "--index": index }}
            >
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className={`flip-card-front bg-gradient-to-br ${principle.gradient}`}>
                  <div className="overlay"></div>
                  <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
                    <div className="mb-4">{principle.icon}</div>
                    <h3 className={`text-3xl font-bold ${principle.color}`}>
                      {principle.title}
                    </h3>
                  </div>
                </div>

                {/* Back Side */}
                <div className={`flip-card-back bg-gradient-to-br ${principle.gradient}`}>
                  <div className="overlay"></div>
                  <div className="flex flex-col items-center justify-center h-full p-8 relative z-10">
                    <h3 className={`text-3xl font-bold ${principle.color} mb-4`}>
                      {principle.title}
                    </h3>
                    <p className="text-gray-100 text-lg leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scoped CSS for Updated Design */}
      <style>{`
        /* Color Definitions (Red-600 and Darker Variant) */
        :root {
          --red-600: #dc2626;
          --red-600-dark: #b91c1c;
        }

        /* Background Overlay for Readability */
        .bg-overlay {
          background: rgba(0, 0, 0, 0.4);
        }

        /* Neon Glow Overlay (Red-600) */
        .neon-glow {
          background: radial-gradient(
            circle at center,
            rgba(220, 38, 38, 0.1) 0%,
            transparent 70%
          );
          opacity: 0.5; /* Reduced opacity to avoid overpowering the background image */
        }

        /* Particle Animation (Red-600) */
        .particle-animation {
          background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><circle cx="10" cy="10" r="2" fill="#dc2626" opacity="0.5"><animate attributeName="cx" from="10" to="100%" dur="10s" repeatCount="indefinite" /><animate attributeName="cy" from="10" to="100%" dur="15s" repeatCount="indefinite" /></circle><circle cx="50" cy="50" r="1" fill="#dc2626" opacity="0.5"><animate attributeName="cx" from="50" to="100%" dur="12s" repeatCount="indefinite" /><animate attributeName="cy" from="50" to="100%" dur="8s" repeatCount="indefinite" /></circle><circle cx="90" cy="90" r="3" fill="#dc2626" opacity="0.5"><animate attributeName="cx" from="90" to="0%" dur="14s" repeatCount="indefinite" /><animate attributeName="cy" from="90" to="0%" dur="10s" repeatCount="indefinite" /></circle></svg>');
          background-size: cover;
          opacity: 0.1; /* Reduced opacity to avoid overpowering the background image */
        }

        /* Pulse Animation for Heading (Red-600) */
        .pulse {
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
          }
          50% {
            text-shadow: 0 0 20px rgba(220, 38, 38, 0.8), 0 0 30px rgba(220, 38, 38, 0.5);
          }
          100% {
            text-shadow: 0 0 10px rgba(220, 38, 38, 0.5);
          }
        }

        /* Glowing Underline for Heading (Red-600) */
        .glowing-underline {
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            90deg,
            var(--red-600),
            var(--red-600-dark),
            var(--red-600)
          );
          background-size: 200%;
          animation: glow 3s ease-in-out infinite;
        }

        @keyframes glow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 200% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Red-600 Glow for Text and Icons */
        .glow-red {
          text-shadow: 0 0 10px var(--red-600), 0 0 20px var(--red-600);
        }

        /* Flip Card Grid (2x2) */
        .flip-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          justify-items: center;
        }

        /* Flip Card Container (Increased Width and Height) */
        .flip-card-container {
          perspective: 1000px;
          width: 400px;
          height: 450px;
          animation: teleport 0.8s ease-out forwards;
          animation-delay: calc(var(--index) * 0.2s);
        }

        /* Teleport Animation (Futuristic Fade-In with Glitch) */
        @keyframes teleport {
          0% {
            opacity: 0;
            transform: scale(0.5) translateY(50px);
            filter: blur(5px);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1) translateY(-10px);
            filter: blur(2px);
          }
          70% {
            opacity: 0.7;
            transform: scale(0.95) translateY(5px);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }

        /* Flip Card Inner */
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-container:hover .flip-card-inner,
        .flip-card-container.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        /* Tilt Effect on Hover */
        .flip-card-container:hover {
          transform: rotate(3deg);
          transition: transform 0.3s ease;
        }

        /* Flip Card Front and Back */
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(220, 38, 38, 0.3);
          border: 2px solid var(--red-600);
        }

        /* Overlay for Better Contrast */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          z-index: 1;
        }

        .flip-card-back {
          transform: rotateY(180deg);
          overflow-y: auto;
        }

        /* Responsive Design (Adjusted Max-Width for Mobile) */
        @media (max-width: 768px) {
          .flip-card-grid {
            grid-template-columns: 1fr;
          }

          .flip-card-container {
            width: 100%;
            max-width: 450px;
          }

          .flip-card-container:hover .flip-card-inner {
            transform: none;
          }

          .flip-card-container:hover {
            transform: none;
          }
        }

        /* Focus state for accessibility (Red-600) */
        .flip-card-container:focus-within .flip-card-inner,
        .flip-card-container.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }

        .flip-card-container:focus-within {
          outline: 2px solid var(--red-600);
          outline-offset: 4px;
        }
      `}</style>
    </section>
  );
};

export default PrinciplesSection;