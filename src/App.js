import { useEffect, useState } from "react";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProjectDescription from "./components/ProjectDescription";

import './App.scss';

//data
import { experiences, projects, persona } from "./utils/aboutme";
import SocialMedia from "./components/SocialMedia";

function App() {
  const [activeSectionId, setActiveSectionId] = useState("");

  useEffect(() => {
    window.onscroll = () => {
      const sectionId = getActiveSectionId();
      if (activeSectionId !== sectionId) {
        setActiveSectionId(sectionId);
      }
      setNavbarSticky();
    }
  }, [])


  function getActiveSectionId() {
    let sectionId = "";
    const sections = Array.from(document.getElementsByTagName("section"));
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop) {
        sectionId = section.id;
      }
    })
    console.log("section id from getActiveSectionId ", sectionId)
    return sectionId;
  }

  function setNavbarSticky() {
    if (window.scrollY >= window.innerHeight) {
      document.getElementById("sidebar").classList.add("sticky-top");
    } else {
      document.getElementById("sidebar").classList.remove("sticky-top");
    }
  }

  return (
    <div className="App container-fluid p-0">
      <div className="row justify-content-center vw-100 vh-100">
        {/* page shown when first loaded */}
        <div className="col">
          <Home />
        </div>
      </div>

      <div className="row justify-content-center mx-2 mx-lg-auto">
        {/* left half of page: quick intro + nav links  */}
        <div id="sidebar" className="col-lg-4 align-items-end col-xxl-3 d-lg-block d-none vh-100">
          <Navbar sectionId={activeSectionId}/>
          <SocialMedia/>
        </div>

        {/* right half of the page when screen size >= bootstrap-defined large */}
        <div className="col-12 col-lg-8 col-xxl-5 offset-xxl-1">
          {/* about section */}
          <section id="about" className="section-container">
            {persona.intro.map((paragraph, i) =>
              <p key={i}>{paragraph}</p>
            )}
          </section>

          {/* experience section */}
          <section id="experience" className="section-container container-fluid">
            {experiences.map((exp, i) =>
              <div key={i} className="row project-container">
                <div className="col-xl-4 date">
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
                <div className="col-xl-4 date">
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
              {`Coded from scratch in VS Code. Built with `}<span style={{color: "red"}}>&hearts;</span>
              {` and made possible by ReactJS and Bootstrap. With love and appreciation to Brittany Chiang for the design inspiration.`}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
