import React from "react";

const reports = [
  {
    id: 1,
    title: "Climate Resilient Livelihood Models",
    image:
      "/Reports/Climate_resilient.jpg",
  },
  {
    id: 2,
    title: "Future Workforce Needs in Mining Sector",
    image:
      "/Reports/Future_workforce_needs.jpg",
  },
  {
    id: 3,
    title: "Industry 4.0 Readiness of Vocational Training",
    image:
      "/Reports/Industry_4.jpg",
  },
  {
    id: 4,
    title: "Livelihood Conditions in Mining Affected Communities",
    image:
      "/Reports/livelihood_conditions_in_mining_affected_community.jpg",
  },
];

const VidSection = () => {
  return (
    <section className="w-full h-[520px] flex overflow-hidden">
      {/* LEFT: Video */}
      <div className="w-2/3 h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dxzhnns58/video/upload/v1761732286/WhatsApp_Video_2025-03-19_at_12-VEED_bxerlj.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* RIGHT: Vertical Marquee */}
      <div className="w-1/3 h-full bg-gradient-to-b from-red-600 to-black text-white flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 z-10">
          <p className="text-sm uppercase tracking-wide text-gray-300">
            Grab the report
          </p>
          <h3 className="text-3xl font-semibold mt-1">
            Research & Insights
          </h3>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative flex-1 overflow-hidden group">
          <div className="absolute inset-0 flex flex-col gap-4 px-6 animate-vertical-marquee group-hover:[animation-play-state:paused]">
            {[...reports, ...reports].map((report, index) => (
              <div
                key={`${report.id}-${index}`}
                className="flex gap-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition"
              >
                <div className="w-[230px] h-[330px] rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={report.image}
                    alt={report.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-medium leading-snug">
                    {report.title}
                  </h4>
                  <span className="text-xs text-gray-300 mt-1 inline-block">
                    View report →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation */}
      <style jsx>{`
        @keyframes vertical-marquee {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-260%);
          }
        }
        .animate-vertical-marquee {
          animation: vertical-marquee 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default VidSection;
