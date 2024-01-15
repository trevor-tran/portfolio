import { useRef } from "react";

import "./SideNavbar.scss";

export default function SideNavbar({ sectionId, onNavLinkClick }) {

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
    <div className="career-introduction">
      <h1 className="full-name">Trevor Tran</h1>
      <h4 className="job-title">Software Engineer</h4>
      <p className="headline">I build reliable and scalable apps</p>

      <nav className="navbar hidden">
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
    </div >
  )
}