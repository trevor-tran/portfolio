import {persona} from "../../utils/aboutme";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home d-flex flex-column justify-content-center align-item-center">
      <div className="row">
        <div className="col text-center">
          <div className="container d-flex flex-row justify-content-center">
            <p>Hello, I'm</p>
            <p id="full-name">{`${persona.name}.`}</p>
          </div>
          <p>{`I'm a ${persona.title}`}</p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
        <img width={700} src={`${process.env.PUBLIC_URL}/diagram.gif`} className="img-fluid rounded mx-auto" alt="Portfolio deployment diagram"/>
        </div>
      </div>

      <div className="row">
        <div className="col">
        </div>
      </div>
    </section>

  )
}