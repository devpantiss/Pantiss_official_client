import { useRef, useState } from "react";
import { LockKeyhole, LogOut, MapPin, ChevronRight, Clock } from "lucide-react";
import "./MonitoringAccess.css";

// Same credentials as the Monitoring dashboard
const ADMIN_ID = import.meta.env.VITE_MONITORING_ADMIN_ID;
const ADMIN_PASSWORD = import.meta.env.VITE_MONITORING_ADMIN_PASSWORD;

// District PowerBI URLs — only Kalahandi is live; rest are null (Coming Soon)
const DISTRICT_POWERBI = {
  kalahandi:
    "https://app.powerbi.com/view?r=eyJrIjoiZDk3MzRjNGMtOGU1OC00Y2ZiLTg4NzMtOGUzYmRmNTM3MTEzIiwidCI6IjQ4NGVhM2IxLTU0YjYtNDhkYi04YzZhLWZkN2IyNWRhYzI1ZiJ9&pageName=bd6aec0f3274018289ea",
};

const STATES = [
  {
    id: "odisha",
    label: "Odisha",
    districts: [
      { id: "angul", label: "Angul" },
      { id: "jajpur", label: "Jajpur" },
      { id: "jharsuguda", label: "Jharsuguda" },
      { id: "kalahandi", label: "Kalahandi" },
      { id: "keonjhar", label: "Keonjhar" },
      { id: "sundargarh", label: "Sundargarh" },
    ],
  },
  {
    id: "jharkhand",
    label: "Jharkhand",
    districts: [
      { id: "bokaro", label: "Bokaro" },
      { id: "dhanbad", label: "Dhanbad" },
      { id: "koderma", label: "Koderma" },
    ],
  },
  {
    id: "chhattisgarh",
    label: "Chhattisgarh",
    districts: [{ id: "korba", label: "Korba" }],
  },
  {
    id: "assam",
    label: "Assam",
    districts: [
      { id: "dispur", label: "Dispur" },
      { id: "guwahati", label: "Guwahati" },
    ],
  },
  {
    id: "tamilnadu",
    label: "Tamil Nadu",
    districts: [{ id: "neyveli", label: "Neyveli" }],
  },
];

function StateTabs({ selectedState, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2 p-4 border-b border-zinc-800">
      {STATES.map((s) => (
        <button
          key={s.id}
          onClick={() => onSelect(s.id)}
          className={`px-4 py-2 rounded-md text-sm font-semibold transition-all ${
            selectedState === s.id
              ? "bg-red-600 text-white shadow-md"
              : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
          }`}
        >
          {s.label}
        </button>
      ))}
    </div>
  );
}

