import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Heading from "../Common/Heading";

const content = [
  {
    title: "Why Investing in Women is Good for Conservation",
    description:
      "Ensuring women and girls have equal access to knowledge and resources is not only the right thing to do, it’s the only way to find lasting solutions for people and the planet. Across Africa, women fight climate change, improve land management and reinvest in their communities. TNC is helping promote leadership, education, health and economic opportunities for women and girls.",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/DSC_1472_Roshni-Lodhia.jpg?crop=0%2C0%2C2048%2C1367&wid=1024&hei=683&scl=2.0",
    buttonText: "HOW WOMEN MAKE AN IMPACT",
  },
  {
    title: "Scaling Climate Action Through Policy in China",
    description:
      "Natural climate solutions can help China reach net zero carbon emissions by 2060, and national policy can integrate these solutions throughout China. TNC is championing two natural climate solutions that often hide in plain site: protecting and revitalizing forests, grasslands and wetlands, and sustainably managing ecosystems.",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/china/NCM220814_D413.jpg?crop=0%2C0%2C2464%2C1640&wid=1024&hei=681&scl=2.40625",
    buttonText: "HOW POLICY DECARBONIZES CHINA",
  },
  {
    title: "Barbados Blue Bonds",
    description:
      "How does a small island nation conserve its marine ecosystems when they are burdened by debt and the costly effects of climate change? Refinancing. Blue Bonds for Ocean Conservation secured $50 million in funding to protect Barbados’ marine ecosystems and develop a sustainable blue economy. This deal allows Barbados to conserve 30% of its ocean habitat while also meeting the country's financial needs.",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/W23_Belize_IMG_1753.jpg?crop=0%2C0%2C4000%2C2668&wid=1024&hei=683&scl=3.90625",
    buttonText: "HOW BARBADOS PROTECTS OCEANS",
  },
  {
    title: "How Indigenous Leadership Protected Thaidene Nëné",
    description:
      "Thaidene Nëné, which means “Land of the Ancestors” in the Denesoline language, is 6.5 million acres of newly protected land in Canada. Born of a historic agreement, the land houses a new national park, wildlife habitat and, crucially, a sustainable trust for Indigenous leadership. TNC provided the Łutsël K’é Dene with strategic, financial and technical support, and now they manage the vast territory according to their values.",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/canada/pat-kane-thaidene-nene-cliff.jpg?crop=0%2C0%2C3600%2C2402&wid=1024&hei=683&scl=3.515625",
    buttonText: "HOW BARBADOS PROTECTS OCEANS",
  },
  {
    title: "Berlin Adapts to a Changing Climate",
    description:
      "Germany knows that urban nature makes cities healthier, more vibrant and more enjoyable places to live and work. Berlin is taking its first steps towards increasing climate adaptation and biodiversity through urban greening. Soon, roadsides, rooftops, courtyards and unused lands will have new native gardens, trees and urban wetlands. Berlin will measure the results by looking at number of species, amount of stormwater runoff and surface temperatures—and share their lessons so others can create more livable and sustainable communities.",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/SUM22_F_BERLIN_8.jpg?crop=0%2C0%2C4000%2C2668&wid=1024&hei=683&scl=3.90625",
    buttonText: "HOW BARBADOS PROTECTS OCEANS",
  },
  {
    title: "Farming for the Planet in India’s Breadbasket",
    description:
      "Millions of small farms across India sustain the country's population with wheat and rice, yet their annual burns release toxins and greenhouse gasses into the air. Farmers burn their fields because growing both crops requires a fast turnaround time. But some farmers are making a change, working with nature to improve soil health, increase yields, fight climate change and improve air quality. Word of mouth—and the Happy Seeder—are their powerful tools of change.",
    image:
      "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/TNC22001_NWIndiaAg_220203_05433_JPG.Jpg?crop=0%2C0%2C7975%2C5317&wid=1024&hei=682&scl=7.789062499999999",
    buttonText: "HOW BARBADOS PROTECTS OCEANS",
  },
];

export default function ProjectsOverview() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const sectionHeight = e.target.scrollHeight / content.length;
    const currentIndex = Math.floor(e.target.scrollTop / sectionHeight);
    setActiveIndex(currentIndex);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <Heading
          text="VIEW SOME OF OUR PRIORITY WORK AROUND THE WORLD"
          color="text-black"
          bgColor="bg-red-600"
        />
      </div>
      <div className="flex h-[100vh] w-full">
        {/* Left Fixed Section */}
        <div className="w-1/2 h-full sticky top-0 flex items-center justify-center">
          <img
            src={content[activeIndex].image}
            alt="Illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Scrollable Section */}
        <div
          className="relative w-1/2 h-screen overflow-y-scroll"
          onScroll={handleScroll}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="h-screen flex flex-col justify-center px-8"
            >
              <h1 className="text-6xl text-red-600 font-bold mb-4">
                {item.title}
              </h1>
              <p className="text-xl mb-6">{item.description}</p>
              <button className="bg-red-600 max-w-[250px] text-white px-4 py-2 rounded">
                {item.buttonText}
              </button>
            </div>
          ))}
          {/* Scroll Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p
              className="text-[34px] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 opacity-70"
              style={{
                WebkitTextStroke: "2px white", // White outline
              }}
              aria-hidden="true"
            >
              Scroll
            </p>
            <div className="animate-bounce text-red-600">
              <span className="text-2xl">↓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
