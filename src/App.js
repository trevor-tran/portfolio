import { useEffect, useState } from "react";

import Home from "./components/home/Home";
import SideNavbar from "./components/sidebar/Navbar";
import ProjectDescription from "./components/ProjectDescription";
import FavoriteIcon from '@mui/icons-material/Favorite';

import './App.scss';

//data
import { experiences, projects, persona } from "./utils/aboutme";

function App() {
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      setActiveSectionId(getActiveSectionId());
      setSideBarSticky();
    }
  }, [window.scrollY])


  function getActiveSectionId() {
    let sectionId = "";
    const sections = Array.from(document.getElementsByTagName("section"));
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop) {
        sectionId = section.id;
      }
    })
    return sectionId;
  }

  function setSideBarSticky() {
    if (window.scrollY >= window.innerHeight) {
      document.getElementById("sidebar").classList.add("sticky-top");
    } else {
      document.getElementById("sidebar").classList.remove("sticky-top");
    }
  }

  return (
    <div className="App container-fluid p-0">
      <div className="row vw-100 vh-100">
        {/* page shown when first loaded */}
        <div className="col">
          <Home />
        </div>
      </div>

      <div className="row content-container">
        {/* left half of page: quick intro + nav links  */}
        <div id="sidebar" className="navbar-container col-4 vh-100">
          <SideNavbar sectionId={activeSectionId} onNavLinkClick={setActiveSectionId} />
        </div>

        <div className="col-1" />

        <div className="col">
          {/* about section */}
          <section id="about" className="section-container">
            {persona.intro.map((paragraph, i) =>
              <p key={i}>{paragraph}</p>
            )}
          </section>

          {/* experience section */}
          <section id="experience" className="section-container container-fluid">
            {experiences.map((exp, i) =>
              <div key={i} className="project-container row">
                <div className="col-4 date">
                  {exp.date.start.toUpperCase()} <span>&#8212;</span> {exp.date.end.toUpperCase()}
                </div>
                <div className="col">
                  <ProjectDescription headline={`${exp.title} @ ${exp.company}`} descriptions={exp.descriptions} skills={exp.skills} />
                </div>
              </div>
            )}
          </section>

          {/* projects section */}
          <section id="projects" className="section-container">
            {projects.map((project, i) =>
              <div key={i} className="project-container row">
                <div className="col-4 date">
                  {`${project.date.start.toUpperCase()} - ${project.date.end.toUpperCase()}`}
                </div>
                <div className="col">
                  <ProjectDescription headline={project.title} descriptions={project.descriptions} skills={project.skills} />
                </div>
              </div>
            )}
          </section>

          <section className="footer">
            <p>
              {`With love and appreciation to Brittany Chiang for the design inspiration.
              Built with `}<span style={{color: "red"}}>&hearts;</span> {`and made possible with ReactJS and Bootstrap.`}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