function DistrictCards({ state, onSelect }) {
  const stateData = STATES.find((s) => s.id === state);
  if (!stateData) return null;

  return (
    <div className="p-6">
      <p className="text-zinc-400 text-sm mb-4 flex items-center gap-1">
        <MapPin size={14} className="text-red-500" />
        Select a district in{" "}
        <span className="text-white font-medium ml-1">{stateData.label}</span>
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {stateData.districts.map((d) => {
          const isLive = Boolean(DISTRICT_POWERBI[d.id]);
          return (
            <button
              key={d.id}
              onClick={() => isLive && onSelect(d)}
              disabled={!isLive}
              title={isLive ? `Open ${d.label} dashboard` : `${d.label} — Coming Soon`}
              className={`relative group flex flex-col items-center justify-center gap-2 rounded-xl border p-4 text-sm font-medium transition-all ${
                isLive
                  ? "border-red-600/40 bg-zinc-900 text-white hover:border-red-500 hover:bg-zinc-800 cursor-pointer shadow-sm hover:shadow-md"
                  : "border-zinc-800 bg-zinc-900/60 text-zinc-500 cursor-not-allowed"
              }`}
            >
              {isLive && (
                <span className="absolute top-2 right-2 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
              )}
              {!isLive && (
                <span className="absolute top-2 right-2 text-[9px] font-semibold text-zinc-500 flex items-center gap-0.5">
                  <Clock size={8} /> Soon
                </span>
              )}
              <MapPin size={20} className={isLive ? "text-red-500" : "text-zinc-600"} />
              <span>{d.label}</span>
              {isLive && (
                <ChevronRight
                  size={14}
                  className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LoginGate({ district, onSuccess, onBack }) {
  const [error, setError] = useState("");
  const passwordInput = useRef(null);
  const configured = Boolean(ADMIN_ID && ADMIN_PASSWORD);

  function handleSubmit(e) {
    e.preventDefault();
    const values = new FormData(e.currentTarget);
    if (
      configured &&
      values.get("username") === ADMIN_ID &&
      values.get("password") === ADMIN_PASSWORD
    ) {
      e.currentTarget.reset();
      setError("");
      onSuccess();
      return;
    }
    setError("Incorrect ID or password. Please try again.");
    passwordInput.current.value = "";
    passwordInput.current.focus();
  }

  return (
    <section className="monitoring-access" aria-label="District dashboard access">
      <div className="monitoring-access__panel">
        <div className="monitoring-access__card">
          <button
            onClick={onBack}
            className="text-xs text-zinc-400 hover:text-white mb-4 flex items-center gap-1 transition-colors"
            style={{ background: "none", border: "none", padding: 0, minHeight: "unset" }}
          >
            ← Back to districts
          </button>
          <div className="monitoring-access__icon">
            <LockKeyhole size={24} aria-hidden="true" />
          </div>
          <h2>Sign in — {district.label} Dashboard</h2>
          <p>
            Enter your administrator ID and password to view the {district.label}{" "}
            district dashboard.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="district-login-id">ID</label>
            <input
              id="district-login-id"
              name="username"
              autoComplete="username"
              autoCapitalize="none"
              spellCheck={false}
              required
              autoFocus
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "district-login-error" : undefined}
            />
            <label htmlFor="district-login-password">Password</label>
            <input
              ref={passwordInput}
              id="district-login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "district-login-error" : undefined}
            />
            {error && (
              <p id="district-login-error" role="alert" className="monitoring-access__error">
                {error}
              </p>
            )}
            {!configured && <p role="status">District dashboard sign-in is currently unavailable.</p>}
            <button className="monitoring-access__submit" type="submit" disabled={!configured}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function DistrictViewer({ district, onSignOut }) {
  const [isLoading, setIsLoading] = useState(true);
  const url = DISTRICT_POWERBI[district.id];
  const VIEWER_CHROME_HEIGHT = 60;

  return (
    <>
      <div className="monitoring-access__toolbar">
        <span className="flex items-center gap-2">
          <MapPin size={14} className="text-red-500" />
          {district.label} District Dashboard
        </span>
        <button className="monitoring-access__signout" onClick={onSignOut}>
          <LogOut size={16} aria-hidden="true" /> Sign out
        </button>
      </div>
      <div
        className="relative isolate w-full overflow-hidden rounded-b-md bg-black"
        style={{ aspectRatio: "16 / 9" }}
        aria-busy={isLoading}
      >
        {isLoading && (
          <div
            role="status"
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/90"
          >
            <div className="relative mb-6">
              <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border-2 border-red-500/30" />
              <div
                className="h-16 w-16 rounded-full border-4 border-transparent border-t-red-500 border-r-red-500 animate-spin"
                style={{ animationDuration: "0.8s" }}
              />
            </div>
            <p className="text-white/60 text-sm font-medium tracking-wide animate-pulse">
              Loading {district.label} Dashboard…
            </p>
          </div>
        )}
        <iframe
          title={`${district.label} District Dashboard`}
          src={url}
          className="absolute inset-x-0 top-0 block w-full border-0"
          style={{ height: `calc(100% + ${VIEWER_CHROME_HEIGHT}px)` }}
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
}

export default function DistrictDashAccess() {
  const [step, setStep] = useState("select");
  const [selectedState, setSelectedState] = useState("odisha");
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  function handleDistrictSelect(district) {
    setSelectedDistrict(district);
    setStep("login");
  }

  function handleLoginSuccess() {
    setStep("view");
  }

  function handleBack() {
    setSelectedDistrict(null);
    setStep("select");
  }

  function handleSignOut() {
    setSelectedDistrict(null);
    setStep("select");
  }

  if (step === "view" && selectedDistrict) {
    return (
      <section className="monitoring-access" aria-label="District dashboard viewer">
        <DistrictViewer district={selectedDistrict} onSignOut={handleSignOut} />
      </section>
    );
  }

  if (step === "login" && selectedDistrict) {
    return (
      <LoginGate
        district={selectedDistrict}
        onSuccess={handleLoginSuccess}
        onBack={handleBack}
      />
    );
  }

  return (
    <section className="monitoring-access" aria-label="District dashboard selection">
      <div className="px-4 pt-5 pb-3 border-b border-zinc-800">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <MapPin size={18} className="text-red-500" />
          District Dashboard
        </h2>
        <p className="text-zinc-400 text-sm mt-1">
          Select a state and then choose a district to view its dashboard.
        </p>
      </div>
      <StateTabs selectedState={selectedState} onSelect={setSelectedState} />
      <DistrictCards state={selectedState} onSelect={handleDistrictSelect} />
    </section>
  );
}
