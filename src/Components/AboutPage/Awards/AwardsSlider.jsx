import React, { useState } from "react";
import Heading from "../../Common/Heading";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const awardsData = [
  {
    year: "2021",
    title: "Star Performer Award",
    description: "#Beat Plastic Pollution Initiative",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723963/c1e1380ffdd93941850639161032c834_do4ghj.png",
  },
  {
    year: "2022",
    title: "WES Innovation Award",
    description: "Youth Leadership Award",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723956/pngegg_3_bcfxvx.png",
  },
  {
    year: "2023",
    title: "Kutumb Migrants Savior",
    description: "Safeguarding migrants",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761723948/kutumb_rrini4.jpg",
  },
  {
    year: "2023",
    title: "Best Performer Award",
    description: "Odisha Livelihood Mission",
    imageUrl:
      "https://res.cloudinary.com/dxzhnns58/image/upload/v1761724428/olm_1_ow2qdb.png",
  },
];

const AwardsSection = () => {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? awardsData.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === awardsData.length - 1 ? 0 : prev + 1));

  const award = awardsData[index];

  return (
    <section className="bg-black py-12 px-6 overflow-hidden text-white">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <Heading
            text="AWARDS & RECOGNITION"
            color="text-white"
            bgColor="bg-red-600"
          />
          <p className="text-white/60 mt-4">
            Milestones that reflect our long-term commitment to excellence and impact.
          </p>
        </div>

        {/* Showcase */}
        <div className="relative">

          {/* Main Card */}
          <div
            className="
            flex flex-col md:flex-row items-center justify-between
            rounded-2xl
            border border-white/10
            bg-gradient-to-b from-white/5 to-white/[0.02]
            backdrop-blur-xl
            px-10 py-10
            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
          "
          >

            {/* Year */}
            <div className="text-left mb-6 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-wider">
                {award.year}
              </h2>
              <div className="w-12 h-[2px] bg-white/30 mt-2" />
            </div>

            {/* Center Logo */}
            <div className="flex items-center gap-10 my-6 md:my-0">

              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                <img
                  src={award.imageUrl}
                  alt={award.title}
                  className="w-14 object-contain"
                />
              </div>

              {/* Laurel */}
              <div className="text-yellow-400 text-4xl opacity-80">
                🏆
              </div>

            </div>

            {/* Text */}
            <div className="text-right max-w-xs">
              <h3 className="text-xl font-semibold">
                {award.title}
              </h3>
              <p className="text-white/60 mt-2 text-sm">
                {award.description}
              </p>
            </div>

          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              -translate-x-1/2
              w-10 h-10
              rounded-full
              border border-white/20
              bg-black/60
              backdrop-blur-md
              flex items-center justify-center
              hover:bg-white
              hover:text-black
              transition
            "
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={next}
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              translate-x-1/2
              w-10 h-10
              rounded-full
              border border-white/20
              bg-black/60
              backdrop-blur-md
              flex items-center justify-center
              hover:bg-white
              hover:text-black
              transition
            "
          >
            <FaChevronRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default AwardsSection;