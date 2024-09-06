import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import Heading from '../../Common/Heading';

// Custom Hook to detect if an element is in the viewport
const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect(); // Stop observing after it becomes visible
      }
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer && observer.disconnect) {
        observer.disconnect();
      }
    };
  }, [options]);

  return [elementRef, isInView];
};

const Impact = () => {
  const impactData = [
    {
      title: "Skill & Employment",
      number: 52000,
      description: "Trained & Assessed in Mining Shipping Skills",
      hasPlus: true,
      hasHeader: true,
      bgColor: "bg-[#fae5ac]",
      headerColor: "bg-orange-600"
    },
    {
      title: "Governance & Policies",
      number: 800,
      description: "Rehabilitation & Resettlement",
      hasPlus: true,
      hasHeader: true,
      bgColor: "bg-yellow-200",
      headerColor: "bg-yellow-600"
    },
    {
      title: "WASH & Climate Change",
      number: 12000,
      description: "Youth connected to a network of WASH & climate change",
      hasPlus: false,
      hasHeader: true,
      bgColor: "bg-[#96bcfa]",
      headerColor: "bg-blue-600"
    },
    {
      title: "Mining Alternative Livelihoods",
      number: 276,
      description: "SHG, FPO, Cooperate created on green enterprises",
      hasPlus: false,
      hasHeader: true,
      bgColor: "bg-green-200",
      headerColor: "bg-green-600"
    },
    {
      title: "",
      number: 686,
      description: "Industries nano contractor in Mining & Shipping Skills",
      hasPlus: false,
      hasHeader: false,
      bgColor: "bg-[#fae5ac]"
    },
    {
      title: "",
      number: 38,
      description: "SIA, EIA in Open cost Mines refinery & ports",
      hasPlus: true,
      hasHeader: false,
      bgColor: "bg-yellow-200"
    },
    {
      title: "",
      number: 26,
      description: "Abandon Mines reclamation, water body rejuvenation & water supply",
      hasPlus: false,
      hasHeader: false,
      bgColor: "bg-[#96bcfa]"
    },
    {
      title: "",
      number: 48,
      description: "Aquaculture Sites created in Mining periphery",
      hasPlus: false,
      hasHeader: false,
      bgColor: "bg-green-200"
    },
    {
      title: "",
      number: 8768,
      description: "Employed in Mining & Allied industries",
      hasPlus: false,
      hasHeader: false,
      bgColor: "bg-[#fae5ac]"
    },
    {
      title: "",
      number: 18,
      description: "Mines & Allied Industry supply chain mapping & workplace standard",
      hasPlus: false,
      hasHeader: false,
      bgColor: "bg-yellow-200"
    },
    {
      title: "",
      number: 136,
      description: "Tonnes of Mining waste recycling",
      hasPlus: false,
      hasHeader: false,
      bgColor: "bg-[#96bcfa]"
    },
    {
      title: "",
      number: 12000,
      description: "Youths connected to a network of WASH & Climate change",
      hasPlus: false,
      hasHeader: false,
      bgColor: "bg-green-200"
    },
  ];

  const [containerRef, isInView] = useInView({
    threshold: 0.2 // Start the counter when 20% of the section is visible
  });

  return (
    <section ref={containerRef} className="relative py-12 bg-black text-white">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-fixed"
        style={{
          backgroundImage: "url('https://i.postimg.cc/029pWZGT/denis-shchigolev-g-M0-JEROGjk-A-unsplash.jpg')",  // Replace with your image URL
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>

      {/* Black translucent overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative container mx-auto text-center">
        <Heading text="OUR IMPACT" color="text-white" bgColor="bg-red-500" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:px-[150px] gap-2">
          {impactData.map((item, index) => (
            <div
              key={index}
              className={`pb-6 ${item.bgColor} rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              {item.hasHeader && (
                <h3 className={`text-xl rounded-t-lg p-2 ${item.headerColor} text-white w-full h-[70px] font-semibold mb-2`}>
                  {item.title}
                </h3>
              )}
              <div className="text-4xl text-black font-bold py-4">
                {isInView && (
                  <CountUp start={0} end={item.number} duration={3} separator="," />
                )}
                {item.hasPlus && "+"}
              </div>
              <p className="mt-2 px-2 text-black">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
