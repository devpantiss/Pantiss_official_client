import React from "react";
import Heading from "../../../../Common/Heading";

const reports = [
  {
    id: 1,
    title: "Stubble Burning Status Report: 2025",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/32591.jpeg?1766129118",
    type: "REPORT",
    stacked: false,
  },
  {
    id: 2,
    title: "Guwahati Clean Air Plan",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/32498.jpeg?1765988154",
    type: "REPORT",
    stacked: true,
  },
  {
    id: 3,
    title:
      "Unified GHG Accounting and MRV Framework for the Iron and Steel Sector",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/31987.jpeg?1762944574",
    type: "REPORT",
    stacked: false,
  },
  {
    id: 4,
    title: "BRSR Supplement for the Steel Sector",
    cover:
      "https://iforest.global/wp-content/uploads/dflip-thumbs/31983.jpeg?1762944357",
    type: "REPORT",
    stacked: false,
  },
];

const JharsugudaReports = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Heading text="REPORTS" color="text-black" bgColor="bg-red-600" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reports.map((report) => (
            <div key={report.id} className="group">
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
                    className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-semibold text-neutral-900 leading-snug mb-2">
                {report.title}
              </h3>

              {/* Tag */}
              <span className="inline-block mb-3 text-xs font-semibold bg-yellow-300 text-black px-2 py-0.5">
                {report.type}
              </span>

              {/* Actions */}
              <div className="flex items-center gap-5 text-sm text-green-700">
                <button className="flex items-center gap-1 hover:underline">
                  👁 View Sample
                </button>
                <button className="flex items-center gap-1 hover:underline">
                  ⬇ Download
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JharsugudaReports;
