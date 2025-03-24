import React, { memo, useState, useCallback } from "react";
import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../Common/Heading";

const VideoSectionNutrition = memo(() => {
  const [activeSlide, setActiveSlide] = useState(0);

  const videoData = [
    {
      url: "https://youtu.be/Xcy2DzvvB7s?si=nw7ixgdlV7nUXX2j",
      title: "Responsible Mining Operators",
      description:
        "The Responsible Mining Operators program trains individuals in sustainable mining practices, ensuring environmental stewardship and community welfare. This initiative equips operators with skills to minimize ecological impact while maintaining operational efficiency in mineral extraction.",
      highlights: [
        "Trained 3,000 operators in eco-friendly mining since 2022.",
        "Reduced mining-related emissions by 20% in pilot regions.",
        "Introduced safety protocols adopted by 15 mining companies.",
      ],
    },
    {
      url: "https://youtu.be/AK6vBfu7yAw?si=PFpYvkJTTpT-uRko",
      title: "Heavy Earth Moving Machinery Mechatronics Specialists",
      description:
        "This program develops expertise in the maintenance and operation of heavy earth-moving machinery through mechatronics—a blend of mechanics, electronics, and computing. Specialists are prepared to enhance equipment longevity and efficiency in demanding mining environments.",
      highlights: [
        "Certified 1,500 specialists in advanced machinery repair by 2024.",
        "Improved equipment uptime by 35% across partnered sites.",
        "Launched 10 training centers equipped with cutting-edge simulators.",
      ],
    },
    {
      url: "https://youtu.be/JKLNdZahMSE?si=tLUKZg9dG6cBZaKI",
      title: "Foundry & Aluminium Forging",
      description:
        "The Foundry & Aluminium Forging initiative focuses on upskilling workers in metal casting and forging techniques, emphasizing aluminium for its lightweight and recyclable properties. This program supports industries transitioning to sustainable manufacturing processes.",
      highlights: [
        "Trained 2,000 workers in precision forging since 2023.",
        "Increased production efficiency by 25% in partner foundries.",
        "Reduced material waste by 15% through optimized techniques.",
      ],
    },
    {
      url: "https://youtu.be/KXx0llNSWRc?si=bOCyno-jf99FSSAD",
      title: "Energy Transition Supervisors",
      description:
        "Energy Transition Supervisors lead the shift from fossil fuels to renewable energy in mining operations. This program trains supervisors to implement green technologies, manage energy-efficient systems, and ensure compliance with global sustainability standards.",
      highlights: [
        "Supervised installation of solar panels at 20 mining sites.",
        "Cut energy costs by 30% through transition strategies in 2024.",
        "Trained 800 supervisors in renewable energy management.",
      ],
    },
    {
      url: "https://youtu.be/nCIMV9sSNQ8?si=mHda7jLdkkiFs1t-",
      title: "Pantiss School of Mines & Shipping",
      description:
        "The Pantiss School of Mines & Shipping offers comprehensive education in mining engineering and maritime logistics. It prepares students for careers in resource extraction and global supply chains, blending practical training with theoretical knowledge.",
      highlights: [
        "Graduated 1,200 students across mining and shipping disciplines.",
        "Established partnerships with 10 international shipping firms.",
        "Introduced a state-of-the-art mining simulation lab in 2023.",
      ],
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    afterChange: useCallback((current) => setActiveSlide(current), []),
    customPaging: (i) => (
      <button
        className="w-4 h-4 bg-red-600 rounded-full mx-2 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 hover:bg-red-700 will-change-transform"
        aria-label={`Go to slide ${i + 1}`}
      />
    ),
    dotsClass: "slick-dots custom-dots",
    lazyLoad: "ondemand", // Lazy load slides
  };

  return (
    <section className="bg-white py-12 px-6 mb-8 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x600')`,
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-12">
          <Heading
            text="PROGRAMS AT A GLANCE"
            color="text-black"
            bgColor="bg-red-600"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column: Video Slider */}
          <div className="md:w-1/2">
            <Slider {...sliderSettings} className="mb-6">
              {videoData.map((video, index) => (
                <div key={index} className="px-2">
                  <ReactPlayer
                    url={video.url}
                    width="100%"
                    height="450px"
                    playing={activeSlide === index} // Play only active slide
                    controls={true}
                    light={true} // Show thumbnail until clicked
                    className="rounded-xl shadow-md will-change-transform"
                    config={{
                      youtube: {
                        playerVars: {
                          modestbranding: 1,
                          rel: 0,
                          showinfo: 0,
                        },
                      },
                    }}
                  />
                </div>
              ))}
            </Slider>
            <h2 className="text-xl mt-[-20px] font-semibold text-gray-800 text-center">
              {videoData[activeSlide].title}
            </h2>
          </div>

          {/* Right Column: Dynamic Text */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-bold text-red-600 mb-4">
                {videoData[activeSlide].title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                {videoData[activeSlide].description}
              </p>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Highlights
                </h4>
                <ul className="space-y-3">
                  {videoData[activeSlide].highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 mr-3 bg-red-500 text-white rounded-full flex-shrink-0">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 text-base leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Scoped CSS for Dots */}
        <style jsx>{`
          .custom-dots {
            position: absolute;
            bottom: -60px !important;
            display: flex !important;
            justify-content: center;
            width: 100%;
            padding: 0;
            margin: 0;
            list-style: none;
          }

          .custom-dots li {
            margin: 0 4px;
          }

          .custom-dots li button {
            width: 16px;
            height: 16px;
            background-color: #dc2626;
            border-radius: 50%;
            opacity: 0.8;
            transition: transform 0.3s ease, opacity 0.3s ease;
          }

          .custom-dots li button:hover {
            background-color: #ef4444;
            opacity: 1;
          }

          .custom-dots li.slick-active button {
            background-color: #ffffff;
            box-shadow: 0 0 0 2px #dc2626;
            opacity: 1;
            transform: scale(1.1);
          }
        `}</style>
      </div>
    </section>
  );
});

VideoSectionNutrition.displayName = "VideoSectionNutrition";

export default VideoSectionNutrition;