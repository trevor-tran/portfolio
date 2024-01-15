import ProjectDescription from "./ProjectDescription"

import "./Project.scss";

export default function Project({ value }) {

  return (
    <div className="individual-project container-fluid">
      <div className="pt-2">
        {`${value.date.start.toUpperCase()} - ${value.date.end.toUpperCase()}`}
      </div>
      <ProjectDescription headline={value.title} descriptions={value.descriptions} skills={value.skills}/>
    </div>
  )
}