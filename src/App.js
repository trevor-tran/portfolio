import { useEffect, useState } from "react";

import Home from "./components/home/Home";
import SideNavbar from "./components/sidebar/SideNavbar";
import Experience from "./components/Experience";
import Project from "./components/Project";


import './App.scss';

//data
import experiences from "./data/experience";
import projects from "./data/project";

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
    <>
      <div className="App container-fluid p-0">
        <div className="row vw-100 vh-100">
          <div className="col">
            <Home />
          </div>
        </div>

        <div className="row content-container">
          <div id="sidebar" className="col vh-100">
            <SideNavbar sectionId={activeSectionId} onNavLinkClick={setActiveSectionId}/>
          </div>
          <div className="col-8">
            <section id="about" className="section-container">
              <p> Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.</p>
              <p>My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.</p>
              <p>When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds</p>
            </section>
            <section id="experience" className="section-container">
              {experiences.map((exp, i) =>
                <Experience key={i} value={exp}/>
              )}
            </section>
            <section id="projects" className="section-container">
            {projects.map((project, i) =>
                <Project key={i} value={project}/>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
