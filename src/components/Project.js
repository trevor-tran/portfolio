import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "./Project.scss";

export default function Project({ project }) {

  const { title, url, descriptions, skills, date } = project;

  let concatenatedDescription = "";
  descriptions.forEach((bullet) => {
    concatenatedDescription = concatenatedDescription + bullet + " ";
  });

  return (
    <div
      className={"row " + (project.url ? "project-container-link" : "project-container-no-link")}
      onClick={() => project.url ? window.open(project.url, '_blank') : null}>
      <div className="col-xl-4 date">
      {date.start.toUpperCase()} <span>&#8212;</span> {date.end.toUpperCase()}
      </div>
      <div className="col">
        <div className="d-flex">
          <p className="h5">{title}</p>
          {url && <span><ArrowOutwardIcon className="arrow" fontSize="small" /></span>}
        </div>
        <p>{concatenatedDescription}</p>
        <div className="d-flex flex-wrap">
          {skills.map((skill, i) =>
            <div className="skill" key={i}>{skill}</div>)}
        </div>
      </div>
    </div>
  )
}