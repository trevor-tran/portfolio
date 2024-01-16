import { useRef } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import {persona} from "../../utils/aboutme"

import "./Navbar.scss";

export default function Navbar({ sectionId, onNavLinkClick }) {
  const prevSectionId = useRef("");

  if (sectionId && prevSectionId.current !== sectionId) {
    prevSectionId.current && document.getElementById(`${prevSectionId.current}_link`).classList.remove("navbar-link-active");
    document.getElementById(`${sectionId}_link`).classList.add("navbar-link-active");

    prevSectionId.current = sectionId;
  }

  // setting the clicked link is the only active link
  function handleNavItemClick(event) {
    const hrefAttr = document.getElementById(event.currentTarget.id).getAttribute("href");
    onNavLinkClick(hrefAttr.replace("#", ""));
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
              <a id="about_link" className="navbar-link" href="#about" onClick={handleNavItemClick}>
                <span className="navbar-link-indicator" />
                <span>about</span>
              </a>
            </li>
            <li>
              <a id="experience_link" className="navbar-link" href="#experience" onClick={handleNavItemClick}>
                <span className="navbar-link-indicator" />
                <span>experience</span>
              </a>
            </li>
            <li>
              <a id="projects_link" className="navbar-link" href="#projects" onClick={handleNavItemClick}>
                <span className="navbar-link-indicator" />
                <span>projects</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="social-profile">
        <a className="navbar-link" href="https://www.linkedin.com/in/trevorpt/" target="_blank">
          <LinkedInIcon fontSize="large"/>
        </a>
        <a className="navbar-link" href="https://github.com/trevor-tran" target="_blank">
          <GitHubIcon fontSize="large"/>
        </a>
      </div>
    </>
  )
}