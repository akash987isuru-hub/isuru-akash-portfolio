import { useCallback, useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Services from "./sections/Services";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import useTilt3D from "./hooks/useTilt3D";

import "./App.css";
import "./theme.css";
import "./v2.css";

function App() {
  const [commandOpen, setCommandOpen] = useState(false);

  useTilt3D();

  const closeCommand = useCallback(() => setCommandOpen(false), []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleShortcut = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", handleShortcut);
    return () => document.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="app-shell">
      <Intro />
      <ScrollProgress />
      <CursorGlow />
      <CommandPalette open={commandOpen} onClose={closeCommand} />

      <div className="app-bg" aria-hidden="true">
        <span className="bg-orb orb-one" />
        <span className="bg-orb orb-two" />
        <span className="bg-orb orb-three" />
        <span className="grid-overlay" />
        <span className="noise-overlay" />
      </div>

      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      <main className="app-content">
        <Hero onOpenCommand={() => setCommandOpen(true)} />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
