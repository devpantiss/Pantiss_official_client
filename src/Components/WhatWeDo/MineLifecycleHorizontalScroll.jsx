import { useRef, useState, useLayoutEffect, useEffect } from "react";
import {
  Compass,
  Factory,
  Leaf,
  MapPinned,
  Mountain,
  Recycle,
  Sprout,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* ─── Data ──────────────────────────────────────────────── */
const lifecycleStages = [
  {
    title: "Natural Landscape",
    caption: "Understand place",
    image: "/assets/homepage/mining-lifecycle/natural-landscape.jpg",
    alt: "A forested mineral landscape with rocky outcrops and a clean stream",
    icon: Mountain,
    dot: "bg-amber-400",
    accent: "#f59e0b",
    accentLight: "rgba(245,158,11,0.18)",
  },
  {
    title: "Planning",
    caption: "Map shared priorities",
    image: "/assets/homepage/mining-lifecycle/planning.jpg",
    alt: "Community members and planners working together around a landscape map",
    icon: Compass,
    dot: "bg-orange-400",
    accent: "#fb923c",
    accentLight: "rgba(251,146,60,0.18)",
  },
  {
    title: "Pre-Mining",
    caption: "Prepare communities",
    image: "/assets/homepage/mining-lifecycle/pre-mining-stage.jpg",
    alt: "A surveyor mapping land near a rural village while residents meet nearby",
    icon: MapPinned,
    dot: "bg-red-500",
    accent: "#ef4444",
    accentLight: "rgba(239,68,68,0.18)",
  },
  {
    title: "Mining Operations",
    caption: "Create responsible value",
    image: "/assets/homepage/mining-lifecycle/mining-operations.jpg",
    alt: "A managed open-cast mine with terraced benches and dust-control systems",
    icon: Factory,
    dot: "bg-slate-400",
    accent: "#94a3b8",
    accentLight: "rgba(148,163,184,0.15)",
  },
  {
    title: "Mine Closure",
    caption: "Plan the transition",
    image: "/assets/homepage/mining-lifecycle/mine-closure.jpg",
    alt: "Restoration workers planting native saplings on a former mine bench",
    icon: Recycle,
    dot: "bg-teal-400",
    accent: "#2dd4bf",
    accentLight: "rgba(45,212,191,0.18)",
  },
  {
    title: "Post-Mining",
    caption: "Restore and repurpose",
    image: "/assets/homepage/mining-lifecycle/post-mining-stage.jpg",
    alt: "A restored mine waterbody surrounded by native vegetation",
    icon: Leaf,
    dot: "bg-emerald-400",
    accent: "#34d399",
    accentLight: "rgba(52,211,153,0.18)",
  },
  {
    title: "Sustainable Future",
    caption: "Regenerate opportunity",
    image: "/assets/homepage/mining-lifecycle/sustainable-future.jpg",
    alt: "A green rural landscape combining woodland, farming, clean water and solar energy",
    icon: Sprout,
    dot: "bg-sky-400",
    accent: "#38bdf8",
    accentLight: "rgba(56,189,248,0.18)",
  },
];

/* ─── Stage Card ────────────────────────────────────────── */
const StageCard = ({ stage, index }) => {
  const Icon = stage.icon;
  return (
    <div className="group relative flex-shrink-0 w-[300px] lg:w-[330px] xl:w-[360px] h-[60vh] min-h-[380px] max-h-[540px]">
      <div
        className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10
                   transition-all duration-500 group-hover:border-white/30
                   group-hover:shadow-[0_28px_70px_-14px_rgba(0,0,0,0.88)]"
      >
        {/* Photo */}
        <img
          src={stage.image}
          alt={stage.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/12" />

        {/* Stage number */}
        <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/70 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Colored dot */}
        <span
          className={`absolute right-4 top-4 h-2.5 w-2.5 rounded-full ${stage.dot} shadow-[0_0_0_5px_rgba(0,0,0,0.35)]`}
        />

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div
            className="mb-3 grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-black/50 backdrop-blur-md"
          >
            <Icon
              aria-hidden="true"
              className="h-[18px] w-[18px]"
              style={{ color: stage.accent }}
            />
          </div>
          <h3 className="text-[15px] font-semibold leading-snug text-white">
            {stage.title}
          </h3>
          <p className="mt-1 text-xs leading-5 text-white/50">{stage.caption}</p>
        </div>

        {/* Inner hover glow */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ boxShadow: `inset 0 0 70px -24px ${stage.accentLight}` }}
        />
      </div>
    </div>
  );
};

