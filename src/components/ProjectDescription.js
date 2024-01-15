import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "./ProjectDescription.scss";

export default function ProjectDescription({ headline, url, descriptions, skills }) {

  let concatedDescription = "";
  descriptions.forEach((bullet) => {
    concatedDescription = concatedDescription + bullet + " ";
  });

  return (
    <div>
      <div>
        <h5>{headline}</h5>
        {url && <span className="upward-arrow"><ArrowOutwardIcon /></span>}
      </div>
      <p>{concatedDescription}</p>
      <div className="d-flex">
        {skills.map((skill, i) =>
          <div className="skill" key={i}>{skill}</div>)}
      </div>
    </div>
  )
}