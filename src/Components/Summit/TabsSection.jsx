import { useState } from "react";
import Slider from "react-slick";
import { ArrowUpRight, BookOpen, CalendarDays } from "lucide-react";

const sessionPlans = [
  {
    year: 2024,
    theme: "Just transition, restoration and community leadership",
    file: "/assets/summit/session-plans/mining-villages-summit-session-plan-2024.pdf",
  },
  {
    year: 2023,
    theme: "Local enterprise, inclusive livelihoods and convergence",
    file: "/assets/summit/session-plans/mining-villages-summit-session-plan-2023.pdf",
  },
  {
    year: 2021,
    theme: "Recovery, health security and resilient livelihoods",
    file: "/assets/summit/session-plans/mining-villages-summit-session-plan-2021.pdf",
  },
];

const resourceBooks = [
  {
    year: 2024,
    image: "/assets/summit/resource-books/resource-book-2024-v1.jpg",
    alt: "Community members monitoring restored mining land and native planting",
  },
  {
    year: 2023,
    image: "/assets/summit/resource-books/resource-book-2023-v1.jpg",
    alt: "Women-led rural enterprises developing products and a market plan",
  },
];

const miningImages = [
  "/assets/summit/Tab/sourajit-hazra-b-O15p8xTns-unsplash.jpg",
  "/assets/summit/Tab/praniket-desai-kxZUe3M024I-unsplash.jpg",
  "/assets/summit/Tab/tribal.avif",
];

const tabs = [
  { id: "MINING_VILLAGES", label: "MINING & VILLAGES" },
  { id: "SESSION_PLAN", label: "SESSION & PLAN" },
  { id: "RESOURCE_BOOK", label: "RESOURCE & BOOK" },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  pauseOnHover: true,
};

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("MINING_VILLAGES");

  return (
    <section className="bg-neutral-50 py-14 sm:py-16">
      <div className="container mx-auto grid gap-8 px-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
            Summit archive
          </p>
          <h1 className="mt-2 text-3xl font-bold text-neutral-950 sm:text-4xl">
            MINING VILLAGES SUMMIT
          </h1>

          {activeTab === "SESSION_PLAN" && (
            <div className="mt-8">
              <div className="mb-6 flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-950">
                    Session plans
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-neutral-600">
                    Explore the programme themes and session sequence from each
                    archived summit edition.
                  </p>
                </div>
                <CalendarDays
                  aria-hidden="true"
                  className="hidden text-red-600 sm:block"
                  size={34}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {sessionPlans.map((plan) => (
                  <article
                    key={plan.year}
                    className="group flex min-h-64 flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
                      Session plan
                    </span>
                    <h3 className="mt-4 text-4xl font-bold text-neutral-950">
                      {plan.year}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-neutral-600">
                      {plan.theme}
                    </p>
                    <a
                      href={plan.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open the ${plan.year} Summit session plan PDF in a new tab`}
                      className="mt-6 inline-flex items-center justify-between gap-3 border-t border-neutral-100 pt-4 font-semibold text-red-600 transition group-hover:text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
                    >
                      Open PDF
                      <ArrowUpRight aria-hidden="true" size={19} />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "RESOURCE_BOOK" && (
            <div className="mt-8">
              <div className="mb-7 flex items-end justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-semibold text-neutral-950">
                    Resource books
                  </h2>
                  <p className="mt-2 max-w-3xl leading-7 text-neutral-600">
                    Each edition brings together programme themes, field
                    perspectives and practical learning from mining-affected
                    communities and development partners.
                  </p>
                </div>
                <BookOpen
                  aria-hidden="true"
                  className="hidden text-red-600 sm:block"
                  size={34}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {resourceBooks.map((book) => (
                  <article
                    key={book.year}
                    className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                      <img
                        src={book.image}
                        alt={book.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/90" />
                      <div className="absolute inset-x-0 top-0 p-5 text-white">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red-300">
                          Pantiss Foundation
                        </p>
                        <p className="mt-2 text-sm font-semibold">
                          Mining Villages Summit
                        </p>
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                        <p className="text-sm font-medium text-neutral-200">
                          Resource Book
                        </p>
                        <p className="mt-1 text-4xl font-bold">{book.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-5 py-4">
                      <span className="font-semibold text-neutral-900">
                        Resource Book {book.year}
                      </span>
                      <BookOpen
                        aria-hidden="true"
                        className="text-red-600"
                        size={18}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {activeTab === "MINING_VILLAGES" && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-neutral-950">
                Mining Villages Summit
              </h2>
              <p className="mt-4 leading-7 text-neutral-700">
                The Mining Villages Summit addresses the socio-economic
                challenges faced by communities in mining regions. It brings
                together policymakers, industry leaders and community
                representatives to explore sustainable development, livelihoods
                and environmental restoration.
              </p>
              <p className="mt-4 leading-7 text-neutral-700">
                Participants examine skill development, alternative livelihoods,
                land restoration and community engagement to build practical,
                inclusive pathways for mining-affected villages.
              </p>

              <div className="mt-7">
                <h3 className="mb-4 text-lg font-semibold text-neutral-800">
                  Highlights from mining communities
                </h3>
                <Slider {...sliderSettings}>
                  {miningImages.map((image, index) => (
                    <div key={image}>
                      <img
                        src={image}
                        alt={`Mining village summit highlight ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="h-[360px] w-full rounded-2xl object-cover sm:h-[450px]"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}
        </div>

        <nav
          aria-label="Mining Villages Summit archive sections"
          className="order-first h-fit overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg lg:order-none lg:sticky lg:top-24"
        >
          <div className="bg-neutral-950 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              Explore
            </p>
            <p className="mt-2 text-lg font-bold">MINING VILLAGES SUMMIT</p>
          </div>
          <div className="p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                aria-pressed={activeTab === tab.id}
                className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 ${
                  activeTab === tab.id
                    ? "bg-red-600 text-white shadow-md"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default TabsSection;
