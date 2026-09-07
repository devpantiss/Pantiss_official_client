import { useState } from "react";

const POWERBI_URL = import.meta.env.VITE_POWERBI_URL;

// Allow for the public viewer's zoom bar and footer below the 16:9 report.
// Recheck this crop if Power BI changes its viewer chrome.
const VIEWER_CHROME_HEIGHT = 60;

const Monitoring = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (!POWERBI_URL) {
    return (
      <div className="flex aspect-video items-center justify-center bg-black p-6 text-center text-white/60" role="status">
        The monitoring dashboard is currently unavailable.
      </div>
    );
  }

  return (
    <div
      className="relative isolate w-full overflow-hidden rounded-b-md bg-black"
      style={{ aspectRatio: "16 / 9" }}
      aria-busy={isLoading}
    >
      {/* Skeleton loader */}
      {isLoading && (
        <div
          role="status"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/90"
        >
          <div className="relative mb-6">
            {/* Pulsing rings */}
            <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-red-500/30" />
            <div
              className="h-16 w-16 rounded-full border-4 border-transparent border-t-red-500 border-r-red-500 animate-spin"
              style={{ animationDuration: "0.8s" }}
            />
          </div>
          <p className="text-white/60 text-sm font-medium tracking-wide animate-pulse">
            Loading Monitoring Dashboard…
          </p>
        </div>
      )}

      {/* Extra iframe height puts the viewer controls outside the visible panel.
          Navigation inside the report remains interactive. */}
      <iframe
        title="Pantiss Monitoring Dashboard"
        src={POWERBI_URL}
        className="absolute inset-x-0 top-0 block w-full border-0"
        style={{ height: `calc(100% + ${VIEWER_CHROME_HEIGHT}px)` }}
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default Monitoring;
