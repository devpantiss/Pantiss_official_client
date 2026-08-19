import { ArrowLeft, Check } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { bankingBenefits } from "../../Components/CareersPage/Benefits";

const EmployeeBenefitDetail = () => {
  const { benefitSlug } = useParams();
  const benefit = bankingBenefits.find(({ slug }) => slug === benefitSlug);

  if (!benefit) {
    return <Navigate to="/careers" replace />;
  }

  const { Icon } = benefit;

  return (
    <main className="bg-white text-neutral-900">
      <section className="px-4 pb-14 pt-8 sm:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 rounded-full text-sm font-semibold text-red-600 transition hover:text-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-4"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              Back to careers
            </Link>
          </nav>

          <div className="grid overflow-hidden rounded-[2rem] bg-neutral-950 shadow-2xl lg:grid-cols-2">
            <div className="relative min-h-[340px] lg:min-h-[620px]">
              <img
                src={benefit.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-7 text-white sm:p-12 lg:p-16">
              <span className="mb-8 grid h-14 w-14 place-items-center rounded-2xl bg-red-600 shadow-lg shadow-red-950/30">
                <Icon aria-hidden="true" className="h-7 w-7" />
              </span>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-red-400">
                Employee benefit
              </p>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {benefit.title}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                {benefit.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-8 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
              What is included
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
              Support designed around everyday needs
            </h2>
          </div>

          <ul className="space-y-4">
            {benefit.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-base leading-7 text-neutral-700 sm:p-6 sm:text-lg"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-red-600 text-white">
                  <Check aria-hidden="true" className="h-4 w-4" />
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-red-600 px-4 py-12 text-white sm:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              Explore life at Pantiss
            </h2>
            <p className="mt-2 max-w-2xl text-red-100">
              Discover our people, values, workplace culture and current opportunities.
            </p>
          </div>
          <Link
            to="/careers"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-red-600 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-red-600"
          >
            View careers
          </Link>
        </div>
      </section>

      <p className="mx-auto max-w-5xl px-4 py-8 text-xs leading-6 text-neutral-500 sm:px-8">
        *Benefits, limits, memberships, offers and eligibility remain subject to the applicable bank, insurer, programme terms and current corporate salary-account rules.
      </p>
    </main>
  );
};

export default EmployeeBenefitDetail;
