import { useEffect } from "react";
import "./CursorGlow.css";

function CursorGlow() {
  useEffect(() => {
    const update = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return <div className="cursor-glow" aria-hidden="true" />;
}

export default CursorGlow;
