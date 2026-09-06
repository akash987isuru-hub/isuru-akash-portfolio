import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaGraduationCap,
  FaHouse,
  FaLinkedinIn,
  FaUser,
  FaXmark,
} from "react-icons/fa6";

import "./CommandPalette.css";

const actions = [
  { label: "Go to Home", hint: "01", icon: <FaHouse />, href: "#home" },
  { label: "About Isuru", hint: "02", icon: <FaUser />, href: "#about" },
  { label: "Explore Tech Stack", hint: "03", icon: <FaCode />, href: "#skills" },
  { label: "View Projects", hint: "04", icon: <FaBriefcase />, href: "#projects" },
  { label: "Education Journey", hint: "05", icon: <FaGraduationCap />, href: "#education" },
  {
    label: "Open GitHub",
    hint: "↗",
    icon: <FaGithub />,
    href: "https://github.com/akash987isuru-hub",
    external: true,
  },
  {
    label: "Open LinkedIn",
    hint: "↗",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/isuru-akash/",
    external: true,
  },
  {
    label: "Send Email",
    hint: "↗",
    icon: <FaEnvelope />,
    href: "mailto:isuru.a.mallawa@gmail.com",
  },
];

function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const filteredActions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return actions;
    return actions.filter((action) =>
      action.label.toLowerCase().includes(normalized),
    );
  }, [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(0);
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) =>
          Math.min(index + 1, Math.max(filteredActions.length - 1, 0)),
        );
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) => Math.max(index - 1, 0));
      }
      if (event.key === "Enter" && filteredActions[activeIndex]) {
        event.preventDefault();
        const action = filteredActions[activeIndex];
        if (action.external) {
          window.open(action.href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = action.href;
        }
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, activeIndex, filteredActions, onClose]);

  if (!open) return null;

  return (
    <div className="command-backdrop" onMouseDown={onClose} role="presentation">
      <div
        className="command-palette"
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio command palette"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="command-search-row">
          <span className="command-prompt">⌘</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActiveIndex(0);
            }}
            placeholder="Search portfolio..."
            aria-label="Search portfolio actions"
          />
          <button type="button" onClick={onClose} aria-label="Close command palette">
            <FaXmark />
          </button>
        </div>

        <div className="command-list">
          {filteredActions.length ? (
            filteredActions.map((action, index) => (
              <a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                className={`command-item ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={onClose}
              >
                <span className="command-icon">{action.icon}</span>
                <span>{action.label}</span>
                <kbd>{action.hint}</kbd>
              </a>
            ))
          ) : (
            <div className="command-empty">No matching action.</div>
          )}
        </div>

        <div className="command-footer">
          <span>↑↓ Navigate</span>
          <span>↵ Open</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
}

export default CommandPalette;
