import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Droplets,
  GraduationCap,
  HeartPulse,
  Leaf,
  Lightbulb,
  MapPin,
  MoveHorizontal,
  School,
  Sprout,
  Sun,
  Tractor,
  Trees,
  House,
} from "lucide-react";
import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
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
    title: "Model Mining Villages",
    beforeLabel: "Existing Village",
    afterLabel: "Model Mining Village",
    beforeImage: "/assets/homepage/mining-lifecycle/pre-village-before.jpg",
    afterImage: "/assets/homepage/mining-lifecycle/pre-village-after.jpg",
    beforeAlt: "Aerial view of an existing rural village before planning",
    afterAlt: "Village transformed with planned roads and services",
    accent: "red",
    stages: ["Raw Village", "GIS Survey", "Infrastructure", "Services", "Community"],
    link: "/solutions/model-mining-villages",
    cta: "Explore Model Mining Villages",
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
    title: "Repurposed Village: In Abandoned Mines",
    beforeLabel: "Closed Mine",
    afterLabel: "Thriving Village",
    beforeImage: "/assets/homepage/mining-lifecycle/post-mine-before.jpg",
    afterImage: "/assets/homepage/mining-lifecycle/post-mine-after-village.png",
    beforeAlt: "Aerial view of a closed open-cast mine",
    afterAlt: "Former mine restored as a green rural village with homes, roads, and farmland",
    accent: "green",
    stages: ["Closed Mine", "Land Restored", "Village Planned", "Community Built", "Livelihoods"],
    link: "/solutions/repurposed-mining-villages",
    cta: "Explore Repurposed Villages",
    hotspots: [
      { label: "Village Homes", detail: "Safe, connected homes anchor the restored community.", x: 51, y: 62, Icon: House },
      { label: "Community School", detail: "Education is placed within easy reach of every family.", x: 65, y: 70, Icon: School },
      { label: "Green Belt", detail: "Native planting stabilizes the restored mine landscape.", x: 72, y: 39, Icon: Trees },
      { label: "Solar Power", detail: "Clean energy supports essential village services.", x: 31, y: 24, Icon: Sun },
      { label: "Village Farms", detail: "Cultivated plots create local food and livelihoods.", x: 42, y: 79, Icon: Tractor },
      { label: "Access Roads", detail: "Connected roads link homes, services, and nearby markets.", x: 59, y: 58, Icon: MapPin },
    ],
  },
];

/* ═══════════════════════════════════════════════
   SECTOR TAGS & VILLAGE DATA
═══════════════════════════════════════════════ */

const sectors = [
  { label: "Skill", Icon: GraduationCap },
  { label: "Livelihood", Icon: Sprout },
  { label: "Entrepreneurship", Icon: Lightbulb },
  { label: "Nutrition", Icon: HeartPulse },
  { label: "Sanitation", Icon: Droplets },
  { label: "Climate Change", Icon: Leaf },
];

const modelVillages = [
  { name: "Kuarmunda", district: "Sundargarh", state: "Odisha", lat: 22.2963, lng: 84.2307 },
  { name: "Banjari", district: "Jharsuguda", state: "Odisha", lat: 21.8637, lng: 83.9518 },
  { name: "Kiralaga", district: "Keonjhar", state: "Odisha", lat: 21.6370, lng: 85.5770 },
  { name: "Jurudi", district: "Jajpur", state: "Odisha", lat: 21.0390, lng: 86.1630 },
  { name: "Tensa", district: "Sundargarh", state: "Odisha", lat: 22.1850, lng: 84.7950 },
  { name: "Noamundi", district: "West Singhbhum", state: "Jharkhand", lat: 22.1609, lng: 85.5042 },
  { name: "Gua", district: "West Singhbhum", state: "Jharkhand", lat: 22.2136, lng: 85.3877 },
  { name: "Kiriburu", district: "West Singhbhum", state: "Jharkhand", lat: 22.1081, lng: 85.2920 },
  { name: "Chiria", district: "West Singhbhum", state: "Jharkhand", lat: 22.3086, lng: 85.2738 },
  { name: "Jadugora", district: "East Singhbhum", state: "Jharkhand", lat: 22.6574, lng: 86.3523 },
  { name: "Bhansi", district: "Dantewada", state: "Chhattisgarh", lat: 18.6337, lng: 81.2605 },
  { name: "Kirandul", district: "Dantewada", state: "Chhattisgarh", lat: 18.6360, lng: 81.2580 },
  { name: "Bacheli", district: "Dantewada", state: "Chhattisgarh", lat: 18.7036, lng: 81.2491 },
  { name: "Geedam", district: "Dantewada", state: "Chhattisgarh", lat: 18.9748, lng: 81.3987 },
  { name: "Dalli-Rajhara", district: "Balod", state: "Chhattisgarh", lat: 20.5780, lng: 81.0810 },
];