/* ─── Main Component ────────────────────────────────────── */
const MineLifecycleHorizontalScroll = () => {
  const outerRef = useRef(null);  // tall outer wrapper — scroll target
  const stripRef = useRef(null);  // wide flex strip — measure scrollWidth

  const [totalTranslate, setTotalTranslate] = useState(2600);
  const [vhPx, setVhPx] = useState(900);
  const [activeIndex, setActiveIndex] = useState(0);

  const reduceMotion = useReducedMotion();

  /* Measure strip width & viewport height; re-run on resize */
  useLayoutEffect(() => {
    const measure = () => {
      const winW = window.innerWidth;
      const winH = window.innerHeight;
      setVhPx(winH);
      if (stripRef.current) {
        const need = stripRef.current.scrollWidth - winW;
        setTotalTranslate(Math.max(need, 100));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (stripRef.current) ro.observe(stripRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  /*
   * Height formula:
   *   containerHeight = totalTranslate + viewportHeight
   *
   * scrollYProgress goes 0→1 over (containerHeight - viewportHeight)
   * = totalTranslate px of scroll, exactly matching the x translation.
   */
  const containerHeight = totalTranslate + vhPx;

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const smoothProg = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    restDelta: 0.001,
  });

  const prog = reduceMotion ? scrollYProgress : smoothProg;

  /* Horizontal translation */
  const x = useTransform(prog, [0, 1], [0, -totalTranslate]);

  /* UI helpers */
  const arrowOpacity  = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const progressWidth = useTransform(prog, [0, 1], ["0%", "100%"]);

  /* Background colour shift */
  const bgColor = useTransform(
    prog,
    [0, 0.35, 0.65, 1],
    ["#1a100d", "#1a1f24", "#112b22", "#0e2332"]
  );

  /* Active stage index for dot indicators */
  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      setActiveIndex(
        Math.min(lifecycleStages.length - 1, Math.floor(v * lifecycleStages.length))
      );
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <>
      {/* ══ DESKTOP — sticky horizontal scroll ══════════════════ */}
      <div
        ref={outerRef}
        className="relative hidden lg:block"
        style={{ height: containerHeight }}
        aria-label="Mine lifecycle transformation — scroll to explore"
      >
        <motion.div
          className="sticky top-0 h-screen overflow-hidden"
          style={{ backgroundColor: bgColor }}
        >
          {/* Grid texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.065]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
              maskImage:
                "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            }}
          />

          {/* Wave lines */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.11]"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M-80 ${130 + i * 115} C 220 ${55 + i * 108}, 500 ${260 + i * 78},
                    720 ${130 + i * 112} S 1100 ${50 + i * 128}, 1440 ${135 + i * 92}
                    S 1700 ${65 + i * 102}, 1540 ${130 + i * 82}`}
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Ambient glows */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-red-600/10 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, -15, 0], scale: [1, 1.09, 1] }}
            transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl"
            animate={reduceMotion ? undefined : { x: [0, -30, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* ── Horizontal strip ── */}
          <motion.div
            ref={stripRef}
            style={{ x }}
            className="flex h-full w-max items-center will-change-transform"
          >
            {/* Intro panel — exactly one viewport wide */}
            <div className="relative flex h-full w-screen flex-shrink-0 items-center px-16 xl:px-24">
              <div className="max-w-2xl">
                {/* Label */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-7 w-[3px] rounded-full bg-red-500" />
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-red-400">
                    Mine lifecycle transformation
                  </p>
                </div>

                {/* Heading */}
                <h2
                  id="mlc-heading"
                  className="text-4xl font-semibold leading-tight tracking-tight text-white xl:text-5xl 2xl:text-6xl"
                >
                  Supporting communities<br />across the mining lifecycle
                </h2>

                {/* Body */}
                <p className="mt-5 max-w-md text-base leading-7 text-white/55 xl:text-lg">
                  Pantiss delivers integrated solutions that create sustainable
                  value before mining begins and long after mining operations end.
                </p>

                {/* Scroll hint */}
                <motion.div
                  style={{ opacity: arrowOpacity }}
                  className="mt-10 flex items-center gap-3"
                >
                  <div className="flex items-center gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="block h-[3px] w-5 rounded-full bg-white/30"
                        animate={{ opacity: [0.3, 1, 0.3], x: [0, 4, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/40 tracking-wide">
                    Scroll to explore the lifecycle
                  </span>
                </motion.div>

                {/* Coords */}
                <p className="mt-14 font-mono text-[10px] tracking-[0.22em] text-white/25">
                  20.2961° N / 85.8245° E
                </p>
              </div>

              {/* Right fade into cards */}
              <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-r from-transparent to-[#1a100d]/80" />
            </div>

            {/* Stage cards */}
            <div className="flex h-full items-center gap-4 pl-4 pr-36 xl:gap-5 xl:pr-44">
              {lifecycleStages.map((stage, index) => (
                <StageCard key={stage.title} stage={stage} index={index} />
              ))}
            </div>

            {/* End label */}
            <div className="flex h-full flex-shrink-0 flex-col items-center justify-center px-12">
              <p
                className="font-mono text-[10px] tracking-[0.28em] text-white/25"
                style={{ writingMode: "vertical-rl" }}
              >
                LAND → VALUE → REGENERATION
              </p>
            </div>
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
            <motion.div
              className="h-full"
              style={{
                width: progressWidth,
                background:
                  "linear-gradient(90deg, #f59e0b 0%, #ef4444 40%, #2dd4bf 70%, #38bdf8 100%)",
              }}
            />
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {lifecycleStages.map((stage, i) => (
              <motion.span
                key={i}
                className={`block rounded-full ${stage.dot}`}
                animate={{
                  width:  i === activeIndex ? 20 : 6,
                  height: 6,
                  opacity: i === activeIndex ? 1 : 0.28,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            ))}
          </div>

          {/* Stage counter */}
          <div className="absolute right-8 top-8 font-mono text-xs tracking-widest text-white/30">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="mx-1 text-white/15">/</span>
            <span>{String(lifecycleStages.length).padStart(2, "0")}</span>
          </div>
        </motion.div>
      </div>

      {/* ══ MOBILE — vertical timeline ══════════════════════════ */}
      <section
        className="block lg:hidden overflow-hidden py-16 px-5 sm:px-8"
        style={{
          background:
            "linear-gradient(160deg, #1a100d 0%, #1b1714 55%, #0f1a18 100%)",
        }}
        aria-labelledby="mlc-heading-mobile"
      >
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-6 w-[3px] rounded-full bg-red-500" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
              Mine lifecycle transformation
            </p>
          </div>
          <h2
            id="mlc-heading-mobile"
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl"
          >
            Supporting communities across the mining lifecycle
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/55">
            Pantiss delivers integrated solutions that create sustainable value
            before mining begins and long after mining operations end.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative pl-12">
          {/* Spine */}
          <div className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10">
            <motion.div
              className="w-px origin-top"
              style={{
                height: "100%",
                background:
                  "linear-gradient(to bottom, #f59e0b, #ef4444, #34d399, #38bdf8)",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.6, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-4">
            {lifecycleStages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group relative"
                >
                  {/* Node */}
                  <div
                    className="absolute -left-12 top-5 grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-neutral-900 shadow-lg"
                    style={{ boxShadow: `0 0 0 4px ${stage.accentLight}` }}
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-4 w-4"
                      style={{ color: stage.accent }}
                    />
                  </div>

                  {/* Card */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-sm">
                    <div className="relative aspect-[16/8] overflow-hidden">
                      <img
                        src={stage.image}
                        alt={stage.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/15" />
                      <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.14em] text-white/70 backdrop-blur-md">
                        Stage {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={`absolute right-4 top-4 h-2.5 w-2.5 rounded-full ${stage.dot}`} />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-white">{stage.title}</h3>
                      <p className="mt-1 text-sm text-white/50">{stage.caption}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="mt-12 text-center font-mono text-[10px] tracking-[0.22em] text-white/25">
          LAND → VALUE → REGENERATION
        </p>
      </section>
    </>
  );
};

export default MineLifecycleHorizontalScroll;
