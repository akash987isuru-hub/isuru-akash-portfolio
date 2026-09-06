import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import "./Navbar.css";

function Navbar({ onOpenCommand }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);

      const sections = [
        "home",
        "about",
        "skills",
        "services",
        "projects",
        "education",
        "contact",
      ];

      let currentSection = "home";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItem = (id, label) => (
    <a
      href={`#${id}`}
      className={activeSection === id ? "active" : ""}
      onClick={closeMenu}
    >
      {label}
    </a>
  );

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Go to home">
          IA<span>.</span>
        </a>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItem("about", "About")}
          {navItem("skills", "Stack")}
          {navItem("projects", "Work")}
          {navItem("education", "Journey")}
          {navItem("contact", "Contact")}

          <button className="command-trigger" type="button" onClick={() => { closeMenu(); onOpenCommand(); }}>
            <span>Quick Nav</span>
            <kbd>⌘ K</kbd>
          </button>

          <a href="#contact" className="hire-btn" onClick={closeMenu}>
            Let's Talk ↗
          </a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