const repurposedVillages = [
  { name: "Talcher", district: "Angul", state: "Odisha", lat: 20.9540, lng: 85.2290 },
  { name: "Lakhanpur", district: "Jharsuguda", state: "Odisha", lat: 21.8700, lng: 83.8870 },
  { name: "Belpahar", district: "Jharsuguda", state: "Odisha", lat: 21.8380, lng: 83.8610 },
  { name: "Rajgangpur", district: "Sundargarh", state: "Odisha", lat: 22.2010, lng: 84.0960 },
  { name: "Sukinda", district: "Jajpur", state: "Odisha", lat: 20.9730, lng: 85.9320 },
  { name: "Jharia", district: "Dhanbad", state: "Jharkhand", lat: 23.7426, lng: 86.4111 },
  { name: "Rajrappa", district: "Ramgarh", state: "Jharkhand", lat: 23.6324, lng: 85.6993 },
  { name: "Kandra", district: "Seraikela-Kharsawan", state: "Jharkhand", lat: 22.8505, lng: 86.0517 },
  { name: "Ghatsila", district: "East Singhbhum", state: "Jharkhand", lat: 22.5853, lng: 86.4768 },
  { name: "Chaibasa", district: "West Singhbhum", state: "Jharkhand", lat: 22.5474, lng: 85.8025 },
  { name: "Dipka", district: "Korba", state: "Chhattisgarh", lat: 22.3567, lng: 82.5510 },
  { name: "Kusmunda", district: "Korba", state: "Chhattisgarh", lat: 22.3376, lng: 82.6441 },
  { name: "Gevra", district: "Korba", state: "Chhattisgarh", lat: 22.3342, lng: 82.6091 },
  { name: "Chhal", district: "Raigarh", state: "Chhattisgarh", lat: 22.1157, lng: 83.1826 },
  { name: "Korba", district: "Korba", state: "Chhattisgarh", lat: 22.3595, lng: 82.7501 },
];

/* ═══════════════════════════════════════════════
   AMBIENT BACKGROUND — drifting SVG contours
═══════════════════════════════════════════════ */

