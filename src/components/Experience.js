import ProjectDescription from "./ProjectDescription";

import experiences from "../data/experience";

import "./Experience.scss";

export default function Experience({ value }) {

  return (
    <div className="individual-experience container-fluid">
      <div className="pt-2">
        {`${value.date.start.toUpperCase()} - ${value.date.end.toUpperCase()}`}
      </div>
      <ProjectDescription headline={`${value.title} @ ${value.company}`} descriptions={value.descriptions} skills={value.skills}/>
    </div>
  )
}