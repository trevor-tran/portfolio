import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";

import './App.scss';

function App() {
  return (
    <div className="App container-fluid p-0">
      <div className="row">
        <div className="col">
          <Home/>
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <Header/>
        </div>
      </div>
      <div className="row">
        {/* <div className="col-sm">
          <p>left</p>
        </div> */}
        <div className="col-sm">
          <div className="mid"><p>mid</p></div>
        </div>
        {/* <div className="col-sm">
          <p>right</p>
        </div> */}
      </div>
      <div className="row">
        <div className="col-sm">
          <p>footer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
