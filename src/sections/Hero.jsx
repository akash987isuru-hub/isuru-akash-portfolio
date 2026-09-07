import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaEye,
  FaGithub,
  FaLinkedinIn,
  FaTerminal,
} from "react-icons/fa6";

import profileImage from "../assets/profile.png";
import "./Hero.css";

const roles = [
  "Software Engineering Undergraduate",
  "Full-Stack Developer in Progress",
  "Builder of Real-World Software",
];

function Hero({ onOpenCommand }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[roleIndex];
    const complete = displayText === target;
    const empty = displayText.length === 0;

    const delay = complete ? 1500 : deleting ? 32 : 58;

    const timer = window.setTimeout(() => {
      if (!deleting) {
        if (complete) {
          setDeleting(true);
        } else {
          setDisplayText(target.slice(0, displayText.length + 1));
        }
      } else if (empty) {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setDisplayText(target.slice(0, displayText.length - 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-availability">
            <span className="availability-dot" />
            Open to internship & collaboration opportunities
          </div>

          <p className="hero-kicker">Software • Systems • Interfaces</p>

          <h1>
            ISURU
            <span>AKASH</span>
          </h1>

          <div className="hero-type-line" aria-live="polite">
            <span className="type-prompt">&gt;</span>
            <span>{displayText}</span>
            <span className="type-caret" aria-hidden="true" />
          </div>

          <p className="hero-description">
            I build thoughtful digital products across frontend, backend and
            database systems — turning practical ideas into clean, responsive
            software experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Selected Work <FaArrowRight />
            </a>

            <button type="button" className="secondary-btn command-hero-btn" onClick={onOpenCommand}>
              <FaTerminal /> Quick Navigate
            </button>
          </div>

          <div className="cv-buttons" aria-label="Curriculum vitae actions">
            <a
              href="/Isuru_Akash_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-btn"
            >
              <FaEye /> View CV
            </a>

            <a
              href="/Isuru_Akash_CV.pdf"
              download="Isuru_Akash_CV.pdf"
              className="cv-btn"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="hero-meta-row">
            <div>
              <span>Based in</span>
              <strong>Sri Lanka</strong>
            </div>
            <div>
              <span>Focus</span>
              <strong>Full-Stack & APIs</strong>
            </div>
            <div>
              <span>Currently building</span>
              <strong>SiteVision</strong>
            </div>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/akash987isuru-hub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/isuru-akash/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="mailto:isuru.a.mallawa@gmail.com"
              aria-label="Email Isuru Akash"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />

          <div className="profile-frame">
            <div className="profile-topbar">
              <span /> <span /> <span />
              <small>isuru.dev</small>
            </div>
            <img src={profileImage} alt="Isuru Akash" />
          </div>

          <div className="floating-card card-one">
            <span className="card-dot cyan" />
            <div>
              <strong>Full Stack</strong>
              <small>React • Node • SQL</small>
            </div>
          </div>

          <div className="floating-card card-two">
            <span className="card-dot violet" />
            <div>
              <strong>Now Building</strong>
              <small>SiteVision</small>
            </div>
          </div>

          <div className="hero-code-chip" aria-hidden="true">
            <span>01</span>
            <code>build(idea) → product</code>
          </div>
        </div>
      </div>

      <a className="hero-scroll-cue" href="#about" aria-label="Scroll to about section">
        <span>Scroll to explore</span>
        <i />
      </a>
    </section>
  );
}

export default Hero;
