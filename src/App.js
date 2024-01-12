import Home from "./components/home/Home";
import SideNavbar from "./components/sidebar/SideNavbar";
import './App.scss';

function App() {
  return (
    <>
      <div className="App container-fluid p-0">
        <div className="row">
          <div className="col">
            <Home />
          </div>
        </div>

        <div className="App container-fluid p-0">
          <div className="row vw-100 vw-100">
            <div className="col">
              <SideNavbar />
            </div>
            <div className="col">
              something
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SideNavbar />
          </div>
          <div className="col">
            something
          </div>
        </div>

        <div className="row">
          <div className="col">
            <SideNavbar />
          </div>
          <div className="col">
            something
          </div>
          <div className="col-sm">
            <p>footer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