/* eslint-disable react/prop-types */
const AmbientBackground = ({ reduceMotion }) => {
  const color = "rgba(255,255,255,0.55)";
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
          className="absolute -right-12 -top-12 h-64 w-64 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.9), transparent 70%)",
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
  const gridOp = prog(reveal, 10, 32);
  const markerOp = prog(reveal, 24, 44);
  const roadP = prog(reveal, 36, 66);
  const pipeP = prog(reveal, 53, 73);
  const iconOp = prog(reveal, 64, 84);

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

const DragDivider = ({ left }) => (
  <motion.div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 z-30 w-[1.5px] bg-white/88 shadow-[0_0_28px_4px_rgba(255,255,255,0.45)]"
    style={{ left }}
  >
    {/* Handle */}
    <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/52 bg-black/72 text-white shadow-2xl backdrop-blur-2xl">
      <MoveHorizontal className="h-5 w-5" />
    </span>
  </motion.div>
);

/* ═══════════════════════════════════════════════
   STAGE LABEL — animated text morph
═══════════════════════════════════════════════ */

const StageLabel = ({ label }) => (
  <AnimatePresence mode="wait">
    <motion.span
      key={label}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="text-sm font-semibold tracking-wide text-white"
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
              className={`relative min-w-0 flex-1 rounded-full px-2 py-2 text-[9px] font-medium uppercase tracking-[0.08em] transition-colors duration-200 sm:text-[10px] ${isActive ? "text-white" : "text-white/38 hover:text-white/65"
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
   SECTOR TAGS — thematic focus area pills
═══════════════════════════════════════════════ */

const SectorTags = memo(function SectorTags({ reduceMotion }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 flex flex-wrap gap-3"
    >
      {sectors.map(({ label, Icon }) => (
        <span
          key={label}
          className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2.5 text-sm font-medium text-white shadow-sm backdrop-blur-md transition-all duration-200 hover:border-white/50 hover:bg-white/25"
        >
          <Icon className="h-4 w-4" />
          {label}
        </span>
      ))}
    </motion.div>
  );
});

/* ═══════════════════════════════════════════════
   VILLAGE TABLE — structured regional village data
═══════════════════════════════════════════════ */

const VillageTable = memo(function VillageTable({ villages, accent, title }) {
  const isGreen = accent === "green";

  return (
    <div className="flex h-full flex-col overflow-hidden border-l border-white/10">
      {/* Header */}
      <div className="shrink-0 border-b border-white/10 px-5 py-4 sm:px-6 sm:py-5">
        <h4 className="flex items-center gap-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-white/80">
          <MapPin className="h-4 w-4" aria-hidden="true" />
          {title}
        </h4>
        <p className="mt-1.5 text-sm text-white/60">
          Odisha · Jharkhand · Chhattisgarh
        </p>
      </div>

      {/* The table scrolls in both directions on smaller viewports. */}
      <div className="flex-1 overflow-auto [scrollbar-color:rgba(255,255,255,0.35)_transparent]">
        <table className="w-full min-w-[680px] border-collapse text-left text-white">
          <caption className="sr-only">
            {title} with their district, coordinates, and state
          </caption>
          <thead className="sticky top-0 z-10 bg-red-700/95 backdrop-blur-md">
            <tr className="border-b border-white/20">
              {["Village name", "District", "Coordinates", "State"].map((heading) => (
                <th
                  key={heading}
                  scope="col"
                  className="whitespace-nowrap px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/75"
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {villages.map((village) => (
              <tr
                key={`${village.state}-${village.name}`}
                className="border-b border-white/10 transition-colors duration-150 hover:bg-white/10"
              >
                <th
                  scope="row"
                  className="px-5 py-4 text-base font-semibold sm:text-lg"
                >
                  <span className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`h-2 w-2 shrink-0 rounded-full ${isGreen ? "bg-emerald-300" : "bg-white/70"}`}
                    />
                    {village.name}
                  </span>
                </th>
                <td className="px-5 py-4 text-base text-white/90">
                  {village.district}
                </td>
                <td className="whitespace-nowrap px-5 py-4 font-mono text-sm text-white/80">
                  {village.lat.toFixed(4)}° N, {village.lng.toFixed(4)}° E
                </td>
                <td className="px-5 py-4 text-base font-medium text-white/90">
                  {village.state}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
});

/* ═══════════════════════════════════════════════
   TRANSFORMATION STORY — one full story card
═══════════════════════════════════════════════ */

const TransformationStory = ({ story, index, reduceMotion, villages, reversed }) => {
  const sceneRef = useRef(null);
  const draggingRef = useRef(false);
  const animRef = useRef(null);

  /* ─ Motion value: clip-path + divider update directly in DOM, zero React re-renders ─ */
  const revealMV = useMotionValue(50);
  const clipPathMV = useTransform(revealMV, v => `inset(0 ${100 - v}% 0 0)`);
  const dividerLeftMV = useTransform(revealMV, v => `${v}%`);

  /* ─ Throttled React state — only for stage pills, hotspots, corner labels (~10fps) ─ */
  const [reveal, setReveal] = useState(50);
  useEffect(() => {
    let timer;
    const unsub = revealMV.on('change', v => {
      clearTimeout(timer);
      timer = setTimeout(() => setReveal(v), 100);
    });
    return () => { unsub(); clearTimeout(timer); };
  }, [revealMV]);

  /* ─ Auto-animation: framer-motion animate() handles timing, no JS loop ─ */
  const startAnim = useCallback(() => {
    if (reduceMotion) return;
    animRef.current?.stop();
    animRef.current = animate(revealMV, [18, 82], {
      duration: 10,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    });
  }, [reduceMotion, revealMV]);

  useEffect(() => {
    startAnim();
    return () => animRef.current?.stop();
  }, [startAnim]);

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


  /* ─ Pointer drag ─ */
  const setFromPointer = useCallback((event) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const bounds = scene.getBoundingClientRect();
    const value = clamp(((event.clientX - bounds.left) / bounds.width) * 100, 0, 100);
    revealMV.set(value);
    setReveal(value); // immediate update for stage label on drag
  }, [revealMV]);

  const handlePointerDown = (e) => {
    animRef.current?.stop(); // pause auto-animation while dragging
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromPointer(e);
  };
  const handlePointerMove = (e) => { if (draggingRef.current) setFromPointer(e); };
  const stopDragging = () => {
    draggingRef.current = false;
    startAnim(); // resume from current position
  };

  const handleStageClick = (i) => {
    const val = (i / (story.stages.length - 1)) * 100;
    revealMV.set(val);
    setReveal(val);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: reduceMotion ? 0 : 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.88, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {/* ── Story header ── */}
      <div className="mb-6 flex flex-col items-center gap-3 px-4 text-center sm:mb-8 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5">
          <span className="h-px w-8 bg-white/30" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-white/55">
            {story.number} — {story.eyebrow}
          </span>
          <span className="h-px w-8 bg-white/30" />
        </div>
        <h3 className="whitespace-pre-line text-4xl font-medium tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.5rem]">
          {story.title}
        </h3>
        {/* Live stage indicator */}
        <div className="flex items-center gap-2 text-sm text-white/60">
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40">
            Now viewing
          </span>
          <span className="h-px w-4 bg-white/20" />
          <StageLabel label={activeLabel} />
        </div>
      </div>

      {/* ── Sector Tags ── */}
      <div className="mb-2 flex justify-center px-4 sm:px-6 lg:px-8">
        <SectorTags reduceMotion={reduceMotion} />
      </div>

      {/* ── Split Content: Image + Village List ── */}
      {/* Flex row: image drives height, marquee col stretches & fills absolutely */}
      <div className={`flex flex-col lg:flex-row ${reversed ? "lg:flex-row-reverse" : ""}`}>
        {/* Image — flex 2 */}
        <div className="lg:flex-[2]">
          <div
            ref={sceneRef}
            className="group/scene relative aspect-[16/10] touch-none select-none overflow-hidden bg-neutral-900 shadow-[0_44px_110px_-52px_rgba(10,10,10,0.62)] sm:aspect-[16/9]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerCancel={stopDragging}
            onDoubleClick={() => { const v = revealMV.get() < 50 ? 100 : 0; revealMV.set(v); setReveal(v); }}
            role="img"
            aria-label={`Interactive before‑after comparison: ${story.beforeLabel} vs ${story.afterLabel}`}
          >
            {/* Ambient background motion */}
            <AmbientBackground reduceMotion={reduceMotion} />

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

            {/* After image — clip‑path reveal — motion.div for zero-re-render updates */}
            <motion.div
              className="absolute inset-0 overflow-hidden will-change-[clip-path]"
              style={{ clipPath: clipPathMV }}
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
              {story.id === "pre-mining" && <PreMiningSvg reveal={reveal} />}

              {/* Interactive hotspots */}
              {story.hotspots.map((hs) => (
                <Hotspot
                  key={hs.label}
                  item={hs}
                  accent={story.accent}
                  visible={hotspotsVisible}
                />
              ))}
            </motion.div>

            {/* Drag divider — driven by motion value, no re-render */}
            <DragDivider left={dividerLeftMV} />

            {/* Corner state labels */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex justify-between p-4 sm:p-6">
              <span
                className={`rounded-full border border-white/14 bg-black/52 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-opacity duration-500 ${reveal < 10 ? "opacity-100" : "opacity-72"
                  }`}
              >
                {story.afterLabel}
              </span>
              <span
                className={`rounded-full border border-white/14 bg-black/52 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-opacity duration-500 ${reveal > 90 ? "opacity-100" : "opacity-72"
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
        </div>

        {/* Village table — constrained to the image height on desktop */}
        <div className="h-[360px] overflow-hidden lg:relative lg:h-auto lg:flex-[1]">
          <div className="h-full overflow-hidden lg:absolute lg:inset-0">
            <VillageTable
              villages={villages}
              accent={story.accent}
              title={reversed ? "Repurposed Mining Villages" : "Model Mining Villages"}
            />
          </div>
        </div>
      </div>

      {/* ── Dedicated solution page action ── */}
      <div className="flex justify-center px-4 pt-7 sm:px-6 sm:pt-9 lg:px-8">
        <Link
          to={story.link}
          aria-label={`${story.cta}: ${story.title}`}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white/30 bg-white px-7 py-3 text-sm font-semibold text-red-600 shadow-[0_16px_40px_-18px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-neutral-50 hover:shadow-[0_20px_48px_-18px_rgba(0,0,0,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-red-600"
        >
          Explore
          <ArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
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
      className="relative overflow-hidden bg-red-600 pb-6 sm:pb-8 lg:pb-10"
      aria-labelledby="lifecycle-solutions-heading"
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)",
        }}
      />

      {/* Animated accent gradient sweep */}
      <motion.div
        aria-hidden="true"
        className="absolute left-[-10%] top-[16%] h-px w-[120%] bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={reduceMotion ? undefined : { x: ["-4%", "4%", "-4%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative">
        {/* ── Section header ── */}
        <motion.header
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.65 }}
          transition={{ duration: 0.72 }}
          className="mb-10 flex flex-col items-center bg-white px-4 pb-10 pt-8 text-center sm:px-6 sm:pt-10 lg:mb-14 lg:px-8 lg:pt-14"
        >
          {/* Eyebrow — matches Heading component style */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-6 w-1 bg-red-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-red-600">
              Transformation, Made Visible
            </span>
          </div>

          {/* Main heading */}
          <h2
            id="lifecycle-solutions-heading"
            className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-neutral-950 sm:text-5xl lg:text-6xl"
          >
            OUR SOLUTIONS
          </h2>

          {/* Drag hint */}
          <div className="mt-6 flex items-center gap-1.5 text-xs text-neutral-400">
            <MoveHorizontal aria-hidden="true" className="h-4 w-4" />
            Drag the slider to transform each landscape
          </div>
        </motion.header>

        {/* ── Stories ── */}
        <div className="space-y-8 lg:space-y-12">
          {stories.map((story, i) => (
            <TransformationStory
              key={story.id}
              story={story}
              index={i}
              reduceMotion={reduceMotion}
              villages={i === 0 ? modelVillages : repurposedVillages}
              reversed={i === 1}
            />
          ))}
        </div>

        {/* ── Footer caption ── */}
        <div className="mt-20 flex items-center justify-center gap-3 text-center text-xs uppercase tracking-[0.16em] text-white/50 lg:mt-28">
          <House aria-hidden="true" className="h-4 w-4 text-white/70" />
          Communities before mining
          <span className="h-px w-10 bg-white/30" />
          Landscapes beyond closure
          <Leaf aria-hidden="true" className="h-4 w-4 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default LifecycleSolutionCards;
