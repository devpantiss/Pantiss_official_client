import Slider from "react-slick";
import Heading from "../../../../Common/Heading";

const reports = [
  {
    id: 1,
    title: "Bokaro District – Impact Assessment Report 2024-25",
    cover: "/assets/reports/covers/bokaro_cover.png",
    type: "REPORT",
    stacked: false,
  },
  {
    id: 2,
    title: "Steel Industry & Community Development – Bokaro Impact Study",
    cover: "/assets/reports/covers/industrial-skilling-report-cover-v2.jpg",
    type: "REPORT",
    stacked: true,
  },
  {
    id: 3,
    title: "Livelihood Transformation in Mining Communities – Jharkhand Report",
    cover: "/assets/reports/covers/livelihood-transformation-report-cover-v2.jpg",
    type: "REPORT",
    stacked: false,
  },
  {
    id: 4,
    title:
      "Recognition of Prior Learning (RPL) – Mining Skill Certification Impact Report",
    cover: "/assets/reports/covers/rpl-certification-report-cover-v2.jpg",
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

const BokaroReports = () => {
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
                        loading="lazy"
                        decoding="async"
                        className="h-[400px] w-full bg-neutral-100 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
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

export default BokaroReports;
