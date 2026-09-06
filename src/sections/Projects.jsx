import { useEffect, useRef, useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

import "./Projects.css";

function Projects() {
  const trackRef = useRef(null);

  const [activeProject, setActiveProject] = useState(0);

  /*
    =========================
    SCROLL TO PROJECT
    =========================
  */

  const scrollToProject = (index) => {
    const track = trackRef.current;

    if (!track) return;

    const slides = track.querySelectorAll(".project-slide");

    const targetSlide = slides[index];

    if (!targetSlide) return;

    targetSlide.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    setActiveProject(index);
  };

  /*
    =========================
    PREVIOUS
    =========================
  */

  const handlePrevious = () => {
    const newIndex =
      activeProject === 0 ? projects.length - 1 : activeProject - 1;

    scrollToProject(newIndex);
  };

  /*
    =========================
    NEXT
    =========================
  */

  const handleNext = () => {
    const newIndex =
      activeProject === projects.length - 1 ? 0 : activeProject + 1;

    scrollToProject(newIndex);
  };

  /*
    =========================
    DETECT CURRENT PROJECT
    =========================
  */

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationFrame;

    const handleScroll = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        const slides = [...track.querySelectorAll(".project-slide")];

        if (!slides.length) return;

        const trackCenter =
          track.getBoundingClientRect().left + track.clientWidth / 2;

        let closestIndex = 0;

        let closestDistance = Infinity;

        slides.forEach((slide, index) => {
          const rect = slide.getBoundingClientRect();

          const slideCenter = rect.left + rect.width / 2;

          const distance = Math.abs(trackCenter - slideCenter);

          if (distance < closestDistance) {
            closestDistance = distance;

            closestIndex = index;
          }
        });

        setActiveProject(closestIndex);
      });
    };

    track.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      track.removeEventListener("scroll", handleScroll);

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  /*
    =========================
    KEYBOARD CONTROLS
    =========================
  */

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();

      handleNext();
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();

      handlePrevious();
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* =========================
            HEADING
        ========================= */}

        <div className="section-heading projects-heading reveal">
          <span>04 — Selected Work</span>

          <h2>Projects built to solve real problems.</h2>

          <p>
            A selection of projects that demonstrate my experience in web
            development, mobile application development and software
            engineering.
          </p>
        </div>

        {/* =========================
            CAROUSEL TOP
        ========================= */}

        <div className="projects-carousel-top reveal">
          <div className="project-counter">
            <span className="current-project-number">
              {String(activeProject + 1).padStart(2, "0")}
            </span>

            <span className="project-counter-line"></span>

            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <div className="project-navigation">
            <button
              type="button"
              className="project-nav-btn"
              onClick={handlePrevious}
              aria-label="Previous project"
            >
              <FaArrowLeft />
            </button>

            <button
              type="button"
              className="project-nav-btn"
              onClick={handleNext}
              aria-label="Next project"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* =========================
            HORIZONTAL PROJECT TRACK
        ========================= */}

        <div
          ref={trackRef}
          className="projects-track"
          tabIndex="0"
          onKeyDown={handleKeyDown}
        >
          {projects.map((project, index) => (
            <div
              className={`project-slide ${
                activeProject === index ? "active-project-slide" : ""
              }`}
              key={project.id}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* =========================
            DOT NAVIGATION
        ========================= */}

        <div className="project-dots">
          {projects.map((project, index) => (
            <button
              type="button"
              key={project.id}
              className={`project-dot ${
                activeProject === index ? "active" : ""
              }`}
              onClick={() => scrollToProject(index)}
              aria-label={`View project ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* =========================
            ORIGINAL FOOTER
        ========================= */}

        <div className="projects-footer reveal">
          <p>Interested in seeing more of my work?</p>

          <a
            href="https://github.com/akash987isuru-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore My GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
