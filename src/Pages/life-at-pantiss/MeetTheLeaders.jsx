import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const leaders = [
  {
    name: "Mr. Stalin Nayak",
    role: "Founder & CEO",
    description:
      "Provides the vision and strategic direction behind Pantiss, bringing a sustained focus to community-led development and responsible organisational growth.",
    image: "/assets/teams/stalinsir.jpg",
  },
  {
    name: "Dr. Sanjaya Pradhan",
    role: "Principal Advisor — Risk Management & Global Representation",
    description:
      "Guides risk thinking and global engagement, helping strengthen institutional credibility, partnerships and long-term resilience.",
    image: "/assets/teams/sanjay.png",
  },
  {
    name: "Mr. Deepan Digal",
    role: "Chief Business Officer",
    description:
      "Leads business strategy and collaboration, connecting operational excellence with opportunities to scale the organisation’s impact.",
    image: "/assets/teams/deepan.png",
  },
  {
    name: "Mrs. Indumati Nanda",
    role: "Chief Strategy Officer",
    description:
      "Shapes strategic planning and organisational development, aligning long-term priorities with community-centred outcomes.",
    image: "/assets/teams/indumaam.png",
  },
];

const MeetTheLeaders = () => (
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
          <div className="relative min-h-[360px] lg:min-h-[600px]">
            <img
              src="/assets/careers/life/optimized/meet-the-leaders.jpg"
              alt="A collaborative leadership workspace"
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
              Meet the leaders
            </h1>
            <p className="mt-7 text-lg leading-8 text-neutral-300">
              Meet the people guiding our strategy, strengthening our institution and helping teams turn purpose into measurable community impact.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 py-14 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
            Leadership team
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-5xl">
            Experience, accountability and a shared commitment to impact.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leaders.map((leader) => (
            <article
              key={leader.name}
              className="group overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="grid sm:grid-cols-[0.82fr_1.18fr]">
                <div className="overflow-hidden bg-neutral-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="aspect-[4/5] h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold text-neutral-950">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-red-600">
                    {leader.role}
                  </p>
                  <p className="mt-5 leading-7 text-neutral-600">
                    {leader.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-red-600 px-4 py-14 text-white sm:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-100">
            Work with us
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Bring your perspective to our mission.
          </h2>
        </div>
        <Link
          to="/careers/jobs"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-red-600 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-red-600"
        >
          Explore opportunities
          <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
        </Link>
      </div>
    </section>
  </main>
);

export default MeetTheLeaders;
