/* eslint-disable react/prop-types */
import { ArrowLeft, ArrowRight, Check, ChevronDown, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionDetailPage = ({ solution }) => {
  return (
    <main className="bg-white text-neutral-950">
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-neutral-950">
        <img
          src={solution.heroImage}
          alt={solution.heroAlt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-between px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
          <Link
            to="/"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to solutions
          </Link>

          <div className="max-w-4xl pb-8 pt-24 sm:pb-12">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-300">
              <span className="h-px w-10 bg-red-400" />
              {solution.eyebrow}
            </div>
            <h1 className="max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-8xl">
              {solution.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              {solution.description}
            </p>
            <a
              href="#solution-overview"
              className="mt-9 inline-flex min-h-12 items-center gap-3 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-red-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-transparent"
            >
              Discover the approach
              <ChevronDown aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Solution highlights" className="relative z-10 -mt-7 px-5 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_70px_-36px_rgba(0,0,0,0.35)] sm:grid-cols-3">
          {solution.stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-neutral-200 px-6 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 lg:px-8"
            >
              <p className="text-2xl font-semibold tracking-[-0.03em] text-red-600 sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm leading-6 text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="solution-overview" className="scroll-mt-24 bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
              The opportunity
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
              {solution.overviewTitle}
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-neutral-600 sm:text-lg">
              {solution.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <figure className="relative overflow-hidden rounded-[2rem] bg-neutral-900 shadow-[0_32px_80px_-42px_rgba(0,0,0,0.55)]">
            <img
              src={solution.contextImage}
              alt={solution.contextAlt}
              className="aspect-[4/3] w-full object-cover opacity-90"
              loading="lazy"
            />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/55 p-5 text-white backdrop-blur-xl sm:inset-x-6 sm:bottom-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                Our focus
              </p>
              <p className="mt-2 text-lg font-medium leading-7">{solution.contextCaption}</p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-red-600 px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
              Integrated solution
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              {solution.pillarsTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/75">
              {solution.pillarsDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {solution.pillars.map(({ title, description, Icon }, index) => (
              <article
                key={title}
                className="group rounded-3xl border border-white/20 bg-white/10 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/[0.16] hover:shadow-[0_22px_60px_-36px_rgba(0,0,0,0.48)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-red-600 shadow-lg shadow-black/10">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-xs text-white/50">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-neutral-950 px-5 py-20 text-white sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-400">
                Delivery framework
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                {solution.processTitle}
              </h2>
              <p className="mt-6 max-w-md text-lg leading-8 text-white/60">
                {solution.processDescription}
              </p>
            </div>

            <ol className="space-y-4">
              {solution.process.map((step, index) => (
                <li
                  key={step.title}
                  className="grid gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-6 sm:grid-cols-[auto_1fr] sm:gap-6 sm:p-8"
                >
                  <span className="font-mono text-sm text-red-400">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-white/60">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-5 py-20 text-white sm:px-8 lg:py-28">
        <img
          src={solution.outcomesImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 -z-10 bg-black/70" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/55 to-black/45" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-300">
              Intended outcomes
            </p>
            <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              {solution.outcomesTitle}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/65">
              {solution.outcomesDescription}
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {solution.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="flex gap-3 rounded-2xl border border-white/15 bg-black/35 p-5 leading-7 text-white/85 backdrop-blur-md"
              >
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-600 text-white">
                  <Check aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-600">
                Collaboration model
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                {solution.collaborationTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                {solution.collaborationDescription}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {solution.collaborators.map((collaborator, index) => (
                <article
                  key={collaborator.title}
                  className="rounded-3xl border border-neutral-200 bg-stone-50 p-6 transition-colors hover:border-red-200 hover:bg-red-50/40"
                >
                  <span className="font-mono text-xs text-red-600">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em]">
                    {collaborator.title}
                  </h3>
                  <p className="mt-3 leading-7 text-neutral-600">
                    {collaborator.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-3xl border border-neutral-200 md:grid-cols-3">
            {solution.enablers.map((enabler) => (
              <div
                key={enabler.label}
                className="border-b border-neutral-200 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-600">
                  {enabler.label}
                </p>
                <p className="mt-3 leading-7 text-neutral-700">{enabler.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-red-600 px-5 py-16 text-white sm:px-8 lg:py-20">
        <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-medium text-white/70">
                <MapPin aria-hidden="true" className="h-4 w-4" />
                Built for mining-affected regions
              </div>
              <h2 className="mt-5 text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                {solution.closingTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
                {solution.closingDescription}
              </p>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-red-600 transition-all hover:-translate-y-0.5 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-red-600"
            >
              Discuss a partnership
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionDetailPage;
