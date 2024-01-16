import {persona} from "../utils/aboutme";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "./Home.scss";

export default function Home() {
  return (
    <section className="home container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col text-center">
          <div className="container d-flex flex-row justify-content-center">
            <p>Hello, I'm</p>
            <p id="full-name">{`${persona.name}.`}</p>
          </div>
          <p>{`I'm an ${persona.title}`}</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
        <img width={700} src={`${process.env.PUBLIC_URL}/diagram.gif`} className="img-fluid rounded mx-auto" alt="Portfolio deployment diagram"/>
        </div>
      </div>

      <div className="row">
        <div className="col text-align-center">
          <a href={`${process.env.PUBLIC_URL}/trevor-tran-resume.pdf`} target="_blank">View My Resume <span><ArrowOutwardIcon fontSize="small"/></span></a>
        </div>
      </div>
    </section>

  )
}