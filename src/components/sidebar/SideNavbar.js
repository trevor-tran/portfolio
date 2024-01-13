import { useEffect } from "react";
import "./SideNavbar.scss";
export default function SideNavbar({section}) {


    useEffect(() => {
      if (!section) {
        return;
      }

      const elements = getLinks();
      elements.forEach(item => {
        item.classList.remove("navbar-link-active");
      });

      document.getElementById(section).classList.add("navbar-link-active");
    },[section])

    // setting the clicked link is the only active link
    function handleNavItemClick(event){
      const elements = getLinks();
      elements.forEach(item => {
        console.log(item)
        item.classList.remove("navbar-link-active");
      });

      event.currentTarget.classList.add("navbar-link-active");
    }

    function getLinks() {
      return Array.from(document.getElementsByClassName("navbar-link"));
    }

  return (
    <>
      <div className="description">
        <h1 className="full-name">Trevor Tran</h1>
        <h4 className="job-title">Software Engineer</h4>
        <p className="headline">I build reliable and scalable apps</p>

        <nav className="navbar hidden">
          <ul>
            <li>
              <a id="about" className="navbar-link" href="#about" onClick={handleNavItemClick}>
                <span className="navbar-link-indicator" />
                <span>about</span>
              </a>
            </li>
            <li>
              <a id="experience" className="navbar-link" href="#experience" onClick={handleNavItemClick}>
                <span className="navbar-link-indicator" />
                <span>experience</span>
              </a>
            </li>
            <li>
              <a id="projects" className="navbar-link" href="#projects" onClick={handleNavItemClick}>
                <span className="navbar-link-indicator" />
                <span>projects</span>
              </a>
            </li>
          </ul>
        </nav>
      </div >
    </>
  )
}