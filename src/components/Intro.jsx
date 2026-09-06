import { useEffect, useState } from "react";
import "./Intro.css";

function Intro() {
  const [visible, setVisible] = useState(() => {
    try {
      return sessionStorage.getItem("isuru-portfolio-intro") !== "seen";
    } catch {
      return true;
    }
  });

  const finishIntro = () => {
    try {
      sessionStorage.setItem("isuru-portfolio-intro", "seen");
    } catch {
      // Session storage is optional; the intro still works without it.
    }
    setVisible(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (!visible) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(finishIntro, 2450);

    return () => {
      window.clearTimeout(exitTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="welcome-intro" aria-label="Opening Isuru Akash portfolio">
      <div className="intro-scan" aria-hidden="true" />

      <button className="intro-skip" type="button" onClick={finishIntro}>
        Skip intro
      </button>

      <div className="intro-terminal" aria-hidden="true">
        <div><span>01</span> initializing portfolio</div>
        <div><span>02</span> loading projects</div>
        <div><span>03</span> connecting developer profile</div>
        <div className="intro-ready"><span>04</span> ready</div>
      </div>

      <div className="intro-name-wrap">
        <span className="intro-eyebrow">SOFTWARE ENGINEERING • FULL-STACK</span>
        <h1 className="intro-name">ISURU AKASH</h1>
        <p>Code. Design. Build. Improve.</p>
      </div>

      <div className="intro-loader" aria-hidden="true"><span /></div>
    </div>
  );
}

export default Intro;
