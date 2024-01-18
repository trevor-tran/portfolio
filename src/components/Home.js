import {persona} from "../utils/aboutme";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "./Home.scss";
import SocialMedia from "./SocialMedia";

export default function Home() {
  return (
    <section className="home container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col text-center">
          <div className="container d-flex flex-row justify-content-center">
            <h1>Hello, I'm</h1>
            <h1 id="full-name" className="">{`${persona.name}.`}</h1>
          </div>
          <h4>{`I'm an ${persona.title}`}</h4>
          <p className="d-block d-lg-none">{persona.headline}</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
        <img src={`${process.env.PUBLIC_URL}/diagram.gif`} className="img-fluid rounded mx-auto" alt="Portfolio deployment diagram"/>
        </div>
      </div>

      <div className="row">
        <div className="col text-align-center">
          <a href={`${process.env.PUBLIC_URL}/trevor-tran-resume.pdf`} target="_blank" rel="noreferrer">View My Resume <span><ArrowOutwardIcon fontSize="small"/></span></a>
        </div>
      </div>
      <div className="row">
        <div className="col mt-5 d-block d-lg-none">
          <SocialMedia/>
        </div>
      </div>
    </section>

  )
}