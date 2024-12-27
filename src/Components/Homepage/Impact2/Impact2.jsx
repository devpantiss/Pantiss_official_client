import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";

const Impact2 = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log("Observed entry:", entries[0]);
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.unobserve(entries[0].target); // Stop observing once counters start
          console.log("Section in view: counter started");
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px", // Trigger earlier when scrolling into view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const statsWithImages = [
    {
      id: 1,
      value: 38,
      label: "SIA, EIA in Opencast Mines",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735221805/EIA_amget2.mp4",
    },
    {
      id: 2,
      value: 800,
      label: "Rehabilitation & Resettlement",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735222926/model_village_uthqmr.mp4",
    },
    {
      id: 3,
      value: 18000,
      label: "Trained and Assisted in Mining Skills",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735223775/Training_1_gveouf.mp4",
    },
    {
      id: 4,
      value: 20,
      label: "Revenue Generated from Established SHGs",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735222542/SHG_yj96fp.mp4",
      unit: "Cr.+",
    },
    {
      id: 5,
      value: 5,
      label: "Abandoned Mines Reclamated",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735223596/Rehab_1_kvwix1.mp4",
    },
    {
      id: 6,
      value: 12,
      label: "Electricity Produced Through Renewable Energy Sources ",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735221726/renewable_qcbyiu.mp4",
      unit: "MW",
    },
    {
      id: 7,
      value: 7,
      label: "Model Mining Villages Created",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735296259/Tribal_1_yscl4u.mp4",
    },
    {
      id: 8,
      value: 12,
      label: "Youth Tribal Dormitories Established",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735222296/dormitory_1_gjx4xj.mp4",
    },
    {
      id: 9,
      value: 60,
      label: "Children Healthcare centers Established",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735222160/health_1_ko85fg.mp4",
    },
    {
      id: 10,
      value: 43,
      label: "Lost Water Body Rejuvenated in Mining periphery",
      // videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735222753/reclamation_ux6few.mp4",
      videoUrl: "https://res.cloudinary.com/dgtc2fvgu/video/upload/v1735282584/waterbody.44_afurrs.mp4",
    },
  ];

  const rowStructure = [2, 3, 2, 3, 2]; // Row structure as defined earlier

  const shouldHavePlus = (id) => [1, 2, 6].includes(id);

  const renderStatCard = (stat, index, isEvenRow) => {
    return isEvenRow ? (
      <div key={index}>
        <div
          className="flex flex-col md:flex-row items-center bg-red-600 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:bg-white hover:border hover:border-red-600 hover:text-red-600 group2"
        >
          {/* Video instead of background image */}
          <div className="h-44 w-full md:w-1/2">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src={stat.videoUrl} type="video/mp4" />
              {/* Fallback if video format isn't supported */}
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4 text-center w-full md:w-1/2">
            {inView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                className="text-4xl font-bold outline-text group-hover:outline-text-hover"
              />
            ) : (
              <span className="text-4xl font-bold">0</span>
            )}
            {shouldHavePlus(stat.id) && (
              <span className="text-4xl font-bold outline-text group-hover:outline-text-hover">
                +
              </span>
            )}
            {stat.unit && (
              <span className="text-4xl font-bold outline-text group-hover:outline-text-hover">
                {` ${stat.unit}`}
              </span>
            )}
            <p className="text-md mt-2">{stat.label}</p>
          </div>
        </div>
      </div>
    ) : (
      <div key={index}>
        <div
          className="flex flex-col md:flex-row-reverse items-center bg-red-600 text-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:border hover:border-red-600 hover:text-red-600 group2"
        >
          {/* Video instead of background image */}
          <div className="h-40 w-full md:w-1/2">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src={stat.videoUrl} type="video/mp4" />
              {/* Fallback if video format isn't supported */}
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="p-4 text-center w-full md:w-1/2">
            {inView ? (
              <CountUp
                start={0}
                end={stat.value}
                duration={2}
                className="text-4xl font-bold outline-text group-hover2:outline-text-hover"
              />
            ) : (
              <span className="text-4xl font-bold">0</span>
            )}
            {shouldHavePlus(stat.id) && (
              <span className="text-4xl font-bold outline-text group-hover2:outline-text-hover">
                +
              </span>
            )}
            {stat.unit && (
              <span className="text-4xl font-bold outline-text group-hover2:outline-text-hover">
                {` ${stat.unit}`}
              </span>
            )}
            <p className="text-md mt-2">{stat.label}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderGrid = () => {
    let currentIndex = 0;
    return rowStructure.map((cardsInRow, rowIndex) => {
      const rowStats = statsWithImages.slice(
        currentIndex,
        currentIndex + cardsInRow
      );
      currentIndex += cardsInRow;

      const isEvenRow = rowIndex % 2 === 0;

      return (
        <div
          key={rowIndex}
          className={`grid grid-cols-1 md:grid-cols-${cardsInRow} gap-4 mb-6`}
        >
          {rowStats.map((stat, index) =>
            renderStatCard(stat, index, isEvenRow)
          )}
        </div>
      );
    });
  };

  return (
    <div className="bg-black px-10">
      <section ref={sectionRef} className="py-10 container mx-auto items-center">
        <Heading text="OUR IMPACT" color="text-white" bgColor="bg-red-500" />
        <div className="container mx-auto">{renderGrid()}</div>
        {/* Section with GIF and Button */}
        <div className="flex items-center justify-center mt-6 space-x-4">
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726054316/Web_designer_with_idea_frjboi.gif"
            alt="Advanced Dashboard GIF"
            className="w-80 h-80 lg:block hidden"
          />
          {/* View Advanced Dashboard Button */}
          <Link
            to="https://mowash-admin.vercel.app/"
            className="px-4 py-2 rounded-md bg-red-600 hover:bg-white text-white hover:text-red-600 hover:ring-1 hover:ring-red-600"
          >
            View Advanced Dashboard
          </Link>
          {/* GIF */}
          <img
            src="https://res.cloudinary.com/dgtc2fvgu/image/upload/v1726054125/Web_Design_Layout_traglx.gif"
            alt="Advanced Dashboard GIF"
            className="w-80 h-80 lg:block hidden"
          />
        </div>
      </section>
    </div>
  );
};

export default Impact2;