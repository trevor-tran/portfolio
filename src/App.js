import { useEffect, useState } from "react";

import Home from "./components/home/Home";
import SideNavbar from "./components/sidebar/Navbar";
import ProjectDescription from "./components/ProjectDescription";


import './App.scss';

//data
import {experiences, projects} from "./utils/aboutme";

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
        <div id="sidebar" className="navbar-container col vh-100">
          <SideNavbar sectionId={activeSectionId} onNavLinkClick={setActiveSectionId} />
        </div>

        {/* about section */}
        <div className="col-8">
          <section id="about" className="section-container">
            <p> Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
            <p>My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
            <p>When I'm not at the computer, I'm usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p>
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
        </div>
      </div>
    </div>
  );
}

export default App;
