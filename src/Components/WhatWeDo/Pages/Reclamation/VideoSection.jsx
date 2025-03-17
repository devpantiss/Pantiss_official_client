import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../Common/Heading";

const VideoSectionReclamation = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const videoData = [
    // {
    //   url: "https://www.youtube.com/watch?v=RWtT0EfhNsE",
    //   title: "Why ADB is Asia and the Pacific’s Climate Bank",
    //   description:
    //     "Discover how ADB leads climate action in Asia and the Pacific, mobilizing finance and expertise to support sustainable development. As the region’s climate bank, ADB has set ambitious targets, achieving $100 billion in climate investments by 2019—11 years ahead of schedule.",
    //   highlights: [
    //     "Achieved $100 billion climate investment target in 2019.",
    //     "Implemented a climate risk screening framework for all projects.",
    //     "Accredited by the Green Climate Fund in 2015.",
    //   ],
    // },
    {
      url: "https://youtu.be/W14alojbmVU?si=Vd2HNx2rs99bc8FD", // Placeholder
      title: "Pondy Fish: Sustainable Aquaculture",
      description:
        "The Pondy Fish program promotes sustainable aquaculture in Puducherry, enhancing local livelihoods while preserving marine ecosystems. Through innovative fish farming techniques, it reduces environmental impact and supports coastal communities with resilient food systems.",
      highlights: [
        "Trained 5,000 fishers in sustainable practices since 2020.",
        "Reduced coastal pollution by 30% in target areas.",
        "Increased fish yield by 25% with eco-friendly methods.",
      ],
    },
    {
      url: "https://youtu.be/16W61cQyujM?si=JUwW8c8puadGrvgp", // Placeholder
      title: "Guava's AcreRise: Agroforestry Innovation",
      description:
        "Guava's AcreRise transforms degraded lands into thriving agroforestry systems, focusing on guava cultivation. This initiative boosts biodiversity, sequesters carbon, and empowers farmers with sustainable income sources across rural landscapes.",
      highlights: [
        "Planted 10,000 guava trees across 500 hectares in 2023.",
        "Enhanced soil health in 80% of project areas.",
        "Generated $1.2 million in farmer income annually.",
      ],
    },
    {
      url: "https://youtu.be/T0nJbbtbLL8?si=CpTy0r-Z4Fn2u8CA", // Placeholder
      title: "Tassar Fashion: Ethical Textile Futures",
      description:
        "Tassar Fashion champions sustainable silk production using tassar silk from wild silkworms. By supporting tribal artisans and eco-friendly practices, it blends tradition with modern fashion, reducing the carbon footprint of the textile industry.",
      highlights: [
        "Empowered 2,500 tribal artisans with fair wages.",
        "Cut textile emissions by 15% compared to conventional silk.",
        "Launched 3 sustainable fashion lines in 2023.",
      ],
    },
    {
      url: "https://youtu.be/O7GW-Vc8GUk?si=iWLdGScUWx6Vu03i", // Placeholder
      title: "Tribey Coffee: Community-Driven Cultivation",
      description:
        "Tribey Coffee empowers indigenous communities through shade-grown coffee farming. This program enhances soil health, preserves forests, and provides fair trade opportunities, delivering premium coffee with a positive social and environmental impact.",
      highlights: [
        "Supported 1,800 indigenous farmers with training.",
        "Preserved 300 hectares of forestland since 2021.",
        "Exported 50 tons of fair-trade coffee in 2023.",
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
    afterChange: (current) => setActiveSlide(current),
    customPaging: () => (
      <button className="w-2 h-2 bg-gray-400 rounded-full mx-1 focus:outline-none focus:ring-2 focus:ring-red-500" />
    ),
  };

  return (
    <section className="bg-white py-12 px-6 mb-8 relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x600')`, // Replace with actual image
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
                    playing={false}
                    controls={true}
                    className="rounded-xl shadow-md"
                    config={{
                      youtube: {
                        playerVars: { modestbranding: 1 },
                      },
                    }}
                  />
                </div>
              ))}
            </Slider>
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              {videoData[activeSlide].title}
            </h2>
          </div>

          {/* Right Column: Dynamic Text */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
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
      </div>
    </section>
  );
};

export default VideoSectionReclamation;