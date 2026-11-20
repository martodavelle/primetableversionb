import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { variant, track, consent, setConsent, loadClarity } from "./pt";
import { startApp } from "./primeTable";

const NOTICE =
  "This class prototype records which version you saw and what you pressed, to test a design. Nothing about your visit leaves this browser unless you agree.";
const CTA_LABEL = "Apply for membership";

function ConsentNotice() {
  const [choice, setChoice] = useState(consent());
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.toggle("has-consent", choice === null);
  }, [choice]);

  // Keep panels and pop-ups above the notice while it is showing.
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const setH = () => document.documentElement.style.setProperty("--consent-h", el.offsetHeight + "px");
    setH();
    const ro = new ResizeObserver(setH);
    ro.observe(el);
    return () => ro.disconnect();
  }, [choice]);

  if (choice !== null) return null;

  const choose = (c: "granted" | "denied") => {
    setConsent(c);
    setChoice(c);
  };

  return (
    <div ref={box} className="consent" role="region" aria-label="Privacy notice">
      <p>{NOTICE}</p>
      <div className="consent-btns">
        <button type="button" className="consent-btn" onClick={() => choose("granted")}>Accept</button>
        <button type="button" className="consent-btn" onClick={() => choose("denied")}>Decline</button>
      </div>
    </div>
  );
}

export default function App() {
  // Read the version once, when the screen first renders.
  const [v] = useState(variant);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    if (consent() === "granted") loadClarity();

    startApp({ variant: v, onApplied: () => track("goal_complete") });
    track("screen_view");

    // The main button: any button labelled "Apply for membership".
    const onClick = (e: MouseEvent) => {
      const b = (e.target as HTMLElement | null)?.closest("button");
      if (b && b.textContent?.trim() === CTA_LABEL) track("cta_click");
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [v]);

  return (
    <>
      <header className="top">
        <div className="banner" role="note">Prototype – restaurants listed are not partners. No real bookings.</div>
        <div className="wrap row">
          <button className="brand" data-action="nav" data-view="landing" aria-label="Prime Table home">
            PRIME <span>TABLE</span>
          </button>
          <div className="hdr-right">
            <button className="profbtn" data-action="profile" aria-haspopup="dialog" aria-label="My Profile">
              <span className="av" id="avatar" aria-hidden="true">•</span>
              <span className="plabel">My Profile</span>
            </button>
            <button className="helpbtn" data-action="help" aria-label="Help and FAQ" title="Help and FAQ (press ?)">?</button>
          </div>
        </div>
      </header>
      <main id="main" className="wrap"></main>
      <nav id="nav" className="nav" aria-label="Main"></nav>
      <div id="sheet" className="sheet" hidden>
        <div className="sheet-bg" data-action="close"></div>
        <div className="sheet-card" role="dialog" aria-modal="true">
          <button className="x" data-action="close" aria-label="Close">×</button>
          <div id="sheetBody"></div>
        </div>
      </div>
      <div id="toasts" className="toasts" aria-live="polite"></div>
      <ConsentNotice />
    </>
  );
}
