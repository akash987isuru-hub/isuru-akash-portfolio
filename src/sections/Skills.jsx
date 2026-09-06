import {
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaFigma,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiDotnet, SiExpress, SiMysql } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import "./Skills.css";

const groups = [
  {
    title: "Frontend",
    note: "Interfaces that feel fast and intentional.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend",
    note: "APIs, business logic and server-side systems.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "C# / .NET", icon: <SiDotnet /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    title: "Data",
    note: "Structured, reliable application data.",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "SQL Server", icon: <FaDatabase /> },
    ],
  },
  {
    title: "Workflow",
    note: "Tools I use to design, build and ship.",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <VscVscode /> },
      { name: "Visual Studio", icon: <FaCode /> },
      { name: "Figma", icon: <FaFigma /> },
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="section-heading skills-heading reveal">
          <span>02 — Stack</span>
          <h2>Tools I use to turn ideas into systems.</h2>
          <p>
            A focused stack across interfaces, backend development, databases and
            day-to-day engineering workflow.
          </p>
        </div>

        <div className="skills-v2-grid">
          {groups.map((group, index) => (
            <article className="skill-v2-card reveal" key={group.title}>
              <div className="skill-v2-top">
                <span>0{index + 1}</span>
                <h3>{group.title}</h3>
              </div>
              <p>{group.note}</p>
              <div className="skill-icon-grid">
                {group.skills.map((skill) => (
                  <div className="skill-icon-tile" key={skill.name} title={skill.name}>
                    <div className="skill-logo">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="stack-marquee reveal" aria-label="Technology list">
          <div>
            <span>REACT</span><i>•</i><span>NODE.JS</span><i>•</i><span>EXPRESS</span><i>•</i><span>C#</span><i>•</i><span>JAVA</span><i>•</i><span>MYSQL</span><i>•</i><span>SQL SERVER</span><i>•</i><span>GIT</span><i>•</i>
            <span>REACT</span><i>•</i><span>NODE.JS</span><i>•</i><span>EXPRESS</span><i>•</i><span>C#</span><i>•</i><span>JAVA</span><i>•</i><span>MYSQL</span><i>•</i><span>SQL SERVER</span><i>•</i><span>GIT</span><i>•</i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
