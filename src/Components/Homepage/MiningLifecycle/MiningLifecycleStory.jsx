import { useCallback, useLayoutEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
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
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const lifecycleStages = [
  {
    title: "Natural Landscape",
    caption: "Understand place",
    image: "/assets/homepage/mining-lifecycle/natural-landscape.jpg",
    alt: "A forested mineral landscape with rocky outcrops and a clean stream",
    icon: Mountain,
    color: "bg-amber-400",
    iconColor: "text-amber-200",
    offset: 34,
  },
  {
    title: "Planning",
    caption: "Map shared priorities",
    image: "/assets/homepage/mining-lifecycle/planning.jpg",
    alt: "Community members and planners working together around a landscape map",
    icon: Compass,
    color: "bg-orange-400",
    iconColor: "text-orange-200",
    offset: -26,
  },
  {
    title: "Pre-Mining",
    caption: "Prepare communities",
    image: "/assets/homepage/mining-lifecycle/pre-mining-stage.jpg",
    alt: "A surveyor mapping land near a rural village while residents meet nearby",
    icon: MapPinned,
    color: "bg-red-500",
    iconColor: "text-red-200",
    offset: 26,
  },
  {
    title: "Mining Operations",
    caption: "Create responsible value",
    image: "/assets/homepage/mining-lifecycle/mining-operations.jpg",
    alt: "A managed open-cast mine with terraced benches and dust-control systems",
    icon: Factory,
    color: "bg-slate-400",
    iconColor: "text-slate-200",
    offset: -36,
  },
  {
    title: "Mine Closure",
    caption: "Plan the transition",
    image: "/assets/homepage/mining-lifecycle/mine-closure.jpg",
    alt: "Restoration workers planting native saplings on a former mine bench",
    icon: Recycle,
    color: "bg-teal-400",
    iconColor: "text-teal-200",
    offset: 32,
  },
  {
    title: "Post-Mining",
    caption: "Restore and repurpose",
    image: "/assets/homepage/mining-lifecycle/post-mining-stage.jpg",
    alt: "A restored mine waterbody surrounded by native vegetation and community fishing",
    icon: Leaf,
    color: "bg-emerald-400",
    iconColor: "text-emerald-200",
    offset: -24,
  },
  {
    title: "Sustainable Future",
    caption: "Regenerate opportunity",
    image: "/assets/homepage/mining-lifecycle/sustainable-future.jpg",
    alt: "A green rural landscape combining woodland, farming, clean water and solar energy",
    icon: Sprout,
    color: "bg-sky-400",
    iconColor: "text-sky-200",
    offset: 24,
  },
];

// The application applies `zoom: 0.8` to the root document. Compensating here
// keeps this pinned scene equal to the physical viewport rather than 80% of it.
const compensatedViewportHeight = 125;

/* eslint-disable react/prop-types */
const BranchingConnectorLine = ({ progress, offset, emphasis = false }) => {
  const path = useTransform(progress, (value) => {
    const normalized = Math.min(1, Math.max(0, (value - 0.04) / 0.72));
    const branch = normalized * normalized * (3 - 2 * normalized);
    const spread = offset * branch;

    return `M0 120 C120 ${30 + spread * 0.12} 190 ${170 + spread * 0.28
      } 310 ${95 + spread * 0.42} S510 ${35 + spread * 0.58} 610 ${118 + spread * 0.72
      } S820 ${170 + spread * 0.88} 1000 ${70 + spread}`;
  });

  return (
    <motion.path
      d={path}
      fill="none"
      stroke="#dc2626"
      strokeWidth={emphasis ? 2.2 : 1.25}
      strokeOpacity={emphasis ? 0.42 : 0.16}
    />
  );
};
/* eslint-enable react/prop-types */

/* eslint-disable react/prop-types */
const GalleryCard = ({
  stage,
  index,
  activeStage,
  progress,
  horizontalTravel,
  viewportWidth,
  reduceMotion,
}) => {
  const cardRef = useRef(null);
  const StageIcon = stage.icon;
  const imageX = useTransform(progress, (value) => {
    const card = cardRef.current;
    if (!card || !viewportWidth) return 0;

    const viewportCenter = viewportWidth / 2;
    const elementCenter =
      card.offsetLeft + card.offsetWidth / 2 - value * horizontalTravel;
    const position = Math.max(
      -1,
      Math.min(1, (elementCenter - viewportCenter) / viewportCenter),
    );

    return position * -34;
  });

  return (
    <article
      ref={cardRef}
      style={{ marginTop: stage.offset }}
      className="group relative aspect-[4/3] h-[36vh] min-h-[220px] max-h-[440px] shrink-0 overflow-hidden rounded-[1.75rem] border border-white/15 bg-neutral-900 shadow-[0_34px_90px_-38px_rgba(0,0,0,0.95)] sm:h-[44vh] lg:h-[50vh]"
      aria-label={`Stage ${index + 1}: ${stage.title}`}
    >
      <motion.img
        src={stage.image}
        alt={stage.alt}
        loading={index < 2 ? "eager" : "lazy"}
        decoding="async"
        width="1200"
        height="800"
        style={{ x: reduceMotion ? 0 : imageX }}
        className="absolute left-[-12.5%] top-0 h-full w-[125%] max-w-none object-cover transition-[filter,transform] duration-700 group-hover:saturate-125"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/25"
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-2 transition-colors duration-500 ${index === activeStage ? "border-white/25" : "border-transparent"
          } rounded-[1.75rem]`}
      />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4 sm:p-5">
        <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-white/80 backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`h-3 w-3 rounded-full ${stage.color} shadow-[0_0_0_6px_rgba(0,0,0,0.28)]`}
        />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-7">
        <span
          className={`mb-4 grid h-10 w-10 place-items-center rounded-xl border border-white/20 bg-black/35 backdrop-blur-md ${stage.iconColor}`}
        >
          <StageIcon aria-hidden="true" className="h-5 w-5" />
        </span>
        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
          {stage.title}
        </h3>
        <p className="mt-1.5 text-sm text-white/60 sm:text-base">
          {stage.caption}
        </p>
      </div>
    </article>
  );
};
/* eslint-enable react/prop-types */

const MiningLifecycleStory = () => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(0);
  const [pinState, setPinState] = useState("before");
  const [horizontalTravel, setHorizontalTravel] = useState(2800);
  const [viewportWidth, setViewportWidth] = useState(0);
  const scrollYProgress = useMotionValue(0);

  const { scrollY } = useScroll();
  const easedProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 38,
    mass: 0.42,
    restDelta: 0.0005,
  });
  const timelineProgress = reduceMotion ? scrollYProgress : easedProgress;
  const trackX = useTransform(
    timelineProgress,
    (progress) => progress * -horizontalTravel,
  );
  const backgroundX = useTransform(
    timelineProgress,
    [0, 1],
    [0, reduceMotion ? 0 : -100],
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const nextStage = Math.round(progress * (lifecycleStages.length - 1));
    setActiveStage((current) =>
      current === nextStage ? current : nextStage,
    );
  });

  const updatePinnedScene = useCallback(() => {
    const section = sectionRef.current;
    const scene = stickyRef.current;
    if (!section || !scene) return;

    const sectionRect = section.getBoundingClientRect();
    const sceneHeight = scene.getBoundingClientRect().height;
    const pinDistance = Math.max(sectionRect.height - sceneHeight, 1);
    const progress = Math.min(
      1,
      Math.max(0, -sectionRect.top / pinDistance),
    );

    scrollYProgress.set(progress);
    // Preserve the Codrops-like interpolation while guaranteeing that the
    // gallery is exactly at its first/last card when the pin changes state.
    if (!reduceMotion && (progress <= 0 || progress >= 1)) {
      easedProgress.jump(progress);
    }

    const nextPinState =
      sectionRect.top > 0
        ? "before"
        : sectionRect.bottom <= sceneHeight
          ? "after"
          : "active";

    setPinState((current) =>
      current === nextPinState ? current : nextPinState,
    );
  }, [easedProgress, reduceMotion, scrollYProgress]);

  useMotionValueEvent(scrollY, "change", updatePinnedScene);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return undefined;

    const measure = () => {
      setViewportWidth(viewport.clientWidth);
      setHorizontalTravel(
        Math.max(track.scrollWidth - viewport.clientWidth, 0),
      );
    };

    measure();
    updatePinnedScene();
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    const handleResize = () => updatePinnedScene();
    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [updatePinnedScene]);

  const scrollToStage = (index) => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    const destination = Math.min(
      Math.max(index, 0),
      lifecycleStages.length - 1,
    );
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const scrollDistance =
      section.getBoundingClientRect().height -
      sticky.getBoundingClientRect().height;

    window.scrollTo({
      top:
        sectionTop +
        scrollDistance * (destination / (lifecycleStages.length - 1)),
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollToStage(activeStage + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollToStage(activeStage - 1);
    }
  };

  const scrollDistance = Math.max(horizontalTravel * 1.08, 1800);

  return (
    <motion.section
      ref={sectionRef}
      style={{
        height: `calc(${compensatedViewportHeight}vh + ${scrollDistance}px)`,
      }}
      className="relative bg-black text-white"
      aria-labelledby="mining-lifecycle-heading"
    >
      <motion.div
        ref={stickyRef}
        style={{
          height: `${compensatedViewportHeight}vh`,
        }}
        className={`isolate z-10 w-full overflow-hidden bg-black ${pinState === "active"
          ? "fixed left-0 top-0"
          : pinState === "after"
            ? "absolute bottom-0 left-0"
            : "absolute left-0 top-0"
          }`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label="Scroll-driven mine lifecycle gallery"
      >
        <div
          className="absolute inset-0 opacity-[0.13]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 84%, transparent)",
          }}
        />

        <motion.svg
          aria-hidden="true"
          className="absolute inset-y-0 -left-16 h-full w-[calc(100%+8rem)] opacity-20"
          viewBox="0 0 1440 780"
          preserveAspectRatio="none"
          style={{ x: backgroundX }}
        >
          {[0, 1, 2, 3, 4].map((line) => (
            <path
              key={line}
              d={`M-80 ${115 + line * 92} C 180 ${35 + line * 88}, 315 ${210 + line * 52
                }, 560 ${115 + line * 82} S 900 ${30 + line * 100}, 1180 ${120 + line * 76
                } S 1450 ${55 + line * 84}, 1540 ${120 + line * 70}`}
              fill="none"
              stroke="rgba(255,255,255,.55)"
              strokeWidth="1"
            />
          ))}
        </motion.svg>

        <div className="absolute inset-x-0 top-0 z-20 mx-auto max-w-7xl px-5 pt-7 sm:px-8 sm:pt-9 lg:px-10 lg:pt-10">
          <div className="border-b border-white/[0.08] pb-6 sm:pb-7">
            <div className="mb-5 flex items-center justify-between gap-5">
              <div className="flex items-center gap-3">
                <span className="h-7 w-[3px] rounded-full bg-red-600 shadow-[0_0_24px_rgba(220,38,38,0.55)]" />
                <p className="text-[10px] text-red-600 font-semibold uppercase tracking-[0.24em] text-red-400 sm:text-xs">
                  Mine lifecycle transformation
                </p>
              </div>
              <p className="hidden font-mono text-[12px] uppercase tracking-[0.2em] text-green-500 sm:block">
                Land · Value · Regeneration
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <h2
                id="mining-lifecycle-heading"
                className="max-w-[760px] text-[2rem] font-medium leading-[0.98] tracking-[-0.045em] sm:text-[2.6rem] lg:text-[3.25rem]"
              >
                <span className="block text-white">Supporting communities</span>
                <span className="mt-1 block text-white/62">
                  across the mining lifecycle.
                </span>
              </h2>
              <div className="max-w-sm lg:pb-1 lg:text-right">
                <p className="text-xs leading-5 text-white sm:text-sm sm:leading-6">
                  From untouched land to renewed opportunity—scroll through
                  seven connected stages of responsible transformation.
                </p>
                {/* <p className="mt-3 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-red-400/70">
                  Scroll to advance
                  <span aria-hidden="true">→</span>
                </p> */}
              </div>
            </div>
          </div>
        </div>

        <div
          ref={viewportRef}
          className="absolute inset-x-0 bottom-20 top-[175px] overflow-hidden sm:top-[200px] lg:top-[225px]"
        >
          <motion.div
            ref={trackRef}
            style={{ x: trackX }}
            className="relative flex h-full w-max items-center gap-8 pl-[7vw] pr-[12vw] will-change-transform sm:gap-12 lg:gap-16"
          >
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-1/2 h-64 w-full -translate-y-1/2 overflow-visible"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              {[-34, -17, 0, 17, 34].map((offset, lineIndex) => (
                <BranchingConnectorLine
                  key={offset}
                  progress={timelineProgress}
                  offset={offset}
                  emphasis={lineIndex === 2}
                />
              ))}
              <motion.path
                d="M0 120 C120 30 190 170 310 95 S510 35 610 118 S820 170 1000 70"
                fill="none"
                stroke="#ef4444"
                strokeLinecap="round"
                strokeWidth="3.5"
                filter="url(#timelineGlow)"
                style={{ pathLength: timelineProgress }}
              />
              <defs>
                <filter id="timelineGlow" x="-20%" y="-50%" width="140%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
            </svg>

            {lifecycleStages.map((stage, index) => (
              <GalleryCard
                key={stage.title}
                stage={stage}
                index={index}
                activeStage={activeStage}
                progress={timelineProgress}
                horizontalTravel={horizontalTravel}
                viewportWidth={viewportWidth}
                reduceMotion={reduceMotion}
              />
            ))}
          </motion.div>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-7xl items-center gap-4 px-5 pb-7 sm:px-8 lg:px-10">
          <div className="h-px flex-1 overflow-hidden bg-white/10">
            <motion.div
              className="h-full origin-left bg-green-500"
              style={{ scaleX: timelineProgress }}
            />
          </div>
          <span className="min-w-12 font-mono text-[11px] text-white/45">
            {String(activeStage + 1).padStart(2, "0")} / 07
          </span>
          <button
            type="button"
            onClick={() => scrollToStage(activeStage - 1)}
            disabled={activeStage === 0}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.06] transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 disabled:opacity-30"
            aria-label="View previous lifecycle stage"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollToStage(activeStage + 1)}
            disabled={activeStage === lifecycleStages.length - 1}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-white/[0.06] transition hover:border-white/30 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 disabled:opacity-30"
            aria-label="View next lifecycle stage"
          >
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default MiningLifecycleStory;
