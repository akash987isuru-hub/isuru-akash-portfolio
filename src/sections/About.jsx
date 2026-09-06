import {
  FaArrowTrendUp,
  FaCode,
  FaDatabase,
  FaLocationDot,
  FaRocket,
  FaServer,
} from "react-icons/fa6";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="section-heading reveal">
          <span>01 — About</span>
          <h2>Developer mindset, product focus.</h2>
          <p>
            I am building a strong software engineering foundation by combining
            academic learning with hands-on systems, APIs, databases and modern
            interfaces.
          </p>
        </div>

        <div className="about-bento">
          <article className="bento-card bento-intro reveal">
            <span className="bento-label">Who I am</span>
            <h3>Software Engineering Undergraduate & Full-Stack Developer</h3>
            <p>
              I enjoy transforming ideas into practical software. My work spans
              frontend experiences, backend APIs and database-driven systems,
              with an emphasis on clear structure, usability and continuous
              improvement.
            </p>
            <div className="bento-signature">ISURU AKASH / 2026</div>
          </article>

          <article className="bento-card bento-location reveal">
            <div className="bento-icon"><FaLocationDot /></div>
            <span className="bento-label">Based in</span>
            <h3>Sri Lanka 🇱🇰</h3>
            <p>Working locally, learning globally.</p>
          </article>

          <article className="bento-card bento-now reveal">
            <div className="bento-pulse"><span /></div>
            <span className="bento-label">Now</span>
            <h3>Building SiteVision</h3>
            <p>Construction management workflows, role-based dashboards and APIs.</p>
          </article>

          <article className="bento-card bento-stack reveal">
            <span className="bento-label">Core direction</span>
            <div className="bento-stack-list">
              <div><FaCode /><span>Frontend</span><strong>React / JS</strong></div>
              <div><FaServer /><span>Backend</span><strong>Node / .NET</strong></div>
              <div><FaDatabase /><span>Data</span><strong>MySQL / SQL Server</strong></div>
            </div>
          </article>

          <article className="bento-card bento-growth reveal">
            <div className="bento-icon"><FaArrowTrendUp /></div>
            <span className="bento-label">Current goal</span>
            <h3>Become an industry-ready software engineer.</h3>
            <p>
              Deepening full-stack development, API design, software architecture
              and production-minded engineering practices.
            </p>
          </article>

          <article className="bento-card bento-values reveal">
            <div className="bento-icon"><FaRocket /></div>
            <span className="bento-label">How I work</span>
            <div className="value-chips">
              <span>Learn fast</span>
              <span>Build practical</span>
              <span>Keep it clear</span>
              <span>Improve continuously</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
