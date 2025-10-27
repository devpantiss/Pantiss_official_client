import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StatItem {
  id: string;
  value: number;
  label: string;
  suffix?: string;
}

interface ImpactBannerProps {
  backgroundVideo?: string;
  headline?: string;
  subHeadline?: string;
  stats?: StatItem[];
  cta?: {
    text: string;
    onClick?: () => void;
  };
}

/* ---------------- Counter ---------------- */
const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end,
  duration = 1500,
  suffix = "",
}) => {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const progress = Math.min((timestamp - startRef.current) / duration, 1);
      const current = Math.floor(progress * end);
      setValue(current);

      if (progress < 1) requestAnimationFrame(step);
      else setValue(end);
    };

    requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
      {value.toLocaleString()}
      <span className="ml-1 text-lg font-medium">{suffix}</span>
    </span>
  );
};

/* ---------------- Main Component ---------------- */
const ImpactBanner: React.FC<ImpactBannerProps> = ({
  backgroundVideo = "https://res.cloudinary.com/djtzx6wo7/video/upload/v1761574973/3129785-uhd_3840_2160_25fps_ggzbsq.mp4",
  headline = "Our Impact So Far",
  subHeadline = "Driving change across communities & industries",
  stats = [
    { id: "emp", value: 120, label: "Total Employees" },
    { id: "proj", value: 85, label: "Projects" },
    { id: "dist", value: 13, label: "Districts Operating" },
    { id: "trained", value: "30+", label: "Field Experts" },
  ],
  cta = { text: "See Our Work" },
}) => {
  return (
    <section className="relative h-[500px] md:h-[300px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-[-2]">
        <video
          className="w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-[-1]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="text-green-400 uppercase text-sm font-semibold tracking-widest">
            Impact
          </p>

          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            {headline}
          </h1>

          <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0">
            {subHeadline}
          </p> */}

          {/* {cta?.text && (
            <button
              onClick={cta.onClick}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              {cta.text}
            </button>
          )} */}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((s) => (
            <div
              key={s.id}
              className="bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md p-6 rounded-2xl text-center"
            >
              <Counter end={s.value} suffix={s.suffix} />
              <p className="mt-2 text-gray-200 text-sm font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 w-full text-white/20">
        <svg viewBox="0 0 1440 80" className="w-full h-16" preserveAspectRatio="none">
          <path
            d="M0,32 C220,96 420,0 720,32 C1020,64 1220,0 1440,32 L1440 80 L0 80 Z"
            fill="currentColor"
            opacity="0.06"
          />
        </svg>
      </div>
    </section>
  );
};

export default ImpactBanner;
