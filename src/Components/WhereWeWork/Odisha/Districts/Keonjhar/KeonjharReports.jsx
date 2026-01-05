import React from "react";
import Slider from "react-slick";
import Heading from "../../../../Common/Heading";

const reports = [
  {
    id: 1,
    title: "Skilling for Industrial Readiness in Mining Districts – Odisha Impact Report 2025",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/32591.jpeg?1766129118",
    type: "REPORT",
    stacked: false,
  },
  {
    id: 2,
    title: "Livelihood Transformation through Agriculture & Aquaculture – Pantiss DMF Initiatives",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/32498.jpeg?1765988154",
    type: "REPORT",
    stacked: true,
  },
  {
    id: 3,
    title:
      "Recognition of Prior Learning (RPL) in Fisheries – Skill Certification Impact Report",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/31987.jpeg?1762944574",
    type: "REPORT",
    stacked: false,
  },
  {
    id: 4,
    title: "Community Development & Indigenous Livelihoods – Inclusive Growth Report",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/31983.jpeg?1762944357",
    type: "REPORT",
    stacked: false,
  },
];

const sliderSettings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnFocus: true,
  cssEase: "ease-in-out",
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const KeonjharReports = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Heading text="REPORTS" color="text-black" bgColor="bg-red-600" />

        <div className="mt-12">
          <Slider {...sliderSettings}>
            {reports.map((report) => (
              <div key={report.id} className="px-4">
                <div className="group">

                  {/* COVER */}
                  <div className="relative mb-4">
                    {report.stacked && (
                      <>
                        <div className="absolute -right-3 top-2 w-full h-full bg-neutral-200 rounded-sm -z-10" />
                        <div className="absolute -right-6 top-4 w-full h-full bg-neutral-100 rounded-sm -z-20" />
                      </>
                    )}

                    <div className="overflow-hidden rounded-sm shadow-md">
                      <img
                        src={report.cover}
                        alt={report.title}
                        className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-2">
                    {report.title}
                  </h3>

                  {/* TAG */}
                  <span className="inline-block mb-3 text-xs font-semibold bg-yellow-300 text-black px-2 py-0.5">
                    {report.type}
                  </span>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-5 text-sm text-green-700">
                    <button className="hover:underline">
                      👁 View Sample
                    </button>
                    <button className="hover:underline">
                      ⬇ Download
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default KeonjharReports;
