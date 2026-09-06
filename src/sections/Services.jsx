import {
  FaLaptopCode,
  FaGlobe,
  FaMobileAlt,
  FaArrowRight,
} from "react-icons/fa";

import "./Services.css";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      description:
        "Building complete web applications by combining responsive frontend interfaces, backend APIs, and database integration.",
    },
    {
      icon: <FaGlobe />,
      title: "Web Development",
      description:
        "Creating modern, responsive, and user-friendly websites using current web technologies and clean development practices.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Exploring and developing practical mobile applications focused on usability, performance, and real-world requirements.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="section-heading services-heading reveal">
          <span>03 — Capabilities</span>

          <h2>What I can build.</h2>

          <p>
            Areas of software development that I am currently focused on and
            continuously improving.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card reveal" key={index}>
              <div className="service-number">0{index + 1}</div>

              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Let's Talk
                <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
