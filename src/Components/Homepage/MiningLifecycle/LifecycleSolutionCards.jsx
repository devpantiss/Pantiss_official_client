import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Droplets,
  Fish,
  HeartPulse,
  Leaf,
  MapPin,
  MoveHorizontal,
  School,
  Sun,
  TentTree,
  Tractor,
  Trees,
  Waves,
  House,
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
/** Map reveal% to a 0‑1 factor for a [a, b] window */
const prog = (v, a, b) => clamp((v - a) / (b - a), 0, 1);

/* ═══════════════════════════════════════════════
   DATA
═══════════════════════════════════════════════ */

const stories = [
  {
    id: "pre-mining",
    number: "01",
    eyebrow: "Before extraction",
    title: "A village,\nplanned around people.",
    beforeLabel: "Existing Village",
    afterLabel: "Model Mining Village",
    beforeImage: "/assets/homepage/mining-lifecycle/pre-village-before.jpg",
    afterImage: "/assets/homepage/mining-lifecycle/pre-village-after.jpg",
    beforeAlt: "Aerial view of an existing rural village before planning",
    afterAlt: "Village transformed with planned roads and services",
    accent: "red",
    stages: ["Raw Village", "GIS Survey", "Infrastructure", "Services", "Community"],
    link: "/what-we-do/land-acquisition-rehabilitation-&-resettlement-of-mines",
    cta: "Explore pre-mining",
    hotspots: [
      { label: "School", detail: "Education built close to every home.", x: 39, y: 38, Icon: School },
      { label: "Health Centre", detail: "Essential care within the community.", x: 57, y: 57, Icon: HeartPulse },
      { label: "Safe Water", detail: "Clean drinking-water access for all.", x: 19, y: 50, Icon: Droplets },
      { label: "Solar Network", detail: "Clean power for homes and streets.", x: 72, y: 42, Icon: Sun },
      { label: "Green Commons", detail: "Shaded shared space at the village heart.", x: 49, y: 69, Icon: Trees },
    ],
  },
  {
    id: "post-mining",
    number: "02",
    eyebrow: "Beyond closure",
    title: "An exhausted mine,\nalive again.",
    beforeLabel: "Closed Mine",
    afterLabel: "Thriving Ecosystem",
    beforeImage: "/assets/homepage/mining-lifecycle/post-mine-before.jpg",
    afterImage: "/assets/homepage/mining-lifecycle/post-mine-after.jpg",
    beforeAlt: "Aerial view of a closed open-cast mine",
    afterAlt: "Mine restored as a lake and livelihood park",
    accent: "green",
    stages: ["Closed Mine", "Water Returns", "Regrowth", "Ecosystem", "Livelihoods"],
    link: "/what-we-do/carp-rice-&-duck-livelihood-park",
    cta: "Explore post-mining",
    hotspots: [
      { label: "Mine Lake", detail: "Water habitat for fish and recreation.", x: 48, y: 61, Icon: Waves },
      { label: "Fisheries", detail: "Productive waterbody creates local income.", x: 58, y: 67, Icon: Fish },
      { label: "Native Forest", detail: "Revegetated benches restore biodiversity.", x: 70, y: 35, Icon: Trees },
      { label: "Solar Power", detail: "Clean energy from stable reclaimed land.", x: 28, y: 34, Icon: Sun },
      { label: "Agriculture", detail: "Restored soil becomes productive again.", x: 77, y: 57, Icon: Tractor },
      { label: "Eco Trail", detail: "The landscape welcomes people back safely.", x: 87, y: 70, Icon: TentTree },
    ],
  },
];

/* ═══════════════════════════════════════════════
   AMBIENT BACKGROUND — drifting SVG contours
═══════════════════════════════════════════════ */

