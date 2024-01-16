import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "./ProjectDescription.scss";

export default function ProjectDescription({ headline, url, descriptions, skills, className: parentClassName }) {

  let concatenatedDescription = "";
  descriptions.forEach((bullet) => {
    concatenatedDescription = concatenatedDescription + bullet + " ";
  });

  return (
    <>
      <div className="project-headline">
        <h5>{headline}</h5>
        {url && <span className="upward-arrow"><ArrowOutwardIcon /></span>}
      </div>
      <p>{concatenatedDescription}</p>
      <div className="d-flex flex-wrap">
        {skills.map((skill, i) =>
          <div className="skill" key={i}>{skill}</div>)}
      </div>
    </>
  )
}