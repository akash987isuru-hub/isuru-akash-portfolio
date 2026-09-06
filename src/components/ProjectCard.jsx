import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa6";

import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      {/* Project Visual */}
      <div className="project-visual">
        <span className="project-visual-number">{project.number}</span>

        <div className="project-decoration circle-one"></div>
        <div className="project-decoration circle-two"></div>

        <div className="project-visual-content">
          <div className="project-code-symbol">
            <FaLaptopCode />
          </div>

          <div className="project-visual-logo">{project.visual}</div>

          <p>{project.subtitle}</p>
        </div>

        <span className="project-type">{project.type}</span>
      </div>

      {/* Project Information */}
      <div className="project-content">
        <div className="project-top">
          <span className="project-status">
            <span></span>
            {project.status}
          </span>

          <FaCode className="project-code-icon" />
        </div>

        <h3>{project.title}</h3>

        <h4>{project.subtitle}</h4>

        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {project.technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-main-btn"
            >
              <FaGithub />
              GitHub Repository
              <FaArrowUpRightFromSquare />
            </a>
          ) : (
            <button
              type="button"
              className="project-main-btn disabled-project-btn"
              disabled
            >
              <FaGithub />
              GitHub Coming Soon
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
