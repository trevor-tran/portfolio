import { useRef } from "react";
import { Link } from "react-scroll";
import { persona } from "../utils/aboutme";

import "./Navbar.scss";

export default function Navbar({ sectionId }) {
  const prevSectionId = useRef("");

  if (sectionId && prevSectionId.current !== sectionId) {
    prevSectionId.current && document.getElementById(`${prevSectionId.current}_link`).classList.remove("navbar-link-active");
    document.getElementById(`${sectionId}_link`).classList.add("navbar-link-active");
    console.log(sectionId)
    prevSectionId.current = sectionId;
  }

  return (
    <>
      <div className="navbar-container">
        <h1>{persona.name}</h1>
        <h4>{persona.title}</h4>
        <p>{persona.headline}</p>
        <nav className="navbar">
          <ul>
            <li>
              <Link id="about_link" className="navbar-link" to="about">
                <span className="navbar-link-indicator" />
                <span>about</span>
              </Link>
            </li>
            <li>
              <Link id="experience_link" className="navbar-link" to="experience">
                <span className="navbar-link-indicator" />
                <span>experience</span>
              </Link>
            </li>
            <li>
              <Link id="projects_link" className="navbar-link" to="projects">
                <span className="navbar-link-indicator" />
                <span>projects</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}