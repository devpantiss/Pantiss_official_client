import React, { useEffect, useState, useRef, memo, useMemo } from "react";
import CountUp from "react-countup";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";

// Memoized static data
const statsWithImages = [
  {
    id: 1,
    value: 38,
    label: "SIA, EIA in Opencast Mines",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761670555/EIA_vmog4e.mp4",
  },
  {
    id: 2,
    value: 800,
    label: "Rehabilitation & Resettlement",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761670715/model_village_xpz6i2.mp4",
  },
  {
    id: 3,
    value: 18000,
    label: "Trained and Assisted in Mining Skills",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761670771/Practical_VIdeo_1_ju40ch.mp4",
  },
  {
    id: 4,
    value: 20,
    label: "Revenue Generated from Established SHGs",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761670863/SHG_zgirig.mp4",
    unit: "Cr.+",
  },
  {
    id: 5,
    value: 5,
    label: "Abandoned Mines Reclaimed",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761670906/Rehab_1_hkdwue.mp4",
  },
  {
    id: 6,
    value: 12,
    label: "Electricity Produced Through Renewable Energy Sources",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761671110/renewable_cfufe4.mp4",
    unit: "MW",
  },
  {
    id: 7,
    value: 7,
    label: "Model Mining Villages Created",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761671839/4440936-hd_1920_1080_25fps_glt4iu.mp4",
  },
  {
    id: 8,
    value: 12,
    label: "Youth Tribal Dormitories Established",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761671211/Tribal_ootz3q.mp4",
  },
  {
    id: 9,
    value: 60,
    label: "Children Healthcare centers Established",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761671436/health_1_ggcruk.mp4",
  },
  {
    id: 10,
    value: 43,
    label: "Lost Water Body Rejuvenated in Mining periphery",
    videoUrl:
      "https://res.cloudinary.com/dxzhnns58/video/upload/v1761671465/reclamation_c9m6lm.mp4",
  },
];

const rowStructure = [2, 3, 2, 3, 2];
const shouldHavePlus = [1, 2, 6];

// Memoized StatCard component
const StatCard = memo(({ stat, isEvenRow, inView }) => (
  <div
    className={`flex flex-col md:flex-row ${
      isEvenRow ? "" : "md:flex-row-reverse"
    } items-center bg-red-600 text-white rounded-lg shadow-lg overflow-hidden`}
  >
    <div className="h-44 w-full md:w-1/2">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={stat.videoUrl}
        preload="metadata"
      />
    </div>
    <div className="p-4 text-center w-full md:w-1/2">
      <div className="flex justify-center items-center">
        <CountUp
          start={0}
          end={stat.value}
          duration={2}
          useEasing
          enableScrollSpy
          scrollSpyOnce
          redraw
        >
          {({ countUpRef }) => (
            <span ref={countUpRef} className="text-4xl font-bold" />
          )}
        </CountUp>
        {shouldHavePlus.includes(stat.id) && (
          <span className="text-4xl font-bold">+</span>
        )}
        {stat.unit && (
          <span className="text-4xl font-bold">{` ${stat.unit}`}</span>
        )}
      </div>
      <p className="text-md mt-2">{stat.label}</p>
    </div>
  </div>
));
StatCard.displayName = "StatCard";

const Impact2 = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer with lazy trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // Memoized grid rendering
  const renderGrid = useMemo(() => {
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
          {rowStats.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
              isEvenRow={isEvenRow}
              inView={inView}
            />
          ))}
        </div>
      );
    });
  }, [inView]); // Dependency on inView to re-render when visibility changes

  return (
    <div className="bg-black px-4 sm:px-10">
      <section ref={sectionRef} className="py-10 container mx-auto">
        <div className="flex justify-center mb-6">
          <Heading text="OUR IMPACT" color="text-white" bgColor="bg-red-500" />
        </div>
        <div className="container mx-auto">{renderGrid}</div>
        <div className="flex items-center justify-center mt-6 space-x-4">
          <img
            src="https://res.cloudinary.com/djtzx6wo7/image/upload/v1756890438/19362653-removebg-preview_gudzua.png"
            alt="Advanced Dashboard GIF"
            className="w-36 h-36 lg:block hidden object-cover animate-bounce-slow"
            loading="lazy"
          />

          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-md bg-red-600 hover:bg-white text-white hover:text-red-600 hover:ring-1 hover:ring-red-600 transition-colors duration-300 ease-in-out"
          >
            View Advanced Dashboard
          </Link>

          <img
            src="https://res.cloudinary.com/djtzx6wo7/image/upload/v1756890439/4421964-removebg-preview_nu0dk9.png"
            alt="Advanced Dashboard GIF"
            className="w-40 h-40 lg:block hidden object-cover animate-bounce-slow"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
};

export default memo(Impact2);
