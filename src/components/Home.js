import {persona} from "../utils/aboutme";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import "../assets/css/Home.scss";
import SocialMedia from "./SocialMedia";

import diagram from "../assets/images/diagram.gif";
import resume from "../assets/files/trevor-tran-resume.pdf"

export default function Home() {
  return (
    <section className="home container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="row">
        <div className="col text-center">
          <div className="container d-flex flex-row justify-content-center">
            <p className="h1 d-none d-sm-block">Hello, I'm</p>
            <p className="h1 d-block d-sm-none">I'm</p>
            <p className="h1" id="full-name">{`${persona.name}.`}</p>
          </div>
          <p className="h4">{`I'm a ${persona.title}`}</p>
          <p className="d-block d-lg-none">{persona.headline}</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
        <img src={diagram} className="img-fluid rounded mx-auto" alt="Deployed on AWS infrastructure with security and scalability"/>
        </div>
      </div>

      <div className="row">
        <div className="col text-align-center">
          <a href={resume} target="_blank" rel="noreferrer">View My Resume <span><ArrowOutwardIcon className="arrow" fontSize="small"/></span></a>
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