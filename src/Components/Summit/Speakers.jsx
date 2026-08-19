import Marquee from "react-fast-marquee";

// Temporary fictional profiles for Summit design preview.
const placeholderSpeakers = [
  {
    img: "/assets/summit/speakers-placeholder/ananya-rao.jpg",
    name: "Ananya Rao",
    designation: "Sustainability Policy Specialist",
  },
  {
    img: "/assets/summit/speakers-placeholder/arjun-mehta.jpg",
    name: "Arjun Mehta",
    designation: "Mine Reclamation Engineer",
  },
  {
    img: "/assets/summit/speakers-placeholder/kavya-iyer.jpg",
    name: "Kavya Iyer",
    designation: "Rural Enterprise Practitioner",
  },
  {
    img: "/assets/summit/speakers-placeholder/devendra-sen.jpg",
    name: "Dr. Devendra Sen",
    designation: "Community Development Researcher",
  },
  {
    img: "/assets/summit/speakers-placeholder/meera-kulkarni.jpg",
    name: "Dr. Meera Kulkarni",
    designation: "Environmental Scientist",
  },
  {
    img: "/assets/summit/speakers-placeholder/rohan-bedi.jpg",
    name: "Rohan Bedi",
    designation: "Just Transition Specialist",
  },
  {
    img: "/assets/summit/speakers-placeholder/nandini-ekka.jpg",
    name: "Nandini Ekka",
    designation: "Community Partnerships Lead",
  },
  {
    img: "/assets/summit/speakers-placeholder/vijay-menon.jpg",
    name: "Vijay Menon",
    designation: "Rural Public Systems Advisor",
  },
  {
    img: "/assets/summit/speakers-placeholder/priya-kapoor.jpg",
    name: "Priya Kapoor",
    designation: "Responsible Industry Strategist",
  },
];

const Speakers = () => (
  <section
    aria-labelledby="summit-speakers-heading"
    className="overflow-hidden bg-white px-4 py-14 sm:px-8 lg:py-20"
  >
    <div className="mx-auto mb-10 max-w-7xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
        Voices shaping the conversation
      </p>
      <h2
        id="summit-speakers-heading"
        className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl"
      >
        Summit speakers
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-600">
        Illustrative speaker profiles for preview purposes. The confirmed line-up will be announced separately.
      </p>
    </div>

    <Marquee gradient={false} speed={34} pauseOnHover pauseOnClick>
      {placeholderSpeakers.map((speaker) => (
        <article
          key={speaker.name}
          className="group mx-3 flex h-[330px] w-[270px] flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-neutral-200 bg-neutral-50 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl sm:mx-4 sm:w-[290px]"
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-red-600/10 transition group-hover:bg-red-600/20" />
            <img
              src={speaker.img}
              alt={`Illustrative portrait of ${speaker.name}`}
              className="relative h-36 w-36 rounded-full object-cover ring-4 ring-white"
              loading="lazy"
              decoding="async"
            />
          </div>
          <span className="mt-7 rounded-full bg-red-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-red-600">
            Preview profile
          </span>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-neutral-950">
            {speaker.name}
          </h3>
          <p className="mt-2 text-sm leading-5 text-neutral-600">
            {speaker.designation}
          </p>
        </article>
      ))}
    </Marquee>
  </section>
);

export default Speakers;