/* eslint-disable react/prop-types */
const AmbientBackground = ({ accent, reduceMotion }) => {
  const color = accent === "green" ? "rgba(74,222,128,0.55)" : "rgba(248,113,113,0.55)";
  const paths = [
    "M-60 80 C180 20 350 160 560 80 S860 -20 1060 80",
    "M-60 180 C200 110 370 260 580 175 S870 70 1060 180",
    "M-60 290 C160 215 380 380 600 290 S880 170 1060 290",
    "M-60 400 C190 320 360 480 570 400 S870 295 1060 400",
    "M-60 510 C200 430 380 580 600 510 S870 420 1060 510",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        className="absolute inset-0 h-full w-full opacity-[0.055]"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        animate={reduceMotion ? undefined : { x: ["-1.5%", "1.5%", "-1.5%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} fill="none" stroke={color} strokeWidth="1.2" />
        ))}
      </motion.svg>

      {/* Corner particle clusters */}
      {!reduceMotion && (
        <motion.div
          className="absolute -right-12 -top-12 h-64 w-64 rounded-full opacity-[0.06]"
          style={{
            background:
              accent === "green"
                ? "radial-gradient(circle, #4ade80, transparent 70%)"
                : "radial-gradient(circle, #f87171, transparent 70%)",
          }}
          animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.11, 0.06] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
};

/* ═══════════════════════════════════════════════
   PRE‑MINING SVG OVERLAY
   Layers animate in as slider reveals the after image
   reveal range  0‑100 (matching the slider %)
═══════════════════════════════════════════════ */

const PRE_ROAD_LENGTH = 1120;
const PRE_ROAD2_LENGTH = 240;
const PRE_ROAD3_LENGTH = 240;

const PreMiningSvg = ({ reveal }) => {
  const gridOp    = prog(reveal, 10, 32);
  const markerOp  = prog(reveal, 24, 44);
  const roadP     = prog(reveal, 36, 66);
  const pipeP     = prog(reveal, 53, 73);
  const iconOp    = prog(reveal, 64, 84);

  const surveyMarkers = [
    [195, 148], [392, 288], [618, 202], [512, 418], [758, 318],
  ];

  return (
    <svg
      viewBox="0 0 1000 600"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <filter id="pre-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="pipe-glow" x="-20%" y="-50%" width="140%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="pre-pipe-clip">
          <rect x={0} y={0} width={1000 * pipeP} height={600} />
        </clipPath>
      </defs>

      {/* ── Layer 1: GIS Survey Grid ── */}
      <g style={{ opacity: gridOp }}>
        {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
          <line key={`vl${x}`} x1={x} y1={0} x2={x} y2={600}
            stroke="rgba(248,113,113,0.38)" strokeWidth={0.75} strokeDasharray="6 11" />
        ))}
        {[100, 200, 300, 400, 500].map((y) => (
          <line key={`hl${y}`} x1={0} y1={y} x2={1000} y2={y}
            stroke="rgba(248,113,113,0.38)" strokeWidth={0.75} strokeDasharray="6 11" />
        ))}
        {/* Grid node dots */}
        {[100, 300, 500, 700, 900].flatMap((x) =>
          [100, 200, 300, 400, 500].map((y) => (
            <circle key={`nd${x}${y}`} cx={x} cy={y} r={1.4}
              fill="rgba(248,113,113,0.5)" />
          ))
        )}
        {/* Survey boundary polygon */}
        <polygon
          points="155,118 672,80 842,188 802,490 168,458"
          fill="rgba(248,113,113,0.04)"
          stroke="rgba(248,113,113,0.48)"
          strokeWidth={1.8}
          strokeDasharray="18 8"
        />
      </g>

      {/* ── Layer 2: Survey markers ── */}
      <g style={{ opacity: markerOp }} filter="url(#pre-glow)">
        {surveyMarkers.map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r={10} fill="none" stroke="#f87171" strokeWidth={2} />
            <line x1={cx - 17} y1={cy} x2={cx + 17} y2={cy}
              stroke="#f87171" strokeWidth={1.4} />
            <line x1={cx} y1={cy - 17} x2={cx} y2={cy + 17}
              stroke="#f87171" strokeWidth={1.4} />
            <circle cx={cx} cy={cy} r={3} fill="#f87171" />
            <text x={cx + 14} y={cy - 7} fontSize={10}
              fill="rgba(248,113,113,0.88)" fontFamily="monospace" letterSpacing="0.5">
              P{String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
      </g>

      {/* ── Layer 3: Road network drawing ── */}
      {/* Main arterial road */}
      <path
        d="M78 492 C212 430 322 362 460 330 S694 298 862 224"
        fill="none"
        stroke="rgba(234,179,8,0.72)"
        strokeWidth={2.8}
        strokeLinecap="round"
        style={{
          strokeDasharray: PRE_ROAD_LENGTH,
          strokeDashoffset: PRE_ROAD_LENGTH * (1 - roadP),
          transition: "stroke-dashoffset 0.05s linear",
        }}
      />
      {/* Secondary spur */}
      <path
        d="M460 330 C475 412 495 464 512 512"
        fill="none"
        stroke="rgba(234,179,8,0.58)"
        strokeWidth={2}
        strokeLinecap="round"
        style={{
          strokeDasharray: PRE_ROAD2_LENGTH,
          strokeDashoffset: PRE_ROAD2_LENGTH * (1 - roadP),
          transition: "stroke-dashoffset 0.05s linear",
        }}
      />
      {/* Tertiary lane */}
      <path
        d="M614 204 C638 288 650 368 660 432"
        fill="none"
        stroke="rgba(234,179,8,0.48)"
        strokeWidth={1.5}
        strokeLinecap="round"
        style={{
          strokeDasharray: PRE_ROAD3_LENGTH,
          strokeDashoffset: PRE_ROAD3_LENGTH * (1 - roadP),
          transition: "stroke-dashoffset 0.05s linear",
        }}
      />

      {/* ── Layer 4: Water pipeline — subtle capillary ── */}
      <path
        d="M92 202 C212 180 352 228 460 208 S620 168 730 194 S888 234 962 208"
        fill="none"
        stroke="rgba(147,210,253,0.48)"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeDasharray="10 8"
        clipPath="url(#pre-pipe-clip)"
      />

      {/* ── Layer 5: Service labels — slim monospace pills ── */}
      <g style={{ opacity: iconOp }}>
        {[
          { x: 384, y: 264, label: "SCHOOL" },
          { x: 558, y: 384, label: "HEALTH" },
          { x: 174, y: 340, label: "WATER" },
          { x: 724, y: 264, label: "SOLAR" },
          { x: 492, y: 420, label: "COMMONS" },
        ].map(({ x, y, label }) => {
          const w = label.length * 5.6 + 16;
          return (
            <g key={label} transform={`translate(${x},${y})`}>
              <rect x={-w / 2} y={-9} width={w} height={18} rx={9}
                fill="rgba(8,8,8,0.62)" stroke="rgba(255,255,255,0.11)" strokeWidth={0.6} />
              <text x={0} y={4.5} textAnchor="middle" fontSize={8}
                fill="rgba(255,255,255,0.88)" fontFamily="ui-monospace,monospace"
                fontWeight="500" letterSpacing="0.6">
                {label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

/* ═══════════════════════════════════════════════
   POST‑MINING SVG OVERLAY
═══════════════════════════════════════════════ */

const PostMiningSvg = ({ reveal }) => {
  const pitOp   = prog(reveal,  5, 26);
  const waterP  = prog(reveal, 18, 46);
  const vegOp   = prog(reveal, 38, 60);
  const treesOp = prog(reveal, 52, 72);
  const ecoOp   = prog(reveal, 65, 86);

  const treePts = [[700,178],[742,224],[782,168],[822,198],[178,198],[220,168],[282,198]];

  return (
    <svg
      viewBox="0 0 1000 600"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        {/* No heavy glow filter — keeping overlays crisp */}
      </defs>

      {/* ── Layer 1: Mine pit outline ── */}
      <g style={{ opacity: pitOp }}>
        <ellipse cx={500} cy={362} rx={182} ry={122}
          fill="rgba(20,20,20,0.42)" stroke="rgba(160,160,160,0.72)"
          strokeWidth={2.2} strokeDasharray="14 8" />
        <ellipse cx={500} cy={362} rx={142} ry={92}
          fill="none" stroke="rgba(130,130,130,0.45)" strokeWidth={1.2} />
        <ellipse cx={500} cy={362} rx={102} ry={62}
          fill="none" stroke="rgba(110,110,110,0.32)" strokeWidth={0.8} />
        <text x={500} y={370} textAnchor="middle" fontSize={10}
          fill="rgba(210,210,210,0.75)" fontFamily="monospace" letterSpacing="1">
          MINE PIT
        </text>
      </g>

      {/* ── Layer 2: Water returning — hairline concentric rings, no fill ── */}
      <g>
        {/* Ghost fill — barely perceptible, like a reflection */}
        <ellipse
          cx={500} cy={366}
          rx={180 * waterP} ry={119 * waterP}
          fill="rgba(186,230,254,0.06)"
          style={{ opacity: waterP }}
        />
        {/* Precision ripple rings at fixed radii */}
        {[148, 118, 88, 58, 30].map((r, i) => (
          <ellipse
            key={i}
            cx={500} cy={366}
            rx={r * waterP} ry={r * 0.655 * waterP}
            fill="none"
            stroke={`rgba(186,230,254,${(0.22 - i * 0.03) * waterP})`}
            strokeWidth={0.75}
          />
        ))}
      </g>

      {/* ── Layer 3: Vegetation — hairline boundary markers ── */}
      <g style={{ opacity: vegOp * 0.65 }}>
        {[[202,202,38,24],[322,182,30,19],[682,162,42,27],[822,202,34,22],
          [202,432,38,24],[852,402,32,20],[402,482,28,18]].map(([cx,cy,rx,ry],i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry}
            fill="rgba(74,222,128,0.04)"
            stroke="rgba(74,222,128,0.28)" strokeWidth={0.7} strokeDasharray="4 5" />
        ))}
      </g>

      {/* ── Layer 4: Canopy markers — minimal dot-and-ring ── */}
      <g style={{ opacity: treesOp }}>
        {treePts.map(([x, y], i) => (
          <g key={i} transform={`translate(${x},${y})`}>
            {/* Outer ring */}
            <circle r={6} fill="none"
              stroke="rgba(74,222,128,0.52)" strokeWidth={1} />
            {/* Centre dot */}
            <circle r={2.2} fill="rgba(74,222,128,0.6)" />
          </g>
        ))}
      </g>

      {/* ── Layer 5: Ecosystem labels — slim monospace pills ── */}
      <g style={{ opacity: ecoOp }}>
        {[
          { x: 482, y: 320, label: "MINE LAKE" },
          { x: 578, y: 408, label: "FISHERIES" },
          { x: 702, y: 218, label: "FOREST" },
          { x: 282, y: 218, label: "SOLAR" },
          { x: 772, y: 372, label: "FARM" },
          { x: 872, y: 432, label: "ECO TRAIL" },
        ].map(({ x, y, label }) => {
          const w = label.length * 5.6 + 16;
          return (
            <g key={label} transform={`translate(${x},${y})`}>
              <rect x={-w / 2} y={-9} width={w} height={18} rx={9}
                fill="rgba(8,8,8,0.62)" stroke="rgba(255,255,255,0.11)" strokeWidth={0.6} />
              <text x={0} y={4.5} textAnchor="middle" fontSize={8}
                fill="rgba(255,255,255,0.88)" fontFamily="ui-monospace,monospace"
                fontWeight="500" letterSpacing="0.6">
                {label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
};

/* ═══════════════════════════════════════════════
   HOTSPOT — glowing interactive pin + tooltip
═══════════════════════════════════════════════ */

const Hotspot = ({ item, accent, visible }) => {
  const { Icon } = item;
  const isGreen = accent === "green";
  const pingCls = isGreen ? "bg-emerald-400" : "bg-red-400";
  const borderCls = isGreen ? "border-emerald-300/65" : "border-red-300/65";

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="group/hs absolute z-20 -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 420, damping: 26 }}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label={`${item.label}: ${item.detail}`}
        >
          {/* Subtle ping ring */}
          <span
            className={`absolute inset-0 animate-ping rounded-full opacity-[0.14] ${pingCls}`}
          />
          {/* Button face */}
          <span
            className={`relative grid h-9 w-9 place-items-center rounded-full border bg-black/62 text-white shadow-xl backdrop-blur-md transition-transform duration-200 group-hover/hs:scale-110 sm:h-10 sm:w-10 ${borderCls}`}
          >
            <Icon aria-hidden="true" className="h-4 w-4" />
          </span>
          {/* Glassmorphism tooltip */}
          <span className="pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 w-48 -translate-x-1/2 translate-y-3 rounded-2xl border border-white/12 bg-neutral-950/93 p-4 text-left opacity-0 shadow-2xl backdrop-blur-2xl transition-all duration-200 ease-out group-hover/hs:translate-y-0 group-hover/hs:opacity-100">
            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-white">
              {item.label}
            </span>
            <span className="mt-1.5 block text-[11px] leading-[1.55] text-white/52">
              {item.detail}
            </span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

/* ═══════════════════════════════════════════════
   DRAG DIVIDER — glowing line + frosted handle
═══════════════════════════════════════════════ */

const DragDivider = ({ reveal }) => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 z-30 w-[1.5px] bg-white/88 shadow-[0_0_28px_4px_rgba(255,255,255,0.45)]"
    style={{ left: `${reveal}%` }}
  >
    {/* Handle */}
    <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/52 bg-black/72 text-white shadow-2xl backdrop-blur-2xl">
      <MoveHorizontal className="h-5 w-5" />
    </span>
  </div>
);

/* ═══════════════════════════════════════════════
   STAGE LABEL — animated text morph
═══════════════════════════════════════════════ */

const StageLabel = ({ label, accent }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={label}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={`text-sm font-semibold tracking-wide ${
        accent === "green" ? "text-emerald-500" : "text-red-500"
      }`}
    >
      {label}
    </motion.span>
  </AnimatePresence>
);

/* ═══════════════════════════════════════════════
   STAGE TIMELINE — pill tabs with spring layout
═══════════════════════════════════════════════ */

/* eslint-disable react/prop-types */
const StageTimeline = ({ stages, activeIndex, accent, story, onStageClick }) => {
  const accentBg = accent === "green" ? "bg-emerald-500" : "bg-red-600";

  return (
    <div
      className="absolute inset-x-4 bottom-4 z-40 flex items-center gap-2.5 sm:inset-x-6 sm:bottom-6"
      onPointerDown={(e) => e.stopPropagation()}
    >
      <div className="flex min-w-0 flex-1 items-center gap-1 rounded-full border border-white/14 bg-black/52 p-1.5 backdrop-blur-xl">
        {stages.map((stage, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={stage}
              type="button"
              onClick={(e) => { e.stopPropagation(); onStageClick(i); }}
              className={`relative min-w-0 flex-1 rounded-full px-2 py-2 text-[9px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 sm:text-[10px] ${
                isActive ? "text-white" : "text-white/38 hover:text-white/65"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`stage-pill-${story.id}`}
                  className={`absolute inset-0 rounded-full ${accentBg}`}
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span className="relative hidden sm:inline">{stage}</span>
              <span className="relative sm:hidden">{i + 1}</span>
            </button>
          );
        })}
      </div>

      {/* CTA arrow */}
      <Link
        to={story.link}
        onPointerDown={(e) => e.stopPropagation()}
        className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/22 bg-white text-neutral-950 transition-transform duration-200 hover:scale-105 hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-12 sm:w-12"
        aria-label={story.cta}
      >
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
};

/* ═══════════════════════════════════════════════
   TRANSFORMATION STORY — one full story card
═══════════════════════════════════════════════ */

const TransformationStory = ({ story, index, reduceMotion }) => {
  const sceneRef = useRef(null);
  const draggingRef = useRef(false);
  const hintFiredRef = useRef(false);
  const [reveal, setReveal] = useState(50);

  /* Scroll parallax */
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress, [0, 1],
    reduceMotion ? [0, 0] : [-16, 16],
  );
  const imageScale = useTransform(
    scrollYProgress, [0, 0.5, 1],
    reduceMotion ? [1, 1, 1] : [1.048, 1, 1.048],
  );

  /* Stage computation */
  const activeIndex = Math.min(
    story.stages.length - 1,
    Math.floor((reveal / 100) * story.stages.length),
  );
  const activeLabel = story.stages[activeIndex];
  const hotspotsVisible = reveal >= 55;

  /* Auto-hint swing on first mount (index 0 only) */
  useEffect(() => {
    if (reduceMotion || hintFiredRef.current || index !== 0) return;
    hintFiredRef.current = true;
    const t1 = setTimeout(() => setReveal(74), 900);
    const t2 = setTimeout(() => setReveal(50), 2100);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [reduceMotion, index]);

  /* Pointer drag */
  const setFromPointer = useCallback((event) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const bounds = scene.getBoundingClientRect();
    const value = ((event.clientX - bounds.left) / bounds.width) * 100;
    setReveal(clamp(value, 0, 100));
  }, []);

  const handlePointerDown = (e) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromPointer(e);
  };
  const handlePointerMove = (e) => { if (draggingRef.current) setFromPointer(e); };
  const stopDragging = () => { draggingRef.current = false; };

  const handleStageClick = (i) =>
    setReveal((i / (story.stages.length - 1)) * 100);

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* ── Story header ── */}
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span
              className={`font-mono text-[10px] tracking-[0.2em] ${
                story.accent === "green" ? "text-emerald-600" : "text-red-600"
              }`}
            >
              {story.number} / {story.eyebrow}
            </span>
            <span className="h-px w-10 bg-neutral-300" />
          </div>
          <h3 className="whitespace-pre-line text-3xl font-medium tracking-[-0.035em] text-neutral-950 sm:text-4xl lg:text-[2.65rem]">
            {story.title}
          </h3>
        </div>

        {/* Live stage indicator */}
        <div className="flex items-center gap-2.5 text-sm text-neutral-500 lg:pb-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-400">
            Now viewing →
          </span>
          <StageLabel label={activeLabel} accent={story.accent} />
        </div>
      </div>

      {/* ── Scene canvas ── */}
      <div
        ref={sceneRef}
        className="group/scene relative aspect-[16/10] min-h-[420px] touch-none select-none overflow-hidden rounded-[2rem] bg-neutral-900 shadow-[0_44px_110px_-52px_rgba(10,10,10,0.62)] sm:aspect-[16/9] lg:min-h-[600px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onDoubleClick={() => setReveal(reveal < 50 ? 100 : 0)}
        role="img"
        aria-label={`Interactive before‑after comparison: ${story.beforeLabel} vs ${story.afterLabel}`}
      >
        {/* Ambient background motion */}
        <AmbientBackground accent={story.accent} reduceMotion={reduceMotion} />

        {/* Before image — full bleed */}
        <motion.img
          src={story.beforeImage}
          alt={story.beforeAlt}
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          width={1536}
          height={1024}
          className="pointer-events-none absolute -inset-y-5 left-0 h-[calc(100%+2.5rem)] w-full object-cover"
          style={{ y: imageY, scale: imageScale }}
        />

        {/* After image — clip‑path reveal */}
        <div
          className="absolute inset-0 overflow-hidden will-change-[clip-path]"
          style={{ clipPath: `inset(0 ${100 - reveal}% 0 0)` }}
        >
          <motion.img
            src={story.afterImage}
            alt={story.afterAlt}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            width={1536}
            height={1024}
            className="pointer-events-none absolute -inset-y-5 left-0 h-[calc(100%+2.5rem)] w-full max-w-none object-cover"
            style={{ y: imageY, scale: imageScale }}
          />

          {/* SVG storytelling overlay — tied to reveal% */}
          {story.id === "pre-mining" ? (
            <PreMiningSvg reveal={reveal} />
          ) : (
            <PostMiningSvg reveal={reveal} />
          )}

          {/* Interactive hotspots */}
          {story.hotspots.map((hs) => (
            <Hotspot
              key={hs.label}
              item={hs}
              accent={story.accent}
              visible={hotspotsVisible}
            />
          ))}
        </div>

        {/* Drag divider */}
        <DragDivider reveal={reveal} />

        {/* Corner state labels */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-between p-4 sm:p-6">
          <span
            className={`rounded-full border border-white/14 bg-black/52 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-opacity duration-500 ${
              reveal < 10 ? "opacity-100" : "opacity-72"
            }`}
          >
            {story.afterLabel}
          </span>
          <span
            className={`rounded-full border border-white/14 bg-black/52 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-opacity duration-500 ${
              reveal > 90 ? "opacity-100" : "opacity-72"
            }`}
          >
            {story.beforeLabel}
          </span>
        </div>

        {/* Bottom gradient fade */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-28 bg-gradient-to-t from-black/78 to-transparent" />

        {/* Stage timeline + CTA */}
        <StageTimeline
          stages={story.stages}
          activeIndex={activeIndex}
          accent={story.accent}
          story={story}
          onStageClick={handleStageClick}
        />
      </div>
    </motion.article>
  );
};
/* eslint-enable react/prop-types */

/* ═══════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════ */

const LifecycleSolutionCards = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden bg-neutral-50 py-20 sm:py-24 lg:py-32"
      aria-labelledby="lifecycle-solutions-heading"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      {/* Animated accent gradient sweep */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[-10%] top-[16%] h-px w-[120%] bg-gradient-to-r from-transparent via-red-300/60 to-transparent"
        animate={reduceMotion ? undefined : { x: ["-4%", "4%", "-4%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* ── Section header ── */}
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.72 }}
          className="mb-16 grid gap-6 border-b border-neutral-200 pb-10 lg:mb-24 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3 text-red-600">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                Transformation, made visible
              </span>
            </div>
            <h2
              id="lifecycle-solutions-heading"
              className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] text-neutral-950 sm:text-5xl lg:text-6xl"
            >
              One partner. Every stage of transformation.
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <MoveHorizontal aria-hidden="true" className="h-4 w-4" />
            Drag to transform each landscape
          </div>
        </motion.header>

        {/* ── Stories ── */}
        <div className="space-y-24 lg:space-y-36">
          {stories.map((story, i) => (
            <TransformationStory
              key={story.id}
              story={story}
              index={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* ── Footer caption ── */}
        <div className="mt-20 flex items-center justify-center gap-3 text-center text-xs uppercase tracking-[0.16em] text-neutral-400 lg:mt-28">
          <House aria-hidden="true" className="h-4 w-4 text-red-500" />
          Communities before mining
          <span className="h-px w-10 bg-neutral-300" />
          Landscapes beyond closure
          <Leaf aria-hidden="true" className="h-4 w-4 text-green-600" />
        </div>
      </div>
    </section>
  );
};

export default LifecycleSolutionCards;
