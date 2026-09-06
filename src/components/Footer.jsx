import { useEffect, useState } from "react";
import { FaArrowUp, FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopButton(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">ISURU<span>AKASH</span></a>
            <p>Software Engineering Undergraduate building practical full-stack software and learning by shipping real projects.</p>
            <div className="footer-socials">
              <a href="https://github.com/akash987isuru-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/isuru-akash/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>

          <div className="footer-links-section">
            <h3>Explore</h3>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#skills">Stack</a>
              <a href="#projects">Work</a>
              <a href="#education">Journey</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Get In Touch</h3>
            <a href="mailto:isuru.a.mallawa@gmail.com">isuru.a.mallawa@gmail.com</a>
            <p>Polonnaruwa, Sri Lanka</p>
            <span className="footer-status"><i /> Open to opportunities</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Isuru Akash. All rights reserved.</p>
          <span>Designed & built with React + Vite</span>
        </div>
      </footer>

      {showTopButton && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}
    </>
  );
}

export default Footer;
