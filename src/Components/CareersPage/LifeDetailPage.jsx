/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const LifeDetailPage = ({
  title,
  intro,
  heroImage,
  heroAlt,
  sections,
  statement,
  secondaryImage,
  secondaryAlt,
}) => (
  <main className="bg-white text-neutral-950">
    <section className="px-4 pb-14 pt-8 sm:px-8 lg:pb-20">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 transition hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to careers
          </Link>
        </nav>

        <div className="grid overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[360px] lg:min-h-[640px]">
            <img
              src={heroImage}
              alt={heroAlt}
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-center p-7 text-white sm:p-12 lg:p-16">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-red-400">
              Life at Pantiss
            </p>
            <h1 className="text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-300">
              {intro}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          {secondaryImage ? (
            <img
              src={secondaryImage}
              alt={secondaryAlt}
              className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-xl"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="rounded-[1.75rem] bg-red-600 p-8 text-white sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-100">
                Our commitment
              </p>
              <p className="mt-6 text-2xl font-semibold leading-snug sm:text-3xl">
                {statement}
              </p>
            </div>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
            How we work
          </p>
          <div className="mt-4 divide-y divide-neutral-200">
            {sections.map((section, index) => (
              <article key={section.title} className="grid gap-4 py-8 sm:grid-cols-[3rem_1fr]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 className="text-2xl font-semibold leading-tight">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {section.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

    {secondaryImage && (
      <section className="bg-red-600 px-4 py-14 text-white sm:px-8 lg:py-20">
        <div className="mx-auto flex max-w-5xl gap-5">
          <Check aria-hidden="true" className="mt-1 h-8 w-8 shrink-0" />
          <p className="text-2xl font-semibold leading-snug sm:text-4xl">
            {statement}
          </p>
        </div>
      </section>
    )}

    <section className="bg-neutral-950 px-4 py-14 text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
            Build your career with purpose
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Find your place at Pantiss.</h2>
        </div>
        <Link
          to="/careers/jobs"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
        >
          Explore opportunities
          <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
    </section>
  </main>
);

export default LifeDetailPage;
