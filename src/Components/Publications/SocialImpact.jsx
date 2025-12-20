// SocialImpact.js
import React from "react";
import Heading from "../Common/Heading";

const reports = [
  {
    title: "Annual Report 2023",
    cover:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&auto=format&fit=crop&q=60",
    date: "15 Dec 2023",
    sampleUrl: "#",
    downloadUrl: "#",
    stacked: false,
  },
  {
    title: "Financial Report Q4 2023",
    cover:
      "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&auto=format&fit=crop&q=60",
    date: "20 Jan 2024",
    sampleUrl: "#",
    downloadUrl: "#",
    stacked: true, // stacked book effect
  },
  {
    title: "Portfolio Report 2023",
    cover:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60",
    date: "30 Nov 2023",
    sampleUrl: "#",
    downloadUrl: "#",
    stacked: false,
  },
  {
    title: "Stubble Burning Status Report: 2025",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/32591.jpeg?1766129118",
    date: "30 Nov 2023",
    sampleUrl: "#",
    downloadUrl: "#",
    stacked: false,
  },
  {
    title: "Guwahati Clean Air Plan",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/32498.jpeg?1765988154",
    date: "30 Nov 2023",
    sampleUrl: "#",
    downloadUrl: "#",
    stacked: true,
  },
  {
    title:
      "Unified GHG Accounting and MRV Framework for the Iron and Steel Sector",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/31987.jpeg?1762944574",
    date: "30 Nov 2023",
    sampleUrl: "#",
    downloadUrl: "#",
    stacked: false,
  },
];

const SocialImpact = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <Heading
            text="RESEARCH & REPORTS"
            color="text-black"
            bgColor="bg-red-500"
          />
        </div>

        {/* Reports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {reports.map((report, index) => (
            <div key={index} className="group rounded-md ring-2 ring-red-600">
              {/* Cover */}
              <div className="relative mb-4">
                {/* Stacked effect */}
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
                    className="w-full h-[450px] object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="px-4 py-2 pb-4">
                {/* Title */}
                <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-2 line-clamp-2">
                  {report.title}
                </h3>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-block text-xs font-semibold bg-yellow-300 text-black px-2 py-0.5">
                    REPORT
                  </span>
                  <span className="text-xs text-neutral-500">
                    {report.date}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-5 text-sm text-green-700">
                  <a
                    href={report.sampleUrl}
                    className="flex items-center gap-1 hover:underline"
                  >
                    👁 View Sample
                  </a>
                  <a
                    href={report.downloadUrl}
                    className="flex items-center gap-1 hover:underline"
                  >
                    ⬇ Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialImpact;
