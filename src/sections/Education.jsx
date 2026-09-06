import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBookOpen,
} from "react-icons/fa";

import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="section-heading education-heading reveal">
          <span>05 — Journey</span>

          <h2>Learning, building, progressing.</h2>

          <p>
            My academic journey in computing and software engineering, where I
            continue to develop both theoretical knowledge and practical
            software development skills.
          </p>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            <div className="timeline-line"></div>

            <div className="education-item">
              <div className="timeline-marker">
                <FaGraduationCap />
              </div>

              <div className="education-card reveal">
                <div className="education-card-top">
                  <div>
                    <span className="education-status">
                      <span></span>
                      In Progress
                    </span>

                    <h3>
                      Higher Diploma in Computing and Software Engineering
                    </h3>
                  </div>

                  <div className="education-icon-large">
                    <FaGraduationCap />
                  </div>
                </div>

                <div className="education-institute">
                  <FaUniversity />

                  <div>
                    <span>Institution</span>

                    <p>
                      International College of Business and Technology (ICBT)
                    </p>
                  </div>
                </div>

                <div className="education-meta">
                  <div className="education-meta-item">
                    <FaCalendarAlt />

                    <div>
                      <span>Duration</span>
                      <p>Feb 2025 – Nov 2026</p>
                    </div>
                  </div>

                  <div className="education-meta-item">
                    <FaMapMarkerAlt />

                    <div>
                      <span>Country</span>
                      <p>Sri Lanka</p>
                    </div>
                  </div>
                </div>

                <div className="education-description">
                  <FaBookOpen />

                  <p>
                    Developing knowledge and practical skills in programming,
                    web development, software engineering, database systems,
                    application development, and modern software development
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="education-side-card reveal">
            <span className="side-label">Learning Journey</span>

            <h3>Building a Strong Software Engineering Foundation</h3>

            <p>
              My academic journey is helping me strengthen my understanding of
              software development while applying what I learn through practical
              projects and real-world system development.
            </p>

            <div className="education-focus-list">
              <div>
                <span></span>
                Software Development
              </div>

              <div>
                <span></span>
                Web Application Development
              </div>

              <div>
                <span></span>
                Database Systems
              </div>

              <div>
                <span></span>
                Mobile Application Development
              </div>

              <div>
                <span></span>
                Problem Solving
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
