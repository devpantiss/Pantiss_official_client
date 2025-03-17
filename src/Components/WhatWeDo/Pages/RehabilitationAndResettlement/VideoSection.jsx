import React, { useState } from "react";
import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../Common/Heading";

const VideoSectionSkills = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const videoData = [
    {
      url: "https://youtu.be/Xcy2DzvvB7s?si=nw7ixgdlV7nUXX2j", // Placeholder
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
      url: "https://youtu.be/AK6vBfu7yAw?si=PFpYvkJTTpT-uRko", // Placeholder
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
      url: "https://youtu.be/JKLNdZahMSE?si=tLUKZg9dG6cBZaKI", // Placeholder
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
      url: "https://youtu.be/KXx0llNSWRc?si=bOCyno-jf99FSSAD", // Placeholder
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
      url: "https://youtu.be/nCIMV9sSNQ8?si=mHda7jLdkkiFs1t-", // Placeholder (reused)
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

export default VideoSectionSkills;