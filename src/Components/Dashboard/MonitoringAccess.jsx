import { useRef, useState } from "react";
import { LockKeyhole, LogOut } from "lucide-react";
import Monitoring from "../../Pages/DashPages/Monitoring";
import "./MonitoringAccess.css";

// Temporary UI gate only: Vite environment values are public in the browser.
const ADMIN_ID = import.meta.env.VITE_MONITORING_ADMIN_ID;
const ADMIN_PASSWORD = import.meta.env.VITE_MONITORING_ADMIN_PASSWORD;

export default function MonitoringAccess() {
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const passwordInput = useRef(null);
  const configured = Boolean(ADMIN_ID && ADMIN_PASSWORD);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = new FormData(form);

    if (
      configured &&
      values.get("username") === ADMIN_ID &&
      values.get("password") === ADMIN_PASSWORD
    ) {
      form.reset();
      setError("");
      setAuthenticated(true);
      return;
    }

    setError("Incorrect ID or password. Please try again.");
    passwordInput.current.value = "";
    passwordInput.current.focus();
  }

  return (
    <section className="monitoring-access" aria-label="Monitoring access">
      {authenticated ? (
        <>
          <div className="monitoring-access__toolbar">
            <span>Monitoring dashboard</span>
            <button
              className="monitoring-access__signout"
              onClick={() => setAuthenticated(false)}
            >
              <LogOut size={16} aria-hidden="true" /> Sign out
            </button>
          </div>
          <Monitoring />
        </>
      ) : (
        <div className="monitoring-access__panel">
          <div className="monitoring-access__card">
            <div className="monitoring-access__icon">
              <LockKeyhole size={24} aria-hidden="true" />
            </div>
            <h2>Sign in to Monitoring</h2>
            <p>Enter your administrator ID and password to view the dashboard.</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="monitoring-id">ID</label>
              <input
                id="monitoring-id"
                name="username"
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                required
                autoFocus
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "monitoring-login-error" : undefined}
              />
              <label htmlFor="monitoring-password">Password</label>
              <input
                ref={passwordInput}
                id="monitoring-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "monitoring-login-error" : undefined}
              />
              {error && <p id="monitoring-login-error" role="alert" className="monitoring-access__error">{error}</p>}
              {!configured && <p role="status">Monitoring sign-in is currently unavailable.</p>}
              <button className="monitoring-access__submit" type="submit" disabled={!configured}>
                Sign in
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
